import styles from "./login.module.css"
import Image from "next/image";
import Head from "next/head";

const login = () => {
    return(
      <div>
        <html lang="en">
        <Head>
            <title>Login into Your Account ratifyMail</title>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="Login into Your Account ratifyMail" />
            <meta name="description" content="Login into Your Account ratifyMail" />
            <link rel="canonical" href="http://localhost:3000/ratifymail/login/" />
            <link rel="shortcut icon" type="image/x-icon" href="http://localhost:3000/ratifymail/favicon.ico" />
        
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;200;300;400;500;600;700&amp;display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        
            <meta property="og:title" content="Login into Your Account ratifyMail" />
            <meta property="og:description" content="Login into Your Account ratifyMail" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://localhost:3000/ratifymail/login/" />
            <meta property="og:image" content="next/image/logo.png" />
        
            {/* Vendor Style Sheet */}
            <link href="./bootstrap.min.css" rel="stylesheet" />
            <link href="./icons.min.css" rel="stylesheet" />
            <link href="./select2.min.css" rel="stylesheet" />
            <link href="./select2-bootstrap.min.css" rel="stylesheet" />
        
            {/* Google Chart */}
            <script src="https://www.gstatic.com/charts/loader.js"></script>
        
            {/* Default Style Sheets */}
            <link href="./colors.css" rel="stylesheet" />
            <link href="./app.min.css?v=1.0.1" rel="stylesheet" />
            <link href="./style.css" rel="stylesheet" />
        
            {/* Data table */}
            <link rel="stylesheet" type="text/css" href="./dataTables.bootstrap5.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/jszip-2.5.0/dt-1.10.24/b-1.7.0/b-colvis-1.7.0/b-html5-1.7.0/b-print-1.7.0/fc-3.3.2/fh-3.1.8/kt-2.6.1/r-2.2.7/rg-1.1.2/rr-1.2.7/sc-2.0.3/sb-1.0.1/sp-1.2.2/sl-1.3.2/datatables.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/fixedheader/3.1.9/css/fixedHeader.dataTables.min.css" />
        
            {/* AOS (Animate On Scroll) */}
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        
            {/* Owl Carousel */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css" />
        </Head>
            <body className={styles.body}>
              <div className={styles.cotainer}>
                <div className={styles.align}>
                  <section className={styles.bg}>
                    <div className={styles.cotainer1}>
                      <div className={styles.cotainer2}>
                        <div className={styles.text1}>
                          <h1 className={styles.h1}>
                            The best offer <br/>
                            <span className={styles.h11}>for your business</span>
                          </h1>
                          <p className={styles.p}>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                          Temporibus, expedita iusto veniam atque, magni tempora mollitia
                          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                          ab ipsum nisi dolorem modi. Quos?
                          </p>
                        </div>
                        <div className={styles.boxContainer}>
                          <div className={styles.shape1} id="radius-shape-1" ></div>
                            <div id="radius-shape-2"></div>
                            <div>
                              <div >
                                <a href="http://localhost:3000/ratifymail/">
                                  <Image
                                  className={styles.logoImage}
                                  src={"/logo-adaptable-final-name.svg"}
                                  alt=""
                                  width= "200"
                                  height="50"
                                  />
                                  {/* <img src="/ratifymail/theme/default//assets/images/logo-adaptable-final-name.svg" class="img-fluid w-50"> */}
                                </a>
                                <h3 >Log in</h3>
                                <p >
                                    <span  >OR</span>
                                </p>
                                <p  >Log in using email address</p>
                                  <form id="login" action="http://localhost:3000/ratifymail/login/?action=chk" method="POST" >
                                    <div>
                                      <input type="email" id="loginID" name="loginID"  />
                                      <label >Email address</label>
                                    </div>
                                      <div >
                                        <input type="password" id="customerPass" name="customerPass" />
                                          <label >Password</label>
                                            <a href="http://localhost:3000/ratifymail/forgot-password/" >Forgot Password?</a>
                                      </div>
                                      <div >
                                        <button type="submit" >Log In</button>
                                      </div>
                                      <p >Need to create an account?<a href="http://localhost:3000/ratifymail/signup/"> Sign Up</a></p>
                                  </form>
                              </div>
                         </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
                {/* JavaScript */}
                <script>
                  {`
                    (function () {
                      'use strict'
                    
                      // Fetch all the forms we want to apply custom Bootstrap validation styles to
                      var forms = document.querySelectorAll('.needs-validation')
                      var formerror = 0;
                    
                      // Loop over them and prevent submission
                      Array.prototype.slice.call(forms)
                        .forEach(function (form) {
                          form.addEventListener('submit', function (event) {
                            if (!form.checkValidity()) {
                              event.preventDefault();
                              event.stopPropagation();
                            }
                            form.classList.add('was-validated');
                          }, false)
                        })
                    })();
                  `}
                </script>
                <script>sitepath = "http://localhost:3000/ratifymail/logged-out/home/";</script>
                <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
                <script src="./js/bootstrap.min.js"></script>
                <script src="./js/vendor.min.js"></script>
                <script src="./js/select2.full.min.js"></script>
                <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
            </body>
            </html>
      </div>
    )
  }
  
  export default login