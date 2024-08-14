import React, { useState, useEffect } from 'react'; // Import React and hooks for state and lifecycle management
import BotCollection from './components/BotCollection'; // Import the BotCollection component to display the list of bots
import YourBotArmy from './components/YourBotArmy'; // Import the YourBotArmy component to display the user's selected bots
import SortBar from './components/SortBar'; // Import the SortBar component to handle sorting of bots

const App = () => {
  // State to store the list of bots available in the collection
  const [botCollection, setBotCollection] = useState([]);

  // State to store the list of bots that are in the player's army
  const [botArmy, setBotArmy] = useState([]);

  // State to store the current sorting criterion (e.g., 'health', 'damage', 'armor')
  const [sortCriterion, setSortCriterion] = useState('health');

  // useEffect hook to fetch the list of bots when the component mounts
  useEffect(() => {
    fetch('http://localhost:3001/bots') // Fetch the bots from the specified API endpoint
      .then(response => response.json()) // Parse the JSON from the response
      .then(data => setBotCollection(data)); // Update the botCollection state with the fetched data
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // Function to add a bot to the player's army
  const handleAddBotToArmy = (bot) => {
    // Check if the bot is not already in the army
    if (!botArmy.find(b => b.id === bot.id)) {
      // Add the bot to the army if it's not already present
      setBotArmy([...botArmy, bot]);
    }
  };

  // Function to remove a bot from the player's army by its ID
  const handleRemoveBotFromArmy = (botId) => {
    // Filter out the bot with the given ID from the botArmy
    setBotArmy(botArmy.filter(bot => bot.id !== botId));
  };

  // Function to delete a bot both from the backend and the frontend
  const handleDeleteBot = (botId) => {
    // Make a DELETE request to the backend to remove the bot
    fetch(`http://localhost:3001/bots/${botId}`, {
      method: 'DELETE', // HTTP method for deletion
    })
    .then(response => {
      if (response.ok) {
        // Remove the bot from botCollection and botArmy on successful deletion
        setBotCollection(botCollection.filter(bot => bot.id !== botId));
        setBotArmy(botArmy.filter(bot => bot.id !== botId));
      } else {
        console.error('Failed to delete bot'); // Log an error if the request fails
      }
    })
    .catch(error => {
      console.error('Error deleting bot:', error); // Log any errors that occur during the fetch
    });
  };

  // Function to handle sorting of bots based on the selected criterion
  const handleSort = (criterion) => {
    setSortCriterion(criterion); // Update the sortCriterion state
  };

  // Sort the bot collection based on the current sort criterion
  const sortedBotCollection = [...botCollection].sort((a, b) => {
    if (a[sortCriterion] < b[sortCriterion]) return -1;
    if (a[sortCriterion] > b[sortCriterion]) return 1;
    return 0;
  });

  return (
    <div className="app">
      <SortBar onSort={handleSort} /> {/* Render the SortBar component with the handleSort function */}
      <BotCollection
        bots={sortedBotCollection} // Pass the sorted list of bots to BotCollection
        handleAddBotToArmy={handleAddBotToArmy} // Pass the function to add bots to the army
        handleDeleteBot={handleDeleteBot} // Pass the function to delete bots
      />
      <YourBotArmy
        bots={botArmy} // Pass the list of bots in the army to YourBotArmy
        onRemoveBot={handleRemoveBotFromArmy} // Pass the function to remove bots from the army
      />
    </div>
  );
};

export default App; // Export the App component as the default export
