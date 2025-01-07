import { useState } from "react";
import "./App.css";

//components
import BudgetTable from "./components/BudgetTable";
import BudgetForm from "./components/BudgetForm";

function App() {
  const [budgetData, setBudgetData] = useState([]);

  const addRow = (categoria, quantidade) => {
    setBudgetData([...budgetData, { categoria, quantidade }]);
  };

  const removeRow = (index) => {
    setBudgetData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Gerenciador de Orçamento</h1>
      <BudgetForm addRow={addRow} />
      <BudgetTable budgetData={budgetData} removeRow={removeRow} />
    </div>
  );
}

export default App;
