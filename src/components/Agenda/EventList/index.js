// @flow

import React from 'react';

import SectionHeader from 'src/components/Agenda/SectionHeader';
import EventCell from 'src/components/Agenda/EventCell';

import style from './style';

/**
 * Event list container
 */

type tProps = {
  label: string,
  events: array
};

export default ({ label, events }: tProps) => (
  <div className={style.outer}>
    <SectionHeader label={label} />
    {events.map(({ calendar, event }) => (
      <EventCell key={event.id} calendar={calendar} event={event} />
    ))}
  </div>
);
