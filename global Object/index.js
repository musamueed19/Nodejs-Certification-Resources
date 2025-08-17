// 'window' object is available in Browser JS Runtime Environment
// console.log(window);

// while similar to window, Node.js provide 'global' object.
console.log(global);

// While global & window object provides a lot of functionalities and features, like events or timeout function
setTimeout(() => {
    console.log('Hello, World!')
}, 1000);
