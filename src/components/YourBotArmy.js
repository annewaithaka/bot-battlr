import React from 'react';
import BotCard from './BotCard';
import './YourBotArmy.css';

const YourBotArmy = ({ bots, onRemoveBot }) => (
  <div className="your-bot-army">
    {bots.map(bot => (
      <BotCard
        key={bot.id}
        bot={bot}
        onClick={() => {}} // No action needed for click
        onDelete={onRemoveBot}
      />
    ))}
  </div>
);

export default YourBotArmy;
