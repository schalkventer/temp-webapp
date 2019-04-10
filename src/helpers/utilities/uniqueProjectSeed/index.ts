import { TconvertLetterToNumber, TcreateUniqueProjectSeed, TuniqueProjectSeed } from './schema';

const createUniqueProjectSeed: TcreateUniqueProjectSeed = value => {
  const array = value.split('');
  const convertLetterToNumber: TconvertLetterToNumber = letter => Math.abs(letter.charCodeAt(0));
  const result = array.map(convertLetterToNumber);
  return parseInt(result.join(''), 10);
};

const uniqueProjectSeed: TuniqueProjectSeed = createUniqueProjectSeed(
  'vulekamali/static-budget-portal',
);

export default uniqueProjectSeed;
