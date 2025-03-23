import "../Login/Login.scss";
import LoginBox from "../../Components/LoginBox/LoginBox";

function Login({ setToken }) {
  return (
    <section className="login">
      <LoginBox setToken={setToken} />
    </section>
  );
}

export default Login;
