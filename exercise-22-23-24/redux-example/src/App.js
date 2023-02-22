import "./App.css";

import TodoFormContainer from "./components/containers/TodoFormContainer";
import TodosContainer from "./components/containers/TodosContainer";
import FilterOptions from "./components/pure/FilterOptions";
import LoginFormContainer from './components/containers/LoginFormContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer></TodosContainer>
        <TodoFormContainer></TodoFormContainer>
        {/* Filter Options contain Filter Container */}
        <FilterOptions></FilterOptions>
        {/* <LoginFormContainer></LoginFormContainer> */}
      </header>
    </div>
  );
}

export default App;
