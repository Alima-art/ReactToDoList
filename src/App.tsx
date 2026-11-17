import { useState } from "react";

// L'interface Tache a un id et un texte en entrer
interface  Tache {
  id : number;
  texte : string;
}

function App(){

// cette constante garde en mémoire les taches. Le symbole <> permet de précisé que c'est une liste de taches
  const [taches, setTaches] = useState<Tache[]>([
    { id : 1, texte : "Comprendre react" },
    { id : 2, texte : "Ma premiere to-do-list" }
  ]);

// Ce qui s'affiche à l'écran
return(
  <div style={{padding :" 20px", fontFamily : "sans-serif"}}>
    <h1> Ma liste de Tache </h1>

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
