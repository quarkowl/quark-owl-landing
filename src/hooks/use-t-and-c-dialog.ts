// @flow
import { useState, useEffect } from 'react';

const dialogState = {
  state: false,
  setState(newState: boolean) {
    this.state = newState;
    // @ts-ignore
    this.setters.forEach((setter) => setter(this.state));
  },
  setters: [],
};

dialogState.setState = dialogState.setState.bind(dialogState);

const useTAndCDialog = (): [boolean, (shouldOpen?: boolean) => void] => {
  const [isDialogOpen, setIsDialogOpen] = useState(dialogState.state);
  // @ts-ignore
  if (!dialogState.setters.includes(setIsDialogOpen)) {
    // @ts-ignore
    dialogState.setters.push(setIsDialogOpen);
  }

  useEffect(
    () => () => {
      dialogState.setters = dialogState.setters.filter(
        setter => setter !== setIsDialogOpen
      );
    },
    []
  );

  const toggleIsDialogOpen = (shouldOpen?: boolean) => {
    dialogState.setState(shouldOpen !== undefined ? shouldOpen : !isDialogOpen);
  };

  return [isDialogOpen, toggleIsDialogOpen];
};

export default useTAndCDialog;
