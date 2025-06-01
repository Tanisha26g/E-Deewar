function About() {
  return (
    <div className="container mt-5 text-black">
      {/* Section Title */}
      <h1 className="text-center mb-4 text-black">About E-Deewar</h1>

      {/* Introduction Section */}
      <section>
        <h3 className="text-black">🎯 Our Vision</h3>
        <p className="text-black">
          <strong>E-Deewar</strong> is a centralized platform built exclusively for college communities to 
          <strong> buy, sell, or rent academic and personal items</strong>. From textbooks and electronics to hostel essentials, 
          E-Deewar empowers students to connect, trade, and thrive — all within a secure campus network.
        </p>
      </section>

      {/* Core Features */}
      <section>
        <h3 className="text-black">🚀 Key Features</h3>
        <ul className="text-black">
          <li><strong>📚 Sell or Rent Notes & Books:</strong> Give your study material a second life.</li>
          <li><strong>📱 Electronics & Essentials:</strong> Trade gadgets, chargers, headphones, and more.</li>
          <li><strong>🗃️ Categorized Listings:</strong> Easy browsing through categories like Books, Furniture, Stationery, etc.</li>
          <li><strong>💬 Real-time Chat:</strong> Communicate directly with interested buyers or renters.</li>
          <li><strong>🔐 Safe and Verified Access:</strong> Only verified students can join and trade.</li>
          <li><strong>⭐ Rating System:</strong> Build trust through user reviews and ratings.</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section>
        <h3 className="text-black">💡 Why E-Deewar?</h3>
        <p className="text-black">
          Most students face difficulties finding affordable study materials or disposing of unused items. 
          E-Deewar solves this by offering a <strong>campus-centric marketplace</strong> that promotes sustainability, 
          convenience, and affordability — all while keeping it safe within your institution.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h3 className="text-black">🛒 Start Buying, Selling & Renting Today!</h3>
        <p className="text-black">
          Join the E-Deewar community and make your college life smarter, cheaper, and more connected.
        </p>
        <a href="/" className="btn btn-success">Get Started</a>
      </section>
    </div>
  );
}

export default About;
