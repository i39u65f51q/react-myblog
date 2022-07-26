import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

const SelectType = ({ selectPost, selectType, getSelectType }) => {
  const posts = useSelector(state => state.posts);

  const types = posts[selectPost];

  const getOptions = () => {
    const counter = {};
    const result = [];

    //Get the unique types
    for (let i = 0; i < types.length; i++) {
      if (!counter[types[i].type]) {
        counter[types[i].type] = 1;
      } else {
        counter[types[i].type]++;
      }
    }
    for (let prop in counter) {
      result.push(
        <option value={prop} key={uuidv4()}>
          {prop}
        </option>
      );
    }
    return result;
  };

  return (
    <select
      name="type"
      id="type"
      className="border rounded border-black w-28 px-1"
      value={selectType}
      onChange={e => getSelectType(e.target.value)}
    >
      {getOptions()}
    </select>
  );
};

export default SelectType;
