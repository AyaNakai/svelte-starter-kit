<script lang="ts">
  type Props = {
    siteName?: string;
  };

  let { siteName = 'Svelte Starter Kit' }: Props = $props();
</script>

<header class="header">
  <a class="skip-link" href="#main">本文へスキップ</a>

  <div class="header-inner">
    <a class="header-logo" href="#top">
      {siteName}
    </a>

    <nav class="header-nav" aria-label="メインナビゲーション">
      <a href="#about">About</a>
      <a href="#components">Components</a>
    </nav>
  </div>
</header>

<style>
  .header {
    border-bottom: 1px solid var(--color-border);
    background-color: var(--color-background);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    max-width: var(--container-width);
    margin-inline: auto;
    padding: var(--space-4);
  }

  .header-logo {
    color: var(--color-text);
    font-weight: 700;
    text-decoration: none;
  }

  .header-nav {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
  }

  .header-nav a {
    color: var(--color-text);
    text-decoration: none;
  }

  .header a:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
  }

  .skip-link {
    position: absolute;
    z-index: 10;
    top: 0;
    left: -9999px;
    padding: var(--space-3);
    background: var(--color-background);
  }

  .skip-link:focus {
    left: var(--space-4);
  }

  @media (width <= 640px) {
    .header-inner {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>