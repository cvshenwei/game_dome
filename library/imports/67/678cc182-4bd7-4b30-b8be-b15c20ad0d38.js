"use strict";
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