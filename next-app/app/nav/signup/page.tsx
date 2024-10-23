import Card from "@/app/components/Card"; // Ensure correct path
import Navbar from "@/app/components/Navbar"; // Ensure correct path
import SignUpForm from "@/app/components/SignUpForm"; // Ensure correct path

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <Card title="Sign Up Here!">
        <SignUpForm />
      </Card>
    </div>
  );
};

export default SignUp;
