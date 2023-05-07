import React,{useState} from 'react';
import {auth} from './Firebase';
import { getAuth,signInWithEmailAndPassword,signOut } from 'firebase/auth';
import OtpInput from 'react-otp-input';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from 'react-router';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import "./login.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Login() {

  const [loginemail,setLoginEmail]=useState("");
  const [password,setPassword]=useState("");
  // const [user,setUser]=useState("");

  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [open, setOpen] = React.useState(false);

  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  
 
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        // toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }



  // onAuthStateChanged(auth,(currentUser)=>{
  //   setUser(currentUser);
  // });

  const navigate = useNavigate();


  
  const userLogin = async()=>{
    if (loginemail === "admin" && password === "admin") {
        navigate("/AdminPanel");
    }
    else{
    signInWithEmailAndPassword(auth, loginemail, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate("/Home")
      // ... 
   
      setOpen(true);
    
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert("sign incoreectly");
      window.location.href = '/';
  });}
  };
  const userLogOut = async () =>{
    alert("signout coreectly");
    signOut(auth).then(() => {
      // Sign-out successful.
     
    }).catch((error) => {
      // An error happened.
    });
  //   await signOut(auth);

  };
  return (
    <div className='loginbox'>
    <div className='title'>Login</div>
    <br></br>
      
   
     <input type="email"  placeholder='Email Address' required
  onChange={(event)=>{setLoginEmail(event.target.value);}}
  /><br></br><br></br>
    <input type="password"  placeholder='password' required
  onChange={(event)=>{setPassword(event.target.value);}}
  />
 
<br></br>
{/* <br></br>
<br></br>

<h1>user login</h1>
{user?.email}
<input type="submit" value="logout" onClick={userLogOut}></input> */}
<br></br>

    <input type="submit" value="login" onClick={userLogin}></input><br></br>
Developed by YPENCH Team

</div>
   
    
  )
}

export default Login