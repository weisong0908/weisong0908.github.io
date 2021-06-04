<template>
  <div class="main-container">
    <header>
      <nav>
        <g-link class="site-logo" to="/">
          <img src="/favicon.png" alt="Home" />
        </g-link>
        <g-link to="/about/">About</g-link>
        <g-link to="/works/">Works</g-link>
        <a href="https://blog.tengweisong.com">Blog</a>
      </nav>
    </header>
    <slot />
    <footer>
      <nav>
        <a href="mailto:hi@tengweisong.com?subject=Hi">Email</a>
        <a href="https://www.linkedin.com/in/tengweisong/">LinkedIn</a>
        <a href="https://github.com/weisong0908">Github</a>
      </nav>
      <div class="footer-copyright">
        <small>&copy; Teng Wei Song 2020</small>
      </div>
    </footer>
  </div>
</template>

<style>
@import "../assets/base.css";
</style>
