import './App.css'
import { useEffect, useState } from 'react'

function App() {  
  const [enabled, setEnabled] = useState(() => {
    const enabledLocalStorage = localStorage.getItem('enabled');

    return enabledLocalStorage != null ? enabledLocalStorage : false;
  });

  const [position, setPosition] = useState({x:0, y:0});

  const handleClick = () => {
    console.log("Ejecuto handleClick");
    //Cambiamos el valor de nuestro estado enabled
    setEnabled(!enabled);
  }


  // useEffect (función que quiero que se ejecute, array de dependencias);
  useEffect(() => {
    console.log("entro en el useEffect para guardar el valor de enabled en localstorage");
    localStorage.setItem('enabled', enabled);


    const handleMove = (event) => {
      const {clientX, clientY} = event;

      setPosition({x:clientX, y:clientY});

      console.log("handleMove", {clientX, clientY});
    }

    // Aqui no controlamos cuando se deja de esuchar o no, solo cuando empieza a escuchar, para dejar de escuchar es necesario añadir un control
    if (enabled) window.addEventListener('pointermove', handleMove);

    // En los useEffect podemos devolver como queremos limpiar el "efecto"
    // Se ejecutará siempre que se modifique el componente o alguna de las dependencias
    return () => {
       window.removeEventListener('pointermove', handleMove);
    }

  }, [enabled]);


  return (
    <>
      <h1>Cursor follower</h1>
      {enabled && 
            <div style={{
                position: 'absolute',
                backgroundColor: 'rgba(0, 0 , 0, 0.5)',
                border: '1px solid #fff',
                borderRadius: '50%',
                opacity: '0.8',
                pointerEvents: 'none',
                left: -25,
                top: -25,
                width: 40,
                height: 40,
                transform: `translate(${position.x}px, ${position.y}px)`
              }}
            />
      }

      <button type='button' onClick={handleClick}>{enabled ? 'Desactivar' : 'Seguir'} ratón</button>
    </>
  )
}

export default App
