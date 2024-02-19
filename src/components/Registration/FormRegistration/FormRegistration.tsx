import MyForm from "@/components/UI/MyForm/MyForm";
import MyInput from "@/components/UI/MyInput/MyInput";
import {useState} from "react";
import Image from "next/image";
import styles from './FormRegistration.module.css'
import MyButton from "@/components/UI/MyButton/MyButton";

const FormRegistration = () => {

    const [typePassword, setTypePassword] = useState<string>('password');
    const [imgUrlPassword, setImgUrlPassword] = useState<string>('eye.svg')

    const [typeRenPassword, setTypeRenPassword] = useState<string>('password');
    const [imgUrlRenPassword, setImgUrlRenPassword] = useState<string>('eye.svg')


    const renameType = (type:string,funType: (text: string)=>void, funImg: (svg: string)=>void) => {
        if (type == 'password') {
            funType('text')
            funImg('eye-crossed.svg')
        } else {
            funType('password')
            funImg('eye.svg')
        }
    }

    return(
        <section>
            <MyForm>
                <h2 className={styles.h2}>Регистрация</h2>
                <MyInput namePlaceholder={'Логин'} typeInput={'email'}/>
                <MyInput styleName={'mt-[20px]'} namePlaceholder={'Фамилия'} typeInput={'text'}/>
                <MyInput styleName={'mt-[20px]'} namePlaceholder={'Имя'} typeInput={'text'}/>
                <div className={styles.div_password}>
                    <MyInput namePlaceholder={'Придумайте пароль'} typeInput={typePassword}/>
                    <Image
                        onClick={() => renameType(typePassword, setTypePassword, setImgUrlPassword)}
                        src={`/${imgUrlPassword}`}
                        alt={''}
                        width={25} height={25} />
                </div>
                <div className={styles.div_password}>
                    <MyInput namePlaceholder={'Повторите пароль'} typeInput={typeRenPassword}/>
                    <Image
                        onClick={() => renameType(typeRenPassword, setTypeRenPassword, setImgUrlRenPassword)}
                        src={`/${imgUrlRenPassword}`}
                        alt={''}
                        width={25} height={25} />
                </div>
                <MyInput styleName={'mt-[20px]'} namePlaceholder={'Имя'} typeInput={'date'}/>

                <select className={styles.sex} name="" id="">
                    <option value="none">Выберите пол</option>
                    <option value="m">Мужской</option>
                    <option value="f">Женский</option>
                </select>

                <MyButton>Регистрация</MyButton>
            </MyForm>
        </section>
    )
}
export default FormRegistration