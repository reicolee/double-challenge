// @flow

import React, { Component } from 'react';
import { DateTime } from 'luxon';
import { computed, observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import greeting from 'lib/greeting';

import type Account from 'src/models/Account';

import EventList from './EventList';
import Select from './Select';
import ToggleButton from './ToggleButton';

import style from './style';

/**
 * Agenda component
 * Displays greeting (depending on time of day)
 * and list of calendar events
 */

type tProps = {
  account: Account
};

@inject('account')
@observer
class Agenda extends Component<tProps> {
  @observable selectedCalendar: string = 'all';
  @observable ByDepartment: boolean = false;
  @observable currentTime: object = DateTime.local();

  /**
   * Set a timer to update current hour by using milliseconds calculated from
   * the difference between the end of current hour and current time
   * This ensures the title to update if the component stays static
   */
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.updateTimeInterval(),
      this.differenceFromNextHour
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  @computed
  get differenceFromNextHour(): number {
    const endOfCurrHour = this.currentTime.endOf('hour');
    const diffFromNow = endOfCurrHour.diff(this.currentTime).valueOf();
    return diffFromNow;
  }

  @computed
  get hour(): number {
    return this.currentTime.hour;
  }

  /**
   * Return events from all calendars, sorted by date-time.
   * Returned objects coain both Event and corresponding Calendar
   */
  @computed
  get events(): Array<{ calendar: Calendar, event: Event }> {
    const { calendars } = this.props.account;
    const events = (this.selectedCalendar !== 'all'
      ? calendars.filter(calendar => calendar.id === this.selectedCalendar)
      : calendars
    )
      .map(calendar => calendar.events.map(event => ({ calendar, event })))
      .flat();

    // Sort events by date-time, ascending
    events.sort((a, b) => a.event.date.diff(b.event.date).valueOf());

    return events;
  }

  /**
   * - Return events categorized by departments, sorted by date-time.
   * - Return an object with KEY as the string of the department name,
   * and value as an array of Event Objects contained by both Event
   * and Corresponding Calendar
   */
  @computed
  get eventsByDepartment(): { [department: string]: Array<Event> } {
    const departments = {};
    this.events.forEach(event => {
      const { department } = event.event;
      if (departments[department]) {
        departments[department].push(event);
      } else {
        departments[department] = [event];
      }
    });

    return departments;
  }

  updateTimeInterval = () => {
    this.currentTime = DateTime.local();
    clearInterval(this.intervalID);
    this.intervalID = setInterval(
      () => this.updateTimeInterval(),
      this.differenceFromNextHour
    );
  };

  handleSelect = e => {
    e.preventDefault();
    this.selectedCalendar = e.target.value;
  };

  handleToggle = e => {
    this.ByDepartment = !this.ByDepartment;
  };

  render() {
    return (
      <div className={style.outer}>
        <div className={style.container}>
          <div className={style.header}>
            <span className={style.title}>{greeting(this.hour)}</span>
            <Select
              defaultValue="all"
              defaultLabel={'Show All Calendars'}
              selectOptions={this.props.account.calendars}
              onChange={this.handleSelect}
            />
            <div>
              <ToggleButton
                name="groupByDepartment"
                checkedLabel="By Department"
                uncheckedLabel="By Department"
                checked={this.ByDepartment}
                onChange={this.handleToggle}
              />
              {this.ByDepartment ? (
                Object.keys(this.eventsByDepartment)
                  .sort()
                  .map(department => (
                    <EventList
                      key={department}
                      label={
                        department === 'undefined' ? 'Micellaneous' : department
                      }
                      events={this.eventsByDepartment[department]}
                    />
                  ))
              ) : (
                <EventList label={'All Departments'} events={this.events} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Agenda;
