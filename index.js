const Bright = '\x1b[1m';
const Black = '\x1b[30m';
const Red = '\x1b[31m';
const Reset = '\x1b[0m';
const Yellow = '\x1b[33m';
const Blue = '\x1b[34m';
const Cyan = '\x1b[36m';
const White = '\x1b[37m';
const BlackBackground = '\x1b[40m';
const RedBackground = '\x1b[41m';
const YellowBackground = '\x1b[43m';
const BlueBackground = '\x1b[44m';
const CyanBackground = '\x1b[46m';
const WhiteBackground = '\x1b[47m';
 

module.exports = (() => {
    const {log, info, warn, error} = console;
    
    console.log = function() {
        log.apply(console, arguments)
    };

    console.info = function() {
        const argArray = Array.prototype.slice.call(arguments);
        argArray.unshift(`${Bright}${BlueBackground}${White} [Info] ▷ ${Reset}${Cyan}`)
        argArray.push(Reset);
        info.apply(console, argArray)
    };

    console.warn = function() {
        const argArray = Array.prototype.slice.call(arguments);
        argArray.unshift(`${Bright}${YellowBackground}${White} [Warn] ▷ ${Reset}${Yellow}`)
        argArray.push(Reset);
        warn.apply(console, argArray)
    };

    console.error = function() {
        const argArray = Array.prototype.slice.call(arguments);
        argArray.unshift(`${Bright}${RedBackground}${White} [Error] ▷ ${Reset}${Red}`);
        argArray.push(Reset);
        error.apply(console, argArray);
    };

})();