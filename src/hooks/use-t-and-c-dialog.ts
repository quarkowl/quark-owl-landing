import { useState, useEffect } from 'react';

export type DialogType = 'terms' | 'privacy' | null;

const dialogState = {
  state: null as DialogType,
  setState(newState: DialogType) {
    this.state = newState;
    this.setters.forEach((setter: any) => setter(this.state));
  },
  setters: [] as any[],
};

dialogState.setState = dialogState.setState.bind(dialogState);

const useDialog = (): [DialogType, (type: DialogType) => void] => {
  const [dialogType, setDialogType] = useState(dialogState.state);

  if (!dialogState.setters.includes(setDialogType)) {
    dialogState.setters.push(setDialogType);
  }

  useEffect(
    () => () => {
      dialogState.setters = dialogState.setters.filter(
        setter => setter !== setDialogType
      );
    },
    []
  );

  const openDialog = (type: DialogType) => {
    dialogState.setState(type);
  };

  return [dialogType, openDialog];
};

export default useDialog;
