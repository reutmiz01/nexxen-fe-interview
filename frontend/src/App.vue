<template>
  <div id="app">
    <nav class="navbar">
      <span class="navbar-brand">People Management</span>
    </nav>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f5f6fa;
  color: #2c3e50;
}

.navbar {
  background-color: #2c3e50;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
}

.navbar-brand {
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
}

.main-content {
  padding: 32px;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
