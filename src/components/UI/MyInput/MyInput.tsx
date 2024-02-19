import styles from './MyInput.module.css'

interface IMyInput {
    namePlaceholder: string
    id?: string
    styleName?: string
    typeInput: string
}
const MyInput = ({
        namePlaceholder,
        id,
        styleName,
        typeInput
    }:IMyInput) => {
    return (
        <>
            <input
                id={id}
                className={`${styles.input} ${styleName}`}
                type={typeInput}
                placeholder={namePlaceholder}/>
        </>
    )
}
export default MyInput