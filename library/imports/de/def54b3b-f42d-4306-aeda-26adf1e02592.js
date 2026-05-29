"use strict";
cc._RF.push(module, 'def54s79C1DBq7aJq3x4CWS', 'EffectManager');
// scripts/manager/EffectManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PoolManager_1 = require("./PoolManager");
var EffectManager = /** @class */ (function () {
    function EffectManager() {
    }
    Object.defineProperty(EffectManager, "instance", {
        get: function () {
            if (null == this._instance) {
                this._instance = new EffectManager();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    EffectManager.prototype.play = function (effect, parent, options) {
        var effNode = PoolManager_1.default.instance.getNode("" + effect, parent);
        if (options) {
            options.pos && effNode.setPosition(options.pos);
        }
        if (effNode.getComponent(cc.Animation)) {
            var anim = effNode.getComponent(cc.Animation);
            anim.on('finished', function () {
                effNode.removeFromParent();
            });
            anim.play();
        }
        else if (effNode.getComponent(cc.ParticleSystem)) {
            effNode.getComponent(cc.ParticleSystem).resetSystem();
        }
    };
    EffectManager._instance = null;
    return EffectManager;
}());
exports.default = EffectManager;

cc._RF.pop();