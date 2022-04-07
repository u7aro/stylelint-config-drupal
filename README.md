# stylelint-config-drupal

You can easily use the Drupal core stylelint configurations in your project or custom themes/modules.

## How to setup

Install stylelint and this package with Yarn.

```shell
yarn add -D stylelint stylelint-config-drupal
```

Create a .stylelintrc.json file as follows in your project root or theme/custom module directory.

```json:.stylelintrc.json
{
  "extends": "stylelint-config-drupal"
}
```

## How to run

```shell
./node_modules/.bin/stylelint ./css
```
