import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import data from '../assets/data';
import { useAccordionProvider } from '../context/AccordionContext';

export default function Accordion() {
  const value = useAccordionProvider()

  console.log('====================================');
  console.log(value);
  console.log('====================================');
  // const [open, setOpen] = useState(false);
  const [indexSelected, setIndexSelected] = useState(null);
  // !false => true
  // !true => false
  const toggleHandler = (index) => {
    setIndexSelected(index === indexSelected ? null : index);
  };

  return (
    <div className="bg-indigo-500 p-8 flex flex-col gap-5 justify-center items-center">
      {/* Accordion Item */}
      {data.map((item, index) => (
        <div key={index} className="bg-white p-4 w-[30rem]">
          {/* Header accordion */}
          <div onClick={() => toggleHandler(index)} className="cursor-pointer flex items-center gap-4">
            {indexSelected === index ? <FaMinus /> : <FaPlus />}
            <h2>{item.question} </h2>
          </div>
          {/* Réponse de la question */}
          {/* Si l'index de item sélectionner est égale a l'index de l'élément afficher la div */}
          <div
            className={`${
              indexSelected === index ? undefined : 'hidden'
            }  mt-8`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
