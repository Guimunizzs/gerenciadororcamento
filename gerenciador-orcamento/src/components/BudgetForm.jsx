import styles from "./BudgetForm.module.css";
import { useState } from "react";

const BudgetForm = ({ addRow }) => {
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (categoria && quantidade) {
      addRow(categoria, quantidade);
      setCategoria("");
      setQuantidade("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.budgetForm}>
      <div>
        <input
          className={styles.input}
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Categoria"
        />
        <input
          className={styles.input}
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          placeholder="Quantidade"
        />
        <button type="submit" className={styles.button}>
          Adicionar
        </button>
      </div>
    </form>
  );
};

export default BudgetForm;
