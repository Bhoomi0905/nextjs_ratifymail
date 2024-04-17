import styles from "./navbar.module.css"
import Image from "next/image";

const navbar = () => {
    return(
        <div className={styles.navbar}>
            <div className={styles.container}>
                    <a className={styles.logo} href="http://localhost:3000/ratifymail/logged-out/home">
                        <Image
                        className={styles.logoImage}
                        src={"/logo-adaptable-final-name.svg"}
                        alt=""
                        width= "200"
                        height="50"
                        />
                    </a>
                <div className={styles.collapse}>
                    <ul className={styles.firstfour}>
                        <li className={styles.li}>
                           <a className={styles.a} href="http://localhost:3000/ratifymail/logged-out/features">Features</a> 
                        </li>
                        <li className={styles.li}>
                           <a className={styles.a} href="http://localhost:3000/ratifymail/logged-out/webapi">API</a> 
                        </li>
                        <li className={styles.li}>
                           <a className={styles.a} href="http://localhost:3000/ratifymail/logged-out/pricing">Pricing</a> 
                        </li>
                        <li className={styles.li}>
                           <a className={styles.a} href="http://localhost:3000/ratifymail/logged-out/support">Support</a> 
                        </li>
                    </ul>
                    <div className={styles.partition}></div>
                    <ul className={styles.lasttwo}>
                        <li className={styles.li}>
                            <a className={styles.a} href="http://localhost:3000/ratifymail/login">Login</a>
                        </li>
                        <li className={styles.li}>
                            <a className={styles.a} href="http://localhost:3000/ratifymail/signup">Sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default navbar

















