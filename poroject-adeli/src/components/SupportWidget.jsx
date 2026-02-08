import React, { useState } from 'react';
import { 
  FaHeadset, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaEnvelope, 
  FaCommentDots,
  FaCalendarCheck,
  FaCube,
  FaTimes,
  FaChevronLeft,
  FaRobot,
  FaVideo,
  FaFileAlt,
  FaRocket,
  FaLightbulb,
  FaShieldAlt,
  FaStar
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/SupportWidget.css';

const SupportWidget = ({ onNotification }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const [activeView, setActiveView] = useState('main');

  const supportOptions = [
    {
      id: 1,
      icon: <FaPhoneAlt className="glow-icon" />,
      title: 'تماس تلفنی',
      description: '۰۲۱-۸۸۸۸۸۸۸۸',
      badge: 'پاسخگویی ۲۴/۷',
      href: 'tel:02188888888',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      glow: 'rgba(102, 126, 234, 0.4)'
    },
    {
      id: 2,
      icon: <FaWhatsapp className="glow-icon" />,
      title: 'واتساپ',
      description: 'پاسخگویی در کمتر از ۵ دقیقه',
      badge: 'پرسرعت',
      href: 'https://wa.me/989123456789',
      target: '_blank',
      color: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
      glow: 'rgba(37, 211, 102, 0.4)'
    },
    {
      id: 3,
      icon: <FaEnvelope className="glow-icon" />,
      title: 'ایمیل',
      description: 'support@ertefaafzar.com',
      badge: 'پاسخ در ۲۴ ساعت',
      href: 'mailto:support@ertefaafzar.com',
      color: 'linear-gradient(135deg, #EA4335 0%, #D14836 100%)',
      glow: 'rgba(234, 67, 53, 0.4)'
    },
    {
      id: 4,
      icon: <FaCommentDots className="glow-icon" />,
      title: 'چت آنلاین',
      description: 'گفتگوی مستقیم با پشتیبان',
      badge: 'آنلاین',
      onClick: () => {
        onNotification?.('اتصال به اپراتور پشتیبانی...');
        setIsOpen(false);
      },
      color: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
      glow: 'rgba(139, 92, 246, 0.4)'
    },
    {
      id: 5,
      icon: <FaCalendarCheck className="glow-icon" />,
      title: 'درخواست مشاوره',
      description: 'مشاوره تخصصی رایگان',
      badge: 'VIP',
      onClick: () => {
        const element = document.getElementById('consultation');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
        setIsOpen(false);
      },
      color: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      glow: 'rgba(16, 185, 129, 0.4)'
    },
    {
      id: 6,
      icon: <FaCube className="glow-icon" />,
      title: 'مشاهده محصولات',
      description: 'بررسی سیستم‌های برجسته',
      badge: 'جدید',
      href: '#products',
      onClick: () => {
        const element = document.getElementById('products');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
        setIsOpen(false);
      },
      color: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      glow: 'rgba(245, 158, 11, 0.4)'
    }
  ];

  const premiumFeatures = [
    {
      icon: <FaShieldAlt />,
      title: 'پشتیبانی تضمینی',
      desc: 'گارانتی ۲۴ ماهه'
    },
    {
      icon: <FaRobot />,
      title: 'هوش مصنوعی',
      desc: 'پاسخگوی خودکار'
    },
    {
      icon: <FaVideo />,
      title: 'ویدیوکال',
      desc: 'مشاوره تصویری'
    },
    {
      icon: <FaStar />,
      title: 'امتیاز ۵ ستاره',
      desc: 'رضایت ۹۸٪ مشتریان'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const buttonVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      boxShadow: [
        "0 0 0 0 rgba(124, 58, 237, 0.4)",
        "0 0 0 10px rgba(124, 58, 237, 0)",
        "0 0 0 0 rgba(124, 58, 237, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.15,
      rotate: 12,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setActiveView('main'), 300);
  };

  return (
    <div className="modern-support-widget">
      {/* Floating Button */}
      <motion.button
        className="modern-support-button"
        onClick={() => {
          setIsOpen(!isOpen);
          setIsPulsing(false);
        }}
        variants={buttonVariants}
        animate={isPulsing ? "pulse" : ""}
        whileHover="hover"
        whileTap={{ scale: 0.9 }}
      >
        <FaHeadset className="button-main-icon" />
        <div className="button-ring"></div>
        <div className="button-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.button>

      {/* Support Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="support-panel-container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Panel Header */}
              <div className="panel-header">
                <div className="header-gradient">
                  <div className="header-content">
                    <motion.h3 
                      className="panel-title"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <FaHeadset className="title-icon" />
                      پشتیبانی ویژه
                    </motion.h3>
                    <p className="panel-subtitle">
                      تیم پشتیبانی ارتفاع‌افزار آماده خدمت‌رسانی
                    </p>
                  </div>
                  <button className="close-button" onClick={handleClose}>
                    <FaTimes />
                  </button>
                </div>
                
                {/* Premium Features Bar */}
                <div className="premium-features">
                  {premiumFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="feature-item"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="feature-icon">{feature.icon}</div>
                      <div className="feature-text">
                        <div className="feature-title">{feature.title}</div>
                        <div className="feature-desc">{feature.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Support Options */}
              <div className="support-options-grid">
                {supportOptions.map((option, index) => (
                  <motion.div
                    key={option.id}
                    variants={itemVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
                  >
                    {option.href ? (
                      <a
                        href={option.href}
                        className="support-option-card"
                        target={option.target || '_self'}
                        rel={option.target === '_blank' ? 'noopener noreferrer' : ''}
                        onClick={option.onClick}
                        style={{ '--glow-color': option.glow }}
                      >
                        <div className="option-content">
                          <div 
                            className="option-icon-wrapper"
                            style={{ background: option.color }}
                          >
                            {option.icon}
                          </div>
                          <div className="option-details">
                            <div className="option-header">
                              <h4 className="option-title">{option.title}</h4>
                              <span className="option-badge">{option.badge}</span>
                            </div>
                            <p className="option-description">{option.description}</p>
                          </div>
                          <div className="option-hover-effect">
                            <div className="hover-ring"></div>
                            <div className="hover-sparkles">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <button
                        className="support-option-card"
                        onClick={option.onClick}
                        style={{ '--glow-color': option.glow }}
                      >
                        <div className="option-content">
                          <div 
                            className="option-icon-wrapper"
                            style={{ background: option.color }}
                          >
                            {option.icon}
                          </div>
                          <div className="option-details">
                            <div className="option-header">
                              <h4 className="option-title">{option.title}</h4>
                              <span className="option-badge">{option.badge}</span>
                            </div>
                            <p className="option-description">{option.description}</p>
                          </div>
                          <div className="option-hover-effect">
                            <div className="hover-ring"></div>
                            <div className="hover-sparkles">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Panel Footer */}
              <div className="panel-footer">
                <div className="footer-info">
                  <FaLightbulb className="footer-icon" />
                  <span>پشتیبانی ۲۴ ساعته | پاسخگویی سریع | رضایت ۱۰۰٪</span>
                </div>
                <div className="footer-stats">
                  <div className="stat-item">
                    <span className="stat-number">۹۸٪</span>
                    <span className="stat-label">رضایت</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">۲۴/۷</span>
                    <span className="stat-label">پشتیبانی</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">۵m</span>
                    <span className="stat-label">پاسخگویی</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Backdrop Overlay */}
            <motion.div
              className="support-backdrop"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SupportWidget;