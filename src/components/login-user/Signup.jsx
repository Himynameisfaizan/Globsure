import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage({ type: '', text: '' }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    const existingUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (existingUser && existingUser.email === formData.email) {
      setMessage({ type: 'error', text: "This email is already registered! Please Login." });
      setLoading(false);
      return; 
    }

    localStorage.setItem('registeredUser', JSON.stringify(formData));

    try {
      const response = await fetch('https://globsure.grey8art.com/globsure-api/mail.php', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'signup',
          name: formData.name,
          email: formData.email,
        }),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setMessage({ type: 'success', text: "Account Created Successfully! Please Login." });
        
        setTimeout(() => {
           navigate('/login-user');
        }, 2000);

      } else {
        setMessage({ type: 'error', text: "Account created locally, but email failed." });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: 'error', text: "Network error. Account created locally." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      
      {/* --- LEFT SIDE --- */}
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
              Join India's most trusted insurance brokers today.
            </p>
        </div>
      </div>

      {/* --- RIGHT SIDE --- */}
      <div 
        className="w-full lg:w-1/2 flex flex-col justify-center items-center"
        style={{ padding: '20px' }} 
      >
        
        <div className="lg:hidden text-center" style={{ marginBottom: '30px' }}>
            <h1 className="text-3xl font-bold text-[#002249]">Globsure</h1>
        </div>

        <div className="w-full max-w-lg">
          
          <div className="text-left" style={{ marginBottom: '30px' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get Started</h2>
            <p className="text-gray-500 text-base sm:text-lg" style={{ marginTop: '10px' }}>
              Create a new account to manage your insurance.
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
              <i className={message.type === 'error' ? "ri-error-warning-fill" : "ri-checkbox-circle-fill"} style={{ marginRight: '8px', fontSize: '16px' }}></i>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            
            <div style={{ marginBottom: '25px' }}>
              <label className="block text-sm font-semibold text-gray-700" style={{ marginBottom: '8px' }}>
                Full Name
              </label>
              <input 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002249] transition-all shadow-sm"
                style={{ padding: '15px 20px' }} 
                type="text" 
                name="name" 
                placeholder="Enter your full name"
                required 
                onChange={handleChange} 
              />
            </div>

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
              <label className="block text-sm font-semibold text-gray-700" style={{ marginBottom: '8px' }}>
                Password
              </label>
              <input 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002249] transition-all shadow-sm"
                style={{ padding: '15px 20px' }} 
                type="password" 
                name="password" 
                placeholder="Create a password"
                required 
                onChange={handleChange} 
              />
            </div>

            <button 
              disabled={loading}
              className="w-full bg-[#002249] hover:bg-[#003366] text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform active:scale-95 text-lg"
              style={{ padding: '15px', marginTop: '10px', opacity: loading ? 0.7 : 1 }} 
            >
              {loading ? "Processing..." : "Create Account"}
            </button>

          </form>

          <p className="text-center text-gray-600" style={{ marginTop: '30px' }}>
            Already have an account?{' '}
            <NavLink to="/login-user" className="text-[#002249] font-bold hover:underline" style={{ marginLeft: '5px' }}>
              Log in here
            </NavLink>
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default Signup;