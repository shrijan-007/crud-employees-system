// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Emplisting from "./Emplisting";
import EmpAddition from "./EmpAddition";
import EmpView from "./EmpView";
import EmpEdit from "./EmpEdit";
// import { PersonPlusFill } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h3>EMPLOYEE DATABASE</h3>
        <span>CRUD application made with ReactJS</span>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Emplisting />}></Route>
          <Route path="/addEmployee" element={<EmpAddition />}></Route>
          <Route path="/viewEmployee/:empid" element={<EmpView />}></Route>
          <Route path="/editEmployee/:empid" element={<EmpEdit />}></Route>

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
