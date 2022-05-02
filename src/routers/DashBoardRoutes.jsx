import React from 'react'
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'

import { HomeScreen } from '../components/tutorial/HomeScreen';
import { GrammarScreen } from '../components/tutorial/GrammarScreen';
import { NavBar } from '../components/ui/NavBar';
import { GrammarCategory } from '../components/tutorial/GrammarCategory';
import 'animate.css';

export const DashBoardRoutes = () => {
  return (
    <>
      <NavBar/>
  
      <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">User: </div>
                            <NavLink className="nav-link" to="/">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                HOME
                            </NavLink>
                            <div className="sb-sidenav-menu-heading">SECTIONS</div>
                            <a className="nav-link collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="bi bi-bookmark-star"></i></div>
                                
                                    GRAMMAR
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <NavLink className="nav-link" to="layout-static.html">TO BE</NavLink>
                                    
                                </nav>
                            </div>
                            <a className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#vocabularyPages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                VOCABULARY
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>


                            <div className="collapse" id="vocabularyPages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        JOBS
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" to="login.html">LEVEL 1</a>
                                            <a className="nav-link" to="register.html">LEVEL 2</a>
                                            <a className="nav-link" to="password.html">LEVEL 3</a>
                                        </nav>
                                    </div>


                                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        
                                        NATIONALITIES
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" to="401.html">LEVEL 1</a>
                                            <a className="nav-link" to="404.html">LEVEL 2</a>
                                            <a className="nav-link" to="500.html">LEVEL 3</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>

                            
                            <a className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="bi bi-volume-up"></i></div>
                                LISTENING
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>


                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        ...
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" to="login.html">...</a>
                                            <a className="nav-link" to="register.html">...</a>
                                            <a className="nav-link" to="password.html">...</a>
                                        </nav>
                                    </div>


                        
                                </nav>
                            </div>




                            <div className="sb-sidenav-menu-heading">SETTINGS</div>
                            <a className="nav-link" to="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                
                                PROFILE
                            </a>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        
                        Start SIEDI
                    </div>
                </nav>
            </div>
            
            <div id="layoutSidenav_content">

              <Routes>
                  <Route exact path="/" element={<HomeScreen />} />
                  
                  <Route exact path="/grammar" element={<GrammarScreen />} />
                  <Route exact path="/verbotobe" element={<GrammarCategory />} />
            


                  <Route 
                      path="*"
                      element={<Navigate to="/" />}
                  /> 
              </Routes>

            
            </div>
            
        </div>
      


     
    </>
  )
}
