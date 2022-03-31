import './App.css';
import Nav from './Components/Header/Nav';
import MainComponent from './Components/Main/MainComponent';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
        <Nav/>      
        <MainComponent/>
        <Footer/>
    </div>
  );
}

export default App;
