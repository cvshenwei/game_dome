
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/ItemUnlockDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL0l0ZW1VbmxvY2tEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0NBQXdEO0FBQ3hELG9EQUFtRDtBQUNuRCx3REFBbUQ7QUFDbkQsb0RBQStDO0FBQy9DLDJDQUFzQztBQUN0QyxtREFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVU7SUFBeEQ7UUFBQSxxRUFzREM7UUFyREcsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUNyQixlQUFTLEdBQVksSUFBSSxDQUFBO1FBQ3pCLGNBQVEsR0FBYSxJQUFJLENBQUE7UUFFakIsYUFBTyxHQUFVLENBQUMsQ0FBQztRQUNuQixnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUFnRDlCLENBQUM7SUEvQ0csaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFBUSxnQkFBUzthQUFULFVBQVMsRUFBVCxxQkFBUyxFQUFULElBQVM7WUFBVCwyQkFBUzs7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLG1CQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1NBQ0o7UUFDRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDakQsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLG9CQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNJLG9CQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RELCtCQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBWSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDbkIsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ2xCLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztTQUM3QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBckRnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXNEcEM7SUFBRCx1QkFBQztDQXRERCxBQXNEQyxDQXRENkMsb0JBQVUsR0FzRHZEO2tCQXREb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEVOVU1fQVVESU9fQ0xJUCwgRU5VTV9VSV9UWVBFIH0gZnJvbSBcIi4uL0VudW1cIjtcclxuaW1wb3J0IHsgU3RhdGljSW5zdGFuY2UgfSBmcm9tICcuLi9TdGF0aWNJbnN0YW5jZSc7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBTZGtNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL1Nka01hbmFnZXJcIjtcclxuaW1wb3J0IEJhc2VEaWFsb2cgZnJvbSBcIi4vQmFzZURpYWxvZ1wiO1xyXG5pbXBvcnQgeyBJdGVtRGVzYyB9IGZyb20gXCIuLi9kYXRhY2VudGVyL0l0ZW1EYXRhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbVVubG9ja0RpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2cge1xyXG4gICAgcGFuZWw6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBidG5SZXdhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBpdGVtRGVzYzogY2MuTGFiZWwgPSBudWxsXHJcblxyXG4gICAgcHJpdmF0ZSBtX2luZGV4Om51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG1fY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWwgPSBjYy5maW5kKCdzdHlsZS9wYW5lbCcsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5idG5SZXdhcmQgPSBjYy5maW5kKCdidG5fcmV3YXJkJywgdGhpcy5wYW5lbClcclxuICAgICAgICB0aGlzLmJ0blJld2FyZC5vbignY2xpY2snLCB0aGlzLm9uUmV3YXJkQ2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5pdGVtRGVzYyA9IGNjLmZpbmQoJ2l0ZW1EZXNjJywgdGhpcy5wYW5lbCkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvd24oLi4ucGFyYW1zKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmZmZmZmZmZmY6XCIsIHBhcmFtc1swXSk7XHJcbiAgICAgICAgdGhpcy5tX2luZGV4ID0gcGFyYW1zWzBdLmluZGV4O1xyXG4gICAgICAgIHRoaXMubV9jYWxsYmFjayA9IHBhcmFtc1swXS5jYWxsYmFjaztcclxuICAgICAgICB0aGlzLml0ZW1EZXNjLnN0cmluZyA9IEl0ZW1EZXNjW3RoaXMubV9pbmRleF07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhbmVsLmdldENoaWxkQnlOYW1lKFwiaXRlbUljb25cIiArIGkpO1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5tX2luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGlnaHQgPSB0aGlzLnBhbmVsLmdldENoaWxkQnlOYW1lKFwibGlnaHRcIik7XHJcbiAgICAgICAgY29uc3QgYWN0ID0gY2MucmVwZWF0Rm9yZXZlcihjYy5yb3RhdGVCeSgzLCAzNjApKVxyXG4gICAgICAgIGNjLnR3ZWVuKGxpZ2h0KS50aGVuKGFjdCkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5idG5SZXdhcmQub2ZmKCdjbGljaycsIHRoaXMub25SZXdhcmRDbGljaywgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLnRvZ2dsZUJhbm5lckFkKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIFNka01hbmFnZXIuaW5zdGFuY2UudG9nZ2xlQmFubmVyQWQoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgb25SZXdhcmRDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5JVEVNVU5MT0NLLCBmYWxzZSk7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMucGFuZWwuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtSWNvblwiICsgdGhpcy5tX2luZGV4KTtcclxuICAgICAgICB0aGlzLm1fY2FsbGJhY2sgJiYgdGhpcy5tX2NhbGxiYWNrKHtcclxuICAgICAgICAgICAgaW5kZXg6IHRoaXMubV9pbmRleCwgXHJcbiAgICAgICAgICAgIHBvczogbm9kZS5wb3NpdGlvbixcclxuICAgICAgICAgICAgaXRlbTogY2MuaW5zdGFudGlhdGUobm9kZSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19