import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const Login = () => {
  const [loginType, setLoginType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${loginType} login functionality is disabled for this demo`);
  };

  if (!loginType) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">Select Login Type</h1>
            <p className="auth-subtitle">Choose your role to continue</p>
          </div>

          <div className="login-type-grid">
            <div className="login-type-card" onClick={() => setLoginType('Admin')}>
              <div className="login-type-icon">👨‍💼</div>
              <h3>Admin Login</h3>
              <p>Manage all issues and assign to departments</p>
            </div>

            <div className="login-type-card" onClick={() => setLoginType('Citizen')}>
              <div className="login-type-icon">👤</div>
              <h3>Citizen Login</h3>
              <p>Report and track your civic issues</p>
            </div>

            <div className="login-type-card" onClick={() => setLoginType('Department Officer')}>
              <div className="login-type-icon">🔧</div>
              <h3>Department Officer</h3>
              <p>Update and resolve assigned issues</p>
            </div>
          </div>

          <div className="auth-footer">
            <p>
              <Link to="/" className="auth-link">Back to Home</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">{loginType} Login</h1>
          <p className="auth-subtitle">Enter your credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-auth">
            Login as {loginType}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            <button onClick={() => setLoginType('')} className="auth-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              Change Login Type
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
