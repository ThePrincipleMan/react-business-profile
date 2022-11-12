import logo from './logo.svg';
import './App.css';
import Photo from './components/photo'
import Maininfo from './components/maininfo';
import Infobottom from './components/infobottom';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Photo />
      <Maininfo />
      <Infobottom />
      <Footer />
    </div>
  );
}

export default App;
