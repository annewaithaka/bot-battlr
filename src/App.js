import React, { useState, useEffect } from 'react'; 
import BotCollection from './components/BotCollection'; 
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  // State to store the list of bots available in the collection
  const [botCollection, setBotCollection] = useState([]);

  // State to store the list of bots that are in the player's army
  const [botArmy, setBotArmy] = useState([]);

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

  // Function to handle bot deletion, which may include removing it from the collection
  const handleDeleteBot = (botId) => {
    // Handle bot deletion logic if necessary
    // For example, remove the bot from the botCollection state
    setBotCollection(botCollection.filter(bot => bot.id !== botId));
  };

  return (
    <div className="app"> {/* Container for the entire app */}
      {/* Render the BotCollection component, passing down the bots and functions */}
      <BotCollection
        bots={botCollection} // Pass the current bot collection to BotCollection
        onAddBot={handleAddBotToArmy} // Pass the function to add bots to the army
        onDeleteBot={handleDeleteBot} // Pass the function to delete bots from the collection
      />
      {/* Render the YourBotArmy component, passing down the bots in the army and function */}
      <YourBotArmy
        bots={botArmy} // Pass the current bot army to YourBotArmy
        onRemoveBot={handleRemoveBotFromArmy} // Pass the function to remove bots from the army
      />
    </div>
  );
};

export default App; 
