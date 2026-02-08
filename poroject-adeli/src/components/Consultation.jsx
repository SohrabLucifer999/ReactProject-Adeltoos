import React, { useState, useRef } from 'react';
import { 
  FaHeadset, 
  FaPaperPlane, 
  FaUser, 
  FaPhone, 
  FaEnvelope,
  FaProjectDiagram,
  FaBuilding,
  FaEdit,
  FaCheckCircle,
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaPhoneAlt,
  FaCalendarAlt,
  FaClipboardCheck,
  FaShieldAlt,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaGraduationCap,
  FaAward,
  FaClock,
  FaCalendarDay,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTelegram,
  FaVideo,
  FaMicrophone,
  FaCertificate,
  FaStar,
  FaGem
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Consultation.css';

const Consultation = ({ onNotification }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    floors: '',
    budget: '',
    timeline: '',
    description: '',
    consultationType: 'call'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [activeStep, setActiveStep] = useState(1);
  const formRef = useRef(null);
  
  const { ref: sectionRef, inView: sectionInView } = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });

  const consultationTypes = [
    { id: 'call', label: 'تماس تلفنی', icon: <FaPhone />, color: '#3B82F6', duration: '۱۵ دقیقه' },
    { id: 'video', label: 'ویدیو مشاوره', icon: <FaVideo />, color: '#10B981', duration: '۳۰ دقیقه' },
    { id: 'onsite', label: 'مشاوره حضوری', icon: <FaMapMarkerAlt />, color: '#F59E0B', duration: '۲ ساعت' },
    { id: 'comprehensive', label: 'مشاوره جامع', icon: <FaClipboardCheck />, color: '#8B5CF6', duration: '۴ ساعت' }
  ];

  const benefits = [
    {
      id: 1,
      icon: <FaCheckCircle />,
      title: 'تحلیل رایگان تخصصی',
      description: 'بررسی کامل نیازهای پروژه توسط ۳ کارشناس ارشد بدون هیچ هزینه‌ای',
      stats: '۵۰۰+ پروژه تحلیل شده'
    },
    {
      id: 2,
      icon: <FaCalendarCheck />,
      title: 'برنامه‌ریزی هوشمند',
      description: 'زمان‌بندی مرحله‌ای دقیق با استفاده از هوش مصنوعی و تجربه ۲۵ ساله',
      stats: '۹۸٪ دقت زمان‌بندی'
    },
    {
      id: 3,
      icon: <FaFileInvoiceDollar />,
      title: 'برآورد هزینه شفاف',
      description: 'برآورد دقیق تمام هزینه‌ها با جزئیات کامل و بدون هزینه پنهان',
      stats: '۰٪ هزینه پنهان'
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: 'پشتیبانی VIP',
      description: 'همراهی تیم متخصص در تمام مراحل با پشتیبانی ۲۴/۷',
      stats: '۲۴/۷ پشتیبانی'
    },
    {
      id: 5,
      icon: <FaRocket />,
      title: 'راهکارهای نوآورانه',
      description: 'ارائه جدیدترین راهکارهای تکنولوژی روز دنیا متناسب با پروژه شما',
      stats: '۴۰+ تکنولوژی جدید'
    },
    {
      id: 6,
      icon: <FaChartLine />,
      title: 'تحلیل بازگشت سرمایه',
      description: 'محاسبه دقیق ROI و مزایای اقتصادی پروژه در کوتاه‌مدت و بلندمدت',
      stats: '۱۵۰٪+ ROI متوسط'
    }
  ];

  const experts = [
    {
      id: 1,
      name: 'دکتر علیرضا کریمی',
      role: 'مدیر ارشد فنی',
      experience: '۱۸ سال',
      specialty: 'سیستم‌های هوشمند',
      image: 'expert1.jpg',
      color: '#3B82F6'
    },
    {
      id: 2,
      name: 'مهندس سارا احمدی',
      role: 'کارشناس ارشد طراحی',
      experience: '۱۲ سال',
      specialty: 'طراحی مینیمال',
      image: 'expert2.jpg',
      color: '#8B5CF6'
    },
    {
      id: 3,
      name: 'مهندس محمدرضا حسینی',
      role: 'مشاور پروژه',
      experience: '۱۵ سال',
      specialty: 'مدیریت پروژه',
      image: 'expert3.jpg',
      color: '#10B981'
    }
  ];

  const projectTypes = [
    { value: '', label: 'انتخاب نوع پروژه', icon: <FaBuilding /> },
    { value: 'residential', label: 'مسکونی', icon: <FaBuilding />, color: '#3B82F6' },
    { value: 'commercial', label: 'اداری و تجاری', icon: <FaBuilding />, color: '#8B5CF6' },
    { value: 'hospital', label: 'بیمارستانی', icon: <FaBuilding />, color: '#EF4444' },
    { value: 'hotel', label: 'هتل و اقامتگاه', icon: <FaBuilding />, color: '#F59E0B' },
    { value: 'shopping', label: 'مرکز خرید', icon: <FaBuilding />, color: '#10B981' },
    { value: 'industrial', label: 'صنعتی', icon: <FaBuilding />, color: '#6366F1' },
    { value: 'mixed', label: 'ترکیبی', icon: <FaBuilding />, color: '#EC4899' }
  ];

  const floorsOptions = [
    { value: '', label: 'تعداد طبقات', icon: <FaBuilding /> },
    { value: '1-5', label: '۱ تا ۵ طبقه', icon: <FaBuilding /> },
    { value: '6-10', label: '۶ تا ۱۰ طبقه', icon: <FaBuilding /> },
    { value: '11-20', label: '۱۱ تا ۲۰ طبقه', icon: <FaBuilding /> },
    { value: '21-30', label: '۲۱ تا ۳۰ طبقه', icon: <FaBuilding /> },
    { value: '30+', label: 'بیش از ۳۰ طبقه', icon: <FaBuilding /> }
  ];

  const budgetOptions = [
    { value: '', label: 'بودجه تقریبی', icon: <FaFileInvoiceDollar /> },
    { value: 'under-500', label: 'زیر ۵۰۰ میلیون', icon: <FaFileInvoiceDollar /> },
    { value: '500-1000', label: '۵۰۰ تا ۱ میلیارد', icon: <FaFileInvoiceDollar /> },
    { value: '1000-3000', label: '۱ تا ۳ میلیارد', icon: <FaFileInvoiceDollar /> },
    { value: '3000+', label: 'بیش از ۳ میلیارد', icon: <FaFileInvoiceDollar /> },
    { value: 'not-sure', label: 'مشخص نیست', icon: <FaFileInvoiceDollar /> }
  ];

  const timelineOptions = [
    { value: '', label: 'زمان‌بندی پروژه', icon: <FaCalendarDay /> },
    { value: 'urgent', label: 'فوری (کمتر از ۱ ماه)', icon: <FaClock /> },
    { value: 'short', label: 'کوتاه‌مدت (۱-۳ ماه)', icon: <FaCalendarDay /> },
    { value: 'medium', label: 'متوسط (۳-۶ ماه)', icon: <FaCalendarDay /> },
    { value: 'long', label: 'بلندمدت (۶ ماه+)', icon: <FaCalendarDay /> }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConsultationTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      consultationType: type
    }));
  };

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    const requiredFields = ['name', 'phone', 'projectType', 'floors'];
    const isValid = requiredFields.every(field => formData[field].trim());
    
    if (!isValid) {
      onNotification('لطفاً تمام فیلدهای الزامی را پر کنید');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      setSuccessMessage('درخواست مشاوره شما با موفقیت ثبت شد. کارشناسان ما حداکثر تا ۲۴ ساعت آینده با شما تماس خواهند گرفت.');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: '',
        floors: '',
        budget: '',
        timeline: '',
        description: '',
        consultationType: 'call'
      });
      
      setActiveStep(1);
      
      onNotification('🎉 درخواست مشاوره با موفقیت ثبت شد!');
      
      // Success animation
      const form = formRef.current;
      if (form) {
        form.classList.add('success');
        setTimeout(() => form.classList.remove('success'), 3000);
      }
      
    } catch (error) {
      onNotification('خطایی در ارسال فرم رخ داد. لطفاً مجدداً تلاش کنید.');
    } finally {
      setIsSubmitting(false);
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

  const steps = [
    { number: 1, title: 'اطلاعات اولیه', icon: <FaUser /> },
    { number: 2, title: 'جزئیات پروژه', icon: <FaProjectDiagram /> },
    { number: 3, title: 'نهایی‌سازی', icon: <FaCheckCircle /> }
  ];

  return (
    <section className="consultation-modern" id="consultation" ref={sectionRef}>
      {/* Animated Background */}
      <div className="consultation-bg">
        <div className="bg-wave wave-1" />
        <div className="bg-wave wave-2" />
        <div className="bg-wave wave-3" />
        <div className="floating-shapes">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-shape"
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 80 + 10}%`,
                background: [
                  'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                  'linear-gradient(135deg, #10B981, #3B82F6)',
                  'linear-gradient(135deg, #F59E0B, #EF4444)',
                  'linear-gradient(135deg, #8B5CF6, #EC4899)'
                ][i % 4]
              }}
            />
          ))}
        </div>
      </div>

      <div className="consultation-container">
        {/* Header Section */}
        <motion.div 
          className="consultation-header"
          variants={fadeInUp}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
        >
          <div className="header-badge">
            <FaHeadset className="badge-icon" />
            <span className="badge-text">مشاوره تخصصی رایگان</span>
          </div>
          
          <h2 className="consultation-title">
            <span className="title-main">مشاوره هوشمند</span>
            <span className="title-sub">راهکاری دقیق برای هر پروژه</span>
          </h2>
          
          <p className="consultation-intro">
            با <span className="highlight">۲۵ سال تجربه</span> و تیمی از <span className="highlight">متخصصان مجرب</span>، 
            بهترین راهکارهای صنعت آسانسور را با توجه به نیازهای خاص پروژه شما ارائه می‌دهیم.
          </p>
        </motion.div>

        <div className="consultation-grid">
          {/* Left Column - Benefits & Experts */}
          <motion.div 
            className="consultation-sidebar"
            variants={containerVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            {/* Benefits Grid */}
            <div className="benefits-section">
              <div className="section-header">
                <FaGem className="section-icon" />
                <h3>مزایای مشاوره ما</h3>
                <p>چرا ارتفاع‌افزار را انتخاب می‌کنند؟</p>
              </div>
              
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit.id}
                    className="benefit-card"
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div 
                      className="benefit-icon"
                      style={{ 
                        background: `linear-gradient(135deg, ${benefit.color || '#3B82F6'}20, ${benefit.color || '#3B82F6'}40)`,
                        border: `2px solid ${benefit.color || '#3B82F6'}40`
                      }}
                    >
                      {benefit.icon}
                    </div>
                    
                    <div className="benefit-content">
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                      <div className="benefit-stats">
                        <FaStar />
                        <span>{benefit.stats}</span>
                      </div>
                    </div>
                    
                    <div className="benefit-glow" style={{ background: benefit.color || '#3B82F6' }} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experts Section */}
            <motion.div 
              className="experts-section"
              variants={fadeInUp}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <div className="section-header">
                <FaUsers className="section-icon" />
                <h3>تیم متخصصان ما</h3>
                <p>مشاوره با بهترین‌های صنعت</p>
              </div>
              
              <div className="experts-grid">
                {experts.map((expert) => (
                  <motion.div 
                    key={expert.id}
                    className="expert-card"
                    whileHover={{ y: -5 }}
                  >
                    <div 
                      className="expert-avatar"
                      style={{ background: expert.color + '20', borderColor: expert.color }}
                    >
                      <div className="avatar-icon">
                        <FaGraduationCap />
                      </div>
                    </div>
                    
                    <div className="expert-info">
                      <h4>{expert.name}</h4>
                      <div className="expert-role">{expert.role}</div>
                      
                      <div className="expert-details">
                        <div className="detail">
                          <FaAward />
                          <span>{expert.experience} تجربه</span>
                        </div>
                        <div className="detail">
                          <FaLightbulb />
                          <span>{expert.specialty}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div 
              className="stats-bar"
              variants={fadeInUp}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <div className="stat">
                <div className="stat-value">۵,۲۰۰+</div>
                <div className="stat-label">مشاوره موفق</div>
              </div>
              <div className="stat">
                <div className="stat-value">۹۸.۷٪</div>
                <div className="stat-label">رضایت مشتری</div>
              </div>
              <div className="stat">
                <div className="stat-value">۱۵ دقیقه</div>
                <div className="stat-label">پاسخگویی</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            className="consultation-form-container"
            variants={containerVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            <div className="form-card">
              {/* Form Steps */}
              <div className="form-steps">
                {steps.map((step) => (
                  <div 
                    key={step.number}
                    className={`step ${step.number === activeStep ? 'active' : ''} ${step.number < activeStep ? 'completed' : ''}`}
                  >
                    <div className="step-number">
                      {step.number < activeStep ? <FaCheckCircle /> : step.number}
                    </div>
                    <div className="step-info">
                      <div className="step-title">{step.title}</div>
                      <div className="step-line" />
                    </div>
                  </div>
                ))}
              </div>

              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="consultation-form"
                id="consultationForm"
              >
                {/* Consultation Type Selection */}
                <div className="consultation-type-section">
                  <label className="section-label">
                    <FaHeadset />
                    <span>نوع مشاوره مورد نظر</span>
                  </label>
                  
                  <div className="consultation-types-grid">
                    {consultationTypes.map((type) => (
                      <motion.button
                        key={type.id}
                        type="button"
                        className={`consultation-type-btn ${formData.consultationType === type.id ? 'active' : ''}`}
                        onClick={() => handleConsultationTypeChange(type.id)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        style={{ '--type-color': type.color }}
                      >
                        <div className="type-icon">{type.icon}</div>
                        <div className="type-info">
                          <div className="type-label">{type.label}</div>
                          <div className="type-duration">{type.duration}</div>
                        </div>
                        {formData.consultationType === type.id && (
                          <motion.div 
                            className="type-check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                          >
                            <FaCheckCircle />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {activeStep === 1 && (
                    <motion.div 
                      key="step1"
                      className="form-step-content"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="form-group">
                        <label className="form-label">
                          <FaUser />
                          <span>نام و نام خانوادگی</span>
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="نام کامل خود را وارد کنید"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">
                          <FaPhone />
                          <span>شماره تماس</span>
                          <span className="required">*</span>
                        </label>
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">
                          <FaEnvelope />
                          <span>آدرس ایمیل</span>
                        </label>
                        <input
                          type="email"
                          className="form-input"
                          placeholder="example@email.com"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div 
                      key="step2"
                      className="form-step-content"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="form-group">
                        <label className="form-label">
                          <FaBuilding />
                          <span>نوع پروژه</span>
                          <span className="required">*</span>
                        </label>
                        <select
                          className="form-select"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                        >
                          {projectTypes.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">
                          <FaBuilding />
                          <span>تعداد طبقات</span>
                          <span className="required">*</span>
                        </label>
                        <select
                          className="form-select"
                          name="floors"
                          value={formData.floors}
                          onChange={handleChange}
                          required
                        >
                          {floorsOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">
                          <FaFileInvoiceDollar />
                          <span>بودجه تقریبی</span>
                        </label>
                        <select
                          className="form-select"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                        >
                          {budgetOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 3 && (
                    <motion.div 
                      key="step3"
                      className="form-step-content"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="form-group">
                        <label className="form-label">
                          <FaCalendarDay />
                          <span>زمان‌بندی پروژه</span>
                        </label>
                        <select
                          className="form-select"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                        >
                          {timelineOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">
                          <FaEdit />
                          <span>توضیحات پروژه</span>
                        </label>
                        <textarea
                          className="form-textarea"
                          placeholder="توضیحات مربوط به پروژه، نیازهای خاص، ملاحظات و هر نکته‌ای که باید بدانیم..."
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows="6"
                        />
                      </div>
                      
                      <div className="form-agreement">
                        <label className="agreement-label">
                          <input type="checkbox" required />
                          <span>با <a href="#privacy">قوانین و مقررات</a> و <a href="#terms">شرایط مشاوره</a> موافقم</span>
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Actions */}
                <div className="form-actions">
                  {activeStep > 1 && (
                    <motion.button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handlePrevStep}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>مرحله قبل</span>
                    </motion.button>
                  )}
                  
                  {activeStep < 3 ? (
                    <motion.button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleNextStep}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>مرحله بعد</span>
                      <FaPaperPlane />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      className="btn btn-submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner" />
                          <span>در حال ارسال...</span>
                        </>
                      ) : (
                        <>
                          <span>ارسال درخواست مشاوره</span>
                          <FaPaperPlane />
                        </>
                      )}
                    </motion.button>
                  )}
                </div>

                {/* Success Message */}
                <AnimatePresence>
                  {successMessage && (
                    <motion.div 
                      className="success-message"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <FaCheckCircle className="success-icon" />
                      <div className="success-content">
                        <h4>درخواست شما ثبت شد! 🎉</h4>
                        <p>{successMessage}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              {/* Contact Options */}
              <div className="contact-options">
                <div className="option">
                  <div className="option-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="option-info">
                    <h4>تماس مستقیم</h4>
                    <a href="tel:02188888888" className="option-link">
                      ۰۲۱-۸۸۸۸۸۸۸۸
                    </a>
                  </div>
                </div>
                
                <div className="option">
                  <div className="option-icon">
                    <FaWhatsapp />
                  </div>
                  <div className="option-info">
                    <h4>واتساپ</h4>
                    <a href="https://wa.me/989123456789" className="option-link">
                      ارسال پیام
                    </a>
                  </div>
                </div>
                
                <div className="option">
                  <div className="option-icon">
                    <FaTelegram />
                  </div>
                  <div className="option-info">
                    <h4>تلگرام</h4>
                    <a href="https://t.me/ertefaafzar" className="option-link">
                      @ertefaafzar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;