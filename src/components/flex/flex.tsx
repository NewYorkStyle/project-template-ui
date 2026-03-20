import {Flex as AntdFlex, type FlexProps} from 'antd';

export type TFlexProps = FlexProps;

export const Flex = (props: TFlexProps) => {
  return <AntdFlex {...props} />;
};
