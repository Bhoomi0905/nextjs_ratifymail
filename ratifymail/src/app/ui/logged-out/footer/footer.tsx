import styles from "./footer.module.css"
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiHome } from "react-icons/ti";

const footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.colsm3}>
                        <h3 className={styles.h3} ><span className={styles.ratify}>ratify</span><span >Mail</span></h3>
                        <h6 className={styles.h6}><span className={styles.ratify}>ratify</span><span >Mail</span> is a simple and fast email verification service that increase email deliverability.</h6>
                    </div>
                    <div className={styles.colsm3}>
                        <h5 className={styles.ms5}>Quick Links</h5>
                        <ul className={styles.mt3}>
                            <li><a className={styles.a} href="http://localhost:3000/ratifymail/logged-out/features/">Email Verification</a></li>
                            <li><a className={styles.a} href="http://localhost:3000/ratifymail/logged-out/webapi/">Validation API</a></li>
                            <li><a className={styles.a} href="http://localhost:3000/ratifymail/logged-out/webapi/">API Doc</a></li>
                            <li><a className={styles.a} href="http://localhost:3000/ratifymail/logged-out/pricing/">Pricing</a></li>
                            <li><a className={styles.a} href="http://localhost:3000/ratifymail/logged-out/support/">Support</a></li>
                        </ul>
                    </div>
                    <div className={styles.colsm3}>
                        <h5 className={styles.ms51}>Support</h5>
                        <p className={styles.p}>
                        <MdOutlineMailOutline size={20} viewBox="0 -3.1 25 20"/>support@adaptable.pro</p>
                    </div>
                    <div className={styles.colsm3}>
                        <Image
                            className={styles.logoImage}
                            src={"/adaptable-logo-white.svg"}
                            alt=""
                            width= "200"
                            height="50"
                        />
                        <hr className={styles.hr} />
                         <p><TiHome size={20} viewBox="0 -2 25 20"/>1/338, Common Passage, Popat Mohalla, <br/>Nanpura, Surat - 395001, Gujarat , INDIA.</p>
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.row}>
                    <div  className={styles.colsm10}>
                        Copyright ©<a className={styles.a1} href="https://www.adaptable.pro/" target="_blank"> Adaptable Services</a> &nbsp;&nbsp;|&nbsp;&nbsp; All Rights Reserved.
                    </div>
                    <div className={styles.colsm2}>
                        <a className={styles.a} href="http://localhost:3000/ratifymail/logged-out/privacy-policy/" title="Privacy Policy">Privacy Policy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <a className={styles.a} href="http://localhost:3000/ratifymail/logged-out/terms/" title="Terms">Terms</a>
                    </div>
                </div>
            </div>
        </footer>     
    )
}

export default footer



