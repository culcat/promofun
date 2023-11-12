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
import { responseType } from 'src/types/types';
import { Data } from 'src/types/types';



export default function Sidebar() {
//   const [responseData, setResponseData] = useState<Data | null>(null);
  const { handleSubmit, control, reset } = useForm<responseType >();
  const [newPromo, setNewPromo] = useState<responseType>({
    name: "",
    company: "",
    category: "",
    info: "",
    promo: "",
    url: "",
    deadline: "",
  });
  ;//   const [data, setData] = useState<DocData[]>([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [textData,setTextData] = useState('')
  const  [succesMsg,setSuccesMsg] = useState('')
  
const addPromo = () => {
  axios
    .post('http://45.155.207.232:12223/api/promo/', newPromo)
    .then((response) => {
      console.log('Promo created:', response.data);
      setSuccesMsg("Промокод успешно создан")
      reset();
    })
    .catch((error) => {
      console.error('Error creating promo:', error);
    });
};


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPromo((prevPromo) => ({
      ...prevPromo,
      [name]: value,
    }));
  };
  
  
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
  <form >
          <div>
            <TextField
              label="Название"
              name="name"
              value={newPromo.name}
              onChange={handleInputChange}
              fullWidth
              sx={{ marginBottom: 2 ,m: 1, width: '50%' }}
              
            />
          </div>
          <div>
            <TextField
              label="Компания"
              name="company"
              value={newPromo.company}
              onChange={handleInputChange}
              fullWidth
              sx={{ marginBottom: 2 ,m: 1, width: '50%' }}            />
          </div>
          <div>
            <TextField
              label="Категории"
              name="category"
              value={newPromo.category}
              onChange={handleInputChange}
              fullWidth
              sx={{ marginBottom: 2 ,m: 1, width: '50%' }}            />
          </div>
          <div>
            <TextField
              label="Инфо"
              name="info"
              value={newPromo.info}
              onChange={handleInputChange}
              fullWidth
              sx={{ marginBottom: 2 ,m: 1, width: '50%' }}            />
          </div>
          <div>
            <TextField
              label="Промо"
              name="promo"
              value={newPromo.promo}
              onChange={handleInputChange}
              fullWidth
              sx={{ marginBottom: 2 ,m: 1, width: '50%' }}            />
          </div>
                 <div>
            <TextField
              label="Ссылка"
              name="url"
              value={newPromo.url}
              onChange={handleInputChange}
              fullWidth
              sx={{ marginBottom: 2 ,m: 1, width: '50%' }}            />
          </div>
                 <div>
            <TextField
              label="Конец"
              name="deadline"
              value={newPromo.deadline}
              onChange={handleInputChange}
              fullWidth
              sx={{ marginBottom: 2 ,m: 1, width: '50%' }}            />
          </div>
          <div><br />
            <Button variant="contained" sx={{ marginBottom: 2 ,m: 1}} color="primary" onClick={addPromo}>
Создать            </Button>
          </div>
          {succesMsg && (
          <div style={{ color: 'green' }}>{succesMsg}</div>
        )}
        </form>
</Box>
    </Box>
  );
}