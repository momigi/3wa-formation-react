// Description:
// Créez une application React qui contient un compteur. L'état du compteur doit être géré par un contexte pour qu'il puisse être accessible par plusieurs composants.

// Étapes:

// Création du Contexte:
// Créez un fichier CounterContext.js.
// Utilisez createContext pour créer un nouveau contexte.
// Créez un fournisseur de contexte CounterProvider qui enveloppe ses enfants et leur fournit l'état du compteur.

// Gestion de l'État du Compteur:
// Dans CounterProvider, utilisez useState pour créer l'état du compteur.
// Fournissez des fonctions pour incrémenter, décrémenter et réinitialiser le compteur.

// Création des Composants:
// Créez un composant CounterDisplay pour afficher la valeur du compteur.
// Créez des composants IncrementButton, DecrementButton et ResetButton pour les actions du compteur.
// Utilisez useContext pour accéder à l'état du compteur et aux fonctions dans ces composants.

// Assemblage de l'Application:
// Dans le composant principal (App.js), utilisez CounterProvider pour englober les composants de l'application.
// Affichez CounterDisplay et les boutons dans App.js.
// Résultat Attendu:

// Lorsque l'utilisateur clique sur les boutons, la valeur du compteur doit changer en conséquence.
// La valeur du compteur doit être cohérente dans tous les composants.



import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  return useContext(CounterContext);
};
