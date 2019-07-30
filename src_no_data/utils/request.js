import axios from 'axios';
import { Dialog } from 'muse-ui';

axios.defaults.timeout =  5000;


export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}