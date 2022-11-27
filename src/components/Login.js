import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login(props) {
  const navigate = useNavigate()
  const login = ()=>{
    const password = "abcd1234";
    let PassWordEntered = document.getElementById("password").value
    if(PassWordEntered==password){
    props.setLogin(true)
    navigate("/adminPannel")
    }
    else{
      alert("Incorrect Password")
    }
  }
  return (
    <div className='Login'>
    <h1>Admin Login</h1>
    <label htmlFor="userName">UserName*</label><br />
    <input type="text"  required id='userName' style={{width:"100%"}}/><br />
    <label htmlFor="password">PassWord*</label><br />
    <input type="password"  required id='password' style={{width:"100%"}}/><br /><br />
    <button className='btn btn-outline-success btn-sm' style={{width:"100%"}}  onClick={login}>login</button>
    </div>
  )
}
