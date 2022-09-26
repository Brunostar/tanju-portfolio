export default function Footer() {
  return (
    <footer class="footer">
      <a href="#" class="footer__link">My Resume</a> <br />
      <a href="mailto:tanjubrunostar0@gmail.com" class="footer__link">
        tanjubrunostar0@gmail.com
      </a>
      
      <ul class="social-list">
        <li class="social-list__item">
          <a class="social-list__link" href="https://codepen.io/Brunostar0">
            <i class="fab fa-codepen"></i>
            <p class="social-text">Codepen</p>
          </a>
        </li>
        <li class="social-list__item">
          <a class="social-list__link" href="https://www.linkedin.com/in/tanju-brunostar-4bb98b205/">
            <i class="fab fa-linkedin"></i>
            <p class="social-text">Linkedin</p>
          </a>
        </li>
        <li class="social-list__item">
          <a class="social-list__link" href="https://twitter.com/TBStar7">
            <i class="fab fa-twitter"></i>
            <p class="social-text">Twitter</p>
          </a>
        </li>
        <li class="social-list__item">
          <a class="social-list__link" href="https://github.com/Brunostar?tab=repositories">
            <i class="fab fa-github"></i>
            <p class="social-text">GitHub</p>
          </a>
        </li>
        <li class="social-list__item">
          <a class="social-list__link" href="https://wa.me/+237677704988">
            <i class="fab fa-whatsapp"></i>
            <p class="social-text">WhatsApp</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
