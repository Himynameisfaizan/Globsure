import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ email: '', password: '' });
  
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
    setMessage({ type: '', text: '' }); 
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (!storedUser) {
      setMessage({ type: 'error', text: "No user found! Please signup first." });
      return;
    }

    if (storedUser.email === creds.email && storedUser.password === creds.password) {
      // Login Success
      localStorage.setItem('isLoggedIn', 'true');
      setMessage({ type: 'success', text: "Login Successful! Redirecting..." });
      
      setTimeout(() => {
        navigate('/');
        window.location.reload();
      }, 1500);

    } else {
      setMessage({ type: 'error', text: "Invalid Email or Password!" });
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      
      {/* --- LEFT SIDE (Branding) --- */}
      <div 
        className="hidden lg:flex w-1/2 bg-[#002249] relative flex-col justify-center items-center text-white overflow-hidden"
        style={{ padding: '50px' }} 
      >
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div> 
        <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold" style={{ marginBottom: '20px' }}>
              Globsure International
            </h1>
            <p className="text-xl text-gray-200 max-w-md mx-auto leading-relaxed">
              Secure your future with India's most trusted insurance brokers.
            </p>
        </div>
      </div>

      {/* --- RIGHT SIDE (Form) --- */}
      <div 
        className="w-full lg:w-1/2 flex flex-col justify-center items-center"
        style={{ padding: '20px' }} 
      >
        
        {/* Mobile Header */}
        <div className="lg:hidden text-center" style={{ marginBottom: '30px' }}>
            <h1 className="text-3xl font-bold text-[#002249]">Globsure</h1>
            <p className="text-gray-500 text-sm">Welcome back!</p>
        </div>

        <div className="w-full max-w-lg">
          
          <div className="text-left" style={{ marginBottom: '30px' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Welcome Back!</h2>
            <p className="text-gray-500 text-base sm:text-lg" style={{ marginTop: '10px' }}>
              Please enter your details to login.
            </p>
          </div>

          {/* --- MESSAGE BOX (Success/Error) --- */}
          {message.text && (
            <div 
              style={{
                padding: '15px',
                marginBottom: '20px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                backgroundColor: message.type === 'error' ? '#fee2e2' : '#dcfce7', 
                color: message.type === 'error' ? '#991b1b' : '#166534',      
                border: message.type === 'error' ? '1px solid #f87171' : '1px solid #4ade80'
              }}
            >
              {/* Icon Logic */}
              <i className={message.type === 'error' ? "ri-error-warning-fill" : "ri-checkbox-circle-fill"} style={{ marginRight: '8px', fontSize: '16px' }}></i>
              {message.text}
            </div>
          )}

          <form onSubmit={handleLogin}>
            
            <div style={{ marginBottom: '25px' }}>
              <label className="block text-sm font-semibold text-gray-700" style={{ marginBottom: '8px' }}>
                Email Address
              </label>
              <input 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002249] transition-all shadow-sm"
                style={{ padding: '15px 20px' }} 
                type="email" 
                name="email" 
                placeholder="Enter your email"
                required 
                onChange={handleChange} 
              />
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '8px' }}>
                <label className="text-sm font-semibold text-gray-700">Password</label>
              </div>
              <input 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002249] transition-all shadow-sm"
                style={{ padding: '15px 20px' }} 
                type="password" 
                name="password" 
                placeholder="••••••••"
                required 
                onChange={handleChange} 
              />
            </div>

            <button 
              className="w-full bg-[#002249] hover:bg-[#003366] text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform active:scale-95 text-lg"
              style={{ padding: '15px', marginTop: '10px' }} 
            >
              Sign In
            </button>

          </form>

          <p className="text-center text-gray-600" style={{ marginTop: '30px' }}>
            New to Globsure?{' '}
            <NavLink to="/signup" className="text-[#002249] font-bold hover:underline" style={{ marginLeft: '5px' }}>
              Create an account
            </NavLink>
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default Login;