import { useEffect, useState } from 'react'
import { Pagination } from './components/Pagination'
import './App.css'
import { Characters } from './components/Characters'
import { Navbar } from './components/Navbar'
import { get } from './data/httpClient'

function App() {
  const API = "https://rickandmortyapi.com/api/character"
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  
  useEffect(() => {
    get(API).then(data => {
      setCharacters(data.results)
      setInfo(data.info)
    })
  },[])

  const onPrevious = () => { 
    get(info.prev).then(data => {
      console.log(data)
      setCharacters(data.results)
      setInfo(data.info)
    })
  }
  const onNext = () => {
      get(info.next).then(data => {
        console.log(data)
        setCharacters(data.results)
        setInfo(data.info)
      })
  }

  return (
   <>
    <Navbar
      brand="Rick and Morty App"
    />
    <div className='container mt-5'>
      <Pagination 
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      
      <Characters
        characters={characters}
      />
      <Pagination 
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
   </>
  )
}

export default App
