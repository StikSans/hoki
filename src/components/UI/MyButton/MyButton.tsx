import {ReactNode} from "react";
import styles from './MyButton.module.css'




interface IMyButton {
    children: ReactNode
    funClick?: () => void

}

const MyButton = (
    {children, funClick
}: IMyButton) => {

    return (
        <>
            <button
                onClick={funClick}
                className={styles.button}>{children}</button>
        </>
    )
}
export default MyButton