module.exports = {
    translate: function(load) {
        return 'module.exports = ' + JSON.stringify(load.source)
    }
}