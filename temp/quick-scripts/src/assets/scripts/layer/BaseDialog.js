"use strict";
cc._RF.push(module, '81839rP+EpIUJ57N1pyG8/t', 'BaseDialog');
// scripts/layer/BaseDialog.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseDialog = /** @class */ (function (_super) {
    __extends(BaseDialog, _super);
    function BaseDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseDialog.prototype.show = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.node.active = true;
        this.onShown.apply(this, params);
    };
    BaseDialog.prototype.hide = function () {
        this.node.active = false;
        this.onHide();
    };
    BaseDialog.prototype.onShown = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
    };
    BaseDialog.prototype.onHide = function () {
    };
    BaseDialog.prototype.zoomIn = function (node, scale, speed) {
        if (scale === void 0) { scale = 1.5; }
        if (speed === void 0) { speed = 0.3; }
        node.setScale(scale);
        var act = cc.scaleTo(speed, 1);
        cc.tween(node).then(act).start();
    };
    BaseDialog.prototype.zoomOut = function (node, scale, speed) {
        if (scale === void 0) { scale = 0.5; }
        if (speed === void 0) { speed = 0.3; }
        node.setScale(scale);
        var act = cc.scaleTo(speed, 1);
        cc.tween(node).then(act).start();
    };
    BaseDialog = __decorate([
        ccclass
    ], BaseDialog);
    return BaseDialog;
}(cc.Component));
exports.default = BaseDialog;

cc._RF.pop();