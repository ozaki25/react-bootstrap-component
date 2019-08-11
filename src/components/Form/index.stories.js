import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Form from '.';
import FormLabel from '../FormLabel';
import TextInput from '../TextInput';

const stories = storiesOf('Form', module);

const items = [
  {
    label: '名前',
    name: 'name',
    onChange: action('onChangeName'),
  },
  {
    label: '年齢',
    name: 'age',
    onChange: action('onChangeAge'),
  },
];

stories.add(
  'default',
  () => (
    <Form
      items={items}
      buttonProps={{
        label: '作成',
        primary: true,
      }}
      onSubmit={e => {
        e.preventDefault();
        action('onSubmit')(e);
      }}
    />
  ),
  {
    info: '通常のフォーム',
  },
);

stories.add(
  'button right',
  () => (
    <Form
      items={items}
      buttonProps={{
        label: '作成',
        primary: true,
      }}
      buttonRight
      onSubmit={e => {
        e.preventDefault();
        action('onSubmit')(e);
      }}
    />
  ),
  {
    info: '通常のフォーム(ボタン右寄せ)',
  },
);
