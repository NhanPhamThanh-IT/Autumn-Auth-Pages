import { Link } from "react-router-dom";
import "../../styles/authForm.css";
import type { AuthFormProps } from "../../types/auth";

function AuthForm(props: AuthFormProps) {
  const {
    title,
    fields,
    formData,
    onChange,
    buttonText,
    questionText,
    linkText = "",
    linkHref = "#",
    onSubmit,
  } = props;

  return (
    <form className="auth" onSubmit={onSubmit}>
      <h2>{title}</h2>

      {fields.map((field, index) => (
        <div className="inputBox" key={index}>
          <input
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={onChange}
            required
          />
        </div>
      ))}

      <div className="inputBox">
        <input type="submit" value={buttonText} id="btn" />
      </div>

      {linkText && (
        <div className="navigation">
          {questionText && <span>{questionText}</span>}
          <Link to={linkHref}>{linkText}</Link>
        </div>
      )}
    </form>
  );
}

export default AuthForm;
