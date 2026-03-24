import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3004;

app.use(bodyParser.json());

// Health check
app.get('/', (req, res) => {
  res.send({ status: 'ok', service: 'console-ninja-mcp-server' });
});

// Console Ninja event ingest from browser/extension
app.post('/log', (req, res) => {
  const payload = req.body;
  console.log('[console-ninja] event received:', JSON.stringify(payload));
  res.json({ received: true, payload });
});

// Optional more advanced endpoint
app.post('/error', (req, res) => {
  const event = req.body;
  console.error('[console-ninja] error event:', JSON.stringify(event));
  res.json({ received: true });
});

app.listen(port, () => {
  console.log(`Console Ninja MCP server running at http://localhost:${port}`);
});
