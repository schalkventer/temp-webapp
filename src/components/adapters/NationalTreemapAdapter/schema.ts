type Tid = string;
type Tname = string;
type Tamount = number;
type Ttotal = number;
type Turl = string;
type Tpercentage = number;

export type TnationalInput = {
  slug: Tid;
  amount: Tamount;
  detail: Turl;
  name: Tname;
  percentage_of_total: Tpercentage;
};

export type Tresponse = {
  data: {
    total: Ttotal;
    items: TnationalInput[];
  };
};

export type Titem = {
  id: Tid;
  url: Turl;
  percentage: Tpercentage;
  amount: Tamount;
  name: Tname;
};

export type Tdata = {
  total: Ttotal;
  items: Titem[];
};
