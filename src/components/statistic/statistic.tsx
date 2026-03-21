import {Statistic as AntdStatistic, type StatisticProps} from 'antd';

export type TStatisticProps = StatisticProps;

const {Timer: AntdTimer} = AntdStatistic;

export const Statistic = (props: TStatisticProps) => {
  return <AntdStatistic {...props} />;
};

Statistic.Timer = AntdTimer;
