import React from 'react'
import { Link } from 'react-router-dom'

export const GrammarCategory = () => {
  return (
    <div className="container bg-white">
    <div className="row">

      <div className="col-lg-12 col-sm-12 coltext-center m-2">
        
        <div className="card text-center">
          <h2 className="card-header ">Verbo To Be</h2>
          <div className="card-body">
            <h5 className="card-title ">¡Hola bienvenido! Este será tu primer contacto con el idioma ingles en este bloque 
              a prenderas los pronombres los cuales te permitirán dirigirte con propiedad con 
              terceras personas y poder entablar un primer contacto con ellas.</h5>
            <p className="card-text ">Hello welcome! This will be your first contact with the English language in this block to learn the pronouns which will allow you to properly address third parties and be able to establish a first contact with them.</p>
         
          </div>
        </div>

      </div>

    </div>

  


        <h2 className="pb-2 border-bottom text-muted">Read the next text</h2>
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                <div className="card-body">
                    <ul>
                        <li>Siempre use un pronombre sujeto (usted, él, etc.) con un verbo, por ejemplo.es una escuela NO es una escuela Ellos son maestros. NO son maestros.</li>
                        <li>Siempre use mayúscula I, por ejemplo, él es Mike y yo soy Sally NO soy Sally con otros pronombres solo use una letra mayúscula cuando sea la primera palabra en una oración.</li>
                        <li>Tu = singular y plural.</li>
                        <li>Úsala para un hombre, ella para una mujer y ella para una cosa.</li>
                        <li>Úsalos para las personas y las cosas.</li>                    
                    </ul>

                    <h5>Contracciones</h5>
                    <ul>
                        <li>Contracciones = falta una letra. Por ejemplo, `m = am</li>
                        <li> Usamos contracciones en conversaciones y en escritura informal. p.ej. un correo electrónico a un amigo.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <h5>PositiveForm</h5>
            <table className="table table-primary table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full form</th>
                    <th scope="col">Contraction</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><b>I am</b> your teacher</td>
                    <td><b>I`m</b> you teacher</td>
                
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td><b>You are</b> in room 7</td>
                    <td><b>You`re</b> in room 7</td>
                
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td><b>He is</b> Mike.</td>
                    <td><b>He`s</b> Mike </td>
                
                </tr>     <tr>
                    <th scope="row">2</th>
                    <td><b>She is </b>Hannah.</td>
                    <td><b>She`s </b>Hannah</td>
                
                </tr>     <tr>
                    <th scope="row">2</th>
                    <td><b>It is</b> a school</td>
                    <td><b>It`s </b>a school</td>
                
                </tr>     <tr>
                    <th scope="row">2</th>
                    <td><b>We are </b>students</td>
                    <td><b>We`re</b> students </td>
                
                </tr>     <tr>
                    <th scope="row">2</th>
                    <td><b>You are</b> in Class 2</td>
                    <td><b>You`re</b> In Class 2</td>
                
                </tr>     <tr>
                    <th scope="row">2</th>
                    <td><b>They are</b> teachers </td>
                    <td><b>They`re</b> teachers</td>
                
                </tr>
          
            </tbody>
            </table>

                
            </div>



      


        </div>
 


  </div>
  )
}
