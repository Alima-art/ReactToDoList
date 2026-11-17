import { Tache } from './types';

// Ce que le Patron donne à cet employé : la tâche + l'ordre de suppression
interface TodoItemProps {
  tache: Tache;
  onSupprimer: (id: number) => void;
}

function TodoItem({ tache, onSupprimer }: TodoItemProps) {
  return (
    <li style={{ marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
      <span>{tache.texte}</span>
      
      {/* Quand on clique, l'employé crie au Patron : "Supprime la tâche avec cet ID !" */}
      <button 
        onClick={() => onSupprimer(tache.id)}
        style={{ backgroundColor: "#ff4d4d", color: "white", border: "none", padding: "4px 8px", cursor: "pointer" }}
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;