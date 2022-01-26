// import { theme as modulzTheme } from '@modulz/design-system';
import { createStitches } from '@stitches/react';

// https://stitches.dev/docs/installation#configure-stitches
// https://github.com/radix-ui/design-system/blob/v0.6.2/stitches.config.ts
// https://stitches.dev/docs/api#theme
// https://stitches.dev/docs/api#media
// https://stitches.dev/docs/tokens#property-mapping
// https://stitches.dev/docs/utils
export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
    createStitches({
        theme: {
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
            }
        },

        utils: {
            ml: (value) => ({
                marginLeft: value
            }),
            mr: (value) => ({
                marginRight: value
            }),

            px: (value) => ({
                paddingLeft: value,
                paddingRight: value
            })
        }
    });
