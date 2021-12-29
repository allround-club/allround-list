#!/usr/bin/env node
import program from 'commander';
import functions from './lib/functions';

// Check for snippetsRoot and snippetsFolder
functions.checkFiles();

program
  .command('list')
  .description('List all snippets')
  .action(functions.listSnippets);

// By default display all the snips
if (!process.argv.slice(2).length) {
  functions.listSnippets();
}

// Parse arguments
program.parse(process.argv);
