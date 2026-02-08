import React, { useState, useRef, useEffect } from 'react';
import { 
  FaPalette, 
  FaEyedropper, 
  FaCopy, 
  FaCheck, 
  FaRandom, 
  FaGradient, 
  FaContrast,
  FaPaintBrush,
  FaSave,
  FaUpload,
  FaTrash,
  FaHeart,
  FaRegHeart,
  FaShareAlt,
  FaDownload,
  FaLayerGroup,
  FaAdjust,
  FaMagic,
  FaRedo,
  FaUndo,
  FaFilter,
  FaSwatchbook,
  FaSlidersH,
  FaRuler,
  FaSync,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUnlock,
  FaCode,
  FaImage,
  FaCog,
  FaExpand,
  FaCompress,
  FaHistory,
  FaBookmark,
  FaBookOpen,
  FaLightbulb,
  FaRobot,
  FaStar,
  FaFire,
  FaSnowflake,
  FaLeaf,
  FaTint,
  FaSun,
  FaMoon,
  FaCloud,
  FaWater,
  FaMountain,
  FaSeedling,
  FaGem,
  FaCrown,
  FaTheaterMasks,
  FaMusic,
  FaGamepad,
  FaCamera,
  FaVideo,
  FaMobileAlt,
  FaDesktop,
  FaLaptop,
  FaTabletAlt
} from 'react-icons/fa';
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiChevronUp, 
  FiChevronDown,
  FiGrid,
  FiList,
  FiLayout,
  FiBox,
  FiCircle,
  FiSquare,
  FiTriangle
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import chroma from 'chroma-js';
import '../styles/ColorPalette.css';

