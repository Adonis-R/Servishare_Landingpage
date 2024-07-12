import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import servishare from './assets/servishare.png'

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <h1>Connecting individuals and professionals through seamless service sharing.</h1>
        <img src={servishare} className='servishare-img' alt="servishare" />
      </div>
      <Footer />
    </>
  )
}

export default App
