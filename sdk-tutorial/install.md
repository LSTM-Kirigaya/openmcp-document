# Installation

Currently, openmcp-sdk only supports esm builds. Therefore, before installation, please set up an esm development environment first:

```bash
mkdir clever-agent && cd clever-agent
npm init -y
npm install typescript tsx @types/node --save-dev
tsc --init
```

Remember to set `"type": "module"` in package.json.

Then you can install openmcp-sdk with the following command:

```bash
npm install openmcp-sdk
```

We highly recommend using the tsx tool to run and deploy your agent:

```bash
npx tsx /path/to/agent.ts
```