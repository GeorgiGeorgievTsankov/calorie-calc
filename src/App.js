import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeView } from './Routes/Home/HomeView';
import { CalculateView } from './Routes/Calculate/CalculateView';
import RecipesView from './Components/Recipes/RecipesView';
import { NavbarComponent } from './Components/Navbar/NavbarComponent';


function App() {
  return (
    <Router>
        <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/calculate" element={<CalculateView />} />
        <Route path="/recipes" element={<RecipesView />} />
      </Routes>

    </Router>
  );
}

export default App;
