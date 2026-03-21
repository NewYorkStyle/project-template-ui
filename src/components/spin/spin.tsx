import {Spin as AntdSpin, type SpinProps} from 'antd';

export type TSpinProps = SpinProps;

export const Spin = (props: TSpinProps) => {
  return <AntdSpin {...props} />;
};
