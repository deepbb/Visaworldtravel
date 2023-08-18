import './App.css';
import Home from "./Pages/Home";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Header/>
    <Navbar/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
