#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const commander_1 = tslib_1.__importDefault(require("commander"));
const functions_1 = tslib_1.__importDefault(require("./lib/functions"));
functions_1.default.checkFiles();
commander_1.default
    .command('list')
    .description('List all snippets')
    .action(functions_1.default.listSnippets);
if (!process.argv.slice(2).length) {
    functions_1.default.listSnippets();
}
commander_1.default.parse(process.argv);
//# sourceMappingURL=app.js.map