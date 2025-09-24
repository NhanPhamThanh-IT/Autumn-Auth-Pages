import { useState } from "react";
import Background from "../components/Background";
import AuthForm from "../components/Forms/AuthForm";
import type { EventChange, EventSubmit } from "../types/event";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: EventChange) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: EventSubmit) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Background>
      <AuthForm
        title="Sign In"
        fields={[
          { type: "email", placeholder: "Email", name: "email" },
          { type: "password", placeholder: "Password", name: "password" },
        ]}
        formData={formData}
        onChange={handleChange}
        buttonText="Login"
        questionText="Don't have an account?"
        linkText="Signup"
        linkHref="/signup"
        onSubmit={handleSubmit}
      />
    </Background>
  );
}

export default Login;
