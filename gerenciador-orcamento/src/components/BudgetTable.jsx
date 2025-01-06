const BudgetTable = ({ budgetData }) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {budgetData.map((item, index) => (
            <tr key={index}>
              <td>{item.categoria}</td>
              <td>{item.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
