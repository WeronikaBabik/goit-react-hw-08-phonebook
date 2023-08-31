import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch(setFilter);

  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <label>
      Find contacts by name
      <input type="text" name="name" onChange={onChange} />
    </label>
  );
};

export default Filter;
