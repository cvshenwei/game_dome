"use strict";
cc._RF.push(module, '42987StsxNOXL05FGu6Yw2+', 'NativeUtils');
// scripts/framework/NativeUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//调用android代码公共类
var NativeUtils = /** @class */ (function () {
    function NativeUtils() {
    }
    //调用评价接口
    NativeUtils.gotoRate = function () {
        if (cc.sys.platform != cc.sys.ANDROID) {
            return;
        }
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/util/NetworkManager", "gotoPlayStore", "()V");
    };
    //判断网络是否可用
    NativeUtils.isNet = function () {
        if (cc.sys.platform != cc.sys.ANDROID) {
            return true;
        }
        var res = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/util/NetworkManager", "isNet", "()Z");
        console.log("判断网络是否可用:", res);
        return res;
    };
    //事件打点
    NativeUtils.dotAdjustEvent = function (codeId, param) {
        if (param == null) {
            param = "y";
        }
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/event/AdjustManager", "putEvent", "(Ljava/lang/String;Ljava/lang/String;)V", codeId, param);
        }
    };
    //获取当前语言
    NativeUtils.getCurrentLanguage = function () {
        if (cc.sys.platform != cc.sys.ANDROID) {
            return 'en';
        }
        // console.log("获取当前语言")
        return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/util/UtilManager", "getCurrentLanguage", "()Ljava/lang/String;");
    };
    //获取versionname
    NativeUtils.getVersionName = function () {
        if (cc.sys.platform != cc.sys.ANDROID) {
            return 'V1.1.8';
        }
        // console.log("获取当前语言")
        return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/util/UtilManager", "getVersionName", "()Ljava/lang/String;");
    };
    //获取国家code
    NativeUtils.getCountryCode = function () {
        if (cc.sys.platform != cc.sys.ANDROID) {
            return 'US';
        }
        // console.log("获取当前语言")
        return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/util/UtilManager", "getCountryCode", "()Ljava/lang/String;");
    };
    //调用振动接口 单位毫秒
    NativeUtils.playVibrate = function (time) {
        if (cc.sys.platform != cc.sys.ANDROID) {
            return;
        }
        if (time == null) {
            time = 1;
        }
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/util/UtilManager", "playVibrate", "(I)V", time);
    };
    //设置欧盟弹窗协议
    NativeUtils.setHasUserConsent = function () {
        if (cc.sys.platform != cc.sys.ANDROID) {
            return;
        }
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/util/UtilManager", "setHasUserConsent", "()V");
    };
    return NativeUtils;
}());
exports.default = NativeUtils;
window["NativeUtils"] = NativeUtils;

cc._RF.pop();