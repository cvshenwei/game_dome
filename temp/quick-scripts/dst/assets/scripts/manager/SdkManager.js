
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/SdkManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63001T9hINHxKQXF9QDpdaI', 'SdkManager');
// scripts/manager/SdkManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SdkManager = /** @class */ (function () {
    function SdkManager() {
        // 激励视频
        this.videoId = '';
        this.videoAd = null;
        // 插屏
        this.interstitialId = '';
        this.interstitialAd = null;
        // 横幅
        this.bannerId = '';
        this.bannerAd = null;
    }
    Object.defineProperty(SdkManager, "instance", {
        get: function () {
            if (null == this._instance) {
                this._instance = new SdkManager();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    // 获取平台
    SdkManager.prototype.getPlatform = function () {
        var platform = null;
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            platform = window['wx'];
        }
        else if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            platform = window['tt'];
        }
        return platform;
    };
    // 跳转
    SdkManager.prototype.turnToApp = function (appId) {
        if (appId == '')
            return;
        var platform = this.getPlatform();
        if (!platform) {
            this.turnToBrowser(appId);
            return;
        }
        platform.navigateToMiniProgram({
            appId: appId
        });
    };
    // 浏览器跳转
    SdkManager.prototype.turnToBrowser = function (url) {
        window.open(url);
    };
    // 初始化横幅
    SdkManager.prototype.initBannerAd = function () {
        var _this = this;
        var platform = this.getPlatform();
        if (!platform) {
            console.log('【流量主横幅初始化】仅支持小游戏平台!');
            return;
        }
        if (this.bannerId == '') {
            console.log('【流量主】请配置横幅广告ID');
            return;
        }
        var winSize = platform.getSystemInfoSync();
        if (this.bannerAd == null) {
            this.bannerAd = platform.createBannerAd({
                adUnitId: this.bannerId,
                adIntervals: 30,
                style: {
                    height: winSize.windowHeight - 80,
                    left: 0,
                    top: 500,
                    width: winSize.windowWidth
                }
            });
            this.bannerAd.onResize(function (res) {
                _this.bannerAd.style.top = winSize.windowHeight - _this.bannerAd.style.realHeight;
                _this.bannerAd.style.left = winSize.windowWidth / 2 - _this.bannerAd.style.realWidth / 2;
            });
            this.bannerAd.onError(function (err) {
                console.error('【流量主横幅】初始化有误');
            });
        }
    };
    // 横幅展示
    SdkManager.prototype.toggleBannerAd = function (isShow) {
        var platform = this.getPlatform();
        if (!platform) {
            console.log("\u3010\u6D41\u91CF\u4E3B\u6A2A\u5E45:" + isShow + "\u3011\u4EC5\u652F\u6301\u5C0F\u6E38\u620F\u5E73\u53F0!");
            return;
        }
        if (this.bannerAd) {
            isShow ? this.bannerAd.show() : this.bannerAd.hide();
        }
    };
    // 初始化插屏
    SdkManager.prototype.initInterstitialAd = function () {
        var platform = this.getPlatform();
        if (!platform) {
            console.log('【流量主插屏初始化】仅支持小游戏平台!');
            return;
        }
        if (this.interstitialId == '') {
            console.log('【流量主】请配置插屏广告ID');
            return;
        }
        if (this.interstitialAd == null) {
            this.interstitialAd = platform.createInterstitialAd({
                adUnitId: this.interstitialId
            });
            this.interstitialAd.onError(function (err) {
                console.error('【流量主插屏】初始化有误');
            });
        }
    };
    // 插屏展示
    SdkManager.prototype.showInterstitialAd = function () {
        var platform = this.getPlatform();
        if (!platform) {
            console.log('【流量主插屏】仅支持小游戏平台!');
            return;
        }
        if (this.interstitialAd) {
            this.interstitialAd.show().catch(function (err) {
                console.error('【流量主插屏】加载失败');
            });
        }
    };
    // 初始化激励
    SdkManager.prototype.initVideoAd = function () {
        var platform = this.getPlatform();
        if (!platform) {
            console.log('【流量主激励初始化】仅支持小游戏平台!');
            return;
        }
        if (this.videoId == '') {
            console.log('【流量主】请配置激励视频广告ID');
            return;
        }
        if (this.videoAd == null) {
            this.videoAd = platform.createRewardedVideoAd({
                adUnitId: this.videoId
            });
            this.videoAd.onError(function (err) {
                console.error('【流量主激励】初始化有误');
            });
        }
    };
    // 激励展示
    SdkManager.prototype.showVideoAd = function (success, fail) {
        var _this = this;
        var platform = this.getPlatform();
        if (!platform) {
            // console.log('激励模拟成功')
            return success && success('模拟成功，激励奖励已发放');
        }
        if (this.videoAd) {
            this.videoAd.offClose();
            this.videoAd.onClose(function (res) {
                _this.videoAd.offClose();
                if (res && res.isEnded || res === undefined) {
                    return success && success('激励奖励已发放');
                }
                else {
                    return fail && fail('视频播放中断');
                }
            });
            this.videoAd.show().catch(function () {
                _this.videoAd.load()
                    .then(function () { return _this.videoAd.show(); })
                    .catch(function (err) {
                    console.log('广告展示失败');
                });
            });
        }
        else {
            // console.log('激励模拟成功')
            return fail && fail('该功能尚未开放');
        }
    };
    SdkManager._instance = null;
    return SdkManager;
}());
exports.default = SdkManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXIvU2RrTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQUE7UUFVSyxPQUFPO1FBQ1IsWUFBTyxHQUFXLEVBQUUsQ0FBQTtRQUNaLFlBQU8sR0FBRyxJQUFJLENBQUE7UUFDdEIsS0FBSztRQUNMLG1CQUFjLEdBQVcsRUFBRSxDQUFBO1FBQ25CLG1CQUFjLEdBQUcsSUFBSSxDQUFBO1FBQzdCLEtBQUs7UUFDTCxhQUFRLEdBQVcsRUFBRSxDQUFBO1FBQ2IsYUFBUSxHQUFHLElBQUksQ0FBQTtJQWlLM0IsQ0FBQztJQWhMRyxzQkFBa0Isc0JBQVE7YUFBMUI7WUFDSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7YUFDckM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDekIsQ0FBQzs7O09BQUE7SUFZRCxPQUFPO0lBQ1AsZ0NBQVcsR0FBWDtRQUNJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQTtRQUNuQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQ3ZDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDMUI7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFO1lBQ2pELFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDMUI7UUFDRCxPQUFPLFFBQVEsQ0FBQTtJQUNuQixDQUFDO0lBRUQsS0FBSztJQUNMLDhCQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLElBQUksS0FBSyxJQUFJLEVBQUU7WUFBRSxPQUFNO1FBQ3ZCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FB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SSxFQUFFO3FCQUNkLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQztxQkFDL0IsS0FBSyxDQUFDLFVBQUMsR0FBUTtvQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUN6QixDQUFDLENBQUMsQ0FBQTtZQUNWLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILHdCQUF3QjtZQUN4QixPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDakM7SUFDTCxDQUFDO0lBakxhLG9CQUFTLEdBQWUsSUFBSSxDQUFBO0lBa0w5QyxpQkFBQztDQW5MRCxBQW1MQyxJQUFBO2tCQW5Mb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV1aWQgfSBmcm9tIFwiLi4vVXRpbHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi9BdWRpb01hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNka01hbmFnZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBfaW5zdGFuY2U6IFNka01hbmFnZXIgPSBudWxsXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKG51bGwgPT0gdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU2RrTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICAgLy8g5r+A5Yqx6KeG6aKRXHJcbiAgICB2aWRlb0lkOiBzdHJpbmcgPSAnJ1xyXG4gICAgcHJpdmF0ZSB2aWRlb0FkID0gbnVsbFxyXG4gICAgLy8g5o+S5bGPXHJcbiAgICBpbnRlcnN0aXRpYWxJZDogc3RyaW5nID0gJydcclxuICAgIHByaXZhdGUgaW50ZXJzdGl0aWFsQWQgPSBudWxsXHJcbiAgICAvLyDmqKrluYVcclxuICAgIGJhbm5lcklkOiBzdHJpbmcgPSAnJ1xyXG4gICAgcHJpdmF0ZSBiYW5uZXJBZCA9IG51bGxcclxuXHJcbiAgICAvLyDojrflj5blubPlj7BcclxuICAgIGdldFBsYXRmb3JtKCkge1xyXG4gICAgICAgIGxldCBwbGF0Zm9ybSA9IG51bGxcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICBwbGF0Zm9ybSA9IHdpbmRvd1snd3gnXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5CWVRFREFOQ0VfR0FNRSkge1xyXG4gICAgICAgICAgICBwbGF0Zm9ybSA9IHdpbmRvd1sndHQnXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGxhdGZvcm1cclxuICAgIH1cclxuXHJcbiAgICAvLyDot7PovaxcclxuICAgIHR1cm5Ub0FwcChhcHBJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGFwcElkID09ICcnKSByZXR1cm5cclxuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IHRoaXMuZ2V0UGxhdGZvcm0oKVxyXG4gICAgICAgIGlmICghcGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy50dXJuVG9Ccm93c2VyKGFwcElkKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgcGxhdGZvcm0ubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgICAgICAgYXBwSWQ6IGFwcElkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5rWP6KeI5Zmo6Lez6L2sXHJcbiAgICB0dXJuVG9Ccm93c2VyKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odXJsKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIneWni+WMluaoquW5hVxyXG4gICAgaW5pdEJhbm5lckFkKCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gdGhpcy5nZXRQbGF0Zm9ybSgpXHJcbiAgICAgICAgaWYgKCFwbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn44CQ5rWB6YeP5Li75qiq5bmF5Yid5aeL5YyW44CR5LuF5pSv5oyB5bCP5ri45oiP5bmz5Y+wIScpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5iYW5uZXJJZCA9PSAnJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn44CQ5rWB6YeP5Li744CR6K+36YWN572u5qiq5bmF5bm/5ZGKSUQnKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHdpblNpemUgPSBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgIGlmICh0aGlzLmJhbm5lckFkID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZCA9IHBsYXRmb3JtLmNyZWF0ZUJhbm5lckFkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLmJhbm5lcklkLFxyXG4gICAgICAgICAgICAgICAgYWRJbnRlcnZhbHM6IDMwLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpblNpemUud2luZG93SGVpZ2h0IC0gODAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwMCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2luU2l6ZS53aW5kb3dXaWR0aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5vblJlc2l6ZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyQWQuc3R5bGUudG9wID0gd2luU2l6ZS53aW5kb3dIZWlnaHQgLSB0aGlzLmJhbm5lckFkLnN0eWxlLnJlYWxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lckFkLnN0eWxlLmxlZnQgPSB3aW5TaXplLndpbmRvd1dpZHRoIC8gMiAtIHRoaXMuYmFubmVyQWQuc3R5bGUucmVhbFdpZHRoIC8gMjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQub25FcnJvcigoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+OAkOa1gemHj+S4u+aoquW5heOAkeWIneWni+WMluacieivrycpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmqKrluYXlsZXnpLpcclxuICAgIHRvZ2dsZUJhbm5lckFkKGlzU2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gdGhpcy5nZXRQbGF0Zm9ybSgpXHJcbiAgICAgICAgaWYgKCFwbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg44CQ5rWB6YeP5Li75qiq5bmFOiR7aXNTaG93feOAkeS7heaUr+aMgeWwj+a4uOaIj+W5s+WPsCFgKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYmFubmVyQWQpIHtcclxuICAgICAgICAgICAgaXNTaG93ID8gdGhpcy5iYW5uZXJBZC5zaG93KCkgOiB0aGlzLmJhbm5lckFkLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yid5aeL5YyW5o+S5bGPXHJcbiAgICBpbml0SW50ZXJzdGl0aWFsQWQoKSB7XHJcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSB0aGlzLmdldFBsYXRmb3JtKClcclxuICAgICAgICBpZiAoIXBsYXRmb3JtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfjgJDmtYHph4/kuLvmj5LlsY/liJ3lp4vljJbjgJHku4XmlK/mjIHlsI/muLjmiI/lubPlj7AhJylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmludGVyc3RpdGlhbElkID09ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfjgJDmtYHph4/kuLvjgJHor7fphY3nva7mj5LlsY/lub/lkYpJRCcpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnRlcnN0aXRpYWxBZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJzdGl0aWFsQWQgPSBwbGF0Zm9ybS5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogdGhpcy5pbnRlcnN0aXRpYWxJZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnN0aXRpYWxBZC5vbkVycm9yKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign44CQ5rWB6YeP5Li75o+S5bGP44CR5Yid5aeL5YyW5pyJ6K+vJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOaPkuWxj+WxleekulxyXG4gICAgc2hvd0ludGVyc3RpdGlhbEFkKCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gdGhpcy5nZXRQbGF0Zm9ybSgpXHJcbiAgICAgICAgaWYgKCFwbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn44CQ5rWB6YeP5Li75o+S5bGP44CR5LuF5pSv5oyB5bCP5ri45oiP5bmz5Y+wIScpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnRlcnN0aXRpYWxBZCkge1xyXG4gICAgICAgICAgICB0aGlzLmludGVyc3RpdGlhbEFkLnNob3coKS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+OAkOa1gemHj+S4u+aPkuWxj+OAkeWKoOi9veWksei0pScpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDliJ3lp4vljJbmv4DlirFcclxuICAgIGluaXRWaWRlb0FkKCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gdGhpcy5nZXRQbGF0Zm9ybSgpXHJcbiAgICAgICAgaWYgKCFwbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn44CQ5rWB6YeP5Li75r+A5Yqx5Yid5aeL5YyW44CR5LuF5pSv5oyB5bCP5ri45oiP5bmz5Y+wIScpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52aWRlb0lkID09ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfjgJDmtYHph4/kuLvjgJHor7fphY3nva7mv4DlirHop4bpopHlub/lkYpJRCcpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52aWRlb0FkID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkID0gcGxhdGZvcm0uY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLnZpZGVvSWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZC5vbkVycm9yKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign44CQ5rWB6YeP5Li75r+A5Yqx44CR5Yid5aeL5YyW5pyJ6K+vJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa/gOWKseWxleekulxyXG4gICAgc2hvd1ZpZGVvQWQoc3VjY2VzczogYW55LCBmYWlsPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSB0aGlzLmdldFBsYXRmb3JtKClcclxuICAgICAgICBpZiAoIXBsYXRmb3JtKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmv4DlirHmqKHmi5/miJDlip8nKVxyXG4gICAgICAgICAgICByZXR1cm4gc3VjY2VzcyAmJiBzdWNjZXNzKCfmqKHmi5/miJDlip/vvIzmv4DlirHlpZblirHlt7Llj5HmlL4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52aWRlb0FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZC5vZmZDbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQWQub25DbG9zZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9BZC5vZmZDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCB8fCByZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWNjZXNzICYmIHN1Y2Nlc3MoJ+a/gOWKseWlluWKseW3suWPkeaUvicpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWlsICYmIGZhaWwoJ+inhumikeaSreaUvuS4reaWrScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQWQuc2hvdygpLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9BZC5sb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnZpZGVvQWQuc2hvdygpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W5v+WRiuWxleekuuWksei0pScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+a/gOWKseaooeaLn+aIkOWKnycpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWlsICYmIGZhaWwoJ+ivpeWKn+iDveWwmuacquW8gOaUvicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=