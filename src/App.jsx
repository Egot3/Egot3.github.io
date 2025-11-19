import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios, { Axios } from 'axios';

function App() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const githubUsername = 'Egot3'
  const apiUrl = `https://api.github.com/users/${githubUsername}/repos`

  useEffect(()=>{
    const pullRepos = async () => {
    try{
      const response = await axios.get(apiUrl)
      
      console.log(response)
    }

    catch(err){
      setLoading(err.message)
    }

    finally{
      setLoading(false)
    }
  }
  pullRepos()
  }, apiUrl)

  return (
    <>

    </>
  )
}


export default App
