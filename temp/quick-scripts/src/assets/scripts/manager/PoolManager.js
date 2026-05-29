"use strict";
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