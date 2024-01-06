import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => { 
  const [value, setValue] = useState(5);
  const [comment, setComment] = useState('');

  const isDisable = Number(value) < 5 && comment.length <= 10;
  const textareaPlaceholder = isDisable
    ? 'Please enter a review of length more than 10 words'
    : 'Optional review';

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ value, comment });
  };

  return (
    <form style={{ flexDirection: 'column', width: '200px' }} onSubmit={handleSubmit}>
      <h1>Feedback Form</h1> 
      <p>Score: {value}</p>
      <input type="range" min="0" max="10" value={value} onChange={(e) => setValue(e.target.value)} />
      <textarea
        placeholder={textareaPlaceholder}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" disabled={isDisable}>Submit</button> 
    </form>
  );
};

export default FeedbackForm;