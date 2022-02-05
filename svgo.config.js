module.exports = {
    multipass: true,

    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false
                }
            }
        },

        'removeDimensions',
        'removeRasterImages',

        // {
        //     name: 'removeAttrs',
        //     params: {
        //         attrs: 'clip-path'
        //     }
        // },

        {
            name: 'sortAttrs',
            params: {
                xmlnsOrder: 'alphabetical'
            }
        }
    ]
};
