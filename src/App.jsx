import { useEffect, useState } from 'react'
import Menu from './components/Menu'
import HomePage from './components/HomePage'
import Loader2 from './loader/Loader2'

function App() {
  const [isClicked, setIsClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, [])
  return (
    <>
      {isLoading ? <Loader2 /> : isClicked ? <Menu /> : <HomePage setIsClicked={setIsClicked} />}


    </>
  )
}

export default App
