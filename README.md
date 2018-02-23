# magicxer

Magical words mixer. Combines words from list into a list of clever mixes. You can check it out live at [magicxer.smutnyleszek.com](http://magicxer.smutnyleszek.com).

## Usage

```sh
npm install magicxer --save
```

```js
const magicxer = require("magicxer").magicxer;
magicxer.mix("snow", "white");
```

```typescript
import { magicxer } from "magicxer";
magicxer.mix("snow", "white");
```

## Technicalities

This is a small webapp project that I created to check out some fancy new tech:

* Parcel
* Vue.js
* Jest
* TypeScript
* Prettier
* 2 spaces indentation :-D
* .editorconfig

## Development

Change code at `/src` and run Parceljs live server ([localhost:2038](http://localhost:2038)): `npm start`. You probably want to watch tests too: `npm run test-watch`.

Before commiting the changes, make sure to run `npm run build` (development website is in `/dev`, production is in `/docs`[^1]).

[^1]: We use `/docs` directory, because Github Pages allows to serve only root or `/docs`.
