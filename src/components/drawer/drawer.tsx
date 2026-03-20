import {Drawer as AntdDrawer, type DrawerProps} from 'antd';

export type TDrawerProps = DrawerProps;

export const Drawer = (props: TDrawerProps) => {
  return <AntdDrawer {...props} />;
};
