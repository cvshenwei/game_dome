"use strict";
cc._RF.push(module, 'bcae8q0UKhLAL4D4SoN+gEr', 'EventManager');
// scripts/manager/EventManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.eventMap = new Map();
    }
    EventManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    };
    Object.defineProperty(EventManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    EventManager.prototype.on = function (name, event, context) {
        if (this.eventMap.has(name)) {
            var eventArr = this.eventMap.get(name);
            eventArr.push({ event: event, context: context });
        }
        else {
            this.eventMap.set(name, [{ event: event, context: context }]);
        }
    };
    EventManager.prototype.off = function (name, event) {
        if (this.eventMap.has(name)) {
            var eventArr = this.eventMap.get(name);
            var index = eventArr.findIndex(function (item) { return item.event == event; });
            if (index > -1)
                eventArr.splice(index, 1);
        }
    };
    EventManager.prototype.emit = function (name) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (this.eventMap.has(name)) {
            var eventArr = this.eventMap.get(name);
            eventArr.forEach(function (_a) {
                var event = _a.event, context = _a.context;
                context ? event.apply(context, params) : event(params);
            });
        }
    };
    EventManager.prototype.clear = function () {
        this.eventMap.clear();
    };
    EventManager._instance = null;
    return EventManager;
}());
exports.default = EventManager;

cc._RF.pop();