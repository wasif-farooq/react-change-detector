"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeDetector = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This is a change detector class
 */
var ChangeDetector =
/*#__PURE__*/
function (_Component) {
  _inherits(ChangeDetector, _Component);

  /**
   * @var[type="Map"]
   */

  /**
   * @var[type="Map"]
   */
  function ChangeDetector(props) {
    var _this;

    _classCallCheck(this, ChangeDetector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChangeDetector).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "oldValues", new Map());

    _defineProperty(_assertThisInitialized(_this), "newValues", new Map());

    typeof props.changeDetector === 'function' ? props.changeDetector(_assertThisInitialized(_this)) : false;
    return _this;
  }
  /**
   * @returns void
   */


  _createClass(ChangeDetector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          children = _this$props.children,
          changeDetector = _this$props.changeDetector,
          props = _objectWithoutProperties(_this$props, ["children", "changeDetector"]);

      var values = JSON.parse(JSON.stringify(props));

      for (var i in values) {
        this.oldValues.set(i, values[i]);
      }
    }
    /**
     * 
     * @param {*} nextProps 
     * @param {*} nextState 
     * @returns boolean
     */

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var children = nextProps.children,
          changeDetector = nextProps.changeDetector,
          props = _objectWithoutProperties(nextProps, ["children", "changeDetector"]);

      var values = JSON.parse(JSON.stringify(props));

      for (var i in values) {
        this.newValues.set(i, values[i]);
      }

      return true;
    }
    /**
     * @return void
     */

  }, {
    key: "reset",
    value: function reset() {
      this.oldValues = new Map(this.newValues);
    }
    /**
     * @returns boolean
     */

  }, {
    key: "isChangeDetected",
    value: function isChangeDetected() {
      if (this.oldValues.size !== this.newValues.size) {
        return true;
      }

      var changed = false;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.oldValues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              val = _step$value[1];

          if (!this.compare(val, this.newValues.get(key))) {
            changed = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return changed;
    }
    /**
     * @returns boolean
     */

  }, {
    key: "compare",
    value: function compare(val1, val2) {
      if (_typeof(val1) !== _typeof(val2)) {
        return false;
      }

      var check = false;

      if (val1 === null && val2 === null) {
        check = true;
        return check;
      }

      switch (_typeof(val1)) {
        case 'object':
          check = this.deepCompare(val1, val2);
          break;

        default:
          check = val1 === val2;
      }

      return check;
    }
    /**
     * @returns boolean
     */

  }, {
    key: "deepCompare",
    value: function deepCompare(val1, val2) {
      if (Object.keys(val1).length === 0 && Object.keys(val2).length === 0) {
        return true;
      }

      if (Object.keys(val1).length !== Object.keys(val2).length) {
        return false;
      }

      var check = false;

      for (var i in val1) {
        check = this.compare(val1[i], val2[i]);

        if (!check) {
          return check;
        }
      }

      return check;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, this.props.children);
    }
  }]);

  return ChangeDetector;
}(_react.Component);

exports.ChangeDetector = ChangeDetector;