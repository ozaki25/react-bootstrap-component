import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from '.';

const stories = storiesOf('Button', module);

stories.add(
  'nomal',
  () => (
    <Button children={text('label', 'Hello')} onClick={action('click')} nomal />
  ),
  { info: 'nomalを渡すと白いボタンになる' },
);

stories.add(
  'primary',
  () => (
    <Button
      children={text('label', 'Hello')}
      onClick={action('click')}
      primary
    />
  ),
  { info: 'primaryを渡すと青いボタンになる' },
);

stories.add(
  'disabled',
  () => (
    <Button
      children={text('label', 'Hello')}
      onClick={action('click')}
      disabled
    />
  ),
  { info: 'disabledを渡すと非活性状態になる' },
);
