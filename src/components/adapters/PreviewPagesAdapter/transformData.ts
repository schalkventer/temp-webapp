import { Tdata, Titem, Treponse, Tprogramme } from './schema';

const createProgrammeObject = ({ amount, title }: Tprogramme): Tprogramme => ({ amount, title });

const transformData = (response: Treponse): Tdata[] =>
  response.items.map(
    ({
      percentage_of_budget: percentage,
      total,
      slug: id,
      programmes,
      ...otherValues
    }: Titem): Tdata => ({
      ...otherValues,
      resources: {
        consolidated: percentage,
        value: total,
      },
      id,
      items: programmes.map(createProgrammeObject),
    }),
  );

export default transformData;
