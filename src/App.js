import React, { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import AccordionProvider from "./context/AccordionContext";
import Card from "./components/Card/Card";
import TotalPrice from "./components/Card/TotalPrice";
import CartProvider from "./context/CartContext";
import DisplayCarts from "./components/Card/DisplayCarts";

import { CounterProvider } from "./components/Counter/CounterContext";
import CounterDisplay from "./components/Counter/CounterDisplay";
import IncrementButton from "./components/Counter/IncrementButton";
import DecrementButton from "./components/Counter/DecrementButton";
import ResetButton from "./components/Counter/ResetButton";

// rfc
export default function App() {
  /* 
IMPORTANT

On ne peut pas utiliser le context sur le composant qui l'utilise
*/

  return (
    // <AccordionProvider>
    //   <main className="container mx-auto">
    //     <h1>Accordion </h1>
    //     <Accordion />
    //     {/* ----------------- */}

    //     <CartProvider>
    //       <div>
    //         <h2>Cart Shop</h2>

    //         <DisplayCarts />
    //       </div>
    //     </CartProvider>
    //   </main>
    // </AccordionProvider>

    <CounterProvider>
      <div className=" ">
        <div className="rounded border-4 bg-slate-400 grid items-center gap-10 mx-60  mt-3 px-6" >
          <CounterDisplay />
        </div>
        <div className="rounded-4 border-4 bg-slate-400 flex items-center gap-10 mx-60 mt-3 px-6">
          <IncrementButton />
        </div>
        <div className="rounded-4 border-4 bg-slate-400 flex items-center gap-10 mx-60 mt-3 px-6">
          <DecrementButton />
        </div>
        <div className="rounded-4 border-4 bg-slate-400 flex items-center gap-10 mx-60 mt-3 px-6">
          <ResetButton />
        </div>
      </div>
    </CounterProvider>
  );
}
