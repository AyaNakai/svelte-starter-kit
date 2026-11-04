<script lang="ts">
  import Header from './components/common/Header.svelte';
  import Footer from './components/common/Footer.svelte';
  import Hero from './components/sections/Hero.svelte';
  import CTA from './components/sections/CTA.svelte';
  import Button from './components/ui/Button.svelte';
  import Card from './components/ui/Card.svelte';

  let count = $state(0);
</script>

<div class="app" id="top">
  <Header />

  <main id="main" tabindex="-1">
    <Hero />

    <section id="about" class="section">
      <div class="container">
        <h2>About</h2>
        <p>
          Svelte 5を使用した開発スターターキットです。<br/>
          共通UIや開発環境の動作確認に利用できます。
        </p>
      </div>
    </section>

    <section
      id="components"
      class="section"
      aria-label="UIコンポーネントのデモ"
    >
      <div class="container">
        <div class="card-grid">
          <Card title="サンプルUIカウンター">
            <p>現在のカウント：{count}</p>

            {#snippet footer()}
              <Button onclick={() => count++}>
                カウントアップ
              </Button>

              <Button
                variant="secondary"
                onclick={() => (count = 0)}
              >
                リセット
              </Button>
            {/snippet}
          </Card>

          <Card title="Components">
            <p>
              コンポーネントを追加してください。
            </p>
          </Card>
        </div>
      </div>
    </section>

    <CTA />
  </main>

  <Footer />
</div>

<style>
  .app {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

  .section {
    padding: var(--space-8) var(--space-4);
  }

  .container {
    width: 100%;
    max-width: var(--container-width);
    margin-inline: auto;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-4);
  }

  @media (width <= 767px) {
    .card-grid {
      grid-template-columns: 1fr;
    }
  }
</style>