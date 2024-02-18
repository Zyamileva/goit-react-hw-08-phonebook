import React from 'react';
import { ListItem, IconButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contacts-operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <ListItemText>
        {name}: {number}
      </ListItemText>
      <IconButton
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
