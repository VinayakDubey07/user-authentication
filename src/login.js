import React, { useState } from "react";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './login.css';
import swal from 'sweetalert';
function Login(){

const[username,setUsername]=useState('')
const[password,setPassword]=useState('')

function validate(event){
    event.preventDefault();
    if(username=='vinayak' && password=='bmsce'){
        swal('Login successful');
    }
    else{
        swal('Login Failed');
    }
}
    return <div>
        <div className='row justify-content-center'>

           <div className='col-md-4'>
           <h1>User Authentication</h1>
<form onSubmit={validate}>
    <input type="text" placeholder='username' className='form-control' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>

    <input type="text" placeholder='password' className='form-control' value={password}
    onChange={(e)=>{setPassword(e.target.value)}}/>
    <input type="submit"  className="btn btn-primary"/>
</form>

        </div>




</div>
    </div>
}
export default Login;