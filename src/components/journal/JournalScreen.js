import React from 'react';
import { NotesScreen } from '../notes/NotesScreen';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {
  return (
    <div className='journal__main-content animate__animated animate__fadeIn animate__faster'>
      <Sidebar />

      <main>
        <NotesScreen />
      </main>
    </div>
  );
};
