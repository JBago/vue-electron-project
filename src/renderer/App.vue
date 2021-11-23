<template>
  <div class="is-clipped" id="app" style="margin:0; padding:0">
    <div class="content-custom" >
        <nav id="navBar" class="navbar is-info" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="navbar-item">
      <img class="is-shadowless" src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </div>
  </div>
  </nav>
      <transition
        name="slide-right"
        mode="out-in"
      >
        <router-view  />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageParsing',
}
</script>

<style>
  #navBar {
    position: relative;
    height: 70px;
    width: 100%;
    background-color: #1277FF;
  }
  ::-webkit-scrollbar { 
    display: none; 
}
</style>
