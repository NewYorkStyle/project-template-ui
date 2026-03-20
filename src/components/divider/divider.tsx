import {Divider as AntdDivider, type DividerProps} from 'antd';

export type TDividerProps = DividerProps;

export const Divider = (props: TDividerProps) => {
  return <AntdDivider {...props} />;
};
