
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/Container.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d3556NhelJUKip2cr2YDWB', 'Container');
// scripts/game/Container.ts

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
var DataManager_1 = require("../manager/DataManager");
var PoolManager_1 = require("../manager/PoolManager");
var SdkManager_1 = require("../manager/SdkManager");
var ToastManager_1 = require("../manager/ToastManager");
var Goods_1 = require("./Goods");
var Tip_1 = require("../ui/Tip");
var Utils_1 = require("../Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //是关卡中第几个货架
        _this.index = -1;
        // 节点
        _this.front = null;
        _this.back = null;
        // 加锁
        _this.lockNode = null;
        _this.lockNumberLabel = null;
        _this.isLock = false;
        _this.lockNum = 0;
        _this.col = 0;
        _this.row = 0;
        _this.levels = null;
        _this.idNumber = 1;
        //货架实时商品总数
        _this.goodsCount = 0;
        //移动速度 可以控制速度来调节难度，最大不超过5，最小1
        _this.speed = 1.6;
        _this.type = Enum_1.ENUM_CONTAINER_TYPE.NORMAL;
        _this.leftBg = null;
        _this.normalBg = null;
        _this.rightBg = null;
        _this.shader1 = null;
        return _this;
    }
    Container_1 = Container;
    Container.prototype.initData = function () {
        this.lockNum = 0;
        this.idNumber = 0;
        this.isLock = false;
        this.type = Enum_1.ENUM_CONTAINER_TYPE.NORMAL;
        this.leftBg.active = false;
        this.rightBg.active = false;
        this.normalBg.active = true;
        this.shader1.active = true;
    };
    Container.prototype.init = function (index, idNumber, levels) {
        this.leftBg = cc.find("left", this.node);
        this.normalBg = cc.find("normal", this.node);
        this.rightBg = cc.find("right", this.node);
        this.shader1 = cc.find("shader1", this.node);
        this.initData();
        this.idNumber = idNumber;
        this.levels = levels;
        this.index = index;
        this.back = this.node.getChildByName('back');
        this.back.children.forEach(function (backContainer) {
            DataManager_1.default.instance.backContainers.push(backContainer);
            var goods = backContainer.getChildByName('Goods');
            if (goods) {
                goods.removeAllChildren;
            }
        });
        this.front = this.node.getChildByName('front');
        this.front.children.forEach(function (frontContainer) {
            DataManager_1.default.instance.frontContainers.push(frontContainer);
            var goods = frontContainer.getChildByName('Goods');
            if (goods) {
                goods.removeAllChildren;
            }
        });
        if (Container_1.isLockContainer(this.idNumber)) {
            this.lockNum = this.idNumber - 10;
        }
        //设置货架的移动属性
        if (this.levels.type == Enum_1.ENUM_LEVEL_TYPE.MOVE && this.levels.moveCount >= 1) {
            if (this.levels.moveCount == 1) {
                if (this.row == 5) {
                    this.type = Enum_1.ENUM_CONTAINER_TYPE.MOVE;
                }
            }
            else if (this.levels.moveCount == 2) {
                if (this.row >= 4) {
                    this.type = Enum_1.ENUM_CONTAINER_TYPE.MOVE;
                }
            }
            else if (this.levels.moveCount == 3) {
                if (this.row >= 3) {
                    this.type = Enum_1.ENUM_CONTAINER_TYPE.MOVE;
                }
            }
            else if (this.levels.moveCount == 4) {
                if (this.row >= 2) {
                    this.type = Enum_1.ENUM_CONTAINER_TYPE.MOVE;
                }
            }
        }
        if (this.type == Enum_1.ENUM_CONTAINER_TYPE.MOVE) {
            this.node.parent.x = this.node.parent.x + (5 - this.row) * 20;
        }
        this.lockNode.active = false;
        if (this.lockNum > 0) {
            this.isLock = true;
            this.type = Enum_1.ENUM_CONTAINER_TYPE.LOCK;
            this.levels.locks.push(this);
            this.lockNode.active = true;
            this.lockNode.getChildByName('adNode').on('click', this.onLockClick, this);
            this.lockNumberLabel.string = this.lockNum + "";
        }
        this.setShow();
    };
    //设置货架显示背景图片
    Container.prototype.setShow = function () {
        if (this.levels.level == 1) {
            if (this.col == 0) {
                this.leftBg.active = false;
                this.normalBg.active = true;
                this.rightBg.active = false;
                this.shader1.active = true;
                this.shader1.width = 50;
                this.shader1.x = -25;
            }
            else if (this.col == 2) {
                this.leftBg.active = false;
                this.normalBg.active = false;
                this.rightBg.active = true;
                this.shader1.width = 245;
                this.shader1.x = -120;
            }
            else if (this.col == 1) {
                this.leftBg.active = true;
                this.normalBg.active = false;
                this.rightBg.active = false;
                this.shader1.width = 245;
            }
            return;
        }
        if (this.col == 0) {
            this.leftBg.active = true;
            this.normalBg.active = false;
            this.rightBg.active = false;
            this.shader1.width = 245;
        }
        else if (this.col == 2) {
            this.leftBg.active = false;
            this.normalBg.active = false;
            this.rightBg.active = true;
            this.shader1.width = 245;
            this.shader1.x = -120;
        }
        else if (this.col == 1) {
            this.leftBg.active = false;
            this.normalBg.active = true;
            this.rightBg.active = false;
            this.normalBg.width = 265;
            this.node.parent.width = 265;
        }
    };
    //left center right
    Container.prototype.setShader = function (showType, isShader) {
        if (showType == "left") {
            this.leftBg.active = true;
            this.normalBg.active = false;
            this.rightBg.active = false;
            if (isShader) {
                this.shader1.active = true;
                this.shader1.width = 245;
            }
        }
        else if (showType == "right") {
            this.leftBg.active = false;
            this.normalBg.active = false;
            this.rightBg.active = true;
            if (isShader) {
                this.shader1.active = true;
                this.shader1.width = 245;
                this.shader1.x = -120;
            }
        }
        else if (showType == "center") {
            this.leftBg.active = false;
            this.normalBg.active = true;
            this.rightBg.active = false;
            if (isShader) {
                this.shader1.active = true;
            }
        }
    };
    // 入前排
    Container.prototype.initFront = function () {
        if (DataManager_1.default.instance.goodsData.length <= 0)
            return;
        var arr = DataManager_1.default.instance.goodsData[this.index];
        var data = arr.pop();
        if (!data || data.length <= 0)
            return;
        for (var i = 0; i < data.length; i++) {
            //console.log(data[i]);
            //代表这个位置留空
            if (data[i] == 0) {
                continue;
            }
            var goodsNode = PoolManager_1.default.instance.getNode('Goods');
            var goods = goodsNode.getComponent(Goods_1.default);
            goods.init({ id: data[i], index: i, isBack: false });
            goodsNode.parent = this.front.children[i];
            goods.container = this;
            this.goodsCount++;
        }
    };
    // 入后排
    Container.prototype.initBack = function () {
        if (DataManager_1.default.instance.goodsData.length <= 0)
            return;
        var arr = DataManager_1.default.instance.goodsData[this.index];
        var data = arr.pop();
        if (!data || data.length <= 0)
            return;
        for (var i = 0; i < data.length; i++) {
            var goodsNode = PoolManager_1.default.instance.getNode('Goods');
            var goods = goodsNode.getComponent(Goods_1.default);
            goods.init({ id: data[i], index: i, isBack: true });
            goodsNode.parent = this.back.children[i];
            goods.container = this;
            this.goodsCount++;
        }
    };
    //获取货架的总层数
    Container.prototype.getLayerCount = function () {
        var layer = 0;
        var array = DataManager_1.default.instance.goodsData[this.index];
        if (array && array.length > 0) {
            layer = 2 + array.length;
            return layer;
        }
        for (var i = 0; i < this.back.children.length; i++) {
            var backContainer = this.back.children[i];
            var goods = backContainer.getChildByName('Goods');
            if (goods) {
                layer = 2;
                return layer;
            }
        }
        for (var i = 0; i < this.front.children.length; i++) {
            var frontContainer = this.front.children[i];
            var goods = frontContainer.getChildByName('Goods');
            if (goods) {
                layer = 1;
                return layer;
            }
        }
        return layer;
    };
    //判断该货架的第2或者3层是否有空位，有返回对应的层数，否则返回0。如果这一层有两个goodsId，也不能增加
    //goodsId不传时不校验3个商品相同问题
    Container.prototype.getEmptyLayer = function (goodsId) {
        if (goodsId == null)
            goodsId = -1;
        var array = DataManager_1.default.instance.goodsData[this.index];
        if (array && array.length > 0) {
            var data = array[array.length - 1];
            if (data && data.length < 3) {
                if (data.length == 1) {
                    return 3;
                }
                for (var i = 0; i < data.length; i++) {
                    if (data[i] != goodsId) {
                        return 3;
                    }
                }
            }
        }
        var goodsArray = [];
        for (var i = 0; i < this.back.children.length; i++) {
            var backContainer = this.back.children[i];
            var goods = backContainer.getChildByName('Goods');
            if (goods) {
                var goodsComponent = goods.getComponent(Goods_1.default);
                goodsArray.push(goodsComponent.id);
            }
        }
        if (goodsArray == null || goodsArray.length == 1) {
            return 2;
        }
        //不能三个商品的id都相同
        if (goodsArray.length == 2) {
            if (goodsArray[0] != goodsId || goodsId != goodsArray[1]) {
                return 2;
            }
        }
        return 0;
    };
    // back层转front层, 同时生成新的back层
    Container.prototype.backToFront = function () {
        var isGoods = this.front.children.findIndex(function (container) { return container.getChildByName('Goods'); });
        if (isGoods < 0) {
            var isBackToFront = false;
            for (var i = 0; i < this.back.children.length; i++) {
                var backContainer = this.back.children[i];
                var goods = backContainer.getChildByName('Goods');
                if (goods) {
                    isBackToFront = true;
                    var goodsComponent = goods.getComponent(Goods_1.default);
                    goods.parent = this.front.children[i];
                    goodsComponent.setFront();
                }
            }
            if (isBackToFront) {
                // 生成新back层
                this.initBack();
            }
        }
    };
    // 消除front层
    Container.prototype.clearFront = function () {
        var goodsIndex = -1;
        var isClear = true;
        for (var i = 0; i < this.front.children.length; i++) {
            var goods = this.front.children[i].getChildByName('Goods');
            if (goods) {
                var index = goods.getComponent(Goods_1.default).id;
                if (goodsIndex >= 0) {
                    if (goodsIndex != index) {
                        isClear = false;
                        break;
                    }
                }
                else {
                    goodsIndex = index;
                }
            }
            else {
                isClear = false;
                break;
            }
        }
        if (isClear) {
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLEAR);
            for (var i = 0; i < this.front.children.length; i++) {
                var goods = this.front.children[i].getChildByName('Goods');
                var goodsComponent = goods.getComponent(Goods_1.default);
                goodsComponent.setClear();
            }
            DataManager_1.default.instance.levelData.clearAllNums++;
            DataManager_1.default.instance.levelData.currentClearNums++;
            var starPos = Utils_1.toXY(this.node, StaticInstance_1.StaticInstance.gameManager.stage);
            DataManager_1.default.instance.starStartPosArr.push(starPos);
            this.backToFront();
            // 解锁
            if (this.levels.locks && this.levels.locks.length > 0) {
                this.levels.locks[0].updateLockNum();
            }
            // 取消时停技能
            if (StaticInstance_1.StaticInstance.uiManager.isActive(Enum_1.ENUM_UI_TYPE.ICE)) {
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ICE, false);
                StaticInstance_1.StaticInstance.uiManager.setMainTimer(true);
                StaticInstance_1.StaticInstance.uiManager.setMainTimerSound(true);
            }
            // 连击进度
            if (DataManager_1.default.instance.levelData.level != 1) {
                StaticInstance_1.StaticInstance.uiManager.setMainProgress();
            }
            // 取消第一关tip
            if (DataManager_1.default.instance.levelData.level == 1 && StaticInstance_1.StaticInstance.gameManager.tipNode) {
                if (DataManager_1.default.instance.levelData.newGuideStep == 1) {
                    DataManager_1.default.instance.levelData.newGuideStep++;
                    var tip = StaticInstance_1.StaticInstance.gameManager.tipNode.addComponent(Tip_1.default);
                    tip.startTip(DataManager_1.default.instance.levelData.newGuideStep);
                }
                else {
                    StaticInstance_1.StaticInstance.gameManager.tipNode.removeFromParent();
                }
            }
        }
        StaticInstance_1.StaticInstance.gameManager.onGameCheck();
    };
    //在指定层增加商品g
    Container.prototype.addGoodsById = function (layer, goodsId) {
        if (layer == 1) {
            for (var i = 0; i < this.front.children.length; i++) {
                var backContainer = this.front.children[i];
                var goods = backContainer.getChildByName('Goods');
                if (!goods) {
                    var goodsNode = PoolManager_1.default.instance.getNode('Goods');
                    var goods_1 = goodsNode.getComponent(Goods_1.default);
                    goods_1.init({ id: goodsId, index: i, isBack: true });
                    goodsNode.parent = this.front.children[i];
                    goods_1.container = this;
                    this.goodsCount++;
                    return true;
                }
            }
            console.log("front 没有空位", goodsId, this.index);
            return false;
        }
        else if (layer == 2) {
            for (var i = 0; i < this.back.children.length; i++) {
                var backContainer = this.back.children[i];
                var goods = backContainer.getChildByName('Goods');
                if (!goods) {
                    var goodsNode = PoolManager_1.default.instance.getNode('Goods');
                    var goods_2 = goodsNode.getComponent(Goods_1.default);
                    goods_2.init({ id: goodsId, index: i, isBack: true });
                    goodsNode.parent = this.back.children[i];
                    goods_2.container = this;
                    this.goodsCount++;
                    return true;
                }
            }
            console.log("back 没有空位", goodsId, this.index);
            return false;
        }
        else {
            var arr = DataManager_1.default.instance.goodsData[this.index];
            //层数不一致
            if ((layer - 2) > arr.length) {
                console.error("没有" + layer + "层", goodsId, this.index, arr.length);
                return false;
            }
            layer = layer - 2;
            var data = arr[arr.length - layer];
            if (!data || data.length <= 0 || data.length >= 3)
                return false;
            data.push(goodsId);
            DataManager_1.default.instance.goodsData[this.index][arr.length - layer] = data;
            return true;
        }
    };
    //修改指定位置的商品
    Container.prototype.updateGoodsById = function (layer, oldGoodsId, newGoodsId) {
        if (layer == 1) {
            for (var i = 0; i < this.front.children.length; i++) {
                var goods = this.front.children[i].getChildByName('Goods');
                var goodsComponent = goods.getComponent(Goods_1.default);
                if (goodsComponent.id == oldGoodsId) {
                    goodsComponent.setId(newGoodsId);
                    return true;
                }
            }
            return false;
        }
        else if (layer == 2) {
            for (var i = 0; i < this.back.children.length; i++) {
                var goods = this.back.children[i].getChildByName('Goods');
                var goodsComponent = goods.getComponent(Goods_1.default);
                if (goodsComponent.id == oldGoodsId) {
                    goodsComponent.setId(newGoodsId);
                    return true;
                }
            }
            return false;
        }
        else {
            var arr = DataManager_1.default.instance.goodsData[this.index];
            //层数不一致
            if ((layer - 2) != arr.length) {
                return false;
            }
            layer = layer - 2;
            var data = arr[arr.length - layer];
            if (!data || data.length <= 0)
                return false;
            for (var i = 0; i < data.length; i++) {
                if (oldGoodsId == data[i]) {
                    DataManager_1.default.instance.goodsData[this.index][arr.length - layer][i] = newGoodsId;
                    return true;
                }
            }
            return false;
        }
    };
    Container.prototype.onLockClick = function () {
        var _this = this;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        SdkManager_1.default.instance.showVideoAd(function (msg) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!SdkManager_1.default.instance.getPlatform()) {
                    ToastManager_1.default.instance.show(msg, { gravity: 'BOTTOM', bg_color: cc.color(102, 202, 28, 255) });
                }
                this.setLockOpen();
                return [2 /*return*/];
            });
        }); }, function (msg) {
            ToastManager_1.default.instance.show(msg, { gravity: 'BOTTOM', bg_color: cc.color(226, 69, 109, 255) });
        });
    };
    Container.prototype.updateLockNum = function () {
        this.lockNum--;
        this.lockNumberLabel.string = this.lockNum + "";
        if (this.lockNum <= 0) {
            this.setLockOpen();
        }
    };
    Container.prototype.setLockOpen = function () {
        var _this = this;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.UNLOCK);
        this.isLock = false;
        this.lockNum = 0;
        var index = this.levels.locks.findIndex(function (lock) { return lock == _this; });
        this.levels.locks.splice(index, 1);
        this.lockNode.active = false;
    };
    Container.isLockContainer = function (type) {
        if (type > 10 && type <= 15) {
            return true;
        }
        return false;
    };
    Container.prototype.update = function (dt) {
        //左右移动货架
        if (this.type == Enum_1.ENUM_CONTAINER_TYPE.MOVE) {
            this.node.parent.x = this.node.parent.x + this.speed;
            if (this.node.parent.x > 600) {
                this.node.parent.x = -600;
            }
        }
    };
    var Container_1;
    __decorate([
        property(cc.Node)
    ], Container.prototype, "lockNode", void 0);
    __decorate([
        property(cc.Label)
    ], Container.prototype, "lockNumberLabel", void 0);
    Container = Container_1 = __decorate([
        ccclass
    ], Container);
    return Container;
}(cc.Component));
exports.default = Container;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWUvQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGdDQUF1STtBQUN2SSxvREFBbUQ7QUFDbkQsd0RBQW1EO0FBQ25ELHNEQUFpRDtBQUNqRCxzREFBaUQ7QUFDakQsb0RBQStDO0FBQy9DLHdEQUFtRDtBQUNuRCxpQ0FBNEI7QUFFNUIsaUNBQTRCO0FBQzVCLGtDQUFnQztBQUUxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW1oQkM7UUFqaEJHLFdBQVc7UUFDWCxXQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUE7UUFDbEIsS0FBSztRQUNMLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixLQUFLO1FBRUwsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixxQkFBZSxHQUFhLElBQUksQ0FBQztRQUVqQyxZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGFBQU8sR0FBUSxDQUFDLENBQUM7UUFFakIsU0FBRyxHQUFRLENBQUMsQ0FBQztRQUNiLFNBQUcsR0FBUSxDQUFDLENBQUM7UUFDYixZQUFNLEdBQVEsSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBUSxDQUFDLENBQUM7UUFFbEIsVUFBVTtRQUNWLGdCQUFVLEdBQVEsQ0FBQyxDQUFDO1FBRXBCLDZCQUE2QjtRQUM3QixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLFVBQUksR0FBcUIsMEJBQW1CLENBQUMsTUFBTSxDQUFDO1FBR3BELFlBQU0sR0FBUyxJQUFJLENBQUM7UUFDcEIsY0FBUSxHQUFTLElBQUksQ0FBQztRQUN0QixhQUFPLEdBQVMsSUFBSSxD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Q0FBQyxDQUFBO1lBQ3ZELElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUE7WUFDM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUNsRCxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLEtBQUssQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFFRCxNQUFNO0lBQ04sNEJBQVEsR0FBUjtRQUNJLElBQUkscUJBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTTtRQUN0RCxJQUFNLEdBQUcsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RELElBQU0sSUFBSSxHQUFRLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU07UUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBTSxTQUFTLEdBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3ZELElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUE7WUFDM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFB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QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBQyxHQUFHLEVBQUM7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUcsQ0FBQzthQUMzQjtTQUNKO0lBQ0wsQ0FBQzs7SUF6Z0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDYztJQVpoQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBbWhCN0I7SUFBRCxnQkFBQztDQW5oQkQsQUFtaEJDLENBbmhCc0MsRUFBRSxDQUFDLFNBQVMsR0FtaEJsRDtrQkFuaEJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fQ09OVEFJTkVSX1BPU1RJT04sIEVOVU1fQ09OVEFJTkVSX1RZUEUsIEVOVU1fR09PRFNfVFlQRSwgRU5VTV9MRVZFTF9UWVBFLCBFTlVNX1VJX1RZUEUgfSBmcm9tIFwiLi4vRW51bVwiO1xyXG5pbXBvcnQgeyBTdGF0aWNJbnN0YW5jZSB9IGZyb20gXCIuLi9TdGF0aWNJbnN0YW5jZVwiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFBvb2xNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL1Bvb2xNYW5hZ2VyXCI7XHJcbmltcG9ydCBTZGtNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL1Nka01hbmFnZXJcIjtcclxuaW1wb3J0IFRvYXN0TWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9Ub2FzdE1hbmFnZXJcIjtcclxuaW1wb3J0IEdvb2RzIGZyb20gXCIuL0dvb2RzXCI7XHJcbmltcG9ydCBMZXZlbHMgZnJvbSBcIi4vTGV2ZWxzXCI7XHJcbmltcG9ydCBUaXAgZnJvbSBcIi4uL3VpL1RpcFwiO1xyXG5pbXBvcnQgeyB0b1hZIH0gZnJvbSBcIi4uL1V0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgLy/mmK/lhbPljaHkuK3nrKzlh6DkuKrotKfmnrZcclxuICAgIGluZGV4OiBudW1iZXIgPSAtMVxyXG4gICAgLy8g6IqC54K5XHJcbiAgICBmcm9udDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBiYWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIOWKoOmUgVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2NrTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbG9ja051bWJlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgaXNMb2NrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBsb2NrTnVtOm51bWJlcj0wO1xyXG5cclxuICAgIGNvbDpudW1iZXI9MDtcclxuICAgIHJvdzpudW1iZXI9MDtcclxuICAgIGxldmVsczpMZXZlbHM9bnVsbDtcclxuXHJcbiAgICBpZE51bWJlcjpudW1iZXI9MTtcclxuXHJcbiAgICAvL+i0p+aetuWunuaXtuWVhuWTgeaAu+aVsFxyXG4gICAgZ29vZHNDb3VudDpudW1iZXI9MDtcclxuXHJcbiAgICAvL+enu+WKqOmAn+W6piDlj6/ku6XmjqfliLbpgJ/luqbmnaXosIPoioLpmr7luqbvvIzmnIDlpKfkuI3otoXov4c177yM5pyA5bCPMVxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDEuNjtcclxuICAgIHR5cGU6RU5VTV9DT05UQUlORVJfVFlQRT1FTlVNX0NPTlRBSU5FUl9UWVBFLk5PUk1BTDtcclxuXHJcblxyXG4gICAgbGVmdEJnOmNjLk5vZGU9bnVsbDtcclxuICAgIG5vcm1hbEJnOmNjLk5vZGU9bnVsbDtcclxuICAgIHJpZ2h0Qmc6Y2MuTm9kZT1udWxsO1xyXG4gICAgc2hhZGVyMTpjYy5Ob2RlPW51bGw7XHJcblxyXG5cclxuICAgIGluaXREYXRhKCl7XHJcbiAgICAgICAgdGhpcy5sb2NrTnVtPTA7XHJcbiAgICAgICAgdGhpcy5pZE51bWJlcj0wO1xyXG4gICAgICAgIHRoaXMuaXNMb2NrPWZhbHNlO1xyXG4gICAgICAgIHRoaXMudHlwZT1FTlVNX0NPTlRBSU5FUl9UWVBFLk5PUk1BTDtcclxuICAgICAgICB0aGlzLmxlZnRCZy5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yaWdodEJnLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB0aGlzLm5vcm1hbEJnLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMuc2hhZGVyMS5hY3RpdmU9dHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KGluZGV4OiBudW1iZXIsaWROdW1iZXI6bnVtYmVyLGxldmVsczpMZXZlbHMpIHtcclxuICAgICAgICB0aGlzLmxlZnRCZz1jYy5maW5kKFwibGVmdFwiLHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub3JtYWxCZz1jYy5maW5kKFwibm9ybWFsXCIsdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLnJpZ2h0Qmc9Y2MuZmluZChcInJpZ2h0XCIsdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLnNoYWRlcjE9Y2MuZmluZChcInNoYWRlcjFcIix0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICB0aGlzLmlkTnVtYmVyPWlkTnVtYmVyO1xyXG4gICAgICAgIHRoaXMubGV2ZWxzPWxldmVscztcclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5iYWNrID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdiYWNrJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFjay5jaGlsZHJlbi5mb3JFYWNoKGJhY2tDb250YWluZXIgPT4ge1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5iYWNrQ29udGFpbmVycy5wdXNoKGJhY2tDb250YWluZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBnb29kcyA9IGJhY2tDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ0dvb2RzJyk7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZ29vZHMpIHtcclxuICAgICAgICAgICAgICAgIGdvb2RzLnJlbW92ZUFsbENoaWxkcmVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZyb250ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdmcm9udCcpXHJcbiAgICAgICAgdGhpcy5mcm9udC5jaGlsZHJlbi5mb3JFYWNoKGZyb250Q29udGFpbmVyID0+IHtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZnJvbnRDb250YWluZXJzLnB1c2goZnJvbnRDb250YWluZXIpXHJcbiAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gZnJvbnRDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ0dvb2RzJylcclxuICAgICAgICAgICAgICAgIGlmIChnb29kcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdvb2RzLnJlbW92ZUFsbENoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihDb250YWluZXIuaXNMb2NrQ29udGFpbmVyKHRoaXMuaWROdW1iZXIpKXtcclxuICAgICAgICAgICAgICAgdGhpcy5sb2NrTnVtICA9dGhpcy5pZE51bWJlci0xMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAvL+iuvue9rui0p+aetueahOenu+WKqOWxnuaAp1xyXG4gICAgICAgICBpZih0aGlzLmxldmVscy50eXBlPT1FTlVNX0xFVkVMX1RZUEUuTU9WRSYmdGhpcy5sZXZlbHMubW92ZUNvdW50Pj0xKXtcclxuICAgICAgICAgICAgaWYodGhpcy5sZXZlbHMubW92ZUNvdW50PT0xKXtcclxuICAgICAgICAgICAgICAgICBpZih0aGlzLnJvdz09NSl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZT1FTlVNX0NPTlRBSU5FUl9UWVBFLk1PVkU7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmxldmVscy5tb3ZlQ291bnQ9PTIpe1xyXG4gICAgICAgICAgICAgICAgIGlmKHRoaXMucm93Pj00KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGU9RU5VTV9DT05UQUlORVJfVFlQRS5NT1ZFO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5sZXZlbHMubW92ZUNvdW50PT0zKXtcclxuICAgICAgICAgICAgICAgICBpZih0aGlzLnJvdz49Myl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlPUVOVU1fQ09OVEFJTkVSX1RZUEUuTU9WRTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmxldmVscy5tb3ZlQ291bnQ9PTQpe1xyXG4gICAgICAgICAgICAgICAgIGlmKHRoaXMucm93Pj0yKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGU9RU5VTV9DT05UQUlORVJfVFlQRS5NT1ZFO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudHlwZT09RU5VTV9DT05UQUlORVJfVFlQRS5NT1ZFKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC54PXRoaXMubm9kZS5wYXJlbnQueCsoNS10aGlzLnJvdykqMjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmxvY2tOb2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgaWYodGhpcy5sb2NrTnVtPjApe1xyXG4gICAgICAgICAgICAgdGhpcy5pc0xvY2s9dHJ1ZTtcclxuICAgICAgICAgICAgIHRoaXMudHlwZT1FTlVNX0NPTlRBSU5FUl9UWVBFLkxPQ0s7XHJcbiAgICAgICAgICAgICB0aGlzLmxldmVscy5sb2Nrcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgICAgICAgdGhpcy5sb2NrTm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgIHRoaXMubG9ja05vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2FkTm9kZScpLm9uKCdjbGljaycsIHRoaXMub25Mb2NrQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICAgdGhpcy5sb2NrTnVtYmVyTGFiZWwuc3RyaW5nPXRoaXMubG9ja051bStcIlwiO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuc2V0U2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6K6+572u6LSn5p625pi+56S66IOM5pmv5Zu+54mHXHJcbiAgICBzZXRTaG93KCl7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWxzLmxldmVsPT0xKXtcclxuICAgICAgICAgICAgaWYodGhpcy5jb2w9PTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0QmcuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3JtYWxCZy5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRCZy5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRlcjEuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRlcjEud2lkdGg9NTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRlcjEueD0tMjU7XHJcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbD09Mil7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0QmcuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMubm9ybWFsQmcuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMucmlnaHRCZy5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnNoYWRlcjEud2lkdGg9MjQ1O1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuc2hhZGVyMS54PS0xMjA7XHJcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbD09MSl7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0QmcuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5ub3JtYWxCZy5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5yaWdodEJnLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnNoYWRlcjEud2lkdGg9MjQ1O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jb2w9PTApe1xyXG5cclxuICAgICAgICAgICB0aGlzLmxlZnRCZy5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICB0aGlzLm5vcm1hbEJnLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICB0aGlzLnJpZ2h0QmcuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgIHRoaXMuc2hhZGVyMS53aWR0aD0yNDU7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb2w9PTIpe1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRCZy5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFsQmcuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0QmcuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhZGVyMS53aWR0aD0yNDU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhZGVyMS54PS0xMjA7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb2w9PTEpe1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRCZy5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFsQmcuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCZy5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFsQmcud2lkdGg9MjY1O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LndpZHRoPTI2NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9sZWZ0IGNlbnRlciByaWdodFxyXG4gICAgc2V0U2hhZGVyKHNob3dUeXBlOnN0cmluZyxpc1NoYWRlcil7XHJcbiAgICAgICAgaWYoc2hvd1R5cGU9PVwibGVmdFwiKXtcclxuICAgICAgICAgICB0aGlzLmxlZnRCZy5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICB0aGlzLm5vcm1hbEJnLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICB0aGlzLnJpZ2h0QmcuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgIGlmKGlzU2hhZGVyKXtcclxuICAgICAgICAgICAgICAgdGhpcy5zaGFkZXIxLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICB0aGlzLnNoYWRlcjEud2lkdGg9MjQ1O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihzaG93VHlwZT09XCJyaWdodFwiKXtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QmcuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbEJnLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJnLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICBpZihpc1NoYWRlcil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRlcjEuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRlcjEud2lkdGg9MjQ1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFkZXIxLng9LTEyMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9ZWxzZSBpZihzaG93VHlwZT09XCJjZW50ZXJcIil7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEJnLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxCZy5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJnLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgaWYoaXNTaGFkZXIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFkZXIxLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyDlhaXliY3mjpJcclxuICAgIGluaXRGcm9udCgpIHtcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ29vZHNEYXRhLmxlbmd0aCA8PSAwKSByZXR1cm5cclxuICAgICAgICBjb25zdCBhcnIgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5nb29kc0RhdGFbdGhpcy5pbmRleF1cclxuICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSBhcnIucG9wKClcclxuICAgICAgICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YVtpXSk7XHJcbiAgICAgICAgICAgIC8v5Luj6KGo6L+Z5Liq5L2N572u55WZ56m6XHJcbiAgICAgICAgICAgIGlmKGRhdGFbaV09PTApe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZ29vZHNOb2RlID0gUG9vbE1hbmFnZXIuaW5zdGFuY2UuZ2V0Tm9kZSgnR29vZHMnKVxyXG4gICAgICAgICAgICBjb25zdCBnb29kcyA9IGdvb2RzTm9kZS5nZXRDb21wb25lbnQoR29vZHMpXHJcbiAgICAgICAgICAgIGdvb2RzLmluaXQoeyBpZDogZGF0YVtpXSxpbmRleDppLCBpc0JhY2s6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIGdvb2RzTm9kZS5wYXJlbnQgPSB0aGlzLmZyb250LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBnb29kcy5jb250YWluZXI9dGhpcztcclxuICAgICAgICAgICAgdGhpcy5nb29kc0NvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWFpeWQjuaOklxyXG4gICAgaW5pdEJhY2soKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLmdvb2RzRGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgYXJyID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ29vZHNEYXRhW3RoaXMuaW5kZXhdXHJcbiAgICAgICAgY29uc3QgZGF0YTogYW55ID0gYXJyLnBvcCgpO1xyXG4gICAgICAgIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZ29vZHNOb2RlID0gUG9vbE1hbmFnZXIuaW5zdGFuY2UuZ2V0Tm9kZSgnR29vZHMnKVxyXG4gICAgICAgICAgICBjb25zdCBnb29kcyA9IGdvb2RzTm9kZS5nZXRDb21wb25lbnQoR29vZHMpXHJcbiAgICAgICAgICAgIGdvb2RzLmluaXQoeyBpZDogZGF0YVtpXSwgaW5kZXg6aSxpc0JhY2s6IHRydWUgfSlcclxuICAgICAgICAgICAgZ29vZHNOb2RlLnBhcmVudCA9IHRoaXMuYmFjay5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgZ29vZHMuY29udGFpbmVyPXRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuZ29vZHNDb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPlui0p+aetueahOaAu+WxguaVsFxyXG4gICAgZ2V0TGF5ZXJDb3VudCgpe1xyXG4gICAgICAgIGxldCBsYXllcj0wO1xyXG4gICAgICAgIGxldCBhcnJheT1EYXRhTWFuYWdlci5pbnN0YW5jZS5nb29kc0RhdGFbdGhpcy5pbmRleF07XHJcbiAgICAgICAgaWYoYXJyYXkmJmFycmF5Lmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgbGF5ZXI9MithcnJheS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHJldHVybiBsYXllcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iYWNrLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhY2tDb250YWluZXIgPSB0aGlzLmJhY2suY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgY29uc3QgZ29vZHMgPSBiYWNrQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKCdHb29kcycpXHJcbiAgICAgICAgICAgIGlmIChnb29kcykge1xyXG4gICAgICAgICAgICAgICAgbGF5ZXI9MjtcclxuICAgICAgICAgICAgICAgIHJldHVybiAgbGF5ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZnJvbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZnJvbnRDb250YWluZXIgPSB0aGlzLmZyb250LmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gZnJvbnRDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ0dvb2RzJylcclxuICAgICAgICAgICAgaWYgKGdvb2RzKSB7XHJcbiAgICAgICAgICAgICAgICBsYXllcj0xO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICBsYXllcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiBsYXllcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgICAgIC8v5Yik5pat6K+l6LSn5p6255qE56ysMuaIluiAhTPlsYLmmK/lkKbmnInnqbrkvY3vvIzmnInov5Tlm57lr7nlupTnmoTlsYLmlbDvvIzlkKbliJnov5Tlm54w44CC5aaC5p6c6L+Z5LiA5bGC5pyJ5Lik5LiqZ29vZHNJZO+8jOS5n+S4jeiDveWinuWKoFxyXG4gICAgICAgIC8vZ29vZHNJZOS4jeS8oOaXtuS4jeagoemqjDPkuKrllYblk4Hnm7jlkIzpl67pophcclxuICAgICAgICBnZXRFbXB0eUxheWVyKGdvb2RzSWQ/Om51bWJlcik6bnVtYmVye1xyXG4gICAgICAgICAgICBpZihnb29kc0lkPT1udWxsKWdvb2RzSWQ9LTE7XHJcbiAgICAgICAgICAgIGxldCBhcnJheT1EYXRhTWFuYWdlci5pbnN0YW5jZS5nb29kc0RhdGFbdGhpcy5pbmRleF07XHJcbiAgICAgICAgICAgIGlmKGFycmF5JiZhcnJheS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgIGRhdGE6IGFueSA9IGFycmF5W2FycmF5Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEmJmRhdGEubGVuZ3RoPDMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubGVuZ3RoPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmKCBkYXRhW2ldIT1nb29kc0lkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBnb29kc0FycmF5PVtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFjay5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFja0NvbnRhaW5lciA9IHRoaXMuYmFjay5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ29vZHMgPSBiYWNrQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKCdHb29kcycpXHJcbiAgICAgICAgICAgICAgICBpZiAoZ29vZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnb29kc0NvbXBvbmVudCA9IGdvb2RzLmdldENvbXBvbmVudChHb29kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHNBcnJheS5wdXNoKGdvb2RzQ29tcG9uZW50LmlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihnb29kc0FycmF5PT1udWxsfHxnb29kc0FycmF5Lmxlbmd0aD09MSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+S4jeiDveS4ieS4quWVhuWTgeeahGlk6YO955u45ZCMXHJcbiAgICAgICAgICAgIGlmKGdvb2RzQXJyYXkubGVuZ3RoPT0yKXtcclxuICAgICAgICAgICAgICAgIGlmKGdvb2RzQXJyYXlbMF0hPWdvb2RzSWR8fGdvb2RzSWQhPWdvb2RzQXJyYXlbMV0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vIGJhY2vlsYLovaxmcm9udOWxgiwg5ZCM5pe255Sf5oiQ5paw55qEYmFja+WxglxyXG4gICAgYmFja1RvRnJvbnQoKSB7XHJcbiAgICAgICAgY29uc3QgaXNHb29kcyA9IHRoaXMuZnJvbnQuY2hpbGRyZW4uZmluZEluZGV4KGNvbnRhaW5lciA9PiBjb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ0dvb2RzJykpXHJcbiAgICAgICAgaWYgKGlzR29vZHMgPCAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpc0JhY2tUb0Zyb250OiBib29sZWFuID0gZmFsc2VcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJhY2suY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tDb250YWluZXIgPSB0aGlzLmJhY2suY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gYmFja0NvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZSgnR29vZHMnKVxyXG4gICAgICAgICAgICAgICAgaWYgKGdvb2RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNCYWNrVG9Gcm9udCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnb29kc0NvbXBvbmVudCA9IGdvb2RzLmdldENvbXBvbmVudChHb29kcylcclxuICAgICAgICAgICAgICAgICAgICBnb29kcy5wYXJlbnQgPSB0aGlzLmZyb250LmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHNDb21wb25lbnQuc2V0RnJvbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNCYWNrVG9Gcm9udCkge1xyXG4gICAgICAgICAgICAgICAgLy8g55Sf5oiQ5pawYmFja+WxglxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0QmFjaygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5raI6ZmkZnJvbnTlsYJcclxuICAgIGNsZWFyRnJvbnQoKSB7XHJcbiAgICAgICAgbGV0IGdvb2RzSW5kZXg6IG51bWJlciA9IC0xXHJcbiAgICAgICAgbGV0IGlzQ2xlYXI6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZyb250LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gdGhpcy5mcm9udC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZSgnR29vZHMnKVxyXG4gICAgICAgICAgICBpZiAoZ29vZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ29vZHMuZ2V0Q29tcG9uZW50KEdvb2RzKS5pZFxyXG4gICAgICAgICAgICAgICAgaWYgKGdvb2RzSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnb29kc0luZGV4ICE9IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2xlYXIgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHNJbmRleCA9IGluZGV4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpc0NsZWFyID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQ2xlYXIpIHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xFQVIpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mcm9udC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ29vZHMgPSB0aGlzLmZyb250LmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKCdHb29kcycpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnb29kc0NvbXBvbmVudCA9IGdvb2RzLmdldENvbXBvbmVudChHb29kcylcclxuICAgICAgICAgICAgICAgIGdvb2RzQ29tcG9uZW50LnNldENsZWFyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEuY2xlYXJBbGxOdW1zKys7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5jdXJyZW50Q2xlYXJOdW1zKys7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGFyUG9zID0gdG9YWSh0aGlzLm5vZGUsIFN0YXRpY0luc3RhbmNlLmdhbWVNYW5hZ2VyLnN0YWdlKVxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGFyU3RhcnRQb3NBcnIucHVzaChzdGFyUG9zKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYmFja1RvRnJvbnQoKVxyXG4gICAgICAgICAgICAvLyDop6PplIFcclxuICAgICAgICAgICAgaWYodGhpcy5sZXZlbHMubG9ja3MmJnRoaXMubGV2ZWxzLmxvY2tzLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxzLmxvY2tzWzBdLnVwZGF0ZUxvY2tOdW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlj5bmtojml7blgZzmioDog71cclxuICAgICAgICAgICAgaWYgKFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5pc0FjdGl2ZShFTlVNX1VJX1RZUEUuSUNFKSkge1xyXG4gICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuSUNFLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRNYWluVGltZXIodHJ1ZSlcclxuICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRNYWluVGltZXJTb3VuZCh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOi/nuWHu+i/m+W6plxyXG4gICAgICAgICAgICBpZihEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEubGV2ZWwhPTEpe1xyXG4gICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE1haW5Qcm9ncmVzcygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIOWPlua2iOesrOS4gOWFs3RpcFxyXG4gICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLmxldmVsID09IDEgJiYgU3RhdGljSW5zdGFuY2UuZ2FtZU1hbmFnZXIudGlwTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLm5ld0d1aWRlU3RlcD09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLm5ld0d1aWRlU3RlcCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aXA9U3RhdGljSW5zdGFuY2UuZ2FtZU1hbmFnZXIudGlwTm9kZS5hZGRDb21wb25lbnQoVGlwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuc3RhcnRUaXAoRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLm5ld0d1aWRlU3RlcCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS5nYW1lTWFuYWdlci50aXBOb2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS5nYW1lTWFuYWdlci5vbkdhbWVDaGVjaygpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v5Zyo5oyH5a6a5bGC5aKe5Yqg5ZWG5ZOBZ1xyXG4gICAgYWRkR29vZHNCeUlkKGxheWVyOm51bWJlcixnb29kc0lkOm51bWJlcik6Ym9vbGVhbntcclxuICAgICAgICBpZihsYXllcj09MSl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mcm9udC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFja0NvbnRhaW5lciA9IHRoaXMuZnJvbnQuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gYmFja0NvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZSgnR29vZHMnKVxyXG4gICAgICAgICAgICAgICAgaWYgKCFnb29kcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzTm9kZSA9IFBvb2xNYW5hZ2VyLmluc3RhbmNlLmdldE5vZGUoJ0dvb2RzJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnb29kcyA9IGdvb2RzTm9kZS5nZXRDb21wb25lbnQoR29vZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHMuaW5pdCh7IGlkOmdvb2RzSWQsIGluZGV4OmksaXNCYWNrOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHNOb2RlLnBhcmVudCA9IHRoaXMuZnJvbnQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHMuY29udGFpbmVyPXRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb29kc0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmcm9udCDmsqHmnInnqbrkvY1cIixnb29kc0lkLHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYobGF5ZXI9PTIpe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFjay5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFja0NvbnRhaW5lciA9IHRoaXMuYmFjay5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ29vZHMgPSBiYWNrQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKCdHb29kcycpXHJcbiAgICAgICAgICAgICAgICBpZiAoIWdvb2RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ29vZHNOb2RlID0gUG9vbE1hbmFnZXIuaW5zdGFuY2UuZ2V0Tm9kZSgnR29vZHMnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gZ29vZHNOb2RlLmdldENvbXBvbmVudChHb29kcylcclxuICAgICAgICAgICAgICAgICAgICBnb29kcy5pbml0KHsgaWQ6Z29vZHNJZCwgaW5kZXg6aSxpc0JhY2s6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgICAgICBnb29kc05vZGUucGFyZW50ID0gdGhpcy5iYWNrLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGdvb2RzLmNvbnRhaW5lcj10aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29vZHNDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFjayDmsqHmnInnqbrkvY1cIixnb29kc0lkLHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdvb2RzRGF0YVt0aGlzLmluZGV4XTtcclxuICAgICAgICAgICAgLy/lsYLmlbDkuI3kuIDoh7RcclxuICAgICAgICAgICAgaWYoKGxheWVyLTIpPmFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuayoeaciVwiK2xheWVyK1wi5bGCXCIsZ29vZHNJZCx0aGlzLmluZGV4LGFyci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxheWVyPWxheWVyLTI7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IGFyclthcnIubGVuZ3RoLWxheWVyXTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDB8fGRhdGEubGVuZ3RoPj0zKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChnb29kc0lkKTtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ29vZHNEYXRhW3RoaXMuaW5kZXhdW2Fyci5sZW5ndGgtbGF5ZXJdPWRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5L+u5pS55oyH5a6a5L2N572u55qE5ZWG5ZOBXHJcbiAgICB1cGRhdGVHb29kc0J5SWQobGF5ZXI6bnVtYmVyLG9sZEdvb2RzSWQ6bnVtYmVyLG5ld0dvb2RzSWQpe1xyXG4gICAgICAgIGlmKGxheWVyPT0xKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZyb250LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnb29kcyA9IHRoaXMuZnJvbnQuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoJ0dvb2RzJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnb29kc0NvbXBvbmVudCA9IGdvb2RzLmdldENvbXBvbmVudChHb29kcyk7XHJcbiAgICAgICAgICAgICAgICBpZihnb29kc0NvbXBvbmVudC5pZD09b2xkR29vZHNJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHNDb21wb25lbnQuc2V0SWQobmV3R29vZHNJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYobGF5ZXI9PTIpe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFjay5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ29vZHMgPSB0aGlzLmJhY2suY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoJ0dvb2RzJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnb29kc0NvbXBvbmVudCA9IGdvb2RzLmdldENvbXBvbmVudChHb29kcyk7XHJcbiAgICAgICAgICAgICAgICBpZihnb29kc0NvbXBvbmVudC5pZD09b2xkR29vZHNJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHNDb21wb25lbnQuc2V0SWQobmV3R29vZHNJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdvb2RzRGF0YVt0aGlzLmluZGV4XTtcclxuICAgICAgICAgICAgLy/lsYLmlbDkuI3kuIDoh7RcclxuICAgICAgICAgICAgaWYoKGxheWVyLTIpIT1hcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXllcj1sYXllci0yO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSBhcnJbYXJyLmxlbmd0aC1sYXllcl07XHJcbiAgICAgICAgICAgIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYob2xkR29vZHNJZD09ZGF0YVtpXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ29vZHNEYXRhW3RoaXMuaW5kZXhdW2Fyci5sZW5ndGgtbGF5ZXJdW2ldPW5ld0dvb2RzSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2NrQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS5zaG93VmlkZW9BZChhc3luYyAobXNnOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFTZGtNYW5hZ2VyLmluc3RhbmNlLmdldFBsYXRmb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgIFRvYXN0TWFuYWdlci5pbnN0YW5jZS5zaG93KG1zZywgeyBncmF2aXR5OiAnQk9UVE9NJywgYmdfY29sb3I6IGNjLmNvbG9yKDEwMiwgMjAyLCAyOCwgMjU1KSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9ja09wZW4oKVxyXG4gICAgICAgIH0sIChtc2c6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBUb2FzdE1hbmFnZXIuaW5zdGFuY2Uuc2hvdyhtc2csIHsgZ3Jhdml0eTogJ0JPVFRPTScsIGJnX2NvbG9yOiBjYy5jb2xvcigyMjYsIDY5LCAxMDksIDI1NSkgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxvY2tOdW0oKXtcclxuICAgICAgICB0aGlzLmxvY2tOdW0tLTtcclxuICAgICAgICB0aGlzLmxvY2tOdW1iZXJMYWJlbC5zdHJpbmc9dGhpcy5sb2NrTnVtK1wiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja051bSA8PSAwKSB7XHJcbiAgICAgICAgICAgdGhpcy5zZXRMb2NrT3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2NrT3BlbigpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5VTkxPQ0spXHJcbiAgICAgICAgdGhpcy5pc0xvY2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvY2tOdW09MDtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGV2ZWxzLmxvY2tzLmZpbmRJbmRleChsb2NrID0+IGxvY2sgPT0gdGhpcylcclxuICAgICAgICB0aGlzLmxldmVscy5sb2Nrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMubG9ja05vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgIGlzTG9ja0NvbnRhaW5lcih0eXBlOm51bWJlcik6Ym9vbGVhbntcclxuICAgICAgICBpZih0eXBlPjEwJiZ0eXBlPD0xNSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvL+W3puWPs+enu+WKqOi0p+aetlxyXG4gICAgICAgIGlmKHRoaXMudHlwZT09RU5VTV9DT05UQUlORVJfVFlQRS5NT1ZFKXsgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC54PXRoaXMubm9kZS5wYXJlbnQueCt0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUucGFyZW50Lng+NjAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQueD0tNjAwOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==