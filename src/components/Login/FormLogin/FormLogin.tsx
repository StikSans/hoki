import MyInput from "@/components/UI/MyInput/MyInput";
import styles from './FormLogin.module.css'
import MyButton from "@/components/UI/MyButton/MyButton";
import MyForm from "@/components/UI/MyForm/MyForm";
import Image from "next/image";
import {useState} from "react";



const FormLogin = () => {
    const [type, setType] = useState<string>('password');
    const [imgUrl, setImgUrl] = useState<string>('eye.svg')


    const renameType = () => {
        if (type == 'password') {
            setType('text')
            setImgUrl('eye-crossed.svg')
        } else {
            setType('password')
            setImgUrl('eye.svg')
        }
    }


    return (
        <section>
            <MyForm>
                <h2 className={styles.h2}>Вход</h2>
                <MyInput styleName={'mb-[20px]'} namePlaceholder={'Введите логин'} typeInput='email'/>
                <div className={styles.div_password}>
                    <MyInput namePlaceholder={'Введите пароль'} typeInput={type} />
                    <Image
                        onClick={renameType}
                        src={`/${imgUrl}`}
                        alt={''}
                        width={25} height={25} />
                </div>
                <MyButton>Войти</MyButton>
            </MyForm>
        </section>

    )
}
export default FormLogin