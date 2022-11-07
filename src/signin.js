import axios from 'axios';
import React,{useState} from 'react'
import swal from 'sweetalert';


const Signin=()=>{

    const[username,pickEmail]=useState("")
   const[pass,pickPassword]=useState("")
   const[msg, updateMsg] = useState("Please Enter Login Details");
    
const checklogin = ()=>{
    if(username==""|| pass==""){
        updateMsg("please enter your email and password")
        var userStatus = false;
    }else{
            updateMsg("please validate.....")
            var userStatus = false;
            // api call 
            axios.get("  http://localhost:1234/vendor")
            .then(response=>{
                for(var i=0; i<response.data.length; i++){

                    var semail = response.data[i].email; 
                    var spass = response.data[i].password; 
                    if(username == semail && pass == spass){
                      userStatus = true;
                      updateMsg("Success : Please wait redirection...");
                      localStorage.setItem("vendorid", response.data[i].id);
                      localStorage.setItem("vendorname", response.data[i].name);
                      window.location.href="http://localhost:3000/?#/dashboard";
                      window.location.reload();
                      break;
                    }
                    
             }

             if(userStatus==false){
                updateMsg("Fail : Account Invalid or Not Exists");
            }
               
               

            })  // api call end
            swal("Success : Please wait redirection...,","Welcome-To the Adminpage");
        }
        
}




  return (
<>
<h1 class="text-center my-5   fw-bold "> <i class="fa fa-lock"></i> Login</h1>
<div className="container my-5">
    
    <div className="row">
        <span class='text-danger fs-5'>*{msg}</span>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input
                       
                        class="form-control"
          
                      onChange={obj=>pickEmail(obj.target.value)} value={username}/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={obj=>pickPassword(obj.target.value)} value={pass}/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" disabled={username.length<1} onClick={checklogin}>Submit</button>
              
            </form>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
    </div>
</div>
</>
                    
       
  )
}

export default Signin
