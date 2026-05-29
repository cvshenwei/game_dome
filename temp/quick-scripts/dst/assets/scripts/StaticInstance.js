
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/StaticInstance.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1N0YXRpY0luc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0lBQUE7SUFnQkEsQ0FBQztJQVhVLDJCQUFZLEdBQW5CLFVBQW9CLE9BQWtCO1FBQ2xDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSw2QkFBYyxHQUFyQixVQUFzQixPQUFvQjtRQUN0QyxjQUFjLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQTtJQUN4QyxDQUFDO0lBRU0sNkJBQWMsR0FBckIsVUFBc0IsT0FBb0I7UUFDdEMsY0FBYyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUE7SUFDeEMsQ0FBQztJQWRNLHdCQUFTLEdBQTBCLFNBQVMsQ0FBQztJQUM3QywwQkFBVyxHQUE0QixTQUFTLENBQUM7SUFDakQsMEJBQVcsR0FBNEIsU0FBUyxDQUFDO0lBYTVELHFCQUFDO0NBaEJELEFBZ0JDLElBQUE7QUFoQlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9tYW5hZ2VyL0dhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4vbWFuYWdlci9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IEZhZGVNYW5hZ2VyIGZyb20gXCIuL21hbmFnZXIvRmFkZU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0aWNJbnN0YW5jZSB7XHJcbiAgICBzdGF0aWMgdWlNYW5hZ2VyOiBVSU1hbmFnZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICBzdGF0aWMgZ2FtZU1hbmFnZXI6IEdhbWVNYW5hZ2VyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gICAgc3RhdGljIGZhZGVNYW5hZ2VyOiBGYWRlTWFuYWdlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBzdGF0aWMgc2V0VUlNYW5hZ2VyKGNvbnRleHQ6IFVJTWFuYWdlcikge1xyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlciA9IGNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEdhbWVNYW5hZ2VyKGNvbnRleHQ6IEdhbWVNYW5hZ2VyKSB7XHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UuZ2FtZU1hbmFnZXIgPSBjb250ZXh0XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEZhZGVNYW5hZ2VyKGNvbnRleHQ6IEZhZGVNYW5hZ2VyKSB7XHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UuZmFkZU1hbmFnZXIgPSBjb250ZXh0XHJcbiAgICB9XHJcbn0iXX0=