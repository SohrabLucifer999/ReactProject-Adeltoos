import React, { useState, useRef } from 'react';
import { 
  FaSlidersH, 
  FaCog, 
  FaShieldAlt, 
  FaPlus,
  FaDesktop,
  FaRocket,
  FaLeaf,
  FaTools,
  FaBars, 
  FaVolumeMute,
  FaPercentage,
  FaShieldVirus,
  FaMicrochip,
  FaPlayCircle,
  FaCertificate,
  FaTag,
  FaHistory,
  FaStar,
  FaFire,
  FaBolt,
  FaGem,
  FaCrown,
  FaSync,
  FaChevronRight,
  FaShoppingCart,
  FaEye,
  FaHeart,
  FaShareAlt,
  FaTruck,
  FaClock,
  FaAward,
  FaChartLine,
  FaUsers,
  FaInfinity,
  FaPalette,
  FaMagic,
  FaLayerGroup,
  FaRobot,
  FaCloud,
  FaMobileAlt,
  FaDatabase,
  FaLock,
  FaBrain,
  FaSatellite
} from 'react-icons/fa';
// حذف کردیم: import { FaFilter, FaList } from 'react-icons/fa'; این خط اضافی
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Products.css';

const Products = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const containerRef = useRef(null);
  const { ref: sectionRef, inView: sectionInView } = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });

  const categories = [
    { id: 'all', label: 'همه محصولات', icon: <FaSlidersH />, count: 12 },
    { id: 'control', label: 'سیستم‌های کنترل', icon: <FaDesktop />, count: 4 },
    { id: 'motor', label: 'موتورها', icon: <FaCog />, count: 3 },
    { id: 'safety', label: 'سیستم ایمنی', icon: <FaShieldAlt />, count: 3 },
    { id: 'smart', label: 'هوشمند سازی', icon: <FaRobot />, count: 2 },
    { id: 'accessory', label: 'لوازم جانبی', icon: <FaTools />, count: 5 }
  ];

  const filters = [
    { id: 'featured', label: 'پیشنهادی', icon: <FaStar /> },
    { id: 'bestseller', label: 'پرفروش', icon: <FaFire /> },
    { id: 'new', label: 'جدید', icon: <FaBolt /> },
    { id: 'premium', label: 'پریمیوم', icon: <FaCrown /> },
    { id: 'eco', label: 'سبز', icon: <FaLeaf /> }
  ];

  const products = [
    {
      id: 1,
      name: 'سیستم کنترل هوشمند نسل ۳',
      category: 'control',
      subCategory: 'smart',
      icon: <FaSlidersH />,
      badge: { type: 'new', text: 'جدید', color: '#10B981' },
      rating: 4.9,
      reviews: 127,
      description: 'کنترل‌پنل هوشمند با رابط کاربری پیشرفته و قابلیت کنترل از راه دور. طراحی مینیمال با قابلیت سفارشی‌سازی کامل.',
      longDescription: 'سیستم کنترل هوشمند نسل سوم با پردازنده‌ی چهار هسته‌ای، قابلیت اتصال به اینترنت اشیاء (IoT)، کنترل صوتی و نمایشگر لمسی ۱۰ اینچی. سازگار با تمامی استانداردهای جهانی.',
      features: [
        { icon: <FaDesktop />, text: 'اینترفیس مدرن', desc: 'نمایشگر لمسی ۴K' },
        { icon: <FaRobot />, text: 'هوش مصنوعی', desc: 'یادگیری الگوها' },
        { icon: <FaCloud />, text: 'ابر دیجیتال', desc: 'ذخیره‌سازی ابری' },
        { icon: <FaMobileAlt />, text: 'کنترل موبایل', desc: 'اپلیکیشن اختصاصی' },
        { icon: <FaLeaf />, text: 'صرفه‌جویی', desc: 'کاهش ۳۵٪ مصرف' },
        { icon: <FaDatabase />, text: 'لاگ پیشرفته', desc: 'ثبت ۱۰۰۰ رویداد' }
      ],
      specs: {
        power: '۲۴۰۰W',
        weight: '۴.۵kg',
        warranty: '۱۰ سال',
        certification: 'ISO 9001'
      },
      currentPrice: '۲۴,۵۰۰,۰۰۰',
      originalPrice: '۲۹,۵۰۰,۰۰۰',
      discount: 17,
      stock: 15,
      sold: 42,
      images: ['product1-1.jpg', 'product1-2.jpg', 'product1-3.jpg'],
      tags: ['هوشمند', 'کنترل پیشرفته', 'جدید']
    },
    {
      id: 2,
      name: 'موتور بی‌صدا پریمیوم',
      category: 'motor',
      subCategory: 'premium',
      icon: <FaCog />,
      badge: { type: 'bestseller', text: 'پرفروش', color: '#EF4444' },
      rating: 4.8,
      reviews: 89,
      description: 'طراحی شده برای عملکرد بی‌صدا با قدرت بالا. مصرف انرژی بهینه شده با قابلیت اطمینان مثال‌زدنی.',
      longDescription: 'موتور DC بدون جاروبک با تکنولوژی PWM، بازده ۹۹.۲٪، سیستم خنک‌کننده مایع، سطح صدا زیر ۴۵dB. مناسب برای آسمانخراش‌ها و ساختمان‌های تجاری.',
      features: [
        { icon: <FaVolumeMute />, text: 'عملکرد بی‌صدا', desc: 'کمتر از ۴۵dB' },
        { icon: <FaPercentage />, text: 'بازده بالا', desc: '۹۹.۲٪ بازده' },
        { icon: <FaTools />, text: 'نگهداری آسان', desc: 'سرویس ۵ ساله' },
        { icon: <FaShieldAlt />, text: 'گارانتی', desc: '۱۰ سال ضمانت' },
        { icon: <FaSync />, text: 'کنترل سرعت', desc: 'تغییر سرعت نرم' },
        { icon: <FaInfinity />, text: 'طول عمر', desc: '۲۰+ سال' }
      ],
      specs: {
        power: '۱۵۰۰W',
        weight: '۸۵kg',
        warranty: '۱۰ سال',
        certification: 'CE, UL'
      },
      currentPrice: '۴۲,۵۰۰,۰۰۰',
      originalPrice: '۴۹,۵۰۰,۰۰۰',
      discount: 14,
      stock: 8,
      sold: 156,
      images: ['product2-1.jpg', 'product2-2.jpg', 'product2-3.jpg'],
      tags: ['پریمیوم', 'بی‌صدا', 'پرفروش']
    },
    {
      id: 3,
      name: 'سیستم ایمنی چند لایه',
      category: 'safety',
      subCategory: 'featured',
      icon: <FaShieldAlt />,
      badge: { type: 'featured', text: 'ویژه', color: '#3B82F6' },
      rating: 5.0,
      reviews: 203,
      description: 'ایمنی مطلق با طراحی برجسته. سیستم‌های حفاظتی پیشرفته با تمرکز بر قابلیت اطمینان و سادگی عملکرد.',
      longDescription: 'سیستم ایمنی ۷ لایه شامل سنسورهای لیزری، سیستم ترمز اضطراری مغناطیسی، پشتیبان برق اضطراری، مانیتورینگ لحظه‌ای و اتصال به مرکز کنترل.',
      features: [
        { icon: <FaShieldVirus />, text: 'محافظت کامل', desc: '۷ لایه ایمنی' },
        { icon: <FaMicrochip />, text: 'سنسورهای پیشرفته', desc: 'دقت ۰.۱mm' },
        { icon: <FaPlayCircle />, text: 'راه‌اندازی ساده', desc: 'کالیبره اتوماتیک' },
        { icon: <FaCertificate />, text: 'گواهی ISO', desc: 'ISO 13849' },
        { icon: <FaBrain />, text: 'پیش‌بینی خطا', desc: 'هوش مصنوعی' },
        { icon: <FaSatellite />, text: 'مانیتورینگ', desc: '۲۴/۷ نظارت' }
      ],
      specs: {
        power: '۵۰۰W',
        weight: '۱۲kg',
        warranty: '۱۲ سال',
        certification: 'ISO 13849'
      },
      currentPrice: '۱۸,۴۰۰,۰۰۰',
      originalPrice: '',
      discount: 0,
      stock: 25,
      sold: 312,
      images: ['product3-1.jpg', 'product3-2.jpg', 'product3-3.jpg'],
      tags: ['ایمنی', 'ویژه', 'پیشرفته']
    },
    {
      id: 4,
      name: 'ماژول هوش مصنوعی',
      category: 'smart',
      subCategory: 'new',
      icon: <FaRobot />,
      badge: { type: 'new', text: 'تکنولوژی جدید', color: '#8B5CF6' },
      rating: 4.7,
      reviews: 56,
      description: 'هوش مصنوعی پیشرفته برای بهینه‌سازی عملکرد و پیش‌بینی تعمیرات. کاهش ۴۰٪ مصرف انرژی.',
      longDescription: 'ماژول AI با قابلیت یادگیری عمیق، آنالیز الگوهای مصرف، پیش‌بینی خطاها ۲۴ ساعت قبل از وقوع و بهینه‌سازی مسیرها.',
      features: [
        { icon: <FaBrain />, text: 'یادگیری عمیق', desc: 'شبکه عصبی' },
        { icon: <FaChartLine />, text: 'آنالیز پیشرفته', desc: 'پیش‌بینی خطا' },
        { icon: <FaLeaf />, text: 'بهینه‌سازی', desc: 'کاهش ۴۰٪ مصرف' },
        { icon: <FaUsers />, text: 'یادگیری جمعی', desc: 'ارتباط با سایر سیستم‌ها' },
        { icon: <FaMagic />, text: 'سفارشی‌سازی', desc: 'آموزش اختصاصی' },
        { icon: <FaDatabase />, text: 'دیتابیس', desc: '۱۰۰۰+ الگو' }
      ],
      specs: {
        power: '۳۰۰W',
        weight: '۲.۳kg',
        warranty: '۸ سال',
        certification: 'AI Ready'
      },
      currentPrice: '۳۶,۹۰۰,۰۰۰',
      originalPrice: '۴۲,۰۰۰,۰۰۰',
      discount: 12,
      stock: 12,
      sold: 47,
      images: ['product4-1.jpg', 'product4-2.jpg', 'product4-3.jpg'],
      tags: ['هوش مصنوعی', 'جدید', 'بهینه‌سازی']
    },
    {
      id: 5,
      name: 'پالت طراحی برجسته',
      category: 'accessory',
      subCategory: 'premium',
      icon: <FaPalette />,
      badge: { type: 'premium', text: 'لوکس', color: '#F59E0B' },
      rating: 4.9,
      reviews: 94,
      description: 'طراحی مینیمال با قابلیت تغییر رنگ‌ و بافت. سازگار با تمامی سبک‌های معماری مدرن.',
      longDescription: 'پالت طراحی با ۱۲۸ رنگ قابل تنظیم، ۸ بافت مختلف، ضد خش و ضد لک. قابلیت برنامه‌ریزی نورپردازی و تغییر ظاهر.',
      features: [
        { icon: <FaPalette />, text: 'رنگ‌های متنوع', desc: '۱۲۸ رنگ قابل تنظیم' },
        { icon: <FaLayerGroup />, text: 'بافت‌های مختلف', desc: '۸ نوع بافت' },
        { icon: <FaGem />, text: 'مواد لوکس', desc: 'سرامیک ضد خش' },
        { icon: <FaMagic />, text: 'نورپردازی', desc: 'RGB قابل برنامه‌ریزی' },
        { icon: <FaSync />, text: 'تغییر سریع', desc: 'تعویض ۳۰ ثانیه‌ای' },
        { icon: <FaShieldAlt />, text: 'ضد لک', desc: 'پوشش نانویی' }
      ],
      specs: {
        power: '۱۵۰W',
        weight: '۶.۵kg',
        warranty: '۱۵ سال',
        certification: 'Design Excellence'
      },
      currentPrice: '۱۲,۸۰۰,۰۰۰',
      originalPrice: '۱۶,۵۰۰,۰۰۰',
      discount: 22,
      stock: 18,
      sold: 89,
      images: ['product5-1.jpg', 'product5-2.jpg', 'product5-3.jpg'],
      tags: ['لوکس', 'طراحی', 'پریمیوم']
    },
    {
      id: 6,
      name: 'سیستم کنترل صوتی',
      category: 'control',
      subCategory: 'smart',
      icon: <FaDesktop />,
      badge: { type: 'featured', text: 'پیشنهادی', color: '#EC4899' },
      rating: 4.6,
      reviews: 78,
      description: 'کنترل صوتی پیشرفته با تشخیص گفتار طبیعی. پشتیبانی از ۸ زبان زنده دنیا.',
      longDescription: 'سیستم کنترل صوتی با قابلیت تشخیص گفتار طبیعی، یادگیری لهجه، پشتیبانی از ۸ زبان و اتصال به دستیارهای صوتی.',
      features: [
        { icon: <FaVolumeMute />, text: 'تشخیص گفتار', desc: '۹۸٪ دقت' },
        { icon: <FaUsers />, text: 'چند زبانه', desc: '۸ زبان' },
        { icon: <FaBrain />, text: 'یادگیری', desc: 'شناسایی لهجه' },
        { icon: <FaLock />, text: 'امنیت صوتی', desc: 'شناسایی صدا' },
        { icon: <FaMobileAlt />, text: 'همگام‌سازی', desc: 'اپلیکیشن موبایل' },
        { icon: <FaCloud />, text: 'به‌روزرسانی', desc: 'اتصال به ابر' }
      ],
      specs: {
        power: '۱۸۰W',
        weight: '۳.۲kg',
        warranty: '۷ سال',
        certification: 'Voice Control Certified'
      },
      currentPrice: '۲۱,۳۰۰,۰۰۰',
      originalPrice: '۲۷,۰۰۰,۰۰۰',
      discount: 21,
      stock: 22,
      sold: 134,
      images: ['product6-1.jpg', 'product6-2.jpg', 'product6-3.jpg'],
      tags: ['صوتی', 'هوشمند', 'پیشنهادی']
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    onAddToCart(product);
    // Add success animation
    const button = document.querySelector(`[data-product-id="${product.id}"]`);
    if (button) {
      button.classList.add('added');
      setTimeout(() => button.classList.remove('added'), 2000);
    }
  };

  return (
    <section className="products-modern" id="products" ref={sectionRef}>
      {/* Animated Background */}
      <div className="products-bg-animation">
        <div className="bg-particle" />
        <div className="bg-particle" />
        <div className="bg-particle" />
      </div>

      <div className="products-container">
        {/* Header Section */}
        <motion.div 
          className="products-header"
          variants={fadeInUp}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
        >
          <div className="header-badge">
            <FaSlidersH className="badge-icon" />
            <span className="badge-text">محصولات حرفه‌ای</span>
          </div>
          
          <h2 className="products-title">
            <span className="title-main">سیستم‌های برجسته</span>
            <span className="title-sub">طراحی شده برای عملکرد عالی</span>
          </h2>
          
          <p className="products-intro">
            ترکیبی از <span className="highlight">طراحی مینیمال</span>، 
            <span className="highlight"> فناوری پیشرفته</span> و 
            <span className="highlight"> کیفیت بی‌نظیر</span> برای ایجاد تجربه‌ای متفاوت
          </p>
        </motion.div>

        {/* Categories & Filters */}
        <motion.div 
          className="products-controls"
          variants={staggerContainer}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
        >
          {/* Categories */}
          <div className="categories-section">
            <div className="section-label">
              <FaSlidersH />
              <span>دسته‌بندی‌ها</span>
            </div>
            
            <div className="categories-list">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-info">
                    <span className="category-label">{category.label}</span>
                    <span className="category-count">{category.count} محصول</span>
                  </div>
                  {activeCategory === category.id && (
                    <motion.div 
                      className="active-indicator"
                      layoutId="activeCategory"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="filters-section">
            <div className="section-label">
              <FaSlidersH /> {/* تغییر از FaFilter به FaSlidersH یا FaDesktop */}
              <span>فیلترها</span>
            </div>
            
            <div className="filters-list">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  className="filter-btn"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="filter-icon">{filter.icon}</div>
                  <span>{filter.label}</span>
                </motion.button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="view-toggle">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <FaDesktop />
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <FaBars /> {/* تغییر از FaList به FaBars */}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className={`products-grid ${viewMode}`}
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
        >
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              className="product-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Badge */}
              {product.badge && (
                <div 
                  className="product-badge"
                  style={{ background: product.badge.color }}
                >
                  {product.badge.icon || <FaStar />}
                  <span>{product.badge.text}</span>
                </div>
              )}

              {/* Discount Badge */}
              {product.discount > 0 && (
                <div className="discount-badge">
                  <FaPercentage />
                  <span>{product.discount}% تخفیف</span>
                </div>
              )}

              {/* Product Image/Icon */}
              <div className="product-image">
                <div className="image-placeholder" style={{ background: product.badge?.color + '20' }}>
                  {product.icon}
                </div>
                
                {/* Quick Actions */}
                <div className="product-actions">
                  <button 
                    className="action-btn wishlist-btn"
                    onClick={() => {/* Add to wishlist */}}
                  >
                    <FaHeart />
                  </button>
                  <button 
                    className="action-btn quickview-btn"
                    onClick={() => handleQuickView(product)}
                  >
                    <FaEye />
                  </button>
                  <button 
                    className="action-btn share-btn"
                    onClick={() => {/* Share product */}}
                  >
                    <FaShareAlt />
                  </button>
                </div>
              </div>

              {/* Product Content */}
              <div className="product-content">
                <div className="product-category">
                  <span>{product.category === 'control' ? 'کنترل' : 
                         product.category === 'motor' ? 'موتور' : 
                         product.category === 'safety' ? 'ایمنی' : 
                         product.category === 'smart' ? 'هوشمند' : 'لوازم'}</span>
                </div>

                <h3 className="product-title">{product.name}</h3>
                
                <p className="product-description">{product.description}</p>

                {/* Rating */}
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(product.rating) ? 'filled' : ''}
                      />
                    ))}
                  </div>
                  <span className="rating-value">{product.rating}</span>
                  <span className="reviews">({product.reviews} نظر)</span>
                </div>

                {/* Features Preview */}
                <div className="features-preview">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="feature-preview">
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Stock & Sales */}
                <div className="stock-info">
                  <div className="stock-bar">
                    <div 
                      className="stock-progress"
                      style={{ 
                        width: `${(product.sold / (product.sold + product.stock)) * 100}%`,
                        background: product.badge?.color 
                      }}
                    />
                  </div>
                  <div className="stock-details">
                    <span className="sold">فروخته شده: {product.sold}</span>
                    <span className="available">موجودی: {product.stock}</span>
                  </div>
                </div>
              </div>

              {/* Product Footer */}
              <div className="product-footer">
                <div className="price-section">
                  <div className="current-price">
                    <FaTag />
                    <span className="price-value">{product.currentPrice}</span>
                    <span className="price-currency">تومان</span>
                  </div>
                  
                  {product.originalPrice && (
                    <div className="original-price">
                      <FaHistory />
                      <span>{product.originalPrice} تومان</span>
                    </div>
                  )}
                </div>

                <div className="action-buttons">
                  <button 
                    className="details-btn"
                    onClick={() => handleQuickView(product)}
                  >
                    <FaEye />
                    <span>مشاهده جزئیات</span>
                  </button>
                  
                  <motion.button 
                    className="add-cart-btn"
                    onClick={() => handleAddToCart(product)}
                    data-product-id={product.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaShoppingCart />
                    <span>افزودن به سبد</span>
                    <FaPlus className="plus-icon" />
                  </motion.button>
                </div>
              </div>

              {/* Tags */}
              <div className="product-tags">
                {product.tags.map((tag, index) => (
                  <span key={index} className="product-tag">{tag}</span>
                ))}
              </div>

              {/* Hover Effect */}
              {hoveredProduct === product.id && (
                <motion.div 
                  className="product-hover-effect"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div 
          className="view-more-section"
          variants={fadeInUp}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
        >
          <button className="view-more-btn">
            <span>مشاهده همه محصولات</span>
            <FaChevronRight />
          </button>
          
          <div className="stats-bar">
            <div className="stat">
              <div className="stat-value">{products.length}</div>
              <div className="stat-label">محصول فعال</div>
            </div>
            <div className="stat">
              <div className="stat-value">{products.reduce((sum, p) => sum + p.sold, 0)}</div>
              <div className="stat-label">فروش موفق</div>
            </div>
            <div className="stat">
              <div className="stat-value">
                {Math.round(products.reduce((sum, p) => sum + p.rating, 0) / products.length * 10) / 10}
              </div>
              <div className="stat-label">میانگین امتیاز</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            className="quickview-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content would go here */}
              <button 
                className="close-modal"
                onClick={() => setSelectedProduct(null)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;