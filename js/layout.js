// Détecte si on est dans un sous-dossier "projets"
const prefix = location.pathname.includes("projets/") ? "../" : "./";

// === NAVBAR ===
const navbarHTML = `
  <nav class="nav">
    <div class="nav-left">
      <a href="${prefix}index.html">ANNA BOULIN</a>
      <span class="separator">|</span>
      <a href="${prefix}index.html">PORTFOLIO</a>
    </div>
    <div class="nav-right">
      <a href="${prefix}index.html#a-propos">À PROPOS</a>
      <a href="${prefix}projets/liste_projet.html">PROJETS</a>
      <a href="${prefix}index.html#contact">CONTACT</a>
    </div>
  </nav>
`;

// === FOOTER ===
const footerHTML = `
  <footer id="contact">
    <div class="footer-left">
      <a href="https://www.linkedin.com/in/annaboulin/" target="_blank" class="footer-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e3e1e1" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761
          2.239 5 5 5h14c2.762 0 5-2.239
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
    <div class="footer-right">
      <a href="mailto:boulin.anna@hotmail.fr" class="footer-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e3e1e1" viewBox="0 0 24 24">
          <path d="M2 4c-1.1 0-2 .9-2
          2v12c0 1.1.9 2 2
          2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H2zm0
          2h20v.01L12 13 2 6.01V6zm0
          2.24l7.76 5.02c.69.44 1.79.44
          2.48 0L22 8.24V18H2V8.24z"/>
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
});
