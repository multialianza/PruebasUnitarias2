<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/ejercicio-1">Ejercicio-1</router-link> |
    <router-link to="/ejercicio-2">Ejercicio-2</router-link> |
    <router-link to="/ejercicio-3">Ejercicio-3</router-link> |
    <router-link to="/ejercicio-4">Ejercicio-4</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
