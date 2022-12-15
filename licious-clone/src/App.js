
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './components/Routes/AllRoutes';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
     <Footer />
    </div>
  );
}

export default App;
