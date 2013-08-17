({
    baseUrl: '../js',
    mainConfigFile: '../js/app.js',
    optimize: 'uglify2',
    preserveLicenseComments: false,
    name: '../js/app',
    out: '../built/app.min.js',
    paths: {
    	requireLib: 'lib/require'
    },
    include: 'requireLib'
})