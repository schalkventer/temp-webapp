import { TrouterProps } from './schema';

type Tid = string;
type Tname = string;
type Tamount = number;
type Ttotal = number;
type Turl = string;
type Tpercentage = number;

type TnationalInput = {
  slug: Tid;
  amount: Tamount;
  detail: Turl;
  name: Tname;
  percentage_of_total: Tpercentage;
};

type Tresponse = {
  data: {
    total: Ttotal;
    items: TnationalInput[];
  };
};

type Titem = {
  id: Tid;
  url: Turl;
  percentage: Tpercentage;
  amount: Tamount;
  name: Tname;
};

type Tdata = {
  total: Ttotal;
  items: Titem[];
};

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

const transformData = (response: Tresponse, routerObject: TrouterProps): Tdata => {
  return {
    total: response.data.total,
    items: createItems(response.data),
  };
};

export default transformData;
