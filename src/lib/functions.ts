import fs from 'fs';
import path from 'path';

import helper from './helpers';

// Generate the root folder of snippets
const HOME = process.env.HOME ?? '~';
const snippetsRoot = path.join(HOME, '.snips');

const _listSnips = () => {
  try {
    return fs.readdirSync(snippetsRoot);
  } catch {
    helper.error('snippets root folder not found');
    throw new Error('snippets root folder not found');
  }
};

// Function to list snippets from the snips directory
function listSnippets() {
  _listSnips().forEach(item => console.log(item));
}

// Create the snips directory and root
function checkFiles() {
  try {
    fs.mkdirSync(snippetsRoot);
  } catch (e) {
    if (e.code !== 'EEXIST') {
      throw e;
    }
  }
}

export default {
  listSnippets,
  checkFiles,
};
