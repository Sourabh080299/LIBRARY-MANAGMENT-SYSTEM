import React ,{ useEffect,useState} from 'react';
import Axios from 'axios'
import './search.css'
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
const Search=()=>{
   const [data, setdata] = useState({category:'',auther:'',language:'',title:''})
   const [dataincoming, setdataincoming] = useState([])
   const [booklist, setbooklist] = useState([])
   const [booklistdisplay,setbooklistdisplay] = useState("none");

   const setValue=(e)=>{
     const{name,value}=e.target;
     setdata((prev)=>{
       return{
           ...prev,
           [name]:value
       }}) 
   };
    const search=()=>{
     console.log('clicked.............')
     Axios.post('http://localhost:3001/user/search',{category:data.category,auther:data.auther,language:data.language,title:data.title}).then(
          (response)=>{
             console.log(response.data,'......>>...>>..>>')
             setdataincoming(response.data)
          })
    }
    return<>
    <div className='search'>
    <h1><SearchIcon></SearchIcon>Search books</h1>
    <hr></hr>
    <br></br>
          <form action=''>
           
           <label for='category'>Select Category</label><br></br>
           <input type='text' placeholder='Enter book category' name='category' onChange={setValue}></input>
           <br></br>
           <label for='auther'>Select Auther</label><br></br>
           <input type='text' placeholder='Enter book auther' name='auther' onChange={setValue}></input>
           <br></br>
           <label for='language'>Select Language</label><br></br>
           <input type='text' placeholder='Enter book language' name='language' onChange={setValue}></input>
           <br></br>
           <label for='title'>Select Title</label><br></br>
           <input type='text' placeholder='Enter book title' name='title' onChange={setValue}></input>
           <br></br>
             <Button onClick={search} type='submit'><SearchIcon></SearchIcon>Search</Button>
           </form>
    </div>
          </>
}
export default Search;