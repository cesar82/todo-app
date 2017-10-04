import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import App from 'grommet/components/App';

import Header from '../header'
import Home from '../home'
import ToDoModal from '../toDo/modal'

import { addToDoTask, getToDoList, removeToDoTask } from '../../actions/toDo';

class Main extends Component {
  constructor() {
    super();
      this._onOpenToDoModal = this._onOpenToDoModal.bind(this);
      this._onCloseToDoModal = this._onCloseToDoModal.bind(this);
      this._addToDoTask = this._addToDoTask.bind(this);
      this._removeToDoTask = this._removeToDoTask.bind(this);

      this.state = {
        showAddToDoModal: false
      }
  }

  _onOpenToDoModal() {
    this.setState({showAddToDoModal: true});
  }

  _onCloseToDoModal() {
    this.setState({showAddToDoModal: false});
  }

  _addToDoTask(task) {
    this.props.addToDoTask(task);
    this._onCloseToDoModal();
  }

  _removeToDoTask(e) {
    this.props.removeToDoTask(e.target.id);
    this._onCloseToDoModal();
  }

  render() {
    const { getToDoList, removeToDoTask } = this.props;
    let toDoModalForm;
    if(this.state.showAddToDoModal) {
      toDoModalForm = (
        <ToDoModal
          onClose={this._onCloseToDoModal}
          addToDoTask={this._addToDoTask} />
      );
    }

    return (
      <App>
        <Header toDoList={getToDoList}
          onOpenToDoFrom={this._onOpenToDoModal}
          removeToDoTask={this._removeToDoTask} />
        <Home />
        {toDoModalForm}
      </App>
    );
  }
}

Main.propTypes = {
  addToDoTask: PropTypes.func.isRequired,
  getToDoList: PropTypes.func.isRequired,
  removeToDoTask: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { addToDoTask, getToDoList, removeToDoTask })(Main);
