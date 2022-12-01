import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc, doc, addDoc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'
import Create from './Create'


import { useNavigate } from 'react-router-dom'

const MySwal = withReactContent(Swal)

const Show = () => {
  const [ heroe, setHeroe ] = useState('')
  const [ nombre, setNombre ] = useState('')
  const [ edad, setEdad ] = useState(0)
  const [ sexo, setSexo ] = useState('')
  const [ origen, setOrigen ] = useState('')
  const [ caracteristicas, setCaracteristicas ] = useState('')

  const HeroesCollection = collection(db, "superheroe")

  const supers = async (e) => {
    e.preventDefault()
    await addDoc( HeroesCollection, { heroe: heroe, nombre: nombre, edad: edad, sexo: sexo, origen: origen, caracteristicas: caracteristicas } )
    window.location.href = window.location.href;
    window.location.replace('');
  }
  const [heroes, setHeroes] = useState( [] )
  const getHeroes = async ()   => {
   const data = await getDocs(HeroesCollection)
   setHeroes(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
  }
  const deleteHeroe = async (id) => {
   const heroeDoc = doc(db, "superheroe", id)
   await deleteDoc(heroeDoc)
   getHeroes()
  }
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Elimina a el Heroe?',
      text: "Boton rojo para eliminar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si! Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deleteHeroe(id)               
        Swal.fire(
          'Listo!',
          'Se elimino!',
          'success'
        )
      }
    })    
  }
  //6 - usamos useEffect
  useEffect( () => {
    getHeroes()
    // eslint-disable-next-line
  }, [] )
  //7 - devolvemos vista de nuestro componente
  return (

    <>
    <div class="container">
  <div class="row">
    <div class="col">
    <h1>Heroe</h1>
                 <form onSubmit={supers}>
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
      <br></br>
      <br></br><br></br>
    <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Heroe</th>
                <th>Edad</th>
                <th>Sexo</th>
                <th>Origen</th>
                <th>Caracteristicas</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              { heroes.map( (heroe) => (
                <tr key={heroe.id}>
                  <td>{heroe.heroe}</td>
                  <td>{heroe.nombre}</td>
                  <td>{heroe.edad}</td>
                  <td>{heroe.sexo}</td>
                  <td>{heroe.origen}</td>
                  <td>{heroe.caracteristicas}</td>
                  <td>
                    <Link to={`../edit/${heroe.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                    
                  </td>
                  <td>
                  <button onClick={ () => { confirmDelete(heroe.id) } } className="btn btn-warning"><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>                
              )) }
            </tbody>
          </table>
    </div>
    </div>
  </div>

    
    </>
  )
}
export default Show