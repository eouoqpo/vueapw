import { Toast } from 'antd-mobile';
import * as Urls from '../config';
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

export async function gotologin() {
    Maps.delete('user');
    return window.location.href = '/user/login';
}
export async function gotohome() {
    return window.location.href = '/';
}
export async function refresh() {
    return window.location.reload(true);
}

/******************************对象数组根据某个键值排序功能*******************************************/
// employees.sort(by('age',by('name')));
export function by(name, minor) {
    return function(o, p) {
        var a,
            b;
        if (o && p && typeof o === 'object' && typeof p === 'object') {
            a = o[name];
            b = p[name];
            if (a === b) {
                return typeof minor === 'function' ? minor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            thro("error");
        }
    }
}


/******************************图片上传压缩处理*******************************************/
let filechooser = document.getElementById("choose");

/*用于压缩图片的canvas*/
let canvas = document.createElement("canvas");
let ctx = canvas.getContext('2d');

/*瓦片canvas*/
let tCanvas = document.createElement("canvas");
let tctx = tCanvas.getContext("2d");

let maxsize = 20 * 1024;

export function uploadfile(files, setval) {
    // e.preventDefault();
    // let target = e.target;
    // let files = target.files;
    // if (files.length > 9) {
    //     Toast.fail("最多同时只可上传9张图片", 1);
    //     return;
    // }
    for (let i = 0; i < files.length; i++) {
        forearch(files[i], i, setval)
    }
}
;

function forearch(file, i, setval) {
    if (!/\/(?:jpeg|png|gif)/i.test(file[0].type)) return Toast.fail("图片格式不对", 1);
    let reader = new FileReader();
    /*获取图片大小*/
    let size = file[0].size / 1024 > 1024 ? (~~(10 * file[0].size / 1024 / 1024)) / 10 + "MB" : ~~(file[0].size / 1024) + "KB";
    console.log("上传图片大小:", size);
    reader.readAsDataURL(file[0]);
    reader.onload = function() {
        let result = this.result;
        let img = new Image();
        img.src = result;

        /*如果图片大小小于100kb，则直接上传*/
        if (result.length <= maxsize) {
            img = null;
            setval(result)
            // upload(result, file.type, setval);
            return;
        }

        /*图片加载完毕之后进行压缩，然后上传*/
        if (img.complete) {
            callback();
        } else {
            img.onload = callback;
        }
        function callback() {
            let data = compress(img);
            // upload(data, file.type, setval);
            img = null;
            setval(data)
        }
    };
}
/*  使用canvas对大图片进行压缩*/
function compress(img) {
    let initSize = img.src.length;
    let width = img.width;
    let height = img.height;

    /*如果图片大于四百万像素，计算压缩比并将大小压至400万以下*/
    let ratio;
    if ((ratio = width * height / 1500000) > 1) {
        ratio = Math.sqrt(ratio);
        width /= ratio;
        height /= ratio;
        console.log(width, "x", height, "=", ratio);
    } else {
        ratio = 1;
    }

    canvas.width = width;
    canvas.height = height;

    /*铺底色*/
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    /*如果图片像素大于100万则使用瓦片绘制*/
    let count;
    if ((count = width * height / 1000000) > 1) {
        /*计算要分成多少块瓦片*/
        count = ~~(Math.sqrt(count) + 1);
        /*计算每块瓦片的宽和高*/
        let nw = ~~(width / count);
        let nh = ~~(height / count);

        tCanvas.width = nw;
        tCanvas.height = nh;

        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);

                ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
            }
        }
    } else {
        ctx.drawImage(img, 0, 0, width, height);
    }

    /*进行最小压缩*/
    let ndata = canvas.toDataURL('image/jpeg', 0.4);

    console.log('压缩前：' + initSize);
    console.log('压缩后：' + ndata.length);
    console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");

    tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;

    return ndata;
}