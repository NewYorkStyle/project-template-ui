import {Button as AntdButton, type ButtonProps} from 'antd';

type TProps = ButtonProps;

export const Button = (props: TProps) => {
  return <AntdButton {...props} />;
};
