
export default function Input(props) {
     return (
      
    <div>
          
         <input type="number" name={props.name} onChange={props.functionEventName} value={props.valueName} />
    
    </div>
  );

    }




// Instructions détaillées :

// Création du Composant :

// Développez un composant fonctionnel Input en React.
// Assurez-vous que le composant accepte les props name et onChange.
// Intégration des Icônes :

// Intégrez des icônes pour au moins deux types de champs différents (par exemple, une icône de dollar pour un champ "Bill" et une icône d'utilisateur pour un champ "Number of People").
// Utilisez des bibliothèques d'icônes react-icons pour obtenir les icônes.

// Logique Conditionnelle :

// Implémentez une logique pour afficher l'icône correspondante en fonction de la valeur de name. Par exemple, si name est "Bill", affichez l'icône de dollar.
// Stylisation et Accessibilité :

// Stylez le champ input et l'icône pour qu'ils soient visuellement attrayants et alignés correctement.
// Assurez-vous que le composant Input est accessible, notamment en ajoutant des labels appropriés pour les lecteurs d'écran.