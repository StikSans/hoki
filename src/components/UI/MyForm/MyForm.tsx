import {ReactNode} from "react";

const MyForm = ({children}:{children:ReactNode}) => {
    return (
        <form action="" className={'flex flex-col w-[350px] mx-auto rounded-lg px-[15px] py-[20px] my-[25px] shadow-xl'}>
            {children}
        </form>
    )
}
export default MyForm