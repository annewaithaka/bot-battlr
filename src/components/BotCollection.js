import React from 'react'; // Import React for creating components
import BotCard from './BotCard'; // Import the BotCard component to render individual bots
import './BotCollection.css'; // Import CSS file for styling the BotCollection component

const BotCollection = ({ bots, handleAddBotToArmy, handleDeleteBot }) => (
  <div className="bot-collection"> {/* Container for displaying the collection of bot cards */}
    {bots.map(bot => (
      <BotCard
        key={bot.id} // Unique key for each BotCard to help React identify which items have changed
        bot={bot} // Pass the bot object as a prop to BotCard
        onClick={handleAddBotToArmy} // Pass the function to handle adding the bot to the army
        onDelete={handleDeleteBot} // Pass the function to handle deleting the bot
      />
    ))}
  </div>
);

export default BotCollection; // Export the BotCollection component as the default export
