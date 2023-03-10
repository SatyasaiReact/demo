
import './App.css';
import {BrowserRouter as Router,Route,Routes} from'react-router-dom'
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';



function App() {
  return (
    <div>
      <Router>
        <div className="container">
        <HeaderComponent />
        
        <div className="container">
          <Routes>
          
            <Route path="/"  element={<ListEmployeeComponent />}></Route>
          
            <Route path="/employees" element={<ListEmployeeComponent />}></Route>
            <Route path="/add-employee" element={<CreateEmployeeComponent />}></Route>

            
            
            
            
            
          </Routes>
          </div>
        <FooterComponent />
        </div>
        </Router>

      
      
      
    </div>
  );
}

export default App;
