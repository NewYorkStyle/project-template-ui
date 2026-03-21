import {Result as AntdResult, type ResultProps} from 'antd';

export type TResultProps = ResultProps;

export const Result = ({...restProps}: TResultProps) => {
  return <AntdResult {...restProps} />;
};
