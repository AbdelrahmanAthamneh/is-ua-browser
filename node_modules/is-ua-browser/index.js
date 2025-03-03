var UAParser = require("ua-parser-js");
/**
 * Checks if the provided User-Agent string is from a browser.
 * @param {string} userAgent - The User-Agent string to analyze.
 * @returns {boolean} - Returns true if the User-Agent is a browser, false otherwise.
 */
function isBrowser(userAgent) {
    if (!userAgent) {
        throw new Error("User-Agent string is required");
    }
    var parser = new UAParser(userAgent);
    var result = parser.getResult();
    return !!result.browser.name;
}
module.exports = isBrowser;
