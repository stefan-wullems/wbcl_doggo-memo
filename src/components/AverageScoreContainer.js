import React from "react";
import AverageScore from "./AverageScore";
import { connect } from "react-redux";

class AverageScoreContainer extends React.Component {
  calculateScorePercentages() {
    const score = [...this.props.averageScore];
    if (score[0].value !== 0 || score[1].value !== 0) {
      const correct =
        (100 / (score[0].value + score[1].value)) * score[0].value;
      const incorrect = 100 - correct;
      return [
        Math.round(correct * 100) / 100,
        Math.round(incorrect * 100) / 100
      ];
    } else return [0, 0];
  }

  render() {
    return (
      <div>
        {this.props.averageScore && (
          <AverageScore
            percentages={this.calculateScorePercentages()}
            score={this.props.averageScore}
            avgScoreType={this.props.avgScoreType}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ averageScore }) => ({ averageScore });

export default connect(mapStateToProps)(AverageScoreContainer);
