import './App.css'



const Header =(props)=>{
  return (
    <header>
      <h1>{props.bienvenida}</h1>
      <h2>{props.titulo}</h2>
      <h3>{props.subtitulo}</h3>
      <p>
        Academia: {props.nombre} {props.partner}
      </p>
      <small>{props.fecha}</small>
  </header>
  )
}

const UserCard=(props)=>{
  return (
    <>
      <img src="https://rickandmortyapi.com/api/character/avatar/69.jpeg" alt="Imagen de Rick" />
      <h2>Academia {props.nombre} {props.partner}</h2>
    </>
  )
}

const TechList=()=>{
  const techs =['HTML','CSS','JavaScript']
  const techFormatted= techs.map(tech=> <li key={tech}>{tech}</li> )
  return techFormatted
}
const Main =(props)=>(
  <main>
    <p> Prerequisitos para iniciar en React</p>
    <ul>
      <TechList/>
    </ul>
    <UserCard nombre={props.nombre} partner={props.partner}/>
  </main>
)
const Footer=()=>{

 return (
 <footer>
    <p>Coyright 2024</p>
  </footer>
  )
}

const buttonStyles={
  padding:'10px 20px',
  background:'rgb(0,255,0)',
  border:'none',
  borderRadius:5
}

const Button =()=> <button style={buttonStyles}>action</button>


const ObtenerInforUsuario=(props)=>{
  return (
    <>
    <h1>
      {props.nombre}
      {props.apellido}
    </h1>
    <small>{props.country}</small>
    </>
  )

}
function App() {
  let bienvenida='Bienvenidos a la especialidad de React '
  let nombre='Evolutech'
  let partner='Cisco'
  return (
  <>
    <Header 
    bienvenida={bienvenida}
    titulo='Iniciando con React'
    subtitulo='React es una libreria de JavaScript'
    nombre={nombre}
    partner={partner}
    fecha='8 Oct 2014'

    />
    <Main nombre={nombre} partner={partner}/>
    <Button/>
    <Footer/>
    <ObtenerInforUsuario nombre='Juan' apellido='Ramirez' pais='Bolivia' />
  </>
  )
}

export default App
