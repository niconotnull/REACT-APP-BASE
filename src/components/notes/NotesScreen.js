import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NotesScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />
      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
          name='title'
        />
        <textarea
          placeholder='What append today'
          className='notes__textarea'
          name='body'></textarea>

        <div className='notes__image'>
          <img
            src='https://i.pinimg.com/564x/87/02/5d/87025d467a9e1c6904c8c25742f972db.jpg'
            alt='asdsdsds'
          />
        </div>
      </div>
      <button className='btn btn-danger'>Delete</button>
    </div>
  );
};
