import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import Button from '../../component/button/Button';

export default {
  title: 'Component/Button',
  component: Button,
  decorators: [withKnobs],
}

export const buttonText = () => {
  // create knobs
  const name = text('name', 'Me');
  const disabled = boolean('disabled', false)

  return <Button clicked={action('clicked')} disabled={disabled} name={name} />
}