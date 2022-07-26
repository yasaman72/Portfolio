class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div id="footer"></div>
        <footer id="footer">
            <section class="split contact">
                <section class="alt">
                        <h3>Email</h3>
                        <p><a href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;source=mailto&amp;to=y.farazan@gmail.com">y.farazan@gmail.com</a></p>
                </section>
                <section>
                    <h3>Social</h3>
                    <ul class="icons alt">
                        <li><a href="https://www.linkedin.com/in/yasaman-farazan/" target="_blank" class="icon brands fa-linkedin"><span class="label" >Linkedin</span></a></li>
                        <li><a href="https://twitter.com/YFarazan" target="_blank" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                        <li><a href="https://www.instagram.com/yasamanfarazan/?hl=en" target="_blank" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="https://github.com/yasaman72" target="_blank" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                    </ul>
                </section>
            </section>
        </footer>

        <!-- Copyright -->
					<div id="copyright">
						<ul>
							<li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
							<li>Images Credit: <a href="https://unsplash.com">Unsplash</a></li>
						</ul>
					</div>
        `
    }
}

customElements.define('my-footer', MyFooter)


class MyNav extends HTMLElement{
    connectedCallback(){

        this.innerHTML = `
        <nav id="nav">
        <ul class="links">
        <!-- <li class="active"><a href="index.html">projects</a></li> -->
            <li><a href="/index.html">projects</a></li>
            <li><a href="/resume.html">resume</a></li>
            <li><a href="/about.html">about</a></li>
            <!-- <li><a href="https://www.notion.so/yasaman/Yasaman-Blogs-352975e6507847c5bf260d7be64744c4" target="_blank">blog</a></li> -->
        </ul>
        <ul class="icons">
            <li><a href="https://www.linkedin.com/in/yasaman-farazan/" target="_blank" class="icon brands fa-linkedin"><span class="label">Linkedin</span></a></li>
            <li><a href="https://twitter.com/YFarazan" target="_blank" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="https://www.instagram.com/yasamanfarazan/?hl=en" target="_blank" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="https://github.com/yasaman72" target="_blank" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
        </ul>
    </nav>
        `
    }
}

customElements.define('my-nav', MyNav)
