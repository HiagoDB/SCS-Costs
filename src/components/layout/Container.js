import styles from './Container.module.css'

export default function (props){

    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )

}