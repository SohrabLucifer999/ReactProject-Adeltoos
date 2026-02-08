import React, { useState, useEffect, useRef } from 'react';
import { 
  FaRocket, 
  FaEye, 
  FaDownload, 
  FaUserPlus,
  FaCalendarAlt,
  FaProjectDiagram,
  FaChartLine,
  FaGlobeAsia,
  FaChevronRight,
  FaChevronLeft,
  FaPalette,
  FaShieldAlt,
  FaAward,
  FaLightbulb,
  FaCrown,
  FaStar,
  FaPlayCircle,
  FaArrowRight,
  FaGlassCheers,
  FaGem,
  FaLeaf,
  FaBuilding,
  FaChartBar,
  FaUsers,
  FaTrophy
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Hero.css';

const Hero = ({ onNotification }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);
  const { ref: inViewRef, inView: heroInView } = useInView({ threshold: 0.1 });

  const slides = [
    {
      id: 1,
      name: 'پالت آبی پیشرفته',
      description: 'طراحی مینیمال با تمرکز بر کارایی',
      icon: <FaPalette className="slide-icon" />,
      color: 'linear-gradient(135deg, #1A56DB 0%, #3B82F6 100%)',
      accentColor: '#60A5FA',
      features: ['طراحی مدرن', 'کارایی بالا', 'ایمنی کامل']
    },
    {
      id: 2,
      name: 'پالت سبز پایدار',
      description: 'تکنولوژی سبز و صرفه‌جویی انرژی',
      icon: <FaLeaf className="slide-icon" />,
      color: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
      accentColor: '#6EE7B7',
      features: ['صرفه‌جویی انرژی', 'دوستدار محیط زیست', 'مصرف بهینه']
    },
    {
      id: 3,
      name: 'پالت طلایی لوکس',
      description: 'طراحی لوکس و منحصر به فرد',
      icon: <FaGem className="slide-icon" />,
      color: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
      accentColor: '#FBBF24',
      features: ['طراحی لوکس', 'مواد اولیه مرغوب', 'منحصر به فرد']
    },
    {
      id: 4,
      name: 'پالت بنفش هوشمند',
      description: 'سیستم‌های هوشمند و خودکار',
      icon: <FaLightbulb className="slide-icon" />,
      color: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
      accentColor: '#A78BFA',
      features: ['هوشمند سازی', 'کنترل از راه دور', 'آنالیز داده']
    }
  ];

  const stats = [
    { 
      value: '۲۵+', 
      label: 'سال تجربه درخشان', 
      icon: <FaCalendarAlt />,
      description: 'تجربه ارزشمند در صنعت' 
    },
    { 
      value: '۵,۲۰۰+', 
      label: 'پروژه موفق', 
      icon: <FaProjectDiagram />,
      description: 'با رضایت کامل مشتریان' 
    },
    { 
      value: '۹۸.۷٪', 
      label: 'رضایت مشتری', 
      icon: <FaChartLine />,
      description: 'بالاترین استاندارد کیفیت' 
    },
    { 
      value: '۴۳+', 
      label: 'کشور فعال', 
      icon: <FaGlobeAsia />,
      description: 'حضور بین‌المللی' 
    },
    { 
      value: '۵۰۰+', 
      label: 'متخصص مجرب', 
      icon: <FaUsers />,
      description: 'تیم حرفه‌ای و متخصص' 
    },
    { 
      value: '۸۰+', 
      label: 'جایزه بین‌المللی', 
      icon: <FaTrophy />,
      description: 'افتخارات کسب شده' 
    }
  ];

  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'ایمنی بی‌نظیر',
      description: 'مطابق با استانداردهای بین‌المللی ایمنی'
    },
    {
      icon: <FaCrown />,
      title: 'کیفیت ممتاز',
      description: 'استفاده از بهترین مواد اولیه'
    },
    {
      icon: <FaRocket />,
      title: 'فناوری پیشرفته',
      description: 'به روزترین تکنولوژی‌های روز دنیا'
    },
    {
      icon: <FaStar />,
      title: 'طراحی برجسته',
      description: 'طراحی مینیمال و کاربرپسند'
    }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const progress = Math.min(Math.max(1 - rect.top / window.innerHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section 
      className="hero-modern" 
      id="home" 
      ref={(node) => {
        heroRef.current = node;
        inViewRef(node);
      }}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
        '--scroll-progress': scrollProgress
      }}
    >
      {/* Animated Background */}
      <div className="hero-background-animated">
        <div className="particles-container">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: 0 
              }}
              animate={{ 
                y: ['0%', '-100%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        {/* Gradient Mesh */}
        <div className="gradient-mesh" style={{ background: slides[currentSlide].color }} />
        
        {/* Glass Morphism Effect */}
        <div className="glass-effect">
          <div className="glass-circle circle-1" />
          <div className="glass-circle circle-2" />
          <div className="glass-circle circle-3" />
        </div>
      </div>

      {/* Slider Section */}
      <div className="slider-section">
        <AnimatePresence mode="wait" custom={1}>
          <motion.div
            key={currentSlide}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.3 }
            }}
            className="slide-content"
          >
            <div className="slide-badge">
              {slides[currentSlide].icon}
              <span>پالت طراحی {currentSlide + 1}</span>
            </div>
            
            <h2 className="slide-title">{slides[currentSlide].name}</h2>
            
            <p className="slide-description">{slides[currentSlide].description}</p>
            
            <div className="slide-features">
              {slides[currentSlide].features.map((feature, idx) => (
                <motion.span 
                  key={idx}
                  className="slide-feature"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <FaStar className="feature-icon" />
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="slider-controls">
          <div className="slider-nav">
            <motion.button 
              className="slider-nav-btn prev"
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight />
            </motion.button>
            
            <button 
              className={`play-pause-btn ${isPlaying ? 'playing' : ''}`}
              onClick={handlePlayPause}
            >
              <FaPlayCircle />
            </button>
            
            <motion.button 
              className="slider-nav-btn next"
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft />
            </motion.button>
          </div>

          <div className="slider-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slider-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <motion.div 
                  className="indicator-progress"
                  animate={index === currentSlide && isPlaying ? 
                    { scaleX: [0, 1, 0] } : 
                    { scaleX: 0 }
                  }
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <motion.div 
          className="hero-badge"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <div className="badge-icon">
            <FaRocket />
          </div>
          <div className="badge-text">
            <span className="badge-label">پیشرو در صنعت</span>
            <span className="badge-subtitle">ارتقای نما • تجربه برتر</span>
          </div>
        </motion.div>

        <motion.div 
          className="hero-title-wrapper"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          <h1 className="hero-title">
            <span className="title-gradient">ارتفاع‌افزار</span>
            <span className="title-sub">طراحی مینیمال برجسته</span>
          </h1>
          
          <div className="title-decoration">
            <div className="decoration-line" />
            <FaBuilding className="decoration-icon" />
            <div className="decoration-line" />
          </div>
        </motion.div>

        <motion.p 
          className="hero-description"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          با رویکردی <span className="highlight">مینیمال اما برجسته</span>، استانداردهای جدیدی در صنعت آسانسور تعریف می‌کنیم.
          ترکیبی از <span className="highlight">طراحی مدرن</span>، <span className="highlight">کیفیت بی‌نظیر</span> و <span className="highlight">فناوری پیشرفته</span> 
          برای تجربه‌ای منحصر به فرد. بیش از دو دهه تجربه در طراحی و تولید سیستم‌های مدرن آسانسور 
          با تکنولوژی روز دنیا و خدمات پس از فروش گسترده.
        </motion.p>

        {/* Features Grid */}
        <motion.div 
          className="features-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              variants={fadeInUp}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon-wrapper" style={{ color: slides[currentSlide].accentColor }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-line" style={{ background: slides[currentSlide].accentColor }} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="hero-actions"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('products')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
              onNotification?.('به بخش محصولات هدایت می‌شوید...');
            }}
          >
            <FaEye />
            <span>مشاهده مجموعه محصولات</span>
            <FaArrowRight className="arrow-icon" />
          </motion.button>
          
          <motion.button 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNotification?.('کاتالوگ کامل در حال دانلود است...')}
          >
            <FaDownload />
            <span>دریافت کاتالوگ کامل</span>
          </motion.button>
          
          <motion.button 
            className="btn btn-ghost"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.querySelector('[onLoginClick]')?.click();
              onNotification?.('فرم مشاوره رایگان باز شد');
            }}
          >
            <FaGlassCheers />
            <span>دریافت مشاوره رایگان</span>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="stats-section"
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <div className="stats-header">
            <h3 className="stats-title">در اعداد و ارقام</h3>
            <p className="stats-subtitle">داستان موفقیت ما در آمار و ارقام</p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                variants={fadeInUp}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
              >
                <div className="stat-icon" style={{ color: slides[currentSlide].accentColor }}>
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
                <div className="stat-glow" style={{ background: slides[currentSlide].color }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-line" />
        <span>اسکرول کنید</span>
      </motion.div>
    </section>
  );
};

export default Hero;