
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/Levels.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6337osCDxGt6lxJWutc4UX', 'Levels');
// scripts/game/Levels.ts

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
var DataManager_1 = require("../manager/DataManager");
var PoolManager_1 = require("../manager/PoolManager");
var Container_1 = require("./Container");
var LevelsConfig_1 = require("../config/LevelsConfig");
var Constants_1 = require("../Constants");
var CommonTool_1 = require("../framework/utils/CommonTool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Levels = /** @class */ (function (_super) {
    __extends(Levels, _super);
    function Levels() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //货架数组
        _this.containerNodes = [];
        _this.level = 1;
        _this.goodsCount = 10;
        _this.moveCount = 0;
        //关卡类型
        _this.type = Enum_1.ENUM_LEVEL_TYPE.NORMAL;
        //关卡难度
        _this.difficulty = Enum_1.ENUM_LEVEL_DIFFICULTY.EASY;
        //货架关卡配置数组
        _this.containArray = null;
        //当前关卡启用的货架对象
        _this.containers = [];
        //上锁货架
        _this.locks = [];
        return _this;
    }
    Levels.prototype.initData = function () {
        //初始化关卡、货架
        for (var index = 0; index < this.containerNodes.length; index++) {
            this.containerNodes[index].active = false;
            this.containerNodes[index].removeAllChildren();
        }
        if (this.containers && this.containers.length > 0) {
            for (var index = 0; index < this.containers.length; index++) {
                var element = this.containers[index];
                if (element && element.node) {
                    element.node.removeFromParent();
                }
            }
            this.containers.length = 0;
        }
        if (this.locks && this.locks.length > 0) {
            for (var index = 0; index < this.locks.length; index++) {
                var element = this.locks[index];
                if (element && element.node) {
                    element.node.removeFromParent();
                }
            }
            this.locks.length = 0;
        }
        DataManager_1.default.instance.levelData.initData();
    };
    Levels.prototype.initLevel = function (level) {
        if (!CommonTool_1.default.isFullScreen()) {
            this.node.scale = 0.95;
        }
        this.initData();
        this.level = Math.min(level, LevelsConfig_1.LEVEL_CONFIG.length);
        var levelData = LevelsConfig_1.LEVEL_CONFIG[level - 1];
        this.type = levelData.type;
        this.difficulty = levelData.difficult;
        this.goodsCount = levelData.goodsCount;
        this.containArray = levelData.contain;
        this.moveCount = levelData.move;
        DataManager_1.default.instance.levelData.timer = levelData.time;
        var count = 0;
        //生成新货架
        for (var index = 0; index < this.containArray.length; index++) {
            var indexNum = this.containArray[index];
            if (indexNum > 0) {
                this.containerNodes[index].active = true;
                var containerNode = PoolManager_1.default.instance.getNode("Container", this.containerNodes[index]);
                containerNode.parent = this.containerNodes[index];
                var container = containerNode.getComponent(Container_1.default);
                var colrow = this.getContainerColAndRow(index);
                container.col = colrow.col;
                container.row = colrow.row;
                if (levelData.speed && levelData.speed > 0) {
                    container.speed = levelData.speed;
                }
                container.init(count, indexNum, this);
                console.log(index, container.col, container.row);
                this.containers.push(container);
                count++;
                //设置货架使用的阴影
                /* if(index>0&&index<(this.containArray.length-1)){
                     if(this.containArray[index-1]==0){
                       container.setShow(ENUM_CONTAINER_POSTION.LEFT);
                     }else if(this.containArray[index+1]==0){
                       container.setShow(ENUM_CONTAINER_POSTION.RIGHT);
                     }else{
                       container.setShow(ENUM_CONTAINER_POSTION.CENTER);
                     }
                  }else if(index==0){
                     container.setShow(ENUM_CONTAINER_POSTION.LEFT);
                  }else if(index==(this.containArray.length-1)){
                     container.setShow(ENUM_CONTAINER_POSTION.RIGHT);
                  }*/
            }
        }
        //根据货架所在位置显示不同的货架图片和阴影
        /* for (let index = 0; index < this.containers.length; index++) {
             const container = this.containers[index];
             if(container.col==0){
                 if(this.isContainerByPos(container.col+1,container.row)){
                     container.setShow("left",false);
                 }else{
                     container.setShow("true",false);
                 }
                 continue;
             }
             if(element.col==col&&element.row==row){
                 return true;
             }
             
         }*/
        //生成商品
        //1.获取要插入的商品数组
        var goodsIndexArr = [];
        var goodsTypes = levelData.goods;
        for (var i = 0; i < goodsTypes.length; i++) {
            if (this.level == 1) {
                goodsIndexArr.push(goodsTypes[i]);
                continue;
            }
            console.log("goodsTypes", goodsTypes[i]);
            var typeArray = goodsTypes[i].split("_");
            console.log("typeArray", typeArray);
            if (typeArray.length < 3) {
                console.error("level goods error", typeArray);
                return;
            }
            //商品大类
            var type = Number(typeArray[0]);
            //种类数量，随机
            var count_1 = Number(typeArray[1]);
            //颜色数量，随机
            var colorNum = Number(typeArray[2]);
            var lastgoodsId = 0;
            for (var j = 0; j < count_1; j++) {
                var goodsIdArray = Constants_1.default.BEVERAGE_GOODS;
                var maxColorNum = 2;
                if (type == Enum_1.ENUM_GOODS_TYPE.DAILY) {
                    goodsIdArray = Constants_1.default.DAILY_GOODS;
                }
                else if (type == Enum_1.ENUM_GOODS_TYPE.FOOD) {
                    goodsIdArray = Constants_1.default.FOOD_GOODS;
                }
                else if (type == Enum_1.ENUM_GOODS_TYPE.JUICE) {
                    goodsIdArray = Constants_1.default.JUICE_GOODS;
                }
                else if (type == Enum_1.ENUM_GOODS_TYPE.LETTER) {
                    goodsIdArray = Constants_1.default.LETTER_GOODS;
                }
                else if (type == Enum_1.ENUM_GOODS_TYPE.PLANT) {
                    goodsIdArray = Constants_1.default.PLANT_GOODS;
                }
                else if (type == Enum_1.ENUM_GOODS_TYPE.TOY) {
                    goodsIdArray = Constants_1.default.TOY_GOODS;
                }
                else if (type == Enum_1.ENUM_GOODS_TYPE.SNACKFOODS) {
                    goodsIdArray = Constants_1.default.SNACKFOODS_GOODS;
                }
                console.log("goodsIdArray", goodsIdArray);
                console.log("maxColorNum", maxColorNum);
                //具体的商品id，不包括颜色
                var goodsId = CommonTool_1.default.getRandomByArray(goodsIdArray);
                maxColorNum = goodsId.toString().substring(3);
                goodsId = goodsId.toString().substring(0, 3);
                while (goodsId == lastgoodsId && goodsIdArray.length > 1) {
                    goodsId = CommonTool_1.default.getRandomByArray(goodsIdArray);
                    maxColorNum = goodsId.toString().substring(3);
                    goodsId = goodsId.toString().substring(0, 3);
                }
                console.log("goodsId", goodsId);
                lastgoodsId = goodsId;
                var lastColorId = -1;
                for (var k = 0; k < colorNum; k++) {
                    var colorId = CommonTool_1.default.getRandomByInt(1, maxColorNum + 1);
                    while ((colorId == lastColorId || colorId > maxColorNum) && maxColorNum > 1) {
                        colorId = CommonTool_1.default.getRandomByInt(1, maxColorNum + 1);
                        console.log("while colorId", colorId);
                    }
                    console.log("lastColorId", lastColorId);
                    lastColorId = colorId;
                    console.log("colorId", colorId);
                    if (colorId < 10) {
                        goodsIndexArr.push(goodsId + "0" + colorId.toString());
                    }
                    else {
                        goodsIndexArr.push(goodsId + "" + colorId.toString());
                    }
                    console.log("goodsIndexArr", goodsIndexArr);
                }
            }
        }
        if (this.level == 1) { //新手关卡写死生成逻辑
            var tripledArray = [];
            tripledArray.push(goodsIndexArr[0]);
            tripledArray.push(0);
            tripledArray.push(0);
            tripledArray.push(goodsIndexArr[1]);
            tripledArray.push(goodsIndexArr[0]);
            tripledArray.push(goodsIndexArr[1]);
            tripledArray.push(0);
            tripledArray.push(goodsIndexArr[0]);
            tripledArray.push(goodsIndexArr[1]);
            goodsIndexArr = tripledArray;
        }
        else {
            goodsIndexArr = CommonTool_1.default.shuffleAndCopyTriple(goodsIndexArr);
        }
        return goodsIndexArr;
    };
    /**
     * 判断一个行列坐标是否有货架
     * @param col 货架所在列
     * @param row 货架所在行
     */
    Levels.prototype.isContainerByPos = function (col, row) {
        if (this.containers != null) {
            for (var index = 0; index < this.containers.length; index++) {
                var element = this.containers[index];
                if (element.col == col && element.row == row) {
                    return true;
                }
            }
        }
        return false;
    };
    Levels.prototype.getContainerColAndRow = function (index) {
        var col = Math.floor(index % Constants_1.default.LEVEL_CONTAINER_COL);
        var row = Math.floor(index / Constants_1.default.LEVEL_CONTAINER_COL);
        if (this.type == Enum_1.ENUM_LEVEL_TYPE.NORMAL) {
            return { col: col, row: row };
        }
        if (this.type == Enum_1.ENUM_LEVEL_TYPE.MOVE) {
            if (this.moveCount == 1) {
                if (index >= 15) {
                    col = Math.floor((index - 15) % Constants_1.default.LEVEL_CONTAINER_COL_MOVE);
                    row = Math.floor((index - 15) / Constants_1.default.LEVEL_CONTAINER_COL_MOVE) + 5;
                }
            }
            else if (this.moveCount == 2) {
                if (index >= 12) {
                    col = Math.floor((index - 12) % Constants_1.default.LEVEL_CONTAINER_COL_MOVE);
                    row = Math.floor((index - 12) / Constants_1.default.LEVEL_CONTAINER_COL_MOVE) + 4;
                }
            }
            else if (this.moveCount == 3) {
                if (index >= 9) {
                    col = Math.floor((index - 9) % Constants_1.default.LEVEL_CONTAINER_COL_MOVE);
                    row = Math.floor((index - 9) / Constants_1.default.LEVEL_CONTAINER_COL_MOVE) + 3;
                }
            }
            else if (this.moveCount == 4) {
                if (index >= 6) {
                    col = Math.floor((index - 6) % Constants_1.default.LEVEL_CONTAINER_COL_MOVE);
                    row = Math.floor((index - 6) / Constants_1.default.LEVEL_CONTAINER_COL_MOVE) + 2;
                }
            }
        }
        return { col: col, row: row };
    };
    Levels.prototype.getContainerRow = function (index) {
        if (this.type == Enum_1.ENUM_LEVEL_TYPE.NORMAL) {
            return Math.floor((index + 1) / Constants_1.default.LEVEL_CONTAINER_COL);
        }
    };
    Levels.prototype.getContainerByIndex = function (index) {
        console.log("getContainerByIndex", index, this.containers.length);
        if (this.containers && this.containers.length > 0) {
            if (this.containers.length <= index) {
                return null;
            }
            return this.containers[index];
        }
        return null;
    };
    Levels.prototype.release = function () {
    };
    __decorate([
        property([cc.Node])
    ], Levels.prototype, "containerNodes", void 0);
    Levels = __decorate([
        ccclass
    ], Levels);
    return Levels;
}(cc.Component));
exports.default = Levels;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWUvTGV2ZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGdDQUFnRztBQUNoRyxzREFBaUQ7QUFDakQsc0RBQWlEO0FBQ2pELHlDQUFvQztBQUNwQyx1REFBc0Q7QUFDdEQsMENBQXFDO0FBQ3JDLDREQUF1RDtBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWlUQztRQTlTRyxNQUFNO1FBRU4sb0JBQWMsR0FBWSxFQUFFLENBQUM7UUFFN0IsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixnQkFBVSxHQUFRLEVBQUUsQ0FBQztRQUVyQixlQUFTLEdBQVEsQ0FBQyxDQUFDO1FBRW5CLE1BQU07UUFDTixVQUFJLEdBQWlCLHNCQUFlLENBQUMsTUFBTSxDQUFDO1FBRTVDLE1BQU07UUFDTixnQkFBVSxHQUF1Qiw0QkFBcUIsQ0FBQyxJQUFJLENBQUM7UUFFNUQsVUFBVTtRQUNWLGtCQUFZLEdBQVUsSUFBSSxDQUFDO1FBRTNCLGFBQWE7UUFDTixnQkFBVSxHQUFnQixFQUFFLENBQUM7UUFFcEMsTUFBTTtRQUNOLFdBQUssR0FBZ0IsRUFBRSxDQUFDOztJQXdSNUIsQ0FBQztJQXJSRyx5QkFBUSxHQUFSO1FBRUksVUFBVTtRQUNWLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ2xEO1FBQ0QsSUFB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QUFlLEdBQWYsVUFBZ0IsS0FBWTtRQUN4QixJQUFHLElBQUksQ0FBQyxJQUFJLElBQUUsc0JBQWUsQ0FBQyxNQUFNLEVBQUM7WUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxHQUFDLG1CQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUM5RDtJQUNMLENBQUM7SUFFRCxvQ0FBbUIsR0FBbkIsVUFBb0IsS0FBWTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUM7WUFDekMsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBRSxLQUFLLEVBQUM7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsd0JBQU8sR0FBUDtJQUVBLENBQUM7SUF6U0Q7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7a0RBQ1M7SUFMWixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBaVQxQjtJQUFELGFBQUM7Q0FqVEQsQUFpVEMsQ0FqVG1DLEVBQUUsQ0FBQyxTQUFTLEdBaVQvQztrQkFqVG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IEVOVU1fR09PRFNfVFlQRSwgRU5VTV9MRVZFTF9ESUZGSUNVTFRZLCBFTlVNX0xFVkVMX1RZUEUsIEVOVU1fVUlfVFlQRSB9IGZyb20gXCIuLi9FbnVtXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgUG9vbE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvUG9vbE1hbmFnZXJcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgTEVWRUxfQ09ORklHIH0gZnJvbSBcIi4uL2NvbmZpZy9MZXZlbHNDb25maWdcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBDb21tb25Ub29sIGZyb20gXCIuLi9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVG9vbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVscyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgXHJcbiAgICAvL+i0p+aetuaVsOe7hFxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGNvbnRhaW5lck5vZGVzOmNjLk5vZGVbXSA9W107XHJcblxyXG4gICAgbGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICBnb29kc0NvdW50Om51bWJlcj0xMDtcclxuXHJcbiAgICBtb3ZlQ291bnQ6bnVtYmVyPTA7XHJcblxyXG4gICAgLy/lhbPljaHnsbvlnotcclxuICAgIHR5cGU6RU5VTV9MRVZFTF9UWVBFPUVOVU1fTEVWRUxfVFlQRS5OT1JNQUw7XHJcblxyXG4gICAgLy/lhbPljaHpmr7luqZcclxuICAgIGRpZmZpY3VsdHk6RU5VTV9MRVZFTF9ESUZGSUNVTFRZPUVOVU1fTEVWRUxfRElGRklDVUxUWS5FQVNZO1xyXG4gICAgXHJcbiAgICAvL+i0p+aetuWFs+WNoemFjee9ruaVsOe7hFxyXG4gICAgY29udGFpbkFycmF5Om51bWJlcltdPW51bGw7XHJcblxyXG4gICAgLy/lvZPliY3lhbPljaHlkK/nlKjnmoTotKfmnrblr7nosaFcclxuICAgIHB1YmxpYyBjb250YWluZXJzOiBDb250YWluZXJbXSA9IFtdO1xyXG5cclxuICAgIC8v5LiK6ZSB6LSn5p62XHJcbiAgICBsb2NrczogQ29udGFpbmVyW10gPSBbXTtcclxuXHJcblxyXG4gICAgaW5pdERhdGEoKXtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblhbPljaHjgIHotKfmnrZcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250YWluZXJOb2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJOb2Rlc1tpbmRleF0uYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lck5vZGVzW2luZGV4XS5yZW1vdmVBbGxDaGlsZHJlbigpOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY29udGFpbmVycyYmdGhpcy5jb250YWluZXJzLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29udGFpbmVycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudCYmZWxlbWVudC5ub2RlKXtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVycy5sZW5ndGg9MDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmxvY2tzJiZ0aGlzLmxvY2tzLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubG9ja3MubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5sb2Nrc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50JiZlbGVtZW50Lm5vZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2Nrcy5sZW5ndGg9MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLmluaXREYXRhKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdExldmVsKGxldmVsOm51bWJlcik6bnVtYmVyW117XHJcbiAgICAgICAgaWYoIUNvbW1vblRvb2wuaXNGdWxsU2NyZWVuKCkpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGU9MC45NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSBNYXRoLm1pbihsZXZlbCwgTEVWRUxfQ09ORklHLmxlbmd0aCk7XHJcbiAgICAgICAgbGV0IGxldmVsRGF0YT1MRVZFTF9DT05GSUdbbGV2ZWwgLSAxXTtcclxuXHJcbiAgICAgICAgdGhpcy50eXBlPWxldmVsRGF0YS50eXBlO1xyXG4gICAgICAgIHRoaXMuZGlmZmljdWx0eT1sZXZlbERhdGEuZGlmZmljdWx0O1xyXG4gICAgICAgIHRoaXMuZ29vZHNDb3VudD1sZXZlbERhdGEuZ29vZHNDb3VudDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5BcnJheT1sZXZlbERhdGEuY29udGFpbjtcclxuICAgICAgICB0aGlzLm1vdmVDb3VudD1sZXZlbERhdGEubW92ZTtcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEudGltZXI9bGV2ZWxEYXRhLnRpbWU7XHJcbiAgICAgICAgbGV0IGNvdW50PTA7XHJcblxyXG4gICAgICAgIC8v55Sf5oiQ5paw6LSn5p62XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29udGFpbkFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleE51bSA9IHRoaXMuY29udGFpbkFycmF5W2luZGV4XTtcclxuICAgICAgICAgICAgaWYoaW5kZXhOdW0+MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lck5vZGVzW2luZGV4XS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCAgY29udGFpbmVyTm9kZSA9IFBvb2xNYW5hZ2VyLmluc3RhbmNlLmdldE5vZGUoXCJDb250YWluZXJcIiwgdGhpcy5jb250YWluZXJOb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyTm9kZS5wYXJlbnQ9dGhpcy5jb250YWluZXJOb2Rlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgIGxldCAgY29udGFpbmVyPWNvbnRhaW5lck5vZGUuZ2V0Q29tcG9uZW50KENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgIGxldCBjb2xyb3c9dGhpcy5nZXRDb250YWluZXJDb2xBbmRSb3coaW5kZXgpO1xyXG4gICAgICAgICAgICAgICBjb250YWluZXIuY29sPSBjb2xyb3cuY29sO1xyXG4gICAgICAgICAgICAgICBjb250YWluZXIucm93PSBjb2xyb3cucm93O1xyXG4gICAgICAgICAgICAgICBpZihsZXZlbERhdGEuc3BlZWQmJmxldmVsRGF0YS5zcGVlZD4wKXtcclxuICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNwZWVkPWxldmVsRGF0YS5zcGVlZDtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbml0KGNvdW50LGluZGV4TnVtLHRoaXMpO1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCxjb250YWluZXIuY29sLGNvbnRhaW5lci5yb3cpO1xyXG4gICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaChjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgICAgLy/orr7nva7otKfmnrbkvb/nlKjnmoTpmLTlvbFcclxuICAgICAgICAgICAgIC8qIGlmKGluZGV4PjAmJmluZGV4PCh0aGlzLmNvbnRhaW5BcnJheS5sZW5ndGgtMSkpe1xyXG4gICAgICAgICAgICAgICAgICBpZih0aGlzLmNvbnRhaW5BcnJheVtpbmRleC0xXT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNldFNob3coRU5VTV9DT05UQUlORVJfUE9TVElPTi5MRUZUKTtcclxuICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5jb250YWluQXJyYXlbaW5kZXgrMV09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRTaG93KEVOVU1fQ09OVEFJTkVSX1BPU1RJT04uUklHSFQpO1xyXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0U2hvdyhFTlVNX0NPTlRBSU5FUl9QT1NUSU9OLkNFTlRFUik7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfWVsc2UgaWYoaW5kZXg9PTApe1xyXG4gICAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0U2hvdyhFTlVNX0NPTlRBSU5FUl9QT1NUSU9OLkxFRlQpO1xyXG4gICAgICAgICAgICAgICB9ZWxzZSBpZihpbmRleD09KHRoaXMuY29udGFpbkFycmF5Lmxlbmd0aC0xKSl7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRTaG93KEVOVU1fQ09OVEFJTkVSX1BPU1RJT04uUklHSFQpO1xyXG4gICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5qC55o2u6LSn5p625omA5Zyo5L2N572u5pi+56S65LiN5ZCM55qE6LSn5p625Zu+54mH5ZKM6Zi05b2xXHJcbiAgICAgICAvKiBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZihjb250YWluZXIuY29sPT0wKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNDb250YWluZXJCeVBvcyhjb250YWluZXIuY29sKzEsY29udGFpbmVyLnJvdykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRTaG93KFwibGVmdFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRTaG93KFwidHJ1ZVwiLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuY29sPT1jb2wmJmVsZW1lbnQucm93PT1yb3cpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/nlJ/miJDllYblk4FcclxuICAgICAgICAvLzEu6I635Y+W6KaB5o+S5YWl55qE5ZWG5ZOB5pWw57uEXHJcbiAgICAgICAgbGV0IGdvb2RzSW5kZXhBcnIgPSBbXTtcclxuICAgICAgICBsZXQgZ29vZHNUeXBlcz1sZXZlbERhdGEuZ29vZHM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ29vZHNUeXBlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLmxldmVsPT0xKXtcclxuICAgICAgICAgICAgICAgIGdvb2RzSW5kZXhBcnIucHVzaChnb29kc1R5cGVzW2ldKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb29kc1R5cGVzXCIsZ29vZHNUeXBlc1tpXSk7ICAgIFxyXG4gICAgICAgICAgICBsZXQgdHlwZUFycmF5PWdvb2RzVHlwZXNbaV0uc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInR5cGVBcnJheVwiLHR5cGVBcnJheSk7XHJcbiAgICAgICAgICAgIGlmKHR5cGVBcnJheS5sZW5ndGg8Myl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibGV2ZWwgZ29vZHMgZXJyb3JcIix0eXBlQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WVhuWTgeWkp+exu1xyXG4gICAgICAgICAgICBsZXQgdHlwZT1OdW1iZXIodHlwZUFycmF5WzBdKTtcclxuICAgICAgICAgICAgLy/np43nsbvmlbDph4/vvIzpmo/mnLpcclxuICAgICAgICAgICAgbGV0IGNvdW50PU51bWJlcih0eXBlQXJyYXlbMV0pO1xyXG4gICAgICAgICAgICAvL+minOiJsuaVsOmHj++8jOmaj+aculxyXG4gICAgICAgICAgICBsZXQgY29sb3JOdW09TnVtYmVyKHR5cGVBcnJheVsyXSk7XHJcbiAgICAgICAgICAgIGxldCBsYXN0Z29vZHNJZD0wO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ29vZHNJZEFycmF5PUNvbnN0YW50cy5CRVZFUkFHRV9HT09EUztcclxuICAgICAgICAgICAgICAgIGxldCBtYXhDb2xvck51bT0yO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZT09RU5VTV9HT09EU19UWVBFLkRBSUxZKXtcclxuICAgICAgICAgICAgICAgICAgICBnb29kc0lkQXJyYXk9Q29uc3RhbnRzLkRBSUxZX0dPT0RTO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodHlwZT09RU5VTV9HT09EU19UWVBFLkZPT0Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIGdvb2RzSWRBcnJheT1Db25zdGFudHMuRk9PRF9HT09EUztcclxuICAgICAgICAgICAgICAgIH1lbHNlICBpZih0eXBlPT1FTlVNX0dPT0RTX1RZUEUuSlVJQ0Upe1xyXG4gICAgICAgICAgICAgICAgICAgIGdvb2RzSWRBcnJheT1Db25zdGFudHMuSlVJQ0VfR09PRFM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodHlwZT09RU5VTV9HT09EU19UWVBFLkxFVFRFUil7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHNJZEFycmF5PUNvbnN0YW50cy5MRVRURVJfR09PRFM7XHJcbiAgICAgICAgICAgICAgICB9ICBlbHNlIGlmKHR5cGU9PUVOVU1fR09PRFNfVFlQRS5QTEFOVCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHNJZEFycmF5PUNvbnN0YW50cy5QTEFOVF9HT09EUztcclxuICAgICAgICAgICAgICAgIH0gIGVsc2UgaWYodHlwZT09RU5VTV9HT09EU19UWVBFLlRPWSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHNJZEFycmF5PUNvbnN0YW50cy5UT1lfR09PRFM7XHJcbiAgICAgICAgICAgICAgICB9ICBlbHNlIGlmKHR5cGU9PUVOVU1fR09PRFNfVFlQRS5TTkFDS0ZPT0RTKXtcclxuICAgICAgICAgICAgICAgICAgICBnb29kc0lkQXJyYXk9Q29uc3RhbnRzLlNOQUNLRk9PRFNfR09PRFM7XHJcbiAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ29vZHNJZEFycmF5XCIsZ29vZHNJZEFycmF5KTsgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1heENvbG9yTnVtXCIsbWF4Q29sb3JOdW0pOyAgICAgXHJcbiAgICAgICAgICAgICAgICAvL+WFt+S9k+eahOWVhuWTgWlk77yM5LiN5YyF5ous6aKc6ImyXHJcbiAgICAgICAgICAgICAgICBsZXQgZ29vZHNJZCA9IENvbW1vblRvb2wuZ2V0UmFuZG9tQnlBcnJheShnb29kc0lkQXJyYXkpOyAgIFxyXG4gICAgICAgICAgICAgICAgbWF4Q29sb3JOdW09Z29vZHNJZC50b1N0cmluZygpLnN1YnN0cmluZygzKTtcclxuICAgICAgICAgICAgICAgIGdvb2RzSWQ9Z29vZHNJZC50b1N0cmluZygpLnN1YnN0cmluZygwLDMpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUoZ29vZHNJZD09bGFzdGdvb2RzSWQmJmdvb2RzSWRBcnJheS5sZW5ndGg+MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHNJZCA9IENvbW1vblRvb2wuZ2V0UmFuZG9tQnlBcnJheShnb29kc0lkQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heENvbG9yTnVtPWdvb2RzSWQudG9TdHJpbmcoKS5zdWJzdHJpbmcoMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHNJZD1nb29kc0lkLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsMyk7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdvb2RzSWRcIixnb29kc0lkKTsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGFzdGdvb2RzSWQ9Z29vZHNJZDtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0Q29sb3JJZD0tMTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY29sb3JOdW07IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCAgY29sb3JJZCA9IENvbW1vblRvb2wuZ2V0UmFuZG9tQnlJbnQoMSxtYXhDb2xvck51bSsxKTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSgoY29sb3JJZD09bGFzdENvbG9ySWR8fGNvbG9ySWQ+bWF4Q29sb3JOdW0pJiZtYXhDb2xvck51bT4xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JJZCA9Q29tbW9uVG9vbC5nZXRSYW5kb21CeUludCgxLG1heENvbG9yTnVtKzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndoaWxlIGNvbG9ySWRcIixjb2xvcklkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGFzdENvbG9ySWRcIixsYXN0Q29sb3JJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdENvbG9ySWQ9Y29sb3JJZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbG9ySWRcIixjb2xvcklkKTsgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihjb2xvcklkPDEwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29vZHNJbmRleEFyci5wdXNoKGdvb2RzSWQrXCIwXCIrY29sb3JJZC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29vZHNJbmRleEFyci5wdXNoKGdvb2RzSWQrXCJcIitjb2xvcklkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdvb2RzSW5kZXhBcnJcIixnb29kc0luZGV4QXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWw9PTEpeyAgLy/mlrDmiYvlhbPljaHlhpnmrbvnlJ/miJDpgLvovpFcclxuICAgICAgICAgICAgY29uc3QgdHJpcGxlZEFycmF5ID0gW107XHJcbiAgICAgICAgICAgIHRyaXBsZWRBcnJheS5wdXNoKGdvb2RzSW5kZXhBcnJbMF0pO1xyXG4gICAgICAgICAgICB0cmlwbGVkQXJyYXkucHVzaCgwKTtcclxuICAgICAgICAgICAgdHJpcGxlZEFycmF5LnB1c2goMCk7XHJcbiAgICAgICAgICAgIHRyaXBsZWRBcnJheS5wdXNoKGdvb2RzSW5kZXhBcnJbMV0pO1xyXG4gICAgICAgICAgICB0cmlwbGVkQXJyYXkucHVzaChnb29kc0luZGV4QXJyWzBdKTtcclxuICAgICAgICAgICAgdHJpcGxlZEFycmF5LnB1c2goZ29vZHNJbmRleEFyclsxXSk7XHJcbiAgICAgICAgICAgIHRyaXBsZWRBcnJheS5wdXNoKDApO1xyXG4gICAgICAgICAgICB0cmlwbGVkQXJyYXkucHVzaChnb29kc0luZGV4QXJyWzBdKTtcclxuICAgICAgICAgICAgdHJpcGxlZEFycmF5LnB1c2goZ29vZHNJbmRleEFyclsxXSk7XHJcbiAgICAgICAgICAgIGdvb2RzSW5kZXhBcnI9dHJpcGxlZEFycmF5O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBnb29kc0luZGV4QXJyPUNvbW1vblRvb2wuc2h1ZmZsZUFuZENvcHlUcmlwbGUoZ29vZHNJbmRleEFycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gZ29vZHNJbmRleEFycjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreS4gOS4quihjOWIl+WdkOagh+aYr+WQpuaciei0p+aetlxyXG4gICAgICogQHBhcmFtIGNvbCDotKfmnrbmiYDlnKjliJdcclxuICAgICAqIEBwYXJhbSByb3cg6LSn5p625omA5Zyo6KGMXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0NvbnRhaW5lckJ5UG9zKGNvbDogbnVtYmVyLCByb3c6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb250YWluZXJzIT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jb250YWluZXJzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5jb2w9PWNvbCYmZWxlbWVudC5yb3c9PXJvdyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ICAgIFxyXG5cclxuXHJcbiAgICBnZXRDb250YWluZXJDb2xBbmRSb3coaW5kZXg6bnVtYmVyKXtcclxuICAgICAgICBsZXQgY29sPU1hdGguZmxvb3IoaW5kZXglQ29uc3RhbnRzLkxFVkVMX0NPTlRBSU5FUl9DT0wpO1xyXG4gICAgICAgIGxldCByb3c9TWF0aC5mbG9vcihpbmRleC9Db25zdGFudHMuTEVWRUxfQ09OVEFJTkVSX0NPTCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudHlwZT09RU5VTV9MRVZFTF9UWVBFLk5PUk1BTCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7Y29sLHJvd307XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYodGhpcy50eXBlPT1FTlVNX0xFVkVMX1RZUEUuTU9WRSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubW92ZUNvdW50PT0xKXtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4Pj0xNSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sPSBNYXRoLmZsb29yKChpbmRleC0xNSklQ29uc3RhbnRzLkxFVkVMX0NPTlRBSU5FUl9DT0xfTU9WRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93PU1hdGguZmxvb3IoKGluZGV4LTE1KS9Db25zdGFudHMuTEVWRUxfQ09OVEFJTkVSX0NPTF9NT1ZFKSs1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1lbHNlIGlmKHRoaXMubW92ZUNvdW50PT0yKXtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4Pj0xMil7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sPSBNYXRoLmZsb29yKChpbmRleC0xMiklQ29uc3RhbnRzLkxFVkVMX0NPTlRBSU5FUl9DT0xfTU9WRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93PU1hdGguZmxvb3IoKGluZGV4LTEyKS9Db25zdGFudHMuTEVWRUxfQ09OVEFJTkVSX0NPTF9NT1ZFKSs0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1lbHNlIGlmKHRoaXMubW92ZUNvdW50PT0zKXtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4Pj05KXtcclxuICAgICAgICAgICAgICAgICAgICBjb2w9IE1hdGguZmxvb3IoKGluZGV4LTkpJUNvbnN0YW50cy5MRVZFTF9DT05UQUlORVJfQ09MX01PVkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdz1NYXRoLmZsb29yKChpbmRleC05KS9Db25zdGFudHMuTEVWRUxfQ09OVEFJTkVSX0NPTF9NT1ZFKSszO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLm1vdmVDb3VudD09NCl7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleD49Nil7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sPSBNYXRoLmZsb29yKChpbmRleC02KSVDb25zdGFudHMuTEVWRUxfQ09OVEFJTkVSX0NPTF9NT1ZFKTtcclxuICAgICAgICAgICAgICAgICAgICByb3c9TWF0aC5mbG9vcigoaW5kZXgtNikvQ29uc3RhbnRzLkxFVkVMX0NPTlRBSU5FUl9DT0xfTU9WRSkrMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtjb2wscm93fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250YWluZXJSb3coaW5kZXg6bnVtYmVyKXtcclxuICAgICAgICBpZih0aGlzLnR5cGU9PUVOVU1fTEVWRUxfVFlQRS5OT1JNQUwpe1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoaW5kZXgrMSkvQ29uc3RhbnRzLkxFVkVMX0NPTlRBSU5FUl9DT0wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250YWluZXJCeUluZGV4KGluZGV4Om51bWJlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRDb250YWluZXJCeUluZGV4XCIsaW5kZXgsdGhpcy5jb250YWluZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWluZXJzJiZ0aGlzLmNvbnRhaW5lcnMubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICBpZih0aGlzLmNvbnRhaW5lcnMubGVuZ3RoPD1pbmRleCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJzW2luZGV4XTsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGVhc2UoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICBcclxufVxyXG4iXX0=