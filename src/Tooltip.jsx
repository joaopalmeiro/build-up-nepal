// https://stackoverflow.com/a/38783213
// https://design-system.modulz-deploys.com/closed
// https://github.com/radix-ui/design-system/blob/v0.6.2/pages/closed.tsx
// Source: https://www.radix-ui.com/docs/primitives/components/tooltip
// https://www.radix-ui.com/docs/primitives/components/tooltip
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { keyframes, styled } from '../stitches.config';

import Text from './Text';

const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' }
});

const Content = styled(TooltipPrimitive.Content, {
    backgroundColor: '$transparentPanel',
    borderRadius: '$1',
    // borderRadius: '$3',
    // padding: '$1 $2',
    padding: '$2 $3',

    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        // animationDuration: '5400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        // https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
        willChange: 'transform, opacity',
        '&[data-state="delayed-open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade }
        }
    }
});

function Tooltip({ children, content, open, defaultOpen, onOpenChange, delayDuration, ...props }) {
    // https://www.radix-ui.com/docs/primitives/components/tooltip#custom-apis
    return (
        // https://www.radix-ui.com/docs/primitives/components/tooltip#root
        <TooltipPrimitive.Root
            open={open}
            // open
            defaultOpen={defaultOpen}
            onOpenChange={onOpenChange}
            // delayDuration={0}
            delayDuration={delayDuration}
        >
            {/* https://www.radix-ui.com/docs/primitives/components/tooltip#trigger */}
            <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

            {/* https://www.radix-ui.com/docs/primitives/components/tooltip#content */}
            <Content
                side="top"
                // side="bottom"
                align="center"
                sideOffset={5}
                avoidCollisions
                {...props}
            >
                <Text
                    // size="3"
                    size="2"
                    // size="1"
                    as="p"
                    css={{ color: '$loContrast', fontWeight: '$3' }}
                >
                    {content}
                </Text>
            </Content>
        </TooltipPrimitive.Root>
    );
}

export default Tooltip;
