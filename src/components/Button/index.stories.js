import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '.';

const stories = storiesOf('Button', module);

const props = {
  children: 'Hello',
  onClick: action('click'),
};

stories.add('通常パターン', () => <Button {...props} />);
