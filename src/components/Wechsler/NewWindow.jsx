// newWindowRenderer.js
import React from 'react';
import ReactDOM from 'react-dom';

const NewWindow = (Component, props) => {
  const newWindow = window.open('', '', 'width=600,height=400');
  newWindow.document.write('<div id="root"></div>');
  
  ReactDOM.render(<Component {...props} />, newWindow.document.getElementById('root'));

  newWindow.addEventListener('beforeunload', () => {
    ReactDOM.unmountComponentAtNode(newWindow.document.getElementById('root'));
  });
};

export default NewWindow;
