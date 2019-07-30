import Maps from './tool';

export default function authed(route, replace) {
    let muser = Maps.get('user');
    if (!muser) {
        replace('/login');
    }
}