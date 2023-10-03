import styles from './Home.module.css'
import savings from '../img/savings.svg'
import Linkbutton from '../layout/LinkButton'

export default function Home() {
    
    return(
        <section className={styles.home_container}>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start manage your project now!</p>
            <Linkbutton to ="/newproject" text="Create Project"/>
            <img src={savings} alt="Costs' Pig"/>
        </section>
    )

}