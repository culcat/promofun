import React, {useState,useEffect} from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import axios from 'axios';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings'; 
import SendIcon from '@mui/icons-material/Send';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import { DrawerHeader } from './SideMenu';
import SideMenu from './SideMenu';


type Data = {
  login: string;
};


export default function CreateUser() {
  const [newUser, setNewUser] = useState({ login: '', password: '' });
  const [responseData, setResponseData] = useState<Data | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const token = localStorage.getItem('token');
  const navigate = useNavigate()

  const handleCreateUsers = () => {
    axios
      .post('http://45.155.207.232:12223/api/user/new', newUser, {
        params: {
          token: token,
        },
      })
      .then((response) => {
        setSuccessMessage('Пользователь успешно создан.');
        setErrorMessage(''); // Clear any previous error messages
        console.log('User created:', response.data);
      })
      .catch((error) => {
        setErrorMessage('Такой пользователь уже существует.');
        setSuccessMessage(''); // Clear any previous success messages
        console.error('Error creating user:', error);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  useEffect(() => {
    if (!token) {
      window.location.href = '/';
    } }, [token]);


  

  return (
    <Box sx={{ display: 'flex' }}>
   <SideMenu/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <form >
          <div>
            <TextField
              label="Логин"
              name="login"
              fullWidth
          sx={{ marginBottom: 2,m: 1, width: '50%' }}

              value={newUser.login}
              onChange={handleInputChange}
              
            />
          </div>
          <div>
            <TextField
              label="Пароль"
              name="password"
              value={newUser.password}
              fullWidth
          sx={{ marginBottom: 2 ,m: 1, width: '50%'}}

              onChange={handleInputChange}
              type="password"
            />
          </div>
          <div>
            <Button variant="contained"  sx={{ marginBottom: 2,m: 1, width: '50%' }} color="primary" onClick={handleCreateUsers}>
Создать            </Button>
          </div>
          {successMessage && (
          <div style={{ color: 'green' }}>{successMessage}</div>
        )}
        {errorMessage && (
          <div style={{ color: 'red' }}>{errorMessage}</div>
        )}
        </form>
        
      </Box>
    </Box>
  );
}