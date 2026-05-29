
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/ItemDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a927fGDq1PRrvIAPh28KQH', 'ItemDialog');
// scripts/layer/ItemDialog.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Enum_1 = require("../Enum");
var StaticInstance_1 = require("../StaticInstance");
var AudioManager_1 = require("../manager/AudioManager");
var SdkManager_1 = require("../manager/SdkManager");
var DataManager_1 = require("../manager/DataManager");
var BaseDialog_1 = require("./BaseDialog");
var ItemData_1 = require("../datacenter/ItemData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemDialog = /** @class */ (function (_super) {
    __extends(ItemDialog, _super);
    function ItemDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panel = null;
        _this.btnReward = null;
        _this.itemDesc = null;
        _this.btnClose = null;
        _this.m_index = 0;
        _this.m_callback = null;
        return _this;
    }
    ItemDialog.prototype.onLoad = function () {
        this.panel = cc.find('style/panel', this.node);
        this.btnReward = cc.find('btn_reward', this.panel);
        this.btnReward.on('click', this.onRewardClick, this);
        this.itemDesc = cc.find('itemDesc', this.panel).getComponent(cc.Label);
        this.btnClose = cc.find('btn_close', this.panel);
        this.btnClose.on('click', this.onCloseClick, this);
    };
    ItemDialog.prototype.onShown = function () {
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
    };
    ItemDialog.prototype.onDestroy = function () {
        this.btnReward.off('click', this.onRewardClick, this);
        this.btnClose.off('click', this.onCloseClick, this);
    };
    ItemDialog.prototype.onEnable = function () {
        SdkManager_1.default.instance.toggleBannerAd(true);
    };
    ItemDialog.prototype.onDisable = function () {
        SdkManager_1.default.instance.toggleBannerAd(false);
    };
    ItemDialog.prototype.onCloseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ITEM, false);
        this.m_callback && this.m_callback();
    };
    ItemDialog.prototype.onRewardClick = function () {
        var _this = this;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        SdkManager_1.default.instance.showVideoAd(function (msg) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                DataManager_1.default.instance.itemData.addItemData(this.m_index);
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ITEM, false);
                this.m_callback && this.m_callback();
                StaticInstance_1.StaticInstance.uiManager.setMainTimer(true);
                StaticInstance_1.StaticInstance.uiManager.setMainTimerSound(true);
                return [2 /*return*/];
            });
        }); }, function (msg) {
            // ToastManager.instance.show(msg, { gravity: 'BOTTOM', bg_color: cc.color(226, 69, 109, 255) })
        });
    };
    ItemDialog = __decorate([
        ccclass
    ], ItemDialog);
    return ItemDialog;
}(BaseDialog_1.default));
exports.default = ItemDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL0l0ZW1EaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0NBQXdEO0FBQ3hELG9EQUFtRDtBQUNuRCx3REFBbUQ7QUFDbkQsb0RBQStDO0FBQy9DLHNEQUFpRDtBQUNqRCwyQ0FBc0M7QUFDdEMsbURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFVO0lBQWxEO1FBQUEscUVBK0RDO1FBOURHLFdBQUssR0FBWSxJQUFJLENBQUE7UUFDckIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUN6QixjQUFRLEdBQWEsSUFBSSxDQUFBO1FBQ3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFakIsYUFBTyxHQUFVLENBQUMsQ0FBQztRQUNuQixnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUF3RDlCLENBQUM7SUF2REcsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7UUFD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R0FBVztZQUNaLGdHQUFnRztRQUNuRyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE5RGdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0ErRDlCO0lBQUQsaUJBQUM7Q0EvREQsQUErREMsQ0EvRHVDLG9CQUFVLEdBK0RqRDtrQkEvRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgRU5VTV9BVURJT19DTElQLCBFTlVNX1VJX1RZUEUgfSBmcm9tIFwiLi4vRW51bVwiO1xyXG5pbXBvcnQgeyBTdGF0aWNJbnN0YW5jZSB9IGZyb20gJy4uL1N0YXRpY0luc3RhbmNlJztcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IFNka01hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvU2RrTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEJhc2VEaWFsb2cgZnJvbSBcIi4vQmFzZURpYWxvZ1wiO1xyXG5pbXBvcnQgeyBJdGVtRGVzYyB9IGZyb20gXCIuLi9kYXRhY2VudGVyL0l0ZW1EYXRhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbURpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2cge1xyXG4gICAgcGFuZWw6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBidG5SZXdhcmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBpdGVtRGVzYzogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBidG5DbG9zZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtX2luZGV4Om51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG1fY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWwgPSBjYy5maW5kKCdzdHlsZS9wYW5lbCcsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5idG5SZXdhcmQgPSBjYy5maW5kKCdidG5fcmV3YXJkJywgdGhpcy5wYW5lbClcclxuICAgICAgICB0aGlzLmJ0blJld2FyZC5vbignY2xpY2snLCB0aGlzLm9uUmV3YXJkQ2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5pdGVtRGVzYyA9IGNjLmZpbmQoJ2l0ZW1EZXNjJywgdGhpcy5wYW5lbCkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgIHRoaXMuYnRuQ2xvc2UgPSBjYy5maW5kKCdidG5fY2xvc2UnLCB0aGlzLnBhbmVsKTtcclxuICAgICAgICB0aGlzLmJ0bkNsb3NlLm9uKCdjbGljaycsIHRoaXMub25DbG9zZUNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3duKC4uLnBhcmFtcyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmZmZmZmZmZmOlwiLCBwYXJhbXNbMF0pO1xyXG4gICAgICAgIHRoaXMubV9pbmRleCA9IHBhcmFtc1swXS5pbmRleDtcclxuICAgICAgICB0aGlzLm1fY2FsbGJhY2sgPSBwYXJhbXNbMF0uY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5pdGVtRGVzYy5zdHJpbmcgPSBJdGVtRGVzY1t0aGlzLm1faW5kZXhdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5wYW5lbC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1JY29uXCIgKyBpKTtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMubV9pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmJ0blJld2FyZC5vZmYoJ2NsaWNrJywgdGhpcy5vblJld2FyZENsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuYnRuQ2xvc2Uub2ZmKCdjbGljaycsIHRoaXMub25DbG9zZUNsaWNrLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIFNka01hbmFnZXIuaW5zdGFuY2UudG9nZ2xlQmFubmVyQWQodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS50b2dnbGVCYW5uZXJBZChmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuSVRFTSwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5tX2NhbGxiYWNrICYmIHRoaXMubV9jYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmV3YXJkQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS5zaG93VmlkZW9BZChhc3luYyAobXNnOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuaXRlbURhdGEuYWRkSXRlbURhdGEodGhpcy5tX2luZGV4KTtcclxuICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuSVRFTSwgZmFsc2UpXHJcbiAgICAgICAgICAgIHRoaXMubV9jYWxsYmFjayAmJiB0aGlzLm1fY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE1haW5UaW1lcih0cnVlKTtcclxuICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE1haW5UaW1lclNvdW5kKHRydWUpO1xyXG4gICAgICAgIH0sIChtc2c6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgIC8vIFRvYXN0TWFuYWdlci5pbnN0YW5jZS5zaG93KG1zZywgeyBncmF2aXR5OiAnQk9UVE9NJywgYmdfY29sb3I6IGNjLmNvbG9yKDIyNiwgNjksIDEwOSwgMjU1KSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19