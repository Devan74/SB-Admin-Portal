import React from 'react'

function Edituser() {
  return (
    <div class="container">
    <div className='row'>
        <div className='col-lg-6'>
            <div className='form-group'>
                <label>Username</label>
                <input type={"text"} className="form-control" ></input>
            </div>
        </div>
        <div className='col-lg-6'>
            <div className='form-group'>
                <label>Email</label>
                <input type={"Email"} className="form-control" ></input>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>Country</label>
                <select className="form-control">
                    <option>India</option>
                    <option>China</option>
                    <option>America</option>
                </select>

            </div>
            
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>State</label>
                <select className="form-control">
                    <option>India</option>
                    <option>China</option>
                    <option>America</option>
                </select>

            </div>
            
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>City</label>
                <select className="form-control">
                    <option>India</option>
                    <option>China</option>
                    <option>America</option>
                </select>

            </div>
            
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>Phone</label>
                <input type={"number"} className="form-control" ></input>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>Date Of Birth</label>
                <input type={"date"} className="form-control" ></input>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>Gender</label>
                <select className="form-control">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                </select>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
       <button className='btn btn-primary'>Submit </button>
            </div>
            </div>
    </div>
</div>
  )
}

export default Edituser