import { useEffect, useState } from "react";


function Hook8() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.message);
        setIsLoading(false);
      });
  }, []);

  
  if (isLoading) {
    return (
      <div className="App">
        
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="App">
        <h4>----Este hook traera imagenes de perros de una Api----</h4>
      <img src={imageUrl} alt="Imagen de perrito aleatoria" />
    </div>
  );
}

export default Hook8;
