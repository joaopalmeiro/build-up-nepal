// Source:
// - https://www.radix-ui.com/docs/primitives/components/dialog
// - https://github.com/radix-ui/design-system/blob/v0.6.2/components/Dialog.tsx
// - https://design-system.modulz-deploys.com/#dialog
// - https://github.com/radix-ui/design-system/blob/v0.6.2/pages/index.tsx#L1715
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { styled } from '../../stitches.config';

import IconButton from './IconButton';
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

const StyledCloseButton = styled(DialogPrimitive.Close, {
    position: 'absolute',
    top: '$2',
    right: '$2'
});

// https://www.radix-ui.com/docs/primitives/components/dialog#abstract-the-overlay-and-the-close-button
export const DialogContent = forwardRef(function DialogContent({ children, ...props }, ref) {
    return (
        <DialogPrimitive.Portal>
            <StyledOverlay />
            <StyledContent {...props} ref={ref}>
                {children}
                <StyledCloseButton asChild>
                    <IconButton variant="ghost" aria-label="Close">
                        <Cross1Icon />
                    </IconButton>
                </StyledCloseButton>
            </StyledContent>
        </DialogPrimitive.Portal>
    );
});

DialogContent.propTypes = {
    children: PropTypes.node.isRequired
};

// https://github.com/radix-ui/primitives/issues/1086
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

// https://www.radix-ui.com/docs/primitives/components/dialog#title
// export const DialogTitle = DialogPrimitive.Title;
// export const DialogDescription = DialogPrimitive.Description;
