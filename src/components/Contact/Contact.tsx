import React from 'react';
import {useForm,SubmitHandler } from 'react-hook-form';
import Button from '@mui/material/Button';
import '../../style/style.css'

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data:FormData) => {
    console.log(data);
  }

  const password = watch('password');
  // const confirmPassword = watch('confirmPassword');
  
  return (
    < form  onSubmit={handleSubmit(onSubmit)} className='form' id="form">
         <div>
          <input type="text" 
              placeholder='Username'
              {...register('username', {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username should be at least 3 characters long',
                },
              })}
          />
         {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <input 
              type="email"
              placeholder='Email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input  
              type="password"
               placeholder='Password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password should be at least 6 characters long',
                },
              })}
          />
            {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <input  type="password"
              placeholder='Confirm Password'
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value:string) =>
                  value === password || 'Passwords do not match',
              })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <Button variant="outlined" type="submit"  sx={{marginBottom:5, marginTop:3}}>Sign up</Button>
        <Button variant="outlined" id="signUp-btn"   type="submit">Fill the form with your Google acount?</Button>
    </form>

  )
}

export default Contact



