import './App.css';
import ApiComponent from './Component/ApiComponent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <ApiComponent />   
    // </div>
    // <div className="App">
    //   <Router>
    //     <Header />
    //     <ApiComponent />
    //   </Router> 
    // </div>
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ApiComponent />} />
          <Route exact path="/search" element={<ApiComponent />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
