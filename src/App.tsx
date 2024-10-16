import { resourcetype } from './components/Resourcr'
import PlayerName from './components/PlayerName'
import Resourcr from './components/Resourcr'
import './app.css'
import { useState } from 'react'
import { useEffect } from 'react'
function App() {

  const loadSteleProduction=() => {
    const savedSteelProduction = localStorage.getItem("steelProduction");
    return savedSteelProduction ? Number(savedSteelProduction) : 0;
  };

  const loadSteel=() => {
    const savedSteel = localStorage.getItem("steel");
    return savedSteel ? Number(savedSteel) : 0;
  };

 

  const [steel, setSteel] = useState<number>(loadSteel())
  const [steelProduction, setsteelProduction] = useState<number>(loadSteleProduction())
  const handleSetStele = (increment:number)=>{
    setSteel(steel+increment)
  }

 
  useEffect(() => {
    localStorage.setItem("steel", steel.toString());
  }, [steel]);

  useEffect(() => {
    localStorage.setItem("steelProduction", steelProduction.toString());
  }, [steelProduction]);

 


  const handleSteelProduction = (increment:number)=>{
    setsteelProduction(steelProduction+increment)
  }

  const handleSubmit =(e:React.FormEvent)=>{
    e.preventDefault()
    setSteel(steel + steelProduction)
  }

  const steelObj:resourcetype={
    name:"steel",
    amount: steel,
    production:steelProduction,
    onChange:handleSetStele,
    onProdutionChange:handleSteelProduction
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <PlayerName></PlayerName>
      <Resourcr {...steelObj}></Resourcr>
    
      <button type='submit'>Next cycle</button>
    </form>
  )
}

export default App
