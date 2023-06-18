import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  ({ items }, filter) => {
    const normalizedFilter = filter.toLowerCase();
    if (filter === '') {
      return items.toSorted((a, b) => {
        return b.id - a.id;
      });
    }

    return items
      .filter(item => item.name.toLowerCase().includes(normalizedFilter))
      .toSorted((a, b) => {
        return b.id - a.id;
      });
  }
);
