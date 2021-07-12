import React from 'react';

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer animate__animated animate__fadeIn animate__faster'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(https://i.pinimg.com/564x/87/02/5d/87025d467a9e1c6904c8c25742f972db.jpg)`,
        }}></div>

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>titulo</p>
        <p className='journal__entry-content'>cuerop</p>
      </div>
      <div className='journal__entry-date-box'>
        <span>12</span>
        <h4>dia</h4>
      </div>
    </div>
  );
};
