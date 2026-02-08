import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
import Consultation from './components/Consultation.jsx';
import Footer from './components/Footer.jsx';
import SupportWidget from './components/SupportWidget.jsx';
import ColorPalette from './components/ColorPalette.jsx';
import WalletSidebar from './components/WalletSidebar.jsx';
import LoginPanel from './components/Loginpanel.jsx';
import Notification from './components/Notification.jsx';
import './styles/App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentLoginTab, setCurrentLoginTab] = useState('login');
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [selectedPalette, setSelectedPalette] = useState(1);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showNotification(`${product.name} به سبد خرید اضافه شد`);
  };

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => setNotification({ show: false, message: '' }), 3000);
  };

  const updatePalette = (paletteNumber) => {
    setSelectedPalette(paletteNumber);
    const root = document.documentElement;
    
    switch(paletteNumber) {
      case 1:
        root.style.setProperty('--current-primary', 'var(--palette-1-primary)');
        root.style.setProperty('--current-secondary', 'var(--palette-1-secondary)');
        root.style.setProperty('--current-accent', 'var(--palette-1-accent)');
        break;
      case 2:
        root.style.setProperty('--current-primary', 'var(--palette-2-primary)');
        root.style.setProperty('--current-secondary', 'var(--palette-2-secondary)');
        root.style.setProperty('--current-accent', 'var(--palette-2-accent)');
        break;
      case 3:
        root.style.setProperty('--current-primary', 'var(--palette-3-primary)');
        root.style.setProperty('--current-secondary', 'var(--palette-3-secondary)');
        root.style.setProperty('--current-accent', 'var(--palette-3-accent)');
        break;
    }
  };

  useEffect(() => {
    updatePalette(selectedPalette);
  }, [selectedPalette]);

  return (
    <div className="app">
      <ColorPalette 
        selectedPalette={selectedPalette}
        onPaletteChange={updatePalette}
      />
      
      <Header 
        cartItems={cartItems}
        onWalletClick={() => setIsWalletOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
        onNotification={showNotification}
      />
      
      <Hero onNotification={showNotification} />
      <About />
      <Products onAddToCart={addToCart} />
      <Consultation onNotification={showNotification} />
      <Footer onNotification={showNotification} />
      
      <SupportWidget onNotification={showNotification} />
      
      <WalletSidebar
        isOpen={isWalletOpen}
        onClose={() => setIsWalletOpen(false)}
        onNotification={showNotification}
      />
      
      <LoginPanel
        isOpen={isLoginOpen}
        currentTab={currentLoginTab}
        onClose={() => setIsLoginOpen(false)}
        onTabChange={setCurrentLoginTab}
        onNotification={showNotification}
      />
      
      <Notification
        show={notification.show}
        message={notification.message}
      />
    </div>
  );
}

export default App;