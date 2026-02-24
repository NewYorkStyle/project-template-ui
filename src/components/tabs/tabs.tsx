import {Tabs as AntdTabs, type TabsProps} from 'antd';

type TProps = TabsProps;

export const Tabs = (props: TProps) => {
  return <AntdTabs {...props} />;
};
