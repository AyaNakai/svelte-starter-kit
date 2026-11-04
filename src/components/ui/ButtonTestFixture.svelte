<script lang="ts">
  import Button from './Button.svelte';

  let count = $state(0);
</script>

<Button onclick={() => count++}>
  Count: {count}
</Button>
