import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
export default function ProjectForm({ btnText }){
    return(
        <form className={styles.form}>
            <Input 
            type="text"
            text="Project name"
            name="name"
            placeholder="Insert project name"
            />
            <Input 
            type="number"
            text="Project budget"
            name="budget"
            placeholder="Insert project budget"
            />
            <Select 
            name="category_id"
            text="Chose a category"
            />
            <SubmitButton text={btnText} />
        </form>
    )
}