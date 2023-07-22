import { Link } from "react-router-dom"

export const Footer = () =>{
    return(
        <>
        <footer class="footer-distributed">

      <div class="footer-left">

        <h3>Velin<span>Porchev</span></h3>


      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p>Montana, Bulgaria</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+359884690940</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">velinporchev@gmail.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the author</span>
          Junior Fullstack developer.
        </p>

        <div class="footer-icons">
        
        <Link to={"https://www.facebook.com/velin.porchev/"}><i class="fa fa-facebook">FB</i></Link>
        <Link to={"https://www.linkedin.com/in/velin-porchev-857202283/"}><i class="fa fa-linkedin">LI</i></Link>
        <Link to={"https://github.com/VelinP"}><i class="fa fa-github"></i>GH</Link>
        

        </div>

      </div>

    </footer>
    </>

    )
}