import styles from "./BudgetTable.module.css";

const BudgetTable = ({ budgetData, removeRow }) => {
  return (
    <table className={styles.budgetTable}>
      <thead>
        <tr>
          <th className={styles.header}>Categoria</th>
          <th className={styles.header}>Quantidade</th>
          <th className={styles.header}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {budgetData.map((item, index) => (
          <tr key={index} className={styles.row}>
            <td>{item.categoria}</td>
            <td>{item.quantidade}</td>
            <td>
              <button
                className={styles.removeButton}
                onClick={() => removeRow(index)}
              >
                Remover Linha
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BudgetTable;
