function dropDown() {
  var x = document.getElementById("dropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function searchBar() {
  var x = document.getElementById("search-bar");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}


class nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="nav">
      <div id="nav-box">
        <i class="fa-solid fa-bars" id="fa-icon" onclick="dropDown()"></i>
        <i class="fa-solid fa-magnifying-glass" id="fa-icon" onclick="searchBar"></i>
        <input type="text" id="search-bar" placeholder="Search InkWarden">
      </div>
      <button type="button" id="login" onclick="document.location='login.html'">
        <p>Log In</p>
        <i class="fa-solid fa-circle-user" id="fa-icon"></i>
      </button>
    </div>

    <div id="dropdown">
        <div id="menulinks">
            <div class="menusection">
              <button type="button" id="menu-btn" onclick="document.location='index.html'">Home</button>
              <button type="button" id="menu-btn" onclick="document.location='exploreart.html'">Explore Art</button>
              <button type="button" id="menu-btn" onclick="document.location='explorelore.html'">Explore Lore</button>
            </div>
            <div class="menusection">
              <button type="button" id="menu-btn" onclick="document.location='profile.html'">Profile</button>
              <button type="button" id="menu-btn" onclick="document.location='gallery.html'">Gallery</button>
              <button type="button" id="menu-btn" onclick="document.location='lore.html'">Lore</button>
              <button type="button" id="menu-btn" onclick="document.location='settings.html'">Settings</button>
            </div>
            <div class="menusection">
              <button type="button" id="menu-btn" onclick="document.location='about.html'">About</button>
              <button type="button" id="menu-btn" onclick="document.location='members.html'">Members</button>
              <button type="button" id="menu-btn" onclick="document.location='contact.html'">Contact</button>
            </div>
        </div>
    </div>`;
  }
}

customElements.define('nav-menu', nav);

class footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="footer">
        <links>
            <a href="members.html">Members</a> | 
            <a href="about.html">About</a> | 
            <a href="contact.html">Contact</a>
        </links>
    </div>`;
  }
}

customElements.define('footer-menu', footer);


class placeholder extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="placebox">
      <div id="placeholder">
        <h1>This page is a work in progress.</h1>
        <p>This page doesn't exist yet, but it will in the future.</p>
        <button type="button" id="home-btn" onclick="document.location='index.html'>Back to Home</button>
      </div>
    </div>`;
  }
}

customElements.define('place-holder', placeholder);