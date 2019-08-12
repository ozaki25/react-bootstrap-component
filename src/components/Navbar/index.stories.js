import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Navbar from '.';

const stories = storiesOf('Navbar', module);

stories.add(
  'default',
  () => (
    <Navbar
      title={text('title', 'タイトル')}
      links={[
        { text: 'リンク1', href: '/link1' },
        { text: 'リンク2', href: '/link2' },
        { text: 'リンク3', href: '/link3' },
      ]}
      text={text('text', 'ユーザ1さん')}
    />
  ),
  {
    info: 'ナビゲーションバー',
  },
);
