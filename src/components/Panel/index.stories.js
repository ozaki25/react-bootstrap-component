import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Panel from '.';

const stories = storiesOf('Panel', module);

stories.add(
  'default',
  () => (
    <Panel title={text('title', 'タイトル')}>
      <p>パネルの本文</p>
    </Panel>
  ),
  {
    info: 'デフォルトカラーのパネル',
  },
);

stories.add(
  'primary',
  () => (
    <Panel title={text('title', 'タイトル')} primary>
      <p>パネルの本文</p>
    </Panel>
  ),
  {
    info: '青いのパネル',
  },
);
