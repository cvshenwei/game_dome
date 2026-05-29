
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXIvRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7SUFBQTtRQVdJLGFBQVEsR0FBbUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQW1DeEQsQ0FBQztJQTNDVSx3QkFBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1NBQzlCO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3pCLENBQUM7SUFJRCxzQkFBVyx3QkFBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBZ0IsQ0FBQTtRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHlCQUFFLEdBQUYsVUFBRyxJQUFZLEVBQUUsS0FBZSxFQUFFLE9BQWlCO1FBQy9DLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7WUFDdkIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssT0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFDLENBQUMsQ0FBQTtTQUNsQzthQUFJO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBQyxDQUFDLENBQUMsQ0FBQTtTQUM5QztJQUNMLENBQUM7SUFFRCwwQkFBRyxHQUFILFVBQUksSUFBWSxFQUFFLEtBQWU7UUFDN0IsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQztZQUN2QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN4QyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQW5CLENBQW1CLENBQUMsQ0FBQTtZQUM3RCxJQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDM0M7SUFDTCxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLElBQVk7UUFBRSxnQkFBb0I7YUFBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1lBQXBCLCtCQUFvQjs7UUFDbkMsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQztZQUN2QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN4QyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBZ0I7b0JBQWYsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBO2dCQUM3QixPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDMUQsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBNUNjLHNCQUFTLEdBQVEsSUFBSSxDQUFBO0lBNkN4QyxtQkFBQztDQTlDRCxBQThDQyxJQUFBO2tCQTlDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW50ZXJmYWNlIElFdmVudEl0ZW0ge1xyXG4gICAgZXZlbnQ6IEZ1bmN0aW9uXHJcbiAgICBjb250ZXh0OiB1bmtub3duXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50TWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IGFueSA9IG51bGxcclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2U8VD4oKTogVCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRNYXA6IE1hcDxTdHJpbmcsIEFycmF5PElFdmVudEl0ZW0+PiA9IG5ldyBNYXAoKVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2U8RXZlbnRNYW5hZ2VyPigpXHJcbiAgICB9XHJcblxyXG4gICAgb24obmFtZTogc3RyaW5nLCBldmVudDogRnVuY3Rpb24sIGNvbnRleHQ/OiB1bmtub3duKXtcclxuICAgICAgICBpZih0aGlzLmV2ZW50TWFwLmhhcyhuYW1lKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50QXJyID0gdGhpcy5ldmVudE1hcC5nZXQobmFtZSlcclxuICAgICAgICAgICAgZXZlbnRBcnIucHVzaCh7ZXZlbnQsIGNvbnRleHR9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFwLnNldChuYW1lLCBbe2V2ZW50LCBjb250ZXh0fV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9mZihuYW1lOiBzdHJpbmcsIGV2ZW50OiBGdW5jdGlvbil7XHJcbiAgICAgICAgaWYodGhpcy5ldmVudE1hcC5oYXMobmFtZSkpe1xyXG4gICAgICAgICAgICBjb25zdCBldmVudEFyciA9IHRoaXMuZXZlbnRNYXAuZ2V0KG5hbWUpXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnRBcnIuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5ldmVudCA9PSBldmVudClcclxuICAgICAgICAgICAgaWYoaW5kZXggPiAtMSkgZXZlbnRBcnIuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbWl0KG5hbWU6IHN0cmluZywgLi4ucGFyYW1zOiB1bmtub3duW10pe1xyXG4gICAgICAgIGlmKHRoaXMuZXZlbnRNYXAuaGFzKG5hbWUpKXtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRBcnIgPSB0aGlzLmV2ZW50TWFwLmdldChuYW1lKVxyXG4gICAgICAgICAgICBldmVudEFyci5mb3JFYWNoKCh7ZXZlbnQsIGNvbnRleHR9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0ID8gZXZlbnQuYXBwbHkoY29udGV4dCwgcGFyYW1zKSA6IGV2ZW50KHBhcmFtcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKXtcclxuICAgICAgICB0aGlzLmV2ZW50TWFwLmNsZWFyKClcclxuICAgIH1cclxufSJdfQ==