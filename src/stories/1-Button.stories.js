import React from 'react';
import { action } from '@storybook/addon-actions';
import  Button  from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button label="Hello Button" onClick={action('clicked')}/>


