import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Table, { TableHead, TableData } from '.';

const stories = storiesOf('Table', module);

stories.add(
  'default',
  () => (
    <Table>
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
  ),
  { info: 'デフォルトのテーブル' },
);
