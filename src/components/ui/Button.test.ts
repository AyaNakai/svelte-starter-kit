import { fireEvent, render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import { tick } from 'svelte';

import ButtonTestFixture from './ButtonTestFixture.svelte';

test('クリックするとカウントが増える', async () => {
  render(ButtonTestFixture);

  const button = screen.getByRole('button', {
    name: 'Count: 0',
  });

  await fireEvent.click(button);
  await tick();

  expect(
    screen.getByRole('button', {
      name: 'Count: 1',
    }),
  ).toBeTruthy();
});
