import React, { useState, useEffect } from 'react';
import { 
  FaArrowUp, 
  FaInstagram, 
  FaTelegram, 
  FaLinkedin, 
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaHome,
  FaBuilding,
  FaCalendarAlt, 
  FaCube,
  FaHeadset,
  FaNewspaper,
  FaQuestionCircle,
  FaSlidersH,
  FaCog,
  FaDoorClosed,
  FaTools,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaSearch,
  FaUser,
  FaCertificate,
  FaTrophy,
  FaRocket,
  FaStar,
  FaShieldAlt,
  FaFilter,
  FaHandshake,
  FaGlobe,
  FaMobileAlt,
  FaWifi,
  FaCloud,
  FaDatabase,
  FaBrain,
  FaSatellite,
  FaChevronLeft,
  FaQrcode,
  FaDownload,
  FaFilePdf,
  FaAward,
  FaMedal,
  FaGem,
  FaCrown,
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaLayerGroup,
  FaPaintBrush,
  FaMagic,
  FaInfinity,
  FaLock,
  FaEye,
  FaHeart,
  FaShareAlt,
  FaShoppingBag,
  FaTruck,
  FaCreditCard,
  FaHistory,
  FaCaretLeft,
  FaLeaf
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Footer.css';

const Footer = ({ onNotification }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState(null);
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBackToTopVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const companyInfo = {
    name: 'ارتفاع‌افزار',
    tagline: 'طراحی مینیمال برجسته',
    description: 'پیشرو در طراحی و تولید سیستم‌های مدرن آسانسور با بیش از ۲۵ سال تجربه. ترکیبی از تکنولوژی پیشرفته، ایمنی مطلق و طراحی مینیمال.',
    awards: '۱۲ جایزه بین‌المللی',
    projects: '۵,۲۰۰+ پروژه موفق',
    clients: '۱۵,۰۰۰+ مشتری راضی'
  };

  const quickLinks = [
    { icon: <FaHome />, label: 'خانه', href: '#home', color: '#3B82F6' },
    { icon: <FaBuilding />, label: 'درباره ما', href: '#about', color: '#8B5CF6' },
    { icon: <FaCube />, label: 'محصولات', href: '#products', color: '#10B981' },
    { icon: <FaHeadset />, label: 'مشاوره', href: '#consultation', color: '#F59E0B' },
    { icon: <FaNewspaper />, label: 'بلاگ', href: '#blog', color: '#EF4444' },
    { icon: <FaQuestionCircle />, label: 'سوالات متداول', href: '#faq', color: '#EC4899' },
    { icon: <FaCertificate />, label: 'گواهینامه‌ها', href: '#certificates', color: '#6366F1' },
    { icon: <FaTrophy />, label: 'افتخارات', href: '#awards', color: '#D97706' }
  ];

  const productsCategories = [
    {
      category: 'سیستم‌های کنترل',
      icon: <FaSlidersH />,
      color: '#3B82F6',
      items: [
        { name: 'کنترل هوشمند نسل ۳', tag: 'جدید' },
        { name: 'پنل لمسی پیشرفته', tag: 'پرفروش' },
        { name: 'سیستم ابری', tag: 'هوشمند' },
        { name: 'ماژول AI', tag: 'نوآورانه' }
      ]
    },
    {
      category: 'موتورها',
      icon: <FaCog />,
      color: '#10B981',
      items: [
        { name: 'موتور بی‌صدا', tag: 'پریمیوم' },
        { name: 'موتور DC بدون جاروبک', tag: 'پربازده' },
        { name: 'موتور هوشمند', tag: 'کم مصرف' },
        { name: 'موتور صنعتی', tag: 'قدرتمند' }
      ]
    },
    {
      category: 'ایمنی',
      icon: <FaShieldAlt />,
      color: '#EF4444',
      items: [
        { name: 'سیستم ترمز مغناطیسی', tag: 'ایمن' },
        { name: 'سنسورهای لیزری', tag: 'دقیق' },
        { name: 'سیستم اضطراری', tag: 'ضروری' },
        { name: 'مانیتورینگ لحظه‌ای', tag: 'هوشمند' }
      ]
    }
  ];

  const services = [
    { icon: <FaRocket />, name: 'طراحی سفارسی', description: 'طراحی اختصاصی متناسب با نیاز شما' },
    { icon: <FaStar />, name: 'نصب حرفه‌ای', description: 'تیم نصب مجرب با ۱۰ سال تجربه' },
    { icon: <FaShieldAlt />, name: 'گارانتی طلایی', description: 'گارانتی ۱۰ ساله با پشتیبانی VIP' },
    { icon: <FaHandshake />, name: 'مشاوره رایگان', description: 'مشاوره تخصصی توسط مهندسین ارشد' },
    { icon: <FaTools />, name: 'سرویس دوره‌ای', description: 'برنامه سرویس منظم و پیشگیرانه' },
    { icon: <FaGlobe />, name: 'پشتیبانی جهانی', description: 'پشتیبانی ۲۴/۷ در ۴۳ کشور' }
  ];

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt />, 
      title: 'دفتر مرکزی',
      detail: 'تهران، خیابان ولیعصر، پلاک ۱۰۰۰، برج اداری آسمان، طبقه ۱۲',
      action: { label: 'نمایش روی نقشه', icon: <FaChevronLeft /> }
    },
    { 
      icon: <FaPhone />, 
      title: 'تلفن‌های تماس',
      detail: '۰۲۱-۸۸۸۸۸۸۸۸ | ۰۹۱۲۳۴۵۶۷۸۹',
      action: { label: 'تماس سریع', icon: <FaPhone /> }
    },
    { 
      icon: <FaEnvelope />, 
      title: 'راه‌های ارتباطی',
      detail: 'info@ertefaafzar.com | support@ertefaafzar.com',
      action: { label: 'ارسال ایمیل', icon: <FaPaperPlane /> }
    },
    { 
      icon: <FaClock />, 
      title: 'ساعات کاری',
      detail: 'شنبه تا چهارشنبه: ۸:۰۰ تا ۱۷:۰۰ | پنجشنبه: ۸:۰۰ تا ۱۴:۰۰',
      action: { label: 'تقویم', icon: <FaCalendarAlt /> }
    }
  ];

  const socialPlatforms = [
    { icon: <FaInstagram />, name: 'اینستاگرام', color: '#E4405F', followers: '۱۵K+', handle: '@ertefaafzar' },
    { icon: <FaTelegram />, name: 'تلگرام', color: '#26A5E4', members: '۸K+', handle: '@ertefaafzar' },
    { icon: <FaLinkedin />, name: 'لینکدین', color: '#0A66C2', connections: '۵K+', handle: 'ارتفاع‌افزار' },
    { icon: <FaTwitter />, name: 'توییتر', color: '#1DA1F2', followers: '۱۲K+', handle: '@ertefaafzar' },
    { icon: <FaYoutube />, name: 'یوتیوب', color: '#FF0000', subscribers: '۲۰K+', handle: 'ارتفاع‌افزار' },
    { icon: <FaWhatsapp />, name: 'واتساپ', color: '#25D366', online: 'آنلاین', handle: '۰۹۱۲۳۴۵۶۷۸۹' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', icon: <FaCertificate />, color: '#3B82F6' },
    { name: 'ISO 14001:2015', icon: <FaLeaf />, color: '#10B981' },
    { name: 'ISO 45001:2018', icon: <FaShieldAlt />, color: '#EF4444' },
    { name: 'CE Mark', icon: <FaGem />, color: '#8B5CF6' },
    { name: 'UL Certified', icon: <FaTrophy />, color: '#F59E0B' },
    { name: 'EN 81-20', icon: <FaAward />, color: '#EC4899' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      onNotification(`🎉 ایمیل ${newsletterEmail} با موفقیت در خبرنامه ثبت شد!`);
      setNewsletterEmail('');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNotification(`🔍 در حال جستجوی "${searchQuery}" در بین ۵۰۰+ مقاله و محصول...`);
      setSearchQuery('');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="footer-modern" id="contact">
      {/* Back to Top Button */}
      <AnimatePresence>
        {isBackToTopVisible && (
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowUp />
            <span>بالای صفحه</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Footer */}
      <div className="footer-container">
        {/* Top Section - Company Info */}
        <motion.div 
          className="footer-top"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="company-card">
            <div className="company-header">
              <motion.div 
                className="company-logo"
                whileHover={{ rotate: 8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaArrowUp />
                <div className="logo-glow" />
              </motion.div>
              
              <div className="company-info">
                <h2 className="company-name">{companyInfo.name}</h2>
                <p className="company-tagline">{companyInfo.tagline}</p>
                <div className="company-stats">
                  <div className="stat">
                    <FaTrophy />
                    <span>{companyInfo.awards}</span>
                  </div>
                  <div className="stat">
                    <FaCube />
                    <span>{companyInfo.projects}</span>
                  </div>
                  <div className="stat">
                    <FaUsers />
                    <span>{companyInfo.clients}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="company-description">{companyInfo.description}</p>
            
            {/* Quick Actions */}
            <div className="quick-actions">
              <motion.button 
                className="action-btn"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('consultation')}
              >
                <FaHeadset />
                <span>مشاوره رایگان</span>
              </motion.button>
              
              <motion.button 
                className="action-btn"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNotification('📞 در حال اتصال به پشتیبانی...')}
              >
                <FaPhone />
                <span>تماس فوری</span>
              </motion.button>
              
              <motion.button 
                className="action-btn"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNotification('📄 کاتالوگ در حال دانلود...')}
              >
                <FaDownload />
                <span>دانلود کاتالوگ</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Middle Section - Main Content */}
        <motion.div 
          className="footer-middle"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Column 1: Quick Links */}
          <motion.div className="footer-column" variants={itemVariants}>
            <div className="column-header">
              <h3>دسترسی سریع</h3>
              <div className="column-line" />
            </div>
            
            <div className="quick-links-grid">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="quick-link"
                  style={{ '--link-color': link.color }}
                  whileHover={{ x: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href.substring(1));
                  }}
                >
                  <div className="link-icon" style={{ background: `${link.color}20`, color: link.color }}>
                    {link.icon}
                  </div>
                  <span className="link-text">{link.label}</span>
                  <FaCaretLeft className="link-arrow" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Products */}
          <motion.div className="footer-column" variants={itemVariants}>
            <div className="column-header">
              <h3>محصولات برتر</h3>
              <div className="column-line" />
            </div>
            
            <div className="products-preview">
              {productsCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  className="product-category"
                  whileHover={{ y: -3 }}
                >
                  <div className="category-header">
                    <div className="category-icon" style={{ color: category.color }}>
                      {category.icon}
                    </div>
                    <h4>{category.category}</h4>
                  </div>
                  
                  <div className="category-items">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="category-item">
                        <span className="item-name">{item.name}</span>
                        <span className="item-tag" style={{ background: `${category.color}20`, color: category.color }}>
                          {item.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div className="footer-column" variants={itemVariants}>
            <div className="column-header">
              <h3>خدمات ما</h3>
              <div className="column-line" />
            </div>
            
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="service-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="service-info">
                    <h4>{service.name}</h4>
                    <p>{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Contact & Newsletter */}
          <motion.div className="footer-column" variants={itemVariants}>
            <div className="column-header">
              <h3>ارتباط با ما</h3>
              <div className="column-line" />
            </div>
            
            {/* Contact Info */}
            <div className="contact-info">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {contact.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{contact.title}</h4>
                    <p>{contact.detail}</p>
                    <button className="contact-action">
                      {contact.action.icon}
                      <span>{contact.action.label}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Newsletter */}
            <div className="newsletter-section">
              <h4>عضویت در خبرنامه</h4>
              <p>جدیدترین اخبار و تخفیف‌ها را دریافت کنید</p>
              
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="ایمیل خود را وارد کنید"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <motion.button 
                    type="submit"
                    className="newsletter-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPaperPlane />
                  </motion.button>
                </div>
                <div className="form-hint">
                  <FaShieldAlt />
                  <span>اطلاعات شما محفوظ می‌ماند</span>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Social & Certifications */}
        <motion.div 
          className="footer-bottom"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {/* Social Media */}
          <div className="social-section">
            <h3>در شبکه‌های اجتماعی</h3>
            <div className="social-grid">
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="social-platform"
                  style={{ '--platform-color': platform.color }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="platform-icon" style={{ background: platform.color }}>
                    {platform.icon}
                  </div>
                  <div className="platform-info">
                    <div className="platform-name">{platform.name}</div>
                    <div className="platform-handle">{platform.handle}</div>
                    <div className="platform-stats">{platform.followers || platform.members || platform.subscribers || platform.online}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="certifications-section">
            <h3>گواهینامه‌های بین‌المللی</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-badge"
                  style={{ '--cert-color': cert.color }}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  <div className="cert-icon" style={{ color: cert.color }}>
                    {cert.icon}
                  </div>
                  <div className="cert-name">{cert.name}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Search & Tools */}
          <div className="tools-section">
            <form className="footer-search" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className="search-input"
                placeholder="جستجوی محصولات، مقالات، خدمات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <motion.button 
                type="submit"
                className="search-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaSearch />
              </motion.button>
            </form>
            
            <div className="footer-tools">
              <button className="tool-btn">
                <FaQrcode />
                <span>QR Code</span>
              </button>
              <button className="tool-btn">
                <FaFilePdf />
                <span>بروشور PDF</span>
              </button>
              <button className="tool-btn">
                <FaMobileAlt />
                <span>اپلیکیشن موبایل</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Copyright */}
        <motion.div 
          className="footer-copyright"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="copyright-content">
            <div className="copyright-text">
              <p>© ۱۴۰۳ <span className="highlight">ارتفاع‌افزار</span> - تمامی حقوق محفوظ است</p>
              <p>طراحی و توسعه با ❤️ در ایران</p>
            </div>
            
            <div className="copyright-links">
              <a href="#privacy">حریم خصوصی</a>
              <a href="#terms">قوانین و مقررات</a>
              <a href="#sitemap">نقشه سایت</a>
              <a href="#accessibility">دسترسی‌پذیری</a>
              <a href="#cookies">تنظیمات کوکی‌ها</a>
            </div>
            
            <div className="payment-methods">
              <span>پرداخت امن با:</span>
              <div className="payment-icons">
                <div className="payment-icon">💳</div>
                <div className="payment-icon">🏦</div>
                <div className="payment-icon">📱</div>
                <div className="payment-icon">🔐</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;