import appStoreIcon from '../assets/app-store.png';
import playStoreIcon from '../assets/app.png';
import marktLogo from '../assets/icon.png';

export const AppStoreIcon = ({ className = 'w-6 h-6 object-contain shrink-0' }: { className?: string }) => (
  <img src={appStoreIcon} alt="App Store" className={className} />
);

export const PlayStoreIcon = ({ className = 'w-6 h-6 object-contain shrink-0' }: { className?: string }) => (
  <img src={playStoreIcon} alt="Google Play" className={className} />
);

export const MarktLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <img src={marktLogo} alt="Markt" className={className} />
);
