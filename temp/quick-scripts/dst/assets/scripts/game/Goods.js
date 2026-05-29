
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/Goods.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWUvR29vZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQTREO0FBRTVELGtDQUE2QztBQUM3Qyx3REFBbUQ7QUFDbkQsc0RBQXVFO0FBQ3ZFLDBEQUFxRDtBQUNyRCw4REFBeUQ7QUFDekQseUNBQW9DO0FBQ3BDLDBDQUFxQztBQUcvQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQWlXQztRQS9WRyxZQUFNLEdBQVksS0FBSyxDQUFBO1FBQ3ZCLEtBQUs7UUFDTCxVQUFJLEdBQVksSUFBSSxDQUFBO1FBQ3BCLE1BQU07UUFDTixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLE1BQU07UUFDTixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFNBQVM7UUFDVCxjQUFRLEdBQVksS0FBSyxDQUFBO1FBQ3pCLFVBQVU7UUFDVixXQUFLLEdBQVcsSUFBSSxDQUFDO1FBRXJCLFFBQVE7UUFDUixpQkFBVyxHQUFXLElBQUksQ0FBQztRQUUzQixNQUFNO1FBQ04saUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsUUFBRSxHQUFRLENBQUMsQ0FBQztRQUVaLFdBQUssR0FBUSxDQUFDLENBQUM7UUFFZixTQUFTO1FBQ1QsV0FBSyxHQUFRLENBQUMsQ0FBQztRQUVmLGNBQWM7UUFDZCxlQUFTLEdBQWMsSUFBSSxDQUFDOztJQW1VaEMsQ0FBQztJQWpVRyxvQkFBSSxHQUFKLFVBQUssTUFBMEY7UUFBMUYsdUJBQUEsRUFBQSxXQUE0RCxFQUFFLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUUzRixNQUFNLENBQUMsTUFBTSxDQUFD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QVEsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUUxQyxDQUFDO0lBelVEO1FBREMsUUFBUTtxQ0FDRztJQXRCSyxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBaVd6QjtJQUFELFlBQUM7Q0FqV0QsQUFpV0MsQ0FqV2tDLEVBQUUsQ0FBQyxTQUFTLEdBaVc5QztrQkFqV29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fR0FNRV9TVEFUVVMgfSBmcm9tIFwiLi4vRW51bVwiO1xyXG5pbXBvcnQgeyBTdGF0aWNJbnN0YW5jZSB9IGZyb20gXCIuLi9TdGF0aWNJbnN0YW5jZVwiO1xyXG5pbXBvcnQgeyBnZXREaXN0YW5jZSwgdG9YWSB9IGZyb20gXCIuLi9VdGlsc1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIsIHsgREVGQVVMVF9USVBfVElNRSB9IGZyb20gXCIuLi9tYW5hZ2VyL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBFZmZlY3RNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0VmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFJlc291cmNlTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9SZXNvdXJjZU1hbmFnZXJcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9HYW1lTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2RzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBpc0JhY2s6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgLy8g6IqC54K5XHJcbiAgICBib2R5OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgLy/lkI7mjpLotKfmnrZcclxuICAgIGJvZHlTaGFkZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy/nianlk4HpmLTlvbFcclxuICAgIHNoYWRvdzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyDmmK/lkKblhaXmn5znp7vliqhcclxuICAgIGlzTW92aW5nOiBib29sZWFuID0gZmFsc2VcclxuICAgIC8vIOWFpeaWsOafnOenu+WKqOmAn+W6plxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgLy/ov5Tlm57np7vliqjpgJ/luqZcclxuICAgIHJldHVyblNwZWVkOiBudW1iZXIgPSAyMDAwO1xyXG5cclxuICAgIC8v5YmN5o6S5a696auYXHJcbiAgICBmcm9udEhlaWdodDogbnVtYmVyID0gMTtcclxuICAgIGZyb250V2lkdGg6IG51bWJlciA9IDE7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIGlkOm51bWJlcj0wO1xyXG5cclxuICAgIGNvbG9yOm51bWJlcj0wO1xyXG5cclxuICAgIC8v5Zyo6LSn5p626YeM55qE5L2N572uXHJcbiAgICBpbmRleDpudW1iZXI9MDtcclxuXHJcbiAgICAvL+aJgOWcqOeahGNvbnRhaW5lclxyXG4gICAgY29udGFpbmVyOiBDb250YWluZXIgPSBudWxsO1xyXG5cclxuICAgIGluaXQocGFyYW1zOiB7IGlkPzogbnVtYmVyLCBpbmRleDogbnVtYmVyLGlzQmFjaz86IGJvb2xlYW4gfSA9IHsgaWQ6IDEsaW5kZXg6MCwgaXNCYWNrOiBmYWxzZSB9KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJhbXMpXHJcbiAgICAgICAgaWYodGhpcy5pZD4xMDAwKXtcclxuICAgICAgICAgICB0aGlzLmNvbG9yPSBOdW1iZXIodGhpcy5pZC50b1N0cmluZygpLnN1YnN0cmluZygzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm9keSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYm9keScpXHJcbiAgICAgICAgdGhpcy5ib2R5U2hhZGUgPSB0aGlzLmJvZHkuZ2V0Q2hpbGRCeU5hbWUoJ2Jnc2hhZGUnKVxyXG4gICAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzaGFkb3cnKVxyXG4gICAgICAgIHRoaXMuc2V0Qm9keSh0aGlzLmlkKVxyXG4gICAgICAgIGlmICghdGhpcy5ub2RlLmhhc0V2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnKSkgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuaGFzRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJykpIHRoaXMubm9kZS5vbigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgdGhpcylcclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5oYXNFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcpKSB0aGlzLm5vZGUub24oJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kLCB0aGlzKVxyXG4gICAgICAgIGlmICghdGhpcy5ub2RlLmhhc0V2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJykpIHRoaXMubm9kZS5vbigndG91Y2hjYW5jZWwnLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRCb2R5KGlkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoISh0aGlzLmJvZHkgJiYgdGhpcy5ib2R5U2hhZGUpKSByZXR1cm5cclxuICAgICAgICBjb25zdCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBSZXNvdXJjZU1hbmFnZXIuaW5zdGFuY2UuZ2V0U3ByaXRlKGAke2lkfWApXHJcbiAgICAgICAgaWYgKCFzcHJpdGVGcmFtZSkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzcHJpdGVGcmFtZS5nZXRSZWN0KClcclxuICAgICAgICBsZXQgc2NhbGUgPSAwLjlcclxuICAgICAgICBpZihoZWlnaHQ+Q29uc3RhbnRzLkdPT0RTX0hFSUdIVCl7XHJcbiAgICAgICAgICAgIHNjYWxlPUNvbnN0YW50cy5HT09EU19IRUlHSFQvaGVpZ2h0O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzY2FsZT1Db25zdGFudHMuR09PRFNfV0lEVEgvd2lkdGg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZih3aWR0aCAqIHNjYWxlPkNvbnN0YW50cy5HT09EU19XSURUSCl7XHJcbiAgICAgICAgICAgIHNjYWxlPUNvbnN0YW50cy5HT09EU19XSURUSC93aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mcm9udEhlaWdodD1oZWlnaHQgKiBzY2FsZTtcclxuICAgICAgICB0aGlzLmZyb250V2lkdGg9d2lkdGggKiBzY2FsZTtcclxuICAgICAgICBpZiggdGhpcy5pc0JhY2spe1xyXG4gICAgICAgICAgICBzY2FsZT1zY2FsZSowLjk4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvZHkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZVxyXG4gICAgICAgIHRoaXMuYm9keS53aWR0aCA9IHdpZHRoICogc2NhbGVcclxuICAgICAgICB0aGlzLmJvZHkuaGVpZ2h0ID0gaGVpZ2h0ICogc2NhbGVcclxuICAgICAgICB0aGlzLmJvZHlTaGFkZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lXHJcbiAgICAgICAgdGhpcy5zaGFkb3cuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZVxyXG4gICAgICAgIHRoaXMuYm9keVNoYWRlLmFjdGl2ZSA9ICB0aGlzLmlzQmFja1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LndpZHRoID0gd2lkdGggKiBzY2FsZVxyXG4gICAgICAgIHRoaXMuc2hhZG93LmhlaWdodCA9IGhlaWdodCAqIHNjYWxlXHJcbiAgICAgICAgdGhpcy5zaGFkb3cuc2NhbGU9MC45OyAgXHJcbiAgICAgICAgdGhpcy5pbml0U2hhd1Bvc3Rpb24oKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGluaXRTaGF3UG9zdGlvbigpe1xyXG4gICAgICAgIHRoaXMuc2hhZG93Lng9Q29uc3RhbnRzLkdPT0RTX1NIQURPV19YOyBcclxuICAgICAgICB0aGlzLnNoYWRvdy55PUNvbnN0YW50cy5HT09EU19TSEFET1dfWTsgXHJcbiAgICAgICAgaWYoIXRoaXMuaXNCYWNrKXtcclxuICAgICAgICAgICAgdGhpcy5zaGFkb3cueD1Db25zdGFudHMuR09PRFNfU0hBRE9XX1hfRlJPTlQ7XHJcbiAgICAgICAgICAgIC8v5pyA5Y+z6L6555qE54mp5ZOB6Zi05b2x55+t5LiA5LqbXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5kZXg9PTIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFkb3cueD1Db25zdGFudHMuR09PRFNfU0hBRE9XX1grNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+mHjeaWsOS/ruaUueivpeWVhuWTgeeahGlk77yM5bm25pu/5o2i5a+55bqU55qE5Zu+54mHXHJcbiAgICBzZXRJZChpZDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaWQ9aWQ7XHJcbiAgICAgICAgaWYodGhpcy5pZD4xMDAwKXtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcj0gTnVtYmVyKHRoaXMuaWQudG9TdHJpbmcoKS5zdWJzdHJpbmcoMykpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuc2V0Qm9keSh0aGlzLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGcm9udCgpIHtcclxuICAgICAgICB0aGlzLmlzQmFjayA9IGZhbHNlXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ib2R5KVxyXG4gICAgICAgICAgLnRvKDAuMDEse3dpZHRoOnRoaXMuZnJvbnRXaWR0aCxoZWlnaHQ6dGhpcy5mcm9udEhlaWdodH0pXHJcbiAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhZG93LndpZHRoID0gdGhpcy5mcm9udFdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLnNoYWRvdy5oZWlnaHQgPSB0aGlzLmZyb250SGVpZ2h0OyAgXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ib2R5U2hhZGUpXHJcbiAgICAgICAgLnRvKDAuMDEse29wYWNpdHk6MTAsc2NhbGU6MX0pXHJcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHlTaGFkZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b0Zyb250RWZmZWN0KGNiOiBGdW5jdGlvbil7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDk5OTtcclxuICAgICAgICBpZiAoIXRoaXMuYm9keVNoYWRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keVNoYWRlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9keVwiKS5nZXRDaGlsZEJ5TmFtZShcImJnc2hhZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYm9keVNoYWRlKVxyXG4gICAgICAgICAgICAudG8oMC4yLHtvcGFjaXR5OjEwLCBzY2FsZTogMX0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9keVNoYWRlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMSksXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbygwLjIsIGNjLnYyKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSAtIDUwKSkuZWFzaW5nKGNjLmVhc2VJbigxKSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihhY3Rpb24pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9NYWdpY0Zyb250RWZmZWN0KGNiOiBGdW5jdGlvbil7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcclxuICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yLCBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkgLSA4KSkuZWFzaW5nKGNjLmVhc2VJbigxKSksXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMS4xKSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4oYWN0aW9uKS5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBiYWNrTWFnaWNGcm9udEVmZmVjdChjYjogRnVuY3Rpb24pe1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yLCBjYy52MigwLCAwKSkuZWFzaW5nKGNjLmVhc2VJbigxKSksXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMSksXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihhY3Rpb24pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFja0Zyb250RWZmZWN0KGNiOiBGdW5jdGlvbil7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVJbigwLjIpLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjIsIDEuMiksXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCAxKSxcclxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKGFjdGlvbikuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNb3ZpbmcoYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gJ3VpJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnQgPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ncm91cCA9ICdkZWZhdWx0J1xyXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2xlYXIoYkVmZmVjdDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIua2iOmZpOaOie+8mlwiLCB0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5nb29kc0NvdW50LS07XHJcbiAgICAgICAgaWYgKGJFZmZlY3QpIHtcclxuICAgICAgICAgICAgRWZmZWN0TWFuYWdlci5pbnN0YW5jZS5wbGF5KCdDb2xsZWN0JywgdGhpcy5ub2RlLnBhcmVudClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQmFjayB8fCBEYXRhTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50IHx8IHRoaXMuaXNNb3ZpbmcgfHwgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID09IEVOVU1fR0FNRV9TVEFUVVMuVU5SVU5JTkcgfHwgRGF0YU1hbmFnZXIuaW5zdGFuY2UuaXNTaHVmZmxpbmcpIHJldHVyblxyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkdFVF9JTilcclxuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGUuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobG9jYXRpb24pXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcylcclxuICAgICAgICB0aGlzLnNldE1vdmluZyh0cnVlKTtcclxuICAgICAgICB0aGlzLnNoYWRvdy5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICBsZXQgcG9zdGlvbj10aGlzLmNhY3VsYXRlUG9zdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Lng9cG9zdGlvbi54O1xyXG4gICAgICAgIHRoaXMuc2hhZG93Lnk9cG9zdGlvbi55O1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmlzU2NoZWR1bGU9dHJ1ZTtcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5pc1RpcD1mYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZShlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCYWNrIHx8IERhdGFNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnQgIT0gZS5jdXJyZW50VGFyZ2V0IHx8IHRoaXMuaXNNb3ZpbmcgfHwgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID09IEVOVU1fR0FNRV9TVEFUVVMuVU5SVU5JTkcgfHwgRGF0YU1hbmFnZXIuaW5zdGFuY2UuaXNTaHVmZmxpbmcpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZS5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhdGlvbilcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKVxyXG4gICAgICAgIGxldCBwb3N0aW9uPXRoaXMuY2FjdWxhdGVQb3N0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cueD1wb3N0aW9uLng7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cueT1wb3N0aW9uLnk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaEVuZChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQmFjayB8fCBEYXRhTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50ICE9IGUuY3VycmVudFRhcmdldCB8fCB0aGlzLmlzTW92aW5nIHx8IERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyA9PSBFTlVNX0dBTUVfU1RBVFVTLlVOUlVOSU5HIHx8IERhdGFNYW5hZ2VyLmluc3RhbmNlLmlzU2h1ZmZsaW5nKSByZXR1cm5cclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5HRVRfT1VUKVxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZS5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgLy8g6I635Y+W6LSn5p625LiK5YmN5o6S55qE5q+P5LiA5Liq56m65qC877yM5Yqg6ZSB55qE5LiN6IO956e75YqoXHJcbiAgICAgICAgY29uc3QgZnJvbnRDb250YWluZXJzID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuZnJvbnRDb250YWluZXJzLmZpbHRlcihjb250YWluZXIgPT4gIWNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZSgnR29vZHMnKSAmJiAhY29udGFpbmVyLnBhcmVudC5wYXJlbnQuZ2V0Q29tcG9uZW50KENvbnRhaW5lcikuaXNMb2NrKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOebruagh+i0p+afnFxyXG4gICAgICAgIGxldCB0YXJnZXRHb29kc0NvbnRhaW5lciA9IG51bGxcclxuICAgICAgICBsZXQgbWF4QXJlYSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmcm9udENvbnRhaW5lcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZ29vZHNDb250YWluZXIgPSBmcm9udENvbnRhaW5lcnNbal07XHJcbiAgICAgICAgICAgIGNvbnN0IGdvb2RzQ29udGFpbmVyUmVjdCA9IGdvb2RzQ29udGFpbmVyLmdldEJvdW5kaW5nQm94KClcclxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBnb29kc0NvbnRhaW5lci5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobG9jYXRpb24pXHJcbiAgICAgICAgICAgIC8vIOefqeW9ouebuOS6pOmdouenr1xyXG4gICAgICAgICAgICBjb25zdCBib2R5UmVjdCA9IGNjLnJlY3QocG9pbnQueCAtIHRoaXMuYm9keS53aWR0aCAvIDIsIHBvaW50LnkgLSB0aGlzLmJvZHkuaGVpZ2h0IC8gMiwgdGhpcy5ib2R5LndpZHRoLCB0aGlzLmJvZHkuaGVpZ2h0KVxyXG4gICAgICAgICAgICBpZiAoZ29vZHNDb250YWluZXJSZWN0LmludGVyc2VjdHMoYm9keVJlY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wUmVjdCA9IG5ldyBjYy5SZWN0KClcclxuICAgICAgICAgICAgICAgIGdvb2RzQ29udGFpbmVyUmVjdC5pbnRlcnNlY3Rpb24odGVtcFJlY3QsIGJvZHlSZWN0KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJlYSA9IHRlbXBSZWN0LndpZHRoICogdGVtcFJlY3QuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlYSA+IG1heEFyZWEpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhBcmVhID0gYXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEdvb2RzQ29udGFpbmVyID0gZ29vZHNDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOWFpeafnFxyXG4gICAgICAgIGlmICh0YXJnZXRHb29kc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAvL+aWsOaJi+W8leWvvOWFs+esrOS4gOatpeayoeacieaUvuWvueS4jeiuqeWFpeafnFxyXG4gICAgICAgICAgICBpZihEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEubGV2ZWw9PTEmJkRhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5uZXdHdWlkZVN0ZXA9PTEpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29udGFpbmVyID0gdGFyZ2V0R29vZHNDb250YWluZXIucGFyZW50LnBhcmVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRhaW5lckNvbXBvbmVudDogQ29udGFpbmVyID0gbmV3Q29udGFpbmVyLmdldENvbXBvbmVudChDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Q29udGFpbmVyQ29tcG9uZW50LmNvbCxuZXdDb250YWluZXJDb21wb25lbnQucm93KTtcclxuICAgICAgICAgICAgICAgIGlmKG5ld0NvbnRhaW5lckNvbXBvbmVudC5jb2w9PTImJm5ld0NvbnRhaW5lckNvbXBvbmVudC5yb3c9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEdvb2RzQ29udGFpbmVyPW51bGw7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGFyZ2V0R29vZHNDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGxvY2F0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0YXJnZXRHb29kc0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhdGlvbilcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICAvLyDlhaXmn5zliqjnlLtcclxuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIGNvbnN0IGRpcyA9IGdldERpc3RhbmNlKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLCBjYy52MigwLCAwKSk7XHJcbiAgICAgICAgbGV0IGRlbGF5VGltZT1kaXMgLyB0aGlzLnNwZWVkO1xyXG4gICAgICAgIGlmICh0YXJnZXRHb29kc0NvbnRhaW5lcj09bnVsbCkge1xyXG4gICAgICAgICAgICBkZWxheVRpbWU9ZGlzL3RoaXMucmV0dXJuU3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFjdCA9IGNjLm1vdmVUbyhkZWxheVRpbWUsIGNjLnYyKDAsIDApKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihhY3QpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0R29vZHNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZENvbnRhaW5lckNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja+Wxgui9rGZyb2505bGCLCDlkIzml7bnlJ/kuqfmlrDnmoRiYWNr5bGCXHJcbiAgICAgICAgICAgICAgICBvbGRDb250YWluZXJDb21wb25lbnQuYmFja1RvRnJvbnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRhaW5lciA9IHRhcmdldEdvb2RzQ29udGFpbmVyLnBhcmVudC5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb250YWluZXJDb21wb25lbnQ6IENvbnRhaW5lciA9IG5ld0NvbnRhaW5lci5nZXRDb21wb25lbnQoQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50PXRhcmdldEdvb2RzQ29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXI9bmV3Q29udGFpbmVyQ29tcG9uZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRhcmdldEdvb2RzQ29udGFpbmVyLng+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleD0yO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlICBpZih0YXJnZXRHb29kc0NvbnRhaW5lci54PDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXg9MDtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXg9MTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNoYXdQb3N0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBvbGRDb250YWluZXJDb21wb25lbnQuZ29vZHNDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgbmV3Q29udGFpbmVyQ29tcG9uZW50Lmdvb2RzQ291bnQrKztcclxuICAgICAgICAgICAgICAgIC8vIOa2iOmZpFxyXG4gICAgICAgICAgICAgICAgbmV3Q29udGFpbmVyQ29tcG9uZW50LmNsZWFyRnJvbnQoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTaGF3UG9zdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW92aW5nKGZhbHNlKTtcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmlzVGlwPXRydWU7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UudGlwVGltZT1ERUZBVUxUX1RJUF9USU1FO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5qC55o2u54mp5ZOB55qE5L2N572u5a6e5pe26K6h566X6Zi05b2x5L2N572uIOiMg+WbtCAgeSAtMTAg4oCU4oCUIC0zMO+8jHg6IDQwIOKAlOKAlCA3MFxyXG4gICAgY2FjdWxhdGVQb3N0aW9uKCk6Y2MuVmVjMntcclxuICAgICAgICBsZXQgZmlyc3RYPUNvbnN0YW50cy5HT09EU19TSEFET1dfWF9GUk9OVCsxMDtcclxuICAgICAgICBsZXQgZmlyc3RZPUNvbnN0YW50cy5HT09EU19TSEFET1dfWTtcclxuICAgICAgICBsZXQgY3VycmVudFg9MDtcclxuICAgICAgICBsZXQgY3VycmVudFk9MDtcclxuICAgICAgICBsZXQgd2luU2l6ZVBpeGVscz1jYy53aW5TaXplO1xyXG4gICAgICAgIGxldCB3b3JsZFBvc3Rpb249dGhpcy5zaGFkb3cuY29udmVydFRvV29ybGRTcGFjZUFSKG5ldyBjYy5WZWMyKHRoaXMuc2hhZG93LnBvc2l0aW9uLngsdGhpcy5zaGFkb3cucG9zaXRpb24ueSkpO1xyXG5cclxuICAgICAgICBjdXJyZW50WD1maXJzdFgrKDMwLXdvcmxkUG9zdGlvbi54L3dpblNpemVQaXhlbHMud2lkdGgqKDMwKSk7XHJcbiAgICAgICAgY3VycmVudFk9Zmlyc3RZK3dvcmxkUG9zdGlvbi55L3dpblNpemVQaXhlbHMuaGVpZ2h0KigtMjApO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZihjdXJyZW50WDw0MCl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRYPTQwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXJyZW50WD43MCl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRYPTcwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY3VycmVudFk+LTEwKXtcclxuICAgICAgICAgICAgY3VycmVudFk9LTEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjdXJyZW50WTwtMzApe1xyXG4gICAgICAgICAgICBjdXJyZW50WT0tMzA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIoY3VycmVudFgsY3VycmVudFkpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19