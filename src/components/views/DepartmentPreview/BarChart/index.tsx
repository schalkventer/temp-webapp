import React from 'react';

import addRatios from './addRatios';
import Bar from './Bar';

import { Wrapper, BarChartContainer } from './styled';

const Markup = ({ items }): JSX.Element => {
  const itemsWithRatios = addRatios(items);

  return (
    <Wrapper>
      <BarChartContainer>
        {itemsWithRatios.map(
          (props, index): JSX.Element => (
            <Bar {...props} items={items} index={index} key={props.name} />
          ),
        )}
      </BarChartContainer>
    </Wrapper>
  );
};

export default Markup;
