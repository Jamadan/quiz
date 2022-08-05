import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Results from './Results';
import { Question } from '../../types/Question';

const question: Question = {
  category: 'Category',
  type: 'Type',
  difficulty: 'Difficulty',
  question: 'Question',
  correct_answer: 'True',
  incorrect_answers: ['False'],
};

const generateQuestions = () =>
  [...Array(10)].map((v, idx) => {
    return {
      ...question,
      question: `${question.question} ${idx + 1}`,
      selectedAnswer: 'False',
      ...(idx < 5 && { selectedAnswer: 'True' }),
    };
  });

export default {
  title: 'Results',
  component: Results,
} as ComponentMeta<typeof Results>;

const Template: ComponentStory<typeof Results> = (args) => (
  <Results {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  questions: generateQuestions(),
  startAgain: () => console.log('START AGAIN'),
};
