<template>
  <nav>
    <router-link to="/pizzometro">Pizzometro</router-link> |
    <router-link to="/orcamentodetintas">Orçamento de Tintas</router-link>
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

nav a{
  color: #000;
  text-decoration: none;
  padding: 10px;
  border-radius: 0.5rem;
}

nav a.router-link-exact-active {
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  background-color: #000;
  color: #fff;
  border: none;
}

nav a:hover {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
}

nav a:focus {
  outline: none;
}
</style>
