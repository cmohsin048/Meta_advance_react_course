import React from 'react';
import './App.css';

function Goalform(props) {
  const [formData, setFormData] = React.useState({ goal: '', by: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: '', by: '' });
  };

  return (
    <div>
      <h1>Enter your goals</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          placeholder="Goal..."
        />
        <input
          type="text"
          name="by"
          value={formData.by}
          onChange={handleChange}
          placeholder="by..."
        />
        <button>Submit Goal</button>
      </form>
    </div>
  );
}

function ListofGoals(props) {
  return (
    <div>
      <ul>
        {props.allGoals.map((g) => (
          <li key={g.goal}>
            <span>
              My goal is to {g.goal} by {g.by}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const [allGoals, updateAllGoals] = React.useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div>
      <Goalform onAdd={addGoal} />
      <ListofGoals allGoals={allGoals} />
    </div>
  );
}
