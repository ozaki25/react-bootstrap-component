import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Container from '.';

const stories = storiesOf('Container', module);

stories.add(
  'default',
  () => (
    <Container>
      <div
        style={{ width: '100%', height: '500px', backgroundColor: 'lightblue' }}
      />
    </Container>
  ),
  { info: 'ウィンドウサイズに応じて左右に余白を設けるコンテナ' },
);

stories.add(
  'fluid',
  () => (
    <Container fluid>
      {' '}
      <div
        style={{ width: '100%', height: '500px', backgroundColor: 'lightblue' }}
      />
    </Container>
  ),
  { info: '常に横幅いっぱいのコンテナ' },
);
