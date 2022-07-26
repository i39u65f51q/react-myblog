import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

const SelectPost = ({ getSelectPostValue, selectPost }) => {
  const posts = useSelector(state => state.posts);

  const getOption = () => {
    const result = [];
    for (let prop in posts) {
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
      name="post"
      id="post"
      value={selectPost}
      className="border border-black rounded w-28 px-1"
      onChange={e => getSelectPostValue(e.target.value)}
    >
      {getOption()}
    </select>
  );
};
export default SelectPost;
