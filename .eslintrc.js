module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    }
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:prettier/recommended"
  ],
  rules: {
    "class-methods-use-this": "off",
    "no-void": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/no-useless-constructor": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error", {
      allow: ["constructors"],
    }],
  }
};
