

let serviceModule = {
    getService() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                //resolve('Happy weekend')
                reject('come office tomo');
            }, 3000);
        });
        return promise;
    }
};



let uiModule = {
    render() {
        console.log('initial rendering....');
        console.log('requesting service...');
        let promise = serviceModule.getService();
        console.log('got promise, defer action on consuming service result....');
        promise.then((result) => { console.log('happy..with ' + result); }, (error) => { console.log('oops') })
        console.log('cont..with UI progess...');

    }
}
uiModule.render();