import "../styles/styles.css";

const FAQs = () => {
  const faqData = [
    {
      question: "What is E-Deewar?",
      answer: "E-Deewar is a digital marketplace designed exclusively for college students to buy, sell, or rent academic and personal items such as books, notes within a secure campus environment."
    },
    {
      question: "What kind of items can I sell or rent on E-Deewar?",
      answer: "You can list a wide range of items including textbooks, class notes, electronics, hostel essentials, stationery"
    },
    {
      question: "Is there a charge to use E-Deewar?",
      answer: "No, E-Deewar is completely free to use for all verified students. There are no listing or transaction fees."
    },
    {
      question: "How do I list an item for sale or rent?",
      answer: "Go to the 'Sell an Item' section, provide item details, add images, set a price, and choose whether you want to sell or rent it."
    },
    {
      question: "How can I rent out my notes or books?",
      answer: "While posting an item, select the 'Rent' option, specify rental duration, pricing, and any conditions for return."
    },
    {
      question: "Can I edit or remove my listing later?",
      answer: "Yes, go to 'My Listings' in your profile to update item details or remove it from the platform anytime."
    },
  ];

  return (
    <div className="container-fluid px-4 mt-5">
      <h1 className="text-center mb-4 text-black">❓ Frequently Asked Questions (FAQs)</h1>
      <p className="text-center">Find answers to the most common questions about the E-Deewar Portal.</p>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="accordion" id="faqAccordion">
            {faqData.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div 
                  id={`collapse${index}`} 
                  className="accordion-collapse collapse" 
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
