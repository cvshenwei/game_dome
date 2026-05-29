"use strict";
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