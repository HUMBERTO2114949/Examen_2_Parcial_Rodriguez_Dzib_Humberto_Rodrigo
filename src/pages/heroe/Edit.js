import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"
import programador from '../img/programador.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../acercade.css";


const Edit = () => {
    const [ heroe, setHeroe ] = useState('')
    const [ nombre, setNombre ] = useState('')
    const [ edad, setEdad ] = useState(0)
    const [ sexo, setSexo ] = useState('')
    const [ origen, setOrigen ] = useState('')
    const [ caracteristicas, setCaracteristicas ] = useState('')

    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const supers = doc(db, "superheroe", id)
        const data = { heroe: heroe, nombre: nombre, edad: edad, sexo: sexo, origen: origen, caracteristicas: caracteristicas }
        await updateDoc(supers, data)
        navigate('/')
    }

    const getHeroeById = async (id) => {
        const supers = await getDoc( doc(db, "superheroe", id) )
        if(supers.exists()) {
            setHeroe(supers.data().heroe)   
            setNombre(supers.data().nombre)   
            setEdad(supers.data().edad)
            setSexo(supers.data().sexo)
            setOrigen(supers.data().origen)
            setCaracteristicas(supers.data().caracteristicas)
        }else{
            console.log('El heroe no existe')
        }
    }

    useEffect( () => {
        getHeroeById(id)
        // eslint-disable-next-line
    }, [])

    return (
        <>
    <div class="container">
  <div class="row">
    <div class="col">
    <h1>Heroe</h1>
                 <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre Real</label>
                        <input
                            value={heroe}
                            onChange={ (e)=> setHeroe(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                            pattern="[a-zA-Z ]{2,254}"
                            title='Solo letras, sin numero ni caracteres especiales'
                        />                 
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre Heroe</label>
                        <input
                            value={nombre}
                            onChange={ (e)=> setNombre(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                            pattern="[A-Za-z0-9]+"
                            title='Solo numeros y letras'
                        />                 
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Edad</label>
                        <input
                            value={edad}
                            onChange={ (e)=> setEdad(e.target.value)} 
                            type="number"
                            className='form-control'
                            required
                            min={1}
                            title="Minimo 1, sin numeros negativos o cero"
                        />                 
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Sexo</label><br></br>
              Hombre<input type="radio" name='sexo' value='Hombre' onChange={(e) => setSexo(e.target.value)} /> <br></br>
              Mujer<input type="radio" name='sexo' value='Mujer' onChange={(e) => setSexo(e.target.value)} /><br></br>
              No Especificado<input type="radio" name='sexo' value='No Especificado' onChange={(e) => setSexo(e.target.value)} />
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Origen</label><br></br>
                        Natural<input type="radio" name='origen' value='Natural' onChange={(e) => setOrigen(e.target.value)} /> <br></br>
                        Extraterrestre<input type="radio" name='origen' value='Extraterrestre' onChange={(e) => setOrigen(e.target.value)} /><br></br>
                        Cientifico<input type="radio" name='origen' value='Cientifico' onChange={(e) => setOrigen(e.target.value)} />          <br></br>
                        Mutante<input type="radio" name='origen' value='Mutante' onChange={(e) => setOrigen(e.target.value)} />             
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Caracteristicas</label><br></br>
                        Volar<input type="checkbox" name='origen' value='Volar' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Fuerza<input type="checkbox" name='origen' value='Fuerza' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Velocidad<input type="checkbox" name='origen' value='Velocidad' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Mutante<input type="checkbox" name='origen' value='Mutante' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Vision<input type="checkbox" name='origen' value='Vision' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Oido<input type="checkbox" name='origen' value='Oido' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Invulnerabilidad<input type="checkbox" name='origen' value='Invulnerabilidad' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Telepatia<input type="checkbox" name='origen' value='Telepatia' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Telequinesis<input type="checkbox" name='origen' value='Telequinesis' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Lanza Rayos<input type="checkbox" name='origen' value='Lanza Rayos' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Artes Marciales<input type="checkbox" name='origen' value='Artes Marciales' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Inteligencia<input type="checkbox" name='origen' value='Inteligencia' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Acrobacia<input type="checkbox" name='origen' value='Acrobacia' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Armadura<input type="checkbox" name='origen' value='Armadura' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                        Tecnologia<input type="checkbox" name='origen' value='Tecnologia' onChange={(e) => setCaracteristicas(e.target.value)} /><br></br>
                    </div>  

                    <button type='submit' className='btn btn-warning'>Añadir</button>
                 </form>   
                 <br></br>
                 <br></br>
    </div>
    <div class="col">

      <br></br><br></br>
      <div className='general'>
     <CardGroup>
      <div className='separar'>
      <Card>
        <Card.Img variant="top" src={programador} />
        <Card.Body>
          <Card.Title><h2>Editando</h2></Card.Title>
          <Card.Text>
            <h4>Cuidado al escribir</h4>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </CardGroup>
     </div>
    </div>
    </div>
  </div>

    
    </>
    )
}

export default Edit