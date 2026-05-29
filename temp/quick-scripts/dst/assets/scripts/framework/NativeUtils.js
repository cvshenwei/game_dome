
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/framework/NativeUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2ZyYW1ld29yay9OYXRpdmVVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQjtBQUNoQjtJQUFBO0lBZ0ZBLENBQUM7SUE5RUcsUUFBUTtJQUNELG9CQUFRLEdBQWY7UUFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDO1lBQy9CLE9BQU87U0FDVjtRQUNELEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsNkNBQTZDLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFFRCxVQUFVO0lBQ0gsaUJBQUssR0FBWjtRQUNJLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNGLElBQUksR0FBRyxHQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsNkNBQTZDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVHLE1BQU07SUFDRiwwQkFBYyxHQUFyQixVQUFzQixNQUFNLEVBQUMsS0FBTTtRQUMvQixJQUFHLEtBQUssSUFBRSxJQUFJLEVBQUM7WUFDWCxLQUFLLEdBQUMsR0FBRyxDQUFDO1NBQ2I7UUFDRCxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDO1lBQzVCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsNkNBQTZDLEVBQUUsVUFBVSxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4SjtJQUNMLENBQUM7SUFHQSxRQUFRO0lBQ0YsOEJBQWtCLEdBQXpCO1FBQ0ksSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQztZQUMvQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0Ysd0JBQXdCO1FBQ3hCLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQywwQ0FBMEMsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBRXBJLENBQUM7SUFFRCxlQUFlO0lBQ1IsMEJBQWMsR0FBckI7UUFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDO1lBQy9CLE9BQU8sUUFBUSxDQUFDO1NBQ25CO1FBQ0Ysd0JBQXdCO1FBQ3hCLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQywwQ0FBMEMsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBRWhJLENBQUM7SUFFRCxVQUFVO0lBQ0gsMEJBQWMsR0FBckI7UUFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDO1lBQy9CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRix3QkFBd0I7UUFDeEIsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLDBDQUEwQyxFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFFaEksQ0FBQztJQUVHLGFBQWE7SUFDVix1QkFBVyxHQUFsQixVQUFtQixJQUFJO1FBQ25CLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUM7WUFDL0IsT0FBTztTQUNWO1FBQ0QsSUFBRyxJQUFJLElBQUUsSUFBSSxFQUFDO1lBQ1YsSUFBSSxHQUFDLENBQUMsQ0FBQztTQUNWO1FBQ0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQywwQ0FBMEMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRCxVQUFVO0lBQ0gsNkJBQWlCLEdBQXhCO1FBQ0ksSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQztZQUMvQixPQUFPO1NBQ1Y7UUFDRCxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLDBDQUEwQyxFQUFFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFTCxrQkFBQztBQUFELENBaEZBLEFBZ0ZDLElBQUE7O0FBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFdBQVcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v6LCD55SoYW5kcm9pZOS7o+eggeWFrOWFseexu1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXRpdmVVdGlsc3tcclxuXHJcbiAgICAvL+iwg+eUqOivhOS7t+aOpeWPo1xyXG4gICAgc3RhdGljIGdvdG9SYXRlKCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtIT1jYy5zeXMuQU5EUk9JRCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L3V0aWwvTmV0d29ya01hbmFnZXJcIiwgXCJnb3RvUGxheVN0b3JlXCIsIFwiKClWXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yik5pat572R57uc5piv5ZCm5Y+v55SoXHJcbiAgICBzdGF0aWMgaXNOZXQoKXtcclxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0hPWNjLnN5cy5BTkRST0lEKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgdmFyIHJlcz1qc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvdXRpbC9OZXR3b3JrTWFuYWdlclwiLCBcImlzTmV0XCIsIFwiKClaXCIpO1xyXG4gICAgICAgY29uc29sZS5sb2coXCLliKTmlq3nvZHnu5zmmK/lkKblj6/nlKg6XCIscmVzKTtcclxuICAgICAgIHJldHVybiByZXM7XHJcbiAgIH1cclxuXHJcbiAgICAgICAvL+S6i+S7tuaJk+eCuVxyXG4gICAgc3RhdGljIGRvdEFkanVzdEV2ZW50KGNvZGVJZCxwYXJhbT8peyAgICAgXHJcbiAgICAgICAgaWYocGFyYW09PW51bGwpe1xyXG4gICAgICAgICAgICBwYXJhbT1cInlcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2Muc3lzLm9zPT1jYy5zeXMuT1NfQU5EUk9JRCl7ICAgICAgICAgXHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9ldmVudC9BZGp1c3RNYW5hZ2VyXCIsIFwicHV0RXZlbnRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgY29kZUlkLCBwYXJhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgIC8v6I635Y+W5b2T5YmN6K+t6KiAXHJcbiAgICBzdGF0aWMgZ2V0Q3VycmVudExhbmd1YWdlKCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtIT1jYy5zeXMuQU5EUk9JRCl7XHJcbiAgICAgICAgICAgIHJldHVybiAnZW4nO1xyXG4gICAgICAgIH1cclxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6I635Y+W5b2T5YmN6K+t6KiAXCIpXHJcbiAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L3V0aWwvVXRpbE1hbmFnZXJcIiwgXCJnZXRDdXJyZW50TGFuZ3VhZ2VcIiwgXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+WdmVyc2lvbm5hbWVcclxuICAgIHN0YXRpYyBnZXRWZXJzaW9uTmFtZSgpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSE9Y2Muc3lzLkFORFJPSUQpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ1YxLjEuOCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgLy8gY29uc29sZS5sb2coXCLojrflj5blvZPliY3or63oqIBcIilcclxuICAgICAgIHJldHVybiBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvdXRpbC9VdGlsTWFuYWdlclwiLCBcImdldFZlcnNpb25OYW1lXCIsIFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluWbveWutmNvZGVcclxuICAgIHN0YXRpYyBnZXRDb3VudHJ5Q29kZSgpOnN0cmluZ3tcclxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0hPWNjLnN5cy5BTkRST0lEKXtcclxuICAgICAgICAgICAgcmV0dXJuICdVUyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgLy8gY29uc29sZS5sb2coXCLojrflj5blvZPliY3or63oqIBcIilcclxuICAgICAgIHJldHVybiBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvdXRpbC9VdGlsTWFuYWdlclwiLCBcImdldENvdW50cnlDb2RlXCIsIFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAgICAgLy/osIPnlKjmjK/liqjmjqXlj6Mg5Y2V5L2N5q+r56eSXHJcbiAgICBzdGF0aWMgcGxheVZpYnJhdGUodGltZSl7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtIT1jYy5zeXMuQU5EUk9JRCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGltZT09bnVsbCl7XHJcbiAgICAgICAgICAgIHRpbWU9MTtcclxuICAgICAgICB9XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L3V0aWwvVXRpbE1hbmFnZXJcIiwgXCJwbGF5VmlicmF0ZVwiLCBcIihJKVZcIix0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iuvue9ruasp+ebn+W8ueeql+WNj+iurlxyXG4gICAgc3RhdGljIHNldEhhc1VzZXJDb25zZW50KCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtIT1jYy5zeXMuQU5EUk9JRCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L3V0aWwvVXRpbE1hbmFnZXJcIiwgXCJzZXRIYXNVc2VyQ29uc2VudFwiLCBcIigpVlwiKTtcclxuICAgIH1cclxuXHJcbn0gICAgXHJcbndpbmRvd1tcIk5hdGl2ZVV0aWxzXCJdID0gTmF0aXZlVXRpbHM7Il19