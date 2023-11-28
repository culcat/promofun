import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DrawerHeader } from './SideMenu';
import SideMenu from './SideMenu';
import blog from '../types/types'
import {Card, CardContent, Grid} from '@mui/material';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";



export default function DeleteBlog() {
//   const [responseData, setResponseData] = useState<Data | null>(null);

    const [data, setData] = useState([]);
    //   const [data, setData] = useState<DocData[]>([]);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [textData,setTextData] = useState('')
    const  [succesMsg,setSuccesMsg] = useState('')
    const [isEditing,setIsEditing] = useState(false)
    const [editingData,setEditingData] = useState({
        article_id:'',
        header:'',
        text:''
    })
    
  
    const handleDelete = async(id:number)=>{

        try{
            const response = axios.delete('http://45.155.207.232:12223/api/article/'+id)
            console.log(response);


        }
        catch(error){
            console.error(error);
        }
    }
    useEffect(() => {
        axios.get('http://45.155.207.232:12223/api/article/',  { httpsAgent: { rejectUnauthorized: false } })
            .then(response => {
                setData(response.data);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    useEffect(() => {
        if (!token) {
            window.location.href = '/admin/auth';
        }
    })

    const handleEdit = (jsonData: blog) => {
        setIsEditing(true);
        setEditingData({
            article_id: jsonData.article_id,
            header: jsonData.headers,  // Assuming your actual property name is 'headers'
            text: jsonData.text,
        })
    }
    const handleSave = async () => {
        try {
            const response = await axios.put(
                `http://45.155.207.232:12223/api/article/`,
                {
                    article_id:editingData.article_id,
                    header: editingData.header,
                    text: editingData.text,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response);
            setIsEditing(false);
            setSuccesMsg('Changes saved successfully');
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <Box sx={{ display: 'flex' }}>
            <SideMenu/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Grid container spacing={2}>
                    {data.map((jsonData:blog) => (

                        <Grid item key={jsonData.article_id} xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {isEditing && editingData.article_id == jsonData.article_id ? (
                                            <TextField
                                                label="Header"
                                                value={editingData.header}
                                                onChange={(e) =>
                                                    setEditingData({
                                                        ...editingData,
                                                        header: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            jsonData.headers
                                        )}
                                    </Typography>

                                    <Typography variant="body2" color="textSecondary">
                                        {isEditing && editingData.article_id == jsonData.article_id ? (
                                            <TextField
                                                label="Text"
                                                multiline
                                                rows={4}
                                                value={editingData.text}
                                                onChange={(e) =>
                                                    setEditingData({
                                                        ...editingData,
                                                        text: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            jsonData.text
                                        )}
                                    </Typography>


                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => (isEditing ? handleSave() : handleEdit(jsonData))}
                                    >
                                        {isEditing ? 'Сохранить' : 'Редактировать'}
                                    </Button>


                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={() => handleDelete(Number(jsonData.article_id))}
                                    >
                                        Удалить
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>


                    ))}



                </Grid>
            </Box>
        </Box>
    );
}