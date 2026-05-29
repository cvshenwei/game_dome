"use strict";
cc._RF.push(module, '4e480X7ld5NqbZufD2480Yc', 'i18nLabel');
// scripts/i18n/i18nLabel.ts

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
exports.i18nLabel = void 0;
var i18nManage_1 = require("./i18nManage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, disallowMultiple = _a.disallowMultiple, requireComponent = _a.requireComponent, menu = _a.menu;
var i18nLabel = /** @class */ (function (_super) {
    __extends(i18nLabel, _super);
    function i18nLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.i18n_string = "";
        _this.i18n_params = [];
        return _this;
    }
    i18nLabel.prototype.start = function () {
        i18nManage_1.i18nManage._addOrDelLabel(this, true);
        this._resetValue();
    };
    Object.defineProperty(i18nLabel.prototype, "string", {
        get: function () {
            return this.i18n_string;
        },
        set: function (value) {
            this.i18n_string = value;
            this.setEndValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(i18nLabel.prototype, "params", {
        get: function () {
            return this.i18n_params;
        },
        set: function (value) {
            this.i18n_params = value;
            this.setEndValue();
        },
        enumerable: false,
        configurable: true
    });
    i18nLabel.prototype.init = function (string, params) {
        this.i18n_string = string;
        this.i18n_params = params;
        this.setEndValue();
    };
    i18nLabel.prototype.setEndValue = function () {
        var label = this.getComponent(cc.Label);
        if (cc.isValid(label)) {
            // console.log('this.i18n_string:',this.i18n_string);
            // console.log('_getLabel:',i18nManage._getLabel(this.i18n_string, this.i18n_params));
            label.string = i18nManage_1.i18nManage._getLabel(this.i18n_string, this.i18n_params);
        }
    };
    i18nLabel.prototype._resetValue = function () {
        this.string = this.i18n_string;
    };
    i18nLabel.prototype.onDestroy = function () {
        i18nManage_1.i18nManage._addOrDelLabel(this, false);
    };
    __decorate([
        property({ visible: false })
    ], i18nLabel.prototype, "i18n_string", void 0);
    __decorate([
        property({ visible: false })
    ], i18nLabel.prototype, "i18n_params", void 0);
    __decorate([
        property({ type: cc.String })
    ], i18nLabel.prototype, "string", null);
    __decorate([
        property({ type: [cc.String] })
    ], i18nLabel.prototype, "params", null);
    i18nLabel = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Label),
        disallowMultiple,
        menu("多语言/i18nLabel")
    ], i18nLabel);
    return i18nLabel;
}(cc.Component));
exports.i18nLabel = i18nLabel;

cc._RF.pop();