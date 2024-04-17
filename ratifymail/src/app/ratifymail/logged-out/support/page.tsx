import styles from"./support.module.css"
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const support = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <section className={styles.row1}>
            <div className={styles.container2}>
              <div className={styles.content1}>
                <h3 className={styles.h3}>How Can We Help?</h3> <br />
                <p className={styles.p1}>We'd love to hear from you. Here's how you can reach us...</p>
                <div className={styles.colsm6}>
                  <div className={styles.card}>
                    <div className={styles.cardBody}>
                      <div className={styles.row}>
                        <div className={styles.colsm3}>
                          <i className={styles.icon}><MdOutlineMailOutline /></i>
                        </div>
                        <div className={styles.colsm9}>
                          <h4 className={styles.h4}>Write to us</h4>
                          <p className={styles.p}>sales@adaptable.pro</p>
                          <p className={styles.p}>For sales queries, please send an email and our team will respond quickly.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.colsm6}>
                  <div className={styles.card}>
                    <div className={styles.cardBody}>
                      <div className={styles.row}>
                        <div className={styles.colsm3}>
                          <i className={styles.icon}><IoLocationSharp /></i>
                        </div>
                        <div className={styles.colsm9}>
                          <h4 className={styles.h4}>Office</h4>
                          <p className={styles.p}>H.No : 1/338, Common Passage, Popat Mohalla, Nanpura, Surat-395001,<br/> Gujarat <br/>INDIA.<br/> Phone: +91-7046 888 111</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default support;
