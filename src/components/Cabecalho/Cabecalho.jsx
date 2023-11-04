import Link from 'next/link'
import React from 'react'

export default function Cabecalho() {
  return (
    <header className="bg-gray-800 text-white ">
          <nav className='flex justify-around items-center h-16'>
            <Link className='linkCabecalho' href="/consumo/pessoas-view-all">Pessoas-All</Link>
            <Link className='linkCabecalho' href={"/produtos/dinamicas/estranho/tenis-preto"}>TENIS PRETO</Link>
            <Link className='linkCabecalho' href="/produtos/dinamicas/vestuario/camisa-xadrez">Camisa-X</Link>
          </nav>
        </header>
  )
}
