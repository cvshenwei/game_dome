"use strict";
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