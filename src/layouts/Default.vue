<template>
  <div>
    <header>
      <nav>
        <g-link to="/"><img src="/favicon.png" alt="Home"/></g-link>
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
      <div>
        <small>&copy; Teng Wei Song 2020</small>
      </div>
    </footer>
  </div>
</template>

<style></style>
