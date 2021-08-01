import React from "react";
import NavBar from "./NavBar";

const About = () => {

    return(
        <>
            <NavBar/>
         <div className='container-fluid'>
                 <h2>Librerias utilizadas</h2>
                 <p>react-bootstrap</p>
                 <p>react-router-dom</p>
                 <p>axios</p>
                 <hr/>
                 <h2>Hook utilizados</h2>
                 <p>useHistory()</p>
                 <p>useState()</p>
                 <p>useEffect()</p>
                 <p>useParams()</p>
                 <p>useContext()</p>
                 <p>useReducer()</p>
                 <p>useLocation()</p>
                 <h2>Custom Hooks</h2>
                 <p>useStore()</p>
                 <hr/>
                 <h2>Api consumida</h2>
                 <p>url: <a href='https://superheroapi.com/'> https://superheroapi.com </a></p>
                 Para obtener el token de acceso tenés que loguearte a Facebook.
                 <hr/>
         </div>

        </>
    )
}

export default About;
