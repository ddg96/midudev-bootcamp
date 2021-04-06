import './App.css';
import Mensaje from './Mensaje.js'


const Descripcion = () =>{
  return <p>Esta es la descripción de mi mensaje de prueba</p>
}

const Avatar = (src, size) =>{
  return (
  <img className={size ? ''} src={src}></img>

  )
}

const App = () => {  
  return (
    <div className="App">
       <Mensaje color ='red' message='Estamos trabajando'/>
       <Mensaje color = 'blue'message='En un curso'/>
       <Mensaje message='de react'/>
       <br/>
       <Descripcion />     
    </div>
  )
}

export default App
