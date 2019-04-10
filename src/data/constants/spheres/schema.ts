/**
 * A title-case name of a sphere of South African government. See https://www.etu.org.za/toolbox/docs/govern/spheres.html for a more detailed explaination.
 */
export type TsphereName = 'National' | 'Local' | 'Provincial';

/**
 * A kebab-case ID of a sphere of South African government. See https://www.etu.org.za/toolbox/docs/govern/spheres.html for a more detailed explaination.
 */
export type TsphereId = 'national' | 'local' | 'provincial';

/**
 * Mapping of all information associated with a specific sphere.
 */
export interface TsphereDataRelationship {
  id: TsphereId;
  name: TsphereName;
}

/**
 * An array of all sphere IDs.
 */
export type TspheresIdList = [TsphereId, TsphereId, TsphereId];

/**
 * An array of all sphere IDs.
 */
export type TspheresNamesList = [TsphereName, TsphereName, TsphereName];

/**
 * An array of mapping sphere IDs with sphere names (and vice versa).
 */
export type TspheresDataRelationshipsList = [
  TsphereDataRelationship,
  TsphereDataRelationship,
  TsphereDataRelationship
];

/**
 * The shape of the hardcoded project-wide provinces object.
 */
export interface TspheresConstantDataShape {
  ids: TspheresIdList;
  names: TspheresNamesList;
  relationships: TspheresDataRelationshipsList;
}
