import React from 'react'; // Import React for creating components
import BotCard from './BotCard'; // Import the BotCard component to render individual bots
import './YourBotArmy.css'; // Import CSS file for styling the YourBotArmy component

const YourBotArmy = ({ bots, onRemoveBot }) => (
  <div className="your-bot-army"> {/* Container for displaying the user's bot army */}
    {bots.map(bot => (
      <BotCard
        key={bot.id} // Unique key for each BotCard to help React identify which items have changed
        bot={bot} // Pass the bot object as a prop to BotCard
        onClick={() => {}} // No action needed when clicking on a bot in YourBotArmy
        onDelete={onRemoveBot} // Pass the function to handle removing the bot from the army
      />
    ))}
  </div>
);

export default YourBotArmy; // Export the YourBotArmy component as the default export
