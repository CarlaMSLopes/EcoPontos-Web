import React from 'react'
import '../Banner/Banner.css'

const Banner = ({caminhoImagem, descricao, texto, classe}) => {
  return (
    <div className={classe}>
      <img src={caminhoImagem} alt={descricao} />
      <p>{texto}</p>
    </div>
  )
}

export default Banner