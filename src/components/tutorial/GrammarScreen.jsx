import { Link } from "react-router-dom"


export const GrammarScreen = () => {
  return (

    <div className="container bg-white">
      <div className="row">

        <div className="col-lg-12 col-sm-12 coltext-center m-2">
          
          <div className="card text-center">
            <h2 className="card-header ">Grammar</h2>
            <div className="card-body">
              <h5 className="card-title ">¡Hola bienvenido! Este será tu primer contacto con el idioma ingles en este bloque 
                a prenderas los pronombres los cuales te permitirán dirigirte con propiedad con 
                terceras personas y poder entablar un primer contacto con ellas.</h5>
              <p className="card-text ">Hello welcome! This will be your first contact with the English language in this block to learn the pronouns which will allow you to properly address third parties and be able to establish a first contact with them.</p>
           
            </div>
          </div>

        </div>

      </div>

    

      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Categories</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

          <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em"><use to="#toggles2"/></svg>
            </div>
            <div>
              <h2>Verbo To Be</h2>
              <p className="text-muted ">El verbo to be es uno de los más camaleónicos del inglés, por lo que en muchas ocasiones su significado depende del contexto en el que te lo encuentres.</p>
              <Link to="/verbotobe" className="btn btn-warning">
                Start Section! 
              </Link>
            </div>
          </div>

          {/* <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em"></svg>
            </div>
            <div>
              <h2>Featured title</h2>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a to="#" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div> */}

          {/* <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em"></svg>
            </div>
            <div>
              <h2>Featured title</h2>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a to="#" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div> */}

        </div>
      </div>


    </div>
  )
}
