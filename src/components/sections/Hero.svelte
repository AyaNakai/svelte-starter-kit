<script lang="ts">
  type Props = {
    title?: string;
    description?: string;
  };

  let {
    title = 'ここにタイトル',
    description = 'Svelte 5 + Vite + TypeScriptで作成しています',
  }: Props = $props();
</script>

<section class="hero" aria-labelledby="hero-title">
  <div class="hero-inner">
    <p class="hero-label">Svelte Starter Kit</p>
    <h1 id="hero-title">{title}</h1>
    <p class="hero-description">{description}</p>

    <a href="#about" class="hero-link"> サンプルボタン </a>
  </div>
</section>

<style>
  .hero {
    display: grid;
    place-items: center;
    min-height: 480px;
    padding: var(--space-8) var(--space-4);
    background: linear-gradient(135deg, #f7fbff, #eaf3ff);
  }

  .hero-inner {
    max-width: 720px;
    text-align: center;
  }

  .hero-label {
    color: var(--color-primary);
    font-weight: 600;
  }

  h1 {
    margin-block: var(--space-4);
    font-size: clamp(2rem, 5vw, 4rem);
    line-height: 1.2;
  }

  .hero-description {
    line-height: 1.8;
  }

  .hero-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    margin-top: var(--space-6);
    padding: var(--space-3) var(--space-6);
    border-radius: var(--radius-md);
    color: #fff;
    background: var(--color-primary);
    text-decoration: none;
  }

  .hero-link:focus-visible {
    outline: 2px solid var(--color-text);
    outline-offset: 3px;
  }
</style>
