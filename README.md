# Google Apps Script Helper

A project for managing and automating Google Apps Script development using clasp. This tool streamlines the development workflow for Google Apps Script projects with automated deployment and development tools integration.

## Features

- JavaScript/TypeScript support for Google Apps Script development
- Automated project management with clasp
- Watch mode for real-time development
- ESLint and Prettier integration for code quality
- Utility scripts for common operations
- Environment-based configuration
- Advanced clasp features support

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- Google Account with Apps Script API enabled
- Google Cloud Project with OAuth 2.0 credentials (for advanced features)

## Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd helper
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment template and configure your settings:
```bash
cp .env.template .env
```

4. Configure your environment variables in `.env`:

```env
# Required Settings
SCRIPT_ID=your_script_id_here
PROJECT_NAME=your_project_name_here

# OAuth 2.0 Client Settings (for advanced features)
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REFRESH_TOKEN=your_refresh_token_here

# Optional Settings
DEPLOYMENT_ID=your_deployment_id_here
VERSION=head
SPREADSHEET_ID=your_spreadsheet_id_here
FOLDER_ID=your_drive_folder_id_here

# Development Settings
DEBUG=true
LOG_LEVEL=debug|info|warn|error
```

## Available Scripts

- `npm run push` - Push changes to Google Apps Script
- `npm run pull` - Pull latest changes from Google Apps Script
- `npm run open` - Open project in Google Apps Script editor
- `npm run status` - Check project status
- `npm run watch` - Watch for changes and auto-push
- `npm run create` - Create a new Google Apps Script project
- `npm run clone` - Clone an existing Google Apps Script project

## Project Structure

```
├── GAS/                # Google Apps Script files
│   └── .claspignore   # Clasp ignore patterns (*.js, *.gs, appsscript.json)
│   └── appsscript.json # Google Apps Script project configuration
├── utils/             # Utility functions
│   ├── ref/          # Reference files
│   └── npm-tools.js  # NPM tooling scripts
├── .env.template      # Environment variables template
├── .eslintrc.json    # ESLint configuration
├── package.json      # Project dependencies and scripts
└── .gitignore       # Git ignore patterns
├── .cursorrules     # Cursor rules
```

## Development

This project provides an enhanced development experience with Google Apps Script. The development workflow is streamlined with:

- ESLint for code linting
- Prettier for code formatting
- Clasp for Google Apps Script integration

### Configuration Files

- `.env`: Contains environment-specific configuration
- `.claspignore`: Specifies which files should be included in clasp pushes
- `.eslintrc.json`: ESLint rules for code quality
- `package.json`: Project dependencies and npm scripts

### Getting Started with Development

1. Enable the Google Apps Script API in your Google Cloud Console
2. Set up OAuth 2.0 credentials if using advanced features
3. Configure your `.env` file with the necessary credentials
4. Run `npm run create` to start a new project or `npm run clone` to clone an existing one
5. Use `npm run watch` during development for automatic pushes

### Best Practices

- Keep sensitive information in `.env` (not in version control)
- Follow the ESLint rules for consistent code style
- Commit regularly and use meaningful commit messages

## Troubleshooting

Common issues and solutions:

- **Authentication Errors**: Ensure your OAuth credentials are correctly set in `.env`
- **Push/Pull Failures**: Verify your `SCRIPT_ID` and permissions

## License

MIT

## Author

Michael Stansky

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
