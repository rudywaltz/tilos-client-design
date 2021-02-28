<script context="module">
  export async function preload({ params }) {
    const id = params.slug;
    let content = {};
    try {
      const res = await this.fetch(`/api/v1/text/page/${id}`);
      content = await res.json();
    } catch (e) {
      console.log('error in Fetch', e);
    }

    return {
      content,
    };
  }
</script>

<script>
  export let content;
</script>

<h1>{content.title}</h1>
<div class="text-content">
  {@html content.formatted}
</div>
