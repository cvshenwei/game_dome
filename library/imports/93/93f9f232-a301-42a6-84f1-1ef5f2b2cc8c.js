"use strict";
cc._RF.push(module, '93f9fIyowFCpoTxHvXyssyM', 'StaticInstance');
// scripts/StaticInstance.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticInstance = void 0;
var StaticInstance = /** @class */ (function () {
    function StaticInstance() {
    }
    StaticInstance.setUIManager = function (context) {
        StaticInstance.uiManager = context;
    };
    StaticInstance.setGameManager = function (context) {
        StaticInstance.gameManager = context;
    };
    StaticInstance.setFadeManager = function (context) {
        StaticInstance.fadeManager = context;
    };
    StaticInstance.uiManager = undefined;
    StaticInstance.gameManager = undefined;
    StaticInstance.fadeManager = undefined;
    return StaticInstance;
}());
exports.StaticInstance = StaticInstance;

cc._RF.pop();