type Tid = string;
type Tname = string;
type Tamount = number;
type Ttotal = number;
type Turl = string;
type Tpercentage = number;

type Tgovernment =
  | 'Eastern Cape'
  | 'Free State'
  | 'Gauteng'
  | 'Limpopo'
  | 'Mpumalanga'
  | 'KwaZulu-Natal'
  | 'Northern Cape'
  | 'Western Cape'
  | 'North West'
  | 'South Africa';

type TprovincialInput = {
  slug: Tid;
  amount: Tamount;
  detail: Turl;
  name: Tname;
  percentage_of_total: Tpercentage;
  government: Tgovernment;
};

type inputProvincial = {
  total: Ttotal;
  items: TprovincialInput[];
};

type TnationalItem = {
  id: Tid;
  name: Tname;
  amount: Tamount;
  url: Turl;
  percentage: Tpercentage;
};

type TprovincialItem = {
  name: Tname;
  amount: Tamount;
  percentage: Tpercentage;
  children: TnationalItem[];
};

type Tprovinces = {
  'Eastern Cape': TprovincialItem;
  'Free State': TprovincialItem;
  Gauteng: TprovincialItem;
  Limpopo: TprovincialItem;
  Mpumalanga: TprovincialItem;
  'KwaZulu-Natal': TprovincialItem;
  'Northern Cape': TprovincialItem;
  'Western Cape': TprovincialItem;
  'North West': TprovincialItem;
};

type ToutputProvincial = {
  total: Ttotal;
  provinces: Tprovinces;
};

type Tresponse = {
  data: inputProvincial;
};

type Tdata = ToutputProvincial;

const transformData = (response: Tresponse): Tdata => {
  const provinces = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'Western Cape',
    'North West',
    'KwaZulu-Natal',
  ].reduce((result, provinceName: string): Tprovinces => {
    const children = response.data.items
      .filter((item): boolean => item.government === provinceName)
      .map(
        // eslint-disable-next-line @typescript-eslint/camelcase
        ({ slug, percentage_of_total, ...data }: TprovincialInput): TprovincialItem => ({
          ...data,
          // @ts-ignore
          id: slug,
          // eslint-disable-next-line @typescript-eslint/camelcase
          percentage: percentage_of_total,
        }),
      );

    const amount = children.reduce(
      // eslint-disable-next-line no-shadow
      (result: Tamount, { amount }: { amount: Tamount }): number => result + amount,
      0,
    );
    const percentage = (amount / response.data.total) * 100;

    // @ts-ignore
    return {
      ...result,
      [provinceName]: {
        name: provinceName,
        amount,
        percentage,
        children,
      },
    };
  }, {});

  return {
    total: response.data.total,
    // @ts-ignore
    provinces,
  };
};

export default transformData;
