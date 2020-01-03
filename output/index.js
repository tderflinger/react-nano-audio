(function (React, ReactDOM) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  const img = 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYmkgYmktcGxheSIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjgwNCAxMEw3IDYuNjMzdjYuNzM0TDEyLjgwNCAxMHptLjc5Mi0uNjk2YS44MDIuODAyIDAgMDEwIDEuMzkybC02LjM2MyAzLjY5MkM2LjcxMyAxNC42OSA2IDE0LjM0NSA2IDEzLjY5MlY2LjMwOGMwLS42NTMuNzEzLS45OTggMS4yMzMtLjY5Nmw2LjM2MyAzLjY5MnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=';

  function Audio() {
    return React.createElement('div', null, ["AudioXXY", React.createElement('img', {
      src: img,
      "with": "16px",
      height: "16px"
    })]);
  }

  ReactDOM.render(Audio(), document.getElementById("root"));

}(React, ReactDOM));
