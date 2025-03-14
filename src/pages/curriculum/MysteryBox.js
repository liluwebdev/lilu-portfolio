import React, { useState } from 'react';

const clues = [
  { clue: "A punch card", icon: "bi bi-table", represents: "ENIAC", description: "Punch cards were used to program early computers like ENIAC." },
  { clue: "A floppy disk", icon: "fas fa-save", represents: "Early Data Storage", description: "Floppy disks were one of the earliest portable data storage devices." },
  { clue: "A robot toy", icon: "fas fa-robot", represents: "Robotics Programming", description: "Represents advancements in automation and AI." },
  { clue: "A book with 'Poetical Science' on it", icon: "bi bi-book", represents: "Ada Lovelace", description: "Refers to Ada Lovelace’s unique approach to blending creativity and logic." },
  { clue: "A small gear", icon: "fas fa-cogs", represents: "Analytical Engine", description: "The Analytical Engine used mechanical gears for calculations." },
  { clue: "A magnifying glass", icon: "bi bi-search", represents: "The Tech Detective Presentation", description: "Links to problem-solving and investigating computing’s impact." },
  { clue: "A light bulb", icon: "fas fa-lightbulb", represents: "Alan Turing", description: "Represents innovation and problem-solving in codebreaking." },
  { clue: "A moth cut-out", icon: "fas fa-bug", represents: "Grace Hopper’s Bug", description: "Refers to Hopper’s famous discovery of the first computer 'bug'." },
  { clue: "A mouse", icon: "bi bi-mouse", represents: "Macintosh (1984)", description: "The Macintosh popularized the mouse as part of its GUI interface." },
  { clue: "A globe", icon: "fas fa-globe", represents: "World Wide Web", description: "Represents the internet's role in global communication." }
];

const MysteryBox = () => {
  const getRandomClue = () => clues[Math.floor(Math.random() * clues.length)];
  
  const [randomClue, setRandomClue] = useState(getRandomClue);

  const handleNewClue = () => {
    let newClue;
    do {
      newClue = getRandomClue();
    } while (newClue.clue === randomClue.clue);  // Prevent same clue repeating
    setRandomClue(newClue);
  };

  return (
    <div style={styles.container}>
      <h1>Invention Mystery Box</h1>
      <div style={styles.box}>
        <i className={randomClue.icon} style={styles.icon}></i>
        <h2>{randomClue.clue}</h2>
        <p><strong>Represents:</strong> {randomClue.represents}</p>
        <p><strong>Description:</strong> {randomClue.description}</p>
      </div>

      <button onClick={handleNewClue} style={styles.button}>
        Show Another Clue
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  box: {
    backgroundColor: '#f3f4f6',
    border: '2px solid #4a90e2',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  icon: {
    fontSize: '50px',
    color: '#4a90e2',
    marginBottom: '10px'
  },
  button: {
    backgroundColor: '#4a90e2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '15px'
  }
};

export default MysteryBox;
