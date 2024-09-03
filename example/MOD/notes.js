// console.log("jestem w module notes");

// console.log('exports', exports);
// console.log(exports === module.exports);

// console.log('dirname', __dirname);
// console.log('----'); 
// console.log('filename', __filename); 
// console.log('----'); 
// console.log('require', require);
console.log('----');
console.log('module', module);
console.log('----');

setTimeout(() => {
    console.log('module', module.loaded);
}, 2000);

// module.exports = {
//     txt: "cos - module notes"
// }
