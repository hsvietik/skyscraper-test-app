import { SearchForm, SearchInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <SearchForm>
      <h2>Find contact by name</h2>
      <SearchInput
        name="search"
        type="text"
        onChange={evt =>
          dispatch(setFilter(evt.currentTarget.value.toLowerCase()))
        }
      />
    </SearchForm>
  );
};
