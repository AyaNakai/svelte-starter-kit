<script lang="ts">
  type Props = {
    title?: string;
    description?: string;
  };

  let {
    title = 'Explore Components',
    description = '具体的な使い方は"components"の中身を参考にしてください。',
  }: Props = $props();
</script>

<section id="cta" class="cta" aria-labelledby="cta-title">
  <div class="cta-inner">
    <h2 id="cta-title">{title}</h2>
    <p>{description}</p>

    <a href="#components" class="cta-link"> サンプルボタン2 </a>
  </div>
</section>

<style>
  .cta {
    padding: var(--space-8) var(--space-4);
    background-color: #f3f7fc;
  }

  .cta-inner {
    max-width: var(--container-width);
    margin-inline: auto;
    text-align: center;
  }

  h2 {
    margin-top: 0;
  }

  p {
    line-height: 1.8;
  }

  .cta-link {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    margin-top: var(--space-4);
    padding: var(--space-3) var(--space-6);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-md);
    color: var(--color-primary);
    text-decoration: none;
  }

  .cta-link:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
</style>
