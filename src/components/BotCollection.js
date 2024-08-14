import React from 'react'; 
import BotCard from './BotCard'; 

// Define a functional component named BotCollection
const BotCollection = ({ bots, handleAddBotToArmy, handleDeleteBot }) => (
  <div className="bot-collection"> {/* Container div for the collection of bot cards */}
    
    {/* Map through the list of bots and render a BotCard for each bot */}
    {bots.map(bot => (
      <BotCard
        key={bot.id} // Unique key for each BotCard to help React identify which items have changed
        bot={bot} // Pass the bot object as a prop to BotCard
        onClick={handleAddBotToArmy} // Pass the onAddBot function as a prop to BotCard
        onDelete={handleDeleteBot} // Pass the onDeleteBot function as a prop to BotCard
      />
    ))}
  </div>
);

export default BotCollection;
