import React from 'react'
import { Link } from 'react-router-dom'
import '../LinkRoute/StyleLinkRoute.css'

const LinkRoute = ({caminho, nome, classe}) => {
  return (
    <Link className={classe} to={caminho}>{nome}</Link>
  )
}
export default LinkRoute