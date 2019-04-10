import { maxBy } from 'lodash';

const addSingleRatio = max => ({ title, amount }) => ({
  title,
  amount,
  ratio: (amount / max) * 100,
});

const addRatio = items => {
  const max = maxBy(items, 'amount');
  return items.map(addSingleRatio(max.amount * 1.5));
};

export default addRatio;
