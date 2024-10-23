import Card from "@/app/components/Card"; // Ensure correct path
import Navbar from "@/app/components/Navbar"; // Ensure correct path
import LoginForm from "@/app/components/LoginForm"; // Ensure correct path

const Login = () => {
  return (
    <div>
      <Navbar />
      <Card title="Login Here!">
        <LoginForm />
      </Card>
    </div>
  );
};

export default Login;
