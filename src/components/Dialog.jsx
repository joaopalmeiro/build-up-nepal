// Source:
// - https://www.radix-ui.com/docs/primitives/components/dialog
// - https://github.com/radix-ui/design-system/blob/v0.6.2/components/Dialog.tsx
// - https://design-system.modulz-deploys.com/#dialog
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';

import { styled } from '../../stitches.config';

import { IconButton } from './IconButton';
import { overlayStyles } from './Overlay';
import { panelStyles } from './Panel';

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
});

const StyledContent = styled(DialogPrimitive.Content, panelStyles, {
    position: 'fixed',
    top: '50%',
    left: '50%',

    minWidth: 200,
    maxHeight: '85vh',
    padding: '$4',
    marginTop: '-5vh',

    transform: 'translate(-50%, -50%)',
    willChange: 'transform',

    '&:focus': {
        outline: 'none'
    }
});

// TODO
