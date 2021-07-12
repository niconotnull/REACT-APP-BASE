import React from 'react';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
  return (
    <div className='journal__entries animate__animated animate__fadeIn animate__faster'>
      <JournalEntry key='1' />
    </div>
  );
};
