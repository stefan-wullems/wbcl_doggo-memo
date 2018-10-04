import React from "react";
import Option from "./Option";
import { connect } from "react-redux";
import { startShowingPL, hidePL } from "../actions/showPL";
import { incrementCorrect, incrementIncorrect } from "../actions/average-score";

class OptionContainer extends React.Component {
  state = {
    hasClicked: false,
    isCorrect: false
  };

  redirect = () => {
    this.props.hidePL();
    setTimeout(this.props.startShowingPL, 500);
  };

  checkIfIsCorrect = () => {
    this.setState({ hasClicked: true });
    if (this.props.dog === this.props.currentDog.currentDog) {
      this.setState({ isCorrect: true });
      this.props.incrementCorrect();
    } else {
      this.setState({ isCorrect: false });
      this.props.incrementIncorrect();
    }
  };

  render() {
    return (
      <Option
        dog={this.props.dog}
        checkIfIsCorrect={this.checkIfIsCorrect}
        level={this.props.level}
        redirect={this.redirect}
        hasClicked={this.state.hasClicked}
        isCorrect={this.state.isCorrect}
      />
    );
  }
}

const mapStateToProps = ({ level, currentDog }) => ({ level, currentDog });

export default connect(
  mapStateToProps,
  { startShowingPL, hidePL, incrementCorrect, incrementIncorrect }
)(OptionContainer);