import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </>
  );
};


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field placeholder={'Email'} name={'email'} component={'input'}/></div>
      <div><Field placeholder={'Password'} name={'password'} component={'input'} type={'password'}/></div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};


const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login)