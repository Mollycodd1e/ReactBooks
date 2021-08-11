import React, {useState} from 'react';
import TypeSortItem from '../type-sort-item/type-sort-item';
import {TypeList} from '../../const';
import {getType} from '../../store/changer/selector';
import {useDispatch, useSelector} from 'react-redux';
import { changeType } from '../../store/action';

function TypeSortList () {

  const dispatch = useDispatch();

  const activeType = useSelector(getType);

  const [isTypeListOpen, setIsTypeListOpen] = useState(false);

  const onTypeChange = (type) => (
    dispatch(changeType(type)),
    setIsTypeListOpen((prevState) => !prevState)
  );

  const handleTypeClick = () => {
    setIsTypeListOpen((prevState) => !prevState);
  };

  return (
    <form className="type__sorting" action="#" method="get">
      <span className="type__sorting-caption">Sorting by</span>
      <span className="type__sorting-type" tabIndex="0" onClick={handleTypeClick}>
        {activeType}
      </span>
      <ul className={`type__options type__options--custom ${isTypeListOpen ? 'type__options--opened' : 'type__options--closed'}`}>
        {Object.values(TypeList).map((item) =>
          <TypeSortItem key={item} typeItem={item} isActive={item === activeType} onTypeChange={onTypeChange}/>)}
      </ul>
    </form>
  );
}

export default TypeSortList;
