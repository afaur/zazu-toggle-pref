const applescript = require('applescript')

module.exports = (pluginContext) => {
  return (app, env = {}) => {
    return new Promise((resolve, reject) => {
      const script = `
        tell application "System Preferences"
          activate
        end tell

        tell application "System Events"
          tell process "System Preferences"
            delay 0.3
            click menu item "Trackpad" of menu "View" of menu bar 1
            tell window "Trackpad"
              delay 0.9
              click checkbox 3 of tab group 1
            end tell
          end tell
        end tell

        tell application "System Preferences" to quit
      `
      applescript.execString(script, (err, rtn) => {
        if (err) {reject(err)} else {resolve(app)}
      })
    })
  }
}
