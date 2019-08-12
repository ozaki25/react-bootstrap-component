import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Heading, { SubHeading } from '.';

const stories = storiesOf('Heading', module);

stories.add(
  'level 1',
  () => <Heading level="1">{text('text', '見出しレベル1')}</Heading>,
  { info: '見出しレベル1' },
);

stories.add(
  'level 1 with sub heading',
  () => (
    <Heading level="1">
      {text('text', '見出しレベル1 ')}
      <SubHeading>{text('sub', '小見出し')}</SubHeading>
    </Heading>
  ),
  { info: '見出しレベル1' },
);

stories.add(
  'level 2',
  () => <Heading level="2">{text('text', '見出しレベル2')}</Heading>,
  { info: '見出しレベル2' },
);

stories.add(
  'level 2 with sub heading',
  () => (
    <Heading level="2">
      {text('text', '見出しレベル2 ')}
      <SubHeading>{text('sub', '小見出し')}</SubHeading>
    </Heading>
  ),
  { info: '見出しレベル2' },
);

stories.add(
  'level 3',
  () => <Heading level="3">{text('text', '見出しレベル3')}</Heading>,
  { info: '見出しレベル3' },
);

stories.add(
  'level 3 with sub heading',
  () => (
    <Heading level="3">
      {text('text', '見出しレベル3 ')}
      <SubHeading>{text('sub', '小見出し')}</SubHeading>
    </Heading>
  ),
  { info: '見出しレベル3' },
);

stories.add(
  'level 4',
  () => <Heading level="4">{text('text', '見出しレベル4')}</Heading>,
  { info: '見出しレベル4' },
);

stories.add(
  'level 4 with sub heading',
  () => (
    <Heading level="4">
      {text('text', '見出しレベル4 ')}
      <SubHeading>{text('sub', '小見出し')}</SubHeading>
    </Heading>
  ),
  { info: '見出しレベル4' },
);

stories.add(
  'level 5',
  () => <Heading level="5">{text('text', '見出しレベル5')}</Heading>,
  { info: '見出しレベル5' },
);

stories.add(
  'level 5 with sub heading',
  () => (
    <Heading level="5">
      {text('text', '見出しレベル5 ')}
      <SubHeading>{text('sub', '小見出し')}</SubHeading>
    </Heading>
  ),
  { info: '見出しレベル5' },
);

stories.add(
  'level 6',
  () => <Heading level="6">{text('text', '見出しレベル6')}</Heading>,
  { info: '見出しレベル6' },
);

stories.add(
  'level 6 with sub heading',
  () => (
    <Heading level="6">
      {text('text', '見出しレベル6 ')}
      <SubHeading>{text('sub', '小見出し')}</SubHeading>
    </Heading>
  ),
  { info: '見出しレベル6' },
);
