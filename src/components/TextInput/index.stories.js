import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import TextInput from '.';

const stories = storiesOf('TextInput', module);

stories.add('default', () => <TextInput />, { info: 'デフォルトの入力域' });
