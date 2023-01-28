
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './components/Routes/AllRoutes';
import Footer from './components/Footer/Footer';
import Search from './components/ProductData/Search';
function App() {
  return (
    <div className="App">
      <Search/>
     <Navbar/>
     <AllRoutes/>
     {/* <Footer /> */}
    </div>
  );
}

export default App;
