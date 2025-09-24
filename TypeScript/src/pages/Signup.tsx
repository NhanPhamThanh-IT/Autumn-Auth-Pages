import { useState } from "react";
import Background from "../components/Background";
import AuthForm from "../components/Forms/AuthForm";
import type { EventChange, EventSubmit } from "../types/event";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (event: EventChange) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: EventSubmit) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <Background>
      <AuthForm
        title="Sign Up"
        fields={[
          { type: "text", placeholder: "Full Name", name: "fullName" },
          { type: "email", placeholder: "Email", name: "email" },
          { type: "password", placeholder: "Password", name: "password" },
        ]}
        formData={formData}
        onChange={handleChange}
        buttonText="Sign Up"
        questionText="Already have an account?"
        linkText="Login"
        linkHref="/login"
        onSubmit={handleSubmit}
      />
    </Background>
  );
}

export default Signup;
