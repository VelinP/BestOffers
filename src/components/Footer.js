import { Link } from "react-router-dom"

export const Footer = () =>{
    return(
        <>
        <footer className="footer-distributed">

      <div className="footer-left">

        <h3>Best<span>Offers</span></h3>
        <p className="footer-company-about">
          <span>About the author</span>
          Junior Fullstack developer.
        </p>
      </div>

      <div className="footer-center">

        

        <div>
          <i className="fa fa-map-marker"></i>
          <p>Montana, Bulgaria</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+359 884 690940</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">velinporchev@gmail.com</a></p>
        </div>

        

      </div>

      

      <div className="footer-right">

        

        <div className="linksdiv">
          <Link to={"https://www.facebook.com/velin.porchev/"}><i className="fa fa-facebook">Facebook</i></Link>
          <Link to={"https://www.linkedin.com/in/velin-porchev-857202283/"}><i className="fa fa-linkedin">LinkedIn</i></Link>
          <Link to={"https://github.com/VelinP"}><i className="fa fa-github"></i>Github</Link>
        </div>

      </div>

    </footer>
    </>

    )
}