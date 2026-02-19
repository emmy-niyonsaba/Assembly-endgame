import React from 'react'
import './App.css'
import Header from './components/Header'
import Result from './components/Result'
import Languages from './components/Languages'
import WordDisplyer from './components/WordDisplyer'
function App() {
  return (
    <div >
      <Header />
      <Result/>
      <Languages/>
      <WordDisplyer/>
    </div>
  )
}

export default App
