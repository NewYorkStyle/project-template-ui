import {Segmented as AntdSegmented, type SegmentedProps} from 'antd';

export type TSegmentedProps = SegmentedProps;

export const Segmented = (props: TSegmentedProps) => {
  return <AntdSegmented {...props} />;
};