const ColorPalette = () => {
  // State مدیریت
  const [palettes, setPalettes] = useState([]);
  const [activePalette, setActivePalette] = useState(null);
  const [colors, setColors] = useState([
    { id: 1, hex: '#3B82F6', name: 'آبی اصلی', locked: false },
    { id: 2, hex: '#8B5CF6', name: 'بنفش', locked: false },
    { id: 3, hex: '#10B981', name: 'سبز', locked: false },
    { id: 4, hex: '#F59E0B', name: 'طلایی', locked: false },
    { id: 5, hex: '#EF4444', name: 'قرمز', locked: false }
  ]);
  const [gradients, setGradients] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [colorFormat, setColorFormat] = useState('hex');
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [autoContrast, setAutoContrast] = useState(true);
  const [colorBlindMode, setColorBlindMode] = useState(false);
  const [aiMode, setAiMode] = useState(false);
  
  // Refs
  const colorPickerRef = useRef(null);
  const containerRef = useRef(null);
  
  // Themes
  const themes = [
    { name: 'مینیمال', colors: ['#FFFFFF', '#F3F4F6', '#E5E7EB', '#6B7280'] },
    { name: 'تاریک', colors: ['#0F172A', '#1E293B', '#334155', '#64748B'] },
    { name: 'طبیعت', colors: ['#065F46', '#059669', '#10B981', '#34D399'] },
    { name: 'دریا', colors: ['#0EA5E9', '#38BDF8', '#7DD3FC', '#BAE6FD'] },
    { name: 'خورشید', colors: ['#F59E0B', '#FBBF24', '#FCD34D', '#FDE68A'] },
    { name: 'شب', colors: ['#4C1D95', '#7C3AED', '#A78BFA', '#C4B5FD'] }
  ];

  // الگوهای رنگی
  const colorPatterns = [
    { 
      name: 'مونوکروماتیک',
      description: 'تن‌های مختلف یک رنگ',
      generate: (base) => chroma.scale([base, chroma(base).brighten(2)]).colors(5)
    },
    { 
      name: 'مکمل',
      description: 'رنگ‌های متضاد',
      generate: (base) => [base, chroma(base).set('hsl.h', '+180').hex()]
    },
    { 
      name: 'سه‌تایی',
      description: 'سه رنگ با فاصله مساوی',
      generate: (base) => [
        base,
        chroma(base).set('hsl.h', '+120').hex(),
        chroma(base).set('hsl.h', '+240').hex()
      ]
    },
    { 
      name: 'آنیالوگ',
      description: 'رنگ‌های مجاور',
      generate: (base) => [
        chroma(base).set('hsl.h', '-30').hex(),
        base,
        chroma(base).set('hsl.h', '+30').hex()
      ]
    }
  ];

  // هوش مصنوعی - الگوهای رنگ هوشمند
  const aiColorSuggestions = [
    {
      name: 'طراحی وب مدرن',
      colors: ['#3B82F6', '#1E40AF', '#10B981', '#F59E0B', '#6366F1'],
      tags: ['مدرن', 'وب', 'پرو']
    },
    {
      name: 'اپ موبایل',
      colors: ['#8B5CF6', '#EC4899', '#FCD34D', '#6EE7B7', '#60A5FA'],
      tags: ['موبایل', 'شاد', 'جوان']
    },
    {
      name: 'لوگو شرکتی',
      colors: ['#0F172A', '#475569', '#F8FAFC', '#3B82F6', '#10B981'],
      tags: ['حرفه‌ای', 'شرکتی', 'مدرن']
    },
    {
      name: 'طراحی گرافیک',
      colors: ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6'],
      tags: ['گرافیک', 'خلاق', 'جذاب']
    }
  ];

  // تاریخچه تغییرات
  useEffect(() => {
    if (colors.length > 0) {
      setHistory(prev => [...prev.slice(-9), colors]);
    }
  }, [colors]);

  // تولید رنگ تصادفی
  const generateRandomColor = () => {
    return chroma.random().hex();
  };

  // تولید پالت جدید
  const generateNewPalette = () => {
    const newColors = colors.map(color => 
      color.locked ? color : { 
        ...color, 
        hex: generateRandomColor(),
        name: `رنگ ${color.id}`
      }
    );
    setColors(newColors);
    saveToHistory(newColors);
  };

  // تولید گرادیان
  const generateGradient = () => {
    const baseColor = selectedColor || colors[0].hex;
    const gradient = chroma.scale([baseColor, generateRandomColor()])
      .mode('lch')
      .colors(5);
    
    const newGradient = {
      id: Date.now(),
      colors: gradient,
      name: `گرادیان ${gradients.length + 1}`,
      direction: '90deg'
    };
    
    setGradients([...gradients, newGradient]);
    toast.success('گرادیان جدید ایجاد شد!');
  };

  // تغییر رنگ خاص
  const updateColor = (id, newHex) => {
    const newColors = colors.map(color => 
      color.id === id ? { ...color, hex: newHex } : color
    );
    setColors(newColors);
    saveToHistory(newColors);
  };

  // قفل/باز کردن رنگ
  const toggleLock = (id) => {
    const newColors = colors.map(color => 
      color.id === id ? { ...color, locked: !color.locked } : color
    );
    setColors(newColors);
  };

  // کپی رنگ به کلیپ‌بورد
  const copyToClipboard = (color, format = 'hex') => {
    let text = '';
    
    switch(format) {
      case 'hex':
        text = color.hex;
        break;
        
      case 'rgb': {
        const rgb = chroma(color.hex).rgb();
        text = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        break;
      }
        
      case 'hsl': {
        const hsl = chroma(color.hex).hsl();
        text = `hsl(${Math.round(hsl[0])}, ${Math.round(hsl[1]*100)}%, ${Math.round(hsl[2]*100)}%)`;
        break;
      }
        
      case 'cmyk': {
        const cmykObj = chroma(color.hex).cmyk();
        text = `cmyk(${Math.round(cmykObj[0]*100)}%, ${Math.round(cmykObj[1]*100)}%, ${Math.round(cmykObj[2]*100)}%, ${Math.round(cmykObj[3]*100)}%)`;
        break;
      }
        
      default:
        text = color.hex;
    }
    
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success(`رنگ ${color.name} کپی شد!`);
      })
      .catch(err => {
        toast.error('خطا در کپی کردن رنگ');
      });
  };

  // ذخیره تاریخچه
  const saveToHistory = (newColors) => {
    setHistory(prev => [...prev, newColors]);
    setFuture([]);
  };

  // Undo
  const undo = () => {
    if (history.length > 1) {
      const lastState = history[history.length - 2];
      setFuture([colors, ...future]);
      setHistory(history.slice(0, -1));
      setColors(lastState);
    }
  };

  // Redo
  const redo = () => {
    if (future.length > 0) {
      const nextState = future[0];
      setHistory([...history, colors]);
      setFuture(future.slice(1));
      setColors(nextState);
    }
  };

  // تحلیل کنتراست
  const getContrastRatio = (color1, color2) => {
    return chroma.contrast(color1, color2).toFixed(2);
  };

  // تولید کد CSS
  const generateCSS = () => {
    return `:root {
  ${colors.map((color, index) => `--color-${index + 1}: ${color.hex};`).join('\n  ')}
}

/* گرادیان‌ها */
${gradients.map((grad, index) => 
`.gradient-${index + 1} {
  background: linear-gradient(${grad.direction}, ${grad.colors.join(', ')});
}`
).join('\n\n')}`;
  };

  // ذخیره پالت
  const savePalette = () => {
    const paletteName = prompt('نام پالت را وارد کنید:', `پالت ${palettes.length + 1}`);
    if (paletteName) {
      const newPalette = {
        id: Date.now(),
        name: paletteName,
        colors: [...colors],
        gradients: [...gradients],
        createdAt: new Date().toISOString()
      };
      
      setPalettes([...palettes, newPalette]);
      toast.success('پالت ذخیره شد!');
    }
  };

  // بارگذاری پالت
  const loadPalette = (palette) => {
    setColors(palette.colors);
    setGradients(palette.gradients);
    setActivePalette(palette.id);
    toast.success(`پالت "${palette.name}" بارگذاری شد`);
  };

  // حذف پالت
  const deletePalette = (id) => {
    setPalettes(palettes.filter(p => p.id !== id));
    if (activePalette === id) {
      setActivePalette(null);
    }
    toast.success('پالت حذف شد');
  };

  // Drag & Drop برای تغییر ترتیب
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
    const newColors = [...colors];
    const [draggedItem] = newColors.splice(dragIndex, 1);
    newColors.splice(dropIndex, 0, draggedItem);
    setColors(newColors);
    setIsDragging(false);
  };

  // پیشنهاد رنگ هوشمند با AI
  const suggestSmartColors = () => {
    const suggestion = aiColorSuggestions[Math.floor(Math.random() * aiColorSuggestions.length)];
    setColors(suggestion.colors.map((hex, index) => ({
      id: index + 1,
      hex,
      name: suggestion.tags?.[index] || `رنگ ${index + 1}`,
      locked: false
    })));
    toast.success(`پالت "${suggestion.name}" اعمال شد`);
  };

  // Variants انیمیشن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="color-palette-app">
      {/* هدر */}
      <motion.header 
        className="palette-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-content">
          <div className="header-left">
            <FaPalette className="header-icon" />
            <h1 className="header-title">استودیو رنگ ارتفاع‌افزار</h1>
            <span className="header-subtitle">طراحی حرفه‌ای پالت رنگ</span>
          </div>
          
          <div className="header-actions">
            <motion.button 
              className="btn-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={savePalette}
            >
              <FaSave />
              <span>ذخیره</span>
            </motion.button>
            
            <motion.button 
              className="btn-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={generateNewPalette}
            >
              <FaRandom />
              <span>تصادفی</span>
            </motion.button>
            
            <motion.button 
              className="btn-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              <FaCog />
              <span>پیشرفته</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* محتوای اصلی */}
      <div className="palette-main">
        {/* سایدبار */}
        <motion.aside 
          className="palette-sidebar"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="sidebar-section">
            <h3 className="sidebar-title">
              <FaSwatchbook />
              <span>تم‌ها</span>
            </h3>
            
            <div className="theme-grid">
              {themes.map((theme, index) => (
                <motion.div 
                  key={index}
                  className="theme-card"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setColors(theme.colors.map((hex, i) => ({
                      id: i + 1,
                      hex,
                      name: `رنگ ${i + 1}`,
                      locked: false
                    })));
                  }}
                >
                  <div className="theme-colors">
                    {theme.colors.map((color, i) => (
                      <div 
                        key={i}
                        className="theme-color"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="theme-name">{theme.name}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">
              <FaRobot />
              <span>هوش مصنوعی</span>
            </h3>
            
            <div className="ai-suggestions">
              {aiColorSuggestions.map((suggestion, index) => (
                <motion.div 
                  key={index}
                  className="ai-card"
                  whileHover={{ x: 5, scale: 1.02 }}
                  onClick={() => {
                    setColors(suggestion.colors.map((hex, i) => ({
                      id: i + 1,
                      hex,
                      name: suggestion.tags?.[i] || `رنگ ${i + 1}`,
                      locked: false
                    })));
                  }}
                >
                  <div className="ai-colors">
                    {suggestion.colors.map((color, i) => (
                      <div 
                        key={i}
                        className="ai-color"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="ai-info">
                    <div className="ai-name">{suggestion.name}</div>
                    <div className="ai-tags">
                      {suggestion.tags.map((tag, i) => (
                        <span key={i} className="ai-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <motion.button 
                className="btn-ai"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={suggestSmartColors}
              >
                <FaMagic />
                <span>پیشنهاد هوشمند</span>
              </motion.button>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">
              <FaHistory />
              <span>تاریخچه</span>
            </h3>
            
            <div className="history-actions">
              <motion.button 
                className="btn-history"
                disabled={history.length <= 1}
                whileHover={{ x: -3 }}
                onClick={undo}
              >
                <FaUndo />
                <span>بازگشت</span>
              </motion.button>
              
              <motion.button 
                className="btn-history"
                disabled={future.length === 0}
                whileHover={{ x: 3 }}
                onClick={redo}
              >
                <FaRedo />
                <span>تکرار</span>
              </motion.button>
            </div>
          </div>
        </motion.aside>

        {/* محتوای مرکزی */}
        <motion.main 
          className="palette-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          ref={containerRef}
        >
          {/* کنترل‌ها */}
          <motion.div className="control-bar" variants={itemVariants}>
            <div className="view-controls">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <FiGrid />
                <span>گرید</span>
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <FiList />
                <span>لیست</span>
              </button>
              <button 
                className={`view-btn ${viewMode === 'gradient' ? 'active' : ''}`}
                onClick={() => setViewMode('gradient')}
              >
                <FaGradient />
                <span>گرادیان</span>
              </button>
            </div>

            <div className="format-controls">
              <span>فرمت:</span>
              {['hex', 'rgb', 'hsl', 'cmyk'].map(format => (
                <button
                  key={format}
                  className={`format-btn ${colorFormat === format ? 'active' : ''}`}
                  onClick={() => setColorFormat(format)}
                >
                  {format.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="action-controls">
              <motion.button 
                className="btn-action"
                whileHover={{ scale: 1.05 }}
                onClick={generateGradient}
              >
                <FaGradient />
                <span>ساخت گرادیان</span>
              </motion.button>
              
              <motion.button 
                className="btn-action"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  const css = generateCSS();
                  navigator.clipboard.writeText(css);
                  toast.success('کد CSS کپی شد!');
                }}
              >
                <FaCode />
                <span>کد CSS</span>
              </motion.button>
            </div>
          </motion.div>

          {/* پالت رنگ‌ها */}
          <motion.div className="colors-grid" variants={itemVariants}>
            {colors.map((color, index) => (
              <motion.div 
                key={color.id}
                className={`color-card ${selectedColor === color.hex ? 'selected' : ''}`}
                variants={itemVariants}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* رنگ اصلی */}
                <div 
                  className="color-display"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.hex === selectedColor ? null : color.hex)}
                >
                  <div className="color-overlay">
                    <motion.button 
                      className="lock-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLock(color.id);
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {color.locked ? <FaLock /> : <FaUnlock />}
                    </motion.button>
                    
                    <motion.button 
                      className="copy-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(color, colorFormat);
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaCopy />
                    </motion.button>
                  </div>
                </div>

                {/* اطلاعات رنگ */}
                <div className="color-info">
                  <div className="color-name">{color.name}</div>
                  <div className="color-value">
                    {colorFormat === 'hex' && color.hex}
                    {colorFormat === 'rgb' && chroma(color.hex).css()}
                    {colorFormat === 'hsl' && chroma(color.hex).css('hsl')}
                    {colorFormat === 'cmyk' && {
                      c: Math.round(chroma(color.hex).get('cmyk.c') * 100),
                      m: Math.round(chroma(color.hex).get('cmyk.m') * 100),
                      y: Math.round(chroma(color.hex).get('cmyk.y') * 100),
                      k: Math.round(chroma(color.hex).get('cmyk.k') * 100)
                    }}
                  </div>
                  
                  {/* تن‌های مختلف */}
                  <div className="color-shades">
                    {[0.2, 0.4, 0.6, 0.8, 1].map(shade => {
                      const shadeColor = chroma(color.hex).brighten(shade - 1).hex();
                      return (
                        <div 
                          key={shade}
                          className="color-shade"
                          style={{ backgroundColor: shadeColor }}
                          onClick={() => updateColor(color.id, shadeColor)}
                        />
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* گرادیان‌ها */}
          {viewMode === 'gradient' && gradients.length > 0 && (
            <motion.div 
              className="gradients-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="section-title">
                <FaGradient />
                <span>گرادیان‌های شما</span>
              </h3>
              
              <div className="gradients-grid">
                {gradients.map(gradient => (
                  <div key={gradient.id} className="gradient-card">
                    <div 
                      className="gradient-display"
                      style={{
                        background: `linear-gradient(${gradient.direction}, ${gradient.colors.join(', ')})`
                      }}
                    />
                    <div className="gradient-info">
                      <div className="gradient-name">{gradient.name}</div>
                      <div className="gradient-actions">
                        <button 
                          className="btn-small"
                          onClick={() => {
                            const gradientText = `linear-gradient(${gradient.direction}, ${gradient.colors.join(', ')})`;
                            navigator.clipboard.writeText(gradientText);
                            toast.success('گرادیان کپی شد!');
                          }}
                        >
                          <FaCopy />
                        </button>
                        <button 
                          className="btn-small"
                          onClick={() => setGradients(gradients.filter(g => g.id !== gradient.id))}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* پنل پیشرفته */}
          <AnimatePresence>
            {showAdvanced && (
              <motion.div 
                className="advanced-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <div className="panel-content">
                  <h3 className="panel-title">
                    <FaSlidersH />
                    <span>تنظیمات پیشرفته</span>
                  </h3>
                  
                  <div className="advanced-controls">
                    <div className="control-group">
                      <label>
                        <input 
                          type="checkbox"
                          checked={autoContrast}
                          onChange={(e) => setAutoContrast(e.target.checked)}
                        />
                        <span>کنتراست خودکار</span>
                      </label>
                    </div>
                    
                    <div className="control-group">
                      <label>
                        <input 
                          type="checkbox"
                          checked={colorBlindMode}
                          onChange={(e) => setColorBlindMode(e.target.checked)}
                        />
                        <span>حالت رنگ‌کور</span>
                      </label>
                    </div>
                    
                    <div className="control-group">
                      <label>
                        <input 
                          type="checkbox"
                          checked={aiMode}
                          onChange={(e) => setAiMode(e.target.checked)}
                        />
                        <span>حالت هوش مصنوعی</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="color-analysis">
                    <h4>آنالیز کنتراست</h4>
                    <div className="contrast-grid">
                      {colors.map((color1, i) => 
                        colors.map((color2, j) => i < j && (
                          <div key={`${i}-${j}`} className="contrast-item">
                            <div className="contrast-colors">
                              <div style={{ backgroundColor: color1.hex }} />
                              <div style={{ backgroundColor: color2.hex }} />
                            </div>
                            <div className="contrast-ratio">
                              {getContrastRatio(color1.hex, color2.hex)}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* پالت‌های ذخیره شده */}
          {palettes.length > 0 && (
            <motion.div 
              className="saved-palettes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="section-title">
                <FaBookmark />
                <span>پالت‌های ذخیره شده</span>
              </h3>
              
              <div className="palettes-grid">
                {palettes.map(palette => (
                  <motion.div 
                    key={palette.id}
                    className="saved-palette-card"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="palette-colors">
                      {palette.colors.map((color, i) => (
                        <div 
                          key={i}
                          className="palette-color"
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                    
                    <div className="palette-info">
                      <div className="palette-name">{palette.name}</div>
                      <div className="palette-date">
                        {new Date(palette.createdAt).toLocaleDateString('fa-IR')}
                      </div>
                      
                      <div className="palette-actions">
                        <button 
                          className="btn-small"
                          onClick={() => loadPalette(palette)}
                        >
                          <FaUpload />
                        </button>
                        <button 
                          className="btn-small danger"
                          onClick={() => deletePalette(palette.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.main>
      </div>

      {/* فوتر */}
      <motion.footer 
        className="palette-footer"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="footer-content">
          <div className="footer-info">
            <FaPalette />
            <span>استودیو رنگ ارتفاع‌افزار • نسخه ۲.۰</span>
          </div>
          
          <div className="footer-stats">
            <div className="stat">
              <span className="stat-value">{colors.length}</span>
              <span className="stat-label">رنگ</span>
            </div>
            <div className="stat">
              <span className="stat-value">{gradients.length}</span>
              <span className="stat-label">گرادیان</span>
            </div>
            <div className="stat">
              <span className="stat-value">{palettes.length}</span>
              <span className="stat-label">پالت</span>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default ColorPalette;