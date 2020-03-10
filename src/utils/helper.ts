import { units, IUnit } from './gameutil';

export const getComputerUnit = (): number => {
  let total_weight: number = 0;
  type RangeObj = {
    min: number;
    max: number;
  };
  let ranges: Array<RangeObj> = [];

  units.forEach((unit: IUnit, index: number) => {
    total_weight += unit.weight;
    const min = index === 0 ? index : ranges[index - 1]['max'];
    ranges.push({
      min,
      max: min + unit['weight'],
    });
  });

  const random = Math.random() * total_weight;

  let autoSelectedUnit: number = 10;
  ranges.forEach((range: RangeObj, index: number) => {
    if (random > range['min'] && random < range['max']) {
      autoSelectedUnit = index;
    }
  });

  return autoSelectedUnit;
};
