import React from 'react'
import { useFormulario } from '../hooks/useFormulario.js'
import Swal from 'sweetalert2'

const Formulario = ({ setNombrePersonaje }) => {
  const [inputs, handleChange, reset] = useFormulario({
      nombre: "",
  });
  const { nombre } = inputs;

  const handleSubmit = (e) => {
      e.preventDefault();

      if (!nombre.trim()) {
          return Swal.fire({
              title: "Error!",
              text: "Nombre ogligatorio",
              icon: "error",
          });
      }

      setNombrePersonaje(nombre.trim().toLowerCase());

      reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder='ingrese personaje'
        className='form-control mb-2'
        value={nombre}
        onChange={handleChange}
        name="nombre"
      />
      <button type='submit'>
   buscar
      </button>
    </form>
  )
}

export default Formulario
