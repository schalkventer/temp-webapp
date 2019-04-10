/**
 * A string phrase that should be converted into a seed (number). Usually this is the project's name.
 */
export type Tphrase = string;

/**
 * A seed number generated from a string phrase.
 */
export type Tseed = number;

/**
 * A specific string character.
 */
export type Tletter = string;

/**
 * The unicode value of a specific string character.
 */
export type Tnumber = number;

/**
 * Converts a specific string character into a unicode value.
 */
export type TconvertLetterToNumber = (letter: Tletter) => Tnumber;

/**
 * Converts a string phrase into a seed number.
 */
export type TcreateUniqueProjectSeed = (phrase: Tphrase) => Tseed;

/**
 * The project's name converted into a seed number. Usually used when setting the seed of `faker.js`.
 */
export type TuniqueProjectSeed = number;
