import './App.css'
import qrImg from './assets/qr.jpeg'

function App() {

  return (
    <div style={{display: 'flex', height: '100vh', width: '100vw', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
      <img style={{width: '100vw'}} src={qrImg} alt="Предложение на работу" />
    </div>
  )
}

export default App
