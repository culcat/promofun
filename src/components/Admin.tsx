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
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings'; 
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { DrawerHeader } from './SideMenu';
import SideMenu from './SideMenu';

type Data = {
  login: string;
};

interface responseType{
    name: "string";
    company: "string";
    category: "string";
    info: "string";
    promo: "string";
    url: "string";
    deadline: "string"
  }

export default function Sidebar() {
//   const [responseData, setResponseData] = useState<Data | null>(null);
  const { handleSubmit, control, reset } = useForm<responseType >();
//   const [data, setData] = useState<DocData[]>([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [textData,setTextData] = useState('')
  
  const addPromo:SubmitHandler<responseType>=async (data) => {
    try {
        const response = await axios.post('http://45.155.207.232:12223/api/promo', data);
        console.log('Успешно отправлен POST-запрос', response);
        // Очистка полей формы после успешной отправки
        reset();
      } catch (error) {
        console.error('Ошибка при отправке POST-запроса', error);
      }
  }


  
  
  useEffect(() => {
    if (!token) {
        window.location.href = '/admin/auth';
    } 
  })
      
        
      

  return (
    <Box sx={{ display: 'flex' }}>
<SideMenu/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  <DrawerHeader />
  <form onSubmit={handleSubmit(addPromo)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            label="Название"
            fullWidth
            sx={{ marginBottom: 2,m: 1, width: '50%' }}
            {...field}
          />
        )}
      />
      <Controller
        name="company"
        control={control}
        render={({ field }) => (
          <TextField
            label="Компания"
            sx={{ marginBottom: 2,m: 1, width: '50%' }}
            fullWidth
            {...field}
          />
        )}
      />
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <TextField
            label="Категория"
            sx={{ marginBottom: 2,m: 1, width: '50%' }}
            fullWidth
            {...field}
          />
        )}
      />
      <Controller
        name="info"
        control={control}
        render={({ field }) => (
          <TextField
            label="Информация"
            sx={{ marginBottom: 2,m: 1, width: '50%' }}
            fullWidth
            {...field}
          />
        )}
      />
      <Controller
        name="promo"
        control={control}
        render={({ field }) => (
          <TextField
            label="Промокод"
            sx={{ marginBottom: 2,m: 1, width: '50%' }}
            fullWidth
            {...field}
          />
        )}
      />
      <Controller
        name="url"
        control={control}
        render={({ field }) => (
          <TextField
            label="URL"
            sx={{ marginBottom: 2,m: 1, width: '50%' }}
            fullWidth
            {...field}
          />
        )}
      />
      <Controller
        name="deadline"
        control={control}
        render={({ field }) => (
          <TextField
            label="Конец"
            sx={{ marginBottom: 2,m: 1, width: '50%' }}
            fullWidth
            {...field}
          />
        )}
      />
<br />
      <Button type='submit'  sx={{ marginBottom: 2,m: 1, width: '50%' }} variant="contained" color="primary">
        Создать
      </Button>
    </form>
</Box>
    </Box>
  );
}