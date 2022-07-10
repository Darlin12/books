import React from 'react'


export const Book = ({img,title,author})=>{
    //objeto para el props
  //un prop es lo que nos ayuda a pasarle atributos a nuestros objetos
  //const { img, title, author } = props;

  //Atributte, eventHandler
  const handle=()=>{
    alert(title);
  }

  const onMouseOver = () =>{
    console.log(author)
  }
 


  return (
    <article className="book" onMouseOver={onMouseOver}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={handle}>Ver Titulo</button>

    </article>
  )};

