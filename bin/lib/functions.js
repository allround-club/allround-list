"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const helpers_1 = tslib_1.__importDefault(require("./helpers"));
const HOME = (_a = process.env.HOME) !== null && _a !== void 0 ? _a : '~';
const snippetsRoot = path_1.default.join(HOME, '.snips');
const _listSnips = () => {
    try {
        return fs_1.default.readdirSync(snippetsRoot);
    }
    catch (_a) {
        helpers_1.default.error('snippets root folder not found');
        throw new Error('snippets root folder not found');
    }
};
function listSnippets() {
    _listSnips().forEach(item => console.log(item));
}
function checkFiles() {
    try {
        fs_1.default.mkdirSync(snippetsRoot);
    }
    catch (e) {
        if (e.code !== 'EEXIST') {
            throw e;
        }
    }
}
exports.default = {
    listSnippets,
    checkFiles,
};
//# sourceMappingURL=functions.js.map