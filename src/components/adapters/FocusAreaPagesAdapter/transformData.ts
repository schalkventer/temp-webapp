import {
  Titem,
  TnewItem,
  Tresources,
  TnationalItem,
  TresponseAPI,
  TrouterObject,
  Tdata,
} from './schema';

const createResourcesObject = ({
  percentage_total: consolidated,
  total: value,
}: Titem): Tresources => ({
  consolidated,
  value,
});

const createItemObject = ({ title, amount }: TnationalItem): TnewItem => ({
  title,
  amount,
});

const transformData = ({ items }: TresponseAPI['data'], { id }: TrouterObject): Tdata => {
  const [item] = items.filter(({ slug }): boolean => slug === id);
  return {
    resources: createResourcesObject(item),
    items: item.national.map(createItemObject),
    description: item.description,
  };
};
