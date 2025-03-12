import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("https://api.github.com/users/joshuauaua/repos")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(()=> {
          setProjects(data);
          setLoading(false);
        }, 1000)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {

    return (
        <main>
            <section>
                <h1>Mina projekt!</h1>
                <div className="project-section">
                    <ClockLoader
                        color="black"
                        size={30}
                    />
                </div>
            </section>
        </main>
    )
}
else{
  
}
  return (
    <>
      <main>
        <section>
          <h1>My Projects</h1>
          <div className="project-section">
            {projects.map((p) => {
              return (
                <article className="card" key={p.name}>
                  <div className="card-head">
                    <img src="https://picsum.photos/200/300" />
                  </div>
                  <div className="card-body">
                    <h3>{p.name}</h3>
                    <p>Language: {p.language || "Unknown Language"}  </p>
                    <Link to = {p.html_url} target="_blank" >Link</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
