import { Link } from "react-router-dom"
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

export const Footer = () =>{
    return(
        <>
        <footer className="footer-distributed">

      <div className="footer-left">

        <h3>Best<span>Offers</span></h3>
        <p className="footer-company-about">
          <span>About the author</span>
          Junior Fullstack developer just looking for a job.
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
          <Link to={"https://www.facebook.com/velin.porchev/"}><BsFacebook size={'3rem'}/></Link>
          <Link to={"https://www.linkedin.com/in/velin-porchev-857202283/"}><BsLinkedin size={'3rem'}/></Link>
          <Link to={"https://github.com/VelinP"}><BsGithub size={'3rem'}/></Link>
        </div>

      </div>

    </footer>
    </>

    )
}