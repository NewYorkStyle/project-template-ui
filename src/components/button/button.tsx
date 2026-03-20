import {Button as AntdButton, type ButtonProps} from 'antd';

export type TButtonProps = ButtonProps;

export const Button = (props: TButtonProps) => {
  return <AntdButton {...props} />;
};
