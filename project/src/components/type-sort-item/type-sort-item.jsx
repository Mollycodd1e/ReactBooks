import React from 'react';
import PropTypes from 'prop-types';

function TypeSortItem (props) {

  const {typeItem, isActive, onTypeChange} = props;

  const handleTypeChange = (evt) => {
    evt.preventDefault();
    onTypeChange(typeItem);
  };

  return (
    <li className={`type__option ${isActive ? 'type__option--active' : ''}`} tabIndex='0' onClick={handleTypeChange}>{typeItem}</li>
  );
}

TypeSortItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  typeItem: PropTypes.string.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

export default TypeSortItem;
