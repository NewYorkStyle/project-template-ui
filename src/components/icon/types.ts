import BulbLightning from './assets/bulb-lighting.svg';
import Burger from './assets/burger.svg';
import Cross from './assets/cross.svg';
import Home from './assets/home.svg';
import Logo from './assets/logo.svg';
import Moon from './assets/moon.svg';
import Profile from './assets/profile.svg';

export const ICON_NAMES = {
  bulbLightning: BulbLightning,
  burger: Burger,
  cross: Cross,
  home: Home,
  logo: Logo,
  moon: Moon,
  profile: Profile,
} as const;

export type TIconName = keyof typeof ICON_NAMES;
