import React from 'react'; 
import BotCard from './BotCard'; 

// Define a functional component named YourBotArmy
const YourBotArmy = ({ bots, onRemoveBot }) => (
  <div className="your-bot-army"> {/* Container div for the bot army */}
    
    {/* Map through the list of bots and render a BotCard for each bot */}
    {bots.map(bot => (
      <BotCard
        key={bot.id} // Unique key for each BotCard to help React identify which items have changed
        bot={bot} // Pass the bot object as a prop to BotCard
        onClick={onRemoveBot} // Pass the onRemoveBot function as a prop to BotCard
        onDelete={() => {}} // Pass an empty function for onDelete, as this button is not used in this component
      />
    ))}
  </div>
);

export default YourBotArmy;
