"use strict";
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