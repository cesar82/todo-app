import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Uuid from 'uuid';
import Moment from 'moment';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import DateTime from 'grommet/components/DateTime';

const MAX_CHARACTERS = 140;

class Modal extends Component {

  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
    this._onTextChange = this._onTextChange.bind(this);
    this._onDateChange = this._onDateChange.bind(this);

    this.state = {
      description: undefined,
      dueDate: Moment().add(1, 'hours')
    }
  }

  _onSubmit(e) {
    e.preventDefault();
    if (this.state.description) {
      let task = {
        id: Uuid(),
        description: this.state.description,
        dueDate:  this.state.dueDate,
        createdAt: new Date()
      };
      this.props.addToDoTask(task);
    }
  }

  _onTextChange(e) {
    this.setState({ description: e.target.value });

  }

  _onDateChange(date) {
    this.setState({dueDate: Moment(date)});
  }

  render() {
    const disabledAdd = isEmpty(this.state.description);
    const handler = disabledAdd ? undefined : this._onSubmit;

    return (
      <Layer closer={true} onClose={this.props.onClose}>
        <header>
          <h3>Add To Do task</h3>
          <Form pad='medium'>
            <FormFields pad='medium'>
              <fieldset>
                <FormField>
                  <TextInput id='description'
                    name='description'
                    placeHolder={`${MAX_CHARACTERS} characters max`}
                    onDOMChange={this._onTextChange}
                    maxLength={MAX_CHARACTERS}
                    defaultValue={this.state.description} />
                </FormField>
                <FormField>
                  <DateTime id='id'
                    name='name'
                    value={this.state.dueDate}
                    onChange={this._onDateChange}/>
                </FormField>
              </fieldset>
            </FormFields>
            <Footer pad={{"vertical": "small"}} align='center'>
              <Box>
                <Button primary={true}
                  label='Add'
                  className={classnames({'grommetux-anchor--disabled': disabledAdd})}
                  onClick={handler}/>

              </Box>
              <Box pad={{"horizontal": "small"}}>
                <Button label='Cancel'
                  onClick={this.props.onClose} />
              </Box>

            </Footer>
          </Form>
        </header>
      </Layer>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  addToDoTask: PropTypes.func.isRequired
}

export default Modal;
