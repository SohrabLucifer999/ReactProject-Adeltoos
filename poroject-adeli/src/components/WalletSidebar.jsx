import React, { useState, useEffect } from 'react';
import { 
  FaWallet, 
  FaTimes, 
  FaPlug, 
  FaEthereum, 
  FaShieldAlt,
  FaCoins, 
  FaLink, 
  FaCheckCircle, 
  FaHistory,
  FaExchangeAlt,
  FaArrowRight,
  FaQrcode,
  FaCopy,
  FaEye,
  FaEyeSlash,
  FaChartLine,
  FaGift
} from 'react-icons/fa';
import { 
  SiMetamask, 
  SiTrustwallet, 
  SiCoinbase 
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import './WalletSidebar.css';

const WalletSidebar = ({ isOpen, onClose, onNotification }) => {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState('wallet');
  const [network, setNetwork] = useState('Ethereum Mainnet');

  const walletOptions = [
    {
      id: 'metamask',
      name: 'MetaMask',
      description: 'متداول‌ترین کیف پول اتریوم',
      icon: <SiMetamask />,
      color: '#F6851B',
      gradient: 'linear-gradient(135deg, #F6851B 0%, #E2761B 100%)'
    },
    {
      id: 'trustwallet',
      name: 'Trust Wallet',
      description: 'کیف پول موبایلی امن',
      icon: <SiTrustwallet />,
      color: '#3679F8',
      gradient: 'linear-gradient(135deg, #3679F8 0%, #2B6DE3 100%)'
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      description: 'کیف پول رسمی کوینبیس',
      icon: <SiCoinbase />,
      color: '#0052FF',
      gradient: 'linear-gradient(135deg, #0052FF 0%, #0042D6 100%)'
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      description: 'اتصال به هر کیف پولی',
      icon: <FaLink />,
      color: '#3B99FC',
      gradient: 'linear-gradient(135deg, #3B99FC 0%, #2B8CEB 100%)'
    }
  ];

  const networks = [
    { id: 'eth', name: 'Ethereum Mainnet', icon: <FaEthereum />, color: '#627EEA' },
    { id: 'bsc', name: 'Binance Smart Chain', icon: <FaCoins />, color: '#F0B90B' },
    { id: 'polygon', name: 'Polygon', icon: <FaChartLine />, color: '#8247E5' },
    { id: 'arbitrum', name: 'Arbitrum', icon: <FaExchangeAlt />, color: '#28A0F0' }
  ];

  const mockTransactions = [
    { 
      id: 1, 
      type: 'خرید آسانسور پرمیوم', 
      amount: '۲۴,۵۰۰,۰۰۰ تومان', 
      date: '۱۴۰۳/۰۱/۱۵', 
      time: '۱۴:۳۰',
      status: 'موفق',
      icon: <FaExchangeAlt />,
      txHash: '0x742d35cc...'
    },
    { 
      id: 2, 
      type: 'شارژ کیف پول', 
      amount: '۵,۰۰۰,۰۰۰ تومان', 
      date: '۱۴۰۳/۰۱/۱۰', 
      time: '۱۰:۱۵',
      status: 'موفق',
      icon: <FaCoins />,
      txHash: '0x8f3b1a2c...'
    },
    { 
      id: 3, 
      type: 'دریافت پاداش وفاداری', 
      amount: '۱,۲۰۰,۰۰۰ تومان', 
      date: '۱۴۰۳/۰۱/۰۸', 
      time: '۰۹:۴۵',
      status: 'موفق',
      icon: <FaGift />,
      txHash: '0x3a9d6f7e...'
    },
    { 
      id: 4, 
      type: 'استرداد وجه', 
      amount: '۳,۲۰۰,۰۰۰ تومان', 
      date: '۱۴۰۳/۰۱/۰۵', 
      time: '۱۶:۲۰',
      status: 'در انتظار',
      icon: <FaExchangeAlt />,
      txHash: '0x5c2d4f8a...'
    }
  ];

  const handleWalletSelect = (walletId) => {
    setSelectedWallet(walletId);
  };

  const handleConnect = async () => {
    if (!selectedWallet) {
      onNotification('لطفاً ابتدا یک کیف پول انتخاب کنید');
      return;
    }

    setIsConnecting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsConnecting(false);
    setIsConnected(true);
    setUserAddress('0x742d35Cc6634C0532925a3b844Bc9e3dF31F7e2D');
    onNotification('🎉 اتصال موفق! حساب کاربری شما ایجاد شد.');
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setSelectedWallet(null);
    setUserAddress('');
    onNotification('اتصال کیف پول قطع شد.');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userAddress);
    onNotification('آدرس کیف پول کپی شد!');
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 8)}...${address.slice(-6)}`;
  };

  const sidebarVariants = {
    hidden: { 
      x: '100%',
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: 'spring',
        damping: 25,
        stiffness: 300,
        mass: 0.8
      }
    },
    exit: { 
      x: '100%',
      opacity: 0,
      scale: 0.95,
      transition: { 
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const overlayVariants = {
    hidden: { 
      opacity: 0,
      backdropFilter: 'blur(0px)'
    },
    visible: { 
      opacity: 1,
      backdropFilter: 'blur(4px)',
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      backdropFilter: 'blur(0px)',
      transition: { duration: 0.2 }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            className="wallet-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            className="wallet-sidebar"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="wallet-header">
              <div className="header-content">
                <div className="header-title">
                  <div className="title-icon">
                    <FaWallet />
                    <div className="pulse-dot" />
                  </div>
                  <h2>کیف پول دیجیتال</h2>
                </div>
                <motion.button 
                  className="close-btn"
                  onClick={onClose}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>
              </div>

              {/* Tabs */}
              <div className="wallet-tabs">
                <button 
                  className={`tab ${activeTab === 'wallet' ? 'active' : ''}`}
                  onClick={() => setActiveTab('wallet')}
                >
                  <FaWallet />
                  <span>کیف پول</span>
                </button>
                <button 
                  className={`tab ${activeTab === 'transactions' ? 'active' : ''}`}
                  onClick={() => setActiveTab('transactions')}
                >
                  <FaHistory />
                  <span>تراکنش‌ها</span>
                </button>
                <button 
                  className={`tab ${activeTab === 'network' ? 'active' : ''}`}
                  onClick={() => setActiveTab('network')}
                >
                  <FaExchangeAlt />
                  <span>شبکه</span>
                </button>
              </div>
            </div>

            <div className="wallet-content">
              <AnimatePresence mode="wait">
                {activeTab === 'wallet' && (
                  <motion.div 
                    key="wallet"
                    className="tab-content"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {isConnected ? (
                      <div className="connected-wallet">
                        {/* Balance Card */}
                        <div className="balance-card">
                          <div className="balance-header">
                            <h3>موجودی کیف پول</h3>
                            <button 
                              className="eye-btn"
                              onClick={() => setShowBalance(!showBalance)}
                            >
                              {showBalance ? <FaEye /> : <FaEyeSlash />}
                            </button>
                          </div>
                          
                          <div className="balance-amount">
                            {showBalance ? (
                              <>
                                <span className="amount">۳۲,۷۰۰,۰۰۰</span>
                                <span className="currency">تومان</span>
                              </>
                            ) : (
                              <span className="hidden-balance">••••••••</span>
                            )}
                          </div>
                          
                          <div className="balance-subtext">
                            معادل ≈ $650
                          </div>
                          
                          <div className="balance-actions">
                            <button className="action-btn primary">
                              <FaCoins />
                              <span>شارژ</span>
                            </button>
                            <button className="action-btn secondary">
                              <FaExchangeAlt />
                              <span>برداشت</span>
                            </button>
                          </div>
                        </div>

                        {/* Address Card */}
                        <div className="address-card">
                          <div className="address-header">
                            <h4>آدرس کیف پول</h4>
                            <div className="address-actions">
                              <button onClick={copyToClipboard} title="کپی">
                                <FaCopy />
                              </button>
                              <button title="نمایش QR">
                                <FaQrcode />
                              </button>
                            </div>
                          </div>
                          <div className="address-value">
                            {formatAddress(userAddress)}
                          </div>
                          <div className="network-badge">
                            <FaEthereum />
                            <span>{network}</span>
                          </div>
                        </div>

                        <button 
                          className="disconnect-btn"
                          onClick={handleDisconnect}
                        >
                          <FaTimes />
                          <span>قطع اتصال</span>
                        </button>
                      </div>
                    ) : (
                      <div className="wallet-connection">
                        <div className="connection-header">
                          <FaPlug className="connection-icon" />
                          <h3>اتصال کیف پول</h3>
                          <p>کیف پول خود را انتخاب کنید</p>
                        </div>

                        <div className="wallet-grid">
                          {walletOptions.map((wallet) => (
                            <motion.button
                              key={wallet.id}
                              className={`wallet-card ${selectedWallet === wallet.id ? 'selected' : ''}`}
                              onClick={() => handleWalletSelect(wallet.id)}
                              whileHover={{ y: -5, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              style={{ '--wallet-color': wallet.color }}
                            >
                              <div className="wallet-icon" style={{ background: wallet.gradient }}>
                                {wallet.icon}
                              </div>
                              <div className="wallet-info">
                                <div className="wallet-name">{wallet.name}</div>
                                <div className="wallet-desc">{wallet.description}</div>
                              </div>
                              {selectedWallet === wallet.id && (
                                <motion.div 
                                  className="checkmark"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                >
                                  <FaCheckCircle />
                                </motion.div>
                              )}
                            </motion.button>
                          ))}
                        </div>

                        <motion.button 
                          className="connect-btn"
                          onClick={handleConnect}
                          disabled={isConnecting || !selectedWallet}
                          whileHover={!isConnecting && selectedWallet ? { y: -2 } : {}}
                          whileTap={!isConnecting && selectedWallet ? { scale: 0.98 } : {}}
                        >
                          {isConnecting ? (
                            <>
                              <div className="spinner" />
                              <span>در حال اتصال...</span>
                            </>
                          ) : (
                            <>
                              <FaCheckCircle />
                              <span>اتصال کیف پول</span>
                            </>
                          )}
                        </motion.button>

                        <div className="connection-info">
                          <FaShieldAlt />
                          <p>اتصال کاملاً امن • اطلاعات شما محفوظ است</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'transactions' && (
                  <motion.div 
                    key="transactions"
                    className="tab-content"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="transactions-header">
                      <h3>تراکنش‌های اخیر</h3>
                      <span className="transaction-count">{mockTransactions.length} تراکنش</span>
                    </div>

                    {isConnected ? (
                      <div className="transactions-list">
                        {mockTransactions.map((tx) => (
                          <motion.div 
                            key={tx.id}
                            className="transaction-item"
                            whileHover={{ x: 5 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: tx.id * 0.05 }}
                          >
                            <div className="transaction-icon" style={{ color: tx.status === 'موفق' ? '#10B981' : '#F59E0B' }}>
                              {tx.icon}
                            </div>
                            
                            <div className="transaction-details">
                              <div className="transaction-main">
                                <div className="transaction-type">{tx.type}</div>
                                <div className="transaction-amount">{tx.amount}</div>
                              </div>
                              
                              <div className="transaction-meta">
                                <span className="transaction-date">{tx.date} • {tx.time}</span>
                                <span className="transaction-hash">{tx.txHash}</span>
                              </div>
                            </div>
                            
                            <div className={`transaction-status ${tx.status}`}>
                              {tx.status}
                            </div>
                            
                            <FaArrowRight className="transaction-arrow" />
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="no-transactions">
                        <FaHistory className="empty-icon" />
                        <h4>تراکنشی یافت نشد</h4>
                        <p>برای مشاهده تراکنش‌ها، کیف پول خود را متصل کنید</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'network' && (
                  <motion.div 
                    key="network"
                    className="tab-content"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="network-header">
                      <h3>انتخاب شبکه</h3>
                      <p>شبکه فعلی: <span className="current-network">{network}</span></p>
                    </div>

                    <div className="networks-list">
                      {networks.map((net) => (
                        <motion.div
                          key={net.id}
                          className={`network-item ${network === net.name ? 'active' : ''}`}
                          onClick={() => setNetwork(net.name)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="network-icon" style={{ color: net.color }}>
                            {net.icon}
                          </div>
                          <div className="network-name">{net.name}</div>
                          {network === net.name && (
                            <div className="network-indicator">
                              <FaCheckCircle />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    <div className="network-info">
                      <FaShieldAlt />
                      <p>تغییر شبکه ممکن است باعث از دست رفتن تراکنش‌های در حال انجام شود</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WalletSidebar;