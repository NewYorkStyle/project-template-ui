import {Input as AntdInput, type InputProps} from 'antd';

export type TInputProps = InputProps;

const {
  OTP: AntdOTP,
  Password: AntdPassword,
  Search: AntdSearch,
  TextArea: AntdTextArea,
} = AntdInput;

export const Input = (props: TInputProps) => {
  return <AntdInput {...props} />;
};

Input.TextArea = AntdTextArea;
Input.Search = AntdSearch;
Input.Password = AntdPassword;
Input.OTP = AntdOTP;
