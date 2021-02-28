<style>

  nav {
    margin-bottom: 48px;
  }
  h3 {
    border-bottom: 1px solid #F7E1D2;
    color: #F7E1D2;
    font-family: Space Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    margin: 0;
  }

  .logo {
    flex-basis: 500px;
    flex-shrink: 1;
    text-align: center;
  }

  .menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .menu:after {
    content: '';
    background: #F7E1D2;
    height: 1px;
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 0;

  }

</style>

<script>
  export let segment;
</script>
<nav class="t-grid">
  <div class="t-cell logo">
    <a href=".">
      <img src="/logo.svg" alt="Tilos Rádió logó">
    </a>
  </div>
  <ul class="menu t-cell-auto t-grid">
    <li class="t-cell t-cell-3">
      <h3 class="{segment === undefined ? 'selected' : ''}" href=".">Műsorok</h3>
      <ul>
        <li><a href="napi-bontas">Napi Bontásban</a></li>
      </ul>
    </li>
    <li class="t-cell t-cell-3">
      <h3>Magazín</h3>
    </li>
    <li class="t-cell t-cell-3">
      <h3>Mi</h3>
    </li>
    <li class="t-cell t-cell-3">
      <h3>Támogatás</h3>
    </li>
  </ul>
</nav>
