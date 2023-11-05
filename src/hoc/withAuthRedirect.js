import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {

    render() {
      return (
        !this.props.isAuth
          ? <Redirect to={'/login'}/>
          : <Component {...this.props}/>
      )
    }
  }

  let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
  })

  const ConnectRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectRedirectComponent
};
