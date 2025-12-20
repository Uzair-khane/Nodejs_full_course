const os = require("os");
// Returns the OS platform. 
console.log(os.platform())
// Returns CPU architecture. 
console.log(os.arch())
// Returns information about each CPU core.
console.log(os.cpus())
// Returns total system memory (bytes). and convert to Mb
console.log((os.totalmem()/1024/1024).toFixed(2),"MB")
// Returns the system hostname.
console.log(os.hostname())
// Returns the system hostname.
let second = os.uptime()
console.log((second/60).toFixed(2))
// Returns info about the current user. 
console.log(os.userInfo())
// Returns home directory of current user. 
console.log(os.homedir())
// Returns the temp directory. 
console.log(os.tmpdir())