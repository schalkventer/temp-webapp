import { maxBy } from 'lodash';

type TsingleRatio = {
  title: string;
  amount: number;
  ratio: number;
};

const addSingleRatio = (max: number): any => ({ title, amount }): TsingleRatio => ({
  title,
  amount,
  ratio: (amount / max) * 100,
});

const addRatio = (programmes): TsingleRatio[] => {
  const max = maxBy(programmes, 'amount');
  return programmes.map(addSingleRatio(max.amount * 1.5));
};

export default addRatio;
