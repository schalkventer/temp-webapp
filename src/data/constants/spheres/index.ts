import { TspheresConstantDataShape } from './schema';

const spheres: TspheresConstantDataShape = {
  ids: ['national', 'provincial', 'local'],
  names: ['National', 'Provincial', 'Local'],
  relationships: [
    {
      id: 'national',
      name: 'National',
    },
    {
      id: 'provincial',
      name: 'Provincial',
    },
    {
      id: 'local',
      name: 'Local',
    },
  ],
};

export default spheres;
