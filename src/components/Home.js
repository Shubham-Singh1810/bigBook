import React, { useEffect, useState } from "react";
import { getBook } from "../service/Api";
import homeBg from "../image/homeBg.jpg";
// import homeLoading from "../image/homeLoading.gif";
import Card from "./Card";
export default function Home() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    getbookDetails();
  });
  const getbookDetails = async () => {
    let response = await getBook();
    // console.log(response);
    setBook(response.data);
    // console.log(book);
  };
  return (
    <>
    <div className="Home container">
      <div className="homeLeft">
        <div>
        <h1>"BigBook" is your all time <br /> solution for buying books <br />
          online</h1>
          <h3><b>Phone : </b>9876543210</h3>
          <h3><b>Email : </b>hittheshubham@gmail.com</h3>
          <h3><b>Address : </b>Patna, Bihar</h3>
        </div>
      </div>
      <div className="homeRight">
        <img src={homeBg} alt="" />
      </div>
    </div>
    <hr /><hr />
    <h1   className="btn-light"  style={{textAlign:"center"}}>Books Available:</h1>
    <div className="bookList container">
    {
      book.map((v , i)=>{
        return (
          <Card key={i} value={v}/>
        )
      })
    }
    </div>
    </>
  );
}
