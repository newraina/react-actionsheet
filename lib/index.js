var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import './index.css';

import React from 'react';

function noop() {}

var Actionsheet = function (_React$Component) {
  _inherits(Actionsheet, _React$Component);

  function Actionsheet() {
    _classCallCheck(this, Actionsheet);

    return _possibleConstructorReturn(this, (Actionsheet.__proto__ || Object.getPrototypeOf(Actionsheet)).apply(this, arguments));
  }

  _createClass(Actionsheet, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onRequestClose = _props.onRequestClose,
          onCancel = _props.onCancel,
          cancelText = _props.cancelText,
          menus = _props.menus,
          show = _props.show;


      return React.createElement(
        'div',
        { className: 'react-actionsheet' + (show ? ' react-actionsheet-show' : ''),
          onClick: onRequestClose },
        React.createElement('div', { className: 'react-actionsheet-mask' }),
        React.createElement(
          'div',
          { className: 'react-actionsheet-wrap' },
          React.createElement(
            'div',
            { className: 'react-actionsheet-menu' },
            menus.map(function (menu, i) {
              var content = menu.content,
                  _menu$onClick = menu.onClick,
                  onClick = _menu$onClick === undefined ? noop : _menu$onClick;

              return React.createElement(
                'div',
                { key: i, className: 'react-actionsheet-menu-item', onClick: onClick },
                content
              );
            })
          ),
          React.createElement(
            'div',
            { className: 'react-actionsheet-action' },
            React.createElement(
              'div',
              { className: 'react-actionsheet-action-item', onClick: onCancel },
              cancelText
            )
          )
        )
      );
    }
  }]);

  return Actionsheet;
}(React.Component);

// compiled bundle ignores "export default" values and exports empty object!!
// export default Actionsheet


Actionsheet.defaultProps = {
  onRequestClose: noop,
  onCancel: noop,
  cancelText: '取消',
  show: false,
  menus: []
};
export default Actionsheet;
