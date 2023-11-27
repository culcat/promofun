import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DrawerHeader } from './SideMenu';
import SideMenu from './SideMenu';
import blog from '../types/deleteTypes'
import {Card, CardContent, Grid} from '@mui/material';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";



export default function DeleteBlog() {
//   const [responseData, setResponseData] = useState<Data | null>(null);

    const [data, setData] = useState([]);
    ;//   const [data, setData] = useState<DocData[]>([]);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [textData,setTextData] = useState('')
    const  [succesMsg,setSuccesMsg] = useState('')
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
                                        {jsonData.headers}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {jsonData.text}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {jsonData.user_id}
                                    </Typography>

                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={() => handleDelete(jsonData.article_id)}
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