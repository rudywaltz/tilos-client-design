<script context="module">
  import { format } from 'date-fns';

  const currentDate = format(new Date(), 'yyyy-MM-dd');
  export async function preload() {
    return this.redirect(302, `napi-bontas/${currentDate}`);
  }
</script>

<svelte:head>
  <title>Archívum</title>
</svelte:head>
