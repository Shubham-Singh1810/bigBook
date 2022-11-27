import React,{useState, useEffect} from 'react'
import { getBook } from "../service/Api";
import Card from './Card'
export default function Biography() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    getbookDetails();
  }, []);
  const getbookDetails = async () => {
    let response = await getBook();
    console.log(response);
    setBook(response.data);
    console.log(book);
  };
  return (
    <div className="Biography">
             <hr /><hr /><hr />
    <h1   className="btn-light"  style={{textAlign:"center"}}>Biography :</h1>
    <div className="bookList container">
    {
       book.filter((v, i)=>{
          return v.bookType === "Biography"
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
