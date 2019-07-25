import { Modal} from 'antd-mobile';
import { routerRedux } from 'dva/router';

const alert = Modal.alert;
// import { poAlert,poTest,poSure } from '../utils/potting';


/**
 * 弹出层的封装
 * 
 * @param {any} key
 * @alert
 */
const Popup = {};
//    Popup  验证类的弹出层   判断非空类的     只有确定没有取消
export function poAlert(key, value){
    key ? alert("温馨提示",value) : "";
}

//     test  验证手机号和身份证的之类的
export function poTest(key, value){
    (!/^(((13[0-9]{1})|(15[0-9]{1})|17[0-9]{1}|(18[0-9]{1}))+\d{8})$/.test(key)) ? alert("温馨提示",value) : "";
}

export function poRout(value,value1,value2,id){
    alert("温馨提示", value, [
        {
            text: value1,
            onPress: () => {
                this.props.dispatch({
                    type: "user/save",
                    payload: {
                        status: "done",
                        isSuccess: value != "error" ? true : false,
                        user: value
                    }
                });
                this.props.dispatch(
                    routerRedux.push({
                        pathname: "/user"
                    })
                );
            },
            style: {
                fontWeight: "bold"
            }
        },
        {
            text: value2,
            onPress: () => {
                this.props.dispatch(routerRedux.push({
                    pathname: "/user/login"
                }));
            },
            style: {
                fontWeight: "bold"
            }
        }
    ]);
}

export function poBack(value){
    alert("温馨提示", value, [{
        text: "确定",
        onPress: () => {
            window.history.go(-1);
        },
        style: {
            fontWeight: "bold"
        }
    }]);
}

export function poChange(value){
    return new Promise((resolve, reject) => {
        let reback = false;
        alert("温馨提示", value, [
            {
                text: "取消",
                onPress: () => {
                    reject("");
                },
                style: {
                    fontWeight: "bold"
                }
            },
            {
                text: "确定",
                onPress: () => {
                    resolve("success")
                    reback = true;
                    console.log("poChange back alert",reback)
                },
                style: {
                    fontWeight: "bold"
                }
            }
        ]);
    })
}

//    Popup  确定取消类的弹出层      有确定，有取消
Popup.get = function(key, value) {
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