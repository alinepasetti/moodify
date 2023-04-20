import { useState } from 'react';

export const useButtonStatus = () => {
  const [active, setActive] = useState<boolean>(false);

  const activateButton = (active: boolean) => {
    setActive(active);
  };
  return { active, activateButton };
};
