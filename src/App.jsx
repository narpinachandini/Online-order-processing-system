
import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  const foods = [
    { id: 1, name: "Burger", price: 120, emoji: "🍔" },
    { id: 2, name: "Pizza", price: 250, emoji: "🍕" },
    { id: 3, name: "French Fries", price: 100, emoji: "🍟" },
    { id: 4, name: "Noodles", price: 150, emoji: "🍜" },
    { id: 5, name: "Sandwich", price: 90, emoji: "🥪" },
    { id: 6, name: "Ice Cream", price: 80, emoji: "🍦" }
  ];

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header className="navbar">
        <h1>Food<span>Express</span></h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#restaurants">Restaurants</a>
          <a href="#menu">Menu</a>

          <button onClick={() => setShowCart(true)}>
            Cart ({cart.length})
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div>
            <h2>Delicious food delivered to your door</h2>
            <p>
              Explore restaurants, choose your favourite food,
              and order online.
            </p>
            <a href="#restaurants" className="hero-button">
              Order Now
            </a>
          </div>

          <div className="hero-food">🍔 🍕 🍟</div>
        </section>

        <section className="search-section">
          <input
            type="text"
            placeholder="Search for food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        <section id="restaurants" className="section">
          <h2>Popular Restaurants</h2>

          <div className="restaurant-list">
            <div className="restaurant-card">
              <div className="restaurant-image">🍔</div>
              <h3>Burger House</h3>
              <p>American • 25 min</p>
            </div>

            <div className="restaurant-card">
              <div className="restaurant-image">🍕</div>
              <h3>Pizza Palace</h3>
              <p>Italian • 30 min</p>
            </div>

            <div className="restaurant-card">
              <div className="restaurant-image">🍜</div>
              <h3>Noodle Point</h3>
              <p>Asian • 20 min</p>
            </div>
          </div>
        </section>

        <section id="menu" className="section">
          <h2>Popular Food Items</h2>

          <div className="food-grid">
            {filteredFoods.map((food) => (
              <div className="food-card" key={food.id}>
                <div className="food-emoji">{food.emoji}</div>
                <h3>{food.name}</h3>
                <p>₹{food.price}</p>

                <button onClick={() => addToCart(food)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {filteredFoods.length === 0 && (
            <p>No food items found.</p>
          )}
        </section>
      </main>

      {showCart && (
        <div className="cart-panel">
          <div className="cart-header">
            <h2>Your Cart</h2>
            <button onClick={() => setShowCart(false)}>×</button>
          </div>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <span>{item.name} - ₹{item.price}</span>
                <button onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            ))
          )}

          <h3>Total: ₹{total}</h3>

          <button
            onClick={() => {
              if (cart.length > 0) {
                alert("Order placed successfully!");
                setCart([]);
                setShowCart(false);
              } else {
                alert("Your cart is empty!");
              }
            }}
          >
            Checkout
          </button>
        </div>
      )}

      <footer>
        <p>© 2026 FoodExpress | Online Food Delivery System</p>
      </footer>
    </>
  );
}

export default App;
