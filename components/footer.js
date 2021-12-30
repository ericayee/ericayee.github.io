const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      border-top: 1px solid #d5d5d5;
          max-width: 750px;
          margin: 5rem auto 0;
      padding: 1em;
    }

      ul {
      padding: 0px;
      list-style: none;
      font-weight: bold;
  }
  ul li {
      display: inline;
      margin-right: 20px;
  }
  a, a:visited, a:active {
    border-bottom: 2px solid #5E0098;
    text-decoration: none;
    color: #000;
}

a:hover {
    text-decoration: none;
    background-color: #5E0098;
    color: #fff;
}
  </style>
  <footer>
    <ul>
      <li><a href="mailto:yee.erica.e@gmail.com">email</a></li>
      <li><a href="https://www.linkedin.com/in/erica-yee/">linkedin</a></li>
      <li><a href="https://github.com/ericayee">github</a></li>
      <li><a href="files/EricaYee_Resume.pdf">resume</a></li>
    </ul>
    <div>
        2022 Erica Yee
    </div>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
