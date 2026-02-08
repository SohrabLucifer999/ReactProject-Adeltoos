import React, { useRef, useState } from 'react';
import { 
  FaAward, 
  FaLightbulb, 
  FaUsers, 
  FaGlobe,
  FaBuilding,
 // FaChartLine,
  FaShieldAlt,
  FaHeartbeat,
  FaRocket,
  FaGem,
  FaTrophy,
  FaCertificate,
  FaHandshake,
  FaLeaf,
 // FaCogs,
  //FaMicrochip,
  FaInfinity,
 // FaPalette,
  FaUserTie,
  FaClock
} from 'react-icons/fa';
import { motion, useInView, useTransform, useScroll } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const [activeTimeline, setActiveTimeline] = useState(0);

  const coreValues = [
    {
      id: 1,
      icon: <FaAward />,
      title: 'کیفیت فوق‌العاده',
      description: 'استفاده از بهترین مواد اولیه با کنترل کیفیت ۵ مرحله‌ای',
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)'
    },
    {
      id: 2,
      icon: <FaLightbulb />,
      title: 'نوآوری دائمی',
      description: 'تیم R&D همیشه در حال توسعه تکنولوژی‌های جدید',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #047857 100%)'
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: 'ایمنی مطلق',
      description: 'مطابق با ۴۲ استاندارد بین‌المللی ایمنی',
      color: '#EF4444',
      gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
    },
    {
      id: 4,
      icon: <FaUsers />,
      title: 'رضایت مشتری',
      description: '۹۸.۷٪ رضایت مشتریان در ۵ سال متوالی',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
    },
    {
      id: 5,
      icon: <FaGlobe />,
      title: 'حضور جهانی',
      description: 'فعال در ۴۳ کشور با ۱۲ نمایندگی بین‌المللی',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
    },
    {
      id: 6,
      icon: <FaLeaf />,
      title: 'پایداری محیطی',
      description: 'کاهش ۴۰٪ مصرف انرژی با تکنولوژی سبز',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    }
  ];

  const milestones = [
    { year: '۱۹۹۸', title: 'تأسیس شرکت', description: 'شروع فعالیت با ۱۰ نفر نیروی متخصص' },
    { year: '۲۰۰۵', title: 'گواهینامه ISO', description: 'دریافت اولین گواهینامه بین‌المللی' },
    { year: '۲۰۱۲', title: 'ورود به بازار جهانی', description: 'صادرات به ۱۰ کشور مختلف' },
    { year: '۲۰۱۸', title: 'توسعه R&D', description: 'تأسیس مرکز تحقیق و توسعه' },
    { year: '۲۰۲۳', title: 'تکنولوژی هوشمند', description: 'راه‌اندازی خط تولید هوشمند' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', icon: <FaCertificate />, color: '#3B82F6' },
    { name: 'ISO 14001:2015', icon: <FaLeaf />, color: '#10B981' },
    { name: 'ISO 45001:2018', icon: <FaShieldAlt />, color: '#EF4444' },
    { name: 'CE Mark', icon: <FaGem />, color: '#8B5CF6' },
    { name: 'UL Certified', icon: <FaTrophy />, color: '#F59E0B' },
    { name: 'EN 81-20', icon: <FaAward />, color: '#EC4899' }
  ];

  const teamStats = [
    { value: '۵۲۰+', label: 'متخصص فعال', icon: <FaUserTie />, suffix: 'نفر' },
    { value: '۸۵٪', label: 'مدرک مهندسی', icon: <FaCertificate />, suffix: 'تیم فنی' },
    { value: '۱۵+', label: 'میانگین تجربه', icon: <FaClock />, suffix: 'سال' },
    { value: '۲۴/۷', label: 'پشتیبانی', icon: <FaHeartbeat />, suffix: 'خدمات' }
  ];

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
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8 
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="about-modern" id="about" ref={containerRef}>
      {/* Parallax Background */}
      <motion.div 
        className="about-parallax-bg"
        style={{ y, opacity }}
      >
        <div className="parallax-layer layer-1" />
        <div className="parallax-layer layer-2" />
        <div className="parallax-layer layer-3" />
      </motion.div>

      {/* Floating Elements */}
      <div className="floating-elements">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-element"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              background: coreValues[i % coreValues.length]?.gradient || '#3B82F6'
            }}
          />
        ))}
      </div>

      <div className="about-container">
        {/* Header Section */}
        <motion.div 
          className="about-header"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="header-badge">
            <FaBuilding className="badge-icon" />
            <span className="badge-text">معرفی شرکت</span>
          </div>
          
          <h2 className="about-title">
            <span className="title-main">ارتفاع‌افزار</span>
            <span className="title-sub">پیشرو در صنعت آسانسور مدرن</span>
          </h2>
          
          <p className="about-intro">
            با <span className="highlight">۲۵+ سال تجربه درخشان</span>، استانداردهای جدیدی در صنعت آسانسور تعریف کرده‌ایم. 
            ترکیبی از <span className="highlight">طراحی مینیمال</span>، <span className="highlight">فناوری پیشرفته</span> و 
            <span className="highlight">کیفیت بی‌نظیر</span> برای ایجاد تجربه‌ای منحصر به فرد.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div 
          className="core-values-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {coreValues.map((value, index) => (
            <motion.div 
              key={value.id}
              className="value-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div 
                className="value-icon-wrapper"
                style={{ background: value.gradient }}
              >
                {value.icon}
              </div>
              
              <div className="value-content">
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
              
              <div className="value-index">۰{index + 1}</div>
              <div 
                className="value-glow"
                style={{ background: value.gradient }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Company Timeline */}
        <motion.div 
          className="timeline-section"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <h3 className="timeline-title">خط زمانی موفقیت</h3>
          
          <div className="timeline-container">
            <div className="timeline-line">
              <div 
                className="timeline-progress"
                style={{ width: `${(activeTimeline / (milestones.length - 1)) * 100}%` }}
              />
            </div>
            
            <div className="timeline-milestones">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`timeline-milestone ${index === activeTimeline ? 'active' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveTimeline(index)}
                >
                  <div className="milestone-year">{milestone.year}</div>
                  <div className="milestone-content">
                    <h4>{milestone.title}</h4>
                    <p>{milestone.description}</p>
                  </div>
                  <div className="milestone-dot" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats & Certifications */}
        <div className="stats-certifications">
          {/* Team Stats */}
          <motion.div 
            className="team-stats"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <h3 className="stats-title">تیم حرفه‌ای ما</h3>
            
            <div className="stats-grid">
              {teamStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-suffix">{stat.suffix}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            className="certifications-section"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            <h3 className="certs-title">گواهینامه‌های بین‌المللی</h3>
            
            <div className="certs-grid">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="cert-item"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    boxShadow: `0 15px 30px ${cert.color}20`
                  }}
                  style={{ borderColor: cert.color }}
                >
                  <div className="cert-icon" style={{ color: cert.color }}>
                    {cert.icon}
                  </div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-glow" style={{ background: cert.color }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <motion.div 
          className="mission-vision"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
        >
          <div className="mission-card">
            <div className="card-header">
              <FaRocket className="card-icon" />
              <h4>ماموریت ما</h4>
            </div>
            <p className="card-content">
              ایجاد تحولی اساسی در صنعت آسانسور با ارائه راهکارهای نوین، 
              ایمن و پایدار که نیازهای امروز را پاسخگو و چالش‌های فردا را پیش‌بینی کند.
            </p>
          </div>
          
          <div className="vision-card">
            <div className="card-header">
              <FaInfinity className="card-icon" />
              <h4>چشم‌انداز ما</h4>
            </div>
            <p className="card-content">
              تبدیل شدن به برترین شرکت منطقه در حوزه سیستم‌های حمل و نقل عمودی 
              تا سال ۱۴۰۵ با حفظ استانداردهای جهانی و رضایت کامل مشتریان.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="about-cta"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.7 }}
        >
          <div className="cta-content">
            <FaHandshake className="cta-icon" />
            <h3>آماده همکاری هستید؟</h3>
            <p>با ما در ساخت آینده‌ای امن و مدرن همراه شوید</p>
          </div>
          
          <button 
            className="cta-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>شروع همکاری</span>
            <FaRocket />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;