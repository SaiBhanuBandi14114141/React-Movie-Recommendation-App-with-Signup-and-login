import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Components/Main.css'

const Login = () => {
    const [data,setdata]=useState
    (
        {
            username:'',
            password:''
        }
    )
    const {username,password}=data;

    const changehandler=(e)=>
    {
        setdata({...data,[e.target.name]:e.target.value})
    }
    function submithandler(e)
    {
        e.preventDefault();
        if(username!=='' & password!=='')
        {
            let loc_data=localStorage.getItem('loc_data');
            if(loc_data==null)
            {
                var dataObj=[];
                alert('Please Register First!!!!!!')
            }
            else
            {
                dataObj = JSON.parse(loc_data);
                let istrue=false
                for(let i=0;i<dataObj.length;i++)
                    {
                        if(username===dataObj[i]['username'] & password===dataObj[i]['password'])
                        {
                            istrue=true;
                            window.open('/movies','_self');
                        }
                    }
                if(!istrue)
                {
                    alert('Please login with correct credentials.....')
                }
            }
        }
        else
        {
            alert('Please fill your login credentials......')
        }
    }
  return (
    <div>

        <form onSubmit={submithandler}>
            <h1>Login</h1>
            <input type="text" name="username" value={username} onChange={changehandler}  placeholder='username'autoFocus/> <br></br><br></br>
            <input type="password" name="password" value={password} onChange={changehandler} placeholder='password' /> <br></br> <br></br>
            <input type="submit" name="submit" id="submit" />
        </form>
        <br/>
        <h3>Not Registered Yet!! <Link to="signup"><b><i>Register</i></b></Link></h3>

    </div>
  )
}
export default Login