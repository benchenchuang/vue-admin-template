export const webStorage={
    setStorage(key, value) {
        localStorage.setItem(key, value);
    },
    getStorage(key) {
        return localStorage.getItem(key);
    },
    clearStorage(key) {
        localStorage.removeItem(key);
    },
    clearAll(){
        localStorage.clear();
    }
}