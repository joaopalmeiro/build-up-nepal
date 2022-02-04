# build it up, Nepal! 🧱

> [Project](https://www.vizforsocialgood.com/join-a-project/2021/12/28/build-up-nepal)

Powered by Build up Nepal and Viz for Social Good.

## Development

- Install [pnpm](https://pnpm.io/installation) (if necessary).
- `pnpm install`.
- `pnpm dev`.

## References

- [Nepal](https://en.wikipedia.org/wiki/Nepal) Wikipedia page.
- [Nepal - Subnational Administrative Boundaries](https://data.humdata.org/dataset/administrative-bounadries-of-nepal) dataset ([HDX](https://data.humdata.org/)).
- [Mapshaper](https://github.com/mbloch/mapshaper).
- [@modulz/design-system](https://www.npmjs.com/package/@modulz/design-system).
- [Five-number summary](https://en.wikipedia.org/wiki/Five-number_summary) Wikipedia page.
- [Flag of Nepal](https://commons.wikimedia.org/wiki/File:Flag_of_Nepal.svg) and [Flag of Nepal](https://en.wikipedia.org/wiki/Flag_of_Nepal) Wikipedia page.
- [devtools.fm: Pedro Duarte - Modulz, Radix, Stitches](https://devtools.fm/episode/17).

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
- Hooks:
  - [usehooks-ts](https://usehooks-ts.com/) package.
  - [react-hook](https://github.com/jaredLunde/react-hook) packages.
- [How to draw SVG image on canvas with Konva](https://konvajs.org/docs/sandbox/SVG_On_Canvas.html).
- [Part 1: Fabric.js on React](https://aprilescobar.medium.com/part-1-fabric-js-on-react-fabric-canvas-e4094e4d0304) blog post by April Escobar.
- [canvg](https://github.com/canvg/canvg) package.
- [Ramda](https://ramdajs.com/) package.
- [Underscore](https://underscorejs.org/) package.
- [Grid.js](https://gridjs.io/) and [gridjs-react](https://github.com/grid-js/gridjs-react) package (tables).
- [supabase-py](https://github.com/supabase-community/supabase-py) package.
- [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/) app.
- [@pmndrs/branding](https://github.com/pmndrs/branding) package.
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) documentation. [Horizontal tiles](https://codesandbox.io/s/horizontal-tiles-l4klb) example.
- [React Helmet](https://github.com/nfl/react-helmet).
- [Microlink Cards](https://cards.microlink.io/editor) and [@microlink/cards](https://github.com/microlinkhq/cards/tree/master/packages/npm) package. [Custom template](https://cards.microlink.io/editor?preset=simple&p=2gTEPD4KICAgIDxCb3gKICAgICAgICBzeD17ewogICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBoc2woMjI2LCA1NS4wJSwgNDUuMCUpLCBoc2woMzU4LCA2NS4wJSwgNDguNyUpKScsCiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JwogICAgICAgIH19CiAgICA-CiAgICAgICAgPEZsZXgKICAgICAgICAgICAgc3g9e3sKICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLAogICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLAogICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsCiAgICAgICAgICAgICAgICBiZzogcXVlcnkuYmcsCiAgICAgICAgICAgICAgICBjb2xvcjogcXVlcnkuY29sb3IsCiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJwogICAgICAgICAgICB9fQogICAgICAgID4KICAgICAgICAgICAgPFRleHQKICAgICAgICAgICAgICAgIHN4PXt7CiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseToKICAgICAgICAgICAgICAgICAgICAgICAgJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppJywKICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogNiwKICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAKICAgICAgICAgICAgICAgIH19CiAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIHtxdWVyeS5oZWFkbGluZX0KICAgICAgICAgICAgPC9UZXh0PgogICAgICAgICAgICA8VGV4dAogICAgICAgICAgICAgICAgc3g9e3sKICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OgogICAgICAgICAgICAgICAgICAgICAgICAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamknLAogICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAzLAogICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDMwMAogICAgICAgICAgICAgICAgfX0KICAgICAgICAgICAgPgogICAgICAgICAgICAgICAge3F1ZXJ5LmNhcHRpb259CiAgICAgICAgICAgIDwvVGV4dD4KICAgICAgICA8L0ZsZXg-CiAgICA8L0JveD4KPC8-Owo&caption=Powered+by+Build+up+Nepal+and+Viz+for+Social+Good&headline=build+it+up%2C+Nepal%21+%F0%9F%A7%B1&bg=hsl%28260%2C+25.0%25%2C+11.0%25%29#) ([Adobe preset](https://cards.microlink.io/editor?preset=adobe) + [Simple preset](https://cards.microlink.io/editor?preset=simple)).
