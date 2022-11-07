import React,{useState} from 'react'
import axios from 'axios';
import swal from 'sweetalert';

const Createcompany=()=>{
    const[name,pickName]=useState("");
    const[address,pickAddress]=useState("")
    const[created,pickCreated]=useState("")
    const[Status,pickStatus]=useState("")
    const[msg, updatemessage] = useState("");


   const save = ()=>{
    var url = "  http://localhost:1234/company"
    var companyinfo = {

        "name": name,
        "address":address,
        "created": created,
        "Status":Status
    }

    axios.post(url,companyinfo)
    .then(response=>{
       
         
      pickName("");  pickAddress(""); pickCreated("") ; pickStatus(""); 
  
  
    })
  

    swal("Good job!", "New company details submited Successfully  ...", "success");


   }

  return (
    <div className="container ">

    <div className="row">
       <div className="col-md-2 col-lg-2"></div>
       <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 bg-dark text-white rounded mt-5">
      
        <h1 className='text-center'>Create new company </h1>
       
        <form>

    <div class="form-group mb-5">
        <label for="formGroupExampleInput">Campany Name</label>
        <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder=" Enter Campany Name"
            onChange={obj=>pickName(obj.target.value)}/>
    </div>
    <div class="form-group mb-5">
        <label for="formGroupExampleInput2">Campany Address</label>
        <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder=" Enter Campany Address"
            onChange={obj=>pickAddress(obj.target.value)}/>
    </div>

    <div class="form-group mb-5">
        <label for="formGroupExampleInput2">Created By</label>
        <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Created By"
            onChange={obj=>pickCreated(obj.target.value)}/>
    </div>
    <div class="form-group mb-5">
        <label for="formGroupExampleInput2">Status</label>
        <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Created By"
            onChange={obj=>pickStatus(obj.target.value)}/>
    </div>


    <button type="submit" class="btn btn-primary m-4" disabled={name.length<1} onClick={save}>Submit</button>
</form>

       </div>
       <div className="col-md-2 col-lg-2"></div>
    </div>
</div>
  )
}

export default Createcompany
