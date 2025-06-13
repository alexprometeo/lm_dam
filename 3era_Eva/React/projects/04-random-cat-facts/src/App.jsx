import { useEffect, useState } from 'react'
import './App.css'

const RANDOM_CAT_FACTS_ENDPOINT = 'https://catfact.ninja/fact';
const RANDOM_CAT_IMAGE_ENDPOINT = 'https://cataas.com/cat/says';
const RANDOM_CAT_IMAGE_OPTIONS = 'size=50&color=red&json=true';

function App() {  
  const [fact, setFact] = useState();
  const [imageSRC, setImageSRC] = useState();

  const fetchRandomFact = () => {
    fetch(RANDOM_CAT_FACTS_ENDPOINT).then((respuestaPromesa) => {
      const respuestaPromesaJSON = respuestaPromesa.json();

      respuestaPromesaJSON.then((randomFact) => {
        if (!randomFact) return

        const newFact = randomFact.fact;
        setFact(newFact);
      });
    });

  }

  useEffect(() => {
    if (!fact) return;

    const firstWord = fact.split(' ')[0];


    const URL_IMAGE = `${RANDOM_CAT_IMAGE_ENDPOINT}/${firstWord}?${RANDOM_CAT_IMAGE_OPTIONS}`
    
    fetch(URL_IMAGE).then((respuestaPromesa) => {
      const respuestaPromesaJSON = respuestaPromesa.json();

      respuestaPromesaJSON.then((randomIMG) => {
        if (!randomIMG) return

        const newImageSRC = randomIMG?.url;
        setImageSRC(newImageSRC);
      });
    });
  }, [fact])

  return (
    <>  
      <h1>App gatitos</h1>
      {
        fact && <p>{fact}</p>
      }
      {
        imageSRC && <img src={imageSRC} alt='Image with random fact about cats' width={275} height={275} />
      }

      <button type='button' onClick={fetchRandomFact}>Generar nuevo hecho random</button>
    </>
  )
}

export default App
