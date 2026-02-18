import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import LoadingScreen from './components/LoadingScreen';
import ResultScreen from './components/ResultScreen';
import BackgroundParticles from './components/BackgroundParticles';
import { questions } from './data';

const PHASES = {
  START: 'start',
  QUESTIONS: 'questions',
  LOADING: 'loading',
  RESULT: 'result',
};

function App() {
  const [phase, setPhase] = useState(PHASES.START);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [cardExiting, setCardExiting] = useState(false);
  const [exitDirection, setExitDirection] = useState('left');

  const handleStart = () => {
    setPhase(PHASES.QUESTIONS);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));

    const optionIndex = questions[currentQuestionIndex].options.findIndex(
      (o) => o.value === value
    );
    setExitDirection(optionIndex % 2 === 0 ? 'left' : 'right');
    setCardExiting(true);

    setTimeout(() => {
      setCardExiting(false);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setPhase(PHASES.LOADING);
      }
    }, 400);
  };

  const handleSkip = () => {
    setExitDirection('left');
    setCardExiting(true);
    setTimeout(() => {
      setCardExiting(false);
      setCurrentQuestionIndex(questions.length - 1);
    }, 400);
  };

  const handleLastAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setExitDirection('left');
    setCardExiting(true);
    setTimeout(() => {
      setCardExiting(false);
      setPhase(PHASES.LOADING);
    }, 400);
  };

  const handleLoadingComplete = () => {
    setPhase(PHASES.RESULT);
  };

  const handleRestart = () => {
    setPhase(PHASES.START);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  return (
    <div className="app">
      <BackgroundParticles />

      <div className="app-content">
        {phase === PHASES.START && <StartScreen onStart={handleStart} />}

        {phase === PHASES.QUESTIONS && (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onAnswer={
              questions[currentQuestionIndex].isLastQuestion
                ? handleLastAnswer
                : handleAnswer
            }
            onSkip={handleSkip}
            isExiting={cardExiting}
            exitDirection={exitDirection}
          />
        )}

        {phase === PHASES.LOADING && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}

        {phase === PHASES.RESULT && (
          <ResultScreen answers={answers} onRestart={handleRestart} />
        )}
      </div>
    </div>
  );
}

export default App;
