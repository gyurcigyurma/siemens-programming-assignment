import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchField from '@/components/SearchField';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import commentsReducer, { setFilterText } from '@/store/comments.slice';

jest.useFakeTimers();

test('searchfiled has correct placeholder value', () => {
  const store = configureStore({
    reducer: {
      comments: commentsReducer,
    },
  });

  render(
    <Provider store={store}>
      <SearchField />
    </Provider>
  );

  const inputNode = screen.getByPlaceholderText(
    'Filter comments...'
  ) as HTMLInputElement;

  expect(inputNode.placeholder).toBe('Filter comments...');
});

test('updates search term as user types in', () => {
  const store = configureStore({
    reducer: {
      comments: commentsReducer,
    },
  });

  render(
    <Provider store={store}>
      <SearchField />
    </Provider>
  );

  const inputNode = screen.getByPlaceholderText(
    'Filter comments...'
  ) as HTMLInputElement;

  fireEvent.change(inputNode, { target: { value: 'test' } });

  expect(inputNode.value).toBe('test');
});

test('dispatches setFilter action as user types in', () => {
  const testtext = 'testing';
  const store = configureStore({
    reducer: {
      comments: commentsReducer,
    },
  });

  const dispatchSpy = jest.spyOn(store, 'dispatch');

  render(
    <Provider store={store}>
      <SearchField />
    </Provider>
  );

  const inputNode = screen.getByPlaceholderText(
    'Filter comments...'
  ) as HTMLInputElement;

  userEvent.type(inputNode, testtext);
  fireEvent.change(inputNode, { target: { value: testtext } });
  jest.runAllTimers();

  expect(dispatchSpy).toHaveBeenCalledWith(setFilterText(testtext));
});
