import React, {useState,useEffect} from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { DrawerHeader } from './SideMenu';
import SideMenu from './SideMenu';
import  blog  from 'src/types/types';




export default function Sidebar() {
//   const [responseData, setResponseData] = useState<Data | null>(null);
    const { handleSubmit, control, reset } = useForm<blog >();
    const [data, setData] = useState([]);

    ;//   const [data, setData] = useState<DocData[]>([]);
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id')
    const navigate = useNavigate();
    const [textData,setTextData] = useState('')
    const  [succesMsg,setSuccesMsg] = useState('')
    const login = localStorage.getItem('login');
    const [newArticle, setNewArticle] = useState({
        header: "",
        text: "",
        user_id: ""
    });
    useEffect(() => {
        // Update user_id in newArticle when id changes
        setNewArticle((prevArticle) => ({
            ...prevArticle,
            user_id: id || '', // Use id if it exists, otherwise use an empty string
        }));
    }, [id]);

    const addArticle = () => {
        axios
            .post('http://45.155.207.232:12223/api/article/', newArticle)
            .then((response) => {
                console.log('Article created:', response.data);
                setSuccesMsg('Статья успешно создана');
                reset();
            })
            .catch((error) => {
                console.error('Error creating article:', error);
            });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewArticle((prevPromo) => ({
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
                            label="Заголовок"
                            name="header"
                            value={newArticle.header}
                            onChange={handleInputChange}
                            fullWidth
                            sx={{ marginBottom: 2 ,m: 1, width: '50%' }}

                        />
                    </div>
                    <div>
                        <TextField
                            label="Текст"
                            name="text"
                            value={newArticle.text}
                            onChange={handleInputChange}
                            fullWidth
                            sx={{ marginBottom: 2 ,m: 1, width: '50%' }}            />
                    </div>


                    <div><br />
                        <Button variant="contained" sx={{ marginBottom: 2 ,m: 1}} color="primary" onClick={addArticle}>
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