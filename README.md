# Slugify Sring

Slugify a string for use in a URL.

```sh
yarn add slugify-string
```

## Usage

```js
import slugify from 'slugify-string';

const title = 'How to Publish & Update a Package';
slugify(title);
// -> 'how-to-publish-and-update-a-package'
```

### Custom whitelist

You can pass a custom whitelist to ensure certain characters are not transformed. In the following example `.`s are kept.

```js
import slugify from 'slugify-string';

const title = 'React v16.3.0: New lifecycles and context API';
slugify(title, /[^a-z0-9.]/g);
// -> 'react-v16.3.0-new-lifecycles-and-context-api'
```
