import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Card(propiedades) {
  let url = `https://rickandmortyapi.com/api/character/${propiedades.number}`;
  let [name, setName] = useState("Nombre Personaje");
  let [image, setImage] = useState(
    "https://elcomercio.pe/resizer/Cpl3J8Dhvfa06jjRu_jNis1qRf4=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GHUBEOR7WNA6ZHJ3HR4DTJHCMY.png"
  );

  useEffect(() => {
    async function getPersonajes() {
      await axios({
        url: url,
        method: "get",
      }).then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setImage(response.data.image);
      });
    }
    getPersonajes();
  }, []);

  return (
    <>
    {name} <br />
    <img src={image} />
    </>
  )
}

export default Card;
