import React,{useState,useEffect} from 'react'
import axios from 'axios';
import swal from 'sweetalert';


const Signup=()=>{
  const[name,pickName]=useState("")
   const[email,pickEmail]=useState("")
   const[password,pickPassword]=useState("")
   const[mobile,pickMobile]=useState("")
   const[msg, updatemessage] = useState("");

   const save = ()=>{
    var url = "http://localhost:1234/vendor"
    var vendorinfo = {
      "name":name,
      "email":email,
      "password":password,
      "mobile":mobile
    }
    axios.post(url,vendorinfo)
    .then(response=>{
      updatemessage(name + " ");
      pickName(""); pickEmail(""); pickPassword(""); pickMobile(""); ;


  })

  swal("Good job!", "Register Successfully for company...", "success");

   }


  return (
 <>
 
   <h1 class="text-center my-5 text-dark  fw-bold">  <i class='fa fa-user-plus'></i> Register</h1>
<div className="container my-5">
    
    <div className="row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <form class="row g-3 needs-validation" novalidate>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" onChange={obj=>pickName(obj.target.value)} value={name} />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
  <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" onChange={obj=>pickEmail(obj.target.value)} value={email}/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
  <label for="validationCustom03" class="form-label">password</label>
    <input type="text" class="form-control" onChange={obj=>pickPassword(obj.target.value)} value={password}/>
    <div class="invalid-feedback">
      Please provide a valid
  </div>
  </div>

  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
  <label for="validationCustom02" class="form-label">Mobile Number</label>
    <input type="text" class="form-control" onChange={obj=>pickMobile(obj.target.value)} value={mobile}/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>

  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
  <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  
  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
  <button class="btn btn-primary" type="submit" disabled={name.length<1} onClick={save}>Submit form</button>
  </div>
</form>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
    </div>
</div>
 </>
  )
}

export default Signup;
