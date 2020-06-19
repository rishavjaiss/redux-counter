import React from "react";
import "./App.css";
import { connect } from "react-redux";
function App(props) {
  return (
    <div className="App">
      <div>
        Age : <span>{props.age}</span>
      </div>
      <button onClick={props.ageUp}>Age Up</button>
      <button onClick={props.ageDown}>Age Down</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: () => dispatch({ type: "AGE_UP" }),
    ageDown: () => dispatch({ type: "AGE_DOWN" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
