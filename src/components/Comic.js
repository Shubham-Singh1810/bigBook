import React,{useState, useEffect} from 'react'
import { getBook } from "../service/Api";
import Card from './Card'
export default function Comic() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    getbookDetails();
  },[book]);

  const getbookDetails = async () => {
    let response = await getBook();
    setBook(response.data);
  };
 
  return (
    <div className="Comic">
       <hr /><hr /><hr />
    <h1   className="btn-light"  style={{textAlign:"center"}}>Comic :</h1>
    <div className="bookList container">
    {
       book.filter((v, i)=>{
          return v.bookType === "Comic"
       }).map((v, i)=>{
        return (
      <Card key={i} value={v}/>
    )
       })
    }
    </div>
    </div>
  )
}

