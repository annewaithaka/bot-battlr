import React from 'react';

// Define a functional component named BotCard
const BotCard = ({ bot, onClick, onDelete }) => (
  <div className="bot-card">  {/* Container for each bot card */}
    
    {/* Display the bot's avatar image */}
    <img src={bot.avatar_url} alt={bot.name} />
    <h3>{bot.name}</h3>
    <p>Health: {bot.health}</p>
    <p>Damage: {bot.damage}</p>
    <p>Armor: {bot.armor}</p>
    <p>Class: {bot.bot_class}</p>
    <p>{bot.catchphrase}</p>
    
    {/* Button to add the bot to the army */}
    {/* Calls the onClick function passed as a prop with the bot object as an argument */}
    <button onClick={() => onClick(bot)}>Add to Army</button>
    
    {/* Button to discharge (remove) the bot */}
    {/* Calls the onDelete function passed as a prop with the bot's ID as an argument */}
    <button onClick={() => onDelete(bot.id)}>Discharge</button>
  </div>
);

export default BotCard;
