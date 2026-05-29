
import { settingData } from '../datacenter/SettingData';
import NativeUtils from '../framework/NativeUtils';
import { i18nManage } from '../i18n/i18nManage';
import DataManager from './DataManager';
import PoolManager from './PoolManager';

export default class ResourceManager {

    public clipMap = {}

    public spriteMap = {}

    public jsonMap = {}

    private static _instance: any = null

    static getInstance<T>(): T {
        if (this._instance === null) {
            this._instance = new this()
        }

        return this._instance
    }

    static get instance() {
        return this.getInstance<ResourceManager>()
    }

    public async loadRes(resource: any, ratio: number = 0) {
        return new Promise<void>((resolve, reject) => {
            const rate = DataManager.instance.loadingRate
            cc.resources.loadDir(resource.path, resource.content, (finished: number, total: number) => {
                // 资源加载进度
                if (resource.ratio > 0) {
                    // 保留两位小数
                    const loadingRate = Math.floor((rate + resource.ratio * finished / total) * 100) / 100
                    DataManager.instance.loadingRate = Math.max(loadingRate, DataManager.instance.loadingRate)
                }
            }, (err, assets: any) => {
                if (err) reject && reject()
                let asset: any
                if (resource.type == 'audio') {
                    console.log("audio assets",assets);
                    for (let i = 0; i < assets.length; i++) {
                        asset = assets[i];
                        if (!this.clipMap[asset.name]) this.clipMap[asset.name] = asset
                    }
                }
                if (resource.type == 'prefab') {
                    console.log("prefab assets",assets);
                    for (let i = 0; i < assets.length; i++) {
                        asset = assets[i];
                        PoolManager.instance.setPrefab(asset.data.name, asset)
                    }
                    
                }
                if (resource.type == 'sprite') {
                    for (let i = 0; i < assets.length; i++) {
                        asset = assets[i];
                        if (!this.spriteMap[asset.name]) this.spriteMap[asset.name] = asset
                    }
                }

                if (resource.type == 'i18n') {
                    if(!settingData.lockLanguage){
                        i18nManage.setLanguage(NativeUtils.getCurrentLanguage());
                        settingData.currLanguage=NativeUtils.getCurrentLanguage();
                    }else{
                        i18nManage.setLanguage(settingData.currLanguage);
                    }
                }

               

                /*
                if (resource.type == 'json') {
                    for (let i = 0; i < assets.length; i++) {
                        asset = assets[i];
                        if (!this.jsonMap[asset.name]) this.jsonMap[asset.name] = asset.json
                    }
                }*/
                resolve && resolve()
            })
        })
    }

    public getClip(name: string) {
        return this.clipMap[name]
    }

    public getSprite(name: string) {
        return this.spriteMap[name]
    }

    public getJson(name: string) {
        return this.jsonMap[name];
    }
}
