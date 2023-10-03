import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Container from './Container'
import logo from '../img/costs_logo.png'

export default function Navbar (){

    return(
        <nav className={styles.navbar}>
            <Container>

                    <li className={styles.item}>
                        <Link to="/"><img src={logo} alt="Costs' logo"/></Link>
                    </li>


                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Company">Company</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>

            </Container>
        </nav>
    )

}