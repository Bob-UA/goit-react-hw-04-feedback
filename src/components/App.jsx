import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './statistics/statistics';
import css from './App.module.css';

 class App extends Component {
   state = {
     good: 0,
     neutral: 0,
     bad: 0,
   };

   onLeaveFeedback = (name) => {
     this.setState(prevState => {
       return {
         [name]: prevState[name] +1,
       };
     });
   }

   render() {
     return (
       <>
         <section className={css.section}>
           <div className={css.container}>
             <h1>Please leave feedback</h1>
             <FeedbackOptions
               valuesArray={this.state}
               onLeaveFeedback={this.onLeaveFeedback}
             />
             <Statistics
               good={this.state.good}
               neutral={this.state.neutral}
               bad={this.state.bad}
             />
           </div>
         </section>
       </>
     );
   }
 };

export default App;