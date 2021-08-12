import {CategoriesList, TypeList} from './const';

export const getSortedBooksByCategories = (activeCategories, books) => {
  if (activeCategories !== CategoriesList.ALL) {
    return books.filter((item) => {
      if (item.volumeInfo.categories !== undefined) {
        return (item.volumeInfo.categories.indexOf(activeCategories) !== -1);
      }
    });
  } else {
    return books;
  }
};

export const getSortedBooksByType = (activeType, books) => {
  switch (activeType) {
    case TypeList.AUTHOR:
      return books.slice().sort((a, b) => {
        if (b.volumeInfo.authors === undefined) {
          return -1;
        }
        if (a.volumeInfo.authors === undefined) {
          return 1;
        }

        return a.volumeInfo.authors[0].localeCompare(b.volumeInfo.authors[0]);
      });
    case TypeList.NEWEST:
      return books.sort((a, b) => {
        if (a.volumeInfo.publishedDate === undefined) {
          return 1;
        }
        if (b.volumeInfo.publishedDate === undefined) {
          return -1;
        }

        return b.volumeInfo.publishedDate.localeCompare(a.volumeInfo.publishedDate);
      });
    case TypeList.TITLE:
      return books.sort((a, b) => a.volumeInfo.title.localeCompare(b.volumeInfo.title));
    case TypeList.RELEVANCE:
    default:
      return books;
  }
};
