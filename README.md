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
  - `pnpm install @modulz/design-system @stitches/react`.
  - CSS-in-JS.
  - It supports SSR.
  - Utils: custom CSS properties.
  - The `as` prop can be used to define the HTML tag.
  - [API documentation](https://stitches.dev/docs/api). [Styling documentation](https://stitches.dev/docs/styling).
  - The `@stitches/core` package can be used in [Svelte](https://stitches.dev/docs/frequently-asked-questions#is-stitches-limited-to-react).
