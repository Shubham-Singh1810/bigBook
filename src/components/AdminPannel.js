import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../service/Api";
import { getBook } from "../service/Api";
import { deleteBook } from "../service/Api";
import { Link } from "react-router-dom";
export default function AdminPannel() {
  const navigate = useNavigate();

  const [getbookFromApi, setGetBook] = useState([]);

  useEffect(() => {
    getbookDetails();
  }, []);

  const getbookDetails = async () => {
    let response = await getBook();
    setGetBook(response.data);
  };


  const logout = () => {
    navigate("/");
  };

  const AddNew = () => {
    if (!showAddNew) {
      setShowAddNew(true);
      setAddNew("-");
    } else {
      setShowAddNew(false);
      setAddNew("Add New");
    }
  };

  const [showAddNew, setShowAddNew] = useState(false);
  const [AddNewNav, setAddNew] = useState("Add New");

  const initialValue = {
    title: "",
    imgUrl: "",
    price: "",
    author: "",
    bookType: "",
  };

  const [book, setBook] = useState(initialValue);

  const onValueChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    setShowAddNew(false);
    setAddNew("Add New");
    await addBook(book);
    getbookDetails()
  };

  const deleteItem= async(id)=>{
      await deleteBook(id)
      getbookDetails()
  }

  
  return (
    <><hr /><hr /><hr /><hr />
    <div className="AdminPage container my-2">
      <div className="adminNav" >
        <div className="greet">
           <h2 style={{color:"gold"}}>Welcome to the Admin Pannel</h2> 
        </div>
        <div className="right">
         <button className="btn btn-sm btn-primary mx-1 my-1"  onClick={AddNew}>{AddNewNav}</button>
        <button className="btn btn-sm btn-danger mx-1 my-1" onClick={logout}>logout</button>
        </div>
      </div>

      {showAddNew ? (
        <div className="Addform">
          <h1>Add a New Item</h1>
          <label htmlFor="">ImgUrl</label><br />
          <input
            type="text"
            placeholder=""
            name="imgUrl"
            onChange={(e) => onValueChange(e)}
          />
          <br />
          <label htmlFor="">Title</label><br />
          <input
            type="text"
            placeholder=""
            name="title"
            onChange={(e) => onValueChange(e)}
          />
          <br />
          <label htmlFor="">Author</label><br />
          <input
            type="text"
            placeholder=""
            name="author"
            onChange={(e) => onValueChange(e)}
          />
          <br />
          <label htmlFor="">Price</label><br />
          <input
            type="number"
            placeholder=""
            name="price"
            onChange={(e) => onValueChange(e)}
          /> 
          <br />
          <label htmlFor="">Categery</label><br />
          <input
            type="text"
            placeholder=""
            name="bookType"
            onChange={(e) => onValueChange(e)}
          /><br/><br />
          <button className="btn btn-outline-success" style={{width:"100%"}} onClick={submit}>Submit</button>
        </div>
      ) : (
        <div>
          {getbookFromApi.map((v , i) => {
            return (
              <div className="adminBookList" >
              <div className="left">
                <span><b>{i+1} : </b> {v.title}</span>
                </div>
                <div className="right">
                <button className="btn btn-sm btn-outline-success mx-2">{v.price}  &#8377;</button>
                <Link to={`/editBook/${v.id}`} className="btn btn-sm btn-info mx-1">update</Link>
                <button onClick={()=>deleteItem(v.id)} className="btn mx-1 btn-sm btn-outline-danger">Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <hr />
    </div>
    </>
  );
}
