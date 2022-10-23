// create your App component here
import React, { useState, useEffect } from "react";
function App(){
  const [image,setImage] = useState(null)
  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(data=>data.json())
    .then(data=>{setImage(data.message)})
  },[])
  return (
    <div>
      {image ? (<img src={image} alt="A Random Dog"/>): <p> Loading ...</p> }
    </div>
  )
}
export default App
