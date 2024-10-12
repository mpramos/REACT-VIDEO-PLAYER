import './App.css'



const Header =(props)=>{
  let datos=props.data
  console.log('datos ', datos);
  let {
    bienvenida,
    titulo,
    subtitulo,
    autor:{
      nombre,
      partner
    },
    fecha}=datos
  
  return (
    <header>
      <h1>{bienvenida}</h1>
      <h2>{titulo}</h2>
      <h3>{subtitulo}</h3>
      <p>
        Academia: {nombre} {partner}
      </p>
      <small>{showDate(fecha)}</small>
  </header>
  )
}
let Button =(props)=>{
 return(<button onClick={props.onClick}>{props.text}</button>)
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

  function decirAlgo() {
    alert('Hola soy el gato ninja 🐱‍👤')
  }

  return (
  <>
    <Header data={data} />
    <Peso peso={masa*gravedad}/>
    <AñosAcademia años={añosAcademia}/>
    <Status status={status}/>
    <Skills skills={skills}/>
    <Button text={'decir algo'} onClick={decirAlgo}/>
    <Button text={'decir otra cosa'} onClick={()=>alert('Hola somos dos gato ninjas 🐱‍👤🐱‍👤')}/>
  </>
  )
}

export default App
