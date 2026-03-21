import {Popover as AntdPopover, type PopoverProps} from 'antd';

export type TPopoverProps = PopoverProps;

export const Popover = (props: TPopoverProps) => {
  return <AntdPopover {...props} />;
};
