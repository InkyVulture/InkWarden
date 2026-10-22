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
                <button type="button" id="login" onclick="window.location.href='/placeholder.html'">
                    <p>Log In</p>
                    <i class="fa-solid fa-circle-user" id="fa-icon"></i>
                </button>
            </div>

    <div id="dropdown">
        <div id="menulinks">
            <div class="menusection">
                <a href="index.html">Home</a>
                <a href="exploreart.html">Explore Art</a>
                <a href="explorelore.html">Explore Lore</a>
            </div>
            <div class="menusection">
                <a href="profile.html">Profile</a>
                <a href="gallery.html">Gallery</a>
                <a href="lore.html">Lore</a>
                <a href="accountsettings.html">Settings</a>
            </div>
            <div class="menusection">
                <a href="about.html">About</a>
                <a href="members.html">Members</a>
                <a href="contact.html">Contact</a>
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