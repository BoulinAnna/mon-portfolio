const prefix = location.pathname.includes("projets/") ? "../" : "./";

const navbarHTML = `
  <nav class="nav">
    <div class="nav-left">
      <a href="${prefix}index.html">ANNA BOULIN</a>
      <span class="separator">|</span>
      <a href="${prefix}projets/liste_projet.html">PORTFOLIO</a>
    </div>
    <div class="menu-toggle" id="menu-toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="nav-right" id="nav-right">
      <a href="${prefix}index.html#a-propos">À PROPOS</a>
      <a href="${prefix}projets/liste_projet.html">PROJETS</a>
      <a href="${prefix}index.html#contact">CONTACT</a>
    </div>
  </nav>
`;

const footerHTML = `
  <footer id="contact">
    <div class="footer-left">
      <a href="https://www.linkedin.com/in/annaboulin/" target="_blank" class="footer-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e3e1e1" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0
          2.761 2.239 5 5 5h14c2.762 0 5-2.239
          5-5v-14c0-2.761-2.238-5-5-5zm-11
          19h-3v-10h3v10zm-1.5-11.268c-.966
          0-1.75-.784-1.75-1.75s.784-1.75
          1.75-1.75 1.75.784
          1.75 1.75-.783 1.75-1.75
          1.75zm13.5 11.268h-3v-5.604c0-1.336-.027-3.055-1.865-3.055-1.867
          0-2.153 1.46-2.153 2.965v5.694h-3v-10h2.879v1.367h.041c.401-.76
          1.379-1.561 2.84-1.561 3.038 0
          3.6 2 3.6 4.599v5.595z"/>
          </svg>
      LinkedIn
    </a>
  </div>


    <div class="footer-center">
      <a href="https://github.com/boulinanna" target="_blank" class="footer-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e3e1e1" viewBox="0 0 24 24">
          <path d="M12 0.297C5.373 0.297 0
          5.67 0 12.297c0 5.284 3.438 9.77
          8.205 11.387.6.113.82-.26.82-.577
          0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.614-4.042-1.614-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729
          1.205.084 1.84 1.237 1.84 1.237
          1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.931
          0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176
          0 0 1.008-.322 3.301 1.23.957-.266
          1.984-.399 3.003-.404 1.018.005
          2.045.138 3.003.404 2.291-1.553
          3.297-1.23 3.297-1.23.653 1.653.241
          2.873.118 3.176.77.84 1.233 1.911
          1.233 3.221 0 4.61-2.807 5.624-5.479
          5.921.43.37.823 1.102.823 2.222
          0 1.606-.014 2.898-.014 3.293
          0 .319.216.694.825.576C20.565
          22.062 24 17.578 24 12.297
          24 5.67 18.627 0.297 12 0.297z"/>
          </svg>
        GitHub
      </a>
    </div>


    <div class="footer-right">
      <a href="mailto:boulin.anna@hotmail.fr" class="footer-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e3e1e1" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2
          2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9
          2-2V6c0-1.1-.9-2-2-2zm0 4-8
          5-8-5V6l8 5 8-5v2z"/>
        </svg>
        boulin.anna@hotmail.fr
      </a>
    </div>
  </footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const footer = document.getElementById("footer");

  if (navbar) navbar.innerHTML = navbarHTML;
  if (footer) footer.innerHTML = footerHTML;

  const toggle = document.getElementById("menu-toggle");
  const navRight = document.getElementById("nav-right");

  if (toggle && navRight) {
    toggle.addEventListener("click", () => {
      navRight.classList.toggle("mobile-visible");

    });
  }

  // 💡 Nouveau code ici
  const navLinks = document.querySelectorAll('#nav-right a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navRight.classList.remove('mobile-visible');
    });
  });
});
