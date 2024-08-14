import React from 'react';
import './BotCard.css'; 

const BotCard = ({ bot, onClick, onDelete }) => (
  <div className="bot-card" onClick={() => onClick(bot)}>
    <img src={bot.avatar_url} alt={bot.name} />
    <h3>{bot.name}</h3>
    <p>Health: {bot.health}</p>
    <p>Damage: {bot.damage}</p>
    <p>Armor: {bot.armor}</p>
    <p>Class: {bot.bot_class}</p>
    <p>{bot.catchphrase}</p>
    <button onClick={(e) => { e.stopPropagation(); onClick(bot); }}>Add to Army</button>
    <button 
      className="delete-btn" 
      onClick={(e) => { e.stopPropagation(); onDelete(bot.id); }}
    >
      x
    </button>
  </div>
);

export default BotCard;
