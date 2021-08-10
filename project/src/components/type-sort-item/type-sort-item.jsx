import React from 'react';
import PropTypes from 'prop-types';

function TypeSortItem (props) {

  const {TypeItem, isActive} = props;

  return (
    <li className={`type__option ${isActive ? 'type__option--active' : ''}`} tabIndex='0'>{TypeItem}</li>
  );
}


TypeSortItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  TypeItem: PropTypes.string.isRequired,
};

export default TypeSortItem;
