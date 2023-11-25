import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {compose} from "redux";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 30042
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    const {profile, status, updateUserStatus, isAuth} = this.props

    if (!isAuth) {
      return <Redirect to={'/login'}/>
    }

    return (
      <div>
        <Profile {...this.props} profile={profile} status={status} updateStatus={updateUserStatus}/>
      </div>
    );

  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
})


export default compose(connect(
  mapStateToProps,
  {getUserProfile, getUserStatus, updateUserStatus}
), withRouter)(ProfileContainer)
