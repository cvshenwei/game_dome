
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/framework/SpriteFrameCache.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '678ccGCS9dLMLi+sVwgrQ04', 'SpriteFrameCache');
// scripts/framework/SpriteFrameCache.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteFrameCache = /** @class */ (function () {
    function SpriteFrameCache() {
        this.frames = new Map();
    }
    Object.defineProperty(SpriteFrameCache, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new SpriteFrameCache();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    // private frames:{[index:string]:cc.SpriteFrame} = {};
    SpriteFrameCache.prototype.getSpriteFrame = function (url) {
        return __awaiter(this, void 0, Promise, function () {
            var frame;
            var _this = this;
            return __generator(this, function (_a) {
                frame = this.frames.get(url);
                if (frame == null || frame.name == null || frame.name == '') {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            //console.log("[SpriteFrameCache] request image:" + url)
                            if (!url || url == "") {
                                reject("empty-url");
                                return;
                            }
                            if (url.indexOf("http") == -1) {
                                cc.loader.loadRes(url, cc.SpriteFrame, function (error, frame) {
                                    if (error) {
                                        reject();
                                        return;
                                    }
                                    if (frame) {
                                        _this.addSpriteFrame(url, frame);
                                        resolve(frame);
                                    }
                                    else {
                                        reject();
                                    }
                                });
                            }
                            else {
                                cc.loader.load({ url: url, type: 'png' }, function (error, texture) {
                                    if (error) {
                                        reject();
                                        return;
                                    }
                                    if (texture) {
                                        frame = new cc.SpriteFrame(texture);
                                        _this.addSpriteFrame(url, frame);
                                        resolve(frame);
                                    }
                                    else {
                                        reject();
                                    }
                                });
                            }
                        })];
                }
                return [2 /*return*/, new Promise(function (resolve, reject) { return resolve(frame); })];
            });
        });
    };
    SpriteFrameCache.prototype.addSpriteFrame = function (url, frame) {
        this.frames.set(url, frame);
        return frame;
    };
    SpriteFrameCache.prototype.clear = function () {
        if (this.frames != null) {
            this.frames.forEach(function (value, key) {
                var frame = this.frames.get(key);
                cc.loader.release(frame);
            });
            this.frames.clear();
        }
    };
    SpriteFrameCache.prototype.remove = function (k) {
        var frame = this.frames.get(k);
        cc.loader.release(frame);
        this.frames.delete(k);
    };
    return SpriteFrameCache;
}());
exports.default = SpriteFrameCache;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2ZyYW1ld29yay9TcHJpdGVGcmFtZUNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQWFZLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztJQXNFdkQsQ0FBQztJQS9FRyxzQkFBVyw0QkFBUTthQUFuQjtZQUVJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQ3pCO2dCQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO2FBQzNDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBR0YsdURBQXVEO0lBQ2hELHlDQUFjLEdBQXBCLFVBQXFCLEdBQVU7dUNBQUUsT0FBTzs7OztnQkFFaEMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVqQyxJQUFHLEtBQUssSUFBSSxJQUFJLElBQUUsS0FBSyxDQUFDLElBQUksSUFBRSxJQUFJLElBQUUsS0FBSyxDQUFDLElBQUksSUFBRSxFQUFFLEVBQ2xEO29CQUNJLHNCQUFPLElBQUksT0FBTyxDQUFpQixVQUFDLE9BQU8sRUFBQyxNQUFNOzRCQUM5Qyx3REFBd0Q7NEJBQ3hELElBQUcsQ0FBQyxHQUFHLElBQUcsR0FBRyxJQUFJLEVBQUUsRUFBRTtnQ0FDakIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dDQUNuQixPQUFPOzZCQUNWOzRCQUNELElBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDOUI7Z0NBQ0ksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsVUFBQyxLQUFLLEVBQUMsS0FBSztvQ0FDN0MsSUFBRyxLQUFLLEVBQUM7d0NBQUMsTUFBTSxFQUFFLENBQUM7d0NBQUEsT0FBTTtxQ0FBQztvQ0FDMUIsSUFBRyxLQUFLLEVBQ1I7d0NBQ0ksS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7d0NBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtxQ0FDakI7eUNBQUk7d0NBQ0QsTUFBTSxFQUFFLENBQUE7cUNBQ1g7Z0NBQ0wsQ0FBQyxDQUFDLENBQUE7NkJBQ0w7aUNBQUk7Z0NBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxVQUFDLEtBQUssRUFBRSxPQUFPO29DQUNuRCxJQUFHLEtBQUssRUFBQzt3Q0FBQyxNQUFNLEVBQUUsQ0FBQzt3Q0FBQSxPQUFNO3FDQUFDO29DQUMxQixJQUFHLE9BQU8sRUFDVjt3Q0FDSSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dDQUNwQyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTt3Q0FDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO3FDQUNqQjt5Q0FBSTt3Q0FDRCxNQUFNLEVBQUUsQ0FBQTtxQ0FDWDtnQ0FDTCxDQUFDLENBQUMsQ0FBQzs2QkFDTjt3QkFDTCxDQUFDLENBQUMsRUFBQTtpQkFDTDtnQkFDRCxzQkFBTyxJQUFJLE9BQU8sQ0FBaUIsVUFBQyxPQUFPLEVBQUMsTUFBTSxJQUFHLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFkLENBQWMsQ0FBQyxFQUFDOzs7S0FFeEU7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsR0FBVyxFQUFFLEtBQVU7UUFFbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFHRCxnQ0FBSyxHQUFMO1FBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFFLElBQUksRUFBQztZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssRUFBRSxHQUFHO2dCQUNwQyxJQUFJLEtBQUssR0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFN0IsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxDQUFDO1FBRUosSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FuRkEsQUFtRkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcml0ZUZyYW1lQ2FjaGVcclxue1xyXG4gICAgc3RhdGljIF9pbnN0YW5jZTpTcHJpdGVGcmFtZUNhY2hlO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuX2luc3RhbmNlID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTcHJpdGVGcmFtZUNhY2hlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZyYW1lcyA9IG5ldyBNYXA8c3RyaW5nLCBjYy5TcHJpdGVGcmFtZT4oKTsgXHJcbiAgIC8vIHByaXZhdGUgZnJhbWVzOntbaW5kZXg6c3RyaW5nXTpjYy5TcHJpdGVGcmFtZX0gPSB7fTtcclxuICAgIGFzeW5jIGdldFNwcml0ZUZyYW1lKHVybDpzdHJpbmcpOlByb21pc2U8Y2MuU3ByaXRlRnJhbWU+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGZyYW1lID0gdGhpcy5mcmFtZXMuZ2V0KHVybCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZnJhbWUgPT0gbnVsbHx8ZnJhbWUubmFtZT09bnVsbHx8ZnJhbWUubmFtZT09JycpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuU3ByaXRlRnJhbWU+KChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJbU3ByaXRlRnJhbWVDYWNoZV0gcmVxdWVzdCBpbWFnZTpcIiArIHVybClcclxuICAgICAgICAgICAgICAgIGlmKCF1cmwgfHx1cmwgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcImVtcHR5LXVybFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICggdXJsLmluZGV4T2YoXCJodHRwXCIpID09IC0xKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCxjYy5TcHJpdGVGcmFtZSwoZXJyb3IsZnJhbWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVycm9yKXtyZWplY3QoKTtyZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNwcml0ZUZyYW1lKHVybCAsZnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoe3VybDogdXJsLCB0eXBlOiAncG5nJ30sIChlcnJvciwgdGV4dHVyZSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVycm9yKXtyZWplY3QoKTtyZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTcHJpdGVGcmFtZSh1cmwgLGZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmcmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxjYy5TcHJpdGVGcmFtZT4oKHJlc29sdmUscmVqZWN0KT0+cmVzb2x2ZShmcmFtZSkpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFkZFNwcml0ZUZyYW1lKHVybDogc3RyaW5nLCBmcmFtZTogYW55KTogYW55IHtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZXMuc2V0KHVybCxmcmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGZyYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBpZih0aGlzLmZyYW1lcyE9bnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmcmFtZSA9ICB0aGlzLmZyYW1lcy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5yZWxlYXNlKGZyYW1lKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVzLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShrKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBmcmFtZSA9IHRoaXMuZnJhbWVzLmdldChrKVxyXG4gICAgICAgIGNjLmxvYWRlci5yZWxlYXNlKGZyYW1lKTtcclxuICAgICAgICB0aGlzLmZyYW1lcy5kZWxldGUoaylcclxuICAgIH1cclxuXHJcbn0iXX0=