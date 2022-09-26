import Profile from "./components/Profile/Profile";
import './App.css'
import Projects from "./components/Projects/Projects";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import { GithubNotify, DiscordNotify } from './utils/Toastify'
import Followers from "./components/Followers/Followers";

const GithubToastLink = () => (
  <div>
    Star this Project on <a href="https://github.com">Github</a>
  </div>
);

const DiscordToastLink = () => (
  <div>
    Join the <a href="https://dsc.gg/gokimax" target="_blank">Discord</a>
  </div>
);

function App() {
  const [GithubData, setGithubData] = useState([])
  const [GithubRepos, setGithubRepos] = useState([])
  const [GithubFollowers, setGithubFollowers] = useState([])

  const fetchData = async (user) => {
    const apiResponse = await fetch(`https://api.github.com/users/${user}`)
    const data = await apiResponse.json()
    console.log(data)
    if(data.status === 404) {
      return;
    } else {
      setGithubData(data)
    }
  }

  const fetchFollowers = async (user) => {
    const apiResponse = await fetch(`https://api.github.com/users/${user}/followers`)
    const data = await apiResponse.json()
    if(data.message === "Not Found") {
      return;
    } else {
      setGithubFollowers(data)
    }
  }

  const fetchReposData = async (user) => {
    const apiResponse = await fetch(`https://api.github.com/users/${user}/repos`)
    const reposData = await apiResponse.json()
    if(reposData.message === "Not Found") {
      return;
    } else {
      setGithubRepos(reposData)
    }
}

  useEffect(() => {
    fetchData("gokiimax").catch(console.error)
    fetchReposData("gokiimax").catch(console.error)
    fetchFollowers("gokiimax").catch(console.error)
    GithubNotify(GithubToastLink)
    DiscordNotify(DiscordToastLink)
  }, [])

  const onSearch = async (user) => {
    fetchData(user).catch((e) => { return })
    fetchReposData(user).catch((e) => { return })
    fetchFollowers(user).catch(console.error)
  }

  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      <Profile data={GithubData}/>
      <Projects data={GithubRepos}/>
      <Followers data={GithubFollowers} />
      <Footer />
    </div>
  );
}

export default App;
