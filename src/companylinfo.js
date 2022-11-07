import React,{useState,useEffect} from 'react'

const Companyinfo=()=>{
  const[complist,updateComp]=useState([])

  const getcomp = ()=>{
    fetch("  http://localhost:1234/company")
    .then(Response=>Response.json())
    .then(CompanyArray=>{
      updateComp(CompanyArray.reverse())
    })
  }

  useEffect(() => {
    getcomp()
  }, [true])

  return (

  <div className="container mt-5">
    <div className="row">
          <div className="col-md-2 col-lg-2"></div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 ">
                  <table class="table table-bordered table-primary  text-center">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Company Name</th>
                                <th>Created By</th>
                                <th>Created Address</th>

                            </tr>
                        </thead>
                        <tbody>
                            { complist.map((company,index)=>{ return(
                            <tr>
                                <td key={index}>{company.id}</td>
                                <td>{company.name}</td>
                                <td>{company.created}</td>
                                <td>{company.address}</td>

                            </tr>
                            ) }) }
                        </tbody>
                  </table>
            </div>
          <div className="col-md-2 col-lg-2"></div>
    </div>
</div>
  )
}

export default Companyinfo;
