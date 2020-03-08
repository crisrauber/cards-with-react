import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';

import {
  Title,
  SendButton,
  MyInput,
  Card,
  DeleteButton,
  UpdateButton,
} from '../views/Main/styles';

function PersonItem({ id, title, content, onDelete }) {
  return (
    <ul key={id}>
      <Title>{title}</Title>
      <span>{content}</span>
      <br />
      <br />
      <UpdateButton>Editar</UpdateButton>
      <DeleteButton onClick={onDelete} type="button" startIcon={<DeleteIcon />}>
        Remover
      </DeleteButton>
    </ul>
  );
}

// PersonItem.defaultProps = {
//   person: 'No person found.',
// };

PersonItem.propTypes = {
  person: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PersonItem;
