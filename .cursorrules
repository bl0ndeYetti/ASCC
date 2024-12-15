# RULES

This project is a Google Apps Script project with TypeScript support. The project is structured as follows:

- `/apps-script` directory contains all files that will be synced with Google Apps Script
- `/helper` directory contains development tools and scripts
- Root directory contains configuration files

## Project Rules

1. All Google Apps Script files must be in the `/apps-script` directory
2. Helper files and node packages must stay in the `/helper` directory
3. No node packages should be installed in the root directory
4. Configuration files (.eslintrc.json, .prettierrc, tsconfig.json) stay in root
5. All primary project files must be compatible with the Google Apps Script editor

## Configuration Files

1. `.claspignore`: Controls which files are pushed to Google Apps Script
2. `tsconfig.json`: TypeScript configuration (target: ES2019, no modules)
3. `.eslintrc.json`: Linting rules for TypeScript and Google Apps Script
4. `.prettierrc`: Code formatting rules
5. `.env.template`: Template for environment variables

## PROJECT INITIALIZATION

1. Check if clasp is installed:

   ```bash
   cd helper
   npm list @google/clasp
   ```

2. Install dependencies:

   ```bash
   cd helper
   npm install
   ```

3. Check clasp login status:

   ```bash
   npm run status
   ```

4. If not logged in:

   ```bash
   npx clasp login
   ```

5. Set up project:

   - For new project:
     ```bash
     npm run create -- --type standalone --title "My Script"
     ```
   - For existing project:
     ```bash
     npm run clone -- <scriptId>
     ```

6. Set up environment:
   ```bash
   cp .env.template .env
   ```
   Edit `.env` with your project values

## Project Development

1. File Organization:

   - Google Apps Script files (.ts, .js, .gs) go in `/apps-script`
   - Development tools and scripts go in `/helper`
   - Configuration files stay in root directory

2. TypeScript Files:

   - Use `.ts` extension for TypeScript files
   - Files must export global functions (no modules)
   - Use Google Apps Script types (e.g., `GoogleAppsScript.Spreadsheet.Sheet`)
   - Add JSDoc comments for function documentation

3. Development Commands (run from helper directory):

   ```bash
   npm run push     # Push changes to Google Apps Script
   npm run pull     # Pull latest changes
   npm run open     # Open in editor
   npm run status   # Check status
   npm run watch    # Watch for changes
   ```

4. Code Quality Tools:
   ```bash
   npm run lint      # Run ESLint
   npm run format    # Run Prettier
   npm run type-check # Check TypeScript
   ```

## Best Practices

1. Use TypeScript for better development experience:

   - Add proper type annotations
   - Use interfaces for complex objects
   - Add JSDoc comments for documentation
   - Use strict mode for better type safety

2. Follow Google Apps Script V8 runtime practices:

   - Use modern JavaScript features (ES2019)
   - Use console.log for debugging
   - Use try/catch for error handling
   - Use proper time zone handling

3. Project Organization:

   - Keep Google Apps Script files in `/apps-script`
   - Use meaningful file names
   - Separate concerns into different files
   - Use proper error handling

4. Environment and Security:

   - Use environment variables for sensitive data
   - Store API keys in Script Properties
   - Use proper OAuth scopes
   - Follow Google's security best practices

5. Development Workflow:
   - Run all commands from `/helper` directory
   - Use version control (git)
   - Test changes locally before pushing
   - Use watch mode for rapid development

## Notes

- The project uses V8 runtime by default
- TypeScript files are automatically converted to JavaScript
- All configuration is set up for Google Apps Script compatibility
- Helper scripts handle clasp operations through npm scripts
- No ES modules support in Google Apps Script
- Global functions are required for Apps Script triggers
