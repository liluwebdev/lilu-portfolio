import React from 'react';
import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/navmenu";
import Footer from "./components/footer";
import routes from "./routes";


function App() {
  const appRoutes = routes(); // Call the routes function 


  return  <div className="App"> { (
    
      <Router>
     <div className="container-fluid px-0">
          {/* Header is displayed on every page */}
        <NavMenu />
        <Routes>
            {appRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          {/* Footer is displayed on every page */}
          <Footer />
          </div>
      </Router>
    
        
    
  )
}
</div>
}


export default App;
