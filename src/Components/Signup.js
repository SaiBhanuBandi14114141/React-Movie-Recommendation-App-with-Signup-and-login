import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Main.css'

const Signup = () => {
    const [data,setdata]=useState
    (
        {
            username:'',
            email:'',
            password:'',
            confirm_password:''
        }
    )
    const{username,email,password,confirm_password}=data;

    function change_handler(e)
    {
        setdata({...data,[e.target.name]:e.target.value})
    }
    function submit_handler(e)
    {
        e.preventDefault();
        if(username!=='' & email!=='' & password!=='' & password===confirm_password)
        {
            alert("Signup is Successfully!!!");
            window.open('/','_self')
            let loc_data=localStorage.getItem('loc_data')
            if(loc_data==null)
            {
                var dataObj=[];
            }
            else
            {
                dataObj.JSON.parse(loc_data)
            }
            let myObj=
            {
                username:username,
                email:email,
                password:password,
                confirm_password:confirm_password
            }
            dataObj.push(myObj);
            localStorage.setItem("loc_data",JSON.stringify(dataObj))
        }
        else
        {
            alert('Please fill all fields and make sure password and confirm password is same')
        }
    }

  return (
    <div>

        <form onSubmit={submit_handler}>
        <h1>Signup</h1>
        <input type="text" name='username' value={username} onChange={change_handler} placeholder='username' autoFocus></input> <br/> <br/>
        <input type="email" name='email' value={email} onChange={change_handler} placeholder='email'></input> <br/> <br/>
        <input type="password" name='password' value={password} onChange={change_handler} placeholder='password'></input> <br/> <br/>
        <input type="password" name='confirm_password' value={confirm_password} onChange={change_handler} placeholder='confirm-password'></input> <br/> <br/>
        <input type="submit" id="submit"/>
        </form>
        <br/>
        <h3>Already Registered! <Link to="/"><i><b>Login</b></i></Link></h3>

    </div>
  )
}
export default Signup