
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/PoolManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a46f4A6CpBE04BZI8Amk1vE', 'PoolManager');
// scripts/manager/PoolManager.ts

"use strict";
// Created by carolsail
Object.defineProperty(exports, "__esModule", { value: true });
var PoolManager = /** @class */ (function () {
    function PoolManager() {
        this._dictPool = {};
        this._dictPrefab = {};
    }
    PoolManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    };
    Object.defineProperty(PoolManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    // 复制节点
    PoolManager.prototype.copyNode = function (copynode, parent) {
        var name = copynode.name;
        this._dictPrefab[name] = copynode;
        var node = null;
        if (this._dictPool.hasOwnProperty(name)) {
            var pool = this._dictPool[name];
            if (pool.size() > 0) {
                node = pool.get();
            }
            else {
                node = cc.instantiate(copynode);
            }
        }
        else {
            var pool = new cc.NodePool();
            this._dictPool[name] = pool;
            node = cc.instantiate(copynode);
        }
        if (parent) {
            node.parent = parent;
            node.active = true;
        }
        return node;
    };
    // 从池子取出节点
    PoolManager.prototype.getNode = function (prefab, parent, pos) {
        var tempPre;
        var name;
        if (typeof prefab === 'string') {
            tempPre = this._dictPrefab[prefab];
            name = prefab;
            if (!tempPre) {
                console.log("Pool invalid prefab name = ", name);
                return null;
            }
        }
        else {
            tempPre = prefab;
            name = prefab.data.name;
        }
        var node = null;
        if (this._dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            var pool = this._dictPool[name];
            if (pool.size() > 0) {
                node = pool.get();
            }
            else {
                node = cc.instantiate(tempPre);
            }
        }
        else {
            //没有对应对象池，创建他！
            var pool = new cc.NodePool();
            this._dictPool[name] = pool;
            node = cc.instantiate(tempPre);
        }
        if (parent) {
            node.parent = parent;
            node.active = true;
            if (pos)
                node.position = pos;
        }
        return node;
    };
    // 节点放进池子
    PoolManager.prototype.putNode = function (node, isActive) {
        if (isActive === void 0) { isActive = false; }
        if (!node) {
            return;
        }
        //console.log("回收信息",node.name,node)
        var name = node.name;
        var pool = null;
        // node.active = isActive
        if (this._dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            pool = this._dictPool[name];
        }
        else {
            //没有对应对象池，创建他！
            pool = new cc.NodePool();
            this._dictPool[name] = pool;
        }
        pool.put(node);
    };
    // 根据名字清池
    PoolManager.prototype.clearPool = function (name) {
        if (this._dictPool.hasOwnProperty(name)) {
            var pool = this._dictPool[name];
            pool.clear();
        }
    };
    // 添加预制体
    PoolManager.prototype.setPrefab = function (name, prefab) {
        this._dictPrefab[name] = prefab;
    };
    // 取预制体
    PoolManager.prototype.getPrefab = function (name) {
        return this._dictPrefab[name];
    };
    PoolManager._instance = null;
    return PoolManager;
}());
exports.default = PoolManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXIvUG9vbE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF1Qjs7QUFFdkI7SUFBQTtRQWdCWSxjQUFTLEdBQVEsRUFBRSxDQUFBO1FBQ25CLGdCQUFXLEdBQVEsRUFBRSxDQUFBO0lBNkdqQyxDQUFDO0lBMUhVLHVCQUFXLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7U0FDOUI7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVELHNCQUFXLHVCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFlLENBQUE7UUFDMUMsQ0FBQzs7O09BQUE7SUFLRCxPQUFPO0lBQ0EsOEJBQVEsR0FBZixVQUFnQixRQUFpQixFQUFFLE1BQXNCO1FBQ3JELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDckI7aUJBQU07Z0JBQ0gsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkM7U0FDSjthQUFNO1lBRUgsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFF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QUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELFNBQVM7SUFDRiwrQkFBUyxHQUFoQixVQUFpQixJQUFZO1FBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUNELCtCQUFTLEdBQWhCLFVBQWlCLElBQVksRUFBRSxNQUFpQjtRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTztJQUNBLCtCQUFTLEdBQWhCLFVBQWlCLElBQVk7UUFDekIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUEzSGMscUJBQVMsR0FBUSxJQUFJLENBQUE7SUE0SHhDLGtCQUFDO0NBOUhELEFBOEhDLElBQUE7a0JBOUhvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlZCBieSBjYXJvbHNhaWxcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvb2xNYW5hZ2Vye1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogYW55ID0gbnVsbFxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZTxUPigpOiBUIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgdGhpcygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlPFBvb2xNYW5hZ2VyPigpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGljdFBvb2w6IGFueSA9IHt9XHJcbiAgICBwcml2YXRlIF9kaWN0UHJlZmFiOiBhbnkgPSB7fVxyXG5cclxuICAgIC8vIOWkjeWItuiKgueCuVxyXG4gICAgcHVibGljIGNvcHlOb2RlKGNvcHlub2RlOiBjYy5Ob2RlLCBwYXJlbnQ6IGNjLk5vZGUgfCBudWxsKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBjb3B5bm9kZS5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2RpY3RQcmVmYWJbbmFtZV0gPSBjb3B5bm9kZTtcclxuICAgICAgICBsZXQgbm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RpY3RQb29sLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGxldCBwb29sID0gdGhpcy5fZGljdFBvb2xbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChwb29sLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBwb29sLmdldCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKGNvcHlub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9kaWN0UG9vbFtuYW1lXSA9IHBvb2w7XHJcblxyXG4gICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUoY29weW5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOS7juaxoOWtkOWPluWHuuiKgueCuVxyXG4gICAgcHVibGljIGdldE5vZGUocHJlZmFiOiBjYy5QcmVmYWIgfCBzdHJpbmcsIHBhcmVudD86IGNjLk5vZGUsIHBvcz86IGNjLlZlYzMpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgdGVtcFByZTogYW55O1xyXG4gICAgICAgIGxldCBuYW1lOiBhbnk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwcmVmYWIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRlbXBQcmUgPSB0aGlzLl9kaWN0UHJlZmFiW3ByZWZhYl07XHJcbiAgICAgICAgICAgIG5hbWUgPSBwcmVmYWI7XHJcbiAgICAgICAgICAgIGlmICghdGVtcFByZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQb29sIGludmFsaWQgcHJlZmFiIG5hbWUgPSBcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcFByZSA9IHByZWZhYjtcclxuICAgICAgICAgICAgbmFtZSA9IHByZWZhYi5kYXRhLm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RpY3RQb29sLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgIC8v5bey5pyJ5a+55bqU55qE5a+56LGh5rGgXHJcbiAgICAgICAgICAgIGxldCBwb29sID0gdGhpcy5fZGljdFBvb2xbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChwb29sLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBwb29sLmdldCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRlbXBQcmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/msqHmnInlr7nlupTlr7nosaHmsaDvvIzliJvlu7rku5bvvIFcclxuICAgICAgICAgICAgbGV0IHBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgICAgICAgICAgdGhpcy5fZGljdFBvb2xbbmFtZV0gPSBwb29sO1xyXG5cclxuICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRlbXBQcmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAocG9zKSBub2RlLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDoioLngrnmlL7ov5vmsaDlrZBcclxuICAgIHB1YmxpYyBwdXROb2RlKG5vZGU6IGNjLk5vZGUgfCBudWxsLCBpc0FjdGl2ZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKCFub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCLlm57mlLbkv6Hmga9cIixub2RlLm5hbWUsbm9kZSlcclxuICAgICAgICBsZXQgbmFtZSA9IG5vZGUubmFtZTtcclxuICAgICAgICBsZXQgcG9vbCA9IG51bGw7XHJcbiAgICAgICAgLy8gbm9kZS5hY3RpdmUgPSBpc0FjdGl2ZVxyXG4gICAgICAgIGlmICh0aGlzLl9kaWN0UG9vbC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICAvL+W3suacieWvueW6lOeahOWvueixoeaxoFxyXG4gICAgICAgICAgICBwb29sID0gdGhpcy5fZGljdFBvb2xbbmFtZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/msqHmnInlr7nlupTlr7nosaHmsaDvvIzliJvlu7rku5bvvIFcclxuICAgICAgICAgICAgcG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9kaWN0UG9vbFtuYW1lXSA9IHBvb2w7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb29sLnB1dChub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmoLnmja7lkI3lrZfmuIXmsaBcclxuICAgIHB1YmxpYyBjbGVhclBvb2wobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RpY3RQb29sLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGxldCBwb29sID0gdGhpcy5fZGljdFBvb2xbbmFtZV07XHJcbiAgICAgICAgICAgIHBvb2wuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5re75Yqg6aKE5Yi25L2TXHJcbiAgICBwdWJsaWMgc2V0UHJlZmFiKG5hbWU6IHN0cmluZywgcHJlZmFiOiBjYy5QcmVmYWIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kaWN0UHJlZmFiW25hbWVdID0gcHJlZmFiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWPlumihOWItuS9k1xyXG4gICAgcHVibGljIGdldFByZWZhYihuYW1lOiBzdHJpbmcpOiBjYy5QcmVmYWIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaWN0UHJlZmFiW25hbWVdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==