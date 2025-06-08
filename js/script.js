// PressureNY - Main JavaScript

class PressureNYApp {
  constructor() {
    this.cart = [];
    this.isCartOpen = false;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateCartUI();
    this.handleScrollEffect();
    this.setupIntersectionObserver();
  }

  setupEventListeners() {
    // Menu toggle for mobile
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    
    menuToggle?.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // Cart functionality
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeModal = cartModal?.querySelector('.close');

    cartBtn?.addEventListener('click', () => this.toggleCart());
    closeModal?.addEventListener('click', () => this.toggleCart());
    
    // Close modal when clicking outside
    cartModal?.addEventListener('click', (e) => {
      if (e.target === cartModal) this.toggleCart();
    });

    // Add to cart buttons
    document.querySelectorAll('.add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        const productName = e.target.dataset.name;
        const productPrice = parseFloat(e.target.dataset.price);
        
        this.addToCart(productId, productName, productPrice);
      });
    });

    // Quick view buttons
    document.querySelectorAll('.quick-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        this.showQuickView(productId);
      });
    });

    // CTA buttons
    const shopNowBtn = document.getElementById('shopNowBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    
    shopNowBtn?.addEventListener('click', () => {
      document.getElementById('coleccion')?.scrollIntoView({ behavior: 'smooth' });
    });
    
    learnMoreBtn?.addEventListener('click', () => {
      this.showNotification('¡Gracias por tu interés! Pronto tendremos más información.');
    });

    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    searchBtn?.addEventListener('click', () => {
      this.showNotification('Función de búsqueda próximamente disponible');
    });

    // User account
    const userBtn = document.getElementById('userBtn');
    userBtn?.addEventListener('click', () => {
      this.showNotification('Sistema de cuentas próximamente disponible');
    });

    // Checkout
    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn?.addEventListener('click', () => {
      if (this.cart.length > 0) {
        this.processCheckout();
      } else {
        this.showNotification('Tu carrito está vacío');
      }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Close mobile menu if open
          nav?.classList.remove('active');
        }
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isCartOpen) {
        this.toggleCart();
      }
    });
  }

  addToCart(id, name, price) {
    const existingItem = this.cart.find(item => item.id === id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({
        id,
        name,
        price,
        quantity: 1
      });
    }
    
    this.updateCartUI();
    this.showNotification(`${name} añadido al carrito`);
    this.animateCartIcon();
  }

  removeFromCart(id) {
    this.cart = this.cart.filter(item => item.id !== id);
    this.updateCartUI();
    this.showNotification('Producto eliminado del carrito');
  }

  updateCartQuantity(id, quantity) {
    const item = this.cart.find(item => item.id === id);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(id);
      } else {
        item.quantity = quantity;
        this.updateCartUI();
      }
    }
  }

  updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update cart count
    const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
      cartCount.textContent = totalItems;
      cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
    
    // Update cart items
    if (cartItems && cartTotal) {
      cartItems.innerHTML = '';
      let total = 0;
      
      if (this.cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">Tu carrito está vacío</p>';
      } else {
        this.cart.forEach(item => {
          const subtotal = item.price * item.quantity;
          total += subtotal;
          
          const cartItem = document.createElement('div');
          cartItem.className = 'cart-item';
          cartItem.innerHTML = `
            <div class="cart-item-info">
              <h4>${item.name}</h4>
              <div class="cart-item-controls">
                <button onclick="app.updateCartQuantity('${item.id}', ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                <span>${item.quantity}</span>
                <button onclick="app.updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
              </div>
            </div>
            <div class="cart-item-price">
              $${subtotal.toFixed(2)}
              <button onclick="app.removeFromCart('${item.id}')" style="margin-left: 10px; color: var(--primary-red); background: none; border: none; cursor: pointer;">✕</button>
            </div>
          `;
          cartItems.appendChild(cartItem);
        });
      }
      
      cartTotal.textContent = total.toFixed(2);
    }
  }

  toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
      this.isCartOpen = !this.isCartOpen;
      cartModal.style.display = this.isCartOpen ? 'block' : 'none';
      
      if (this.isCartOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  animateCartIcon() {
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
      cartBtn.style.transform = 'scale(1.2)';
      setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
      }, 200);
    }
  }

  showQuickView(productId) {
    // Simulate quick view functionality
    const products = {
      '1': { name: 'Hoodie Urban Pressure', price: 89.99, description: 'Hoodie premium con diseño urbano exclusivo' },
      '2': { name: 'Camiseta Gráfica NYC', price: 49.99, description: 'Camiseta con gráfico original de Nueva York' },
      '3': { name: 'Joggers Premium Tech', price: 79.99, description: 'Joggers tecnológicos con material premium' },
      '4': { name: 'Gorra Snapback Pressure', price: 34.99, description: 'Gorra snapback con logo bordado' }
    };
    
    const product = products[productId];
    if (product) {
      this.showNotification(`${product.name} - ${product.description}`);
    }
  }

  processCheckout() {
    // Simulate checkout process
    this.showNotification('Procesando compra... ¡Gracias por tu pedido!');
    
    // Clear cart after 2 seconds
    setTimeout(() => {
      this.cart = [];
      this.updateCartUI();
      this.toggleCart();
    }, 2000);
  }

  showNotification(message) {
    const notification = document.getElementById('notification');
    if (notification) {
      notification.textContent = message;
      notification.classList.add('show');
      
      setTimeout(() => {
        notification.classList.remove('show');
      }, 3000);
    }
  }

  handleScrollEffect() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (header) {
        if (currentScrollY > 100) {
          header.style.background = 'rgba(17, 17, 17, 0.98)';
          header.style.backdropFilter = 'blur(15px)';
        } else {
          header.style.background = 'rgba(17, 17, 17, 0.95)';
          header.style.backdropFilter = 'blur(10px)';
        }
        
        // Hide header on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      }
      
      lastScrollY = currentScrollY;
    });
  }

  setupIntersectionObserver() {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    // Observe product cards
    document.querySelectorAll('.product').forEach((product, index) => {
      product.style.opacity = '0';
      product.style.transform = 'translateY(30px)';
      product.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(product);
    });
    
    // Observe section headings
    document.querySelectorAll('h2').forEach(heading => {
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(20px)';
      heading.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(heading);
    });
  }

  // Utility functions
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Performance monitoring
  logPerformance() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
      });
    }
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new PressureNYApp();
  
  // Service Worker registration for PWA capabilities
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  }
  
  // Performance logging
  window.app.logPerformance();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden - pause animations, etc.
    console.log('Page hidden');
  } else {
    // Page is visible - resume animations, etc.
    console.log('Page visible');
  }
});

// Error handling
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
  // In production, you might want to send this to an error tracking service
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
  // Prevent the default behavior (logging to console)
  e.preventDefault();
});

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PressureNYApp;
}
