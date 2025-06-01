import 'bootstrap/dist/css/bootstrap.min.css';

const NotesMarketplace = () => {
  const notesListings = [
    {
      subject: 'Data Structures & Algorithms',
      description: 'Clean handwritten notes with examples and diagrams.',
      status: 'For Sale',
      price: '₹100',
      uploader: 'Aryan Mehta',
    },
    {
      subject: 'Operating Systems',
      description: 'Printed notes with past year questions and solutions.',
      status: 'For Rent',
      price: '₹40/week',
      uploader: 'Priya Sharma',
    },
    {
      subject: 'Database Management Systems',
      description: 'Full syllabus coverage with ER diagrams and normalization.',
      status: 'For Sale',
      price: '₹80',
      uploader: 'Rohan Gupta',
    },
    {
      subject: 'Computer Networks',
      description: 'Neatly organized PDF notes with color codes.',
      status: 'For Rent',
      price: '₹30/week',
      uploader: 'Sneha Jain',
    },
    {
      subject: 'Theory of Computation',
      description: 'Simplified notes to understand automata and grammar rules.',
      status: 'For Sale',
      price: '₹90',
      uploader: 'Tanmay Verma',
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary">📚 Notes Renting & Selling</h2>
      <div className="row g-4">
        {notesListings.map((note, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">{note.subject}</h5>
                <p className="card-text">{note.description}</p>
                <p><strong>Status:</strong> {note.status}</p>
                <p><strong>Price:</strong> {note.price}</p>
                <p><strong>Uploaded by:</strong> {note.uploader}</p>
                <button className="btn btn-primary w-100">View Notes</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hover effect */}
      <style>
        {`
          .card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </div>
  );
};

export default NotesMarketplace;
