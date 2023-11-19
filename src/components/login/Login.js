import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field placeholder={'Login'} name={'Login'} component={'input'}/></div>
      <div><Field placeholder={'Email'} name={'Email'} component={'input'}/></div>
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

export const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </>
  );
};