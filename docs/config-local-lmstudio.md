# Integrating LM Studio with Zaplead

Quickly set up LM Studio with Zaplead to run local and open LLMs on your computer for enhanced privacy and control over AI interactions.

## Video Tutorial

For a visual step-by-step guide, watch our [YouTube tutorial](https://www.youtube.com/watch?v=MqXzxVokMDk).

[![Running Zaplead locally with LM Studio YouTube Tutorial](http://img.youtube.com/vi/MqXzxVokMDk/0.jpg)](http://www.youtube.com/watch?v=MqXzxVokMDk "Running Zaplead locally with LM Studio")


## Quick Setup Guide

### Installing Zaplead

Clone and set up Zaplead:

```bash
git clone https://github.com/alphabaseOfficial/Zaplead && cd Zaplead
npm install # Or: yarn install
npm run dev # Or: yarn dev
# If missing dependencies:
npm install @mui/material # Or: yarn add @mui/material
```

### Configuring LM Studio

Ensure LM Studio is running (default: [http://localhost:1234](http://localhost:1234)).
Check the URL and modify if different.
1. Download local models in LM Studio
2. Start the LM Studio server
3. Optionally. Check the logs

### Integration in Zaplead

1. In Zaplead, navigate to **Models** > **Add** > **LM Studio**
2. Enter the API URL: `http://localhost:1234` (modify if different)
3. Refresh by clicking on the `Models` button to load models from LM Studio

In addition to using the UI, configuration can also be done using
[environment variables](environment-variables.md).

## Troubleshooting

- **Missing @mui/material**: Execute `npm install @mui/material` or `yarn add @mui/material`
- **Connection Issues**: Check LM Studio's URL and ensure it's operational


## Further Assistance

Advanced configurations and more:

- Zaplead Community: [Discord](https://discord.gg/MkH4qj2Jp9)
- LM Studio: [LM Studio home page](https://lmstudio.ai/)
