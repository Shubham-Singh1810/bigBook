import axios from "axios";

// const API_URL = "https://shubham-singh1810.github.io/bookapi/db.json"
 const API_URL = "http://localhost:3002/book"


// post request
export const addBook = async(data)=>{
    try{
         return await axios.post(API_URL, data)
    }
    catch (error){
         console.log("erroe", error.message);
    }
}


// get request
export const getBook = async()=>{
    try{
         return await axios.get(API_URL)
    }
    catch (error){
         console.log("error while calling get book api", error.message);
    }
}


// get request by id
export const getBookById = async(data)=>{
     try{
          return await axios.get(`${API_URL}/${data}`)
     }
     catch (error){
          console.log("error while calling get book by id api", error.message);
     }
}


// put request
export const editItem = async(data, id)=>{
     try{
          return await axios.put(`${API_URL}/${id}`, data)
     }
     catch (error){
          console.log("error while calling put book by id api", error.message);
     }
}


// delete request
export const deleteBook = async(id)=>{
     try{
          return await axios.delete(`${API_URL}/${id}`)
     }
     catch (error){
          console.log("error while calling delete book by id api", error.message);
     }
}



