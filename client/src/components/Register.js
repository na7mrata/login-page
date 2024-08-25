import React,{useState} from 'react'
import "./mix.css"
import { NavLink } from "react-router-dom";

const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setcPassShow] = useState(false);

    const[inpval,setInpval] = useState({
        fname:"",
        email:"",
        password:"",
        cpassword:""
    });
    console.log(inpval);

    const setVal=(e)=>{
        const{name,value}=e.target;

        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })

    }
    const addUserdata=async(e)=>{
        e.preventDefault();
        const{fname,email,password,cpassword}=inpval;
        if(fname===""){
            alert("Please enter name");
        }else if(email===""){
            alert("Please enter email");
        }else if(!email.includes("@")){
            alert("Please enter a valid email");
        }else if(password===""){
            alert("Please enter password");
        }else if(password.length<6){
            alert("Password should be at least 6 characters long");
        }else if(cpassword.length<6){
            alert("Password should be at least 6 characters long");
        }else if(cpassword !==password){
            alert("Passwords do not match");
        }

    }

  return (
    <>
     <section>
    <div className="form_data">
        <div className="form_heading">
            <h1>Sign Up</h1>
            <p>Hi, we are glad you are back.Please Sign Up</p>
        </div>
        <form>
        <div className="form_input">
            <label htmlFor="fname">Name</label>
            <input type="text"  onChange={setVal} value={inpval.fname} name='fname' id="fname" placeholder="enter your name" required/>
        </div>
        <div className="form_input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={setVal} value={inpval.email} name='email' placeholder="enter your email address" required/>
        </div>
        <div className="form_input">
            <label htmlFor="password">Password</label>
            <div className="two">
            <input type={!passShow ? "password":"text"} id="password" onChange={setVal} name='password' value={inpval.password} placeholder="enter your password" required/>
            <div className="showpass" onClick={()=>setPassShow(!passShow )}>
                {!passShow ? "Show" : "Hide"}
            </div>
            </div>
            </div>
            <div className="form_input">
            <label htmlFor="cpassword"> Confirmed Password</label>
            <div className="two">
            <input type={!cpassShow ? "password":"text"} id="cpassword" onChange={setVal} name='cpassword' value={inpval.cpassword} placeholder="enter your password" required/>
            <div className="showpass" onClick={()=>setcPassShow(!cpassShow )}>
                {!cpassShow ? "Show" : "Hide"}
            </div>
            </div>
            </div>
        <button className='btn' onClick={addUserdata}>Sign UP</button>
        <p>Already have an account?<NavLink to="/">Login</NavLink></p>
        </form>
    </div>
   </section>
    </>
  )
}

export default Register