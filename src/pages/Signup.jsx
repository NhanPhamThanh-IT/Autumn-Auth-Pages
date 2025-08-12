import { useState } from 'react';
import Background from '../components/Background';
import AuthForm from '../components/Forms/AuthForm';

function Signup() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            fullName: '',
            email: '',
            password: ''
        });
    };

    return (
        <Background>
            <AuthForm
                title="Sign Up"
                fields={[
                    { type: 'text', placeholder: 'Full Name', name: 'fullName' },
                    { type: 'email', placeholder: 'Email', name: 'email' },
                    { type: 'password', placeholder: 'Password', name: 'password' }
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
    )
}

export default Signup