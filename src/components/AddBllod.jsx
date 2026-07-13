import React from 'react'

const AddBllod = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Doneor name</label>
                                <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                               <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" />


                        </div>
                         <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <select name="" id="" className="form-control">
                                    <option className="options">Male</option>
                                    <option className="options">Female</option>
                                    <option className="options">Other</option>
                                </select></div>
                                
                       

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">



                              <select name="" id="" className="form-control">
                                <option className="options">A+</option>
                                <option className="options">A-
                                </option>
                                <option className="options">B+</option>
                                <option className="options">B-</option>
                                <option className="options">AB+</option>
                                <option className="options">AB-</option>
                                <option className="options">O+</option>
                                <option className="options">O-</option>
                              </select>


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                              <label htmlFor="" className="form-label">Phone number</label>
                                <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">



                                          <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                  <label htmlFor="" className="form-label">City</label>
                                <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                          <label htmlFor="" className="form-label">Weight_kg</label>
                                <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                              <label htmlFor="" className="form-label">Last donation date</label>
                                <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <button className="btn btn-success">Submit</button>

                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBllod