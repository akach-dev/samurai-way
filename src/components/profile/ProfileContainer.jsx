import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {


  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2
    this.props.getUserProfile(userId)
  }

  render() {
    const {profile, isAuth} = this.props

    return !isAuth
      ? <Redirect to={'/login'}/>
      : (
        <div>
          <Profile {...this.props} profile={profile}/>
        </div>
      );

  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth

})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(
  mapStateToProps,
  {getUserProfile}
)(WithUrlDataContainerComponent)

