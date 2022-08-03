import type { NextPage } from "next";
import Question from "../components/Question";
import Results from "../components/Results";
import Start from "../components/Start";
import { useStore } from "../hooks/useStore";

const Home: NextPage = () => {
  const { questionList } = useStore();

  const { questions, clearQuestions, setQuestionAnswer, getQuestions } =
    questionList;

  if (questions.length && questions.every((q) => !!q.selectedAnswer)) {
    return (
      <Results questions={questions} startAgain={() => clearQuestions()} />
    );
  }
  if (questions.length) {
    const nextQuestionIndex = questions.findIndex(
      (q) => q.selectedAnswer === undefined
    );
    return (
      <Question
        question={questions[nextQuestionIndex]}
        answer={(value: string) => setQuestionAnswer(nextQuestionIndex, value)}
        index={`${nextQuestionIndex}/${questions.length}`}
      />
    );
  }

  return <Start begin={() => getQuestions()} />;
};

export default Home;
