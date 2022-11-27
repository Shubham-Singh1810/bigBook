import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
// import EditBook from './EditBook';
export default function Protected(props) {
    const navigate= useNavigate()
    const {AdminPannel, isLogin} = props;
    useEffect(()=>{
        if(!isLogin){
            navigate("/login")
        }
    })
  return (
    <>
      <AdminPannel/>
    </>
  )
}
