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
import jsonData, { responseType } from 'src/types/types';
import { Data } from 'src/types/types';



export default function Sidebar() {
//   const [responseData, setResponseData] = useState<Data | null>(null);
  const { handleSubmit, control, reset } = useForm<responseType >();
  const [data, setData] = useState([]);
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
  const handleDelete = async(id:number)=>{
      
    try{
    const response = axios.delete('http://45.155.207.232:12223/api/promo/'+id)
    console.log(response);


     }
    catch(error){
      console.error(error);
    }
    }
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
useEffect(() => {
  axios.get('http://45.155.207.232:12223/api/promo/',  { httpsAgent: { rejectUnauthorized: false } })
  .then(response => {
    setData(response.data); 
    const allCards = response.data;

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}, []);

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
        <div className="actions-grid">
      {data.map((jsonData:jsonData) => (

              <div className="actions-grid__col">
            
                  <div className="actions-grid-item">
                      <div
                          className="actions-grid-item__image"
                          style={{ backgroundImage: `url(${jsonData.img})` }}
                      ></div>
                      {/* <img src={jsonData.img} ClassName="actions-grid-item__image" /> */}
                      <div className="actions-grid-item__content">
                          <div className="actions-grid-item__main">
                              <div className="actions-grid-item__brand">
                                  
                                  <img className="actions-grid-item__logo" src={jsonData.logo} />
                                  <div className="actions-grid-item__brand-info">
                                      <h4 className="actions-grid-item__name">{jsonData.company}</h4>
                                      <p className="actions-grid-item__category">
                                          {jsonData.category}
                                      </p>
                                  </div>
                              </div>
                              <span className="actions-grid-item__deadline">
                                  {jsonData.deadline}{" "}
                              </span>
                          </div>
                          <p className="actions-grid-item__info">
                              {jsonData.name}
                          </p>
                          <button
                              className="actions-grid-item__button"
                              data-toggle-popup={932488}
                              onClick={() => handleDelete(jsonData.promo_id)
                              }                          >
                             Удалить
                          </button>
                      </div>
                    
                  </div>
                 
             </div>

         ))}  
         
         
     
         </div>
</Box>
    </Box>
  );
}