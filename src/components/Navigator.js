import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Navigator = () => {
  const typeOfPosts = useSelector(state => state.posts);

  //Get Li Tags from Data
  const getLiTags = () => {
    const result = [];
    for (let prop in typeOfPosts) {
      prop = prop[0].toUpperCase() + prop.slice(1);
      result.push(
        <li
          key={uuidv4()}
          className="border-b border-black hover:text-slate-400 hover:border-slate-400"
        >
          {prop}
        </li>
      );
    }
    return result;
  };

  return (
    <nav className="flex h-12 bg-slate-100 justify-between items-center border-b">
      <div className="w-2/3 text-center font-bold text-lg">Blog</div>
      <ul className="flex gap-5 w-1/3 justify-center">{getLiTags()}</ul>
    </nav>
  );
};

export default Navigator;
