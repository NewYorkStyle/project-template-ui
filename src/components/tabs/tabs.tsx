import {Tabs as AntdTabs, type TabsProps} from 'antd';

export type TTabsProps = TabsProps;

export const Tabs = (props: TTabsProps) => {
  return <AntdTabs {...props} />;
};
