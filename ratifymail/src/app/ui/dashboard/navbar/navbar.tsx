import Image from "next/image";
import styles from "./navbar.module.css";
import {IoMdArrowDropdown,IoMdSettings} from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { IoReorderThreeOutline } from "react-icons/io5";

const navbar = () => {
    return(
      <div className={styles.container}>
        <div>
          <Image
            className={styles.logoImage}
            src={"/logo-adaptable-final-name.svg"}
            alt=""
            width= "234"
            height="100"
          />
        </div>
          <div className={styles.threeline}>
            <IoReorderThreeOutline size={50} />
          </div>
          <div className={styles.align}>
          <div>
            <span className={styles.credit}>Credit Balance 
              <span className={styles.digit}>4989</span>
              <span className={styles.plus}>
                  <GoPlus viewBox="0 0 25 20" />
                </span>
            </span>
          </div>
          <div className={styles.settingicons}>
            <IoMdSettings size={20}/>
            <IoMdArrowDropdown size={20}/>
          </div>
          </div>
      </div>
    )
  }
  
  export default navbar






 
  