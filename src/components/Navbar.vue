<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">HON&YAN</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
             <router-link class="nav-link" to="/">Home</router-link> 
          </li>
          <li class="nav-item">
           <router-link class="nav-link" to="/masuk">Barang Masuk</router-link>
          </li>
          <li class="nav-item">
           <router-link class="nav-link" to="/keluar">Barang Keluar</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>