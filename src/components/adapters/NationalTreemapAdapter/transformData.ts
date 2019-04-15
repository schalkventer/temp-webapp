import { Tresponse, Titem, TnationalInput, Tdata } from './schema';

const createItems = ({ items }: Tresponse['data']): Titem[] =>
  items.map(
    ({
      slug: id,
      detail: url,
      percentage_of_total: percentage,
      ...otherValues
    }: TnationalInput): Titem => ({
      ...otherValues,
      id,
      url,
      percentage,
    }),
  );

const transformData = (response: Tresponse): Tdata => {
  return {
    total: response.data.total,
    items: createItems(response.data),
  };
};

export default transformData;
