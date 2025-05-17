// lib/model.js

// Modèle de produit
export class Product {
    constructor(name, description, price, stock, imgUrl) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.stock = stock;
      this.imgUrl = imgUrl;
    }
  
    // Validation des données du produit
    validate() {
      if (!this.name || !this.price || !this.stock) {
        throw new Error("Nom, prix et stock sont obligatoires");
      }
      if (this.price < 0 || this.stock < 0) {
        throw new Error("Le prix et le stock doivent être positifs");
      }
    }
  }
  
  // Modèle d'utilisateur
  export class User {
    constructor(email, password, fullName, address) {
      this.email = email;
      this.password = password;
      this.fullName = fullName;
      this.address = address;
    }
  
    // Validation des données de l'utilisateur
    validate() {
      if (!this.email || !this.password || !this.fullName) {
        throw new Error("Email, mot de passe et nom complet sont obligatoires");
      }
    }
  }
  
  // Modèle de commande
  export class Order {
    constructor(userId, status, totalPrice) {
      this.userId = userId;
      this.status = status; // Par exemple, 'en cours', 'expédiée', 'livrée'
      this.totalPrice = totalPrice;
    }
  
    // Validation de la commande
    validate() {
      if (!this.userId || !this.status || !this.totalPrice) {
        throw new Error("userId, status et totalPrice sont obligatoires");
      }
    }
  }
  
  // Modèle d'item de commande
  export class OrderItem {
    constructor(orderId, productId, quantity, price) {
      this.orderId = orderId;
      this.productId = productId;
      this.quantity = quantity;
      this.price = price;
    }
  
    // Validation de l'item de commande
    validate() {
      if (!this.orderId || !this.productId || !this.quantity || !this.price) {
        throw new Error("orderId, productId, quantity et price sont obligatoires");
      }
      if (this.quantity <= 0 || this.price <= 0) {
        throw new Error("La quantité et le prix doivent être positifs");
      }
    }
  }
  
  // Modèle de panier
  export class Cart {
    constructor(userId, items) {
      this.userId = userId;
      this.items = items || []; // Les items sont sous forme d'un tableau d'objets { productId, quantity }
    }
  
    // Ajouter un item au panier
    addItem(productId, quantity) {
      const existingItem = this.items.find(item => item.productId === productId);
      if (existingItem) {
        existingItem.quantity += quantity; // Ajouter la quantité si le produit existe déjà
      } else {
        this.items.push({ productId, quantity });
      }
    }
  
    // Retirer un item du panier
    removeItem(productId) {
      this.items = this.items.filter(item => item.productId !== productId);
    }
  
    // Calculer le total du panier
    calculateTotal(products) {
      return this.items.reduce((total, item) => {
        const product = products.find(product => product.id === item.productId);
        if (product) {
          total += product.price * item.quantity;
        }
        return total;
      }, 0);
    }
  
    // Validation du panier
    validate() {
      if (!this.userId || this.items.length === 0) {
        throw new Error("userId et au moins un item sont obligatoires");
      }
    }
  }
  