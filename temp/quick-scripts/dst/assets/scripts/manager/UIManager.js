
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8b44067ShG7IzfSj2CqGMD', 'UIManager');
// scripts/manager/UIManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Enum_1 = require("./../Enum");
var StaticInstance_1 = require("./../StaticInstance");
var PoolManager_1 = require("./PoolManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiMap = new Map();
        return _this;
    }
    UIManager.prototype.onLoad = function () {
        StaticInstance_1.StaticInstance.setUIManager(this);
    };
    UIManager.prototype.init = function () {
        for (var type in Enum_1.ENUM_UI_TYPE) {
            var node = PoolManager_1.default.instance.getNode(Enum_1.ENUM_UI_TYPE[type], this.node);
            if (node && !this.uiMap.has(Enum_1.ENUM_UI_TYPE[type])) {
                node.active = false;
                node.addComponent(Enum_1.ENUM_UI_TYPE[type]);
                this.uiMap.set(Enum_1.ENUM_UI_TYPE[type], node.getComponent(Enum_1.ENUM_UI_TYPE[type]));
            }
        }
    };
    //切换页面
    UIManager.prototype.toggle = function (key, status, param, callback) {
        if (status === void 0) { status = true; }
        if (this.uiMap.has(key)) {
            var layer = this.uiMap.get(key);
            status ? layer.show(param) : layer.hide();
            callback && callback();
        }
    };
    UIManager.prototype.isActive = function (key) {
        if (this.uiMap.has(key)) {
            return this.uiMap.get(key).node.active;
        }
        return false;
    };
    UIManager.prototype.getActiveTypes = function () {
        var _this = this;
        var types = [];
        this.uiMap.forEach(function (layer, type) {
            if (_this.isActive(type))
                types.push(type);
        });
        return types;
    };
    UIManager.prototype.setMainLevel = function () {
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        layer === null || layer === void 0 ? void 0 : layer.rendorLevel();
    };
    UIManager.prototype.setMainTimer = function (status) {
        if (status === void 0) { status = true; }
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        if (status) {
            layer === null || layer === void 0 ? void 0 : layer.onTimerStart();
        }
        else {
            layer === null || layer === void 0 ? void 0 : layer.onTimerStop();
        }
    };
    UIManager.prototype.setMainPauseTimer = function (time) {
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        layer === null || layer === void 0 ? void 0 : layer.onTimerPause(time);
    };
    UIManager.prototype.setMainTimerSound = function (status) {
        if (status === void 0) { status = true; }
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        if (status) {
            layer === null || layer === void 0 ? void 0 : layer.onTimerSoundStart();
        }
        else {
            layer === null || layer === void 0 ? void 0 : layer.onTimerSoundStop();
        }
    };
    UIManager.prototype.setMainProgress = function (isInit) {
        if (isInit === void 0) { isInit = false; }
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        layer === null || layer === void 0 ? void 0 : layer.onProgressStart(isInit);
    };
    UIManager.prototype.setMainPowerCollect = function (isInit) {
        if (isInit === void 0) { isInit = false; }
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        layer === null || layer === void 0 ? void 0 : layer.rendorStarCollect();
    };
    UIManager.prototype.getMainLayer = function () {
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        return layer;
    };
    UIManager = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXIvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGtDQUF5QztBQUN6QyxzREFBcUQ7QUFFckQsNkNBQXdDO0FBR2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBc0ZDO1FBcEZXLFdBQUssR0FBRyxJQUFJLEdBQUcsRUFBNEIsQ0FBQTs7SUFvRnZELENBQUM7SUFsRmEsMEJBQU0sR0FBaEI7UUFDSSwrQkFBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsd0JBQUksR0FBSjtRQUNJLEtBQUssSUFBSSxJQUFJLElBQUksbUJBQVksRUFBRTtZQUMzQixJQUFNLElBQUksR0FBWSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsbUJBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakYsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtnQkFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsbUJBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQzVFO1NBQ0o7SUFDTCxDQUFDO0lBRUQsTUFBTTtJQUNOLDBCQUFNLEdBQU4sVUFBTyxHQUFpQixF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Q0FBQyxNQUFNLEVBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFtQixHQUFuQixVQUFvQixNQUF1QjtRQUF2Qix1QkFBQSxFQUFBLGNBQXVCO1FBQ3ZDLElBQU0sS0FBSyxHQUFjLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFZLENBQUMsSUFBSSxDQUFjLENBQUE7UUFDdkUsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGlCQUFpQixHQUFFO0lBQzlCLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksSUFBTSxLQUFLLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsbUJBQVksQ0FBQyxJQUFJLENBQWMsQ0FBQTtRQUN2RSxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBcEZnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBc0Y3QjtJQUFELGdCQUFDO0NBdEZELEFBc0ZDLENBdEZzQyxFQUFFLENBQUMsU0FBUyxHQXNGbEQ7a0JBdEZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgeyBFTlVNX1VJX1RZUEUgfSBmcm9tICcuLy4uL0VudW0nO1xyXG5pbXBvcnQgeyBTdGF0aWNJbnN0YW5jZSB9IGZyb20gJy4vLi4vU3RhdGljSW5zdGFuY2UnO1xyXG5pbXBvcnQgQmFzZURpYWxvZyBmcm9tICcuLi9sYXllci9CYXNlRGlhbG9nJztcclxuaW1wb3J0IFBvb2xNYW5hZ2VyIGZyb20gJy4vUG9vbE1hbmFnZXInO1xyXG5pbXBvcnQgTWFpbkxheWVyIGZyb20gJy4uL2xheWVyL01haW5MYXllcic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHVpTWFwID0gbmV3IE1hcDxFTlVNX1VJX1RZUEUsIEJhc2VEaWFsb2c+KClcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnNldFVJTWFuYWdlcih0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdHlwZSBpbiBFTlVNX1VJX1RZUEUpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZTogY2MuTm9kZSA9IFBvb2xNYW5hZ2VyLmluc3RhbmNlLmdldE5vZGUoRU5VTV9VSV9UWVBFW3R5cGVdLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIGlmIChub2RlICYmICF0aGlzLnVpTWFwLmhhcyhFTlVNX1VJX1RZUEVbdHlwZV0pKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBub2RlLmFkZENvbXBvbmVudChFTlVNX1VJX1RZUEVbdHlwZV0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpTWFwLnNldChFTlVNX1VJX1RZUEVbdHlwZV0sIG5vZGUuZ2V0Q29tcG9uZW50KEVOVU1fVUlfVFlQRVt0eXBlXSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/liIfmjaLpobXpnaJcclxuICAgIHRvZ2dsZShrZXk6IEVOVU1fVUlfVFlQRSwgc3RhdHVzOiBib29sZWFuID0gdHJ1ZSxwYXJhbT8sY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudWlNYXAuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLnVpTWFwLmdldChrZXkpXHJcbiAgICAgICAgICAgIHN0YXR1cyA/IGxheWVyLnNob3cocGFyYW0pIDogbGF5ZXIuaGlkZSgpXHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNBY3RpdmUoa2V5OiBFTlVNX1VJX1RZUEUpIHtcclxuICAgICAgICBpZiAodGhpcy51aU1hcC5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51aU1hcC5nZXQoa2V5KS5ub2RlLmFjdGl2ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmVUeXBlcygpIHtcclxuICAgICAgICBjb25zdCB0eXBlczogRU5VTV9VSV9UWVBFW10gPSBbXVxyXG4gICAgICAgIHRoaXMudWlNYXAuZm9yRWFjaCgobGF5ZXI6IEJhc2VEaWFsb2csIHR5cGU6IEVOVU1fVUlfVFlQRSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSh0eXBlKSkgdHlwZXMucHVzaCh0eXBlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHR5cGVzXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFpbkxldmVsKCkge1xyXG4gICAgICAgIGNvbnN0IGxheWVyOiBNYWluTGF5ZXIgPSB0aGlzLnVpTWFwLmdldChFTlVNX1VJX1RZUEUuTUFJTikgYXMgTWFpbkxheWVyXHJcbiAgICAgICAgbGF5ZXI/LnJlbmRvckxldmVsKClcclxuICAgIH1cclxuXHJcbiAgICBzZXRNYWluVGltZXIoc3RhdHVzOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGxheWVyOiBNYWluTGF5ZXIgPSB0aGlzLnVpTWFwLmdldChFTlVNX1VJX1RZUEUuTUFJTikgYXMgTWFpbkxheWVyXHJcbiAgICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgICAgICBsYXllcj8ub25UaW1lclN0YXJ0KClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsYXllcj8ub25UaW1lclN0b3AoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRNYWluUGF1c2VUaW1lcih0aW1lOm51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGxheWVyOiBNYWluTGF5ZXIgPSB0aGlzLnVpTWFwLmdldChFTlVNX1VJX1RZUEUuTUFJTikgYXMgTWFpbkxheWVyO1xyXG4gICAgICAgIGxheWVyPy5vblRpbWVyUGF1c2UodGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFpblRpbWVyU291bmQoc3RhdHVzOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGxheWVyOiBNYWluTGF5ZXIgPSB0aGlzLnVpTWFwLmdldChFTlVNX1VJX1RZUEUuTUFJTikgYXMgTWFpbkxheWVyXHJcbiAgICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgICAgICBsYXllcj8ub25UaW1lclNvdW5kU3RhcnQoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxheWVyPy5vblRpbWVyU291bmRTdG9wKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFpblByb2dyZXNzKGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgbGF5ZXI6IE1haW5MYXllciA9IHRoaXMudWlNYXAuZ2V0KEVOVU1fVUlfVFlQRS5NQUlOKSBhcyBNYWluTGF5ZXJcclxuICAgICAgICBsYXllcj8ub25Qcm9ncmVzc1N0YXJ0KGlzSW5pdClcclxuICAgIH1cclxuXHJcbiAgICBzZXRNYWluUG93ZXJDb2xsZWN0KGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgbGF5ZXI6IE1haW5MYXllciA9IHRoaXMudWlNYXAuZ2V0KEVOVU1fVUlfVFlQRS5NQUlOKSBhcyBNYWluTGF5ZXJcclxuICAgICAgICBsYXllcj8ucmVuZG9yU3RhckNvbGxlY3QoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1haW5MYXllcigpIHtcclxuICAgICAgICBjb25zdCBsYXllcjogTWFpbkxheWVyID0gdGhpcy51aU1hcC5nZXQoRU5VTV9VSV9UWVBFLk1BSU4pIGFzIE1haW5MYXllclxyXG4gICAgICAgIHJldHVybiBsYXllcjtcclxuICAgIH1cclxuXHJcbn1cclxuIl19