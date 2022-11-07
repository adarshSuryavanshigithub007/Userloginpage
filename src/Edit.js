import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'


const Edit=()=>{
  const{id}=useParams()
  const[name,pickName]=useState("");
  const[address,pickAddress]=useState("")
  const[created,pickCreated]=useState("")
  

  const getComp = ()=>{
    const url="http://localhost:1234/company/"+id
    axios.get(url).then(response=>{
      pickName(response.data.name)
      pickAddress(response.data.address)
      pickCreated(response.data.created)
    
    })


  }

  useEffect(() => {
    getComp()
  }, [true])



  const updateComp=()=>{
    var companyinfo = {

        "name": name,
        "address":address,
        "created": created,
       
    }
    var url = "  http://localhost:1234/company/" +id;
    axios.put(url,companyinfo)
    .then(response=>{
       
      pickName("");  pickAddress(""); pickCreated("");  ;
      alert("DONE")


  })

  }

  return (
   

    <div className="container ">

    <div className="row">
      
       <div className="col-md-2 col-lg-2"></div>
       <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 bg-primary text-white rounded mt-5">
      
        <h1 className='text-center'>Create new company </h1>
       
        <form>

    <div class="form-group mb-5">
        <label for="formGroupExampleInput">Campany Name</label>
        <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder=" Enter Campany Name"
            value={name}
            onChange={obj=>pickName(obj.target.value)}/>
    </div>
    <div class="form-group mb-5">
        <label for="formGroupExampleInput2">Campany Address</label>
        <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder=" Enter Campany Address"
            value={address}
            onChange={obj=>pickAddress(obj.target.value)}/>
    </div>

    <div class="form-group mb-5">
        <label for="formGroupExampleInput2">Created By</label>
        <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Created By"
            value={created}
            onChange={obj=>pickCreated(obj.target.value)}/>
    </div>
   

    <button type="submit" class="btn btn-dark m-4" onClick={updateComp}>Submit</button>
</form>

       </div>
       <div className="col-md-2 col-lg-2"></div>
    </div>
</div>
  )
}

export default Edit;