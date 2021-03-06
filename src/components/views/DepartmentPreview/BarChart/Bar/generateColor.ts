import { colors } from './data.json';

const amountOfColors = colors.length;

function* createColorGenerator(): any {
  let count = 0;

  while (true) {
    if (count >= amountOfColors) {
      count = 0;
    }

    const color = colors[count];
    yield color;

    count += 1;
  }
}

export default createColorGenerator;
