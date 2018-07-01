import React from "react";

import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import * as dummyActions from "../../actions/dummyAction";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getDummy();
  }

  render() {
    return (
      <div>
        It's good to be home <br />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
      dummy: state.dummy,
      //data: state.dummy.data,
      //loading: state.dummy.dummyLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(dummyActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
