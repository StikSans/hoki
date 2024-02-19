import MyButton from "@/components/UI/MyButton/MyButton";
import MyBlock from "@/components/UI/MyBlock/MyBlock";
import {useRouter} from "next/navigation";


const BlockRegLogin = () => {
    const router = useRouter()


    return (
        <section>
            <MyBlock>
                <MyButton
                    funClick={() => router.push('/auth/registration')}
                >
                    Зарегистрироваться
                </MyButton>
                <p className={'flex mt-[20px] opacity-[.6] text-[12px] text-center'}>
                    Если у вас нету аккаунта то вы можете зарегистрироваться
                </p>
            </MyBlock>
        </section>
    )
}

export default BlockRegLogin