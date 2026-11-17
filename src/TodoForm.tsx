import { useState } from 'react';

// On définit ce que App doit fournir à TodoForm (les Props)
interface TodoFormProps {
  onAjouter: (texte: string) => void;
}

function TodoForm({ onAjouter }: TodoFormProps) {

  // Mémoire locale uniquement pour ce que l'utilisateur tape dans le champ
  const [texteSaisi, setTexteSaisi] = useState("");

  // Fonction déclenchée quand on clique sur le bouton "Ajouter"
  const gererSoumission = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche la page de se recharger (comportement par défaut du HTML)
    
    // Si le champ est vide, on ne fait rien
    if (texteSaisi.trim() === "") return;

    // TodoForm Appel App : "Ajoute ce texte !"
    onAjouter(texteSaisi);

    // On vide le champ texte après l'ajout
    setTexteSaisi("");
  };

  return (
    <form onSubmit={gererSoumission} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nouvelle tâche..."
        value={texteSaisi}
        onChange={(e) => setTexteSaisi(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "8px 15px" }}>
        Ajouter
      </button>
    </form>
  );
}

export default TodoForm;