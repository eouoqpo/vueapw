/**
 * 删除本地数据
 * 
 * @param {any} key
 * @returns
 */
const Maps = {};

//    获取 localStorage 中的数据  设置
Maps.get = function(key, value) {
    if (arguments.length == 1) {
        let val = localStorage.getItem(key);
        if (val != "undefined") {
            return JSON.parse(val);
        } else {
            return null;
        }
    } else {
        return localStorage.setItem(key, JSON.stringify(value));
    }
}

//   删除  localstorage 里面的数据
Maps.delete = function(key) {
    if (key) {
        return localStorage.removeItem(key);
    }
    return localStorage.removeItem();
}

export default Maps;