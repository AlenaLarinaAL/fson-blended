import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
  default: AiOutlineInfoCircle,
};

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <>
      <StatisticTitle>{title}</StatisticTitle>

      <StatisticsList>
        {stats.map(item => (
          <StatisticItem
            key={item.id}
            total={item.total}
            title={item.title}
            icon={icons[item.id] ?? icons.default}
          />
        ))}
      </StatisticsList>
    </>
  );
};
