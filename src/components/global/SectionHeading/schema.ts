export type Ttitle = string;
export type Tshare = string | boolean | null;
type Tdisabled = string;

export type Tphases = {
  disabled: Tdisabled;
};

export type Tyears = {
  disabled: Tdisabled;
};

export type Tprops = {
  title: Ttitle;
  share?: Tshare;
  phases?: Tphases;
  years?: Tyears;
};

const phases: Tphases = {
  disabled: 'Original budget',
};

const years: Tyears = {
  disabled: '2018-19',
};

export { phases, years };

export default { phases, years };
