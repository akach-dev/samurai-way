import {Component} from "react";

export class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditeMode = () => {
    console.log(this)
    return this.setState(state => state.editMode = true)
  }

  removeEditeMode = () => {
    this.setState(state => state.editMode = false)
    this.props.updateStatus(this.state.status)
  }
  changeStatusHandler = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.status != this.state.status) {
  //     this.setState({
  //       status: this.props.status
  //     })
  //   }
  // }


  render() {


    return (
      <div>
        {!this.state.editMode
          ? <span onDoubleClick={this.activateEditeMode}>{this.props.status || '---------'}</span>
          :
          <input autoFocus value={this.state.status} onChange={this.changeStatusHandler} onBlur={this.removeEditeMode}/>
        }
      </div>
    )
  }
}

