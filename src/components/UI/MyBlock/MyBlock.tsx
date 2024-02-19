import {ReactNode} from "react";

const MyBlock = ({children}:{children:ReactNode}) => {
    return (
        <div className={'flex flex-col w-[350px] mx-auto rounded-lg px-[15px] py-[20px] my-[25px] shadow-xl'}>
            {children}
        </div>
    )
}
export default MyBlock