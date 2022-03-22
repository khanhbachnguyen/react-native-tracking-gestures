module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'prettier',
        'eslint:recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', "prettier"],
    rules: {
        "prettier/prettier": 0,
        'semi': ['warn', 'always'],
        'quotes': ['off', 'backtick'], // 'quotes': ['warn', 'double' | 'single' | 'backtick']
        'no-unused-vars': 'warn',
        'no-empty':'off',
        'react-hooks/exhaustive-deps': 'warn'
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': ['warn'],
                'react-native/no-inline-styles': ['off'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'no-extra-semi': 'off'
            },
        },
    ],
};
