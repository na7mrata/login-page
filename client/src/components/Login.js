import React,{useState} from "react"
import { NavLink } from "react-router-dom";
import "./mix.css"

const Login = () => {
    const [passShow, setPassShow] = useState(false);
    const[inpval,setInpval] = useState({
        email:"",
        password:"",
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
    const loginUser=(e)=>{
        e.preventDefault();
        const{email,password}=inpval;
        if(email===""){
            alert("Please enter email");
        }else if(!email.includes("@")){
            alert("Please enter a valid email");
        }else if(password===""){
            alert("Please enter password");
        }else if(password.length<6){
            alert("Password should be at least 6 characters long");
        }else{
            console.log("user registration successful")
        }

    }
  return (
   <>
   <section>
    <div className="form_data">
        <div className="form_heading">
            <h1>Welcome Back,Log In</h1>
            <p>Hi, we are glad you are back.Please login</p>
        </div>
        <form>
        <div className="form_input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={setVal} value={inpval.email} name="email" placeholder="enter your email address" required/>
        </div>
        <div className="form_input">
            <label htmlFor="email">Password</label>
            <div className="two">
            <input type={!passShow ? "password":"text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder="enter your password" required/>
            <div className="showpass" onClick={()=>setPassShow(!passShow )}>
                {!passShow ? "Show" : "Hide"}
            </div>
            </div>
           
            
        </div>
        <button className='btn' onClick={loginUser}>Login</button>
        <p>Don't hava an Account?<NavLink to="/register">Sign Up</NavLink></p>
        </form>
    </div>
   </section>
   </>
  )
}

export default Login