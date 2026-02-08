import React, { useState, useEffect } from 'react';
import { 
  FaShoppingCart, 
  FaWallet, 
  FaUser, 
  FaBell, 
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaHome,
  FaBox,
  FaInfoCircle,
  FaPhone,
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ 
  cartItems = [], 
  onWalletClick, 
  onLoginClick, 
  onNotification,
  walletBalance = 0
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [notifications] = useState([
    { id: 1, text: 'سفارش شما تایید شد', time: '5 دقیقه پیش', read: false },
    { id: 2, text: 'کیف پول شما شارژ شد', time: '1 ساعت پیش', read: false },
    { id: 3, text: 'محصول جدید اضافه شد', time: '2 روز پیش', read: true },
  ]);

  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  const unreadNotifications = notifications.filter(n => !n.read).length;

  // افکت برای اسکرول
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && onNotification) {
      onNotification(`جستجو برای: ${searchQuery}`);
    }
  };

  const handleLogout = () => {
    if (onNotification) onNotification('با موفقیت خارج شدید');
    setIsUserMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'خانه', icon: <FaHome />, href: '#home' },
    { id: 'products', label: 'محصولات', icon: <FaBox />, href: '#products' },
    { id: 'about', label: 'درباره ما', icon: <FaInfoCircle />, href: '#about' },
    { id: 'contact', label: 'تماس', icon: <FaPhone />, href: '#contact' },
    { id: 'services', label: 'خدمات', icon: <FaCog />, href: '#services' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span className="welcome-text">خوش آمدید به ارتفاع‌افزار</span>
            <span className="divider">|</span>
            <span className="contact-info">📞 021-12345678</span>
          </div>
          <div className="top-bar-right">
            <button className="language-switcher">🇮🇷 فارسی</button>
            <span className="divider">|</span>
            <button className="theme-switcher">🌙 حالت شب</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          {/* Logo Section */}
          <div className="logo-section">
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="منو"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            
            <div className="logo">
              <div className="logo-icon">
                <div className="logo-shape">
                  <span>▲</span>
                </div>
              </div>
              <div className="logo-text">
                <h1>ارتفاع‌افزار</h1>
                <p className="tagline">طراحی مینیمال برجسته</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-section">
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-input-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="جستجو در محصولات و خدمات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button type="submit" className="search-btn">
                  جستجو
                </button>
              </div>
            </form>
          </div>

          {/* Actions Section */}
          <div className="actions-section">
            {/* کیف پول دیجیتال */}
            <div className="wallet-container">
              <button 
                className="wallet-btn"
                onClick={() => {
                  onWalletClick && onWalletClick();
                  onNotification && onNotification('پنل کیف پول باز شد');
                }}
              >
                <FaWallet className="wallet-icon" />
                <div className="wallet-info">
                  <span className="wallet-label">کیف پول</span>
                  <span className="wallet-balance">
                    {walletBalance.toLocaleString()} تومان
                  </span>
                </div>
                <FaChevronDown className="chevron" />
              </button>
              
              {/* Wallet Dropdown */}
              <div className="wallet-dropdown">
                <div className="wallet-dropdown-header">
                  <h4>کیف پول دیجیتال</h4>
                  <span className="balance">{walletBalance.toLocaleString()} تومان</span>
                </div>
                <div className="wallet-actions">
                  <button className="wallet-action-btn">
                    <FaWallet />
                    <span>شارژ کیف پول</span>
                  </button>
                  <button className="wallet-action-btn">
                    <span>💰</span>
                    <span>برداشت وجه</span>
                  </button>
                  <button className="wallet-action-btn">
                    <span>📊</span>
                    <span>گزارش تراکنش‌ها</span>
                  </button>
                </div>
              </div>
            </div>

            {/* سبد خرید */}
            <button 
              className="cart-btn"
              onClick={() => onNotification && onNotification(`تعداد آیتم‌های سبد خرید: ${cartCount}`)}
            >
              <FaShoppingCart className="cart-icon" />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
              <span className="cart-label">سبد خرید</span>
            </button>

            {/* اعلان‌ها */}
            <div className="notifications-container">
              <button 
                className="notifications-btn"
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              >
                <FaBell className="notifications-icon" />
                {unreadNotifications > 0 && (
                  <span className="notifications-badge">{unreadNotifications}</span>
                )}
              </button>
              
              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div className="notifications-dropdown">
                  <div className="notifications-header">
                    <h4>اعلان‌ها</h4>
                    <button 
                      className="mark-all-read"
                      onClick={() => setIsNotificationsOpen(false)}
                    >
                      علامت‌خوانده شده
                    </button>
                  </div>
                  <div className="notifications-list">
                    {notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                      >
                        <div className="notification-text">{notification.text}</div>
                        <div className="notification-time">{notification.time}</div>
                      </div>
                    ))}
                  </div>
                  <button className="view-all-notifications">
                    مشاهده همه اعلان‌ها
                  </button>
                </div>
              )}
            </div>

            {/* پروفایل کاربر */}
            <div className="user-profile-container">
              <button 
                className="user-profile-btn"
                onClick={() => {
                  if (onLoginClick) {
                    onLoginClick();
                  } else {
                    setIsUserMenuOpen(!isUserMenuOpen);
                  }
                }}
              >
                <div className="avatar">
                  <FaUser />
                </div>
                <div className="user-info">
                  <span className="user-name">کاربر مهمان</span>
                  <span className="user-role">عضویت رایگان</span>
                </div>
                <FaChevronDown className="chevron" />
              </button>
              
              {/* User Menu Dropdown */}
              {isUserMenuOpen && (
                <div className="user-menu-dropdown">
                  <div className="user-menu-header">
                    <div className="user-avatar-large">
                      <FaUser />
                    </div>
                    <div className="user-details">
                      <h4>کاربر مهمان</h4>
                      <p>guest@example.com</p>
                    </div>
                  </div>
                  <div className="user-menu-items">
                    <a href="#profile" className="user-menu-item">
                      <FaUser />
                      <span>پروفایل من</span>
                    </a>
                    <a href="#orders" className="user-menu-item">
                      <FaBox />
                      <span>سفارشات من</span>
                    </a>
                    <a href="#settings" className="user-menu-item">
                      <FaCog />
                      <span>تنظیمات</span>
                    </a>
                    <button className="user-menu-item logout-btn" onClick={handleLogout}>
                      <FaSignOutAlt />
                      <span>خروج از حساب</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="container">
            <ul className="nav-menu">
              {menuItems.map(item => (
                <li key={item.id} className="nav-item">
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile Actions */}
            <div className="mobile-actions">
              <button className="mobile-action-btn">
                <FaWallet />
                <span>کیف پول</span>
              </button>
              <button className="mobile-action-btn">
                <FaShoppingCart />
                <span>سبد خرید</span>
                {cartCount > 0 && <span className="mobile-badge">{cartCount}</span>}
              </button>
              <button className="mobile-action-btn" onClick={onLoginClick}>
                <FaUser />
                <span>ورود</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;