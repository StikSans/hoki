
import {ReactNode} from "react";
import Header from "@/components/global/Header/Header";


const layout = ({children}:{children:ReactNode}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
        </>

    )
}

export default layout