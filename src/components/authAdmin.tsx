import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SideMenu from './SideMenu';
import { FormData } from 'src/types/types';

const Auth: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [accData,setAccData] = useState<string|null>(null)

  useEffect(() => {
    // Check for the token in local storage when the component loads
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      navigate('/admin'); // Redirect to /admin if the token is found
    }
  }, [navigate]);

  const fetchData = async (token: string) => {
    try {
      const response = await axios.get(
          `http://45.155.207.232:12223/api/user/get?token=${token}`,
          { httpsAgent: { rejectUnauthorized: false } }
      );
      setAccData(response.data);
      console.log(response.data);
      localStorage.setItem('id', response.data.id);
      localStorage.setItem('login', response.data.login);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.get(
          'http://45.155.207.232:12223/api/user/auth',
          {
            params: {
              login: data.username,
              password: data.password,
            },
          }
      );

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          fetchData(storedToken);
          navigate('/admin');
        }
      }
    } catch (error) {
      console.error('Authentication error', error);
      setError('Authentication failed');
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Авторизация</h3>
        <div>
          <Controller
            name="username"
            control={control}
            rules={{ required: 'Username is required' }}
            render={({ field }) => (
              <TextField {...field} label="Логин" variant="outlined" fullWidth />
            )}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <br />
        <div>
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Пароль"
                type="password"
                variant="outlined"
                fullWidth
              />
            )}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <br />
        <Button type="submit"  variant="contained" color="primary">
Войти        </Button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Auth;