import { useEffect, useState } from "react";
import "./App.css";
import "./assets/_variables.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { PresentCard } from "./components/Card.jsx";
import { UserPanel } from "./components/UserPanel.jsx";
import { Row } from "react-bootstrap";

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

  //console.log(repos);
  // console.log(generalInfo);

  return (
    <>
      <UserPanel
        username={generalInfo["login"]}
        avatar={generalInfo["avatar_url"]}
        dateOfCreation={generalInfo["created_at"]}
        link={generalInfo["html_url"]}
      ></UserPanel>
      
      <hr></hr>

      <Row className="g-4">
      {repos.map((repo) => {
        console.log("entered ", repo["name"]);
        return (
          <PresentCard
            key={repo["id"]}
            repoName={repo["name"]}
            starCount={repo["stargazers_count"]}
            description={repo["description"]}
            link={repo["html_url"]}
          ></PresentCard>
        );
      })}
      </Row>
    </>
  );
}

export default App;
