import React from 'react';
import { action } from '@storybook/addon-actions';
import TodoItem from '../TodoItem';

export default {
  title: 'Todo Item',
  component: TodoItem,
};

export const Default = () => (
  <TodoItem onClick={action('clicked')} todo="Simple todo" />
);
