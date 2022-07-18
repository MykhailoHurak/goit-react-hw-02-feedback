import React from 'react';
import css from './App.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  options = Object.keys(this.state); // [good, neutral, bad]
  
  handleFeedbackName = index => {
    const currentFeedback = this.options[index];
    this.setState(previousState => {
      return { [currentFeedback]: previousState[currentFeedback] + 1 };
    });
  };

  // handleGood = () => {
  //   this.setState((previousState) => {
  //     console.log(this.options);
  //     return {
  //       good: previousState.good + 1,
  //   }
  //   });
  // };
  
  // handleNeutral = () => {
  //   this.setState((previousState) => {
  //     return {
  //       neutral: previousState.neutral + 1,
  //   }
  //   });
  // };
  
  // handleBad = () => {
  //   this.setState((previousState) => {
  //     return {
  //       bad: previousState.bad + 1,
  //   }
  //   });
  // };

  countTotalFeedback = () => { 
    return this.state.good + this.state.neutral + this.state.bad;
   };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100);
  };

  render() {
    return (
      <div className={css.Feedback}>
        <div className={css.Section}>
          <h2 className={css.Section__title}>Please leave feedback</h2>
          <div className={css.ButtonBox}>
            {this.options.map(element => (
              <button
                type="button"
                key={element}
                onClick={this.handleFeedbackName}
                className={css.Button}
              >{element.toLocaleUpperCase()}</button>
            ))}
            {/* <button
              type='button'
              className={css.Button}
              onClick={this.handleGood}
            >Good</button>
            <button
              type='button'
              className={css.Button}
              onClick={this.handleNeutral}
            >Neutral</button>
            <button
              type='button'
              className={css.Button}
              onClick={this.handleBad}
            >Bad</button> */}
          </div>
        </div>

        <div className={css.Section}>
          <h2 className={css.Section__title}>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            {/* <li>Total: {this.countTotalFeedback()}</li>
            <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li> */}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;




// ============================================================
// export const App = () => {
//   return (
//     <div>
//       React homework template
//     </div>
//   );
// };
