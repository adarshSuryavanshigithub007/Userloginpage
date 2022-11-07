import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

const Companylist = () => {
    const [complist, updateComp] = useState([])
    const [buttonText, setButtonText] = useState('Approve');

    const getcomp = () => {
        fetch("  http://localhost:1234/company")
            .then(Response => Response.json())
            .then(CompanyArray => {
                updateComp(CompanyArray.reverse())
            })
    }

    useEffect(() => {
        getcomp()
    }, [true])

    const handleClick = () => {
        setButtonText('Approved');
    }

    const deletecamp = (campid) => {
        var url = "  http://localhost:1234/company/" + campid
        axios .delete(url)
             .then(Response => {

                getcomp();
            })
    }

    return (
  
        <div className = "container" > 
         <div className="row">
           <div className="col-md-2 col-lg-2 col-xl-2"></div>
           <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 ">
                <table class="table table-bordered table-dark  text-center">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Company Name</th>
                            <th>Created By</th>
                            <th>Created Address</th>
                            <th>Created Status</th>
                            <th colSpan={3}>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            complist.map((company, index) => {
                                return (
                                    <tr>
                                        <td key={index}>{company.id}</td>
                                        <td>{company.name}</td>
                                        <td>{company.created}</td>
                                        <td>{company.address}</td>
                                         <td><button className="btn btn-warning" onClick={handleClick.bind(this,company.id)}>{company.Status}</button></td>
                                        
                                        <td>
                                            <Link to={`/${company.id}/editcomp`} className='btn btn-info'>
                                                Edit</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={deletecamp.bind(this, company.id)}>Delete</button>
                                        </td>
                                       
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2"></div>
            
          
          </div>
            
            
        </div>


    )
}

export default Companylist