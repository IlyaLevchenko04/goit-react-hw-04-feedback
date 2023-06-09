import React, { useState } from 'react';
import { Statistics } from '../Statistics';
import { FeedbackOptions } from './FeedbackStyled/FeedbackOptions';
import { Section } from './Section';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = (good, bad, neutral) => {
    return bad + neutral + good;
  };

  const countPositiveFeedbackPercentage = (good, bad, neutral) => {
    return ((good / (bad + neutral + good)) * 100).toFixed(2);
  };

  const onLeaveFeedback = evt => {
    const currentTarget = evt.currentTarget;
    const currentName = currentTarget.name;
    if (currentName === 'good') {
      setGood(prevState => prevState + 1);
    }

    if (currentName === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }

    if (currentName === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  return (
    <div>
      <Section title={'Leave your feedback'}>
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys({ good, bad, neutral })}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={countTotalFeedback(good, bad, neutral)}
          positivePercentage={countPositiveFeedbackPercentage(
            good,
            bad,
            neutral
          )}
        />
      </Section>
    </div>
  );
};
