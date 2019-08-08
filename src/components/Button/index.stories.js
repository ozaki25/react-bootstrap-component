import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from '.';

const stories = storiesOf('Button', module);

stories.add('通常パターン', () => (
  <Button children={text('label', 'Hello')} onClick={action('click')} />
));
