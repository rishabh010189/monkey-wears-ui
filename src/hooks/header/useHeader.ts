import { useState } from 'react';
import { loadState, saveState } from '../../features/storage';
import { useAppSelector } from '../reduxHooks';

const useHeader = () => {
  const { items } = useAppSelector((state) => state.cart);
  const isDisclaimerSeen = loadState('isDisclaimerSeen', false);
  const [showDisclaimer, setShowDisclaimer] = useState(!isDisclaimerSeen);
  const disclaimerSeenHandler = () => {
    setShowDisclaimer(false);
    saveState('isDisclaimerSeen', true);
  };

  return { cartCount: items.length, disclaimerSeenHandler, showDisclaimer };
};

export default useHeader;
