/** @jsx jsx */
import { Button, jsx, useColorMode } from 'theme-ui';
import * as Dialog from '@radix-ui/react-dialog';

import './dialog.css';
import TAndC from '../t-and-c/TAndC';
import PrivacyPolicy from '../t-and-c/PrivacyPolicy';
import * as React from 'react';
import type { DialogType } from '../../hooks';

type Props = {
  dialogType: DialogType;
  onClose: () => void;
};

const DialogEl = ({ dialogType, onClose }: Props) => {
  const [colorMode, setColorMode] = useColorMode<'light' | 'dark'>();
  const isDark = colorMode === `dark`;
  const title = dialogType === 'terms' ? 'Terms & Conditions' : 'Privacy Policy';

  return (
    <div>
      <Dialog.Root open={dialogType !== null} onOpenChange={onClose}>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay">
            <Dialog.Content className={'DialogContent' + (isDark ? ' DialogDark' : '')}>
              <Dialog.Title>{title}</Dialog.Title>
              <div className="DialogDescription">
                {dialogType === 'terms' ? <TAndC /> : <PrivacyPolicy />}
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
