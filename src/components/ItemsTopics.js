import React from 'react'
  
export default function ItemsTopics(props) {
  return (
        <li className='bg-sky-950 py-5 w-full flex items-center gap-3 rounded-lg px-5 shadow shadow-orange-50/70'>  
          <img src={props.logo} alt={`logo de ${props.title}`} />
          <span className='font-semibold text-white text-2xl'>{props.title}</span>
        </li>

  )
}