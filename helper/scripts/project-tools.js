#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

// Path to local clasp installation
const clasp = path.join(__dirname, '../node_modules/.bin/clasp');
// Path to apps-script directory (relative to project root)
const appsScriptDir = path.join(__dirname, '../../apps-script');

// Ensure we're working with absolute paths
const projectRoot = path.join(__dirname, '../..');

const commands = {
  push: () => {
    console.log(chalk.blue('Pushing changes to Google Apps Script...'));
    process.chdir(projectRoot); // Ensure we're in the right directory
    execSync(`${clasp} push`, { stdio: 'inherit' });
  },
  
  pull: () => {
    console.log(chalk.blue('Pulling latest changes from Google Apps Script...'));
    process.chdir(projectRoot);
    execSync(`${clasp} pull`, { stdio: 'inherit' });
  },
  
  open: () => {
    console.log(chalk.blue('Opening project in Google Apps Script editor...'));
    process.chdir(projectRoot);
    execSync(`${clasp} open`, { stdio: 'inherit' });
  },
  
  status: () => {
    console.log(chalk.blue('Checking project status...'));
    process.chdir(projectRoot);
    execSync(`${clasp} status`, { stdio: 'inherit' });
  },
  
  watch: () => {
    console.log(chalk.blue('Watching for changes...'));
    process.chdir(projectRoot);
    execSync(`${clasp} push --watch`, { stdio: 'inherit' });
  },

  create: () => {
    console.log(chalk.blue('Creating new Google Apps Script project...'));
    // Ensure apps-script directory exists
    if (!fs.existsSync(appsScriptDir)) {
      fs.mkdirSync(appsScriptDir, { recursive: true });
    }
    
    process.chdir(projectRoot);
    // Always set rootDir to apps-script
    const args = process.argv.slice(3);
    const rootDirArg = `--rootDir ./apps-script`;
    const finalArgs = [...args, rootDirArg].join(' ');
    
    try {
      execSync(`${clasp} create ${finalArgs}`, { stdio: 'inherit' });
      
      // Move .clasp.json to project root if it was created in apps-script
      if (fs.existsSync(path.join(appsScriptDir, '.clasp.json'))) {
        fs.renameSync(
          path.join(appsScriptDir, '.clasp.json'),
          path.join(projectRoot, '.clasp.json')
        );
      }
      console.log(chalk.green('✓ Project created successfully'));
    } catch (error) {
      console.error(chalk.red('✗ Failed to create project'), error);
      process.exit(1);
    }
  },

  clone: () => {
    console.log(chalk.blue('Cloning Google Apps Script project...'));
    // Ensure apps-script directory exists
    if (!fs.existsSync(appsScriptDir)) {
      fs.mkdirSync(appsScriptDir, { recursive: true });
    }
    
    process.chdir(projectRoot);
    // Always set rootDir to apps-script
    const args = process.argv.slice(3);
    const rootDirArg = `--rootDir ./apps-script`;
    const finalArgs = [...args, rootDirArg].join(' ');
    
    try {
      execSync(`${clasp} clone ${finalArgs}`, { stdio: 'inherit' });
      
      // Move .clasp.json to project root if it was created in apps-script
      if (fs.existsSync(path.join(appsScriptDir, '.clasp.json'))) {
        fs.renameSync(
          path.join(appsScriptDir, '.clasp.json'),
          path.join(projectRoot, '.clasp.json')
        );
      }
      console.log(chalk.green('✓ Project cloned successfully'));
    } catch (error) {
      console.error(chalk.red('✗ Failed to clone project'), error);
      process.exit(1);
    }
  }
};

const command = process.argv[2];

if (commands[command]) {
  commands[command]();
} else {
  console.log(chalk.yellow('Available commands:'));
  console.log(chalk.cyan('- push:   ') + 'Push changes to Google Apps Script');
  console.log(chalk.cyan('- pull:   ') + 'Pull latest changes from Google Apps Script');
  console.log(chalk.cyan('- open:   ') + 'Open project in Google Apps Script editor');
  console.log(chalk.cyan('- status: ') + 'Check project status');
  console.log(chalk.cyan('- watch:  ') + 'Watch for changes and push automatically');
  console.log(chalk.cyan('- create: ') + 'Create new project (with optional args)');
  console.log(chalk.cyan('- clone:  ') + 'Clone existing project (requires scriptId)');
} 