# Bot Management App

## Overview

This is a React-based application for managing a collection of bots. Users can view bots in a collection, sort them based on attributes (Health, Damage, Armor), and add them to their army. The application also allows users to permanently remove a bot from both their army and the bot collection.

## Features

- **View Bot Collection:** Display a list of bots with their details.
- **Sort Bots:** Sort bots based on Health, Damage, or Armor.
- **Add to Army:** Click on a bot to add it to your army.
- **Discharge from Army:** Remove a bot from your army, which also deletes it permanently from the backend.
- **Backend Integration:** Perform CRUD operations with a backend API to manage bots.

## Technologies Used

- React
- CSS
- Fetch API
- Node.js (for the backend API, if applicable)

## Setup

### Prerequisites

- Node.js and npm (or Yarn) installed on your machine.
- A backend server running at `http://localhost:3001/bots` with endpoints for fetching, adding, and deleting bots.

### Installation

**Clone the repository**
**Install dependencies**
**Start the development server**

## Usage
View and Sort Bots:

The BotCollection component displays a list of bots fetched from the backend.
Use the SortBar component to sort the bots based on Health, Damage, or Armor.
Add Bots to Your Army:

Click on a bot card to add it to your army. The bot will appear in the YourBotArmy component.
Discharge Bots:

Click the red "x" button on a bot card in the YourBotArmy component to permanently remove the bot from both the army and the backend.

## Backend API
Ensure you have a backend server running that supports the following endpoints:

GET /bots: Retrieve a list of all bots.
DELETE /bots/:id: Permanently delete a bot by its ID.

## Contributing
Fork the repository.
Clone.
Make changes.
Commit changes
Push to Github
Pull the requests.


