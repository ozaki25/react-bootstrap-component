import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import FormLabel from '.';

const stories = storiesOf('FormLabel', module);

stories.add('default', () => <FormLabel children={text('label', 'ラベル')} />, {
  info: '入力域のラベル',
});
