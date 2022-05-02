import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/HomeStyles.css';

export const HomeScreen = () => {
  return (
    <>
     
        
        {/* contenido */}
        <div className="container fondoCard ">
            <div className="row">
                <div className="col center">
                    <div className="card fondoCard">
                        <img className="card-img-top imgEnglish mt-2" src="https://res.cloudinary.com/dwo3itb6v/image/upload/v1650838716/SIEDI_od7abd.png" alt="Card image cap"/>
                        <div className="card-body text-center">
                            
                            <h3>Smart english distance learning system.</h3>  
                            <p>
                                Start learning from scratch to expert, with our free English teaching platform, communicate with your friends more easily.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container ">
            <div className="row mt-2 ">
                <div className="card col-sm-12 col-md-6 col-lg-4 text-center p-3">
                    <h2>GRAMMAR</h2>
                    <h5>Learn with different grammar exercises that will help you improve your writing in SIEDI.</h5>
                    <hr />  
                    <p>Aprende con diferentes ejercicios de gramática que te ayudarán a mejorar tu redacción en SIEDI.</p>
                    
                    <Link 
                        className="btn btn-outline-info" 
                        to="/grammar"

                    >Start Grammar</Link >
             
                </div>

                <div className="card col-sm-12 col-md-6 col-lg-4 text-center text-muted bgVocabulary p-3 ">
                    <h2>VOCABULARY</h2>
                    <h5>The objective of these exercises will be to increase your vocabulary so that your conversations are more fluid in your daily life.</h5>
                    <hr />
                    <p>El objetivo de estos ejercicios será aumentar tu vocabulario para que tus conversaciones sean más fluidas en tu día a día.</p>
                    <Link 
                        className="btn btn-outline-info bottom" 
                        to="/grammar"

                    >Start Grammar</Link >
                </div>

                <div className="card col-sm-12 col-md-6 col-lg-4 text-center ">
                    <h2>LISTENING</h2>
                    <h5>With SIEDI you can learn to communicate more easily with your friends with our free classes start now.</h5>
                    <hr />
                    <p>Con SIEDI puedes aprender a comunicarte más fácilmente con tus amigos con nuestras clases gratuitas empieza ya.</p>
                    <Link 
                        className="btn btn-outline-info" 
                        to="/grammar"

                    >Start Grammar</Link >
                </div>

                
            </div>
        
            
        </div>
    </>
  )
}
