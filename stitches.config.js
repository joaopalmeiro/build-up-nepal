// import { theme as modulzTheme } from '@modulz/design-system';
import { gold, indigo, indigoA, mauve, mauveA, red } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

// console.log(mauve);

// https://stitches.dev/docs/installation#configure-stitches
// https://github.com/radix-ui/design-system/blob/v0.6.2/stitches.config.ts
// https://stitches.dev/docs/api#theme
// https://stitches.dev/docs/api#media
// https://stitches.dev/docs/tokens#property-mapping
// https://stitches.dev/docs/utils
// https://github.com/radix-ui/design-system/blob/v0.6.2/styles.css
export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
    createStitches({
        media: {
            bp1: '(min-width: 520px)',
            bp2: '(min-width: 900px)',
            bp3: '(min-width: 1200px)',
            bp4: '(min-width: 1800px)',
            // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover
            hover: '(any-hover: hover)'
        },

        theme: {
            borderWidths: {
                1: '1px'
            },
            colors: {
                ...mauve,
                ...mauveA,
                ...red,
                ...indigo,
                ...indigoA,
                ...gold,

                hiContrast: '$mauve12',
                loContrast: 'white',

                transparentPanel: 'hsl(0 0% 0% / 97%)',
                panel: 'white',

                shadowLight: 'hsl(206 22% 7% / 35%)',
                shadowDark: 'hsl(206 22% 7% / 20%)'
            },
            fonts: {
                // https://github.com/mantinedev/mantine/blob/3.6.3/src/mantine-styles/src/theme/default-theme.ts#L18
                // https://github.com/mantinedev/mantine/blob/3.6.5/src/mantine-styles/src/theme/default-theme.ts#L20
                sans: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
                mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
            },
            fontSizes: {
                1: '12px',
                2: '13px',
                3: '15px',
                4: '17px',
                5: '19px',
                6: '21px',
                7: '27px',
                8: '35px',
                9: '59px'
            },
            fontWeights: {
                1: 400,
                2: 500,
                3: 600
            },
            radii: {
                1: '4px',
                2: '6px',
                3: '8px',
                4: '12px',
                round: '50%',
                pill: '9999px'
            },
            sizes: {
                1: '5px',
                2: '10px',
                3: '15px',
                4: '20px',
                5: '25px',
                6: '35px',
                7: '45px',
                8: '65px',
                9: '80px'
            },
            space: {
                1: '5px',
                2: '10px',
                3: '15px',
                4: '20px',
                5: '25px',
                6: '35px',
                7: '45px',
                8: '65px',
                9: '80px'
            },
            zIndices: {
                1: '100',
                2: '200',
                3: '300',
                4: '400',
                max: '999'
            }
        },

        utils: {
            mb: (value) => ({
                marginBottom: value
            }),
            ml: (value) => ({
                marginLeft: value
            }),
            mr: (value) => ({
                marginRight: value
            }),

            p: (value) => ({
                padding: value
            }),
            px: (value) => ({
                paddingLeft: value,
                paddingRight: value
            }),
            py: (value) => ({
                paddingTop: value,
                paddingBottom: value
            }),

            ta: (value) => ({
                textAlign: value
            }),

            userSelect: (value) => ({
                WebkitUserSelect: value,
                userSelect: value
            })
        }
    });
