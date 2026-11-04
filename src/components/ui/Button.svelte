<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Props = HTMLButtonAttributes & {
    variant?: 'primary' | 'secondary';
    children: Snippet;
  };

  let {
    children,
    variant = 'primary',
    class: className = '',
    type = 'button',
    ...attributes
  }: Props = $props();
</script>

<button {type} {...attributes} class={['button', `button-${variant}`, className]}>
  {@render children()}
</button>

<style>
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-3) var(--space-4);
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    font: inherit;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .button-primary {
    color: #fff;
    background-color: var(--color-primary);
  }

  .button-secondary {
    color: var(--color-text);
    background-color: var(--color-background);
    border-color: var(--color-border);
  }

  .button:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .button:hover:not(:disabled) {
    opacity: 0.8;
  }
</style>
