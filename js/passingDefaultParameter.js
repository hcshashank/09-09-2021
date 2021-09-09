
function put(toy, toyBox = []){
    toyBox.push(toy);
    return toyBox;
}
let result = put('teddy')
console.log(result);
