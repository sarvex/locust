import { connect } from 'react-redux';

import LineChart, { ILineChartProps } from 'components/LineChart/LineChart';
import { IRootState } from 'redux/store';
import { ICharts } from 'types/ui.types';

const availableSwarmCharts: ILineChartProps[] = [
  {
    title: 'Total Requests per Second',
    lines: [
      { name: 'RPS', key: 'currentRps' },
      { name: 'Failures/s', key: 'currentFailPerSec' },
    ],
  },
  {
    title: 'Response Times (ms)',
    lines: [
      { name: 'Median Response Time', key: 'responseTimePercentile1' },
      { name: '95% percentile', key: 'responseTimePercentile2' },
    ],
  },
  {
    title: 'Number of Users',
    lines: [{ name: '"Number of Users"', key: 'userCount' }],
  },
];

export function SwarmCharts({ charts }: { charts: ICharts }) {
  return (
    <div>
      {availableSwarmCharts.map((lineChartProps, index) => (
        <LineChart key={`swarm-chart-${index}`} {...lineChartProps} charts={charts} />
      ))}
    </div>
  );
}

const storeConnector = ({ ui: { charts } }: IRootState) => ({ charts });

export default connect(storeConnector)(SwarmCharts);
