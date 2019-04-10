import { TsphereId } from '../spheres/schema'; // eslint-disable-line @typescript-eslint/no-unused-vars
import {
  TprovinceId,
  TprovinceName,
  TprovinceIdList,
  TprovinceNamesList,
  TprovinceDataRelationshipsList,
} from '../provinces/schema';

/**
 * A kebab-case ID of a specific governing body in South African politics. These usually coincide with specific spheres of government {@link TsphereId }.
 */
export type TgoverningBodyId = 'south-africa' | TprovinceId;

/**
 * A title-case name of a specific governing body in South African politics. These usually coincide with specific spheres of government {@link TsphereId }.
 */
export type TgoverningBodyName = 'South Africa' | TprovinceName;

/**
 * Mapping of all information associated with a specific governing body.
 */
export interface TgoverningBodyRelationship {
  id: TgoverningBodyId;
  name: TgoverningBodyName;
}

/**
 * An array of all governing body IDs.
 */
export type TgoverningBodyIdList = TprovinceIdList & [TgoverningBodyId];

/**
 * An array of all governing body IDs.
 */
export type TgoverningBodyNamesList = TprovinceNamesList & [TgoverningBodyName];

/**
 * An array mapping governing body IDs with governing body names (and vice versa).
 */
export type TgoverningBodyDataRelationshipsList = TprovinceDataRelationshipsList &
  [TgoverningBodyRelationship];

/**
 * The shape of the hardcoded project-wide governing bodies object.
 */
export interface TgoverningBodiesConstantDataShape {
  ids: TgoverningBodyIdList;
  names: TgoverningBodyNamesList;
  relationships: TgoverningBodyDataRelationshipsList;
}

/**
 * The consolidated budget for an entire governing body.
 */
export type TgoverningBodyAmount = number;
