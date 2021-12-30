const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 0.5rem;
    }

    ul {
      padding: 0;
      color: #333;
    }
    
    ul li {
      font-size: 1.5rem;
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #333;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
    .container-top {
        background-color: #212121;
        height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
    }

    .container-top img {
        width: 200px;
    }
  </style>
  <header>
    <section class="container-top">
      <a href="/">
        <img src="files/ericayee_portrait_illustration.png" alt="portrait illustration of me" />
      </a>
    </section>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="work.html">Work</a></li>
        <li><a href="fun.html">Fun</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
