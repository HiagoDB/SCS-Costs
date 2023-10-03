import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";
import { useNavigate } from "react-router-dom";

export default function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("/projects", { message: "Project succesfuly created!" })
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Create Project</h1>
      <p>Create your project first and then add the services</p>
      <ProjectForm handleSubmit={createPost} btnText="Create Project" />
    </div>
  );
}
