import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { PresentCard } from "./components/Card";
import { UserPanel } from "./components/UserPanel";

function App() {
  const [repos, setRepos] = useState([]);
  const [generalInfo, setGeneralInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const githubUsername = "Egot3";
  const repoUrl = `https://api.github.com/users/${githubUsername}/repos`;
  const userUrl = `https://api.github.com/users/${githubUsername}`;

  useEffect(() => {
    const pullRepos = async () => {
      try {
        const repoResponse = await axios.get(repoUrl);
        const userResponse = await axios.get(userUrl);

        setGeneralInfo(userResponse.data);
        setRepos(repoResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    pullRepos();
  }, []);

  console.log(repos);
  console.log(generalInfo);

  return (
    <>
      <UserPanel
        username={generalInfo["login"]}
        avatar={generalInfo["avatar_url"]}
        dateOfCreation={generalInfo["created_at"]}
        link={generalInfo["html_url"]}
      ></UserPanel>
    </>
  );
}

export default App;
