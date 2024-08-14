import React from 'react';
import BotCard from './BotCard';
import './BotCollection.css';

const BotCollection = ({ bots, handleAddBotToArmy, handleDeleteBot }) => (
  <div className="bot-collection">
    {bots.map(bot => (
      <BotCard
        key={bot.id}
        bot={bot}
        onClick={handleAddBotToArmy}
        onDelete={handleDeleteBot}
      />
    ))}
  </div>
);

export default BotCollection;
