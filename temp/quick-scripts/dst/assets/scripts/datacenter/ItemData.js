
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/datacenter/ItemData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGFjZW50ZXIvSXRlbURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFnRTtBQUVoRSxVQUFVO0FBQ0csUUFBQSxlQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QyxNQUFNO0FBQ08sUUFBQSxRQUFRLEdBQUc7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0NBQ3ZCLENBQUM7QUFHRjtJQUEyQyxpQ0FBVTtJQUFyRDtRQUFBLHFFQThFQztRQXZFRyxXQUFLLEdBQVUsR0FBRyxDQUFDO1FBRW5CLDhCQUE4QjtRQUM5QixlQUFTLEdBQUc7WUFDUjtnQkFDSSxPQUFPLEVBQUcsQ0FBQztnQkFDWCxRQUFRLEVBQUUsS0FBSztnQkFDZixPQUFPLEVBQUUsS0FBSzthQUNqQjtZQUNEO2dCQUNJLE9BQU8sRUFBRyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxLQUFLO2dCQUNmLE9BQU8sRUFBRSxLQUFLO2FBQ2pCO1lBQ0Q7Z0JBQ0ksT0FBTyxFQUFHLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsT0FBTyxFQUFFLEtBQUs7YUFDakI7WUFDRDtnQkFDSSxPQUFPLEVBQUcsQ0FBQztnQkFDWCxRQUFRLEVBQUUsS0FBSztnQkFDZixPQUFPLEVBQUUsS0FBSzthQUNqQjtTQUNKLENBQUM7O0lBK0NOLENBQUM7SUE1RUcsNEJBQUksR0FBSjtJQUVBLENBQUM7SUE2QkQsK0JBQU8sR0FBUCxVQUFRLEdBQVU7UUFDZCxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztRQUNsQixJQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNyRCxJQUFJLEdBQUcsRUFBQztZQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsS0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsS0FBYTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBdEVEO1FBREMsa0JBQUssRUFBRSxDQUFDLE1BQU07Z0RBQ0k7SUFQRixhQUFhO1FBRGpDLGVBQUUsQ0FBQyxVQUFVLENBQUM7T0FDTSxhQUFhLENBOEVqQztJQUFELG9CQUFDO0NBOUVELEFBOEVDLENBOUUwQyxvQkFBVSxHQThFcEQ7a0JBOUVvQixhQUFhO0FBZ0Z2QixRQUFBLFFBQVEsR0FBaUIsb0JBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3lzdGVtRGF0YSwgeyBkYywgZmllbGQgfSBmcm9tIFwiLi4vZnJhbWV3b3JrL1N5c3RlbURhdGFcIjtcclxuXHJcbi8v6YWN572u6YGT5YW36Kej6ZSB5YWz5Y2hXHJcbmV4cG9ydCBjb25zdCBJdGVtVW5sb2NrTGV2ZWwgPSBbMiwgNiwgMiwgNF07XHJcbi8v6YGT5YW35o+P6L+wXHJcbmV4cG9ydCBjb25zdCBJdGVtRGVzYyA9IFtcclxuICAgIFwiRWxpbWluYXRlIDMgbW9kZWxzXCIsXHJcbiAgICBcIkVsaW1pbmF0ZSA5IG1vZGVsc1wiLFxyXG4gICAgXCJQYXVzZSB0aW1lIGZvciAxNSBzZWNvbmRzXCIsXHJcbiAgICBcIlJlZnJlc2ggYWxsIG1vZGVsc1wiLFxyXG5dO1xyXG5cclxuQGRjKFwiSXRlbURhdGFcIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbURhdGFDbGFzcyBleHRlbmRzIFN5c3RlbURhdGF7XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIEBmaWVsZCgpIC8v6YeR5biB5pWw6YePXHJcbiAgICBjb2luczpudW1iZXIgPSAxMDA7XHJcbiAgIFxyXG4gICAgLy/lsYDlhoXpgZPlhbcgICAwLemUpOWtkCAgMS3prZTms5UgIDIt5Yaw5Ya7IDMt5Yi35pawXHJcbiAgICBpdGVtRGF0YXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtTnVtIDogMyxcclxuICAgICAgICAgICAgaXNVbmxvY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0d1aWRlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbU51bSA6IDMsXHJcbiAgICAgICAgICAgIGlzVW5sb2NrOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNHdWlkZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW1OdW0gOiAzLFxyXG4gICAgICAgICAgICBpc1VubG9jazogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzR3VpZGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtTnVtIDogMyxcclxuICAgICAgICAgICAgaXNVbmxvY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0d1aWRlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBhZGRDb2luKG51bTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuY29pbnMgKz0gbnVtOyAgXHJcbiAgICAgICAgaWYodGhpcy5jb2lucyA8IDApe1xyXG4gICAgICAgICAgICB0aGlzLmNvaW5zID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvYWRJdGVtRGF0YSgpe1xyXG4gICAgICAgIGxldCBzdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkl0ZW1EYXRhLml0ZW1EYXRhc1wiKTtcclxuICAgICAgICBpZiAoc3RyKXtcclxuICAgICAgICAgICAgdGhpcy5pdGVtRGF0YXMgPSBKU09OLnBhcnNlKHN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1EYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbURhdGFzO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUl0ZW1EYXRhKGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaXRlbURhdGFzW2luZGV4XS5pdGVtTnVtIC09IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbURhdGFzW2luZGV4XS5pdGVtTnVtIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtRGF0YXNbaW5kZXhdLml0ZW1OdW0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNhdmVJdGVtRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVubG9ja0l0ZW1EYXRhKGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaXRlbURhdGFzW2luZGV4XS5pc1VubG9jayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zYXZlSXRlbURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBndWlkZUl0ZW1EYXRhKGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaXRlbURhdGFzW2luZGV4XS5pc0d1aWRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNhdmVJdGVtRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW1EYXRhKGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaXRlbURhdGFzW2luZGV4XS5pdGVtTnVtICs9IDE7XHJcbiAgICAgICAgdGhpcy5zYXZlSXRlbURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlSXRlbURhdGEoKXtcclxuICAgICAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtRGF0YXMpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiSXRlbURhdGEuaXRlbURhdGFzXCIsIHN0cik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgaXRlbURhdGE6SXRlbURhdGFDbGFzcyA9IFN5c3RlbURhdGEucmVnaXN0ZXIoSXRlbURhdGFDbGFzcykiXX0=