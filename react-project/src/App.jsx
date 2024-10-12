import './App.css'



const Header =(props)=>{
  console.log('props' , props);
  
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

let Skills=(props)=> {
  const skillList= props.skills.map(skill=><li>{skill}</li>) 
  return <ol>{skillList}</ol>
}
const Status=(props)=>{
  let status= props.status? 'La academia de Evolutech está formando a estudiantes por más de dos años':'La academia de Evolutech está formando a estudiante por menos de dos años'
  return (
    <p>{status}</p>)
}


const Peso=(props)=>{
  return(<p>Props Numeros Peso{props.peso}</p>)
}

const AñosAcademia=(props)=>{
  return (<p> Evolutech tiene {props.años} años</p>)
}

function App() {
  let bienvenida='Bienvenidos a la especialidad de React ' //string
  let titulo='Iniciando con React' //string 
  let subtitulo='React es una libreria de JavaScript'
  let fecha='11 Oct 2014'
  let nombre='Evolutech'
  let partner='Cisco'
  
  let añoActual= 2024
  let añoInauguración=2021
  let añosAcademia=añoActual-añoInauguración 
  let masa=75
  const gravedad=9.81
  
  let status=añosAcademia>2 //true
  let skills=['HTML','CSS','JAVASCRIPT']
  return (
  <>
    <Header 
    bienvenida={bienvenida}
    titulo={titulo}
    subtitulo={subtitulo}
    nombre={nombre}
    partner={partner}
    fecha={fecha}
    />
    <Peso peso={masa*gravedad}/>
    <AñosAcademia años={añosAcademia}/>
    <Status status={status}/>
    <Skills skills={skills}/>
  </>
  )
}

export default App
