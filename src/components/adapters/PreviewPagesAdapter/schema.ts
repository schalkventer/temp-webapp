type Ttotal = number;
type Tpercentage = number;
type Tdescription = string;
type Ttitle = string;
type Tslug = string;
type Turl = string;

export type Tprogramme = {
  amount: number;
  title: string;
};

export type Titem = {
  percentage_of_budget: Tpercentage;
  total: Ttotal;
  programmes: Tprogramme[];
  description: Tdescription;
  title: Ttitle;
  slug: Tslug;
  url: Turl;
};

export type Treponse = {
  items: Titem[];
};

export type Tresources = {
  consolidated: Tpercentage;
  value: Ttotal;
};

export type Tdata = {
  resources: Tresources;
  items: Tprogramme[];
  description: Tdescription;
  title: Ttitle;
  id: Tslug;
  url: Turl;
};
