import React, { useContext } from 'react'
import "./Homepage.css"
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from 'react';
import axios from "axios"
import { AppContext } from '../context/Parentcontext';


const Homepage = () => {
    const{state,setState}=useContext(AppContext);
    const[data,setData]=useState([]);
 
    const handleChange=(e)=>{
       setState(e.target.value);
    }
    console.log(state)

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get("https://reactnd-books-api.udacity.com/books", {
                headers: {
                  'Authorization': 'Bearer whatever-you-want'
                }
              });
              setData(response.data.books);
            } catch (error) {
              console.log(error);
            }
          };
      
          fetchData();
        }, []);
    var value=data;
    // console.log(value);
  return (
    <div>
        <div className='navbar'>
           <div style={{display:"flex",alignItems:"center"}}>
            <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4xnjgU8Zwz3bGiqQr_5sAZf9x0YcgSg2erbUXmmsvKMRpjHOKoIqAjV5IaCkkAkruG0&usqp=CAU" alt="" />
            <h3>Kalvium Books</h3>
           </div>
           <SearchIcon style={{position:"relative",left:"7%"}} />
           <input value={state} onChange={handleChange} placeholder='Search bar'  className='search-bar' type="text" />
           <button className='register-btn'>Register</button>
        </div>

        <div>
            <div className='book-container'>
                {state.length>0?
                value.filter((e)=>{
                    const filterdData=state.toLowerCase()
                    const title=e.title.toLowerCase();
                    return filterdData && title.startsWith(filterdData) && filterdData!=title;
                }).map((item)=>{
                    return(
                 <div className='card'>
                <img className='book-img' src={item.imageLinks.thumbnail}/>
                <p className='title'>{item.title}</p>
                <div className='price'>
                <p className='rating'>{!item.averageRating?"3":item.averageRating }⭐</p>
                <p>Free</p>
                </div>
                </div>
                    )
                })
                :

                
             
                
            
             data.map((item)=>(
                <div className='card'>
                <img className='book-img' src={item.imageLinks.thumbnail}/>
                <p className='title'>{item.title}</p>
                <div className='price'>
                <p className='rating'>{!item.averageRating?"3":item.averageRating }⭐</p>
                <p>Free</p>
                </div>
                </div>
                
             ))}
            </div>
        </div>
    </div>
  )
}

export default Homepage