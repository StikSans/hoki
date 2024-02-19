'use client'
import styles from './Header.module.css'
import Image from "next/image";
import Container from "@/components/global/Container/Container";
import {useRouter} from "next/navigation";


const Header = () => {
    const router = useRouter()


    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header_con}>
                    <Image
                        onClick={() => router.push('/')}
                        src={'/logo.svg'} width={80} height={40} alt='logo'/>
                </div>
            </Container>
        </header>
    )
}
export default Header