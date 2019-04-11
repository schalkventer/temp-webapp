import { TconvertLetterToNumber, TcreateUniqueProjectSeed, TuniqueProjectSeed } from './schema';

const createUniqueProjectSeed: TcreateUniqueProjectSeed = (value: string): number => {
  const array = value.split('');
  const convertLetterToNumber: TconvertLetterToNumber = (letter: string): number =>
    Math.abs(letter.charCodeAt(0));
  const result = array.map(convertLetterToNumber);
  return parseInt(result.join(''), 10);
};

const uniqueProjectSeed: TuniqueProjectSeed = createUniqueProjectSeed(
  'vulekamali/static-budget-portal',
);

export default uniqueProjectSeed;
