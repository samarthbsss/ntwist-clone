
import './App.css';
import Navbar from './component/navbar';
import ContentSection from './component/home';
import ThreePartComponent from './component/threesections';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <ContentSection/>
    <ThreePartComponent/>
    <Footer/>
     
    </div>
  );
}

export default App;
