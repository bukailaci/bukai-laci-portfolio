# Console Ninja MCP Server

Local MCP server for Console Ninja integration in this Astro project.

## Install

```bash
npm install
npm install express body-parser
```

## Run

```bash
npm run mcp
```

## Endpoints

- GET `/` health check
- POST `/log` payloads from the app/extension
- POST `/error` error events

## Usage

Configure your Console Ninja settings to send events to `http://localhost:3004/log` (or custom port via env `PORT`).
