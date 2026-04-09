const express = require('express');
const path = require('path');
const WebSocket = require('ws');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

// WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  console.log("Client connected");
});

// watch files for changes
fs.watch('./src', { recursive: true }, () => {
  console.log("🔄 File changed, reloading...");

  wss.clients.forEach(client => {
    client.send("reload");
  });
});