<script lang="ts">
  type Props = {
    siteName?: string;
  };

  let { siteName = 'Svelte Starter Kit' }: Props = $props();

  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-inner">
    <small>
      &copy; {currentYear}
      {siteName}
    </small>

    <a href="#top">ページトップへ</a>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--color-border);
    background-color: var(--color-background);
  }

  .footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-4);
    max-width: var(--container-width);
    margin-inline: auto;
    padding: var(--space-6) var(--space-4);
  }

  .footer a {
    color: var(--color-text);
    text-decoration: none;
  }

  .footer a:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
  }
</style>
