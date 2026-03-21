import {ICON_NAMES, type TIconName} from './types';

export type TIconProps = {
  name: TIconName;
  size?: number | string;
  color?: string;
};

export const Icon = ({color = 'currentColor', name, size = 24}: TIconProps) => {
  const Component = ICON_NAMES[name];

  return (
    <Component
      style={{
        width: size,
        height: size,
        color,
        display: 'inline-block',
        flexShrink: 0,
      }}
    />
  );
};
