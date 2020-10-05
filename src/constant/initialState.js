import { v1 as uuidv1 } from 'uuid';

const INITIAL_STATE = [
  {
    id: uuidv1(),
    amount: 12,
    total: 20,
  },
  {
    id: uuidv1(),
    amount: 14,
    total: 30,
  },
  {
    id: uuidv1(),
    amount: 5,
    total: 15,
  },
  {
    id: uuidv1(),
    amount: 10,
    total: 18,
  },
  {
    id: uuidv1(),
    amount: 15,
    total: 32,
  },
];

export default INITIAL_STATE;