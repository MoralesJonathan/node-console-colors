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
const infoStyles = [`${Bright}${BlueBackground}${White} [Info] ▷ ${Reset}${Cyan}`, `${Blue}Info:${Reset}`, Cyan, `${Bright}[${Blue}Info${Reset}]:${Cyan}`];
const warnStyles = [`${Bright}${YellowBackground}${Black} [Warn] ▷ ${Reset}${Yellow}`, `${Yellow}Warn:${Reset}`, Yellow, `${Bright}[${Yellow}Warn${Reset}]:${Yellow}`];
const errorStyles =  [`${Bright}${RedBackground}${White} [Error] ▷ ${Reset}${Red}`, `${Red}Error:${Reset}`, Red, `${Bright}[${Red}Error${Reset}]:${Red}`];
 

module.exports = (selectedStyle = 'default') => {
    selectedStyle = selectedStyle.toLowerCase();
    const styleSwitch = (style) => ({
        'boxy': {
            info: infoStyles[0],
            warn: warnStyles[0],
            error: errorStyles[0]
        },
        'minimal': {
            info: infoStyles[1],
            warn: warnStyles[1],
            error: errorStyles[1]
        },
        'basic': {
            info: infoStyles[2],
            warn: warnStyles[2],
            error: errorStyles[2]
        },
        'default': {
            info: infoStyles[3],
            warn: warnStyles[3],
            error: errorStyles[3]
        }
      })[style]

    const logStyle = styleSwitch(selectedStyle);

    const {log, info, warn, error} = console;
    
    console.log = function() {
        if(selectedStyle === 'basic') {
            const argArray = Array.from(arguments);
            argArray.unshift('')
            log.apply(console, argArray)
        } else
            log.apply(console, arguments)
    };

    console.info = function() {
        const argArray = Array.from(arguments);
        argArray.unshift(logStyle.info)
        argArray.push(Reset);
        info.apply(console, argArray)
    };

    console.warn = function() {
        const argArray = Array.from(arguments);
        argArray.unshift(logStyle.warn)
        argArray.push(Reset);
        warn.apply(console, argArray)
    };

    console.error = function() {
        const argArray = Array.from(arguments);
        argArray.unshift(logStyle.error);
        argArray.push(Reset);
        error.apply(console, argArray);
    };

};