"use client"; // This component needs to be a client component

import React, { useState } from "react";

const SignUpForm = () => {
  // State variables for user input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  // Handle form submission
  const validatePassword = (password: string) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!validatePassword(password)) {
      alert("Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }

    // Prepare user data object to send to the backend
    const userData = {
      first_name: firstName,
      last_name: lastName,
      username,
      email,
      password,
    };

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (data.success) {
        // Handle success, e.g., redirect or show a success message
        alert('User registered successfully!');
      } else {
        // Log the error from the API response
        console.error('Registration failed:', data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Error during signup. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <span className="input-group-text">First and last name</span>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          aria-label="First name"
          className="form-control"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          aria-label="Last name"
          className="form-control"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Username
        </span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          placeholder="Choose your desired Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Email
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Enter your Email Address"
          aria-label="Email"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Password
        </span>
        <input
          type={showPassword ? "text" : "password"} // Toggle between text and password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          aria-label="Password"
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
        >
          {showPassword ? "Hide" : "Show"} {/* Change button text based on visibility */}
        </button>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Confirm Password
        </span>
        <input
          type={showConfirmPassword ? "text" : "password"} // Toggle between text and password
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="form-control"
          aria-label="Confirm Password"
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle confirm password visibility
        >
          {showConfirmPassword ? "Hide" : "Show"} {/* Change button text based on visibility */}
        </button>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
