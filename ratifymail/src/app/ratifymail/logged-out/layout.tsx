import Footer from "@/app/ui/logged-out/footer/footer"
import Navbar from "@/app/ui/logged-out/navbar/navbar"
import styles from "@/app/ui/logged-out/loggedout.module.css"

const layout = ({children}) => {
    return(
      <div className={styles.container}>
        <div>
          <Navbar />
        </div>
        <div>
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
  
  export default layout