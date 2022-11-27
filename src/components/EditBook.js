import React,{useState, useEffect} from 'react'
import { getBookById , editItem} from '../service/Api';
import { useParams, useNavigate } from 'react-router-dom';
export default function EditBook() {
    const {id} = useParams();
    const navigate= useNavigate();
    const initialValue ={
        title:"",
        imgUrl:"",
        price:"",
        author:"",
        bookType:""
      }
      const [book , setBook] = useState(initialValue)
      const onValueChange =(e)=>{
        setBook({...book, [e.target.name]:e.target.value})
      }
      const update = async()=>{
        await editItem(book, id)
        navigate("/adminPannel")

      } 
      useEffect(()=>{
        getBookDataById()
      },[])

      const getBookDataById =async()=>{
        let response =  await getBookById(id)
        setBook(response.data)
      }

  return (
    <div className='EditForm'>
        
      <h1>Edit the Item</h1>
      <label htmlFor="">Img Url</label><br />
      <input type="text" placeholder='ImgUrl' name="imgUrl" value={book.imgUrl}  onChange={(e)=>onValueChange(e)}/><br />
      <label htmlFor="">Title</label><br />
      <input type="text" placeholder='Title' name="title" value={book.title} onChange={(e)=>onValueChange(e)}/><br />
      <label htmlFor="">Author</label><br />
      <input type="text" placeholder='Author' name="author" value={book.author} onChange={(e)=>onValueChange(e)}/><br />
      <label htmlFor="">Price</label><br />
      <input type="number" placeholder='Price' name="price" value={book.price} onChange={(e)=>onValueChange(e)}/><br />
      <label htmlFor="">Categry</label><br />
      <input type="text" placeholder='booktype' name="bookType" value={book.bookType} onChange={(e)=>onValueChange(e)}/><br/> 
      <br />
      <button className='btn btn-info' onClick={update}>Update</button>
    </div>
  )
}
