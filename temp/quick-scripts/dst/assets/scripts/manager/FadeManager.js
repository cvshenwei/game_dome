
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/FadeManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00872TxwjFFprih9XF/Yufu', 'FadeManager');
// scripts/manager/FadeManager.ts

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
var StaticInstance_1 = require("../StaticInstance");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FadeManager = /** @class */ (function (_super) {
    __extends(FadeManager, _super);
    function FadeManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeManager.prototype.onLoad = function () {
        this.node.active = false;
        StaticInstance_1.StaticInstance.setFadeManager(this);
    };
    FadeManager.prototype.fadeIn = function (seconds) {
        var _this = this;
        if (seconds === void 0) { seconds = 0.2; }
        return new Promise(function (resolve) {
            _this.node.active = true;
            _this.node.opacity = 0;
            cc.tween(_this.node).to(seconds, { opacity: 255 }).call(function () {
                resolve(null);
            }).start();
        });
    };
    FadeManager.prototype.fadeOut = function (seconds) {
        var _this = this;
        if (seconds === void 0) { seconds = 0.2; }
        return new Promise(function (resolve) {
            _this.node.active = true;
            _this.node.opacity = 255;
            cc.tween(_this.node).to(seconds, { opacity: 0 }).call(function () {
                _this.node.active = false;
                resolve(null);
            }).start();
        });
    };
    FadeManager = __decorate([
        ccclass
    ], FadeManager);
    return FadeManager;
}(cc.Component));
exports.default = FadeManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXIvRmFkZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsb0RBQW1EO0FBRTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEOztJQTBCQSxDQUFDO0lBekJHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDeEIsK0JBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxPQUFxQjtRQUE1QixpQkFRQztRQVJNLHdCQUFBLEVBQUEsYUFBcUI7UUFDeEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtZQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDZCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsT0FBcUI7UUFBN0IsaUJBU0M7UUFUTyx3QkFBQSxFQUFBLGFBQXFCO1FBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3RCLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUN2QixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7WUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakQsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2dCQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDZCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUF6QmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EwQi9CO0lBQUQsa0JBQUM7Q0ExQkQsQUEwQkMsQ0ExQndDLEVBQUUsQ0FBQyxTQUFTLEdBMEJwRDtrQkExQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSBcIi4uL1N0YXRpY0luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFkZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnNldEZhZGVNYW5hZ2VyKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgZmFkZUluKHNlY29uZHM6IG51bWJlciA9IDAuMikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oc2Vjb25kcywgeyBvcGFjaXR5OiAyNTUgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZhZGVPdXQoc2Vjb25kczogbnVtYmVyID0gMC4yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKHNlY29uZHMsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKVxyXG4gICAgICAgICAgICB9KS5zdGFydCgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=