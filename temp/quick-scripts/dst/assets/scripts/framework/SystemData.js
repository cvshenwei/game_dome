
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/framework/SystemData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce775Y+2SVDkoZwu+v3dA53', 'SystemData');
// scripts/framework/SystemData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.field = exports.dc = void 0;
var EventManager_1 = require("../manager/EventManager");
var all_class_properties = {};
var all_registed_class = {};
function dc(name, serializable) {
    if (serializable === void 0) { serializable = true; }
    return function (target) {
        // target.endRegister(name);
        var proto = target['prototype'].constructor;
        // let cls = all_class_properties[proto]
        all_registed_class[target] = { name: name, serializable: serializable };
    };
}
exports.dc = dc;
function field(obj) {
    return function (target, propertyName) {
        if (obj && obj.default)
            target[propertyName] = obj.default;
        // target.register(propertyName,target[propertyName])
        var constructor = target.constructor;
        var cls = all_class_properties[constructor];
        if (cls == null) {
            cls = [];
            all_class_properties[constructor] = cls;
        }
        cls.push(propertyName);
    };
}
exports.field = field;
var SystemData = /** @class */ (function () {
    function SystemData() {
        this.__namespace = "SystemData";
        this.kvs = {};
        this.kts = {};
        this.kvs = {};
        this.kts = {};
    }
    SystemData.prototype.registerFields = function (namespace) {
        //console.log(this);
        var target = this["__proto__"].constructor;
        var cls = all_class_properties[target];
        var cfg = all_registed_class[target];
        // let proto:any = target['prototype'];
        for (var i in cls) {
            var k = cls[i];
            if (typeof (k) == "function")
                continue;
            this.register(k, this[k]);
            delete this[k]; //删除默认属性 ,否则设置 setter getter 会失效
        }
        namespace = namespace || cfg.name;
        this.endRegister(namespace, cfg.serializable);
    };
    SystemData.prototype.register = function (k, defaultValue) {
        console.log("[dc] register :" + k + ":" + defaultValue);
        var proto = this.constructor["prototype"];
        var self = this;
        proto.__defineGetter__(k, function () {
            return self.getData(k);
        });
        proto.__defineSetter__(k, function (s) {
            self.setData(k, s);
        });
        this.kvs[k] = defaultValue;
        var type = typeof (defaultValue);
        this.kts[k] = type;
    };
    SystemData.prototype.setData = function (k, nv) {
        var v = this.kvs[k];
        if (v == nv)
            return;
        var type = this.kts[k];
        var kk = this._field_(k);
        if (type != typeof (nv)) {
            if (type == "number")
                nv = Number(nv);
            else if (type == "boolean") {
                nv = (nv == "true") ? true : false;
            }
        }
        this.kvs[k] = nv;
        EventManager_1.default.instance.emit(kk, nv, v);
    };
    SystemData.prototype._field_ = function (k) {
        return this.__namespace + "." + k;
    };
    SystemData.prototype.getData = function (k) {
        return this.kvs[k];
    };
    SystemData.prototype.limit = function (v, min, max) {
        if (v > max) {
            return max;
        }
        else if (v < min) {
            return 0;
        }
        else {
            return v;
        }
    };
    SystemData.prototype.addData = function (k, c) {
        c = Number(c);
        if (c == null)
            return;
        var v = this.kvs[k];
        var nv = Number(v) + c;
        this.kvs[k] = nv;
        EventManager_1.default.instance.emit(this._field_(k), nv, v);
    };
    SystemData.prototype.load = function () {
        for (var k in this.kvs) {
            var fromstroage = localStorage.getItem(this._field_(k));
            var v = fromstroage;
            if (fromstroage) {
                var type = this.kts[k];
                if (type == "number") {
                    v = Number(fromstroage);
                }
                else if (type == "boolean") {
                    v = fromstroage == "true" ? true : false;
                }
            }
            else {
                v = this.getData(k);
            }
            this.kvs[k] = v;
        }
    };
    SystemData.prototype.saveData = function () {
        for (var k in this.kvs) {
            var v = this.kvs[k];
            var kk = this._field_(k);
            localStorage.setItem(kk, v.toString());
        }
    };
    SystemData.prototype.endRegister = function (s, serializable) {
        if (serializable === void 0) { serializable = true; }
        this.__namespace = s;
        SystemData.alldata[s] = this;
        if (serializable) {
            this.load();
            this.saveData();
        }
    };
    SystemData.off = function (k, callback, target) {
        EventManager_1.default.instance.off(k, callback);
    };
    SystemData.on = function (k, callback, target) {
        EventManager_1.default.instance.on(k, callback, target);
        this.set(k, this.get(k));
    };
    SystemData.get = function (k) {
        var strs = k.split(".");
        var namespace = strs[0];
        var name = strs[1];
        var target = SystemData.alldata[namespace];
        if (target)
            return target[name];
        else
            return null;
    };
    SystemData.set = function (k, v) {
        var strs = k.split(".");
        var namespace = strs[0];
        var name = strs[1];
        var target = SystemData.alldata[namespace];
        if (target) {
            target[name] = v;
        }
    };
    SystemData.register = function (cls) {
        var v = new cls();
        v.registerFields();
        return v;
    };
    SystemData.alldata = {};
    return SystemData;
}());
exports.default = SystemData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2ZyYW1ld29yay9TeXN0ZW1EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFvRDtBQUdwRCxJQUFNLG9CQUFvQixHQUFHLEVBQUUsQ0FBQTtBQUUvQixJQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQTtBQUM3QixTQUFnQixFQUFFLENBQUMsSUFBSSxFQUFDLFlBQW1CO0lBQW5CLDZCQUFBLEVBQUEsbUJBQW1CO0lBRXZDLE9BQU8sVUFBVSxNQUFVO1FBRXZCLDRCQUE0QjtRQUM1QixJQUFJLEtBQUssR0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ2hELHdDQUF3QztRQUN4QyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLElBQUksTUFBQSxFQUFDLFlBQVksY0FBQSxFQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQVRELGdCQVNDO0FBQ0QsU0FBZ0IsS0FBSyxDQUFDLEdBQW1CO0lBQ3JDLE9BQU8sVUFBVSxNQUFXLEVBQUUsWUFBb0I7UUFDOUMsSUFBRyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU87WUFDakIsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDdkMscURBQXFEO1FBQ3JELElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUE7UUFDcEMsSUFBSSxHQUFHLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDM0MsSUFBRyxHQUFHLElBQUksSUFBSSxFQUNkO1lBQ0ksR0FBRyxHQUFHLEVBQUUsQ0FBQTtZQUNSLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUMzQztRQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQWRELHNCQWNDO0FBR0Q7SUFNSTtR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LElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMxQyxJQUFHLE1BQU0sRUFDVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU0sbUJBQVEsR0FBZixVQUFnQixHQUFHO1FBRWYsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDbEIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBbkxNLGtCQUFPLEdBQUcsRUFBRSxDQUFBO0lBb0x2QixpQkFBQztDQXZMRCxBQXVMQyxJQUFBO2tCQXZMb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFZmZlY3RNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0V2ZW50TWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IGFsbF9jbGFzc19wcm9wZXJ0aWVzID0ge31cclxuXHJcbmNvbnN0IGFsbF9yZWdpc3RlZF9jbGFzcyA9IHt9XHJcbmV4cG9ydCBmdW5jdGlvbiBkYyhuYW1lLHNlcmlhbGl6YWJsZSA9IHRydWUpOkZ1bmN0aW9uXHJcbntcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OmFueSlcclxuICAgIHtcclxuICAgICAgICAvLyB0YXJnZXQuZW5kUmVnaXN0ZXIobmFtZSk7XHJcbiAgICAgICAgbGV0IHByb3RvOmFueSA9IHRhcmdldFsncHJvdG90eXBlJ10uY29uc3RydWN0b3I7XHJcbiAgICAgICAgLy8gbGV0IGNscyA9IGFsbF9jbGFzc19wcm9wZXJ0aWVzW3Byb3RvXVxyXG4gICAgICAgIGFsbF9yZWdpc3RlZF9jbGFzc1t0YXJnZXRdID0ge25hbWUsc2VyaWFsaXphYmxlfTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmllbGQob2JqPzp7ZGVmYXVsdD86YW55fSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZihvYmogJiYgb2JqLmRlZmF1bHQpXHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eU5hbWVdID0gb2JqLmRlZmF1bHQ7XHJcbiAgICAgICAgLy8gdGFyZ2V0LnJlZ2lzdGVyKHByb3BlcnR5TmFtZSx0YXJnZXRbcHJvcGVydHlOYW1lXSlcclxuICAgICAgICBsZXQgY29uc3RydWN0b3IgPSB0YXJnZXQuY29uc3RydWN0b3JcclxuICAgICAgICBsZXQgY2xzID0gYWxsX2NsYXNzX3Byb3BlcnRpZXNbY29uc3RydWN0b3JdXHJcbiAgICAgICAgaWYoY2xzID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbHMgPSBbXVxyXG4gICAgICAgICAgICBhbGxfY2xhc3NfcHJvcGVydGllc1tjb25zdHJ1Y3Rvcl0gPSBjbHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNscy5wdXNoKHByb3BlcnR5TmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeXN0ZW1EYXRhXHJcbntcclxuICAgIHByaXZhdGUgX19uYW1lc3BhY2U6c3RyaW5nID0gXCJTeXN0ZW1EYXRhXCJcclxuICAgIHN0YXRpYyBhbGxkYXRhID0ge31cclxuICAgIHByaXZhdGUga3ZzID0ge31cclxuICAgIHByaXZhdGUga3RzID0ge31cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmt2cyA9IHt9XHJcbiAgICAgICAgdGhpcy5rdHMgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJGaWVsZHMobmFtZXNwYWNlPylcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzW1wiX19wcm90b19fXCJdLmNvbnN0cnVjdG9yIFxyXG4gICAgICAgIGxldCBjbHMgPSBhbGxfY2xhc3NfcHJvcGVydGllc1t0YXJnZXRdXHJcbiAgICAgICAgbGV0IGNmZyA9IGFsbF9yZWdpc3RlZF9jbGFzc1t0YXJnZXRdXHJcbiAgICAgICAgLy8gbGV0IHByb3RvOmFueSA9IHRhcmdldFsncHJvdG90eXBlJ107XHJcbiAgICAgICAgZm9yKHZhciBpIGluIGNscylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBrID0gY2xzW2ldO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YoaykgPT0gXCJmdW5jdGlvblwiKSBjb250aW51ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihrLHRoaXNba10pXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tdOyAvL+WIoOmZpOm7mOiupOWxnuaApyAs5ZCm5YiZ6K6+572uIHNldHRlciBnZXR0ZXIg5Lya5aSx5pWIXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hbWVzcGFjZSA9IG5hbWVzcGFjZSB8fCAgY2ZnLm5hbWU7XHJcbiAgICAgICAgdGhpcy5lbmRSZWdpc3RlcihuYW1lc3BhY2UsY2ZnLnNlcmlhbGl6YWJsZSlcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihrLGRlZmF1bHRWYWx1ZSlcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIltkY10gcmVnaXN0ZXIgOlwiICsgayArIFwiOlwiICsgZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgIGxldCBwcm90bzphbnkgPSB0aGlzLmNvbnN0cnVjdG9yW1wicHJvdG90eXBlXCJdXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHByb3RvLl9fZGVmaW5lR2V0dGVyX18oayxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5nZXREYXRhKGspO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcHJvdG8uX19kZWZpbmVTZXR0ZXJfXyhrLGZ1bmN0aW9uKHMpe1xyXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoayxzKVxyXG4gICAgICAgIH0pIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMua3ZzW2tdID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIGxldCB0eXBlID0gdHlwZW9mKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5rdHNba10gPSAgdHlwZTtcclxuICAgICAgICBcclxuICAgIH1cclxuIFxyXG4gICAgc2V0RGF0YShrLG52KVxyXG4gICAge1xyXG4gICAgICAgIGxldCB2ID0gdGhpcy5rdnNba11cclxuICAgICAgICBpZih2ID09IG52ICkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5rdHNba11cclxuICAgICAgICBsZXQga2sgPXRoaXMuX2ZpZWxkXyhrKVxyXG4gICAgICAgIGlmKHR5cGUgIT0gdHlwZW9mKG52KSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgICAgIG52ID0gTnVtYmVyKG52KVxyXG4gICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gXCJib29sZWFuXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG52ID0gKG52ID09IFwidHJ1ZVwiKSA/IHRydWUgOmZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rdnNba10gPSBudjtcclxuICAgICAgICBFZmZlY3RNYW5hZ2VyLmluc3RhbmNlLmVtaXQoa2ssbnYsdilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maWVsZF8oaylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX25hbWVzcGFjZSArXCIuXCIgKyBrXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YShrKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmt2c1trXTtcclxuICAgIH1cclxuXHJcbiAgICBsaW1pdCh2LG1pbixtYXgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodiA+IG1heClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXg7XHJcbiAgICAgICAgfWVsc2UgaWYodiA8IG1pbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGF0YShrLGMpXHJcbiAgICB7XHJcbiAgICAgICAgYyA9IE51bWJlcihjKVxyXG4gICAgICAgIGlmKGMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB2ID0gdGhpcy5rdnNba11cclxuICAgICAgICBsZXQgbnYgPSAgTnVtYmVyKHYpICsgY1xyXG4gICAgICAgIHRoaXMua3ZzW2tdID0gbnZcclxuICAgICAgICBFZmZlY3RNYW5hZ2VyLmluc3RhbmNlLmVtaXQodGhpcy5fZmllbGRfKGspLG52LHYpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkKClcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBrIGluIHRoaXMua3ZzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGZyb21zdHJvYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fZmllbGRfKGspKVxyXG4gICAgICAgICAgICBsZXQgdjphbnkgPSBmcm9tc3Ryb2FnZVxyXG4gICAgICAgICAgICBpZihmcm9tc3Ryb2FnZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmt0c1trXVxyXG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBOdW1iZXIoZnJvbXN0cm9hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodHlwZSA9PSBcImJvb2xlYW5cIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gZnJvbXN0cm9hZ2UgPT0gXCJ0cnVlXCI/dHJ1ZTpmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXREYXRhKGspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMua3ZzW2tdID0gdjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZURhdGEoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgayBpbiB0aGlzLmt2cykgeyAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdiA9IHRoaXMua3ZzW2tdXHJcbiAgICAgICAgICAgIGxldCBrayA9IHRoaXMuX2ZpZWxkXyhrKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrayx2LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVuZFJlZ2lzdGVyKHMgLHNlcmlhbGl6YWJsZSA9IHRydWUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fX25hbWVzcGFjZSA9IHM7XHJcbiAgICAgICAgU3lzdGVtRGF0YS5hbGxkYXRhW3NdID0gdGhpcztcclxuICAgICAgICBpZihzZXJpYWxpemFibGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQoKVxyXG4gICAgICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvZmYoayxjYWxsYmFjayx0YXJnZXQ/KVxyXG4gICAge1xyXG4gICAgICAgIEVmZmVjdE1hbmFnZXIuaW5zdGFuY2Uub2ZmKGssY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvbihrLGNhbGxiYWNrLHRhcmdldD8pXHJcbiAgICB7XHJcbiAgICAgICAgRWZmZWN0TWFuYWdlci5pbnN0YW5jZS5vbihrICxjYWxsYmFjayx0YXJnZXQpXHJcbiAgICAgICB0aGlzLnNldChrLHRoaXMuZ2V0KGspKSBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KGspXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHN0cnMgPSBrLnNwbGl0KFwiLlwiKVxyXG4gICAgICAgIGxldCBuYW1lc3BhY2UgPSBzdHJzWzBdO1xyXG4gICAgICAgIGxldCBuYW1lID0gc3Ryc1sxXTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gU3lzdGVtRGF0YS5hbGxkYXRhW25hbWVzcGFjZV1cclxuICAgICAgICBpZih0YXJnZXQpXHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV1cclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0KGssdilcclxuICAgIHtcclxuICAgICAgICBsZXQgc3RycyA9IGsuc3BsaXQoXCIuXCIpXHJcbiAgICAgICAgbGV0IG5hbWVzcGFjZSA9IHN0cnNbMF07XHJcbiAgICAgICAgbGV0IG5hbWUgPSBzdHJzWzFdO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBTeXN0ZW1EYXRhLmFsbGRhdGFbbmFtZXNwYWNlXVxyXG4gICAgICAgIGlmKHRhcmdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IHY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWdpc3RlcihjbHMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHYgPSBuZXcgY2xzKCk7XHJcbiAgICAgICAgdi5yZWdpc3RlckZpZWxkcygpXHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICB9XHJcbn0iXX0=