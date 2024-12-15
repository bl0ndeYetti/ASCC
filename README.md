# Google Apps Script Project Template

A template for Google Apps Script projects with local development support using [clasp](https://github.com/google/clasp/tree/master) and [cursor](https://docs.cursor.com/getting-started/introduction).

## Project Structure

```
.
├── apps-script/         # Google Apps Script files (synced with Google)
│   └── appsscript.json # Apps Script manifest
├── helper/             # Development tools and scripts
│   ├── scripts/        # Helper scripts
│   ├── .env.template   # Environment variables template
│   └── package.json    # Development dependencies
├── .claspignore       # Files to ignore when pushing to Google Apps Script
├── .eslintrc.json     # ESLint configuration
└── .prettierrc        # Prettier configuration
```

## Setup

1. Install dependencies in helper directory:

   ```bash
   cd helper
   npm install
   ```

2. Login to clasp (only needed once):

   ```bash
   npx clasp login
   ```

3. Create or clone a Google Apps Script project:

   ```bash
   # Create new project
   cd helper
   npm run create -- --type standalone --title "My Script"

   # Or clone existing project
   cd helper
   npm run clone -- <scriptId>
   ```

4. Set up environment variables:
   ```bash
   cd helper
   cp .env.template .env
   ```
   Then edit `.env` with your project-specific values.

## Development

All commands should be run from the helper directory:

```bash
cd helper
npm run push    # Push changes to Google Apps Script
npm run pull    # Pull latest changes from Google Apps Script
npm run open    # Open project in Google Apps Script editor
npm run status  # Check project status
npm run watch   # Watch for changes and push automatically
```

### Code Quality Tools

```bash
npm run lint    # Run ESLint
npm run format  # Run Prettier
```

## Environment Variables

The following environment variables can be set in `helper/.env`:

- `SCRIPT_ID`: Your Google Apps Script project ID
- `PROJECT_NAME`: Name of your project
- `DEPLOYMENT_ID`: (Optional) Deployment ID for versioned deployments
- `DEBUG`: (Optional) Enable debug mode
- `LOG_LEVEL`: (Optional) Set logging level (debug|info|warn|error)

See `helper/.env.template` for all available options.

## Project Organization

### `/apps-script` Directory

This directory contains all files that will be synced with Google Apps Script:

- `.gs` or `.js` files containing your Google Apps Script code
- `appsscript.json` manifest file

### `/helper` Directory

Contains all development tools and scripts:

- Node.js dependencies
- Development scripts
- Environment configuration

### Root Directory

Contains project-wide configuration files:

- TypeScript configuration
- ESLint configuration
- Prettier configuration
- Clasp configuration

## Notes

- All Google Apps Script files must be in the `/apps-script` directory
- Helper files and node packages must stay in the `/helper` directory
- The project is set up for Google Apps Script editor compatibility
- TypeScript, ESLint, and Prettier configurations are in the root directory but only apply to files in `/apps-script`
