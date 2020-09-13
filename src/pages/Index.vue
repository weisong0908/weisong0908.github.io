<template>
  <default-layout>
    <div class="hero-container">
      <h1 class="hero-title hero-title-1">
        {{ heroTitle1Text }}
        <span class="caret" v-show="isInHeroTitle1"></span>
      </h1>
      <h1 class="hero-title hero-title-2">
        {{ heroTitle2Text }}
        <span class="caret" v-show="isInHeroTitle2"></span>
      </h1>
      <br />
      <a class="play-animation-btn" :v-show="isPlayButtonShown">
        <small>Play animation</small>
      </a>
    </div>
  </default-layout>
</template>

<script>
import animateTitle from "../assets/animate.js";

export default {
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      heroTitle1Text: "",
      heroTitle2Text: "",
      isPlayButtonShown: true,
      isInHeroTitle1: true,
      isInHeroTitle2: false,
    };
  },
  mounted() {
    animateTitle();
  },
};
</script>

<style>
@import "../assets/homepage.css";
</style>
