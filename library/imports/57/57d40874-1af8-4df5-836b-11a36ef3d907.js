"use strict";
cc._RF.push(module, '57d40h0GvhN9YNrEaNu89kH', 'Goods');
// scripts/game/Goods.ts

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
var Utils_1 = require("../Utils");
var AudioManager_1 = require("../manager/AudioManager");
var DataManager_1 = require("../manager/DataManager");
var EffectManager_1 = require("../manager/EffectManager");
var ResourceManager_1 = require("../manager/ResourceManager");
var Container_1 = require("./Container");
var Constants_1 = require("../Constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Goods = /** @class */ (function (_super) {
    __extends(Goods, _super);
    function Goods() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isBack = false;
        // 节点
        _this.body = null;
        //后排货架
        _this.bodyShade = null;
        //物品阴影
        _this.shadow = null;
        // 是否入柜移动
        _this.isMoving = false;
        // 入新柜移动速度
        _this.speed = 1000;
        //返回移动速度
        _this.returnSpeed = 2000;
        //前排宽高
        _this.frontHeight = 1;
        _this.frontWidth = 1;
        _this.id = 0;
        _this.color = 0;
        //在货架里的位置
        _this.index = 0;
        //所在的container
        _this.container = null;
        return _this;
    }
    Goods.prototype.init = function (params) {
        if (params === void 0) { params = { id: 1, index: 0, isBack: false }; }
        Object.assign(this, params);
        if (this.id > 1000) {
            this.color = Number(this.id.toString().substring(3));
        }
        this.body = this.node.getChildByName('body');
        this.bodyShade = this.body.getChildByName('bgshade');
        this.shadow = this.node.getChildByName('shadow');
        this.setBody(this.id);
        if (!this.node.hasEventListener('touchstart'))
            this.node.on('touchstart', this.onTouchStart, this);
        if (!this.node.hasEventListener('touchmove'))
            this.node.on('touchmove', this.onTouchMove, this);
        if (!this.node.hasEventListener('touchend'))
            this.node.on('touchend', this.onTouchEnd, this);
        if (!this.node.hasEventListener('touchcancel'))
            this.node.on('touchcancel', this.onTouchEnd, this);
    };
    Goods.prototype.setBody = function (id) {
        if (!(this.body && this.bodyShade))
            return;
        var spriteFrame = ResourceManager_1.default.instance.getSprite("" + id);
        if (!spriteFrame)
            return;
        var _a = spriteFrame.getRect(), width = _a.width, height = _a.height;
        var scale = 0.9;
        if (height > Constants_1.default.GOODS_HEIGHT) {
            scale = Constants_1.default.GOODS_HEIGHT / height;
        }
        else {
            scale = Constants_1.default.GOODS_WIDTH / width;
        }
        ;
        if (width * scale > Constants_1.default.GOODS_WIDTH) {
            scale = Constants_1.default.GOODS_WIDTH / width;
        }
        this.frontHeight = height * scale;
        this.frontWidth = width * scale;
        if (this.isBack) {
            scale = scale * 0.98;
        }
        this.body.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        this.body.width = width * scale;
        this.body.height = height * scale;
        this.bodyShade.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        this.shadow.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        this.bodyShade.active = this.isBack;
        this.shadow.active = true;
        this.shadow.width = width * scale;
        this.shadow.height = height * scale;
        this.shadow.scale = 0.9;
        this.initShawPostion();
    };
    Goods.prototype.initShawPostion = function () {
        this.shadow.x = Constants_1.default.GOODS_SHADOW_X;
        this.shadow.y = Constants_1.default.GOODS_SHADOW_Y;
        if (!this.isBack) {
            this.shadow.x = Constants_1.default.GOODS_SHADOW_X_FRONT;
            //最右边的物品阴影短一些
            if (this.index == 2) {
                this.shadow.x = Constants_1.default.GOODS_SHADOW_X + 5;
            }
        }
    };
    //重新修改该商品的id，并替换对应的图片
    Goods.prototype.setId = function (id) {
        this.id = id;
        if (this.id > 1000) {
            this.color = Number(this.id.toString().substring(3));
        }
        this.setBody(this.id);
    };
    Goods.prototype.setFront = function () {
        var _this = this;
        this.isBack = false;
        cc.tween(this.body)
            .to(0.01, { width: this.frontWidth, height: this.frontHeight })
            .call(function () {
            _this.shadow.width = _this.frontWidth;
            _this.shadow.height = _this.frontHeight;
            _this.node.setPosition(cc.v2(0, 0));
        }).start();
        cc.tween(this.bodyShade)
            .to(0.01, { opacity: 10, scale: 1 })
            .call(function () {
            _this.bodyShade.active = false;
        }).start();
    };
    Goods.prototype.toFrontEffect = function (cb) {
        var _this = this;
        this.node.zIndex = 999;
        if (!this.bodyShade) {
            this.bodyShade = this.node.getChildByName("body").getChildByName("bgshade");
        }
        cc.tween(this.bodyShade)
            .to(0.2, { opacity: 10, scale: 1 })
            .call(function () {
            _this.bodyShade.active = false;
        }).start();
        var action = cc.sequence(cc.delayTime(0.1), cc.moveTo(0.2, cc.v2(this.node.position.x, this.node.position.y - 50)).easing(cc.easeIn(1)), cc.callFunc(function () {
            cb && cb();
        }));
        cc.tween(this.node).then(action).start();
    };
    Goods.prototype.toMagicFrontEffect = function (cb) {
        var action = cc.sequence(cc.delayTime(0.1), cc.spawn(cc.moveTo(0.2, cc.v2(this.node.position.x, this.node.position.y - 8)).easing(cc.easeIn(1)), cc.scaleTo(0.2, 1.1)), cc.scaleTo(0.1, 1), cc.callFunc(function () {
            cb && cb();
        }));
        cc.tween(this.node).then(action).start();
    };
    Goods.prototype.backMagicFrontEffect = function (cb) {
        var action = cc.sequence(cc.spawn(cc.moveTo(0.2, cc.v2(0, 0)).easing(cc.easeIn(1)), cc.scaleTo(0.2, 1)), cc.callFunc(function () {
            cb && cb();
        }));
        cc.tween(this.node).then(action).start();
    };
    Goods.prototype.backFrontEffect = function (cb) {
        var action = cc.sequence(cc.spawn(cc.fadeIn(0.2), cc.scaleTo(0.2, 1.2)), cc.scaleTo(0.2, 1), cc.callFunc(function () {
            cb && cb();
        }));
        cc.tween(this.node).then(action).start();
    };
    Goods.prototype.setMoving = function (bool) {
        if (bool) {
            DataManager_1.default.instance.current = this.node;
            this.node.group = 'ui';
        }
        else {
            DataManager_1.default.instance.current = null;
            this.node.group = 'default';
            this.isMoving = false;
        }
    };
    Goods.prototype.setClear = function (bEffect) {
        if (bEffect === void 0) { bEffect = true; }
        console.log("消除掉：", this.id);
        this.container.goodsCount--;
        if (bEffect) {
            EffectManager_1.default.instance.play('Collect', this.node.parent);
        }
        this.node.removeFromParent();
    };
    Goods.prototype.onTouchStart = function (e) {
        if (this.isBack || DataManager_1.default.instance.current || this.isMoving || DataManager_1.default.instance.status == Enum_1.ENUM_GAME_STATUS.UNRUNING || DataManager_1.default.instance.isShuffling)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.GET_IN);
        var location = e.getLocation();
        var pos = this.node.parent.convertToNodeSpaceAR(location);
        this.node.setPosition(pos);
        this.setMoving(true);
        this.shadow.active = true;
        var postion = this.caculatePostion();
        this.shadow.x = postion.x;
        this.shadow.y = postion.y;
        DataManager_1.default.instance.isSchedule = true;
        DataManager_1.default.instance.isTip = false;
    };
    Goods.prototype.onTouchMove = function (e) {
        if (this.isBack || DataManager_1.default.instance.current != e.currentTarget || this.isMoving || DataManager_1.default.instance.status == Enum_1.ENUM_GAME_STATUS.UNRUNING || DataManager_1.default.instance.isShuffling)
            return;
        var location = e.getLocation();
        var pos = this.node.parent.convertToNodeSpaceAR(location);
        this.node.setPosition(pos);
        var postion = this.caculatePostion();
        this.shadow.x = postion.x;
        this.shadow.y = postion.y;
    };
    Goods.prototype.onTouchEnd = function (e) {
        var _this = this;
        if (this.isBack || DataManager_1.default.instance.current != e.currentTarget || this.isMoving || DataManager_1.default.instance.status == Enum_1.ENUM_GAME_STATUS.UNRUNING || DataManager_1.default.instance.isShuffling)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.GET_OUT);
        var location = e.getLocation();
        // 获取货架上前排的每一个空格，加锁的不能移动
        var frontContainers = DataManager_1.default.instance.frontContainers.filter(function (container) { return !container.getChildByName('Goods') && !container.parent.parent.getComponent(Container_1.default).isLock; });
        // 目标货柜
        var targetGoodsContainer = null;
        var maxArea = 0;
        for (var j = 0; j < frontContainers.length; j++) {
            var goodsContainer = frontContainers[j];
            var goodsContainerRect = goodsContainer.getBoundingBox();
            var point = goodsContainer.parent.convertToNodeSpaceAR(location);
            // 矩形相交面积
            var bodyRect = cc.rect(point.x - this.body.width / 2, point.y - this.body.height / 2, this.body.width, this.body.height);
            if (goodsContainerRect.intersects(bodyRect)) {
                var tempRect = new cc.Rect();
                goodsContainerRect.intersection(tempRect, bodyRect);
                var area = tempRect.width * tempRect.height;
                if (area > maxArea) {
                    maxArea = area;
                    targetGoodsContainer = goodsContainer;
                }
            }
        }
        // 入柜
        if (targetGoodsContainer) {
            //新手引导关第一步没有放对不让入柜
            if (DataManager_1.default.instance.levelData.level == 1 && DataManager_1.default.instance.levelData.newGuideStep == 1) {
                var newContainer = targetGoodsContainer.parent.parent;
                var newContainerComponent = newContainer.getComponent(Container_1.default);
                console.log(newContainerComponent.col, newContainerComponent.row);
                if (newContainerComponent.col == 2 && newContainerComponent.row == 0) {
                    targetGoodsContainer = null;
                }
                else {
                    this.node.parent = targetGoodsContainer;
                    var pos = this.node.parent.convertToNodeSpaceAR(location);
                    this.node.setPosition(pos);
                }
            }
            else {
                this.node.parent = targetGoodsContainer;
                var pos = this.node.parent.convertToNodeSpaceAR(location);
                this.node.setPosition(pos);
            }
        }
        // 入柜动画
        this.isMoving = true;
        var dis = Utils_1.getDistance(this.node.getPosition(), cc.v2(0, 0));
        var delayTime = dis / this.speed;
        if (targetGoodsContainer == null) {
            delayTime = dis / this.returnSpeed;
        }
        var act = cc.moveTo(delayTime, cc.v2(0, 0));
        cc.tween(this.node).then(act).call(function () {
            if (targetGoodsContainer) {
                var oldContainerComponent = _this.container;
                // back层转front层, 同时生产新的back层
                oldContainerComponent.backToFront();
                var newContainer = targetGoodsContainer.parent.parent;
                var newContainerComponent = newContainer.getComponent(Container_1.default);
                _this.node.parent = targetGoodsContainer;
                _this.container = newContainerComponent;
                if (targetGoodsContainer.x > 0) {
                    _this.index = 2;
                }
                else if (targetGoodsContainer.x < 0) {
                    _this.index = 0;
                }
                else {
                    _this.index = 1;
                }
                _this.initShawPostion();
                oldContainerComponent.goodsCount--;
                newContainerComponent.goodsCount++;
                // 消除
                newContainerComponent.clearFront();
            }
            else {
                _this.initShawPostion();
            }
            _this.setMoving(false);
        }).start();
        DataManager_1.default.instance.isTip = true;
        DataManager_1.default.instance.tipTime = DataManager_1.DEFAULT_TIP_TIME;
    };
    //根据物品的位置实时计算阴影位置 范围  y -10 —— -30，x: 40 —— 70
    Goods.prototype.caculatePostion = function () {
        var firstX = Constants_1.default.GOODS_SHADOW_X_FRONT + 10;
        var firstY = Constants_1.default.GOODS_SHADOW_Y;
        var currentX = 0;
        var currentY = 0;
        var winSizePixels = cc.winSize;
        var worldPostion = this.shadow.convertToWorldSpaceAR(new cc.Vec2(this.shadow.position.x, this.shadow.position.y));
        currentX = firstX + (30 - worldPostion.x / winSizePixels.width * (30));
        currentY = firstY + worldPostion.y / winSizePixels.height * (-20);
        if (currentX < 40) {
            currentX = 40;
        }
        if (currentX > 70) {
            currentX = 70;
        }
        if (currentY > -10) {
            currentY = -10;
        }
        if (currentY < -30) {
            currentY = -30;
        }
        return new cc.Vec2(currentX, currentY);
    };
    __decorate([
        property
    ], Goods.prototype, "id", void 0);
    Goods = __decorate([
        ccclass
    ], Goods);
    return Goods;
}(cc.Component));
exports.default = Goods;

cc._RF.pop();