import { useDispatch } from 'react-redux';
import {
  TableRow,
  TableData,
  DeleteButton,
  DeleteIcon,
} from './Contact.styled';
import { deleteContact } from '../../redux/contacts/operations';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  return (
    <TableRow>
      <TableData> {name}</TableData>
      <TableData> {number}</TableData>
      <TableData>
        <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
          <DeleteIcon />
        </DeleteButton>
      </TableData>
    </TableRow>
  );
};
