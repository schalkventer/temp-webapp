export type Ttitle = string;
export type Tshare = string | boolean;
type Tdisabled = string;

export type Tphases = {
  disabled: Tdisabled;
};

export type Tyears = {
  disabled: Tdisabled;
};

const phases: Tphases = {
  disabled: 'Original budget',
};

const years: Tyears = {
  disabled: '2018-19',
};

export { phases, years };

export default { phases, years };
