import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';

const App = () => {
  const [botCollection, setBotCollection] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [sortCriterion, setSortCriterion] = useState('health');

  useEffect(() => {
    fetch('http://localhost:3001/bots')
      .then(response => response.json())
      .then(data => setBotCollection(data));
  }, []);

  const handleAddBotToArmy = (bot) => {
    if (!botArmy.find(b => b.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const handleRemoveBotFromArmy = (botId) => {
    setBotArmy(botArmy.filter(bot => bot.id !== botId));
  };

  const handleDeleteBot = (botId) => {
    // Make a DELETE request to the backend
    fetch(`http://localhost:3001/bots/${botId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        // Remove the bot from botCollection and botArmy
        setBotCollection(botCollection.filter(bot => bot.id !== botId));
        setBotArmy(botArmy.filter(bot => bot.id !== botId));
      } else {
        console.error('Failed to delete bot');
      }
    })
    .catch(error => {
      console.error('Error deleting bot:', error);
    });
  };

  const handleSort = (criterion) => {
    setSortCriterion(criterion);
  };

  const sortedBotCollection = [...botCollection].sort((a, b) => {
    if (a[sortCriterion] < b[sortCriterion]) return -1;
    if (a[sortCriterion] > b[sortCriterion]) return 1;
    return 0;
  });

  return (
    <div className="app">
      <SortBar onSort={handleSort} />
      <BotCollection
        bots={sortedBotCollection}
        handleAddBotToArmy={handleAddBotToArmy}
        handleDeleteBot={handleDeleteBot}
      />
      <YourBotArmy
        bots={botArmy}
        onRemoveBot={handleRemoveBotFromArmy}
      />
    </div>
  );
};

export default App;
