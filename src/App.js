
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Pages/Home';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Home />
        <Footer></Footer>
    </div>
  );
}

export default App;
