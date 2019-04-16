/* eslint-disable @typescript-eslint/explicit-function-return-type */
import inputData from './data.json';

type Tdescription = string | null;
type Tid = string;
type Tamount = number;
type TpercentageTotal = number;
type Tslug = string;
type Ttitle = string;
type TpercentageChanged = number;
type Ttotal = number;

export type TnationalItem = {
  amount: Tamount;
  percentage_total: TpercentageTotal;
  slug: Tslug;
  title: Ttitle;
};

export type Titem = {
  description: Tdescription;
  national: TnationalItem[];
  percentage_total: TpercentageTotal;
  percentage_changed: TpercentageChanged;
  slug: Tslug;
  title: Ttitle;
  total: Ttotal;
};

export type TnewItem = {
  title: TnationalItem['title'];
  amount: TnationalItem['amount'];
};

export type Tresources = {
  consolidated: TpercentageTotal;
  value: Tamount;
};

export type TresponseData = {
  items: Titem[];
};

// TresponseAPI being the output of the API call

export type TresponseAPI = {
  data: TresponseData;
};

export type TrouterObject = {
  id: Tid;
};

export type Tdata = {
  resources: {
    consolidated: TpercentageTotal;
    value: Ttotal;
  };
  items: TnewItem[];
  description: Tdescription;
};
