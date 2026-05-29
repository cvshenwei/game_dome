
(function () {
var scripts = [{"deps":{"./assets/scripts/config/LevelsConfig":1,"./assets/scripts/game/Goods":2,"./assets/scripts/i18n/i18nLabel":3,"./assets/scripts/manager/DataManager":4,"./assets/scripts/plugins/UIScrollControl":5,"./assets/scripts/rank/RankItem":6,"./assets/scripts/Constants":7,"./assets/scripts/framework/utils/CommonTool":8,"./assets/scripts/StaticInstance":9,"./assets/scripts/datacenter/LevelData":10,"./assets/scripts/framework/NativeUtils":11,"./assets/scripts/framework/SystemData":12,"./assets/scripts/ui/Tip":13,"./assets/scripts/Utils":14,"./assets/scripts/game/Container":15,"./assets/scripts/datacenter/ItemData":16,"./assets/scripts/game/Levels":17,"./assets/scripts/framework/SpriteFrameCache":18,"./assets/scripts/Index":19,"./assets/scripts/framework/EffectFlyManager":20,"./assets/scripts/datacenter/GameData":21,"./assets/scripts/layer/LoadingLayer":22,"./assets/scripts/layer/RankListDialog":23,"./assets/scripts/layer/SettingDialog":24,"./assets/scripts/layer/StartDialog":25,"./assets/scripts/layer/ItemUnlockDialog":26,"./assets/scripts/layer/HeaderDialog":27,"./assets/scripts/layer/AddHeartDialog":28,"./assets/scripts/layer/ItemDialog":29,"./assets/scripts/manager/EffectManager":30,"./assets/scripts/layer/LoseDialog":31,"./assets/scripts/datacenter/SettingData":32,"./assets/scripts/layer/MenuLayer":33,"./assets/scripts/manager/FadeManager":34,"./assets/scripts/layer/MainLayer":35,"./assets/scripts/manager/ResourceManager":36,"./assets/scripts/layer/WinDialog":37,"./assets/scripts/manager/GameManager":38,"./assets/scripts/manager/EventManager":39,"./assets/scripts/manager/ToastManager":40,"./assets/scripts/manager/PoolManager":41,"./assets/scripts/manager/UIManager":42,"./assets/scripts/rank/RankLisClasst":43,"./assets/scripts/manager/SdkManager":44,"./assets/scripts/manager/AudioManager":45,"./assets/scripts/rank/Rank":46,"./assets/scripts/Enum":47,"./assets/scripts/framework/utils/DateUtil":48,"./assets/scripts/datacenter/RankInfo":49,"./assets/scripts/layer/BaseDialog":50,"./assets/scripts/i18n/i18nManage":51,"./assets/scripts/layer/IceLayer":52},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/config/LevelsConfig.js"},{"deps":{"../Enum":47,"../Utils":14,"../manager/AudioManager":45,"../manager/DataManager":4,"../manager/EffectManager":30,"../manager/ResourceManager":36,"./Container":15,"../Constants":7},"path":"preview-scripts/assets/scripts/game/Goods.js"},{"deps":{"./i18nManage":51},"path":"preview-scripts/assets/scripts/i18n/i18nLabel.js"},{"deps":{"../datacenter/GameData":21,"../datacenter/ItemData":16,"../datacenter/LevelData":10,"../datacenter/RankInfo":49,"../datacenter/SettingData":32,"../Enum":47,"../framework/utils/CommonTool":8},"path":"preview-scripts/assets/scripts/manager/DataManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/plugins/UIScrollControl.js"},{"deps":{"../i18n/i18nManage":51},"path":"preview-scripts/assets/scripts/rank/RankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Constants.js"},{"deps":{"../SpriteFrameCache":18},"path":"preview-scripts/assets/scripts/framework/utils/CommonTool.js"},{"deps":{},"path":"preview-scripts/assets/scripts/StaticInstance.js"},{"deps":{"../framework/SystemData":12},"path":"preview-scripts/assets/scripts/datacenter/LevelData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/framework/NativeUtils.js"},{"deps":{"../manager/EventManager":39},"path":"preview-scripts/assets/scripts/framework/SystemData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/Tip.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Utils.js"},{"deps":{"../Enum":47,"../StaticInstance":9,"../manager/AudioManager":45,"../manager/DataManager":4,"../manager/PoolManager":41,"../manager/SdkManager":44,"../manager/ToastManager":40,"./Goods":2,"../ui/Tip":13,"../Utils":14},"path":"preview-scripts/assets/scripts/game/Container.js"},{"deps":{"../framework/SystemData":12},"path":"preview-scripts/assets/scripts/datacenter/ItemData.js"},{"deps":{"../Enum":47,"../manager/DataManager":4,"../manager/PoolManager":41,"./Container":15,"../config/LevelsConfig":1,"../Constants":7,"../framework/utils/CommonTool":8},"path":"preview-scripts/assets/scripts/game/Levels.js"},{"deps":{},"path":"preview-scripts/assets/scripts/framework/SpriteFrameCache.js"},{"deps":{"./StaticInstance":9,"./Enum":47,"./manager/AudioManager":45,"./manager/DataManager":4,"./manager/ResourceManager":36,"./manager/SdkManager":44},"path":"preview-scripts/assets/scripts/Index.js"},{"deps":{"./utils/CommonTool":8},"path":"preview-scripts/assets/scripts/framework/EffectFlyManager.js"},{"deps":{"../framework/SystemData":12},"path":"preview-scripts/assets/scripts/datacenter/GameData.js"},{"deps":{"../manager/DataManager":4,"./BaseDialog":50},"path":"preview-scripts/assets/scripts/layer/LoadingLayer.js"},{"deps":{"../Enum":47,"../StaticInstance":9,"../manager/AudioManager":45,"./BaseDialog":50,"../manager/SdkManager":44,"../datacenter/RankInfo":49,"../Constants":7,"../manager/PoolManager":41,"../rank/RankItem":6},"path":"preview-scripts/assets/scripts/layer/RankListDialog.js"},{"deps":{"../Enum":47,"../StaticInstance":9,"../manager/AudioManager":45,"./BaseDialog":50,"../manager/DataManager":4,"../Constants":7,"../i18n/i18nManage":51},"path":"preview-scripts/assets/scripts/layer/SettingDialog.js"},{"deps":{"../Enum":47,"../StaticInstance":9,"../manager/AudioManager":45,"../manager/SdkManager":44,"./HeaderDialog":27,"../manager/DataManager":4,"../i18n/i18nManage":51},"path":"preview-scripts/assets/scripts/layer/StartDialog.js"},{"deps":{"../Enum":47,"../StaticInstance":9,"../manager/AudioManager":45,"../manager/SdkManager":44,"./BaseDialog":50,"../datacenter/ItemData":16},"path":"preview-scripts/assets/scripts/layer/ItemUnlockDialog.js"},{"deps":{"../Enum":47,"../Utils":14,"../manager/AudioManager":45,"../manager/DataManager":4,"../manager/SdkManager":44,"./BaseDialog":50,"../StaticInstance":9},"path":"preview-scripts/assets/scripts/layer/HeaderDialog.js"},{"deps":{"../Enum":47,"../StaticInstance":9,"../manager/AudioManager":45,"../manager/SdkManager":44,"../manager/DataManager":4,"./HeaderDialog":27},"path":"preview-scripts/assets/scripts/layer/AddHeartDialog.js"},{"deps":{"../Enum":47,"../StaticInstance":9,"../manager/AudioManager":45,"../manager/SdkManager":44,"../manager/DataManager":4,"./BaseDialog":50,"../datacenter/ItemData":16},"path":"preview-scripts/assets/scripts/layer/ItemDialog.js"},{"deps":{"./PoolManager":41},"path":"preview-scripts/assets/scripts/manager/EffectManager.js"},{"deps":{"../Enum":47,"../StaticInstance":9,"../manager/AudioManager":45,"../manager/SdkManager":44,"./HeaderDialog":27,"../manager/DataManager":4,"../i18n/i18nManage":51},"path":"preview-scripts/assets/scripts/layer/LoseDialog.js"},{"deps":{"../framework/SystemData":12},"path":"preview-scripts/assets/scripts/datacenter/SettingData.js"},{"deps":{"../Enum":47,"./../StaticInstance":9,"../manager/AudioManager":45,"../manager/DataManager":4,"./HeaderDialog":27,"../i18n/i18nManage":51,"../Constants":7,"../manager/PoolManager":41,"./AddHeartDialog":28,"../framework/EffectFlyManager":20},"path":"preview-scripts/assets/scripts/layer/MenuLayer.js"},{"deps":{"../StaticInstance":9},"path":"preview-scripts/assets/scripts/manager/FadeManager.js"},{"deps":{"../Constants":7,"../datacenter/ItemData":16,"../Enum":47,"../framework/utils/CommonTool":8,"../i18n/i18nManage":51,"../manager/AudioManager":45,"../manager/DataManager":4,"../manager/PoolManager":41,"../StaticInstance":9,"../Utils":14,"./BaseDialog":50},"path":"preview-scripts/assets/scripts/layer/MainLayer.js"},{"deps":{"../datacenter/SettingData":32,"../framework/NativeUtils":11,"../i18n/i18nManage":51,"./DataManager":4,"./PoolManager":41},"path":"preview-scripts/assets/scripts/manager/ResourceManager.js"},{"deps":{"../Enum":47,"../StaticInstance":9,"../manager/AudioManager":45,"../manager/SdkManager":44,"./HeaderDialog":27,"../manager/DataManager":4},"path":"preview-scripts/assets/scripts/layer/WinDialog.js"},{"deps":{"../Enum":47,"../StaticInstance":9,"../Utils":14,"../game/Goods":2,"../game/Container":15,"./AudioManager":45,"./DataManager":4,"./PoolManager":41,"../config/LevelsConfig":1,"../game/Levels":17,"../ui/Tip":13,"../framework/utils/CommonTool":8,"./EffectManager":30},"path":"preview-scripts/assets/scripts/manager/GameManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/manager/EventManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/manager/ToastManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/manager/PoolManager.js"},{"deps":{"./../Enum":47,"./../StaticInstance":9,"./PoolManager":41},"path":"preview-scripts/assets/scripts/manager/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rank/RankLisClasst.js"},{"deps":{},"path":"preview-scripts/assets/scripts/manager/SdkManager.js"},{"deps":{"./../Enum":47,"./DataManager":4,"./ResourceManager":36},"path":"preview-scripts/assets/scripts/manager/AudioManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rank/Rank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Enum.js"},{"deps":{},"path":"preview-scripts/assets/scripts/framework/utils/DateUtil.js"},{"deps":{"../Constants":7,"../framework/SystemData":12,"../framework/utils/CommonTool":8,"../framework/utils/DateUtil":48,"../manager/DataManager":4,"../rank/Rank":46,"../rank/RankLisClasst":43},"path":"preview-scripts/assets/scripts/datacenter/RankInfo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/layer/BaseDialog.js"},{"deps":{"../Constants":7},"path":"preview-scripts/assets/scripts/i18n/i18nManage.js"},{"deps":{"./BaseDialog":50},"path":"preview-scripts/assets/scripts/layer/IceLayer.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    