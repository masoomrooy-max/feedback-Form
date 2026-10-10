import {useState} from 'react'
import'../styles/Form.css';

function Form() {
   const [formData, setFormData] = useState({
    name: '',
    feedback: ''
  });

  const [arr, setArr] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, formData]);
    setFormData({ name: '', feedback: '' });
  }

  return (
    <dev className="page">
    <div className="container">
      <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <br />
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                placeholder="Enter your name"
            />
            <br />
            <label htmlFor="feedback">Feedback:</label>
            <br />
            <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                required
                placeholder="Enter your feedback"
            ></textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
        <dev className="feedback-list">
            <h2>Submitted Feedback</h2>
            {arr.map((item, index) => (
                <div key={index} className="feedback-entry">
                    <p><strong>Name:</strong> {item.name}</p>
                    <p><strong>Feedback:</strong> {item.feedback}</p>
                </div>
            ))}
        </dev>
    </div>
    </dev>

  );
}

export default Form