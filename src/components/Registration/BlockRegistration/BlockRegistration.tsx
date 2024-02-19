import MyButton from "@/components/UI/MyButton/MyButton";
import MyBlock from "@/components/UI/MyBlock/MyBlock";
import {useRouter} from "next/navigation";


const BlockRegistration = () => {

    const router = useRouter()

    return (
        <section>
            <MyBlock>
                <MyButton
                    funClick={() => router.push('/auth/login')}
                >Вход</MyButton>
                <p className={'flex mt-[20px] opacity-[.6] text-[12px] justify-center'}>
                    Если у вас есть аккаунт тогда войдите
                </p>
            </MyBlock>
        </section>
    )
}

export default BlockRegistration