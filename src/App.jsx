import './App.css'
import Header from './components/Header'
import Result from './components/Result'
import Languages from './components/Languages'
import WordDisplyer from './components/WordDisplyer'
import Keyboard from './components/Keyboard'

function App() {
  return (
    <div >
      <Header />
      <Result/>
      <Languages/>
      <WordDisplyer/>
      <Keyboard/>
    </div>
  )
}

export default App
