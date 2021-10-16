module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'airbnb-typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
    ],
    "rules": {
        "indent": ["error", "tab"],
        "prettier/prettier": [2, { "useTabs": true }]
     }
};
