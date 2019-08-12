import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Panel from '.';
import Table, { TableHead, TableData } from '../Table';

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

stories.add(
  'with table',
  () => (
    <Panel title={text('title', 'タイトル')} withTable>
      <Table withPanel>
        <thead>
          <tr>
            <TableHead>名前</TableHead>
            <TableHead>年齢</TableHead>
            <TableHead>性別</TableHead>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>なまえ1</TableData>
            <TableData>20</TableData>
            <TableData>男</TableData>
          </tr>
          <tr>
            <TableData>なまえ2</TableData>
            <TableData>25</TableData>
            <TableData>女</TableData>
          </tr>
          <tr>
            <TableData>なまえ3</TableData>
            <TableData>30</TableData>
            <TableData>男</TableData>
          </tr>
        </tbody>
      </Table>
    </Panel>
  ),
  {
    info: 'テーブルと組み合わせたパネル',
  },
);
