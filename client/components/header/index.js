import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GHeader from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Button from 'grommet/components/Button'
import TaskIcon from 'grommet/components/icons/base/task'

class Header extends Component {
  constructor() {
    super();
      this._onRequestForAddTask = this._onRequestForAddTask.bind(this);
      this.state = {
        showAddToDoModal: false
      }
  }

  _onRequestForAddTask() {
    this.setState({showAddToDoModal: true});
  }

  render() {
    if(this.state.showAddToDoModal) {
      //alert('ces');
    }

    return (
      <GHeader colorIndex='light-2' pad={{ vertical: 'small', horizontal: 'medium' }}>
        <Title>
          Simple ToDo App
        </Title>
        <Menu responsive={true}
          inline={true}
          direction='row'>
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
        </Menu>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
          <Menu icon={<TaskIcon />} dropAlign={{"right": "right"}}>
            <Anchor href='#' className='active'>
              todo 1
            </Anchor>
            <Anchor href='#'>
             todo 2
            </Anchor>
            <Box justify='end' direction='row' responsive={false}>
              <Button label='Add' primary={true} onClick={this._onRequestForAddTask}/>
              <Button label='View List' primary={true} href='#/tasks'/>
            </Box>
          </Menu>
        </Box>
      </GHeader>
    );
  }
}

export default Header;
