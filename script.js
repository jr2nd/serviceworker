console.log("script run");


if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('/sw.js')
console.log("serviceworker===true");
}

console.log("done");