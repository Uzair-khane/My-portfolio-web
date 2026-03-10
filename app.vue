<template>
  <div class="app-container">
    <Header />
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    <Footer />
  </div>
</template>
