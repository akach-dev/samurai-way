import {Component} from "react";

export class ProfileStatus extends Component {

  state = {
    editMode: false
  }

  activateEditeMode = () => {
    console.log(this)
    return this.setState(state => state.editMode = true)
  }

  removeEditeMode = () => {
    return this.setState(state => state.editMode = false)
  }

  render() {
    let {value} = this.props;

    return (
      <div>
        {!this.state.editMode
          ? <span onDoubleClick={this.activateEditeMode}>{value}</span>
          : <input autoFocus value={value} onBlur={this.removeEditeMode}/>
        }
      </div>
    )
  }
}

