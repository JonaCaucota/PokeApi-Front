import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorCredentials, setErrorCredentials] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/pokeapi/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        window.location.href = "/";
        localStorage.setItem("isLoggedIn", "true");
      } else {
        console.error('Error al enviar el formulario:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };


  return (
    <div className="auth-wrapper pt-lg-5 pb-lg-5">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              name="password"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
        {errorCredentials && <div className="error">{errorCredentials}</div>}
      </div>
    </div>
  );
};
