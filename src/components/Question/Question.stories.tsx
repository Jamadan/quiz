import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Question from './Question';

export default {
  title: 'Question',
  component: Question,
} as ComponentMeta<typeof Question>;

const Template: ComponentStory<typeof Question> = (args) => (
  <Question {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  question: {
    category: 'Category',
    type: 'Type',
    difficulty: 'Difficulty',
    question: 'Question 1',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  answer: (value) => console.log(value),
  index: '1/10',
};
