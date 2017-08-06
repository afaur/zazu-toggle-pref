module.exports = (context) => {
  return {
    respondsTo: (query) => { return true },
    search: (query, env = {}) => {
      return new Promise((resolve, reject) => {
        resolve([
          {
            icon: 'icon.png',
            title: 'Toggle Tap To Click',
            subtitle: 'test',
            value: 'test',
          }
        ])
      })
    },
  }
}
