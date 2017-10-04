import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

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
import Timestamp from 'grommet/components/Timestamp';
import CheckBox from 'grommet/components/CheckBox';

const EMPTY_LIST_LABEL = (
  <Anchor href='#' align='center'>
    <Heading tag='h3'>
      No ToDos
    </Heading>
  </Anchor>
);

class Header extends Component {

  constructor() {
    super();
    this._getToDoItems = this._getToDoItems.bind(this);
  }

  _getToDoItems() {
    let list = this.props.toDoList();
    if (isEmpty(list)) {
      return EMPTY_LIST_LABEL;
    }

    return list.map((task, index) => {
      let { id, description, dueDate } = task;
      let isDue = Moment().isAfter(Moment(dueDate));
      return (
        <Anchor key={index}
          href='#'
          className={classnames('todoItem', {'dueState': isDue})}
          title={description}>
          <Heading tag='h5'>
            <Timestamp value={dueDate} />
          </Heading>

          <Label truncate={true}
            size='small' maxwidth='10'>
            <CheckBox id={id}
              onChange={this.props.removeToDoTask}/>
            {description}
          </Label>
        </Anchor>
      );
    });
  }

  render() {
    const items = this._getToDoItems();
    const disabledAdd = this.props.toDoList().length >= 5;
    const handler = disabledAdd ? undefined : this.props.onOpenToDoFrom;

    return (
      <GHeader colorIndex='light-2'
        pad={{ vertical: 'small', horizontal: 'small' }}>
        <Title>
          Simple ToDo App
        </Title>

        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false} >
          <Menu id="todoMenu"
            icon={<TaskIcon />}
            dropAlign={{"right": "right"}}
            className='toDoMenu' >
            {items}
            <Box justify='center'
              direction='row'
              responsive={false}>
              <Button label='Add'
                primary={true}
                className={classnames({'grommetux-anchor--disabled': disabledAdd})}
                onClick={handler}/>
            </Box>
          </Menu>
        </Box>
      </GHeader>
    );
  }
}

Header.propTypes = {
  onOpenToDoFrom: PropTypes.func.isRequired,
  toDoList: PropTypes.func.isRequired,
  removeToDoTask: PropTypes.func.isRequired
}

export default Header;
