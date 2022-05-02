import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/loginStyles.css';


export const RegisterScreen = () => {
  return (
    <>
         <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Register in SIEDI</h3></div>
                        <div className="card-body">
                            <form>
                              <div className="row">

                                <div className="form-floating mb-3 col-6">
                                    <input className="form-control" id="inputUserName" type="text" placeholder="name@example.com" />
                                    <label htmlFor="inputUserName ">User Name</label>                 
                                </div>

                                
                                <div className="form-floating mb-3 col-6">
                                    <input className="form-control" id="inputUserName" type="text" placeholder="name@example.com" />
                                    <label htmlFor="inputUserName">User Name</label>                                                   
                                </div>
                              </div>

                            
                      
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="inputPassword" type="password" placeholder="Password" />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="inputPassword" type="password" placeholder="Password" />
                                    <label htmlFor="inputPassword">Confirm Password</label>
                                </div>
                                <div className="form-check mb-3">
                                    <label className="form-check-label">Click to register now!</label>
                                </div>

                                <div className="d-grid gap-2">
                                    <button 
                                      className="btn btn-info" 
                                      type="button"
                                    >Register Now!!</button>
                                </div>

                           
                               
                            </form>
                        </div>
                        <div className="card-footer text-center py-3">
                            <div className="small"><Link to="/auth/login">Do You have an account? Sign In!</Link></div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
