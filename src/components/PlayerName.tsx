import React, { FormEvent, useState } from 'react'
import styles from './PlayerName.module.css'


const PlayerName = () => {
    const [playerName, setPlayerName] = useState<string>("PLayer Name")
    const [isEditingPlayerName, setIsEditingPlayerName] = useState<boolean>(true)
  
    const handleNameClick = ()=>{
      setIsEditingPlayerName(false)
    }
  
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setPlayerName(e.target.value)
    }
  
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setIsEditingPlayerName(true)
    }

  return (
   <div >
       {isEditingPlayerName 
      ? <h1 className={styles.playerName} onClick={handleNameClick}>{playerName}</h1>
      :
      <form className={styles.playerInput} onSubmit={handleSubmit}>
        <input type="text" value={playerName} onChange={handleNameChange}  />
      <button type='submit'>Save</button>
      </form>
      }
   </div>
  )
}

export default PlayerName