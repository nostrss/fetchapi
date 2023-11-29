import { useState } from 'react';

type StateSetter = (key: string, value: any) => void;

export const useMultipleStates = (
  initialStates: Record<string, any>
): [Record<string, any>, StateSetter] => {
  const [state, setState] = useState(initialStates);

  const setHandler = (key: string, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return [state, setHandler];
};
