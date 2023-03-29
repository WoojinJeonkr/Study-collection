import Title, { TitleProps } from "../../component/title/Title";
import { Meta } from '@storybook/react';

export default {
  title: "Component/Title",
  component: Title, 
} as Meta;

export const Top = (args: JSX.IntrinsicAttributes & TitleProps) => <Title { ...args } />
Top.args = { text: '제목!' };