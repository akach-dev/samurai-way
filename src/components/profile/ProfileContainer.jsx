import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2
    this.props.getUserProfile(userId)
  }

  render() {
    const {profile} = this.props

    return (
      <div>
        <Profile {...this.props} profile={profile}/>
      </div>
    );

  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})


export default compose(connect(
  mapStateToProps,
  {getUserProfile}
), withRouter, withAuthRedirect)(ProfileContainer)
