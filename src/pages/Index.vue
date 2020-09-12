<template>
  <default-layout>
    <div class="hero-container">
      <h1 class="hero-title hero-title-1">Hi, I'm Wei Song</h1>
      <h1 class="hero-title hero-title-2">
        I'm a web developer based in Singapore.
        <span class="caret"></span>
      </h1>
      <br />
      <a class="play-animation-btn">
        <small>
          Play animation
        </small>
      </a>
    </div>
  </default-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

<style>
.hero-container {
  padding: 2rem 1rem;
  min-height: 35rem;
  max-width: 50rem;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: normal;
}

.hero-title:first-child {
  font-weight: bold;
}

span.caret {
  border-right: 0.5rem solid var(--accent-color-highlight);
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}

a.play-animation-btn {
  padding: 0rem;
  color: var(--accent-color-neutral);
}

a.play-animation-btn:hover {
  background-color: var(--accent-color-neutral);
  color: var(--accent-color-light);
  cursor: pointer;
}
</style>
