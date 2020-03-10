import ArcheryImg from '../assets/archery.png';
import CavalryImg from '../assets/cavalry.png';
import PikemanImg from '../assets/pikeman.png';

export interface IUnit {
  imgSrc: string;
  label: string;
  weight: number;
}

export const units: Array<IUnit> = [
  {
    imgSrc: ArcheryImg,
    label: 'Archery',
    weight: 4,
  },
  {
    imgSrc: CavalryImg,
    label: 'Cavalry',
    weight: 2,
  },
  {
    imgSrc: PikemanImg,
    label: 'Pikeman',
    weight: 2,
  },
];

const game_rules = [
  ['none', 'loss', 'win'],
  ['win', 'none', 'loss'],
  ['loss', 'win', 'none'],
];

export const getGameResult = (playerUnit: number, computerUnit: number) => {
  return game_rules[playerUnit][computerUnit];
};
