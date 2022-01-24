module.exports = {
    ...require('@joaopalmeiro/prettier-config'),
    overrides: [
        {
            files: ['*.md', '*.yml', '*.yaml', '*.json'],
            options: {
                tabWidth: 2
            }
        }
    ]
};