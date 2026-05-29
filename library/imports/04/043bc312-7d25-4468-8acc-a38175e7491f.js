"use strict";
cc._RF.push(module, '043bcMSfSVEaIrMo4F150kf', 'EffectFlyManager');
// scripts/framework/EffectFlyManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonTool_1 = require("./utils/CommonTool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EffectFlyManager = /** @class */ (function () {
    function EffectFlyManager() {
    }
    Object.defineProperty(EffectFlyManager, "Instance", {
        get: function () {
            if (!EffectFlyManager.instance) {
                EffectFlyManager.instance = new EffectFlyManager();
            }
            return EffectFlyManager.instance;
        },
        enumerable: false,
        configurable: true
    });
    //物品掉落效果
    EffectFlyManager.prototype.itemFlyEffect = function (dropItem, dropPoint, flyTarget) {
        dropItem.position = cc.v3(dropPoint);
        this.fly(1, dropItem, flyTarget, function () {
            dropItem.destroy();
        });
    };
    //物品掉落效果
    EffectFlyManager.prototype.itemDropEffect = function (parentNode, dropItem, dropPoint, flyTarget) {
        dropItem.position = cc.v3(dropPoint);
        this.jumpOutAndFly(parentNode, dropItem, flyTarget, function () {
            dropItem.destroy();
        });
    };
    //物品掉落效果
    EffectFlyManager.prototype.showDropEffect = function (parentNode, dropItem, dropPoint, dropNum, flyTarget, scale, callBack) {
        var _loop_1 = function (index) {
            var drop = cc.instantiate(dropItem);
            drop.parent = parentNode;
            drop.position = cc.v3(dropPoint);
            if (scale == null || scale == 0) {
                scale = 1;
            }
            drop.scale = scale;
            drop.opacity = 255;
            this_1.jumpOutAndFly(parentNode, drop, flyTarget, function () {
                drop.destroy();
                if (callBack && index >= (dropNum - 1)) {
                    callBack && callBack.call(null);
                }
            });
        };
        var this_1 = this;
        for (var index = 0; index < dropNum; index++) {
            _loop_1(index);
        }
    };
    //物品掉落效果
    EffectFlyManager.prototype.showFlyEffect = function (parentNode, dropItem, dropPoint, dropNum, flyTarget, scale, delayTime, callBack) {
        var _loop_2 = function (index) {
            var drop = cc.instantiate(dropItem);
            drop.zIndex = 1000;
            drop.parent = parentNode;
            drop.position = cc.v3(dropPoint);
            if (scale == null || scale == 0) {
                scale = 1;
            }
            drop.scale = scale;
            drop.opacity = 255;
            this_2.fly(delayTime + 0.1 * index, drop, flyTarget, function () {
                drop.destroy();
                if (callBack && index >= (dropNum - 1)) {
                    callBack && callBack.call(null);
                }
            }, scale);
        };
        var this_2 = this;
        for (var index = 0; index < dropNum; index++) {
            _loop_2(index);
        }
    };
    EffectFlyManager.prototype.jumpOutAndFly = function (parentNode, dropNode, flyTarget, callBack) {
        var sign = Math.random() > 0.5 ? 1 : -1;
        var randomX = Math.random() * -50 * sign;
        var randomY = Math.random() * -25 * sign;
        var randomH = CommonTool_1.default.getRandomByInt(-5, 5);
        var randomt = CommonTool_1.default.getRandomByInt(60, 80) * 0.01;
        var wordPos = flyTarget.convertToWorldSpaceAR(cc.v2(0, 0));
        var targetPos = parentNode.convertToNodeSpaceAR(wordPos);
        var cb = function () {
            flyTarget.scale = 1.3;
            var actionTo = cc.scaleTo(0.1, 1);
            flyTarget.runAction(actionTo);
        };
        dropNode.stopAllActions();
        dropNode.runAction(cc.sequence(cc.jumpTo(randomt, cc.v2(dropNode.x + randomX, dropNode.y + randomY), 150 + randomH, 1).easing(cc.easeIn(1)), cc.jumpTo(randomt * 0.7, cc.v2(dropNode.x + randomX * 1.5, dropNode.y + randomY), 60 + randomH, 1).easing(cc.easeIn(1)), cc.jumpTo(randomt * 0.4, cc.v2(dropNode.x + randomX * 2, dropNode.y + randomY), 30 + randomH, 1).easing(cc.easeIn(1)), cc.delayTime(0.2), cc.spawn(cc.scaleTo(0.3, 1), cc.moveTo(0.3, targetPos).easing(cc.easeIn(1))), cc.callFunc(cb), cc.delayTime(0.1), cc.callFunc(callBack)));
    };
    EffectFlyManager.prototype.fly = function (delayTime, dropNode, flyTarget, callBack, scale) {
        var targetWPos = flyTarget.convertToWorldSpaceAR(cc.v2(0, 0));
        var targetNPos = dropNode.parent.convertToNodeSpaceAR(targetWPos);
        dropNode.stopAllActions();
        if (scale == null || scale == 0) {
            scale = 1;
        }
        dropNode.runAction(cc.sequence(cc.delayTime(delayTime), cc.spawn(cc.sequence(cc.scaleTo(0.2, 1 * scale), cc.scaleTo(0.2, 0.5 * scale)), cc.moveTo(1.5, targetNPos).easing(cc.easeBackInOut())), cc.fadeOut(0.1), cc.callFunc(callBack)));
    };
    EffectFlyManager.instance = null;
    return EffectFlyManager;
}());
exports.default = EffectFlyManager;

cc._RF.pop();