import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as dummyActions from "../../actions/dummyAction";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.actions.getDummy();
  }
  render() {
    return (
      <div>
        It's good to be home <br />
        <div>
          {this.props.dummyLoaded ? (
            <div style={{ margin: "20px"}}>
              <p>Dummy Loaded, here is a list of dummy</p>
              {this.props.dummy.map(function(dummy) {
                return <li key={dummy.id}>{dummy.content}</li>;
              })}
            </div>
          ) : (
            <div style={{ margin: "20px"}}>
              <CircularProgress size={60} thickness={7} />
              <p>Loading Dummy</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    dummy: state.dummy.dummy,
    dummyLoaded: state.dummy.dummyLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dummyActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
