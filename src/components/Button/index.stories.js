import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from '.';

const stories = storiesOf('Button', module);

stories.add(
  'default',
  () => <Button label={text('label', 'Hello')} onClick={action('click')} />,
  { info: 'デフォルトのボタン' },
);

stories.add(
  'primary',
  () => (
    <Button label={text('label', 'Hello')} onClick={action('click')} primary />
  ),
  { info: 'primaryを渡すと青いボタンになる' },
);

stories.add(
  'disabled',
  () => (
    <Button label={text('label', 'Hello')} onClick={action('click')} disabled />
  ),
  { info: 'disabledを渡すと非活性状態になる' },
);

stories.add(
  'xs',
  () => (
    <Button
      label={text('label', 'Hello')}
      onClick={action('click')}
      size="xs"
    />
  ),
  { info: 'size属性にxsを渡すととても小さいボタンになる' },
);

stories.add(
  'sm',
  () => (
    <Button
      label={text('label', 'Hello')}
      onClick={action('click')}
      size="sm"
    />
  ),
  { info: 'size属性にsmを渡すと小さいボタンになる' },
);

stories.add(
  'lg',
  () => (
    <Button
      label={text('label', 'Hello')}
      onClick={action('click')}
      size="lg"
    />
  ),
  { info: 'size属性にlgを渡すととても大きいボタンになる' },
);
