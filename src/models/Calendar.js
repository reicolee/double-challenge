// @flow

import uuid from 'uuid/v4';
import { observable } from 'mobx';

import type Event from './Event';

class Calendar {
  id: string = uuid();

  @observable
  name: string = 'Calendar';

  @observable
  color: string = '#f9f9fa';

  @observable
  events: Array<Event> = [];
}

export default Calendar;
