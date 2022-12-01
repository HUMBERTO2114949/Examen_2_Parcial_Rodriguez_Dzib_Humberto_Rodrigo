import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Create = () => {
  const [ heroe, setHeroe ] = useState('')
  const [ nombre, setNombre ] = useState('')
  const [ edad, setEdad ] = useState(0)
  const [ sexo, setSexo ] = useState('')
  const [ origen, setOrigen ] = useState('')
  const [ caracteristicas, setCaracteristias ] = useState('')
  const navigate = useNavigate()

  const VillanosCollection = collection(db, "superheroe")

  const supers = async (e) => {
    e.preventDefault()
    await addDoc( VillanosCollection, {  heroe: heroe, nombre: nombre, edad: edad, sexo: sexo, origen: origen, caracteristicas: caracteristicas } )
    navigate('/Heroes')
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Villano</h1>
                 <form onSubmit={supers}>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre Real</label>
                        <input
                            value={heroe}
                            onChange={ (e)=> setHeroe(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />                 
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre Villano</label>
                        <input
                            value={nombre}
                            onChange={ (e)=> setNombre(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
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
                        />                 
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>sexo</label>
                          
                        <input
                            value={sexo}
                            onChange={ (e)=> setSexo(e.target.value)} 
                            type="radio"
                            checked={this.state.selectedOption === "Masculino"}
                            className='form-control'
                        /> 
                        <input
                            value={sexo}
                            onChange={ (e)=> setSexo(e.target.value)} 
                            type="radio"
                            checked={this.state.selectedOption === "No Especificado"}
                            className='form-control'
                        />         
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Origen</label>
                        <input
                            value={origen}
                            onChange={ (e)=> setOrigen(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />                 
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Caracteristicas</label>
                        <input
                            value={caracteristicas}
                            onChange={ (e)=> setCaracteristias(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />
                        <inputCheckBox 
                        value={caracteristicas}
                        onChange={ (e)=> setCaracteristias(e.target.value)} 
                        type="text"
                        className='form-control'
                        />                 
                    </div>  
                    <button type='submit' className='btn btn-warning'>Añadir</button>
                 </form>   
            </div>
        </div>
    </div> 
  )
}

export default Create