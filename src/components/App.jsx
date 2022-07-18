import React from 'react';
import css from './App.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  options = Object.keys(this.state); // [good, neutral, bad]
  
  handleFeedbackName = currentFeedback => {
    this.setState(previousState => {
      return { [currentFeedback]: previousState[currentFeedback] + 1 };
    });
  };

  // handleGood = () => {
  //   this.setState((previousState) => {
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
    // return this.state.good + this.state.neutral + this.state.bad;
    return Object.values(this.state).reduce((total, element) => total + element, 0)
   };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
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
                onClick={() => this.handleFeedbackName(element)}
                className={css.Button}
              >{element}</button>
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
          <ul className={css.Statistics__box}>
            <li className={css.Statistics__item}>Good: <span className={css.Statistics__itemValue}>{this.state.good}</span></li>
            <li className={css.Statistics__item}>Neutral: <span className={css.Statistics__itemValue}>{this.state.neutral}</span></li>
            <li className={css.Statistics__item}>Bad: <span className={css.Statistics__itemValue}>{this.state.bad}</span></li>
            <li className={css.Statistics__item}>Total: <span className={css.Statistics__itemValue}>{this.countTotalFeedback()}</span></li>
            <li className={css.Statistics__item}>Positive feedback: <span className={css.Statistics__itemValue}>{this.countPositiveFeedbackPercentage()}%</span></li>
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
