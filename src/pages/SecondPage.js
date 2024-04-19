// FormPage.js

import React, { useState } from 'react';
import './FormPage.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import { Link } from "react-router-dom";

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    event: '',
    customEvent: '',
    distanceCompleted: '',
    finisherTime: '',
    completionDate: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the form data
    console.log(formData);
  };

  return (
    <div className="FormPage">
      <div className="App">
        <Header />
      </div>
      <div className="App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <div className="form-container">
        <h1>Form Submission</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">What is your name?</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="event">Which event did you participate in?</label>
            <select id="event" name="event" value={formData.event} onChange={handleChange}>
              <option value="">Select an event</option>
              <option value="Snoopy Run">Snoopy Run</option>
              <option value="Running with my Peeps">Running with my Peeps</option>
              <option value="Godzilla X Kong: The Titan Challenge">Godzilla X Kong: The Titan Challenge</option>
              <option value="Snoopy's Lucky">Snoopy's Lucky</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
          {formData.event === "Custom" && (
            <div className="form-group">
              <label htmlFor="customEvent">Custom Event:</label>
              <input type="text" id="customEvent" name="customEvent" value={formData.customEvent} onChange={handleChange} />
            </div>
          )}
          <div className="form-group">
            <label>Distance Completed:</label>
            <div>
              <label><input type="radio" name="distanceCompleted" value="5k" onChange={handleChange} /> 5k</label>
              <label><input type="radio" name="distanceCompleted" value="10k" onChange={handleChange} /> 10k</label>
              <label><input type="radio" name="distanceCompleted" value="13.1" onChange={handleChange} /> 13.1</label>
              <label><input type="radio" name="distanceCompleted" value="26.2" onChange={handleChange} /> 26.2</label>
              <label><input type="radio" name="distanceCompleted" value="9.11 (for 9.11 Mile Memorial Challenge)" onChange={handleChange} /> 9.11</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="finisherTime">What was your event finisher time?</label>
            <input type="time" id="finisherTime" name="finisherTime" value={formData.finisherTime} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="completionDate">What date did you complete your event?</label>
            <input type="date" id="completionDate" name="completionDate" value={formData.completionDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">How was your run/walk? Share your story on your big finish!</label>
            <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} />
          </div>
          <Link to="/LeaderboardPage"><button type="submit">Submit</button></Link>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
