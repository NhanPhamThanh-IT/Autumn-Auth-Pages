import '../../styles/authForm.css';

function AuthForm(props) {
    const { title, fields, buttonText, linkText, linkHref, onSubmit } = props;

    return (
        <form className="auth" onSubmit={onSubmit}>
            <h2>{title}</h2>

            {fields.map((field, index) => (
                <div className="inputBox" key={index}>
                    <input
                        type={field.type}
                        placeholder={field.placeholder}
                        name={field.name}
                        required={field.required ?? true}
                    />
                </div>
            ))}

            <div className="inputBox">
                <input type="submit" value={buttonText} id="btn" />
            </div>

            {linkText && (
                <div className="navigation">
                    <a href={linkHref}>{linkText}</a>
                </div>
            )}
        </form>
    );
}

export default AuthForm;
