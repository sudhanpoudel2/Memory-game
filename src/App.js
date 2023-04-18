import React, { useEffect, useState } from "react";

function App () {
  let arrayofImage = [
    {num:1, img:"adidas.jpg "},
    {num:2, img:"audi.jpg"},
    {num:3, img:"bmw.jgp"},
    {num:3, img:"eagle.jpg"}];

    const[cards, setCsrds]= useState();

    const suffleImage=()=>{
      //double arrey
      let suffledArray = [...arrayofImage, ...arrayofImage]
      .map((item, index) => ({ ...item, id: index+1}));
      sort((a,b)=>0.5 - Math.random());
      setCards(suffledArray);
      
    };
   // console.log(cards); 
     useEffect(()=>{
      suffleImage();
     }, []);
  return(
   <div className="container">
    <div className="card-container">{cards.map((card)=>(
      <Card key={Card.id} card={card}/>
    ))}</div> 
    </div>
  );

}

export default App;