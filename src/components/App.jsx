import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './statistics/statistics';
import css from './App.module.css';

 function App (){
   const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);
   const bottomNames = { good, neutral, bad, };

   const onLeaveFeedback = (name) => {
    if (name === 'good') {
      return setGood(good +1);
     }
     if (name === 'neutral') {
     return setNeutral(neutral +1);
     }
        if (name === 'bad') {
          return setBad(bad +1);
        }
   }
   


     return (
       <>
         <section className={css.section}>
           <div className={css.container}>
             <h1>Please leave feedback</h1>
             <FeedbackOptions
               valuesArray={bottomNames}
               onLeaveFeedback={onLeaveFeedback}
             />
             <Statistics
               good={good}
               neutral={neutral}
               bad={bad}
             />
           </div>
         </section>
       </>
     );
   }

export default App;