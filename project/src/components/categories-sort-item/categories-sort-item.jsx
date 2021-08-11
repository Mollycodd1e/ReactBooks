import React from 'react';
import PropTypes from 'prop-types';

function CategoriesSortItem (props) {

  const {categoriesItem, isActive, onCategoriesChange} = props;

  const handleCategoriesChange = (evt) => {
    evt.preventDefault();
    onCategoriesChange(categoriesItem);
  };

  return (
    <li className={`categories__option ${isActive ? 'categories__option--active' : ''}`} tabIndex='0' onClick={handleCategoriesChange}>{categoriesItem}</li>
  );
}


CategoriesSortItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  categoriesItem: PropTypes.string.isRequired,
  onCategoriesChange: PropTypes.func.isRequired,
};

export default CategoriesSortItem;
