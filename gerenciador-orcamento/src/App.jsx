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

  return (
    <div className="App">
      <h1>Gerenciador de Orçamento</h1>
      <BudgetForm addRow={addRow} />
      <BudgetTable budgetData={budgetData} />
    </div>
  );
}

export default App;
