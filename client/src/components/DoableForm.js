import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
// import CreatableSelect from 'react-select/lib/Creatable';
import { saveDoable } from '../actions';

// TODO Consider a functional component with hooks instead of class

export class DoableForm extends Component {

  defaultFormState = {
    doable: '',
    notes: '',
    isResult: '',
    area: '',
    context: '',
    deadline: '',
    schedule: '',
    reminder: '',
  }

  state = {
    saveable: false,
    data: this.defaultFormState
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveDoable(this.state.data);
    this.setState( state => {
      if (this.props.type && this.props.type === 'quickEntry') {
        return {...state, data: this.defaultFormState, saveable: false}
      }
      else return {...state, saveable: false}
    });
  }

  handleInputChange = ({target}) => {
    this.setState( state => {
      const data = {...state.data, [target.name]: target.value };
      const saveable = data.doable !== '';
      return { ...state, saveable, data };
    });
  }

  componentWillMount = () => {
    if (this.props && this.props.data)
      this.setState( state => ({ ...state, data: {...this.state.data, ...this.props.data} }) );
  }

  render() {
    const { doable, notes, area, context } = this.state.data;

    return (
        <form noValidate {...styles.form} onSubmit={this.handleSubmit}>
          <Input
            name="doable"
            type="text"
            placeholder="what needs doing?"
            fullWidth
            required
            autoFocus={this.props.autofocus}
            value={ doable }
            onChange={this.handleInputChange}
            disableUnderline
            {...styles.doable }
          />
          <TextField
            name="notes"
            label="Notes"
            fullWidth
            value={ notes }
            onChange={this.handleInputChange}
            {...styles.input}
          />
          { !this.props.type &&
          <React.Fragment>
            {/* <CreatableSelect
              isClearable
              options={[{ label: 'Personal', value: 'personal' }, {label: 'Codeworks', value: 'codeworks' } ]}
            /> */}
            <Select
              name="area"
              label="Action Area"
              value={ area }
              // onChange={this.handleChange('currency')}
              {...styles.input }
            />
            <Select
              name="context"
              label="Context"
              value={ context }
              // onChange={this.handleChange('currency')}
              {...styles.input }
            />
          </React.Fragment>
          }
          <Button type="submit" variant="contained" disabled={ !this.state.saveable }>
            Save
          </Button>
        </form>
    )
  }
}

const styles = {
  form: {
    style: {
      maxWidth: '800px',
      height: '100vh',
      margin: '0 auto',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  },
  doable: {
    style: {
      margin: '8px 0',
      fontSize: '1.618rem'
    }
  },
  input: {
    style: {
      margin: '8px 0',
      overflow: 'hidden',
      width: '100%'
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveDoable: doable => dispatch(saveDoable(doable))
});

export default connect(null, mapDispatchToProps)(DoableForm);