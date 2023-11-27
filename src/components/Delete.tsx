import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DrawerHeader } from './SideMenu';
import SideMenu from './SideMenu';
import jsonData from "../types/deleteTypes";



export default function Delete() {
//   const [responseData, setResponseData] = useState<Data | null>(null);

    const [data, setData] = useState([]);
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