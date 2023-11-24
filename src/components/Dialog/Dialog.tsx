/** @jsx jsx */
import { Button, jsx, useColorMode } from 'theme-ui';
import { withPrefix } from 'gatsby';
import * as Dialog from '@radix-ui/react-dialog';

import './dialog.css';
import TAndC from '../t-and-c/TAndC';
import * as React from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const DialogEl = ({ isOpen, onClose }: Props) => {
  const [colorMode, setColorMode] = useColorMode<'light' | 'dark'>();
  const isDark = colorMode === `dark`;
  return (
    <div>
      <Dialog.Root open={isOpen} onOpenChange={onClose}>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay">
            <Dialog.Content className={'DialogContent' + (isDark ? ' DialogDark' : '')}>
              <Dialog.Title>Privacy Policy</Dialog.Title>
              <div className="DialogDescription">
                <TAndC />
              </div>
              <Dialog.Close asChild>
                <Button color="text" variant={'primary'}>
                  Close
                </Button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default DialogEl;
