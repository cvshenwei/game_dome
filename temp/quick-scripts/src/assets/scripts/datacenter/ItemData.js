"use strict";
cc._RF.push(module, '94c43q95WFBH6lkWs8u9ZrW', 'ItemData');
// scripts/datacenter/ItemData.ts

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
exports.itemData = exports.ItemDesc = exports.ItemUnlockLevel = void 0;
var SystemData_1 = require("../framework/SystemData");
//配置道具解锁关卡
exports.ItemUnlockLevel = [2, 6, 2, 4];
//道具描述
exports.ItemDesc = [
    "Eliminate 3 models",
    "Eliminate 9 models",
    "Pause time for 15 seconds",
    "Refresh all models",
];
var ItemDataClass = /** @class */ (function (_super) {
    __extends(ItemDataClass, _super);
    function ItemDataClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coins = 100;
        //局内道具   0-锤子  1-魔法  2-冰冻 3-刷新
        _this.itemDatas = [
            {
                itemNum: 3,
                isUnlock: false,
                isGuide: false,
            },
            {
                itemNum: 3,
                isUnlock: false,
                isGuide: false,
            },
            {
                itemNum: 3,
                isUnlock: false,
                isGuide: false,
            },
            {
                itemNum: 3,
                isUnlock: false,
                isGuide: false,
            },
        ];
        return _this;
    }
    ItemDataClass.prototype.init = function () {
    };
    ItemDataClass.prototype.addCoin = function (num) {
        this.coins += num;
        if (this.coins < 0) {
            this.coins = 0;
        }
    };
    ItemDataClass.prototype.loadItemData = function () {
        var str = localStorage.getItem("ItemData.itemDatas");
        if (str) {
            this.itemDatas = JSON.parse(str);
        }
    };
    ItemDataClass.prototype.getItemData = function () {
        return this.itemDatas;
    };
    ItemDataClass.prototype.useItemData = function (index) {
        this.itemDatas[index].itemNum -= 1;
        if (this.itemDatas[index].itemNum <= 0) {
            this.itemDatas[index].itemNum = 0;
        }
        this.saveItemData();
    };
    ItemDataClass.prototype.unlockItemData = function (index) {
        this.itemDatas[index].isUnlock = true;
        this.saveItemData();
    };
    ItemDataClass.prototype.guideItemData = function (index) {
        this.itemDatas[index].isGuide = true;
        this.saveItemData();
    };
    ItemDataClass.prototype.addItemData = function (index) {
        this.itemDatas[index].itemNum += 1;
        this.saveItemData();
    };
    ItemDataClass.prototype.saveItemData = function () {
        var str = JSON.stringify(this.itemDatas);
        localStorage.setItem("ItemData.itemDatas", str);
    };
    __decorate([
        SystemData_1.field() //金币数量
    ], ItemDataClass.prototype, "coins", void 0);
    ItemDataClass = __decorate([
        SystemData_1.dc("ItemData")
    ], ItemDataClass);
    return ItemDataClass;
}(SystemData_1.default));
exports.default = ItemDataClass;
exports.itemData = SystemData_1.default.register(ItemDataClass);

cc._RF.pop();