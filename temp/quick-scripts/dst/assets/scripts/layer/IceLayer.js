
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/IceLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c7699w+UNN3qlpbq5KSDp0', 'IceLayer');
// scripts/layer/IceLayer.ts

"use strict";
/*
 * @Author: carolsail
 * @Date: 2023-08-18 14:15:06
 * @Last Modified by: carolsail
 * @Last Modified time: 2023-08-18 14:20:03
 */
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
var BaseDialog_1 = require("./BaseDialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IceLayer = /** @class */ (function (_super) {
    __extends(IceLayer, _super);
    function IceLayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IceLayer.prototype.onLoad = function () { };
    IceLayer.prototype.onDestroy = function () { };
    IceLayer.prototype.onEnable = function () { };
    IceLayer.prototype.onDisable = function () { };
    IceLayer = __decorate([
        ccclass
    ], IceLayer);
    return IceLayer;
}(BaseDialog_1.default));
exports.default = IceLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL0ljZUxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFVO0lBQWhEOztJQVNBLENBQUM7SUFQRyx5QkFBTSxHQUFOLGNBQVcsQ0FBQztJQUVaLDRCQUFTLEdBQVQsY0FBYyxDQUFDO0lBRWYsMkJBQVEsR0FBUixjQUFhLENBQUM7SUFFZCw0QkFBUyxHQUFULGNBQWMsQ0FBQztJQVJFLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FTNUI7SUFBRCxlQUFDO0NBVEQsQUFTQyxDQVRxQyxvQkFBVSxHQVMvQztrQkFUb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IGNhcm9sc2FpbCBcclxuICogQERhdGU6IDIwMjMtMDgtMTggMTQ6MTU6MDYgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBjYXJvbHNhaWxcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAyMy0wOC0xOCAxNDoyMDowM1xyXG4gKi9cclxuXHJcbmltcG9ydCBCYXNlRGlhbG9nIGZyb20gXCIuL0Jhc2VEaWFsb2dcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY2VMYXllciBleHRlbmRzIEJhc2VEaWFsb2cge1xyXG5cclxuICAgIG9uTG9hZCgpIHsgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHsgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkgeyB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkgeyB9XHJcbn1cclxuIl19