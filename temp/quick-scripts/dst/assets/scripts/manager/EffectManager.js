
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/EffectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXIvRWZmZWN0TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZDQUF3QztBQUV4QztJQUFBO0lBeUJBLENBQUM7SUF0Qkcsc0JBQWtCLHlCQUFRO2FBQTFCO1lBQ0ksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO2FBQ3hDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsNEJBQUksR0FBSixVQUFLLE1BQWMsRUFBRSxNQUFlLEVBQUUsT0FBYTtRQUMvQyxJQUFNLE9BQU8sR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBRyxNQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDakUsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2xEO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNwQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUMvQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDOUIsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDZDthQUFNLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDaEQsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDeEQ7SUFDTCxDQUFDO0lBdkJhLHVCQUFTLEdBQWtCLElBQUksQ0FBQTtJQXdCakQsb0JBQUM7Q0F6QkQsQUF5QkMsSUFBQTtrQkF6Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBQb29sTWFuYWdlciBmcm9tIFwiLi9Qb29sTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0TWFuYWdlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIF9pbnN0YW5jZTogRWZmZWN0TWFuYWdlciA9IG51bGxcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAobnVsbCA9PSB0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBFZmZlY3RNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXkoZWZmZWN0OiBzdHJpbmcsIHBhcmVudDogY2MuTm9kZSwgb3B0aW9ucz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGVmZk5vZGUgPSBQb29sTWFuYWdlci5pbnN0YW5jZS5nZXROb2RlKGAke2VmZmVjdH1gLCBwYXJlbnQpXHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wb3MgJiYgZWZmTm9kZS5zZXRQb3NpdGlvbihvcHRpb25zLnBvcylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVmZk5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikpIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbSA9IGVmZk5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICAgICAgYW5pbS5vbignZmluaXNoZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZmZOb2RlLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBhbmltLnBsYXkoKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZWZmTm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pKSB7XHJcbiAgICAgICAgICAgIGVmZk5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5yZXNldFN5c3RlbSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19