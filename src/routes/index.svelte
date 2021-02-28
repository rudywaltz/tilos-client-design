<style>
  .t-magazine {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 12px 12px;
  }
</style>

<script>
  import Ttt from '../components/Ttt.svelte';
</script>

<svelte:head>
  <title>Tilos Rádió</title>
</svelte:head>
<div class="t-grid">
  <div class="t-cell t-cell-6">
    <Ttt></Ttt>
  </div>
  <div class="t-cell t-cell-6">
    <Ttt></Ttt>
  </div>
</div>

<div class="t-grid">
  <div class="t-cell t-cell-6">
    <h2>Ajánló</h2>
    <div class="t-magazine">
    ddd
    </div>
  </div>
  <div class="t-cell t-cell-6">
  </div>
</div>
