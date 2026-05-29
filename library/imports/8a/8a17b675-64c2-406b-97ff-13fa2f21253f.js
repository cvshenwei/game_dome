"use strict";
cc._RF.push(module, '8a17bZ1ZMJAa5f/E/ovISU/', 'ItemUnlockDialog');
// scripts/layer/ItemUnlockDialog.ts

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
var Enum_1 = require("../Enum");
var StaticInstance_1 = require("../StaticInstance");
var AudioManager_1 = require("../manager/AudioManager");
var SdkManager_1 = require("../manager/SdkManager");
var BaseDialog_1 = require("./BaseDialog");
var ItemData_1 = require("../datacenter/ItemData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemUnlockDialog = /** @class */ (function (_super) {
    __extends(ItemUnlockDialog, _super);
    function ItemUnlockDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panel = null;
        _this.btnReward = null;
        _this.itemDesc = null;
        _this.m_index = 0;
        _this.m_callback = null;
        return _this;
    }
    ItemUnlockDialog.prototype.onLoad = function () {
        this.panel = cc.find('style/panel', this.node);
        this.btnReward = cc.find('btn_reward', this.panel);
        this.btnReward.on('click', this.onRewardClick, this);
        this.itemDesc = cc.find('itemDesc', this.panel).getComponent(cc.Label);
    };
    ItemUnlockDialog.prototype.onShown = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log("fffffffff:", params[0]);
        this.m_index = params[0].index;
        this.m_callback = params[0].callback;
        this.itemDesc.string = ItemData_1.ItemDesc[this.m_index];
        for (var i = 0; i < 4; i++) {
            var node = this.panel.getChildByName("itemIcon" + i);
            node.active = false;
            if (i === this.m_index) {
                node.active = true;
            }
        }
        var light = this.panel.getChildByName("light");
        var act = cc.repeatForever(cc.rotateBy(3, 360));
        cc.tween(light).then(act).start();
    };
    ItemUnlockDialog.prototype.onDestroy = function () {
        this.btnReward.off('click', this.onRewardClick, this);
    };
    ItemUnlockDialog.prototype.onEnable = function () {
        SdkManager_1.default.instance.toggleBannerAd(true);
    };
    ItemUnlockDialog.prototype.onDisable = function () {
        SdkManager_1.default.instance.toggleBannerAd(false);
    };
    ItemUnlockDialog.prototype.onRewardClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ITEMUNLOCK, false);
        var node = this.panel.getChildByName("itemIcon" + this.m_index);
        this.m_callback && this.m_callback({
            index: this.m_index,
            pos: node.position,
            item: cc.instantiate(node),
        });
    };
    ItemUnlockDialog = __decorate([
        ccclass
    ], ItemUnlockDialog);
    return ItemUnlockDialog;
}(BaseDialog_1.default));
exports.default = ItemUnlockDialog;

cc._RF.pop();