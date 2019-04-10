import React from 'react';

import addRatios from './addRatios';
import Bar from './Bar';

import { Wrapper, BarChartContainer } from './styled';

const BarChart = ({ programmes }): JSX.Element => {
  const itemsWithRatios = addRatios(programmes);

  return (
    <Wrapper>
      <BarChartContainer>
        {itemsWithRatios.map(
          (props, index): JSX.Element => (
            <Bar {...props} items={programmes} index={index} key={props.name} />
          ),
        )}
      </BarChartContainer>
    </Wrapper>
  );
};

export default BarChart;
