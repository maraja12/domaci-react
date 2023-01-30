import React from 'react';
import faqs from '../data/questions';
import SingleQuestion from '../components/Question';

const Faq = () => {
  const questions = faqs;

  return (
    <main>
      <div className='container'>
        <h3>FAQ</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Faq;
