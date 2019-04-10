/**
 * An kebab-case ID used for a specific South African province (total of 9)
 */
export type TprovinceId =
  | 'eastern-cape'
  | 'free-state'
  | 'gauteng'
  | 'kwazulu-natal'
  | 'limpopo'
  | 'mpumalanga'
  | 'north-west'
  | 'northern-cape'
  | 'western-cape';

/**
 * The name of a specific South African province (total of 9)
 */
export type TprovinceName =
  | 'Eastern Cape'
  | 'Free State'
  | 'Gauteng'
  | 'KwaZulu Natal'
  | 'Limpopo'
  | 'Mpumalanga'
  | 'North West'
  | 'Northern Cape'
  | 'Western Cape';

/**
 * Mapping of all information associated with a specific province.
 */
export interface TprovinceDataRelationship {
  id: TprovinceId;
  name: TprovinceName;
}

/**
 * An array of all province IDs.
 */
export type TprovinceIdList = [
  TprovinceId,
  TprovinceId,
  TprovinceId,
  TprovinceId,
  TprovinceId,
  TprovinceId,
  TprovinceId,
  TprovinceId,
  TprovinceId
];

/**
 * An array of all province IDs.
 */
export type TprovinceNamesList = [
  TprovinceName,
  TprovinceName,
  TprovinceName,
  TprovinceName,
  TprovinceName,
  TprovinceName,
  TprovinceName,
  TprovinceName,
  TprovinceName
];

/**
 * An array of mapping province IDs with province names (and vice versa).
 */
export type TprovinceDataRelationshipsList = [
  TprovinceDataRelationship,
  TprovinceDataRelationship,
  TprovinceDataRelationship,
  TprovinceDataRelationship,
  TprovinceDataRelationship,
  TprovinceDataRelationship,
  TprovinceDataRelationship,
  TprovinceDataRelationship,
  TprovinceDataRelationship
];

/**
 * The shape of the hardcoded project-wide provinces object.
 */
export interface TprovincesConstantDataShape {
  ids: TprovinceIdList;
  names: TprovinceNamesList;
  relationships: TprovinceDataRelationshipsList;
}
