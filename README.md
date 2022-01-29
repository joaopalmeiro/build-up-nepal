# build-up-nepal

> [Project](https://www.vizforsocialgood.com/join-a-project/2021/12/28/build-up-nepal)

## Development

- Install [pnpm](https://pnpm.io/installation) (if necessary).
- `pnpm install`.
- `pnpm dev`.

## References

- [Nepal](https://en.wikipedia.org/wiki/Nepal) Wikipedia page.
- [Nepal - Subnational Administrative Boundaries](https://data.humdata.org/dataset/administrative-bounadries-of-nepal) dataset ([HDX](https://data.humdata.org/)).
- [Mapshaper](https://github.com/mbloch/mapshaper).
- [@modulz/design-system](https://www.npmjs.com/package/@modulz/design-system).

## Notes

- Mapshaper:
  - [Documentation](https://github.com/mbloch/mapshaper/wiki/Command-Reference).
  - [npm package](https://www.npmjs.com/package/mapshaper).
- [GADM data](https://gadm.org/download_country.html).
- [vite-react-stitches-radix](https://github.com/xixixao/vite-react-stitches-radix) template.
- `pnpm create vite -- --template react`.
- `pnpm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import @joaopalmeiro/prettier-config`.
- `pnpm eslint --init`.
- `pnpm install prop-types react-simple-maps`.
- [prop-types](https://www.npmjs.com/package/prop-types) package.
- [nepal-geojson](https://github.com/Acesmndr/nepal-geojson) package.
- [Open Data Nepal](https://opendatanepal.com/) website.
- [topojson](https://github.com/mattijn/topojson) Python package.
- [shapefile](https://github.com/mbostock/shapefile).
- [Stitches](https://stitches.dev/):
  - `pnpm install @modulz/design-system @stitches/react @radix-ui/colors`.
  - CSS-in-JS.
  - It supports [SSR](https://stitches.dev/docs/server-side-rendering).
  - Utils: custom CSS properties.
  - The `as` prop can be used to define the HTML tag.
  - [API documentation](https://stitches.dev/docs/api). [Styling documentation](https://stitches.dev/docs/styling).
  - The `@stitches/core` package can be used in [Svelte](https://stitches.dev/docs/frequently-asked-questions#is-stitches-limited-to-react). The main difference is that the API returns class names instead of React components.
  - `css` prop as an alternative to the `style` attribute.
- [Radix Colors](https://www.radix-ui.com/colors):
  - They are JavaScript objects.
  - [Colors](https://www.radix-ui.com/docs/colors/palette-composition/the-scales), [combinations](https://www.radix-ui.com/docs/colors/palette-composition/composing-a-palette), and [use cases](https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale).
- `pnpm install lodash.isempty lodash.range lodash.sample lodash.merge`. [Lodash Modularized](https://www.npmjs.com/search?q=keywords:lodash-modularized) packages.
- `pnpm install just-remove`.
- `pnpm install @radix-ui/react-tooltip`.
