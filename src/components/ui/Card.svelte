<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    title: string;
    children: Snippet;
    footer?: Snippet;
    class?: string;
  };

  let {
    title,
    children,
    footer,
    class: className = '',
  }: Props = $props();
</script>

<article class={['card', className]}>
  <header class="card-header">
    <h2 class="card-title">{title}</h2>
  </header>

  <div class="card-body">
    {@render children()}
  </div>

  {#if footer}
    <footer class="card-footer">
      {@render footer()}
    </footer>
  {/if}
</article>

<style>
  .card {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-6);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background-color: var(--color-background);
  }

  .card-header {
    display: flex;
    align-items: center;
  }

  .card-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .card-body {
    flex: 1;
    min-width: 0;
  }

  .card-footer {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    padding-top: var(--space-4);
    border-top: 1px solid var(--color-border);
  }
</style>