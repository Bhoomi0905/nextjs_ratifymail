import Navbar from "@/app/ui/dashboard/navbar/navbar"
import Sidebar from "@/app/ui/dashboard/sidebar/sidebar"
import styles from "@/app/ui/dashboard/dashboard.module.css"

const layout = ({children}) => {
    return(
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Navbar />
          <div className={styles.content1}>
          {children}
          </div>
        </div>
      </div>
    )
  }
  
  export default layout