import './App.css'



const Header =(props)=>{
  return (
    <header>
      <h1>{props.data.bienvenida}</h1>
      <h2>{props.data.titulo}</h2>
      <h3>{props.data.subtitulo}</h3>
      <p>
        Academia: {props.data.autor.nombre} {props.data.autor.partner}
      </p>
      <small>{showDate(props.data.fecha)}</small>
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

function showDate(time){
    const meses=[
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ]
    let mes=meses[time.getMonth()]
    let año=time.getFullYear()
    let dia=time.getDate()
    return `${dia} ${mes} ${año}`

}
function App() {
  let data={
    bienvenida:'Bienvenidos a la especialidad de React ',
    titulo:'Iniciando con React',
    subtitulo:'React es una libreria de JavaScript',
    autor:{
      nombre:'Evolutech',
      partner:'Cisco'
    },
    fecha:new Date()

  }
  
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
      data={data}
    // bienvenida={bienvenida}
    // titulo={titulo}
    // subtitulo={subtitulo}
    // nombre={nombre}
    // partner={partner}
    // fecha={fecha}
    />
    <Peso peso={masa*gravedad}/>
    <AñosAcademia años={añosAcademia}/>
    <Status status={status}/>
    <Skills skills={skills}/>
  </>
  )
}

export default App
