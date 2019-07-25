import { Modal } from "antd-mobile";
import Maps, { gotologin, refresh } from "./tool";
import * as Conf from "../config";
const alert = Modal.alert;


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, data) {
    let user = Maps.get("user");
    let Req = {
        Code: 0,
        Msg: user ? user.Sid : "",
        Data: data
    }
    console.log(">>url:", url);
    console.log(">>request:", Req);
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        if (xhr) {
            xhr.onreadystatechange = e => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let response = JSON.parse(xhr.responseText);
                        if (response.Code == 0) {
                            console.log(">>back:", response.Data);
                            resolve(response.Data)
                            // if(response.Code == 0){}
                        } else {
                            if (response.Code == Conf.ErrorSidQueNil) {
                                alert("操作失败", "登录状态已过期,是否重新登录?", [
                                    {
                                        text: "取消",
                                        onPress: () => console.log("不重新登录"),
                                        style: {
                                            fontWeight: "bold"
                                        }
                                    },
                                    {
                                        text: "确定",
                                        onPress: () => {
                                            gotologin();
                                        },
                                        style: {
                                            fontWeight: "bold"
                                        }
                                    }
                                ]);
                                resolve("");
                            } else {
                                console.log("___________",response)
                                alert("操作失败", response.Msg, [
                                    {
                                        text: "确定",
                                        onPress: () => console.log("确定"),
                                        style: {
                                            fontWeight: "bold"
                                        }
                                    }
                                ]);
                                resolve("");
                            }
                        }
                    } else {
                        alert("网络异常");
                        reject(xhr.responseText);
                        return;
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify(Req));
        }
    }).then(
        function(message) {
            return message;
        },
        function(error) {
            alert("操作失败", "请稍后尝试...", [
                {
                    text: "确定",
                    onPress: () => {
                        console.log("操作失败");
                        return;
                    },
                    style: {
                        fontWeight: "bold"
                    }
                }
            ]);
        }
    );
}

export async function reget(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        if (xhr) {
            xhr.onreadystatechange = e => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(xhr.responseText);
                    } else {
                        alert("网络异常");
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.open("GET", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(null);
        }
    }).then(
        function(message) {
            return message;
        },
        function(error) {
            alert("操作失败", "请稍后尝试...", [
                {
                    text: "确定",
                    onPress: () => {
                        return refresh();
                    },
                    style: {
                        fontWeight: "bold"
                    }
                }
            ]);
        }
    );
}

// 无返回弹出层
export async function requestNo(url, data) {
    let user = Maps.get("user");
    let Req = {
        Code: 0,
        Msg: user ? user.Sid : "",
        Data: data
    }
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        if (xhr) {
            xhr.onreadystatechange = e => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let response = JSON.parse(xhr.responseText);
                        if (response.Code == 0) {
                            resolve(response.Data);
                        } else {
                            if (response.Code == Conf.ErrorSidQueNil) {
                                resolve("error");
                            } else {
                                let data={
                                    error:"error",
                                    msg:response.Msg
                                }
                                resolve(data);
                            }
                        }
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify(Req));
        }
    }).then(
        function(message) {
            console.log("panduan   map  里面的数据是否改变",message);
            return message;
        },
        function(error) {}
    );
}

