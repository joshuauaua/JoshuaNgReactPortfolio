import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/joshuauaua/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        const filteredData = data.filter((repo)=>repo.language = "C#" )
        console.log(filteredData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
