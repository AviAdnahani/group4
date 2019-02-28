var Storage = function (sorge_type) {
    var storage = { "localStorage": {}, "sessionStorage": {} }
    function setItem (key, value){
        storage[sorge_type][key] = value
    }
    function getItem (key){
        return storage[sorge_type][key]
    }
    function removeItem (key){
        delete storage[sorge_type][key]
    }
    function clear (){
        storage[sorge_type] = {}
    }
    return {setItem: setItem,
            getItem: getItem,
            removeItem: removeItem,
            clear: clear
    };
}

var localStorage1 = new Storage('localStorage');
localStorage1.setItem('lk1','lv1');
localStorage1.setItem('lk2','lv2');
console.log(localStorage1.getItem('lk1'))
console.log(localStorage1.getItem('lk2'))


var sessionStorage1 = new Storage('localStorage');
sessionStorage1.setItem('sk1','sv1');
sessionStorage1.setItem('sk2','sv2');
console.log(sessionStorage1.getItem('sk1'))
console.log(sessionStorage1.getItem('sk2'))
