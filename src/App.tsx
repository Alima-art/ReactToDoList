import { useState } from "react";
import TodoForm from "./TodoForm";
import { Tache } from "./types";
import TodoItem from "./TodoItem";

// L'interface Tache a un id et un texte en entrer
// interface  Tache {
//   id : number;
//   texte : string;
// }

function App(){

// cette constante garde en mémoire les taches. Le symbole <> permet de précisé que c'est une liste de taches
  const [taches, setTaches] = useState<Tache[]>([
    { id : 1, texte : "Comprendre react" },
    { id : 2, texte : "Ma premiere to-do-list" }
  ]);

//Fonction qui permet a App d'ajouter une tache
const ajouterTache = (nouveauTexte : string) => {
  const nouveauTache : Tache = {
    id : Date.now(),
    texte : nouveauTexte
  };

//Copie des anciennes tache puis ajout de la nouvelle tache a la fin
setTaches([...taches, nouveauTache])
};

// suppression 
const supprimerTache = (idASupprimer: number)=> {
  // la fonction filter()permet de tout garger sauf la tache supp
  const listeMiseAJour = taches.filter((tache)=> tache.id !== idASupprimer);
  setTaches(listeMiseAJour);
}



// Ce qui s'affiche à l'écran
return(
  <div style={{padding :" 20px", fontFamily : "sans-serif"}}>
    <h1> Ma liste de Tache </h1>

    //afficheleformulaire en lui passant la fonction App
    < TodoForm onAjouter={ajouterTache} />

    <ul>
      {taches.map((tache)=>(
        <li key = {tache.id}>
          {tache.texte}
        </li>
      ))}
    </ul>
  </div>
)
}

export default App
