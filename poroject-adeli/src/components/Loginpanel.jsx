// src/components/Loginpanel.jsx
import React, { useState } from 'react';
import { 
  FaUser, 
  FaLock, 
  FaEnvelope, 
  FaEye, 
  FaEyeSlash, 
  FaSignInAlt, 
  FaGoogle, 
  FaGithub,
  FaKey,
  FaShieldAlt
} from 'react-icons/fa';
import '../styles/Loginpanel.css';

const LoginPanel = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // در اینجا منطق ورود را اضافه کنید
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // در اینجا منطق ورود با شبکه‌های اجتماعی را اضافه کنید
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* هدر */}
        <div className="login-header">
          <div className="logo-container">
            <FaShieldAlt className="logo-icon" />
            <h1>پروژه ادلی</h1>
          </div>
          <h2>ورود به پنل مدیریت</h2>
          <p className="login-subtitle">لطفا اطلاعات حساب کاربری خود را وارد کنید</p>
        </div>

        {/* فرم ورود */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* فیلد ایمیل/نام کاربری */}
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="input-icon" />
              <span>ایمیل یا نام کاربری</span>
            </label>
            <div className="input-wrapper">
              <FaUser className="input-icon-left" />
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
                required
                dir="auto"
              />
            </div>
          </div>

          {/* فیلد رمز عبور */}
          <div className="form-group">
            <label htmlFor="password">
              <FaKey className="input-icon" />
              <span>رمز عبور</span>
            </label>
            <div className="input-wrapper">
              <FaLock className="input-icon-left" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                dir="auto"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "مخفی کردن رمز" : "نمایش رمز"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* گزینه‌های اضافی */}
          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember">مرا به خاطر بسپار</label>
            </div>
            <a href="/forgot-password" className="forgot-password">
              <FaLock />
              <span>فراموشی رمز عبور؟</span>
            </a>
          </div>

          {/* دکمه ورود */}
          <button type="submit" className="login-btn">
            <FaSignInAlt />
            <span>ورود به حساب کاربری</span>
          </button>

          {/* جداکننده */}
          <div className="separator">
            <span className="separator-line"></span>
            <span className="separator-text">یا ورود با</span>
            <span className="separator-line"></span>
          </div>

          {/* دکمه‌های ورود اجتماعی */}
          <div className="social-login">
            <button 
              type="button" 
              className="social-btn google-btn"
              onClick={() => handleSocialLogin('google')}
            >
              <FaGoogle />
              <span>گوگل</span>
            </button>
            <button 
              type="button" 
              className="social-btn github-btn"
              onClick={() => handleSocialLogin('github')}
            >
              <FaGithub />
              <span>گیت‌هاب</span>
            </button>
          </div>
        </form>

        {/* فوتر */}
        <div className="login-footer">
          <p>
            حساب کاربری ندارید؟ 
            <a href="/register" className="register-link"> ثبت‌نام کنید</a>
          </p>
          <div className="security-info">
            <FaShieldAlt />
            <span>اطلاعات شما با استفاده از رمزنگاری SSL محافظت می‌شود</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;