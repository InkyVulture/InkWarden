function dropDown() {
  var x = document.getElementById("dropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

class nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="nav">
      <i class="fa-solid fa-bars" id="fa-icon" onclick="dropDown()"></i>
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