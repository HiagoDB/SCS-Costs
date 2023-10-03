import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
export default function NewProject() {
    
    return(
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your project first and then add the services</p>
            <ProjectForm btnText="Create Project" />
        </div>
    )

}