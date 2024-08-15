"use client";
import React, { Children } from 'react'
import { Provider } from 'react-redux'

const ReduxProvider = () => {
  return (
    <Provider store={store}>
    {Children}
    </Provider>
  )
}

export default ReduxProvider