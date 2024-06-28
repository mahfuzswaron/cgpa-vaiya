import Bot from './pages/Bot';
import "./App.css";
import { useEffect } from 'react';


function App() {

  useEffect(()=>{
    // refresh server
    fetch(import.meta.env.VITE_SERVER_URL)

  }, [])

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Bot />
    </main>

  )
}

export default App;
