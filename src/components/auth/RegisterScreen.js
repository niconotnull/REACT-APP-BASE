import React from 'react';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form className='animate__animated animate__fadeIn animate__faster'>
        <div className='auth__alert-error'>msgError</div>

        <input
          type='text'
          placeholder='Name'
          name='name'
          className='auth__input'
          autoComplete='off'
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
        />
        <input
          type='password'
          placeholder='Confirm Password '
          name='password2'
          className='auth__input'
        />
        <button type='submit' className='btn btn-primary btn-block mb-5'>
          Register
        </button>
        {/* 
        <Link to='/auth/login' className='link'>
          Alredy registered?
        </Link> */}
      </form>
    </>
  );
};
