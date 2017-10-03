import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import GHeader from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Button from 'grommet/components/Button'
import TaskIcon from 'grommet/components/icons/base/task'
import StatusIcon from 'grommet/components/icons/base/edit'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label';

class Header extends Component {
  render() {
    let items = this.props.todoList().map((task, index) => {
      return (
        <Anchor key={index}
          href='#'>
          <Heading tag='h5'>
            {Moment(task.dueDate).format('MM/DD/YYYY')}
          </Heading>

          <Label truncate={true}
            size='small' maxwidth='10'>
            {task.description}
          </Label>
        </Anchor>
      );
    });

    return (
      <GHeader colorIndex='light-2' pad={{ vertical: 'small', horizontal: 'small' }}>
        <Title>
          Simple ToDo App
        </Title>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false} />
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false} >
          <Menu id="todoMenu" icon={<TaskIcon />} dropAlign={{"right": "right"}} size='small'>
            {items}
            <Box justify='end' direction='row' responsive={false}>
              <Button label='Add' primary={true} onClick={this.props.onOpenToDoFrom}/>
            </Box>
          </Menu>
        </Box>
      </GHeader>
    );
  }
}

Header.propTypes = {
  onOpenToDoFrom: PropTypes.func.isRequired,
  todoList: PropTypes.func.isRequired
}

export default Header;
