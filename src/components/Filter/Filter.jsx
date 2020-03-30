import React from 'react';
import { connect } from 'react-redux';
import {
  showAll,
  showActive,
  showCompleted
} from '../../actions/visibleFilterActionCreator';
import './Filter.css';

const Filter = (props) => {
  return (
    <div className="container Filter-container">
      <button onClick={props.showAll}>全てを表示</button>
      <button onClick={props.showActive}>未完了のみを表示</button>
      <button onClick={props.showCompleted}>完了のみを表示</button>
    </div>
  );
};

const mapDispatchToProps = {
  showAll,
  showActive,
  showCompleted
};

export default connect(
  null,
  mapDispatchToProps
)(Filter);