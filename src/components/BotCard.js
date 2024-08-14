import React from 'react'; // Import React for creating components
import './BotCard.css'; // Import CSS file for styling the BotCard component

const BotCard = ({ bot, onClick, onDelete }) => (
  <div className="bot-card" onClick={() => onClick(bot)}>
    {/* Display the bot's avatar image */}
    <img src={bot.avatar_url} alt={bot.name} />
    
    {/* Display the bot's name */}
    <h3>{bot.name}</h3>
    
    {/* Display the bot's health */}
    <p>Health: {bot.health}</p>
    
    {/* Display the bot's damage */}
    <p>Damage: {bot.damage}</p>
    
    {/* Display the bot's armor */}
    <p>Armor: {bot.armor}</p>
    
    {/* Display the bot's class */}
    <p>Class: {bot.bot_class}</p>
    
    {/* Display the bot's catchphrase */}
    <p>{bot.catchphrase}</p>
    
    {/* Button to add the bot to the player's army */}
    {/* Uses e.stopPropagation() to prevent the click event from bubbling up to the parent div */}
    <button onClick={(e) => { e.stopPropagation(); onClick(bot); }}>
      Add to Army
    </button>
    
    {/* Button to delete the bot */}
    {/* Uses e.stopPropagation() to prevent the click event from bubbling up to the parent div */}
    {/* Calls onDelete with the bot's ID to remove it from the backend and frontend */}
    <button 
      className="delete-btn" 
      onClick={(e) => { e.stopPropagation(); onDelete(bot.id); }}
    >
      x
    </button>
  </div>
);

export default BotCard; // Export the BotCard component as the default export
