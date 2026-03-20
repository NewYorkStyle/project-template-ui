import {Select as AntdSelect, type SelectProps} from 'antd';

export type TSelectProps = SelectProps;

export const Select = (props: TSelectProps) => {
  return <AntdSelect {...props} />;
};
