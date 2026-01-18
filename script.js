class RestaurantDashboard {
    constructor() {
        this.tokenNumber = null;
        this.menuData = [];
        this.filteredData = [];
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.csvUrl = 'https://docs.google.com/spreadsheets/d/19urkakgRjgueR7eyzKnUsOFUXZNOsmDDXAzM0kFvYN8/export?format=csv&id=19urkakgRjgueR7eyzKnUsOFUXZNOsmDDXAzM0kFvYN8&gid=840320789';
        
        this.foodImages = {
            // Chicken Dishes
            'Spicy Chicken Tikka': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&auto=format&q=80',
            'spicy chicken': 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400&h=300&fit=crop&auto=format&q=80',
            'Chicken Korma': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop&auto=format&q=80',
            'Tandoori Chicken': 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop&auto=format&q=80',
            'Butter Chicken': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop&auto=format&q=80',
            'Chicken Shawarma': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=300&fit=crop',
            'Chicken Noodles': 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500&h=300&fit=crop',
            'Chicken Fried Rice': 'https://images.unsplash.com/photo-1563379091339-03246963d4a9?w=500&h=300&fit=crop',
            'Momos (Chicken)': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Chilli Chicken': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=300&fit=crop',
            'Chicken 65': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=300&fit=crop',
            'Chicken Tikka Masala': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=300&fit=crop',
            'Chicken Burger': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop',
            'BBQ Chicken Pizza': 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&h=300&fit=crop',
            'Pepperoni Pizza': 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&h=300&fit=crop',
            
            // Paneer Dishes
            'Paneer Butter Masala': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop&auto=format&q=80',
            'Palak Paneer': 'https://images.unsplash.com/photo-1631116225557-dc887cc89cd1?w=400&h=300&fit=crop&auto=format&q=80',
            'Paneer Tikka': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&auto=format&q=80',
            'Chili Paneer': 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop&auto=format&q=80',
            
            // Mutton Dishes
            'Mutton Biryani': 'https://images.unsplash.com/photo-1563379091339-03246963d4a9?w=400&h=300&fit=crop&auto=format&q=80',
            'Rogan Josh': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop&auto=format&q=80',
            
            // Fish Dishes
            'Prawn Curry': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&auto=format&q=80',
            'Fish Fry': 'https://images.unsplash.com/photo-1544943592-6f3ac12ba725?w=400&h=300&fit=crop&auto=format&q=80',
            'Grilled Salmon': 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&auto=format&q=80',
            
            // Rice Dishes
            'Vegetable Pulao': 'https://images.unsplash.com/photo-1563379091339-03246963d4a9?w=500&h=300&fit=crop',
            'Egg Fried Rice': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=300&fit=crop',
            'Chicken Fried Rice': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=300&fit=crop',
            'Schezwan Fried Rice': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=300&fit=crop',
            'Jeera Rice': 'https://images.unsplash.com/photo-1563379091339-03246963d4a9?w=500&h=300&fit=crop',
            'Plain Rice': 'https://images.unsplash.com/photo-1563379091339-03246963d4a9?w=500&h=300&fit=crop',
            
            // Breads
            'Garlic Naan': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=300&fit=crop',
            'Roti Basket': 'https://images.unsplash.com/photo-1606471191009-63b6e0c2040e?w=500&h=300&fit=crop',
            'Paratha (Aloo)': 'https://images.unsplash.com/photo-1606471191009-63b6e0c2040e?w=500&h=300&fit=crop',
            'Paratha (Gobi)': 'https://images.unsplash.com/photo-1606471191009-63b6e0c2040e?w=500&h=300&fit=crop',
            'Papad': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=300&fit=crop',
            
            // Soups
            'Tomato Soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=300&fit=crop',
            'Mushroom Soup': 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=300&fit=crop',
            'Sweet Corn Soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=300&fit=crop',
            'Manchow Soup': 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=300&fit=crop',
            
            // Beverages
            'Mango Lassi': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=300&fit=crop',
            'Sweet Lassi': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=300&fit=crop',
            'Salted Lassi': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=300&fit=crop',
            'Fresh Lime Soda': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=300&fit=crop',
            'Mint Mojito': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=300&fit=crop',
            'Watermelon Juice': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=300&fit=crop',
            'Orange Juice': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=300&fit=crop',
            'Apple Juice': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=300&fit=crop',
            'Filter Coffee': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=300&fit=crop',
            'Masala Chai': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=300&fit=crop',
            'Green Tea': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=300&fit=crop',
            'Black Coffee': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=300&fit=crop',
            'Hot Chocolate': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=300&fit=crop',
            
            // Desserts
            'Chocolate Brownie': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=300&fit=crop',
            'Vanilla Ice Cream': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=300&fit=crop',
            'Strawberry Cheesecake': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=300&fit=crop',
            'Gulab Jamun': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=300&fit=crop',
            'Jalebi': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=300&fit=crop',
            'Rasgulla': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=300&fit=crop',
            
            // Other Dishes
            'Creamy Alfredo Pasta': 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500&h=300&fit=crop',
            'Dal Makhani': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&h=300&fit=crop',
            'Aloo Gobi': 'https://images.unsplash.com/photo-1631116225557-dc887cc89cd1?w=500&h=300&fit=crop',
            'Masala Dosa': 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&h=300&fit=crop',
            'Idli Sambar': 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&h=300&fit=crop',
            'Mushroom Masala': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Veg Kofta': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Falafel Wrap': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Hummus Platter': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Greek Salad': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=300&fit=crop',
            'Lamb Chops': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=300&fit=crop',
            'Caesar Salad': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=300&fit=crop',
            'Margherita Pizza': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=300&fit=crop',
            'Veggie Burger': 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&h=300&fit=crop',
            'French Fries': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=300&fit=crop',
            'Onion Rings': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=300&fit=crop',
            'Coleslaw': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=300&fit=crop',
            'Spring Rolls': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Gobi Manchurian': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Veg Noodles': 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&h=300&fit=crop',
            'Momos (Veg)': 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&h=300&fit=crop',
            'Crispy Corn': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Honey Chili Potato': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Malai Kofta': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Chana Masala': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Bhindi Masala': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Baingan Bharta': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop',
            'Plain Curd': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=300&fit=crop',
            'Raita (Boondi)': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=300&fit=crop',
            'Raita (Mix Veg)': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=300&fit=crop',
            'Green Salad': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=300&fit=crop'
        };
        
        this.cart = [];
        this.init();
    }

    async init() {
        this.setupEventListeners();
        await this.loadMenuData();
        this.initChatbot();
        this.initSidebar();
        this.initDashboard();
        this.initCasinoSparkles();
    }

    setupEventListeners() {
        const categoryBtns = document.querySelectorAll('.category-btn');
        const searchInput = document.getElementById('searchInput');

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleCategoryChange(e.target.dataset.category);
            });
        });

        searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
    }

    initDashboard() {
        this.createDashboardCard();
    }

    createDashboardCard() {
        const dashboardSection = document.createElement('div');
        dashboardSection.className = 'dashboard-section';
        dashboardSection.innerHTML = `
            <div class="dashboard-card glass-effect">
                <div class="dashboard-header">
                    <h3><i class="fas fa-chart-line"></i> Restaurant Dashboard</h3>
                </div>
                <div class="dashboard-content">
                    <div class="dashboard-stats">
                        <div class="stat-item">
                            <i class="fas fa-utensils"></i>
                            <div class="stat-info">
                                <span class="stat-number">${this.menuData.length}</span>
                                <span class="stat-label">Total Items</span>
                            </div>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-shopping-cart"></i>
                            <div class="stat-info">
                                <span class="stat-number" id="cartCount">0</span>
                                <span class="stat-label">Cart Items</span>
                            </div>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-star"></i>
                            <div class="stat-info">
                                <span class="stat-number">4.8</span>
                                <span class="stat-label">Rating</span>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-actions">
                        <button class="feedback-btn glass-effect" onclick="dashboard.openFeedbackModal()">
                            <i class="fas fa-comment"></i>
                            Feedback
                        </button>
                        <button class="cart-btn glass-effect" onclick="dashboard.openCartModal()">
                            <i class="fas fa-shopping-cart"></i>
                            View Cart
                        </button>
                    </div>
                </div>
            </div>
        `;

        const mainContent = document.querySelector('.main-content');
        mainContent.insertBefore(dashboardSection, mainContent.firstChild);
    }

    openFeedbackModal() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'feedbackModal';
        modal.innerHTML = `
            <div class="modal-content glass-effect">
                <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
                <h2><i class="fas fa-comment"></i> Send Feedback</h2>
                <form id="feedbackForm" onsubmit="dashboard.submitFeedback(event)">
                    <div class="form-group">
                        <label for="feedbackName">Name:</label>
                        <input type="text" id="feedbackName" required>
                    </div>
                    <div class="form-group">
                        <label for="feedbackEmail">Email:</label>
                        <input type="email" id="feedbackEmail" required>
                    </div>
                    <div class="form-group">
                        <label for="feedbackMessage">Message:</label>
                        <textarea id="feedbackMessage" rows="5" required placeholder="Share your experience with us..."></textarea>
                    </div>
                    <button type="submit" class="submit-btn glass-effect">
                        <i class="fas fa-paper-plane"></i>
                        Send Feedback
                    </button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
        modal.style.display = 'block';
    }

    async submitFeedback(event) {
        event.preventDefault();
        const name = document.getElementById('feedbackName').value;
        const email = document.getElementById('feedbackEmail').value;
        const message = document.getElementById('feedbackMessage').value;

        const feedbackData = {
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toISOString(),
            restaurant: 'SHAHID RESTRO'
        };

        try {
            // Send to your email via a service (you can use EmailJS or similar)
            const mailtoLink = `mailto:shahidafridkhanphatan@gmail.com?subject=Feedback from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
            window.open(mailtoLink);
            
            alert('Thank you for your feedback! We will get back to you soon.');
            document.getElementById('feedbackModal').remove();
        } catch (error) {
            console.error('Error sending feedback:', error);
            alert('Error sending feedback. Please try again.');
        }
    }

    openCartModal() {
        const tokenDisplay = this.tokenNumber ? `
            <div class='token-display'>
                <i class="fas fa-ticket-alt"></i>
                <strong>Token Number: ${this.tokenNumber}</strong>
            </div>` : '';
        
        const cartSummary = this.cart.length > 0 ? `
            <div class="cart-summary">
                <div class="summary-item">
                    <span>Items:</span>
                    <span>${this.cart.length}</span>
                </div>
                <div class="summary-item">
                    <span>Subtotal:</span>
                    <span>₹${this.calculateTotal()}</span>
                </div>
                <div class="summary-item">
                    <span>Tax (5%):</span>
                    <span>₹${Math.round(this.calculateTotal() * 0.05)}</span>
                </div>
                <div class="summary-item total">
                    <span>Total:</span>
                    <span>₹${this.calculateTotal() + Math.round(this.calculateTotal() * 0.05)}</span>
                </div>
            </div>
        ` : '';
        
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'cartModal';
        modal.innerHTML = `
            <div class="modal-content cart-modal glass-effect">
                <div class="cart-header">
                    <h2><i class="fas fa-shopping-cart"></i> Your Order</h2>
                    <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
                </div>
                ${tokenDisplay}
                <div class="cart-body">
                    <div id="cartItems">
                        ${this.cart.length === 0 ? this.renderEmptyCart() : this.renderCartItems()}
                    </div>
                    ${cartSummary}
                </div>
                <div class="cart-footer">
                    ${this.cart.length > 0 ? `
                        <button class="clear-cart-btn" onclick="dashboard.clearCart()">
                            <i class="fas fa-trash"></i>
                            Clear Cart
                        </button>
                        <button class="checkout-btn glass-effect" onclick="dashboard.checkout()">
                            <i class="fas fa-credit-card"></i>
                            Place Order
                        </button>
                    ` : `
                        <button class="continue-shopping-btn glass-effect" onclick="this.parentElement.parentElement.parentElement.remove()">
                            <i class="fas fa-utensils"></i>
                            Continue Shopping
                        </button>
                    `}
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.style.display = 'block';
    }

    renderEmptyCart() {
        return `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h3>Your cart is empty</h3>
                <p>Add some delicious items to get started!</p>
            </div>
        `;
    }

    clearCart() {
        this.cart = [];
        this.updateCartCount();
        this.openCartModal(); // Refresh modal
    }

    showSuccessModal(orderDetails, smsSuccess = true) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'successModal';
        modal.innerHTML = `
            <div class="modal-content success-modal glass-effect">
                <div class="success-header">
                    <div class="success-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h2>Order Confirmed!</h2>
                </div>
                <div class="success-body">
                    <div class="order-summary">
                        <div class="token-highlight">
                            <i class="fas fa-ticket-alt"></i>
                            <span>Token Number</span>
                            <div class="token-number">${orderDetails.tokenNumber}</div>
                        </div>
                        <div class="order-details">
                            <div class="detail-item">
                                <span>Items:</span>
                                <span>${orderDetails.items.length}</span>
                            </div>
                            <div class="detail-item">
                                <span>Subtotal:</span>
                                <span>₹${orderDetails.subtotal}</span>
                            </div>
                            <div class="detail-item">
                                <span>Tax (5%):</span>
                                <span>₹${orderDetails.tax}</span>
                            </div>
                            <div class="detail-item total">
                                <span>Total:</span>
                                <span>₹${orderDetails.total}</span>
                            </div>
                        </div>
                        <div class="sms-status ${smsSuccess ? 'success' : 'warning'}">
                            <i class="fas ${smsSuccess ? 'fa-check' : 'fa-exclamation-triangle'}"></i>
                            <span>${smsSuccess ? 'SMS confirmation sent to restaurant' : 'SMS failed - please contact staff'}</span>
                        </div>
                    </div>
                </div>
                <div class="success-footer">
                    <button class="close-success-btn glass-effect" onclick="this.parentElement.parentElement.parentElement.remove()">
                        <i class="fas fa-utensils"></i>
                        Continue Shopping
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.style.display = 'block';
    }

    renderCartItems() {
        return this.cart.map((item, index) => {
            const imageUrl = this.foodImages[item.name] || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop';
            return `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${imageUrl}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button onclick="dashboard.removeFromCart('${item.name}')" class="remove-btn">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    calculateTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
    }

    async addToCart(itemName, price) {
        if (!this.tokenNumber) {
            this.tokenNumber = await this.promptTokenNumber();
            if (!this.tokenNumber) {
                this.showNotification('Token number is required to add items.');
                return;
            }
        }
        const priceNum = parseInt(price.replace(/[^\d]/g, ''));
        this.cart.push({ name: itemName, price: priceNum });
        this.updateCartCount();
        this.showNotification(`${itemName} added to cart! (Token: ${this.tokenNumber})`);
    }

    removeFromCart(itemName) {
        const index = this.cart.findIndex(item => item.name === itemName);
        if (index > -1) {
            this.cart.splice(index, 1);
            this.updateCartCount();
            this.openCartModal(); // Refresh modal
        }
    }

    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.cart.length;
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <i class="fas fa-check"></i>
            ${message}
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    async checkout() {
        if (!this.tokenNumber) {
            this.tokenNumber = await this.promptTokenNumber();
            if (!this.tokenNumber) {
                this.showNotification('Token number is required for checkout.');
                return;
            }
        }
        
        // Prepare order details
        const totalWithTax = this.calculateTotal() + Math.round(this.calculateTotal() * 0.05);
        const orderDetails = {
            tokenNumber: this.tokenNumber,
            items: this.cart,
            subtotal: this.calculateTotal(),
            tax: Math.round(this.calculateTotal() * 0.05),
            total: totalWithTax,
            orderTime: new Date().toISOString(),
            phoneNumber: '9392637051', // Your phone number for SMS
            customerMessage: `🍽️ SHAHID RESTRO ORDER
Token: ${this.tokenNumber}
Items: ${this.cart.length}
Total: ₹${totalWithTax}
Time: ${new Date().toLocaleString()}
Thank you for your order!`
        };
        
        // Send SMS via webhook
        try {
            const response = await this.sendToN8n(orderDetails.customerMessage, orderDetails, true);
            this.showSuccessModal(orderDetails, true);
        } catch (e) {
            console.error('SMS Error:', e);
            this.showSuccessModal(orderDetails, false);
        }
        this.cart = [];
        this.tokenNumber = null;
        this.updateCartCount();
        document.getElementById('cartModal').remove();
    }

    initSidebar() {
        this.sidebar = document.getElementById('metroSidebar');
        this.sidebarToggle = document.getElementById('sidebarToggle');
        this.sidebarItems = document.getElementById('sidebarItems');
        this.container = document.querySelector('.container');

        this.sidebarToggle.addEventListener('click', () => {
            this.toggleSidebar();
        });

        this.populateSidebar();
        this.startCasinoScroll();
    }

    startCasinoScroll() {
        if (!this.sidebarItems) return;
        
        const originalItems = this.sidebarItems.innerHTML;
        this.sidebarItems.innerHTML = originalItems + originalItems;
        
        this.sidebarItems.addEventListener('mouseenter', () => {
            this.sidebarItems.style.animationPlayState = 'paused';
        });
        
        this.sidebarItems.addEventListener('mouseleave', () => {
            this.sidebarItems.style.animationPlayState = 'running';
        });
        
        this.sidebarItems.addEventListener('click', (e) => {
            if (e.target.closest('.sidebar-item')) {
                const itemName = e.target.closest('.sidebar-item').dataset.itemName;
                this.scrollToMenuItem(itemName);
            }
        });
    }

    toggleSidebar() {
        this.sidebar.classList.toggle('collapsed');
        this.container.classList.toggle('sidebar-collapsed');
        
        const icon = this.sidebarToggle.querySelector('i');
        if (this.sidebar.classList.contains('collapsed')) {
            icon.className = 'fas fa-chevron-right';
            if (this.sidebarItems) {
                this.sidebarItems.style.animationPlayState = 'paused';
            }
        } else {
            icon.className = 'fas fa-chevron-left';
            if (this.sidebarItems) {
                this.sidebarItems.style.animationPlayState = 'running';
            }
        }
    }

    populateSidebar() {
        if (!this.sidebarItems) return;
        
        const sidebarHTML = this.menuData.map(item => {
            const price = this.formatPrice(item['Price (INR)']);
            const category = item.category;
            
            return `
                <div class="sidebar-item" data-item-name="${item['Item Name']}">
                    <div class="sidebar-item-content">
                        <div class="sidebar-item-info">
                            <div class="sidebar-item-name">${item['Item Name']}</div>
                            <div class="sidebar-item-category">${category.toUpperCase()}</div>
                        </div>
                        <div class="sidebar-item-price">${price}</div>
                    </div>
                </div>
            `;
        }).join('');

        this.sidebarItems.innerHTML = sidebarHTML;
    }

    scrollToMenuItem(itemName) {
        const menuCards = document.querySelectorAll('.menu-card');
        const targetCard = Array.from(menuCards).find(card => {
            const title = card.querySelector('.menu-card-title');
            return title && title.textContent.trim() === itemName;
        });

        if (targetCard) {
            targetCard.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            targetCard.style.transform = 'scale(1.05)';
            targetCard.style.boxShadow = '0 25px 50px rgba(255, 255, 255, 0.3)';
            
            setTimeout(() => {
                targetCard.style.transform = '';
                targetCard.style.boxShadow = '';
            }, 2000);
        }
    }

    async loadMenuData() {
        try {
            this.showLoading(true);
            const response = await fetch(this.csvUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const csvText = await response.text();
            this.menuData = this.parseCSV(csvText);
            this.filteredData = [...this.menuData];
            this.renderMenu();
            this.populateSidebar();
            this.populateScrollBoard();
            this.showLoading(false);
        } catch (error) {
            console.error('Error loading menu data:', error);
            this.showLoading(false);
            this.showError('Failed to load menu data. Please check your internet connection and try again.');
        }
    }

    parseCSV(csvText) {
        const lines = csvText.split('\n').filter(line => line.trim());
        if (lines.length < 2) {
            throw new Error('Invalid CSV format');
        }
        
        const headers = lines[0].split(',').map(h => h.trim());
        const data = [];

        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim()) {
                const values = this.parseCSVLine(lines[i]);
                if (values.length >= headers.length) {
                    const item = {};
                    headers.forEach((header, index) => {
                        item[header] = values[index] ? values[index].trim() : '';
                    });
                    
                    item.category = this.determineCategory(item);
                    data.push(item);
                }
            }
        }

        return data;
    }

    parseCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(current);
                current = '';
            } else {
                current += char;
            }
        }
        
        result.push(current);
        return result;
    }

    determineCategory(item) {
        const itemName = item['Item Name'] ? item['Item Name'].toLowerCase() : '';
        const ingredients = item['Ingredients'] ? item['Ingredients'].toLowerCase() : '';
        
        if (itemName.includes('chicken') || ingredients.includes('chicken')) {
            return 'chicken';
        }
        if (itemName.includes('paneer') || ingredients.includes('paneer')) {
            return 'paneer';
        }
        if (itemName.includes('mutton') || ingredients.includes('mutton') || itemName.includes('lamb') || ingredients.includes('lamb')) {
            return 'mutton';
        }
        if (itemName.includes('fish') || itemName.includes('prawn') || itemName.includes('salmon') || ingredients.includes('fish') || ingredients.includes('prawn') || ingredients.includes('salmon')) {
            return 'fish';
        }
        if (itemName.includes('rice') || itemName.includes('biryani') || itemName.includes('pulao') || ingredients.includes('rice')) {
            return 'rice';
        }
        if (itemName.includes('naan') || itemName.includes('roti') || itemName.includes('paratha') || itemName.includes('bread') || itemName.includes('papad')) {
            return 'breads';
        }
        if (itemName.includes('soup') || ingredients.includes('soup')) {
            return 'soups';
        }
        if (itemName.includes('lassi') || itemName.includes('juice') || itemName.includes('coffee') || itemName.includes('tea') || itemName.includes('soda') || itemName.includes('mojito') || itemName.includes('chocolate')) {
            return 'beverages';
        }
        if (itemName.includes('brownie') || itemName.includes('ice cream') || itemName.includes('cheesecake') || itemName.includes('jamun') || itemName.includes('jalebi') || itemName.includes('rasgulla')) {
            return 'desserts';
        }
        
        return 'other';
    }

    handleCategoryChange(category) {
        this.currentCategory = category;
        
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.filterData();
        this.renderMenu();
    }

    handleSearch(searchTerm) {
        this.searchTerm = searchTerm.toLowerCase();
        this.filterData();
        this.renderMenu();
    }

    filterData() {
        this.filteredData = this.menuData.filter(item => {
            const matchesCategory = this.currentCategory === 'all' || item.category === this.currentCategory;
            const matchesSearch = !this.searchTerm || 
                item['Item Name'].toLowerCase().includes(this.searchTerm) ||
                item['Ingredients'].toLowerCase().includes(this.searchTerm);
            
            return matchesCategory && matchesSearch;
        });
    }

    renderMenu() {
        const menuGrid = document.getElementById('menuGrid');
        
        if (this.filteredData.length === 0) {
            menuGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search" style="font-size: 3rem; color: rgba(255,255,255,0.3); margin-bottom: 1rem;"></i>
                    <h3>No items found</h3>
                    <p>Try adjusting your search or category filter.</p>
                </div>
            `;
            return;
        }

        menuGrid.innerHTML = this.filteredData.map(item => this.createMenuCard(item)).join('');
    }

    createMenuCard(item) {
        const price = this.formatPrice(item['Price (INR)']);
        const categoryClass = item.category;
        const categoryIcon = this.getCategoryIcon(item.category);
        const imageUrl = this.foodImages[item['Item Name']] || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop';
        
        return `
            <div class="menu-card">
                <div class="menu-card-image">
                    <img src="${imageUrl}" alt="${item['Item Name']}" loading="lazy">
                </div>
                <div class="menu-card-content">
                    <h3 class="menu-card-title">${item['Item Name']}</h3>
                    <p class="menu-card-description">${item['Ingredients']}</p>
                    <div class="menu-card-price">${price}</div>
                    <div class="menu-card-actions">
                        <span class="menu-card-category ${categoryClass}">
                            <i class="${categoryIcon}"></i>
                            ${item.category.toUpperCase()}
                        </span>
                        <button class="add-to-cart-btn glass-effect" onclick="dashboard.addToCart('${item['Item Name']}', '${price}')">
                            <i class="fas fa-plus"></i>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    getCategoryIcon(category) {
        const icons = {
            'chicken': 'fas fa-drumstick-bite',
            'paneer': 'fas fa-leaf',
            'mutton': 'fas fa-drumstick-bite',
            'fish': 'fas fa-fish',
            'rice': 'fas fa-seedling',
            'breads': 'fas fa-bread-slice',
            'soups': 'fas fa-mug-hot',
            'beverages': 'fas fa-glass-whiskey',
            'desserts': 'fas fa-ice-cream',
            'other': 'fas fa-utensils'
        };
        return icons[category] || 'fas fa-utensils';
    }

    formatPrice(price) {
        if (!price) return '₹0';
        
        let cleanPrice = price.replace(/[^\d]/g, '');
        if (cleanPrice) {
            return `₹${cleanPrice}`;
        }
        return price;
    }

    showLoading(show) {
        const loadingSpinner = document.getElementById('loadingSpinner');
        const menuGrid = document.getElementById('menuGrid');
        
        if (show) {
            loadingSpinner.style.display = 'flex';
            menuGrid.style.display = 'none';
        } else {
            loadingSpinner.style.display = 'none';
            menuGrid.style.display = 'grid';
        }
    }

    showError(message) {
        const menuGrid = document.getElementById('menuGrid');
        menuGrid.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #f44336; margin-bottom: 1rem;"></i>
                <h3>Error</h3>
                <p>${message}</p>
                <button onclick="dashboard.loadMenuData()" class="retry-btn">
                    <i class="fas fa-redo"></i>
                    Retry
                </button>
            </div>
        `;
    }

    // AI Chatbot Methods
    initChatbot() {
        this.chatbotToggle = document.getElementById('chatbotToggle');
        this.chatbotWindow = document.getElementById('chatbotWindow');
        this.chatbotClose = document.getElementById('chatbotClose');
        this.chatbotMessages = document.getElementById('chatbotMessages');
        this.chatbotInput = document.getElementById('chatbotInput');
        this.chatbotSend = document.getElementById('chatbotSend');

        this.chatbotToggle.addEventListener('click', () => this.toggleChatbot());
        this.chatbotClose.addEventListener('click', () => this.closeChatbot());
        this.chatbotSend.addEventListener('click', () => this.sendMessage());
        this.chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    toggleChatbot() {
        this.chatbotWindow.classList.toggle('active');
        if (this.chatbotWindow.classList.contains('active')) {
            this.chatbotInput.focus();
        }
    }

    closeChatbot() {
        this.chatbotWindow.classList.remove('active');
    }

    async sendMessage() {
        const message = this.chatbotInput.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.chatbotInput.value = '';
        this.showTypingIndicator();

        try {
            const response = await this.sendToN8n(message);
            this.hideTypingIndicator();
            this.addMessage(response, 'bot');
        } catch (error) {
            console.error('Error sending message to n8n:', error);
            this.hideTypingIndicator();
            this.addMessage('Sorry, I\'m having trouble connecting right now. Please try again later.', 'bot');
        }
    }

    async sendToN8n(message, orderData = null, sms = false) {
        const webhookUrl = 'https://shahidafrid.app.n8n.cloud/webhook/c56c0d0a-9865-4694-b145-2bf8d5c001f9';
        
        const payload = {
            message: message,
            sms: sms,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            restaurant: 'SHAHID RESTRO',
            source: 'website'
        };
        
        // Add order data if this is a checkout
        if (orderData) {
            payload.orderData = orderData;
            payload.tokenNumber = orderData.tokenNumber;
            payload.phoneNumber = orderData.phoneNumber;
            payload.total = orderData.total;
            payload.items = orderData.items;
        }
        
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.response || data.message || 'Thank you for your message! I\'ll get back to you soon.';
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const icon = sender === 'user' ? 'fas fa-user' : 'fas fa-robot';
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <i class="${icon}"></i>
                <div class="message-text">${text}</div>
            </div>
        `;
        
        this.chatbotMessages.appendChild(messageDiv);
        this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-content">
                <i class="fas fa-robot"></i>
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        
        this.chatbotMessages.appendChild(typingDiv);
        this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Casino Sparkles Effect
    initCasinoSparkles() {
        const container = document.getElementById('casinoSparkles');
        if (!container) return;

        this.createSparkles();
        setInterval(() => this.createSparkles(), 2000);
    }

    createSparkles() {
        const container = document.getElementById('casinoSparkles');
        if (!container) return;

        // Create 5-8 sparkles every time
        const sparkleCount = Math.floor(Math.random() * 4) + 5;
        
        for (let i = 0; i < sparkleCount; i++) {
            setTimeout(() => {
                this.createSingleSparkle(container);
            }, Math.random() * 1000);
        }
    }

    createSingleSparkle(container) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random size and shape
        const types = ['small', 'medium', 'large', 'diamond'];
        const type = types[Math.floor(Math.random() * types.length)];
        sparkle.classList.add(type);
        
        // Random horizontal position
        sparkle.style.left = Math.random() * 100 + '%';
        
        // Random delay
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 15000);
    }

    // Populate scroll board with popular items
    populateScrollBoard() {
        const scrollBoard = document.getElementById('scrollBoard');
        if (!scrollBoard || this.menuData.length === 0) return;

        // Get popular items (simulate popularity with random ratings)
        const popularItems = this.menuData
            .map(item => ({
                ...item,
                rating: (Math.random() * 1.5 + 3.5).toFixed(1), // 3.5-5.0 rating
                popularity: Math.random()
            }))
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 15); // Top 15 items

        scrollBoard.innerHTML = popularItems.map(item => {
            const imageUrl = this.foodImages[item['Item Name']] || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop';
            const stars = '★'.repeat(Math.floor(item.rating));
            
            return `
                <div class="scroll-item" onclick="dashboard.scrollToMenuItem('${item['Item Name']}')">
                    <div class="scroll-item-image">
                        <img src="${imageUrl}" alt="${item['Item Name']}" loading="lazy">
                    </div>
                    <div class="scroll-item-info">
                        <div class="scroll-item-name">${item['Item Name']}</div>
                        <div class="scroll-item-rating">
                            <span class="stars">${stars}</span>
                            <span class="rating-value">${item.rating}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function openContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'block';
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
}

function refreshData() {
    if (dashboard) {
        dashboard.loadMenuData();
    }
}

RestaurantDashboard.prototype.promptTokenNumber = async function() {
    return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'block';
        modal.innerHTML = `
            <div class="modal-content glass-effect">
                <h2>Enter Token Number</h2>
                <input type="text" id="tokenInput" class="token-input" maxlength="10" placeholder="Enter your token number" autofocus />
                <div style="margin-top:1rem;">
                    <button id="tokenSubmit" class="glass-effect">Submit</button>
                    <button id="tokenCancel" class="glass-effect">Cancel</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        const input = modal.querySelector('#tokenInput');
        const submitBtn = modal.querySelector('#tokenSubmit');
        const cancelBtn = modal.querySelector('#tokenCancel');
        submitBtn.onclick = () => {
            const val = input.value.trim();
            if (val) {
                modal.remove();
                resolve(val);
            } else {
                input.focus();
            }
        };
        cancelBtn.onclick = () => {
            modal.remove();
            resolve(null);
        };
        input.onkeydown = (e) => {
            if (e.key === 'Enter') submitBtn.onclick();
            if (e.key === 'Escape') cancelBtn.onclick();
        };
    });
};

window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        closeContactModal();
    }
}

let dashboard;

document.addEventListener('DOMContentLoaded', () => {
    dashboard = new RestaurantDashboard();
}); 