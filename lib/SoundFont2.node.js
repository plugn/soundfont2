module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/chunk.ts":
/*!**********************!*\
  !*** ./src/chunk.ts ***!
  \**********************/
/*! exports provided: SF2Chunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SF2Chunk", function() { return SF2Chunk; });
/* harmony import */ var _riff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./riff */ "./src/riff/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _chunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunks */ "./src/chunks/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SF2Chunk = /*#__PURE__*/function (_RIFFChunk) {
  _inherits(SF2Chunk, _RIFFChunk);

  var _super = _createSuper(SF2Chunk);

  /**
   * All sub-chunks of this `SF2Chunk` as `SF2Chunk`.
   */
  function SF2Chunk(chunk) {
    var _this;

    _classCallCheck(this, SF2Chunk);

    _this = _super.call(this, chunk.id, chunk.length, chunk.buffer, chunk.subChunks);

    _defineProperty(_assertThisInitialized(_this), "subChunks", void 0);

    _this.subChunks = chunk.subChunks.map(function (subChunk) {
      return new SF2Chunk(subChunk);
    });
    return _this;
  }
  /**
   * Get meta data from the chunk. This assumes the chunk is a LIST chunk, containing INFO
   * sub-chunks.
   */


  _createClass(SF2Chunk, [{
    key: "getMetaData",
    value: function getMetaData() {
      if (this.id !== 'LIST') {
        throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]('Unexpected chunk ID', "'LIST'", "'".concat(this.id, "'"));
      }

      var info = this.subChunks.reduce(function (target, chunk) {
        if (chunk.id === 'ifil' || chunk.id === 'iver') {
          // ifil and iver length must be 4 bytes
          if (chunk.length !== _constants__WEBPACK_IMPORTED_MODULE_1__["SF_VERSION_LENGTH"]) {
            throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]("Invalid size for the '".concat(chunk.id, "' sub-chunk"));
          }

          target[chunk.id] = "".concat(chunk.getInt16(), ".").concat(chunk.getInt16(2));
        } else {
          target[chunk.id] = chunk.getString();
        }

        return target;
      }, {});

      if (!info.ifil) {
        throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]("Missing required 'ifil' sub-chunk");
      }

      if (!info.INAM) {
        throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]("Missing required 'INAM' sub-chunk");
      }

      return {
        version: info.ifil,
        soundEngine: info.isng || 'EMU8000',
        name: info.INAM,
        rom: info.irom,
        romVersion: info.iver,
        creationDate: info.ICRD,
        author: info.IENG,
        product: info.IPRD,
        copyright: info.ICOP,
        comments: info.ICMT,
        createdBy: info.ISFT
      };
    }
    /**
     * Get the sample data as a unsigned 8-bit buffer from the chunk. This assumes the chunk is a
     * LIST chunk containing a smpl sub-chunk.
     */

  }, {
    key: "getSampleData",
    value: function getSampleData() {
      if (this.id !== 'LIST') {
        throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]('Unexpected chunk ID', "'LIST'", "'".concat(this.id, "'"));
      }

      var sampleChunk = this.subChunks[0];

      if (sampleChunk.id !== 'smpl') {
        throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]('Invalid chunk signature', "'smpl'", "'".concat(sampleChunk.id, "'"));
      }

      return sampleChunk.buffer;
    }
    /**
     * Get the preset data from the chunk. This assumes the chunk is a LIST chunk containing the
     * preset data sub-chunks.
     */

  }, {
    key: "getPresetData",
    value: function getPresetData() {
      if (this.id !== 'LIST') {
        throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]('Unexpected chunk ID', "'LIST'", "'".concat(this.id, "'"));
      }

      return {
        presetHeaders: Object(_chunks__WEBPACK_IMPORTED_MODULE_2__["getPresetHeaders"])(this.subChunks[0]),
        presetZones: Object(_chunks__WEBPACK_IMPORTED_MODULE_2__["getZones"])(this.subChunks[1], 'pbag'),
        presetModulators: Object(_chunks__WEBPACK_IMPORTED_MODULE_2__["getModulators"])(this.subChunks[2], 'pmod'),
        presetGenerators: Object(_chunks__WEBPACK_IMPORTED_MODULE_2__["getGenerators"])(this.subChunks[3], 'pgen'),
        instrumentHeaders: Object(_chunks__WEBPACK_IMPORTED_MODULE_2__["getInstrumentHeaders"])(this.subChunks[4]),
        instrumentZones: Object(_chunks__WEBPACK_IMPORTED_MODULE_2__["getZones"])(this.subChunks[5], 'ibag'),
        instrumentModulators: Object(_chunks__WEBPACK_IMPORTED_MODULE_2__["getModulators"])(this.subChunks[6], 'imod'),
        instrumentGenerators: Object(_chunks__WEBPACK_IMPORTED_MODULE_2__["getGenerators"])(this.subChunks[7], 'igen'),
        sampleHeaders: Object(_chunks__WEBPACK_IMPORTED_MODULE_2__["getSampleHeaders"])(this.subChunks[8])
      };
    }
  }]);

  return SF2Chunk;
}(_riff__WEBPACK_IMPORTED_MODULE_0__["RIFFChunk"]);

/***/ }),

/***/ "./src/chunks/generators.ts":
/*!**********************************!*\
  !*** ./src/chunks/generators.ts ***!
  \**********************************/
/*! exports provided: getGenerators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenerators", function() { return getGenerators; });
/* harmony import */ var _riff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/riff */ "./src/riff/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/types */ "./src/types/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/constants */ "./src/constants.ts");



/**
 * An array of GeneratorTypes that cannot be specified for presets. If one of these generator types
 * is found, the generator should be ignored.
 */

var PRESET_TYPES_BLACKLIST = [_types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].StartAddrsOffset, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].EndAddrsOffset, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].StartLoopAddrsOffset, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].EndLoopAddrsOffset, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].StartAddrsCoarseOffset, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].EndAddrsCoarseOffset, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].StartLoopAddrsCoarseOffset, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].KeyNum, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].Velocity, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].EndLoopAddrsCoarseOffset, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].SampleModes, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].ExclusiveClass, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].OverridingRootKey];
/**
 * An array of GeneratorTypes that cannot be specified for instruments. If one of these generator
 * types is found, the generator should be ignored.
 */

var INSTRUMENT_TYPES_BLACKLIST = [_types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].Unused1, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].Unused2, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].Unused3, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].Unused4, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].Reserved1, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].Reserved2, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].Reserved3];
/**
 * These GeneratorTypes specify a range of key numbers or velocity.
 */

var RANGE_TYPES = [_types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].KeyRange, _types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"].VelRange];
/**
 * Get all generators for either an preset generator chunk or a instrument generator chunk.
 *
 * TODO: Check if generator chunk is valid, by following the rules defined in the spec. See for
 * example: https://github.com/FluidSynth/fluidsynth/blob/v2.0.3/src/sfloader/fluid_sffile.c
 *
 * @param {SF2Chunk} chunk - The input chunk
 * @param {string} type - The type, can be 'pgen' or 'igen'
 */

var getGenerators = function getGenerators(chunk, type) {
  if (chunk.id !== type) {
    throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]('Unexpected chunk ID', "'".concat(type, "'"), "'".concat(chunk.id, "'"));
  }

  if (chunk.length % _constants__WEBPACK_IMPORTED_MODULE_2__["SF_GENERATOR_SIZE"]) {
    throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]("Invalid size for the '".concat(type, "' sub-chunk"));
  }

  return chunk.iterate(function (iterator) {
    var id = iterator.getInt16(); // Ignore invalid IDs

    if (!_types__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"][id]) {
      return null;
    }

    if (type === 'pgen' && PRESET_TYPES_BLACKLIST.includes(id)) {
      return null;
    }

    if (type === 'igen' && INSTRUMENT_TYPES_BLACKLIST.includes(id)) {
      return null;
    }

    if (RANGE_TYPES.includes(id)) {
      return {
        id: id,
        range: {
          lo: iterator.getByte(),
          hi: iterator.getByte()
        }
      };
    }

    return {
      id: id,
      amount: iterator.getInt16BE()
    };
  });
};

/***/ }),

/***/ "./src/chunks/index.ts":
/*!*****************************!*\
  !*** ./src/chunks/index.ts ***!
  \*****************************/
/*! exports provided: getInstrumentHeaders, getPresetHeaders, getSampleHeaders, getGenerators, getModulators, getZones, getItemsInZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _instruments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instruments */ "./src/chunks/instruments/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstrumentHeaders", function() { return _instruments__WEBPACK_IMPORTED_MODULE_0__["getInstrumentHeaders"]; });

/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presets */ "./src/chunks/presets/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPresetHeaders", function() { return _presets__WEBPACK_IMPORTED_MODULE_1__["getPresetHeaders"]; });

/* harmony import */ var _samples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./samples */ "./src/chunks/samples/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSampleHeaders", function() { return _samples__WEBPACK_IMPORTED_MODULE_2__["getSampleHeaders"]; });

/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generators */ "./src/chunks/generators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGenerators", function() { return _generators__WEBPACK_IMPORTED_MODULE_3__["getGenerators"]; });

/* harmony import */ var _modulators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulators */ "./src/chunks/modulators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModulators", function() { return _modulators__WEBPACK_IMPORTED_MODULE_4__["getModulators"]; });

/* harmony import */ var _zones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zones */ "./src/chunks/zones.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getZones", function() { return _zones__WEBPACK_IMPORTED_MODULE_5__["getZones"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getItemsInZone", function() { return _zones__WEBPACK_IMPORTED_MODULE_5__["getItemsInZone"]; });








/***/ }),

/***/ "./src/chunks/instruments/headers.ts":
/*!*******************************************!*\
  !*** ./src/chunks/instruments/headers.ts ***!
  \*******************************************/
/*! exports provided: getInstrumentHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstrumentHeaders", function() { return getInstrumentHeaders; });
/* harmony import */ var _riff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/riff */ "./src/riff/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/constants */ "./src/constants.ts");



/**
 * Get all instrument headers from a `inst` sub-chunk.
 *
 * @param {SF2Chunk} chunk - The input chunk
 */
var getInstrumentHeaders = function getInstrumentHeaders(chunk) {
  if (chunk.id !== 'inst') {
    throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]('Unexpected chunk ID', "'inst'", "'".concat(chunk.id, "'"));
  }

  if (chunk.length % _constants__WEBPACK_IMPORTED_MODULE_1__["SF_INSTRUMENT_HEADER_SIZE"]) {
    throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]("Invalid size for the 'inst' sub-chunk");
  }

  return chunk.iterate(function (iterator) {
    return {
      name: iterator.getString(),
      bagIndex: iterator.getInt16()
    };
  });
};

/***/ }),

/***/ "./src/chunks/instruments/index.ts":
/*!*****************************************!*\
  !*** ./src/chunks/instruments/index.ts ***!
  \*****************************************/
/*! exports provided: getInstrumentHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headers */ "./src/chunks/instruments/headers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstrumentHeaders", function() { return _headers__WEBPACK_IMPORTED_MODULE_0__["getInstrumentHeaders"]; });



/***/ }),

/***/ "./src/chunks/modulators.ts":
/*!**********************************!*\
  !*** ./src/chunks/modulators.ts ***!
  \**********************************/
/*! exports provided: getModulators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModulators", function() { return getModulators; });
/* harmony import */ var _riff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/riff */ "./src/riff/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/constants */ "./src/constants.ts");


/**
 * Get the modulator enumerator value from a 16-bit integer.
 *
 * @param {number} value - The 16-bit integer
 */

var getModulatorValue = function getModulatorValue(value) {
  return {
    type: value >> 10 & 0x3f,
    polarity: value >> 9 & 1,
    direction: value >> 8 & 1,
    palette: value >> 7 & 1,
    index: value & 0x7f
  };
};
/**
 * Get the modulators from either a `pmod` (presets) or `imod` (instruments) chunk.
 *
 * @param {SF2Chunk} chunk - The input chunk
 * @param {string} type - The type of chunk, either 'pmod' or 'imod'
 */


var getModulators = function getModulators(chunk, type) {
  if (chunk.id !== type) {
    throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]('Unexpected chunk ID', "'".concat(type, "'"), "'".concat(chunk.id, "'"));
  }

  if (chunk.length % _constants__WEBPACK_IMPORTED_MODULE_1__["SF_MODULATOR_SIZE"]) {
    throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]("Invalid size for the '".concat(type, "' sub-chunk"));
  }

  return chunk.iterate(function (iterator) {
    return {
      source: getModulatorValue(iterator.getInt16BE()),
      id: iterator.getInt16BE(),
      value: iterator.getInt16BE(),
      valueSource: getModulatorValue(iterator.getInt16BE()),
      transform: iterator.getInt16BE()
    };
  });
};

/***/ }),

/***/ "./src/chunks/presets/headers.ts":
/*!***************************************!*\
  !*** ./src/chunks/presets/headers.ts ***!
  \***************************************/
/*! exports provided: getPresetHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPresetHeaders", function() { return getPresetHeaders; });
/* harmony import */ var _riff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/riff */ "./src/riff/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/constants */ "./src/constants.ts");



/**
 * Get all preset headers from a `phdr` sub-chunk.
 *
 * @param {SF2Chunk} chunk - The input chunk
 */
var getPresetHeaders = function getPresetHeaders(chunk) {
  if (chunk.id !== 'phdr') {
    throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]('Invalid chunk ID', "'phdr'", "'".concat(chunk.id, "'"));
  }

  if (chunk.length % _constants__WEBPACK_IMPORTED_MODULE_1__["SF_PRESET_HEADER_SIZE"]) {
    throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]("Invalid size for the 'phdr' sub-chunk");
  }

  return chunk.iterate(function (iterator) {
    return {
      name: iterator.getString(),
      preset: iterator.getInt16(),
      bank: iterator.getInt16(),
      bagIndex: iterator.getInt16(),
      library: iterator.getUInt32(),
      genre: iterator.getUInt32(),
      morphology: iterator.getUInt32()
    };
  });
};

/***/ }),

/***/ "./src/chunks/presets/index.ts":
/*!*************************************!*\
  !*** ./src/chunks/presets/index.ts ***!
  \*************************************/
/*! exports provided: getPresetHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headers */ "./src/chunks/presets/headers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPresetHeaders", function() { return _headers__WEBPACK_IMPORTED_MODULE_0__["getPresetHeaders"]; });



/***/ }),

/***/ "./src/chunks/samples/headers.ts":
/*!***************************************!*\
  !*** ./src/chunks/samples/headers.ts ***!
  \***************************************/
/*! exports provided: getSampleHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSampleHeaders", function() { return getSampleHeaders; });
/* harmony import */ var _riff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/riff */ "./src/riff/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/constants */ "./src/constants.ts");



/**
 * Get all sample headers from a `shdr` sub-chunk.
 *
 * @param {SF2Chunk} chunk - The input chunk
 */
var getSampleHeaders = function getSampleHeaders(chunk) {
  if (chunk.id !== 'shdr') {
    throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]('Unexpected chunk ID', "'shdr'", "'".concat(chunk.id, "'"));
  }

  if (chunk.length % _constants__WEBPACK_IMPORTED_MODULE_1__["SF_SAMPLE_HEADER_SIZE"]) {
    throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]("Invalid size for the 'shdr' sub-chunk");
  }

  return chunk.iterate(function (iterator) {
    return {
      name: iterator.getString(),
      start: iterator.getUInt32(),
      end: iterator.getUInt32(),
      startLoop: iterator.getUInt32(),
      endLoop: iterator.getUInt32(),
      sampleRate: iterator.getUInt32(),
      originalPitch: iterator.getByte(),
      pitchCorrection: iterator.getChar(),
      link: iterator.getInt16(),
      type: iterator.getInt16()
    };
  });
};

/***/ }),

/***/ "./src/chunks/samples/index.ts":
/*!*************************************!*\
  !*** ./src/chunks/samples/index.ts ***!
  \*************************************/
/*! exports provided: getSampleHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headers */ "./src/chunks/samples/headers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSampleHeaders", function() { return _headers__WEBPACK_IMPORTED_MODULE_0__["getSampleHeaders"]; });



/***/ }),

/***/ "./src/chunks/zones.ts":
/*!*****************************!*\
  !*** ./src/chunks/zones.ts ***!
  \*****************************/
/*! exports provided: getZones, getItemsInZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZones", function() { return getZones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsInZone", function() { return getItemsInZone; });
/* harmony import */ var _riff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/riff */ "./src/riff/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/constants */ "./src/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/types */ "./src/types/index.ts");



/**
 * Get the preset or instrument zones from a chunk.
 *
 * @param {SF2Chunk} chunk - The input chunk
 * @param {string} type - The type of chunk ('pbag' or 'ibag')
 */

var getZones = function getZones(chunk, type) {
  if (chunk.id !== type) {
    throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]('Unexpected chunk ID', "'".concat(type, "'"), "'".concat(chunk.id, "'"));
  }

  if (chunk.length % _constants__WEBPACK_IMPORTED_MODULE_1__["SF_BAG_SIZE"]) {
    throw new _riff__WEBPACK_IMPORTED_MODULE_0__["ParseError"]("Invalid size for the '".concat(type, "' sub-chunk"));
  }

  return chunk.iterate(function (iterator) {
    return {
      generatorIndex: iterator.getInt16(),
      modulatorIndex: iterator.getInt16()
    };
  });
};
/**
 * Get all modulators, generators and the instrument (for presets) or sample (for instruments) in a
 * preset or instrument.
 *
 * @template T
 * @template R
 * @param {T} headers - The preset or instrument headers
 * @param {Zone[]} zones - All zones for the preset or instrument
 * @param {Modulator[]} itemModulators - All modulators for the preset or instrument
 * @param {Generator[]} itemGenerators - All generators for the preset or instrument
 * @param {R[]} references - The instruments or samples to reference in the zone
 * @param {GeneratorType} referenceType - The generator type to reference it by
 */

var getItemsInZone = function getItemsInZone(headers, zones, itemModulators, itemGenerators, references, referenceType) {
  var items = [];

  for (var i = 0; i < headers.length; i++) {
    var header = headers[i];
    var next = headers[i + 1];
    var start = header.bagIndex;
    var end = next ? next.bagIndex : zones.length;
    var zoneItems = [];

    for (var j = start; j < end; j++) {
      var modulators = getModulators(j, zones, itemModulators);
      var generators = getGenerators(j, zones, itemGenerators);
      var keyRange = generators[_types__WEBPACK_IMPORTED_MODULE_2__["GeneratorType"].KeyRange] && generators[_types__WEBPACK_IMPORTED_MODULE_2__["GeneratorType"].KeyRange].range;
      var referenceId = generators[referenceType];

      if (!referenceId) {
        continue;
      }

      var reference = references[referenceId.value];

      if (!reference) {
        continue;
      }

      zoneItems.push({
        keyRange: keyRange,
        modulators: modulators,
        generators: generators,
        reference: reference
      });
    }

    items.push({
      header: header,
      zones: zoneItems
    });
  }

  return items;
};
/**
 * Get all modulators from a zone, based on the index. The end index is the modulator index of the
 * next zone, or the total zone length if the current zone is the last one.
 *
 * @param {number} index - The index
 * @param {Zone[]} zones - ALl zones for the preset or instrument
 * @param {Modulator[]} modulators - All modulators for the preset or instrument
 */

var getModulators = function getModulators(index, zones, modulators) {
  var zone = zones[index];
  var next = zones[index + 1];
  var start = zone.modulatorIndex;
  var end = next ? next.modulatorIndex : zones.length;
  return getZone(start, end, modulators);
};
/**
 * Get all generators from a zone, based on the index. The end index is the generators index of the
 * next zone, or the total zone length if the current zone is the last one.
 *
 * @param {number} index - The index
 * @param {Zone[]} zones - ALl zones for the preset or instrument
 * @param {Generator[]} generators - All generators for the preset or instrument
 */


var getGenerators = function getGenerators(index, zones, generators) {
  var zone = zones[index];
  var next = zones[index + 1];
  var start = zone.generatorIndex;
  var end = next ? next.generatorIndex : zones.length;
  return getZone(start, end, generators);
};
/**
 * Returns all modulators or generators as a key-value object, where the key is the `GeneratorType`
 * of the modulator or generator.
 *
 * @template T
 * @param {number} start - The start index
 * @param {number} end - The end index
 * @param {T[]} items - The modulators or generators
 */


var getZone = function getZone(start, end, items) {
  var itemsObject = {};

  for (var i = start; i < end; i++) {
    var item = items[i];

    if (item) {
      itemsObject[item.id] = item;
    }
  }

  return itemsObject;
};

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: SF_VERSION_LENGTH, SF_PRESET_HEADER_SIZE, SF_BAG_SIZE, SF_MODULATOR_SIZE, SF_GENERATOR_SIZE, SF_INSTRUMENT_HEADER_SIZE, SF_SAMPLE_HEADER_SIZE, DEFAULT_SAMPLE_RATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SF_VERSION_LENGTH", function() { return SF_VERSION_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SF_PRESET_HEADER_SIZE", function() { return SF_PRESET_HEADER_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SF_BAG_SIZE", function() { return SF_BAG_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SF_MODULATOR_SIZE", function() { return SF_MODULATOR_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SF_GENERATOR_SIZE", function() { return SF_GENERATOR_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SF_INSTRUMENT_HEADER_SIZE", function() { return SF_INSTRUMENT_HEADER_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SF_SAMPLE_HEADER_SIZE", function() { return SF_SAMPLE_HEADER_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SAMPLE_RATE", function() { return DEFAULT_SAMPLE_RATE; });
var SF_VERSION_LENGTH = 4;
var SF_PRESET_HEADER_SIZE = 38;
var SF_BAG_SIZE = 4;
var SF_MODULATOR_SIZE = 10;
var SF_GENERATOR_SIZE = 4;
var SF_INSTRUMENT_HEADER_SIZE = 22;
var SF_SAMPLE_HEADER_SIZE = 46;
var DEFAULT_SAMPLE_RATE = 22050;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/types/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk */ "./src/chunk.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SF2Chunk", function() { return _chunk__WEBPACK_IMPORTED_MODULE_1__["SF2Chunk"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SF_VERSION_LENGTH", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["SF_VERSION_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SF_PRESET_HEADER_SIZE", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["SF_PRESET_HEADER_SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SF_BAG_SIZE", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["SF_BAG_SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SF_MODULATOR_SIZE", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["SF_MODULATOR_SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SF_GENERATOR_SIZE", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["SF_GENERATOR_SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SF_INSTRUMENT_HEADER_SIZE", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["SF_INSTRUMENT_HEADER_SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SF_SAMPLE_HEADER_SIZE", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["SF_SAMPLE_HEADER_SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SAMPLE_RATE", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_SAMPLE_RATE"]; });

/* harmony import */ var _soundFont2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./soundFont2 */ "./src/soundFont2.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundFont2", function() { return _soundFont2__WEBPACK_IMPORTED_MODULE_3__["SoundFont2"]; });






/***/ }),

/***/ "./src/riff/chunkIterator.ts":
/*!***********************************!*\
  !*** ./src/riff/chunkIterator.ts ***!
  \***********************************/
/*! exports provided: ChunkIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChunkIterator", function() { return ChunkIterator; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils */ "./src/utils/index.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * A utility class to quickly iterate over a buffer.
 */

var ChunkIterator = /*#__PURE__*/function () {
  function ChunkIterator(chunk) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, ChunkIterator);

    _defineProperty(this, "target", []);

    _defineProperty(this, "chunk", void 0);

    _defineProperty(this, "position", 0);

    this.chunk = chunk;
    this.position = start;
  }
  /**
   * Get the position from the iterator.
   */


  _createClass(ChunkIterator, [{
    key: "iterate",

    /**
     * Iterate over the chunk.
     *
     * @param {Function} callback - The callback that is called every iteration
     */
    value: function iterate(callback) {
      while (this.position < this.chunk.length) {
        var object = callback(this);

        if (object) {
          this.target.push(object);
        }
      }
    }
    /**
     * Get a string from the buffer.
     *
     * @param {number} length - The length of the string. If no length is specified, a default of 20
     *   is assumed
     */

  }, {
    key: "getString",
    value: function getString() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      var text = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getStringFromBuffer"])(this.getBuffer(this.position, length));
      this.position += length;
      return text;
    }
    /**
     * Get a signed 16-bit integer from the chunk.
     */

  }, {
    key: "getInt16",
    value: function getInt16() {
      return this.chunk.buffer[this.position++] | this.chunk.buffer[this.position++] << 8;
    }
    /**
     * Get a signed 16-bit integer from the chunk in the big-endian format.
     */

  }, {
    key: "getInt16BE",
    value: function getInt16BE() {
      return this.getInt16() << 16 >> 16;
    }
    /**
     * Get an unsigned 32-bit integer from the chunk.
     */

  }, {
    key: "getUInt32",
    value: function getUInt32() {
      return (this.chunk.buffer[this.position++] | this.chunk.buffer[this.position++] << 8 | this.chunk.buffer[this.position++] << 16 | this.chunk.buffer[this.position++] << 24) >>> 0;
    }
    /**
     * Get a single byte from the chunk.
     */

  }, {
    key: "getByte",
    value: function getByte() {
      return this.chunk.buffer[this.position++];
    }
    /**
     * Get a signed char from the chunk.
     */

  }, {
    key: "getChar",
    value: function getChar() {
      return this.chunk.buffer[this.position++] << 24 >> 24;
    }
    /**
     * Skip ahead in the buffer.
     *
     * @param {number} length
     */

  }, {
    key: "skip",
    value: function skip(length) {
      this.position += length;
    }
    /**
     * Get a part of the buffer from start to start + length.
     *
     * @param {number} start
     * @param {number} length
     */

  }, {
    key: "getBuffer",
    value: function getBuffer(start, length) {
      return this.chunk.buffer.subarray(start, start + length);
    }
  }, {
    key: "currentPosition",
    get: function get() {
      return this.position;
    }
  }]);

  return ChunkIterator;
}();

/***/ }),

/***/ "./src/riff/index.ts":
/*!***************************!*\
  !*** ./src/riff/index.ts ***!
  \***************************/
/*! exports provided: ChunkIterator, ParseError, parseBuffer, getChunk, getChunkLength, getSubChunks, getChunkId, RIFFChunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunkIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunkIterator */ "./src/riff/chunkIterator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChunkIterator", function() { return _chunkIterator__WEBPACK_IMPORTED_MODULE_0__["ChunkIterator"]; });

/* harmony import */ var _parseError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseError */ "./src/riff/parseError.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParseError", function() { return _parseError__WEBPACK_IMPORTED_MODULE_1__["ParseError"]; });

/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./src/riff/parser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseBuffer", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["parseBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChunk", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["getChunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChunkLength", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["getChunkLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSubChunks", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["getSubChunks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChunkId", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["getChunkId"]; });

/* harmony import */ var _riffChunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./riffChunk */ "./src/riff/riffChunk.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RIFFChunk", function() { return _riffChunk__WEBPACK_IMPORTED_MODULE_3__["RIFFChunk"]; });






/***/ }),

/***/ "./src/riff/parseError.ts":
/*!********************************!*\
  !*** ./src/riff/parseError.ts ***!
  \********************************/
/*! exports provided: ParseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseError", function() { return ParseError; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Error class used for all errors encountered during the parsing of the SoundFont 2 file.
 */
var ParseError = /*#__PURE__*/function (_Error) {
  _inherits(ParseError, _Error);

  var _super = _createSuper(ParseError);

  function ParseError(message, expected, received) {
    _classCallCheck(this, ParseError);

    return _super.call(this, "".concat(message).concat(expected && received ? ", expected ".concat(expected, ", received ").concat(received) : ""));
  }

  return ParseError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ "./src/riff/parser.ts":
/*!****************************!*\
  !*** ./src/riff/parser.ts ***!
  \****************************/
/*! exports provided: parseBuffer, getChunk, getChunkLength, getSubChunks, getChunkId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBuffer", function() { return parseBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChunk", function() { return getChunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChunkLength", function() { return getChunkLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubChunks", function() { return getSubChunks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChunkId", function() { return getChunkId; });
/* harmony import */ var _parseError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseError */ "./src/riff/parseError.ts");
/* harmony import */ var _utils_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils/buffer */ "./src/utils/buffer.ts");
/* harmony import */ var _riffChunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./riffChunk */ "./src/riff/riffChunk.ts");



/**
 * Attempts to parse a RIFF file from a raw buffer.
 *
 * @param {Uint8Array} buffer - The input buffer
 */

var parseBuffer = function parseBuffer(buffer) {
  var id = getChunkId(buffer);

  if (id !== 'RIFF') {
    throw new _parseError__WEBPACK_IMPORTED_MODULE_0__["ParseError"]('Invalid file format', 'RIFF', id);
  }

  var signature = getChunkId(buffer, 8);

  if (signature !== 'sfbk') {
    throw new _parseError__WEBPACK_IMPORTED_MODULE_0__["ParseError"]('Invalid signature', 'sfbk', signature);
  }

  var newBuffer = buffer.subarray(8);
  var subChunks = getSubChunks(newBuffer.subarray(4));
  return new _riffChunk__WEBPACK_IMPORTED_MODULE_2__["RIFFChunk"](id, newBuffer.length, newBuffer, subChunks);
};
/**
 * Get a RIFF chunk from a buffer.
 *
 * @param {Buffer} buffer - The input buffer
 * @param {number} start - Where to start reading the buffer
 */

var getChunk = function getChunk(buffer, start) {
  var id = getChunkId(buffer, start);
  var length = getChunkLength(buffer, start + 4); // RIFF and LIST chunks can have sub-chunks

  var subChunks = [];

  if (id === 'RIFF' || id === 'LIST') {
    subChunks = getSubChunks(buffer.subarray(start + 12));
  }

  return new _riffChunk__WEBPACK_IMPORTED_MODULE_2__["RIFFChunk"](id, length, buffer.subarray(start + 8), subChunks);
};
/**
 * Get the length of a chunk, based on the RIFF length specifier.
 *
 * @param {Buffer} buffer - The input buffer
 * @param {number} start - Where to start reading the buffer for the length
 */

var getChunkLength = function getChunkLength(buffer, start) {
  buffer = buffer.subarray(start, start + 4);
  return (buffer[0] | buffer[1] << 8 | buffer[2] << 16 | buffer[3] << 24) >>> 0;
};
/**
 * Get all sub-chunks in a buffer. This will read until the end of the buffer and return any
 * sub-chunks found in it.
 *
 * @param {Buffer} buffer - The input buffer
 */

var getSubChunks = function getSubChunks(buffer) {
  var chunks = [];
  var index = 0;

  while (index <= buffer.length - 8) {
    var subChunk = getChunk(buffer, index);
    chunks.push(subChunk);
    index += 8 + subChunk.length;
    index = index % 2 ? index + 1 : index;
  }

  return chunks;
};
/**
 * Get the chunk ID (fourCC) from the buffer. This assumes the fourCC code is formatted as an UTF-8
 * string.
 *
 * @param {Buffer} buffer - The input buffer
 * @param {number} start - Where to start reading the chunk ID from the buffer
 */

var getChunkId = function getChunkId(buffer) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Object(_utils_buffer__WEBPACK_IMPORTED_MODULE_1__["getStringFromBuffer"])(buffer.subarray(start, start + 4));
};

/***/ }),

/***/ "./src/riff/riffChunk.ts":
/*!*******************************!*\
  !*** ./src/riff/riffChunk.ts ***!
  \*******************************/
/*! exports provided: RIFFChunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIFFChunk", function() { return RIFFChunk; });
/* harmony import */ var _chunkIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunkIterator */ "./src/riff/chunkIterator.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils */ "./src/utils/index.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var RIFFChunk = /*#__PURE__*/function () {
  /**
   * The chunk ID (fourCC).
   */

  /**
   * The length of the chunk.
   */

  /**
   * The raw buffer of the chunk.
   */

  /**
   * The sub-chunks of the chunk. If the chunk is not a RIFF or LIST chunk, this will be an empty
   * array.
   */
  function RIFFChunk(id, length, buffer, subChunks) {
    _classCallCheck(this, RIFFChunk);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "length", void 0);

    _defineProperty(this, "buffer", void 0);

    _defineProperty(this, "subChunks", void 0);

    this.id = id;
    this.length = length;
    this.buffer = buffer;
    this.subChunks = subChunks;
  }
  /**
   * Get a string from the buffer. If no position and no length is specified, it returns the whole
   * buffer as a string.
   *
   * @param {number} [position]
   * @param {number} [length]
   */


  _createClass(RIFFChunk, [{
    key: "getString",
    value: function getString() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 ? arguments[1] : undefined;
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getStringFromBuffer"])(this.getBuffer(position, length || this.length - position));
    }
    /**
     * Get a signed 16-bit integer from the buffer.
     *
     * @param {number} [position]
     */

  }, {
    key: "getInt16",
    value: function getInt16() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.buffer[position++] | this.buffer[position] << 8;
    }
    /**
     * Get an unsigned 32-bit integer from the buffer.
     *
     * @param {number} [position]
     */

  }, {
    key: "getUInt32",
    value: function getUInt32() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return (this.buffer[position++] | this.buffer[position++] << 8 | this.buffer[position++] << 16 | this.buffer[position] << 24) >>> 0;
    }
    /**
     * Get a byte from the buffer.
     *
     * @param {number} [position]
     */

  }, {
    key: "getByte",
    value: function getByte() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.buffer[position];
    }
    /**
     * Get a char from the buffer.
     *
     * @param {number} [position]
     */

  }, {
    key: "getChar",
    value: function getChar() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.buffer[position] << 24 >> 24;
    }
    /**
     * Get a chunk iterator for the chunk.
     *
     * @param {number} [start] - The position where to start iterating. Defaults to 0.
     */

  }, {
    key: "iterator",
    value: function iterator() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return new _chunkIterator__WEBPACK_IMPORTED_MODULE_0__["ChunkIterator"](this, start);
    }
    /**
     * Utility function to quickly iterate over a function.
     *
     * @template T
     * @param {(iterator: ChunkIterator): T} callback - The callback that returns an instance of the
     *   specified return type
     * @param {number} [start] - The optional index where to start iterating over the chunk
     */

  }, {
    key: "iterate",
    value: function iterate(callback) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var iterator = new _chunkIterator__WEBPACK_IMPORTED_MODULE_0__["ChunkIterator"](this, start);
      iterator.iterate(callback);
      return iterator.target;
    }
    /**
     * Get a buffer from `start` to `start` + `length`. The buffer is not copied (e.g. when using
     * .slice()), so any modifications to the buffer are done to the original buffer too.
     *
     * @param {number} start
     * @param {number} length
     */

  }, {
    key: "getBuffer",
    value: function getBuffer(start, length) {
      return this.buffer.subarray(start, start + length);
    }
  }]);

  return RIFFChunk;
}();

/***/ }),

/***/ "./src/soundFont2.ts":
/*!***************************!*\
  !*** ./src/soundFont2.ts ***!
  \***************************/
/*! exports provided: SoundFont2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundFont2", function() { return SoundFont2; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/types/index.ts");
/* harmony import */ var _chunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk */ "./src/chunk.ts");
/* harmony import */ var _riff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./riff */ "./src/riff/index.ts");
/* harmony import */ var _chunks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunks */ "./src/chunks/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var SoundFont2 = /*#__PURE__*/function () {
  _createClass(SoundFont2, null, [{
    key: "from",

    /**
     * Create a new `SoundFont2` instance from a raw input buffer.
     *
     * @param {Uint8Array} buffer
     * @deprecated Replaced with `new SoundFont2(buffer: Uint8Array);`
     */
    value: function from(buffer) {
      return new SoundFont2(buffer);
    }
    /**
     * The raw RIFF chunk data.
     */

  }]);

  /**
   * Load a SoundFont2 file from a `Uint8Array` or a `SF2Chunk`. The recommended way is to use a
   * Uint8Array, loading a SoundFont2 from a `SF2Chunk` only exists for backwards compatibility and
   * will likely be removed in a future version.
   *
   * @param {Uint8Array|SF2Chunk} chunk
   */
  function SoundFont2(chunk) {
    _classCallCheck(this, SoundFont2);

    _defineProperty(this, "chunk", void 0);

    _defineProperty(this, "metaData", void 0);

    _defineProperty(this, "sampleData", void 0);

    _defineProperty(this, "samples", void 0);

    _defineProperty(this, "presetData", void 0);

    _defineProperty(this, "instruments", void 0);

    _defineProperty(this, "presets", void 0);

    _defineProperty(this, "banks", void 0);

    if (!(chunk instanceof _chunk__WEBPACK_IMPORTED_MODULE_1__["SF2Chunk"])) {
      var parsedBuffer = Object(_riff__WEBPACK_IMPORTED_MODULE_2__["parseBuffer"])(chunk);
      chunk = new _chunk__WEBPACK_IMPORTED_MODULE_1__["SF2Chunk"](parsedBuffer);
    }

    if (chunk.subChunks.length !== 3) {
      throw new _riff__WEBPACK_IMPORTED_MODULE_2__["ParseError"]('Invalid sfbk structure', '3 chunks', "".concat(chunk.subChunks.length, " chunks"));
    }

    this.chunk = chunk;
    this.metaData = chunk.subChunks[0].getMetaData();
    this.sampleData = chunk.subChunks[1].getSampleData();
    this.presetData = chunk.subChunks[2].getPresetData();
    this.samples = this.getSamples();
    this.instruments = this.getInstruments();
    this.presets = this.getPresets();
    this.banks = this.getBanks();
  }
  /**
   * Get the key data by MIDI bank, preset and key number. May return null if no instrument was
   * found for the given inputs. Note that this does not process any of the generators that are
   * specific to the key number.
   *
   * The result is memoized based on all arguments, to prevent having to check all presets,
   * instruments etc. every time.
   *
   * @param {number} memoizedKeyNumber - The MIDI key number
   * @param {number} [memoizedBankNumber] - The bank index number, defaults to 0
   * @param {number} [memoizedPresetNumber] - The preset number, defaults to 0
   */


  _createClass(SoundFont2, [{
    key: "getKeyData",
    value: function getKeyData(memoizedKeyNumber) {
      var _this = this;

      var memoizedBankNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var memoizedPresetNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      // Get a memoized version of the function
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["memoize"])(function (keyNumber, bankNumber, presetNumber) {
        var bank = _this.banks[bankNumber];

        if (bank) {
          var preset = bank.presets[presetNumber];

          if (preset) {
            var presetZone = preset.zones.find(function (zone) {
              return _this.isKeyInRange(zone, keyNumber);
            });

            if (presetZone) {
              var instrument = presetZone.instrument;
              var instrumentZone = instrument.zones.find(function (zone) {
                return _this.isKeyInRange(zone, keyNumber);
              });

              if (instrumentZone) {
                var sample = instrumentZone.sample;

                var generators = _objectSpread({}, presetZone.generators, {}, instrumentZone.generators);

                var modulators = _objectSpread({}, presetZone.modulators, {}, instrumentZone.modulators);

                return {
                  keyNumber: keyNumber,
                  preset: preset,
                  instrument: instrument,
                  sample: sample,
                  generators: generators,
                  modulators: modulators
                };
              }
            }
          }
        }

        return null;
      })(memoizedKeyNumber, memoizedBankNumber, memoizedPresetNumber);
    }
    /**
     * Checks if a MIDI key number is in the range of a zone.
     *
     * @param {ZoneItems} zone - The zone to check
     * @param {number} keyNumber - The MIDI key number, must be between 0 and 127
     */

  }, {
    key: "isKeyInRange",
    value: function isKeyInRange(zone, keyNumber) {
      return zone.keyRange === undefined || zone.keyRange.lo <= keyNumber && zone.keyRange.hi >= keyNumber;
    }
    /**
     * Parse the presets to banks.
     */

  }, {
    key: "getBanks",
    value: function getBanks() {
      return this.presets.reduce(function (target, preset) {
        var bankNumber = preset.header.bank;

        if (!target[bankNumber]) {
          target[bankNumber] = {
            presets: []
          };
        }

        target[bankNumber].presets[preset.header.preset] = preset;
        return target;
      }, []);
    }
    /**
     * Parse the raw preset data to presets.
     */

  }, {
    key: "getPresets",
    value: function getPresets() {
      var _this$presetData = this.presetData,
          presetHeaders = _this$presetData.presetHeaders,
          presetZones = _this$presetData.presetZones,
          presetGenerators = _this$presetData.presetGenerators,
          presetModulators = _this$presetData.presetModulators;
      var presets = Object(_chunks__WEBPACK_IMPORTED_MODULE_3__["getItemsInZone"])(presetHeaders, presetZones, presetModulators, presetGenerators, this.instruments, _types__WEBPACK_IMPORTED_MODULE_0__["GeneratorType"].Instrument);
      return presets.filter(function (preset) {
        return preset.header.name !== 'EOP';
      }).map(function (preset) {
        return {
          header: preset.header,
          zones: preset.zones.map(function (zone) {
            return {
              keyRange: zone.keyRange,
              generators: zone.generators,
              modulators: zone.modulators,
              instrument: zone.reference
            };
          })
        };
      });
    }
    /**
     * Parse the raw instrument data (found in the preset data) to instruments.
     */

  }, {
    key: "getInstruments",
    value: function getInstruments() {
      var _this$presetData2 = this.presetData,
          instrumentHeaders = _this$presetData2.instrumentHeaders,
          instrumentZones = _this$presetData2.instrumentZones,
          instrumentModulators = _this$presetData2.instrumentModulators,
          instrumentGenerators = _this$presetData2.instrumentGenerators;
      var instruments = Object(_chunks__WEBPACK_IMPORTED_MODULE_3__["getItemsInZone"])(instrumentHeaders, instrumentZones, instrumentModulators, instrumentGenerators, this.samples, _types__WEBPACK_IMPORTED_MODULE_0__["GeneratorType"].SampleId);
      return instruments.filter(function (instrument) {
        return instrument.header.name !== 'EOI';
      }).map(function (instrument) {
        return {
          header: instrument.header,
          zones: instrument.zones.map(function (zone) {
            return {
              keyRange: zone.keyRange,
              generators: zone.generators,
              modulators: zone.modulators,
              sample: zone.reference
            };
          })
        };
      });
    }
    /**
     * Parse the raw sample data and sample headers to samples.
     */

  }, {
    key: "getSamples",
    value: function getSamples() {
      var _this2 = this;

      return this.presetData.sampleHeaders.filter(function (sample) {
        return sample.name !== 'EOS';
      }).map(function (header) {
        // Sample rate must be above 0
        if (header.name !== 'EOS' && header.sampleRate <= 0) {
          throw new Error("Illegal sample rate of ".concat(header.sampleRate, " hz in sample '").concat(header.name, "'"));
        } // Original pitch cannot be between 128 and 254


        if (header.originalPitch >= 128 && header.originalPitch <= 254) {
          header.originalPitch = 60;
        }

        header.startLoop -= header.start;
        header.endLoop -= header.start; // Turns the Uint8Array into a Int16Array

        var data = new Int16Array(new Uint8Array(_this2.sampleData.subarray(header.start * 2, header.end * 2)).buffer);
        return {
          header: header,
          data: data
        };
      });
    }
  }]);

  return SoundFont2;
}();

/***/ }),

/***/ "./src/types/bank.ts":
/*!***************************!*\
  !*** ./src/types/bank.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/generator.ts":
/*!********************************!*\
  !*** ./src/types/generator.ts ***!
  \********************************/
/*! exports provided: GeneratorType, DEFAULT_GENERATOR_VALUES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorType", function() { return GeneratorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GENERATOR_VALUES", function() { return DEFAULT_GENERATOR_VALUES; });
var _DEFAULT_GENERATOR_VA;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Generator (or modulator) types. These are defined in a specific order, following the spec. The
 * enum ID corresponds with the ID in the spec, so the unused and reserved fields should not be
 * removed.
 */
var GeneratorType;
/**
 * All unused generators.
 */

(function (GeneratorType) {
  GeneratorType[GeneratorType["StartAddrsOffset"] = 0] = "StartAddrsOffset";
  GeneratorType[GeneratorType["EndAddrsOffset"] = 1] = "EndAddrsOffset";
  GeneratorType[GeneratorType["StartLoopAddrsOffset"] = 2] = "StartLoopAddrsOffset";
  GeneratorType[GeneratorType["EndLoopAddrsOffset"] = 3] = "EndLoopAddrsOffset";
  GeneratorType[GeneratorType["StartAddrsCoarseOffset"] = 4] = "StartAddrsCoarseOffset";
  GeneratorType[GeneratorType["ModLFOToPitch"] = 5] = "ModLFOToPitch";
  GeneratorType[GeneratorType["VibLFOToPitch"] = 6] = "VibLFOToPitch";
  GeneratorType[GeneratorType["ModEnvToPitch"] = 7] = "ModEnvToPitch";
  GeneratorType[GeneratorType["InitialFilterFc"] = 8] = "InitialFilterFc";
  GeneratorType[GeneratorType["InitialFilterQ"] = 9] = "InitialFilterQ";
  GeneratorType[GeneratorType["ModLFOToFilterFc"] = 10] = "ModLFOToFilterFc";
  GeneratorType[GeneratorType["ModEnvToFilterFc"] = 11] = "ModEnvToFilterFc";
  GeneratorType[GeneratorType["EndAddrsCoarseOffset"] = 12] = "EndAddrsCoarseOffset";
  GeneratorType[GeneratorType["ModLFOToVolume"] = 13] = "ModLFOToVolume";
  GeneratorType[GeneratorType["Unused1"] = 14] = "Unused1";
  GeneratorType[GeneratorType["ChorusEffectsSend"] = 15] = "ChorusEffectsSend";
  GeneratorType[GeneratorType["ReverbEffectsSend"] = 16] = "ReverbEffectsSend";
  GeneratorType[GeneratorType["Pan"] = 17] = "Pan";
  GeneratorType[GeneratorType["Unused2"] = 18] = "Unused2";
  GeneratorType[GeneratorType["Unused3"] = 19] = "Unused3";
  GeneratorType[GeneratorType["Unused4"] = 20] = "Unused4";
  GeneratorType[GeneratorType["DelayModLFO"] = 21] = "DelayModLFO";
  GeneratorType[GeneratorType["FreqModLFO"] = 22] = "FreqModLFO";
  GeneratorType[GeneratorType["DelayVibLFO"] = 23] = "DelayVibLFO";
  GeneratorType[GeneratorType["FreqVibLFO"] = 24] = "FreqVibLFO";
  GeneratorType[GeneratorType["DelayModEnv"] = 25] = "DelayModEnv";
  GeneratorType[GeneratorType["AttackModEnv"] = 26] = "AttackModEnv";
  GeneratorType[GeneratorType["HoldModEnv"] = 27] = "HoldModEnv";
  GeneratorType[GeneratorType["DecayModEnv"] = 28] = "DecayModEnv";
  GeneratorType[GeneratorType["SustainModEnv"] = 29] = "SustainModEnv";
  GeneratorType[GeneratorType["ReleaseModEnv"] = 30] = "ReleaseModEnv";
  GeneratorType[GeneratorType["KeyNumToModEnvHold"] = 31] = "KeyNumToModEnvHold";
  GeneratorType[GeneratorType["KeyNumToModEnvDecay"] = 32] = "KeyNumToModEnvDecay";
  GeneratorType[GeneratorType["DelayVolEnv"] = 33] = "DelayVolEnv";
  GeneratorType[GeneratorType["AttackVolEnv"] = 34] = "AttackVolEnv";
  GeneratorType[GeneratorType["HoldVolEnv"] = 35] = "HoldVolEnv";
  GeneratorType[GeneratorType["DecayVolEnv"] = 36] = "DecayVolEnv";
  GeneratorType[GeneratorType["SustainVolEnv"] = 37] = "SustainVolEnv";
  GeneratorType[GeneratorType["ReleaseVolEnv"] = 38] = "ReleaseVolEnv";
  GeneratorType[GeneratorType["KeyNumToVolEnvHold"] = 39] = "KeyNumToVolEnvHold";
  GeneratorType[GeneratorType["KeyNumToVolEnvDecay"] = 40] = "KeyNumToVolEnvDecay";
  GeneratorType[GeneratorType["Instrument"] = 41] = "Instrument";
  GeneratorType[GeneratorType["Reserved1"] = 42] = "Reserved1";
  GeneratorType[GeneratorType["KeyRange"] = 43] = "KeyRange";
  GeneratorType[GeneratorType["VelRange"] = 44] = "VelRange";
  GeneratorType[GeneratorType["StartLoopAddrsCoarseOffset"] = 45] = "StartLoopAddrsCoarseOffset";
  GeneratorType[GeneratorType["KeyNum"] = 46] = "KeyNum";
  GeneratorType[GeneratorType["Velocity"] = 47] = "Velocity";
  GeneratorType[GeneratorType["InitialAttenuation"] = 48] = "InitialAttenuation";
  GeneratorType[GeneratorType["Reserved2"] = 49] = "Reserved2";
  GeneratorType[GeneratorType["EndLoopAddrsCoarseOffset"] = 50] = "EndLoopAddrsCoarseOffset";
  GeneratorType[GeneratorType["CoarseTune"] = 51] = "CoarseTune";
  GeneratorType[GeneratorType["FineTune"] = 52] = "FineTune";
  GeneratorType[GeneratorType["SampleId"] = 53] = "SampleId";
  GeneratorType[GeneratorType["SampleModes"] = 54] = "SampleModes";
  GeneratorType[GeneratorType["Reserved3"] = 55] = "Reserved3";
  GeneratorType[GeneratorType["ScaleTuning"] = 56] = "ScaleTuning";
  GeneratorType[GeneratorType["ExclusiveClass"] = 57] = "ExclusiveClass";
  GeneratorType[GeneratorType["OverridingRootKey"] = 58] = "OverridingRootKey";
  GeneratorType[GeneratorType["Unused5"] = 59] = "Unused5";
  GeneratorType[GeneratorType["EndOper"] = 60] = "EndOper";
})(GeneratorType || (GeneratorType = {}));

/**
 * The default value for all generator types (where applicable).
 */
var DEFAULT_GENERATOR_VALUES = (_DEFAULT_GENERATOR_VA = {}, _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.StartAddrsOffset, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.EndAddrsOffset, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.StartLoopAddrsOffset, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.EndLoopAddrsOffset, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.StartAddrsCoarseOffset, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.ModLFOToPitch, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.VibLFOToPitch, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.ModEnvToPitch, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.InitialFilterFc, 13500), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.InitialFilterQ, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.ModLFOToFilterFc, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.ModEnvToFilterFc, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.EndAddrsCoarseOffset, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.ModLFOToVolume, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.ChorusEffectsSend, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.ReverbEffectsSend, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.Pan, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.DelayModLFO, -12000), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.FreqModLFO, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.DelayVibLFO, -12000), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.FreqVibLFO, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.DelayModEnv, -12000), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.AttackModEnv, -12000), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.HoldModEnv, -12000), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.DecayModEnv, -12000), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.SustainModEnv, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.ReleaseModEnv, -12000), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.KeyNumToModEnvHold, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.KeyNumToModEnvDecay, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.DelayVolEnv, -12000), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.AttackVolEnv, -12000), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.HoldVolEnv, -12000), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.DecayVolEnv, -12000), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.SustainVolEnv, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.ReleaseVolEnv, -12000), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.KeyNumToVolEnvHold, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.KeyNumToVolEnvDecay, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.StartLoopAddrsCoarseOffset, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.KeyNum, -1), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.Velocity, -1), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.InitialAttenuation, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.EndLoopAddrsCoarseOffset, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.CoarseTune, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.FineTune, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.SampleModes, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.ScaleTuning, 100), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.ExclusiveClass, 0), _defineProperty(_DEFAULT_GENERATOR_VA, GeneratorType.OverridingRootKey, -1), _DEFAULT_GENERATOR_VA);
/**
 * Describes a range of MIDI key numbers (for the `keyRange` generator) or MIDI velocities (for the
 * `velRange` generator) with a minimum (lo) and maximum (hi) value.
 */

/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank */ "./src/types/bank.ts");
/* harmony import */ var _bank__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bank__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bank__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bank__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generator */ "./src/types/generator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneratorType", function() { return _generator__WEBPACK_IMPORTED_MODULE_1__["GeneratorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GENERATOR_VALUES", function() { return _generator__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_GENERATOR_VALUES"]; });

/* harmony import */ var _instrument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instrument */ "./src/types/instrument.ts");
/* harmony import */ var _instrument__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_instrument__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _instrument__WEBPACK_IMPORTED_MODULE_2__) if(["GeneratorType","DEFAULT_GENERATOR_VALUES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _instrument__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key */ "./src/types/key.ts");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_key__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _key__WEBPACK_IMPORTED_MODULE_3__) if(["GeneratorType","DEFAULT_GENERATOR_VALUES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _key__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _metaData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metaData */ "./src/types/metaData.ts");
/* harmony import */ var _metaData__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_metaData__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _metaData__WEBPACK_IMPORTED_MODULE_4__) if(["GeneratorType","DEFAULT_GENERATOR_VALUES","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _metaData__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _modulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulator */ "./src/types/modulator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerType", function() { return _modulator__WEBPACK_IMPORTED_MODULE_5__["ControllerType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerPolarity", function() { return _modulator__WEBPACK_IMPORTED_MODULE_5__["ControllerPolarity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerDirection", function() { return _modulator__WEBPACK_IMPORTED_MODULE_5__["ControllerDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerPalette", function() { return _modulator__WEBPACK_IMPORTED_MODULE_5__["ControllerPalette"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _modulator__WEBPACK_IMPORTED_MODULE_5__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransformType", function() { return _modulator__WEBPACK_IMPORTED_MODULE_5__["TransformType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_INSTRUMENT_MODULATORS", function() { return _modulator__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_INSTRUMENT_MODULATORS"]; });

/* harmony import */ var _preset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preset */ "./src/types/preset.ts");
/* harmony import */ var _preset__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_preset__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _preset__WEBPACK_IMPORTED_MODULE_6__) if(["GeneratorType","DEFAULT_GENERATOR_VALUES","ControllerType","ControllerPolarity","ControllerDirection","ControllerPalette","Controller","TransformType","DEFAULT_INSTRUMENT_MODULATORS","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _preset__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _presetData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presetData */ "./src/types/presetData.ts");
/* harmony import */ var _presetData__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_presetData__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _presetData__WEBPACK_IMPORTED_MODULE_7__) if(["GeneratorType","DEFAULT_GENERATOR_VALUES","ControllerType","ControllerPolarity","ControllerDirection","ControllerPalette","Controller","TransformType","DEFAULT_INSTRUMENT_MODULATORS","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _presetData__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sample__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sample */ "./src/types/sample.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SampleType", function() { return _sample__WEBPACK_IMPORTED_MODULE_8__["SampleType"]; });

/* harmony import */ var _zone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zone */ "./src/types/zone.ts");
/* harmony import */ var _zone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_zone__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _zone__WEBPACK_IMPORTED_MODULE_9__) if(["GeneratorType","DEFAULT_GENERATOR_VALUES","ControllerType","ControllerPolarity","ControllerDirection","ControllerPalette","Controller","TransformType","DEFAULT_INSTRUMENT_MODULATORS","SampleType","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _zone__WEBPACK_IMPORTED_MODULE_9__[key]; }) }(__WEBPACK_IMPORT_KEY__));











/***/ }),

/***/ "./src/types/instrument.ts":
/*!*********************************!*\
  !*** ./src/types/instrument.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/key.ts":
/*!**************************!*\
  !*** ./src/types/key.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/metaData.ts":
/*!*******************************!*\
  !*** ./src/types/metaData.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/modulator.ts":
/*!********************************!*\
  !*** ./src/types/modulator.ts ***!
  \********************************/
/*! exports provided: ControllerType, ControllerPolarity, ControllerDirection, ControllerPalette, Controller, TransformType, DEFAULT_INSTRUMENT_MODULATORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerType", function() { return ControllerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerPolarity", function() { return ControllerPolarity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerDirection", function() { return ControllerDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerPalette", function() { return ControllerPalette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformType", function() { return TransformType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_INSTRUMENT_MODULATORS", function() { return DEFAULT_INSTRUMENT_MODULATORS; });
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ "./src/types/generator.ts");

var ControllerType;

(function (ControllerType) {
  ControllerType[ControllerType["Linear"] = 0] = "Linear";
  ControllerType[ControllerType["Concave"] = 1] = "Concave";
  ControllerType[ControllerType["Convex"] = 2] = "Convex";
  ControllerType[ControllerType["Switch"] = 3] = "Switch";
})(ControllerType || (ControllerType = {}));

var ControllerPolarity;

(function (ControllerPolarity) {
  ControllerPolarity[ControllerPolarity["Unipolar"] = 0] = "Unipolar";
  ControllerPolarity[ControllerPolarity["Bipolar"] = 1] = "Bipolar";
})(ControllerPolarity || (ControllerPolarity = {}));

var ControllerDirection;

(function (ControllerDirection) {
  ControllerDirection[ControllerDirection["Increasing"] = 0] = "Increasing";
  ControllerDirection[ControllerDirection["Decreasing"] = 1] = "Decreasing";
})(ControllerDirection || (ControllerDirection = {}));

var ControllerPalette;

(function (ControllerPalette) {
  ControllerPalette[ControllerPalette["GeneralController"] = 0] = "GeneralController";
  ControllerPalette[ControllerPalette["MidiController"] = 1] = "MidiController";
})(ControllerPalette || (ControllerPalette = {}));

var Controller;

(function (Controller) {
  Controller[Controller["NoController"] = 0] = "NoController";
  Controller[Controller["NoteOnVelocity"] = 2] = "NoteOnVelocity";
  Controller[Controller["NoteOnKeyNumber"] = 3] = "NoteOnKeyNumber";
  Controller[Controller["PolyPressure"] = 10] = "PolyPressure";
  Controller[Controller["ChannelPressure"] = 13] = "ChannelPressure";
  Controller[Controller["PitchWheel"] = 14] = "PitchWheel";
  Controller[Controller["PitchWheelSensitivity"] = 16] = "PitchWheelSensitivity";
  Controller[Controller["Link"] = 127] = "Link";
})(Controller || (Controller = {}));

var TransformType;

(function (TransformType) {
  TransformType[TransformType["Linear"] = 0] = "Linear";
  TransformType[TransformType["Absolute"] = 2] = "Absolute";
})(TransformType || (TransformType = {}));

/**
 * The default modulators at instrument level. Implementing these is up to the consumer of this
 * library. To override these modulators, other modulators have to be defined explicitly.
 */
var DEFAULT_INSTRUMENT_MODULATORS = [// MIDI note-on velocity to initial attenuation
{
  id: _generator__WEBPACK_IMPORTED_MODULE_0__["GeneratorType"].InitialAttenuation,
  source: {
    type: ControllerType.Concave,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Decreasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.NoteOnVelocity
  },
  value: 960,
  valueSource: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.NoController
  },
  transform: TransformType.Linear
}, // MIDI note-on velocity to filter cutoff
{
  id: _generator__WEBPACK_IMPORTED_MODULE_0__["GeneratorType"].InitialFilterFc,
  source: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Decreasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.NoteOnVelocity
  },
  value: -2400,
  // cents
  valueSource: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.NoController
  },
  transform: TransformType.Linear
}, // MIDI channel pressure to vibrato LFO pitch depth
{
  id: _generator__WEBPACK_IMPORTED_MODULE_0__["GeneratorType"].VibLFOToPitch,
  source: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.ChannelPressure
  },
  value: 50,
  // cents / max excursion
  valueSource: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.NoController
  },
  transform: TransformType.Linear
}, // MIDI continuous controller 1 to vibrato LFO pitch depth
{
  id: _generator__WEBPACK_IMPORTED_MODULE_0__["GeneratorType"].VibLFOToPitch,
  source: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.MidiController,
    index: 1
  },
  value: 50,
  valueSource: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.NoController
  },
  transform: TransformType.Linear
}, // MIDI continuous controller 7 to initial attenuation
{
  id: _generator__WEBPACK_IMPORTED_MODULE_0__["GeneratorType"].InitialAttenuation,
  source: {
    type: ControllerType.Concave,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Decreasing,
    palette: ControllerPalette.MidiController,
    index: 7
  },
  value: 960,
  valueSource: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.NoController
  },
  transform: TransformType.Linear
}, // MIDI continuous controller 10 to pan position
{
  id: _generator__WEBPACK_IMPORTED_MODULE_0__["GeneratorType"].InitialAttenuation,
  source: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Bipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.MidiController,
    index: 10
  },
  value: 1000,
  // tenths of a percent
  valueSource: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.NoController
  },
  transform: TransformType.Linear
}, // MIDI continuous controller 11 to initial attenuation
{
  id: _generator__WEBPACK_IMPORTED_MODULE_0__["GeneratorType"].InitialAttenuation,
  source: {
    type: ControllerType.Concave,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Decreasing,
    palette: ControllerPalette.MidiController,
    index: 11
  },
  value: 960,
  valueSource: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.NoController
  },
  transform: TransformType.Linear
}, // MIDI continuous controller 91 to reverb effects send
{
  id: _generator__WEBPACK_IMPORTED_MODULE_0__["GeneratorType"].ReverbEffectsSend,
  source: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.MidiController,
    index: 91
  },
  value: 200,
  // tenths of a percent
  valueSource: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.NoController
  },
  transform: TransformType.Linear
}, // MIDI continuous controller 93 to chorus effects send
{
  id: _generator__WEBPACK_IMPORTED_MODULE_0__["GeneratorType"].ChorusEffectsSend,
  source: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.MidiController,
    index: 93
  },
  value: 200,
  // tenths of a percent
  valueSource: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.NoController
  },
  transform: TransformType.Linear
}, // MIDI pitch wheel to initial pitch controlled by MIDI pitch wheel sensitivity
{
  id: _generator__WEBPACK_IMPORTED_MODULE_0__["GeneratorType"].CoarseTune,
  source: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Bipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.PitchWheel
  },
  value: 12700,
  // cents
  valueSource: {
    type: ControllerType.Linear,
    polarity: ControllerPolarity.Unipolar,
    direction: ControllerDirection.Increasing,
    palette: ControllerPalette.GeneralController,
    index: Controller.PitchWheelSensitivity
  },
  transform: TransformType.Linear
}];

/***/ }),

/***/ "./src/types/preset.ts":
/*!*****************************!*\
  !*** ./src/types/preset.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/presetData.ts":
/*!*********************************!*\
  !*** ./src/types/presetData.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/sample.ts":
/*!*****************************!*\
  !*** ./src/types/sample.ts ***!
  \*****************************/
/*! exports provided: SampleType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleType", function() { return SampleType; });
/**
 * SoundFont2 samples are in the WAV format, meaning that they consist of a signed 16-bit array,
 * instead of a unsigned 8-bit array, which is read by default. The sample data in the `smpl`
 * sub-chunk is parsed as Int16Array before creating a sample.
 */

/**
 * The sample type, found in the `type` field in the header.
 */
var SampleType;

(function (SampleType) {
  SampleType[SampleType["EOS"] = 0] = "EOS";
  SampleType[SampleType["Mono"] = 1] = "Mono";
  SampleType[SampleType["Right"] = 2] = "Right";
  SampleType[SampleType["Left"] = 4] = "Left";
  SampleType[SampleType["Linked"] = 8] = "Linked";
  SampleType[SampleType["RomMono"] = 32769] = "RomMono";
  SampleType[SampleType["RomRight"] = 32770] = "RomRight";
  SampleType[SampleType["RomLeft"] = 32772] = "RomLeft";
  SampleType[SampleType["RomLinked"] = 32776] = "RomLinked";
})(SampleType || (SampleType = {}));

/***/ }),

/***/ "./src/types/zone.ts":
/*!***************************!*\
  !*** ./src/types/zone.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/utils/buffer.ts":
/*!*****************************!*\
  !*** ./src/utils/buffer.ts ***!
  \*****************************/
/*! exports provided: getStringFromBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(TextDecoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringFromBuffer", function() { return getStringFromBuffer; });
/**
 * Convert a UTF-8 encoded buffer into a string. This will read the full buffer as UTF-8 encoded
 * string and return anything before the first NULL character. The output text is trimmed of any
 * preceding or following spaces.
 *
 * @param {Buffer} buffer - The input buffer
 */
var getStringFromBuffer = function getStringFromBuffer(buffer) {
  var decoded = new TextDecoder('utf8').decode(buffer);
  return decoded.split(/\0/)[0].trim();
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! util */ "util")["TextDecoder"]))

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: getStringFromBuffer, memoize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer */ "./src/utils/buffer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStringFromBuffer", function() { return _buffer__WEBPACK_IMPORTED_MODULE_0__["getStringFromBuffer"]; });

/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memoize */ "./src/utils/memoize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _memoize__WEBPACK_IMPORTED_MODULE_1__["memoize"]; });




/***/ }),

/***/ "./src/utils/memoize.ts":
/*!******************************!*\
  !*** ./src/utils/memoize.ts ***!
  \******************************/
/*! exports provided: memoize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/**
 * Returns a memoized function for the original function. Function arguments are serialized as a
 * JSON string and stored in an in-memory object.
 *
 * @template T
 * @template U
 * @param {(...originalArgs: T[]) => U} originalFunction
 */
var memoize = function memoize(originalFunction) {
  var memo = {};
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serializedArgs = JSON.stringify(args);

    if (serializedArgs in memo) {
      return memo[serializedArgs];
    }

    var output = originalFunction.apply(void 0, args);
    memo[serializedArgs] = output;
    return output;
  };
};

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Tb3VuZEZvbnQyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1NvdW5kRm9udDIvLi9zcmMvY2h1bmsudHMiLCJ3ZWJwYWNrOi8vU291bmRGb250Mi8uL3NyYy9jaHVua3MvZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly9Tb3VuZEZvbnQyLy4vc3JjL2NodW5rcy9pbmRleC50cyIsIndlYnBhY2s6Ly9Tb3VuZEZvbnQyLy4vc3JjL2NodW5rcy9pbnN0cnVtZW50cy9oZWFkZXJzLnRzIiwid2VicGFjazovL1NvdW5kRm9udDIvLi9zcmMvY2h1bmtzL2luc3RydW1lbnRzL2luZGV4LnRzIiwid2VicGFjazovL1NvdW5kRm9udDIvLi9zcmMvY2h1bmtzL21vZHVsYXRvcnMudHMiLCJ3ZWJwYWNrOi8vU291bmRGb250Mi8uL3NyYy9jaHVua3MvcHJlc2V0cy9oZWFkZXJzLnRzIiwid2VicGFjazovL1NvdW5kRm9udDIvLi9zcmMvY2h1bmtzL3ByZXNldHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU291bmRGb250Mi8uL3NyYy9jaHVua3Mvc2FtcGxlcy9oZWFkZXJzLnRzIiwid2VicGFjazovL1NvdW5kRm9udDIvLi9zcmMvY2h1bmtzL3NhbXBsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU291bmRGb250Mi8uL3NyYy9jaHVua3Mvem9uZXMudHMiLCJ3ZWJwYWNrOi8vU291bmRGb250Mi8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vU291bmRGb250Mi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Tb3VuZEZvbnQyLy4vc3JjL3JpZmYvY2h1bmtJdGVyYXRvci50cyIsIndlYnBhY2s6Ly9Tb3VuZEZvbnQyLy4vc3JjL3JpZmYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU291bmRGb250Mi8uL3NyYy9yaWZmL3BhcnNlRXJyb3IudHMiLCJ3ZWJwYWNrOi8vU291bmRGb250Mi8uL3NyYy9yaWZmL3BhcnNlci50cyIsIndlYnBhY2s6Ly9Tb3VuZEZvbnQyLy4vc3JjL3JpZmYvcmlmZkNodW5rLnRzIiwid2VicGFjazovL1NvdW5kRm9udDIvLi9zcmMvc291bmRGb250Mi50cyIsIndlYnBhY2s6Ly9Tb3VuZEZvbnQyLy4vc3JjL3R5cGVzL2dlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9Tb3VuZEZvbnQyLy4vc3JjL3R5cGVzL2luZGV4LnRzIiwid2VicGFjazovL1NvdW5kRm9udDIvLi9zcmMvdHlwZXMvbW9kdWxhdG9yLnRzIiwid2VicGFjazovL1NvdW5kRm9udDIvLi9zcmMvdHlwZXMvc2FtcGxlLnRzIiwid2VicGFjazovL1NvdW5kRm9udDIvLi9zcmMvdXRpbHMvYnVmZmVyLnRzIiwid2VicGFjazovL1NvdW5kRm9udDIvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU291bmRGb250Mi8uL3NyYy91dGlscy9tZW1vaXplLnRzIiwid2VicGFjazovL1NvdW5kRm9udDIvZXh0ZXJuYWwgXCJ1dGlsXCIiXSwibmFtZXMiOlsiU0YyQ2h1bmsiLCJjaHVuayIsImlkIiwibGVuZ3RoIiwiYnVmZmVyIiwic3ViQ2h1bmtzIiwibWFwIiwic3ViQ2h1bmsiLCJQYXJzZUVycm9yIiwiaW5mbyIsInJlZHVjZSIsInRhcmdldCIsIlNGX1ZFUlNJT05fTEVOR1RIIiwiZ2V0SW50MTYiLCJnZXRTdHJpbmciLCJpZmlsIiwiSU5BTSIsInZlcnNpb24iLCJzb3VuZEVuZ2luZSIsImlzbmciLCJuYW1lIiwicm9tIiwiaXJvbSIsInJvbVZlcnNpb24iLCJpdmVyIiwiY3JlYXRpb25EYXRlIiwiSUNSRCIsImF1dGhvciIsIklFTkciLCJwcm9kdWN0IiwiSVBSRCIsImNvcHlyaWdodCIsIklDT1AiLCJjb21tZW50cyIsIklDTVQiLCJjcmVhdGVkQnkiLCJJU0ZUIiwic2FtcGxlQ2h1bmsiLCJwcmVzZXRIZWFkZXJzIiwiZ2V0UHJlc2V0SGVhZGVycyIsInByZXNldFpvbmVzIiwiZ2V0Wm9uZXMiLCJwcmVzZXRNb2R1bGF0b3JzIiwiZ2V0TW9kdWxhdG9ycyIsInByZXNldEdlbmVyYXRvcnMiLCJnZXRHZW5lcmF0b3JzIiwiaW5zdHJ1bWVudEhlYWRlcnMiLCJnZXRJbnN0cnVtZW50SGVhZGVycyIsImluc3RydW1lbnRab25lcyIsImluc3RydW1lbnRNb2R1bGF0b3JzIiwiaW5zdHJ1bWVudEdlbmVyYXRvcnMiLCJzYW1wbGVIZWFkZXJzIiwiZ2V0U2FtcGxlSGVhZGVycyIsIlJJRkZDaHVuayIsIlBSRVNFVF9UWVBFU19CTEFDS0xJU1QiLCJHZW5lcmF0b3JUeXBlIiwiU3RhcnRBZGRyc09mZnNldCIsIkVuZEFkZHJzT2Zmc2V0IiwiU3RhcnRMb29wQWRkcnNPZmZzZXQiLCJFbmRMb29wQWRkcnNPZmZzZXQiLCJTdGFydEFkZHJzQ29hcnNlT2Zmc2V0IiwiRW5kQWRkcnNDb2Fyc2VPZmZzZXQiLCJTdGFydExvb3BBZGRyc0NvYXJzZU9mZnNldCIsIktleU51bSIsIlZlbG9jaXR5IiwiRW5kTG9vcEFkZHJzQ29hcnNlT2Zmc2V0IiwiU2FtcGxlTW9kZXMiLCJFeGNsdXNpdmVDbGFzcyIsIk92ZXJyaWRpbmdSb290S2V5IiwiSU5TVFJVTUVOVF9UWVBFU19CTEFDS0xJU1QiLCJVbnVzZWQxIiwiVW51c2VkMiIsIlVudXNlZDMiLCJVbnVzZWQ0IiwiUmVzZXJ2ZWQxIiwiUmVzZXJ2ZWQyIiwiUmVzZXJ2ZWQzIiwiUkFOR0VfVFlQRVMiLCJLZXlSYW5nZSIsIlZlbFJhbmdlIiwidHlwZSIsIlNGX0dFTkVSQVRPUl9TSVpFIiwiaXRlcmF0ZSIsIml0ZXJhdG9yIiwiaW5jbHVkZXMiLCJyYW5nZSIsImxvIiwiZ2V0Qnl0ZSIsImhpIiwiYW1vdW50IiwiZ2V0SW50MTZCRSIsIlNGX0lOU1RSVU1FTlRfSEVBREVSX1NJWkUiLCJiYWdJbmRleCIsImdldE1vZHVsYXRvclZhbHVlIiwidmFsdWUiLCJwb2xhcml0eSIsImRpcmVjdGlvbiIsInBhbGV0dGUiLCJpbmRleCIsIlNGX01PRFVMQVRPUl9TSVpFIiwic291cmNlIiwidmFsdWVTb3VyY2UiLCJ0cmFuc2Zvcm0iLCJTRl9QUkVTRVRfSEVBREVSX1NJWkUiLCJwcmVzZXQiLCJiYW5rIiwibGlicmFyeSIsImdldFVJbnQzMiIsImdlbnJlIiwibW9ycGhvbG9neSIsIlNGX1NBTVBMRV9IRUFERVJfU0laRSIsInN0YXJ0IiwiZW5kIiwic3RhcnRMb29wIiwiZW5kTG9vcCIsInNhbXBsZVJhdGUiLCJvcmlnaW5hbFBpdGNoIiwicGl0Y2hDb3JyZWN0aW9uIiwiZ2V0Q2hhciIsImxpbmsiLCJTRl9CQUdfU0laRSIsImdlbmVyYXRvckluZGV4IiwibW9kdWxhdG9ySW5kZXgiLCJnZXRJdGVtc0luWm9uZSIsImhlYWRlcnMiLCJ6b25lcyIsIml0ZW1Nb2R1bGF0b3JzIiwiaXRlbUdlbmVyYXRvcnMiLCJyZWZlcmVuY2VzIiwicmVmZXJlbmNlVHlwZSIsIml0ZW1zIiwiaSIsImhlYWRlciIsIm5leHQiLCJ6b25lSXRlbXMiLCJqIiwibW9kdWxhdG9ycyIsImdlbmVyYXRvcnMiLCJrZXlSYW5nZSIsInJlZmVyZW5jZUlkIiwicmVmZXJlbmNlIiwicHVzaCIsInpvbmUiLCJnZXRab25lIiwiaXRlbXNPYmplY3QiLCJpdGVtIiwiREVGQVVMVF9TQU1QTEVfUkFURSIsIkNodW5rSXRlcmF0b3IiLCJwb3NpdGlvbiIsImNhbGxiYWNrIiwib2JqZWN0IiwidGV4dCIsImdldFN0cmluZ0Zyb21CdWZmZXIiLCJnZXRCdWZmZXIiLCJzdWJhcnJheSIsIm1lc3NhZ2UiLCJleHBlY3RlZCIsInJlY2VpdmVkIiwiRXJyb3IiLCJwYXJzZUJ1ZmZlciIsImdldENodW5rSWQiLCJzaWduYXR1cmUiLCJuZXdCdWZmZXIiLCJnZXRTdWJDaHVua3MiLCJnZXRDaHVuayIsImdldENodW5rTGVuZ3RoIiwiY2h1bmtzIiwiU291bmRGb250MiIsInBhcnNlZEJ1ZmZlciIsIm1ldGFEYXRhIiwiZ2V0TWV0YURhdGEiLCJzYW1wbGVEYXRhIiwiZ2V0U2FtcGxlRGF0YSIsInByZXNldERhdGEiLCJnZXRQcmVzZXREYXRhIiwic2FtcGxlcyIsImdldFNhbXBsZXMiLCJpbnN0cnVtZW50cyIsImdldEluc3RydW1lbnRzIiwicHJlc2V0cyIsImdldFByZXNldHMiLCJiYW5rcyIsImdldEJhbmtzIiwibWVtb2l6ZWRLZXlOdW1iZXIiLCJtZW1vaXplZEJhbmtOdW1iZXIiLCJtZW1vaXplZFByZXNldE51bWJlciIsIm1lbW9pemUiLCJrZXlOdW1iZXIiLCJiYW5rTnVtYmVyIiwicHJlc2V0TnVtYmVyIiwicHJlc2V0Wm9uZSIsImZpbmQiLCJpc0tleUluUmFuZ2UiLCJpbnN0cnVtZW50IiwiaW5zdHJ1bWVudFpvbmUiLCJzYW1wbGUiLCJ1bmRlZmluZWQiLCJJbnN0cnVtZW50IiwiZmlsdGVyIiwiU2FtcGxlSWQiLCJkYXRhIiwiSW50MTZBcnJheSIsIlVpbnQ4QXJyYXkiLCJERUZBVUxUX0dFTkVSQVRPUl9WQUxVRVMiLCJNb2RMRk9Ub1BpdGNoIiwiVmliTEZPVG9QaXRjaCIsIk1vZEVudlRvUGl0Y2giLCJJbml0aWFsRmlsdGVyRmMiLCJJbml0aWFsRmlsdGVyUSIsIk1vZExGT1RvRmlsdGVyRmMiLCJNb2RFbnZUb0ZpbHRlckZjIiwiTW9kTEZPVG9Wb2x1bWUiLCJDaG9ydXNFZmZlY3RzU2VuZCIsIlJldmVyYkVmZmVjdHNTZW5kIiwiUGFuIiwiRGVsYXlNb2RMRk8iLCJGcmVxTW9kTEZPIiwiRGVsYXlWaWJMRk8iLCJGcmVxVmliTEZPIiwiRGVsYXlNb2RFbnYiLCJBdHRhY2tNb2RFbnYiLCJIb2xkTW9kRW52IiwiRGVjYXlNb2RFbnYiLCJTdXN0YWluTW9kRW52IiwiUmVsZWFzZU1vZEVudiIsIktleU51bVRvTW9kRW52SG9sZCIsIktleU51bVRvTW9kRW52RGVjYXkiLCJEZWxheVZvbEVudiIsIkF0dGFja1ZvbEVudiIsIkhvbGRWb2xFbnYiLCJEZWNheVZvbEVudiIsIlN1c3RhaW5Wb2xFbnYiLCJSZWxlYXNlVm9sRW52IiwiS2V5TnVtVG9Wb2xFbnZIb2xkIiwiS2V5TnVtVG9Wb2xFbnZEZWNheSIsIkluaXRpYWxBdHRlbnVhdGlvbiIsIkNvYXJzZVR1bmUiLCJGaW5lVHVuZSIsIlNjYWxlVHVuaW5nIiwiQ29udHJvbGxlclR5cGUiLCJDb250cm9sbGVyUG9sYXJpdHkiLCJDb250cm9sbGVyRGlyZWN0aW9uIiwiQ29udHJvbGxlclBhbGV0dGUiLCJDb250cm9sbGVyIiwiVHJhbnNmb3JtVHlwZSIsIkRFRkFVTFRfSU5TVFJVTUVOVF9NT0RVTEFUT1JTIiwiQ29uY2F2ZSIsIlVuaXBvbGFyIiwiRGVjcmVhc2luZyIsIkdlbmVyYWxDb250cm9sbGVyIiwiTm90ZU9uVmVsb2NpdHkiLCJMaW5lYXIiLCJJbmNyZWFzaW5nIiwiTm9Db250cm9sbGVyIiwiQ2hhbm5lbFByZXNzdXJlIiwiTWlkaUNvbnRyb2xsZXIiLCJCaXBvbGFyIiwiUGl0Y2hXaGVlbCIsIlBpdGNoV2hlZWxTZW5zaXRpdml0eSIsIlNhbXBsZVR5cGUiLCJkZWNvZGVkIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJzcGxpdCIsInRyaW0iLCJvcmlnaW5hbEZ1bmN0aW9uIiwibWVtbyIsImFyZ3MiLCJzZXJpYWxpemVkQXJncyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvdXRwdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEy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QUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7QUFBQUEsZSxDQUFBQSxhO0FBQUFBLGUsQ0FBQUEsYTtBQUFBQSxlLENBQUFBLGE7R0FBQUEsYSxLQUFBQSxhOztBQTBZWjs7O0FBR08sSUFBTW9KLHdC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cUIsRUFFSztBQUMxQixNQUFNQyxJQUEwQixHQUFHLEVBQW5DO0FBRUEsU0FBTyxZQUFrQjtBQUFBLHNDQUFkQyxJQUFjO0FBQWRBLFVBQWM7QUFBQTs7QUFDdkIsUUFBTUMsY0FBYyxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZixDQUF2Qjs7QUFDQSxRQUFJQyxjQUFjLElBQUlGLElBQXRCLEVBQTRCO0FBQzFCLGFBQU9BLElBQUksQ0FBQ0UsY0FBRCxDQUFYO0FBQ0Q7O0FBRUQsUUFBTUcsTUFBTSxHQUFHTixnQkFBZ0IsTUFBaEIsU0FBb0JFLElBQXBCLENBQWY7QUFDQUQsUUFBSSxDQUFDRSxjQUFELENBQUosR0FBdUJHLE1BQXZCO0FBQ0EsV0FBT0EsTUFBUDtBQUNELEdBVEQ7QUFVRCxDQWZNLEM7Ozs7Ozs7Ozs7O0FDUlAsaUMiLCJmaWxlIjoiU291bmRGb250Mi5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBQYXJzZUVycm9yLCBSSUZGQ2h1bmsgfSBmcm9tICcuL3JpZmYnO1xuaW1wb3J0IHsgTWV0YURhdGEsIFByZXNldERhdGEgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFNGX0lORk9fQ0hVTktTLCBTRl9WRVJTSU9OX0xFTkdUSCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGdldEdlbmVyYXRvcnMsXG4gIGdldEluc3RydW1lbnRIZWFkZXJzLFxuICBnZXRNb2R1bGF0b3JzLFxuICBnZXRQcmVzZXRIZWFkZXJzLFxuICBnZXRTYW1wbGVIZWFkZXJzLFxuICBnZXRab25lc1xufSBmcm9tICcuL2NodW5rcyc7XG5cbmV4cG9ydCBjbGFzcyBTRjJDaHVuayBleHRlbmRzIFJJRkZDaHVuayB7XG4gIC8qKlxuICAgKiBBbGwgc3ViLWNodW5rcyBvZiB0aGlzIGBTRjJDaHVua2AgYXMgYFNGMkNodW5rYC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzdWJDaHVua3M6IFNGMkNodW5rW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNodW5rOiBSSUZGQ2h1bmspIHtcbiAgICBzdXBlcihjaHVuay5pZCwgY2h1bmsubGVuZ3RoLCBjaHVuay5idWZmZXIsIGNodW5rLnN1YkNodW5rcyk7XG5cbiAgICB0aGlzLnN1YkNodW5rcyA9IGNodW5rLnN1YkNodW5rcy5tYXAoc3ViQ2h1bmsgPT4gbmV3IFNGMkNodW5rKHN1YkNodW5rKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG1ldGEgZGF0YSBmcm9tIHRoZSBjaHVuay4gVGhpcyBhc3N1bWVzIHRoZSBjaHVuayBpcyBhIExJU1QgY2h1bmssIGNvbnRhaW5pbmcgSU5GT1xuICAgKiBzdWItY2h1bmtzLlxuICAgKi9cbiAgcHVibGljIGdldE1ldGFEYXRhKCk6IE1ldGFEYXRhIHtcbiAgICBpZiAodGhpcy5pZCAhPT0gJ0xJU1QnKSB7XG4gICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcignVW5leHBlY3RlZCBjaHVuayBJRCcsIGAnTElTVCdgLCBgJyR7dGhpcy5pZH0nYCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5mbyA9IHRoaXMuc3ViQ2h1bmtzLnJlZHVjZTx7IFtrZXkgaW4gU0ZfSU5GT19DSFVOS1NdPzogc3RyaW5nIH0+KCh0YXJnZXQsIGNodW5rKSA9PiB7XG4gICAgICBpZiAoY2h1bmsuaWQgPT09ICdpZmlsJyB8fCBjaHVuay5pZCA9PT0gJ2l2ZXInKSB7XG4gICAgICAgIC8vIGlmaWwgYW5kIGl2ZXIgbGVuZ3RoIG11c3QgYmUgNCBieXRlc1xuICAgICAgICBpZiAoY2h1bmsubGVuZ3RoICE9PSBTRl9WRVJTSU9OX0xFTkdUSCkge1xuICAgICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKGBJbnZhbGlkIHNpemUgZm9yIHRoZSAnJHtjaHVuay5pZH0nIHN1Yi1jaHVua2ApO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldFtjaHVuay5pZCBhcyBTRl9JTkZPX0NIVU5LU10gPSBgJHtjaHVuay5nZXRJbnQxNigpfS4ke2NodW5rLmdldEludDE2KDIpfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRbY2h1bmsuaWQgYXMgU0ZfSU5GT19DSFVOS1NdID0gY2h1bmsuZ2V0U3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKCFpbmZvLmlmaWwpIHtcbiAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKGBNaXNzaW5nIHJlcXVpcmVkICdpZmlsJyBzdWItY2h1bmtgKTtcbiAgICB9XG5cbiAgICBpZiAoIWluZm8uSU5BTSkge1xuICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoYE1pc3NpbmcgcmVxdWlyZWQgJ0lOQU0nIHN1Yi1jaHVua2ApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2ZXJzaW9uOiBpbmZvLmlmaWwsXG4gICAgICBzb3VuZEVuZ2luZTogaW5mby5pc25nIHx8ICdFTVU4MDAwJyxcbiAgICAgIG5hbWU6IGluZm8uSU5BTSxcbiAgICAgIHJvbTogaW5mby5pcm9tLFxuICAgICAgcm9tVmVyc2lvbjogaW5mby5pdmVyLFxuICAgICAgY3JlYXRpb25EYXRlOiBpbmZvLklDUkQsXG4gICAgICBhdXRob3I6IGluZm8uSUVORyxcbiAgICAgIHByb2R1Y3Q6IGluZm8uSVBSRCxcbiAgICAgIGNvcHlyaWdodDogaW5mby5JQ09QLFxuICAgICAgY29tbWVudHM6IGluZm8uSUNNVCxcbiAgICAgIGNyZWF0ZWRCeTogaW5mby5JU0ZUXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNhbXBsZSBkYXRhIGFzIGEgdW5zaWduZWQgOC1iaXQgYnVmZmVyIGZyb20gdGhlIGNodW5rLiBUaGlzIGFzc3VtZXMgdGhlIGNodW5rIGlzIGFcbiAgICogTElTVCBjaHVuayBjb250YWluaW5nIGEgc21wbCBzdWItY2h1bmsuXG4gICAqL1xuICBwdWJsaWMgZ2V0U2FtcGxlRGF0YSgpOiBVaW50OEFycmF5IHtcbiAgICBpZiAodGhpcy5pZCAhPT0gJ0xJU1QnKSB7XG4gICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcignVW5leHBlY3RlZCBjaHVuayBJRCcsIGAnTElTVCdgLCBgJyR7dGhpcy5pZH0nYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2FtcGxlQ2h1bmsgPSB0aGlzLnN1YkNodW5rc1swXTtcbiAgICBpZiAoc2FtcGxlQ2h1bmsuaWQgIT09ICdzbXBsJykge1xuICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoJ0ludmFsaWQgY2h1bmsgc2lnbmF0dXJlJywgYCdzbXBsJ2AsIGAnJHtzYW1wbGVDaHVuay5pZH0nYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbXBsZUNodW5rLmJ1ZmZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHByZXNldCBkYXRhIGZyb20gdGhlIGNodW5rLiBUaGlzIGFzc3VtZXMgdGhlIGNodW5rIGlzIGEgTElTVCBjaHVuayBjb250YWluaW5nIHRoZVxuICAgKiBwcmVzZXQgZGF0YSBzdWItY2h1bmtzLlxuICAgKi9cbiAgcHVibGljIGdldFByZXNldERhdGEoKTogUHJlc2V0RGF0YSB7XG4gICAgaWYgKHRoaXMuaWQgIT09ICdMSVNUJykge1xuICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoJ1VuZXhwZWN0ZWQgY2h1bmsgSUQnLCBgJ0xJU1QnYCwgYCcke3RoaXMuaWR9J2ApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwcmVzZXRIZWFkZXJzOiBnZXRQcmVzZXRIZWFkZXJzKHRoaXMuc3ViQ2h1bmtzWzBdKSxcbiAgICAgIHByZXNldFpvbmVzOiBnZXRab25lcyh0aGlzLnN1YkNodW5rc1sxXSwgJ3BiYWcnKSxcbiAgICAgIHByZXNldE1vZHVsYXRvcnM6IGdldE1vZHVsYXRvcnModGhpcy5zdWJDaHVua3NbMl0sICdwbW9kJyksXG4gICAgICBwcmVzZXRHZW5lcmF0b3JzOiBnZXRHZW5lcmF0b3JzKHRoaXMuc3ViQ2h1bmtzWzNdLCAncGdlbicpLFxuICAgICAgaW5zdHJ1bWVudEhlYWRlcnM6IGdldEluc3RydW1lbnRIZWFkZXJzKHRoaXMuc3ViQ2h1bmtzWzRdKSxcbiAgICAgIGluc3RydW1lbnRab25lczogZ2V0Wm9uZXModGhpcy5zdWJDaHVua3NbNV0sICdpYmFnJyksXG4gICAgICBpbnN0cnVtZW50TW9kdWxhdG9yczogZ2V0TW9kdWxhdG9ycyh0aGlzLnN1YkNodW5rc1s2XSwgJ2ltb2QnKSxcbiAgICAgIGluc3RydW1lbnRHZW5lcmF0b3JzOiBnZXRHZW5lcmF0b3JzKHRoaXMuc3ViQ2h1bmtzWzddLCAnaWdlbicpLFxuICAgICAgc2FtcGxlSGVhZGVyczogZ2V0U2FtcGxlSGVhZGVycyh0aGlzLnN1YkNodW5rc1s4XSlcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRjJDaHVuayB9IGZyb20gJ34vY2h1bmsnO1xuaW1wb3J0IHsgUGFyc2VFcnJvciB9IGZyb20gJ34vcmlmZic7XG5pbXBvcnQgeyBHZW5lcmF0b3IsIEdlbmVyYXRvclR5cGUgfSBmcm9tICd+L3R5cGVzJztcbmltcG9ydCB7IFNGX0dFTkVSQVRPUl9TSVpFIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEFuIGFycmF5IG9mIEdlbmVyYXRvclR5cGVzIHRoYXQgY2Fubm90IGJlIHNwZWNpZmllZCBmb3IgcHJlc2V0cy4gSWYgb25lIG9mIHRoZXNlIGdlbmVyYXRvciB0eXBlc1xuICogaXMgZm91bmQsIHRoZSBnZW5lcmF0b3Igc2hvdWxkIGJlIGlnbm9yZWQuXG4gKi9cbmNvbnN0IFBSRVNFVF9UWVBFU19CTEFDS0xJU1Q6IG51bWJlcltdID0gW1xuICBHZW5lcmF0b3JUeXBlLlN0YXJ0QWRkcnNPZmZzZXQsXG4gIEdlbmVyYXRvclR5cGUuRW5kQWRkcnNPZmZzZXQsXG4gIEdlbmVyYXRvclR5cGUuU3RhcnRMb29wQWRkcnNPZmZzZXQsXG4gIEdlbmVyYXRvclR5cGUuRW5kTG9vcEFkZHJzT2Zmc2V0LFxuICBHZW5lcmF0b3JUeXBlLlN0YXJ0QWRkcnNDb2Fyc2VPZmZzZXQsXG4gIEdlbmVyYXRvclR5cGUuRW5kQWRkcnNDb2Fyc2VPZmZzZXQsXG4gIEdlbmVyYXRvclR5cGUuU3RhcnRMb29wQWRkcnNDb2Fyc2VPZmZzZXQsXG4gIEdlbmVyYXRvclR5cGUuS2V5TnVtLFxuICBHZW5lcmF0b3JUeXBlLlZlbG9jaXR5LFxuICBHZW5lcmF0b3JUeXBlLkVuZExvb3BBZGRyc0NvYXJzZU9mZnNldCxcbiAgR2VuZXJhdG9yVHlwZS5TYW1wbGVNb2RlcyxcbiAgR2VuZXJhdG9yVHlwZS5FeGNsdXNpdmVDbGFzcyxcbiAgR2VuZXJhdG9yVHlwZS5PdmVycmlkaW5nUm9vdEtleVxuXTtcblxuLyoqXG4gKiBBbiBhcnJheSBvZiBHZW5lcmF0b3JUeXBlcyB0aGF0IGNhbm5vdCBiZSBzcGVjaWZpZWQgZm9yIGluc3RydW1lbnRzLiBJZiBvbmUgb2YgdGhlc2UgZ2VuZXJhdG9yXG4gKiB0eXBlcyBpcyBmb3VuZCwgdGhlIGdlbmVyYXRvciBzaG91bGQgYmUgaWdub3JlZC5cbiAqL1xuY29uc3QgSU5TVFJVTUVOVF9UWVBFU19CTEFDS0xJU1Q6IG51bWJlcltdID0gW1xuICBHZW5lcmF0b3JUeXBlLlVudXNlZDEsXG4gIEdlbmVyYXRvclR5cGUuVW51c2VkMixcbiAgR2VuZXJhdG9yVHlwZS5VbnVzZWQzLFxuICBHZW5lcmF0b3JUeXBlLlVudXNlZDQsXG4gIEdlbmVyYXRvclR5cGUuUmVzZXJ2ZWQxLFxuICBHZW5lcmF0b3JUeXBlLlJlc2VydmVkMixcbiAgR2VuZXJhdG9yVHlwZS5SZXNlcnZlZDNcbl07XG5cbi8qKlxuICogVGhlc2UgR2VuZXJhdG9yVHlwZXMgc3BlY2lmeSBhIHJhbmdlIG9mIGtleSBudW1iZXJzIG9yIHZlbG9jaXR5LlxuICovXG5jb25zdCBSQU5HRV9UWVBFUzogbnVtYmVyW10gPSBbR2VuZXJhdG9yVHlwZS5LZXlSYW5nZSwgR2VuZXJhdG9yVHlwZS5WZWxSYW5nZV07XG5cbi8qKlxuICogR2V0IGFsbCBnZW5lcmF0b3JzIGZvciBlaXRoZXIgYW4gcHJlc2V0IGdlbmVyYXRvciBjaHVuayBvciBhIGluc3RydW1lbnQgZ2VuZXJhdG9yIGNodW5rLlxuICpcbiAqIFRPRE86IENoZWNrIGlmIGdlbmVyYXRvciBjaHVuayBpcyB2YWxpZCwgYnkgZm9sbG93aW5nIHRoZSBydWxlcyBkZWZpbmVkIGluIHRoZSBzcGVjLiBTZWUgZm9yXG4gKiBleGFtcGxlOiBodHRwczovL2dpdGh1Yi5jb20vRmx1aWRTeW50aC9mbHVpZHN5bnRoL2Jsb2IvdjIuMC4zL3NyYy9zZmxvYWRlci9mbHVpZF9zZmZpbGUuY1xuICpcbiAqIEBwYXJhbSB7U0YyQ2h1bmt9IGNodW5rIC0gVGhlIGlucHV0IGNodW5rXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSB0eXBlLCBjYW4gYmUgJ3BnZW4nIG9yICdpZ2VuJ1xuICovXG5leHBvcnQgY29uc3QgZ2V0R2VuZXJhdG9ycyA9IChjaHVuazogU0YyQ2h1bmssIHR5cGU6ICdwZ2VuJyB8ICdpZ2VuJyk6IEdlbmVyYXRvcltdID0+IHtcbiAgaWYgKGNodW5rLmlkICE9PSB0eXBlKSB7XG4gICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoJ1VuZXhwZWN0ZWQgY2h1bmsgSUQnLCBgJyR7dHlwZX0nYCwgYCcke2NodW5rLmlkfSdgKTtcbiAgfVxuXG4gIGlmIChjaHVuay5sZW5ndGggJSBTRl9HRU5FUkFUT1JfU0laRSkge1xuICAgIHRocm93IG5ldyBQYXJzZUVycm9yKGBJbnZhbGlkIHNpemUgZm9yIHRoZSAnJHt0eXBlfScgc3ViLWNodW5rYCk7XG4gIH1cblxuICByZXR1cm4gY2h1bmsuaXRlcmF0ZTxHZW5lcmF0b3I+KGl0ZXJhdG9yID0+IHtcbiAgICBjb25zdCBpZCA9IGl0ZXJhdG9yLmdldEludDE2KCk7XG5cbiAgICAvLyBJZ25vcmUgaW52YWxpZCBJRHNcbiAgICBpZiAoIUdlbmVyYXRvclR5cGVbaWRdKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3BnZW4nICYmIFBSRVNFVF9UWVBFU19CTEFDS0xJU1QuaW5jbHVkZXMoaWQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2lnZW4nICYmIElOU1RSVU1FTlRfVFlQRVNfQkxBQ0tMSVNULmluY2x1ZGVzKGlkKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKFJBTkdFX1RZUEVTLmluY2x1ZGVzKGlkKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgbG86IGl0ZXJhdG9yLmdldEJ5dGUoKSxcbiAgICAgICAgICBoaTogaXRlcmF0b3IuZ2V0Qnl0ZSgpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgYW1vdW50OiBpdGVyYXRvci5nZXRJbnQxNkJFKClcbiAgICB9O1xuICB9KTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2luc3RydW1lbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vcHJlc2V0cyc7XG5leHBvcnQgKiBmcm9tICcuL3NhbXBsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9nZW5lcmF0b3JzJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kdWxhdG9ycyc7XG5leHBvcnQgKiBmcm9tICcuL3pvbmVzJztcbiIsImltcG9ydCB7IFNGMkNodW5rIH0gZnJvbSAnfi9jaHVuayc7XG5pbXBvcnQgeyBQYXJzZUVycm9yIH0gZnJvbSAnfi9yaWZmJztcbmltcG9ydCB7IFNGX0lOU1RSVU1FTlRfSEVBREVSX1NJWkUgfSBmcm9tICd+L2NvbnN0YW50cyc7XG5pbXBvcnQgeyBJbnN0cnVtZW50SGVhZGVyIH0gZnJvbSAnfi90eXBlcyc7XG5cbi8qKlxuICogR2V0IGFsbCBpbnN0cnVtZW50IGhlYWRlcnMgZnJvbSBhIGBpbnN0YCBzdWItY2h1bmsuXG4gKlxuICogQHBhcmFtIHtTRjJDaHVua30gY2h1bmsgLSBUaGUgaW5wdXQgY2h1bmtcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEluc3RydW1lbnRIZWFkZXJzID0gKGNodW5rOiBTRjJDaHVuayk6IEluc3RydW1lbnRIZWFkZXJbXSA9PiB7XG4gIGlmIChjaHVuay5pZCAhPT0gJ2luc3QnKSB7XG4gICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoJ1VuZXhwZWN0ZWQgY2h1bmsgSUQnLCBgJ2luc3QnYCwgYCcke2NodW5rLmlkfSdgKTtcbiAgfVxuXG4gIGlmIChjaHVuay5sZW5ndGggJSBTRl9JTlNUUlVNRU5UX0hFQURFUl9TSVpFKSB7XG4gICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoYEludmFsaWQgc2l6ZSBmb3IgdGhlICdpbnN0JyBzdWItY2h1bmtgKTtcbiAgfVxuXG4gIHJldHVybiBjaHVuay5pdGVyYXRlPEluc3RydW1lbnRIZWFkZXI+KGl0ZXJhdG9yID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogaXRlcmF0b3IuZ2V0U3RyaW5nKCksXG4gICAgICBiYWdJbmRleDogaXRlcmF0b3IuZ2V0SW50MTYoKVxuICAgIH07XG4gIH0pO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaGVhZGVycyc7XG4iLCJpbXBvcnQgeyBTRjJDaHVuayB9IGZyb20gJ34vY2h1bmsnO1xuaW1wb3J0IHsgTW9kdWxhdG9yLCBDb250cm9sbGVyVmFsdWUgfSBmcm9tICd+L3R5cGVzJztcbmltcG9ydCB7IFBhcnNlRXJyb3IgfSBmcm9tICd+L3JpZmYnO1xuaW1wb3J0IHsgU0ZfTU9EVUxBVE9SX1NJWkUgfSBmcm9tICd+L2NvbnN0YW50cyc7XG5cbi8qKlxuICogR2V0IHRoZSBtb2R1bGF0b3IgZW51bWVyYXRvciB2YWx1ZSBmcm9tIGEgMTYtYml0IGludGVnZXIuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIDE2LWJpdCBpbnRlZ2VyXG4gKi9cbmNvbnN0IGdldE1vZHVsYXRvclZhbHVlID0gKHZhbHVlOiBudW1iZXIpOiBDb250cm9sbGVyVmFsdWUgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICh2YWx1ZSA+PiAxMCkgJiAweDNmLFxuICAgIHBvbGFyaXR5OiAodmFsdWUgPj4gOSkgJiAxLFxuICAgIGRpcmVjdGlvbjogKHZhbHVlID4+IDgpICYgMSxcbiAgICBwYWxldHRlOiAodmFsdWUgPj4gNykgJiAxLFxuICAgIGluZGV4OiB2YWx1ZSAmIDB4N2ZcbiAgfTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBtb2R1bGF0b3JzIGZyb20gZWl0aGVyIGEgYHBtb2RgIChwcmVzZXRzKSBvciBgaW1vZGAgKGluc3RydW1lbnRzKSBjaHVuay5cbiAqXG4gKiBAcGFyYW0ge1NGMkNodW5rfSBjaHVuayAtIFRoZSBpbnB1dCBjaHVua1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgdHlwZSBvZiBjaHVuaywgZWl0aGVyICdwbW9kJyBvciAnaW1vZCdcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1vZHVsYXRvcnMgPSAoY2h1bms6IFNGMkNodW5rLCB0eXBlOiAncG1vZCcgfCAnaW1vZCcpOiBNb2R1bGF0b3JbXSA9PiB7XG4gIGlmIChjaHVuay5pZCAhPT0gdHlwZSkge1xuICAgIHRocm93IG5ldyBQYXJzZUVycm9yKCdVbmV4cGVjdGVkIGNodW5rIElEJywgYCcke3R5cGV9J2AsIGAnJHtjaHVuay5pZH0nYCk7XG4gIH1cblxuICBpZiAoY2h1bmsubGVuZ3RoICUgU0ZfTU9EVUxBVE9SX1NJWkUpIHtcbiAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihgSW52YWxpZCBzaXplIGZvciB0aGUgJyR7dHlwZX0nIHN1Yi1jaHVua2ApO1xuICB9XG5cbiAgcmV0dXJuIGNodW5rLml0ZXJhdGU8TW9kdWxhdG9yPihpdGVyYXRvciA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvdXJjZTogZ2V0TW9kdWxhdG9yVmFsdWUoaXRlcmF0b3IuZ2V0SW50MTZCRSgpKSxcbiAgICAgIGlkOiBpdGVyYXRvci5nZXRJbnQxNkJFKCksXG4gICAgICB2YWx1ZTogaXRlcmF0b3IuZ2V0SW50MTZCRSgpLFxuICAgICAgdmFsdWVTb3VyY2U6IGdldE1vZHVsYXRvclZhbHVlKGl0ZXJhdG9yLmdldEludDE2QkUoKSksXG4gICAgICB0cmFuc2Zvcm06IGl0ZXJhdG9yLmdldEludDE2QkUoKVxuICAgIH07XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IFNGMkNodW5rIH0gZnJvbSAnfi9jaHVuayc7XG5pbXBvcnQgeyBQYXJzZUVycm9yIH0gZnJvbSAnfi9yaWZmJztcbmltcG9ydCB7IFNGX1BSRVNFVF9IRUFERVJfU0laRSB9IGZyb20gJ34vY29uc3RhbnRzJztcbmltcG9ydCB7IFByZXNldEhlYWRlciB9IGZyb20gJ34vdHlwZXMnO1xuXG4vKipcbiAqIEdldCBhbGwgcHJlc2V0IGhlYWRlcnMgZnJvbSBhIGBwaGRyYCBzdWItY2h1bmsuXG4gKlxuICogQHBhcmFtIHtTRjJDaHVua30gY2h1bmsgLSBUaGUgaW5wdXQgY2h1bmtcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFByZXNldEhlYWRlcnMgPSAoY2h1bms6IFNGMkNodW5rKTogUHJlc2V0SGVhZGVyW10gPT4ge1xuICBpZiAoY2h1bmsuaWQgIT09ICdwaGRyJykge1xuICAgIHRocm93IG5ldyBQYXJzZUVycm9yKCdJbnZhbGlkIGNodW5rIElEJywgYCdwaGRyJ2AsIGAnJHtjaHVuay5pZH0nYCk7XG4gIH1cblxuICBpZiAoY2h1bmsubGVuZ3RoICUgU0ZfUFJFU0VUX0hFQURFUl9TSVpFKSB7XG4gICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoYEludmFsaWQgc2l6ZSBmb3IgdGhlICdwaGRyJyBzdWItY2h1bmtgKTtcbiAgfVxuXG4gIHJldHVybiBjaHVuay5pdGVyYXRlPFByZXNldEhlYWRlcj4oaXRlcmF0b3IgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBpdGVyYXRvci5nZXRTdHJpbmcoKSxcbiAgICAgIHByZXNldDogaXRlcmF0b3IuZ2V0SW50MTYoKSxcbiAgICAgIGJhbms6IGl0ZXJhdG9yLmdldEludDE2KCksXG4gICAgICBiYWdJbmRleDogaXRlcmF0b3IuZ2V0SW50MTYoKSxcbiAgICAgIGxpYnJhcnk6IGl0ZXJhdG9yLmdldFVJbnQzMigpLFxuICAgICAgZ2VucmU6IGl0ZXJhdG9yLmdldFVJbnQzMigpLFxuICAgICAgbW9ycGhvbG9neTogaXRlcmF0b3IuZ2V0VUludDMyKClcbiAgICB9O1xuICB9KTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2hlYWRlcnMnO1xuIiwiaW1wb3J0IHsgU0YyQ2h1bmsgfSBmcm9tICd+L2NodW5rJztcbmltcG9ydCB7IFBhcnNlRXJyb3IgfSBmcm9tICd+L3JpZmYnO1xuaW1wb3J0IHsgU0ZfU0FNUExFX0hFQURFUl9TSVpFIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuaW1wb3J0IHsgU2FtcGxlSGVhZGVyIH0gZnJvbSAnfi90eXBlcyc7XG5cbi8qKlxuICogR2V0IGFsbCBzYW1wbGUgaGVhZGVycyBmcm9tIGEgYHNoZHJgIHN1Yi1jaHVuay5cbiAqXG4gKiBAcGFyYW0ge1NGMkNodW5rfSBjaHVuayAtIFRoZSBpbnB1dCBjaHVua1xuICovXG5leHBvcnQgY29uc3QgZ2V0U2FtcGxlSGVhZGVycyA9IChjaHVuazogU0YyQ2h1bmspOiBTYW1wbGVIZWFkZXJbXSA9PiB7XG4gIGlmIChjaHVuay5pZCAhPT0gJ3NoZHInKSB7XG4gICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoJ1VuZXhwZWN0ZWQgY2h1bmsgSUQnLCBgJ3NoZHInYCwgYCcke2NodW5rLmlkfSdgKTtcbiAgfVxuXG4gIGlmIChjaHVuay5sZW5ndGggJSBTRl9TQU1QTEVfSEVBREVSX1NJWkUpIHtcbiAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihgSW52YWxpZCBzaXplIGZvciB0aGUgJ3NoZHInIHN1Yi1jaHVua2ApO1xuICB9XG5cbiAgcmV0dXJuIGNodW5rLml0ZXJhdGU8U2FtcGxlSGVhZGVyPihpdGVyYXRvciA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGl0ZXJhdG9yLmdldFN0cmluZygpLFxuICAgICAgc3RhcnQ6IGl0ZXJhdG9yLmdldFVJbnQzMigpLFxuICAgICAgZW5kOiBpdGVyYXRvci5nZXRVSW50MzIoKSxcbiAgICAgIHN0YXJ0TG9vcDogaXRlcmF0b3IuZ2V0VUludDMyKCksXG4gICAgICBlbmRMb29wOiBpdGVyYXRvci5nZXRVSW50MzIoKSxcbiAgICAgIHNhbXBsZVJhdGU6IGl0ZXJhdG9yLmdldFVJbnQzMigpLFxuICAgICAgb3JpZ2luYWxQaXRjaDogaXRlcmF0b3IuZ2V0Qnl0ZSgpLFxuICAgICAgcGl0Y2hDb3JyZWN0aW9uOiBpdGVyYXRvci5nZXRDaGFyKCksXG4gICAgICBsaW5rOiBpdGVyYXRvci5nZXRJbnQxNigpLFxuICAgICAgdHlwZTogaXRlcmF0b3IuZ2V0SW50MTYoKVxuICAgIH07XG4gIH0pO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaGVhZGVycyc7XG4iLCJpbXBvcnQgeyBTRjJDaHVuayB9IGZyb20gJ34vY2h1bmsnO1xuaW1wb3J0IHsgUGFyc2VFcnJvciB9IGZyb20gJ34vcmlmZic7XG5pbXBvcnQgeyBTRl9CQUdfU0laRSB9IGZyb20gJ34vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIEdlbmVyYXRvcixcbiAgR2VuZXJhdG9yVHlwZSxcbiAgTW9kdWxhdG9yLFxuICBab25lLFxuICBab25lSXRlbXNXaXRoUmVmZXJlbmNlLFxuICBab25lTWFwXG59IGZyb20gJ34vdHlwZXMnO1xuXG4vKipcbiAqIEdldCB0aGUgcHJlc2V0IG9yIGluc3RydW1lbnQgem9uZXMgZnJvbSBhIGNodW5rLlxuICpcbiAqIEBwYXJhbSB7U0YyQ2h1bmt9IGNodW5rIC0gVGhlIGlucHV0IGNodW5rXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSB0eXBlIG9mIGNodW5rICgncGJhZycgb3IgJ2liYWcnKVxuICovXG5leHBvcnQgY29uc3QgZ2V0Wm9uZXMgPSAoY2h1bms6IFNGMkNodW5rLCB0eXBlOiAncGJhZycgfCAnaWJhZycpOiBab25lW10gPT4ge1xuICBpZiAoY2h1bmsuaWQgIT09IHR5cGUpIHtcbiAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcignVW5leHBlY3RlZCBjaHVuayBJRCcsIGAnJHt0eXBlfSdgLCBgJyR7Y2h1bmsuaWR9J2ApO1xuICB9XG5cbiAgaWYgKGNodW5rLmxlbmd0aCAlIFNGX0JBR19TSVpFKSB7XG4gICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoYEludmFsaWQgc2l6ZSBmb3IgdGhlICcke3R5cGV9JyBzdWItY2h1bmtgKTtcbiAgfVxuXG4gIHJldHVybiBjaHVuay5pdGVyYXRlPFpvbmU+KGl0ZXJhdG9yID0+ICh7XG4gICAgZ2VuZXJhdG9ySW5kZXg6IGl0ZXJhdG9yLmdldEludDE2KCksXG4gICAgbW9kdWxhdG9ySW5kZXg6IGl0ZXJhdG9yLmdldEludDE2KClcbiAgfSkpO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIG1vZHVsYXRvcnMsIGdlbmVyYXRvcnMgYW5kIHRoZSBpbnN0cnVtZW50IChmb3IgcHJlc2V0cykgb3Igc2FtcGxlIChmb3IgaW5zdHJ1bWVudHMpIGluIGFcbiAqIHByZXNldCBvciBpbnN0cnVtZW50LlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAdGVtcGxhdGUgUlxuICogQHBhcmFtIHtUfSBoZWFkZXJzIC0gVGhlIHByZXNldCBvciBpbnN0cnVtZW50IGhlYWRlcnNcbiAqIEBwYXJhbSB7Wm9uZVtdfSB6b25lcyAtIEFsbCB6b25lcyBmb3IgdGhlIHByZXNldCBvciBpbnN0cnVtZW50XG4gKiBAcGFyYW0ge01vZHVsYXRvcltdfSBpdGVtTW9kdWxhdG9ycyAtIEFsbCBtb2R1bGF0b3JzIGZvciB0aGUgcHJlc2V0IG9yIGluc3RydW1lbnRcbiAqIEBwYXJhbSB7R2VuZXJhdG9yW119IGl0ZW1HZW5lcmF0b3JzIC0gQWxsIGdlbmVyYXRvcnMgZm9yIHRoZSBwcmVzZXQgb3IgaW5zdHJ1bWVudFxuICogQHBhcmFtIHtSW119IHJlZmVyZW5jZXMgLSBUaGUgaW5zdHJ1bWVudHMgb3Igc2FtcGxlcyB0byByZWZlcmVuY2UgaW4gdGhlIHpvbmVcbiAqIEBwYXJhbSB7R2VuZXJhdG9yVHlwZX0gcmVmZXJlbmNlVHlwZSAtIFRoZSBnZW5lcmF0b3IgdHlwZSB0byByZWZlcmVuY2UgaXQgYnlcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1zSW5ab25lID0gPFQgZXh0ZW5kcyB7IGJhZ0luZGV4OiBudW1iZXIgfSwgUj4oXG4gIGhlYWRlcnM6IFRbXSxcbiAgem9uZXM6IFpvbmVbXSxcbiAgaXRlbU1vZHVsYXRvcnM6IE1vZHVsYXRvcltdLFxuICBpdGVtR2VuZXJhdG9yczogR2VuZXJhdG9yW10sXG4gIHJlZmVyZW5jZXM6IFJbXSxcbiAgcmVmZXJlbmNlVHlwZTogR2VuZXJhdG9yVHlwZVxuKTogeyBoZWFkZXI6IFQ7IHpvbmVzOiBab25lSXRlbXNXaXRoUmVmZXJlbmNlPFI+W10gfVtdID0+IHtcbiAgY29uc3QgaXRlbXM6IHsgaGVhZGVyOiBUOyB6b25lczogWm9uZUl0ZW1zV2l0aFJlZmVyZW5jZTxSPltdIH1bXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGhlYWRlciA9IGhlYWRlcnNbaV07XG4gICAgY29uc3QgbmV4dCA9IGhlYWRlcnNbaSArIDFdO1xuXG4gICAgY29uc3Qgc3RhcnQgPSBoZWFkZXIuYmFnSW5kZXg7XG4gICAgY29uc3QgZW5kID0gbmV4dCA/IG5leHQuYmFnSW5kZXggOiB6b25lcy5sZW5ndGg7XG5cbiAgICBjb25zdCB6b25lSXRlbXM6IFpvbmVJdGVtc1dpdGhSZWZlcmVuY2U8Uj5bXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaiA9IHN0YXJ0OyBqIDwgZW5kOyBqKyspIHtcbiAgICAgIGNvbnN0IG1vZHVsYXRvcnMgPSBnZXRNb2R1bGF0b3JzKGosIHpvbmVzLCBpdGVtTW9kdWxhdG9ycyk7XG4gICAgICBjb25zdCBnZW5lcmF0b3JzID0gZ2V0R2VuZXJhdG9ycyhqLCB6b25lcywgaXRlbUdlbmVyYXRvcnMpO1xuXG4gICAgICBjb25zdCBrZXlSYW5nZSA9XG4gICAgICAgIGdlbmVyYXRvcnNbR2VuZXJhdG9yVHlwZS5LZXlSYW5nZV0gJiYgZ2VuZXJhdG9yc1tHZW5lcmF0b3JUeXBlLktleVJhbmdlXSEucmFuZ2U7XG4gICAgICBjb25zdCByZWZlcmVuY2VJZCA9IGdlbmVyYXRvcnNbcmVmZXJlbmNlVHlwZV07XG4gICAgICBpZiAoIXJlZmVyZW5jZUlkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VzW3JlZmVyZW5jZUlkLnZhbHVlIV07XG4gICAgICBpZiAoIXJlZmVyZW5jZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgem9uZUl0ZW1zLnB1c2goe1xuICAgICAgICBrZXlSYW5nZSxcbiAgICAgICAgbW9kdWxhdG9ycyxcbiAgICAgICAgZ2VuZXJhdG9ycyxcbiAgICAgICAgcmVmZXJlbmNlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIGhlYWRlcixcbiAgICAgIHpvbmVzOiB6b25lSXRlbXNcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogR2V0IGFsbCBtb2R1bGF0b3JzIGZyb20gYSB6b25lLCBiYXNlZCBvbiB0aGUgaW5kZXguIFRoZSBlbmQgaW5kZXggaXMgdGhlIG1vZHVsYXRvciBpbmRleCBvZiB0aGVcbiAqIG5leHQgem9uZSwgb3IgdGhlIHRvdGFsIHpvbmUgbGVuZ3RoIGlmIHRoZSBjdXJyZW50IHpvbmUgaXMgdGhlIGxhc3Qgb25lLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFRoZSBpbmRleFxuICogQHBhcmFtIHtab25lW119IHpvbmVzIC0gQUxsIHpvbmVzIGZvciB0aGUgcHJlc2V0IG9yIGluc3RydW1lbnRcbiAqIEBwYXJhbSB7TW9kdWxhdG9yW119IG1vZHVsYXRvcnMgLSBBbGwgbW9kdWxhdG9ycyBmb3IgdGhlIHByZXNldCBvciBpbnN0cnVtZW50XG4gKi9cbmNvbnN0IGdldE1vZHVsYXRvcnMgPSAoXG4gIGluZGV4OiBudW1iZXIsXG4gIHpvbmVzOiBab25lW10sXG4gIG1vZHVsYXRvcnM6IE1vZHVsYXRvcltdXG4pOiBab25lTWFwPE1vZHVsYXRvcj4gPT4ge1xuICBjb25zdCB6b25lID0gem9uZXNbaW5kZXhdO1xuICBjb25zdCBuZXh0ID0gem9uZXNbaW5kZXggKyAxXTtcblxuICBjb25zdCBzdGFydCA9IHpvbmUubW9kdWxhdG9ySW5kZXg7XG4gIGNvbnN0IGVuZCA9IG5leHQgPyBuZXh0Lm1vZHVsYXRvckluZGV4IDogem9uZXMubGVuZ3RoO1xuXG4gIHJldHVybiBnZXRab25lKHN0YXJ0LCBlbmQsIG1vZHVsYXRvcnMpO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIGdlbmVyYXRvcnMgZnJvbSBhIHpvbmUsIGJhc2VkIG9uIHRoZSBpbmRleC4gVGhlIGVuZCBpbmRleCBpcyB0aGUgZ2VuZXJhdG9ycyBpbmRleCBvZiB0aGVcbiAqIG5leHQgem9uZSwgb3IgdGhlIHRvdGFsIHpvbmUgbGVuZ3RoIGlmIHRoZSBjdXJyZW50IHpvbmUgaXMgdGhlIGxhc3Qgb25lLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFRoZSBpbmRleFxuICogQHBhcmFtIHtab25lW119IHpvbmVzIC0gQUxsIHpvbmVzIGZvciB0aGUgcHJlc2V0IG9yIGluc3RydW1lbnRcbiAqIEBwYXJhbSB7R2VuZXJhdG9yW119IGdlbmVyYXRvcnMgLSBBbGwgZ2VuZXJhdG9ycyBmb3IgdGhlIHByZXNldCBvciBpbnN0cnVtZW50XG4gKi9cbmNvbnN0IGdldEdlbmVyYXRvcnMgPSAoXG4gIGluZGV4OiBudW1iZXIsXG4gIHpvbmVzOiBab25lW10sXG4gIGdlbmVyYXRvcnM6IEdlbmVyYXRvcltdXG4pOiBab25lTWFwPEdlbmVyYXRvcj4gPT4ge1xuICBjb25zdCB6b25lID0gem9uZXNbaW5kZXhdO1xuICBjb25zdCBuZXh0ID0gem9uZXNbaW5kZXggKyAxXTtcblxuICBjb25zdCBzdGFydCA9IHpvbmUuZ2VuZXJhdG9ySW5kZXg7XG4gIGNvbnN0IGVuZCA9IG5leHQgPyBuZXh0LmdlbmVyYXRvckluZGV4IDogem9uZXMubGVuZ3RoO1xuXG4gIHJldHVybiBnZXRab25lKHN0YXJ0LCBlbmQsIGdlbmVyYXRvcnMpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFsbCBtb2R1bGF0b3JzIG9yIGdlbmVyYXRvcnMgYXMgYSBrZXktdmFsdWUgb2JqZWN0LCB3aGVyZSB0aGUga2V5IGlzIHRoZSBgR2VuZXJhdG9yVHlwZWBcbiAqIG9mIHRoZSBtb2R1bGF0b3Igb3IgZ2VuZXJhdG9yLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgLSBUaGUgc3RhcnQgaW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgLSBUaGUgZW5kIGluZGV4XG4gKiBAcGFyYW0ge1RbXX0gaXRlbXMgLSBUaGUgbW9kdWxhdG9ycyBvciBnZW5lcmF0b3JzXG4gKi9cbmNvbnN0IGdldFpvbmUgPSA8VCBleHRlbmRzIHsgaWQ6IEdlbmVyYXRvclR5cGUgfT4oXG4gIHN0YXJ0OiBudW1iZXIsXG4gIGVuZDogbnVtYmVyLFxuICBpdGVtczogVFtdXG4pOiB7IFtrZXkgaW4gR2VuZXJhdG9yVHlwZV0/OiBUIH0gPT4ge1xuICBjb25zdCBpdGVtc09iamVjdDogWm9uZU1hcDxUPiA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBpdGVtc09iamVjdFtpdGVtLmlkXSA9IGl0ZW07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGl0ZW1zT2JqZWN0O1xufTtcbiIsImV4cG9ydCBjb25zdCBTRl9WRVJTSU9OX0xFTkdUSCA9IDQ7XG5leHBvcnQgY29uc3QgU0ZfUFJFU0VUX0hFQURFUl9TSVpFID0gMzg7XG5leHBvcnQgY29uc3QgU0ZfQkFHX1NJWkUgPSA0O1xuZXhwb3J0IGNvbnN0IFNGX01PRFVMQVRPUl9TSVpFID0gMTA7XG5leHBvcnQgY29uc3QgU0ZfR0VORVJBVE9SX1NJWkUgPSA0O1xuZXhwb3J0IGNvbnN0IFNGX0lOU1RSVU1FTlRfSEVBREVSX1NJWkUgPSAyMjtcbmV4cG9ydCBjb25zdCBTRl9TQU1QTEVfSEVBREVSX1NJWkUgPSA0NjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0FNUExFX1JBVEUgPSAyMjA1MDtcblxuZXhwb3J0IHR5cGUgU0ZfSU5GT19DSFVOS1MgPVxuICB8ICdpZmlsJ1xuICB8ICdpc25nJ1xuICB8ICdJTkFNJ1xuICB8ICdpcm9tJ1xuICB8ICdpdmVyJ1xuICB8ICdJQ1JEJ1xuICB8ICdJRU5HJ1xuICB8ICdJUFJEJ1xuICB8ICdJQ09QJ1xuICB8ICdJQ01UJ1xuICB8ICdJU0ZUJztcbiIsImV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9jaHVuayc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL3NvdW5kRm9udDInO1xuIiwiaW1wb3J0IHsgUklGRkNodW5rIH0gZnJvbSAnLi9yaWZmQ2h1bmsnO1xuaW1wb3J0IHsgZ2V0U3RyaW5nRnJvbUJ1ZmZlciB9IGZyb20gJ34vdXRpbHMnO1xuXG4vKipcbiAqIEEgdXRpbGl0eSBjbGFzcyB0byBxdWlja2x5IGl0ZXJhdGUgb3ZlciBhIGJ1ZmZlci5cbiAqL1xuZXhwb3J0IGNsYXNzIENodW5rSXRlcmF0b3I8VCA9IGFueT4ge1xuICBwdWJsaWMgcmVhZG9ubHkgdGFyZ2V0OiBUW10gPSBbXTtcbiAgcHJpdmF0ZSByZWFkb25seSBjaHVuazogUklGRkNodW5rO1xuICBwcml2YXRlIHBvc2l0aW9uOiBudW1iZXIgPSAwO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihjaHVuazogUklGRkNodW5rLCBzdGFydDogbnVtYmVyID0gMCkge1xuICAgIHRoaXMuY2h1bmsgPSBjaHVuaztcbiAgICB0aGlzLnBvc2l0aW9uID0gc3RhcnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwb3NpdGlvbiBmcm9tIHRoZSBpdGVyYXRvci5cbiAgICovXG4gIHB1YmxpYyBnZXQgY3VycmVudFBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIHRoZSBjaHVuay5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgZXZlcnkgaXRlcmF0aW9uXG4gICAqL1xuICBwdWJsaWMgaXRlcmF0ZShjYWxsYmFjazogKGl0ZXJhdG9yOiBDaHVua0l0ZXJhdG9yPFQ+KSA9PiBUIHwgbnVsbCkge1xuICAgIHdoaWxlICh0aGlzLnBvc2l0aW9uIDwgdGhpcy5jaHVuay5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG9iamVjdCA9IGNhbGxiYWNrKHRoaXMpO1xuICAgICAgaWYgKG9iamVjdCkge1xuICAgICAgICB0aGlzLnRhcmdldC5wdXNoKG9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHN0cmluZyBmcm9tIHRoZSBidWZmZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSBUaGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmcuIElmIG5vIGxlbmd0aCBpcyBzcGVjaWZpZWQsIGEgZGVmYXVsdCBvZiAyMFxuICAgKiAgIGlzIGFzc3VtZWRcbiAgICovXG4gIHB1YmxpYyBnZXRTdHJpbmcobGVuZ3RoOiBudW1iZXIgPSAyMCk6IHN0cmluZyB7XG4gICAgY29uc3QgdGV4dCA9IGdldFN0cmluZ0Zyb21CdWZmZXIodGhpcy5nZXRCdWZmZXIodGhpcy5wb3NpdGlvbiwgbGVuZ3RoKSk7XG4gICAgdGhpcy5wb3NpdGlvbiArPSBsZW5ndGg7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgc2lnbmVkIDE2LWJpdCBpbnRlZ2VyIGZyb20gdGhlIGNodW5rLlxuICAgKi9cbiAgcHVibGljIGdldEludDE2KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2h1bmsuYnVmZmVyW3RoaXMucG9zaXRpb24rK10gfCAodGhpcy5jaHVuay5idWZmZXJbdGhpcy5wb3NpdGlvbisrXSA8PCA4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBzaWduZWQgMTYtYml0IGludGVnZXIgZnJvbSB0aGUgY2h1bmsgaW4gdGhlIGJpZy1lbmRpYW4gZm9ybWF0LlxuICAgKi9cbiAgcHVibGljIGdldEludDE2QkUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0SW50MTYoKSA8PCAxNikgPj4gMTY7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIHVuc2lnbmVkIDMyLWJpdCBpbnRlZ2VyIGZyb20gdGhlIGNodW5rLlxuICAgKi9cbiAgcHVibGljIGdldFVJbnQzMigpOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5jaHVuay5idWZmZXJbdGhpcy5wb3NpdGlvbisrXSB8XG4gICAgICAgICh0aGlzLmNodW5rLmJ1ZmZlclt0aGlzLnBvc2l0aW9uKytdIDw8IDgpIHxcbiAgICAgICAgKHRoaXMuY2h1bmsuYnVmZmVyW3RoaXMucG9zaXRpb24rK10gPDwgMTYpIHxcbiAgICAgICAgKHRoaXMuY2h1bmsuYnVmZmVyW3RoaXMucG9zaXRpb24rK10gPDwgMjQpKSA+Pj5cbiAgICAgIDBcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZSBieXRlIGZyb20gdGhlIGNodW5rLlxuICAgKi9cbiAgcHVibGljIGdldEJ5dGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jaHVuay5idWZmZXJbdGhpcy5wb3NpdGlvbisrXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBzaWduZWQgY2hhciBmcm9tIHRoZSBjaHVuay5cbiAgICovXG4gIHB1YmxpYyBnZXRDaGFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICh0aGlzLmNodW5rLmJ1ZmZlclt0aGlzLnBvc2l0aW9uKytdIDw8IDI0KSA+PiAyNDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTa2lwIGFoZWFkIGluIHRoZSBidWZmZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICovXG4gIHB1YmxpYyBza2lwKGxlbmd0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvbiArPSBsZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcGFydCBvZiB0aGUgYnVmZmVyIGZyb20gc3RhcnQgdG8gc3RhcnQgKyBsZW5ndGguXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gICAqL1xuICBwcml2YXRlIGdldEJ1ZmZlcihzdGFydDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcik6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybiB0aGlzLmNodW5rLmJ1ZmZlci5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW5ndGgpO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NodW5rSXRlcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJzZUVycm9yJztcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vcmlmZkNodW5rJztcbiIsIi8qKlxuICogRXJyb3IgY2xhc3MgdXNlZCBmb3IgYWxsIGVycm9ycyBlbmNvdW50ZXJlZCBkdXJpbmcgdGhlIHBhcnNpbmcgb2YgdGhlIFNvdW5kRm9udCAyIGZpbGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBwdWJsaWMgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKTtcbiAgcHVibGljIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgZXhwZWN0ZWQ6IHN0cmluZywgcmVjZWl2ZWQ6IHN0cmluZyk7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGV4cGVjdGVkPzogc3RyaW5nLCByZWNlaXZlZD86IHN0cmluZykge1xuICAgIHN1cGVyKFxuICAgICAgYCR7bWVzc2FnZX0ke2V4cGVjdGVkICYmIHJlY2VpdmVkID8gYCwgZXhwZWN0ZWQgJHtleHBlY3RlZH0sIHJlY2VpdmVkICR7cmVjZWl2ZWR9YCA6IGBgfWBcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZUVycm9yIH0gZnJvbSAnLi9wYXJzZUVycm9yJztcbmltcG9ydCB7IGdldFN0cmluZ0Zyb21CdWZmZXIgfSBmcm9tICd+L3V0aWxzL2J1ZmZlcic7XG5pbXBvcnQgeyBSSUZGQ2h1bmsgfSBmcm9tICcuL3JpZmZDaHVuayc7XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gcGFyc2UgYSBSSUZGIGZpbGUgZnJvbSBhIHJhdyBidWZmZXIuXG4gKlxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXIgLSBUaGUgaW5wdXQgYnVmZmVyXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZUJ1ZmZlciA9IChidWZmZXI6IFVpbnQ4QXJyYXkpOiBSSUZGQ2h1bmsgPT4ge1xuICBjb25zdCBpZCA9IGdldENodW5rSWQoYnVmZmVyKTtcbiAgaWYgKGlkICE9PSAnUklGRicpIHtcbiAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcignSW52YWxpZCBmaWxlIGZvcm1hdCcsICdSSUZGJywgaWQpO1xuICB9XG5cbiAgY29uc3Qgc2lnbmF0dXJlID0gZ2V0Q2h1bmtJZChidWZmZXIsIDgpO1xuICBpZiAoc2lnbmF0dXJlICE9PSAnc2ZiaycpIHtcbiAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcignSW52YWxpZCBzaWduYXR1cmUnLCAnc2ZiaycsIHNpZ25hdHVyZSk7XG4gIH1cblxuICBjb25zdCBuZXdCdWZmZXIgPSBidWZmZXIuc3ViYXJyYXkoOCk7XG4gIGNvbnN0IHN1YkNodW5rcyA9IGdldFN1YkNodW5rcyhuZXdCdWZmZXIuc3ViYXJyYXkoNCkpO1xuICByZXR1cm4gbmV3IFJJRkZDaHVuayhpZCwgbmV3QnVmZmVyLmxlbmd0aCwgbmV3QnVmZmVyLCBzdWJDaHVua3MpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBSSUZGIGNodW5rIGZyb20gYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciAtIFRoZSBpbnB1dCBidWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFdoZXJlIHRvIHN0YXJ0IHJlYWRpbmcgdGhlIGJ1ZmZlclxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2h1bmsgPSAoYnVmZmVyOiBVaW50OEFycmF5LCBzdGFydDogbnVtYmVyKTogUklGRkNodW5rID0+IHtcbiAgY29uc3QgaWQgPSBnZXRDaHVua0lkKGJ1ZmZlciwgc3RhcnQpO1xuICBjb25zdCBsZW5ndGggPSBnZXRDaHVua0xlbmd0aChidWZmZXIsIHN0YXJ0ICsgNCk7XG5cbiAgLy8gUklGRiBhbmQgTElTVCBjaHVua3MgY2FuIGhhdmUgc3ViLWNodW5rc1xuICBsZXQgc3ViQ2h1bmtzOiBSSUZGQ2h1bmtbXSA9IFtdO1xuICBpZiAoaWQgPT09ICdSSUZGJyB8fCBpZCA9PT0gJ0xJU1QnKSB7XG4gICAgc3ViQ2h1bmtzID0gZ2V0U3ViQ2h1bmtzKGJ1ZmZlci5zdWJhcnJheShzdGFydCArIDEyKSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJJRkZDaHVuayhpZCwgbGVuZ3RoLCBidWZmZXIuc3ViYXJyYXkoc3RhcnQgKyA4KSwgc3ViQ2h1bmtzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSBjaHVuaywgYmFzZWQgb24gdGhlIFJJRkYgbGVuZ3RoIHNwZWNpZmllci5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIC0gVGhlIGlucHV0IGJ1ZmZlclxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IC0gV2hlcmUgdG8gc3RhcnQgcmVhZGluZyB0aGUgYnVmZmVyIGZvciB0aGUgbGVuZ3RoXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaHVua0xlbmd0aCA9IChidWZmZXI6IFVpbnQ4QXJyYXksIHN0YXJ0OiBudW1iZXIpID0+IHtcbiAgYnVmZmVyID0gYnVmZmVyLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIDQpO1xuXG4gIHJldHVybiAoYnVmZmVyWzBdIHwgKGJ1ZmZlclsxXSA8PCA4KSB8IChidWZmZXJbMl0gPDwgMTYpIHwgKGJ1ZmZlclszXSA8PCAyNCkpID4+PiAwO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIHN1Yi1jaHVua3MgaW4gYSBidWZmZXIuIFRoaXMgd2lsbCByZWFkIHVudGlsIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlciBhbmQgcmV0dXJuIGFueVxuICogc3ViLWNodW5rcyBmb3VuZCBpbiBpdC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIC0gVGhlIGlucHV0IGJ1ZmZlclxuICovXG5leHBvcnQgY29uc3QgZ2V0U3ViQ2h1bmtzID0gKGJ1ZmZlcjogVWludDhBcnJheSk6IFJJRkZDaHVua1tdID0+IHtcbiAgY29uc3QgY2h1bmtzOiBSSUZGQ2h1bmtbXSA9IFtdO1xuICBsZXQgaW5kZXggPSAwO1xuXG4gIHdoaWxlIChpbmRleCA8PSBidWZmZXIubGVuZ3RoIC0gOCkge1xuICAgIGNvbnN0IHN1YkNodW5rID0gZ2V0Q2h1bmsoYnVmZmVyLCBpbmRleCk7XG4gICAgY2h1bmtzLnB1c2goc3ViQ2h1bmspO1xuXG4gICAgaW5kZXggKz0gOCArIHN1YkNodW5rLmxlbmd0aDtcbiAgICBpbmRleCA9IGluZGV4ICUgMiA/IGluZGV4ICsgMSA6IGluZGV4O1xuICB9XG5cbiAgcmV0dXJuIGNodW5rcztcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjaHVuayBJRCAoZm91ckNDKSBmcm9tIHRoZSBidWZmZXIuIFRoaXMgYXNzdW1lcyB0aGUgZm91ckNDIGNvZGUgaXMgZm9ybWF0dGVkIGFzIGFuIFVURi04XG4gKiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciAtIFRoZSBpbnB1dCBidWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFdoZXJlIHRvIHN0YXJ0IHJlYWRpbmcgdGhlIGNodW5rIElEIGZyb20gdGhlIGJ1ZmZlclxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2h1bmtJZCA9IChidWZmZXI6IFVpbnQ4QXJyYXksIHN0YXJ0OiBudW1iZXIgPSAwKSA9PiB7XG4gIHJldHVybiBnZXRTdHJpbmdGcm9tQnVmZmVyKGJ1ZmZlci5zdWJhcnJheShzdGFydCwgc3RhcnQgKyA0KSk7XG59O1xuIiwiaW1wb3J0IHsgQ2h1bmtJdGVyYXRvciB9IGZyb20gJy4vY2h1bmtJdGVyYXRvcic7XG5pbXBvcnQgeyBnZXRTdHJpbmdGcm9tQnVmZmVyIH0gZnJvbSAnfi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBSSUZGQ2h1bmsge1xuICAvKipcbiAgICogVGhlIGNodW5rIElEIChmb3VyQ0MpLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIGNodW5rLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGxlbmd0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgcmF3IGJ1ZmZlciBvZiB0aGUgY2h1bmsuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYnVmZmVyOiBVaW50OEFycmF5O1xuXG4gIC8qKlxuICAgKiBUaGUgc3ViLWNodW5rcyBvZiB0aGUgY2h1bmsuIElmIHRoZSBjaHVuayBpcyBub3QgYSBSSUZGIG9yIExJU1QgY2h1bmssIHRoaXMgd2lsbCBiZSBhbiBlbXB0eVxuICAgKiBhcnJheS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzdWJDaHVua3M6IFJJRkZDaHVua1tdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYnVmZmVyOiBVaW50OEFycmF5LCBzdWJDaHVua3M6IFJJRkZDaHVua1tdKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgIHRoaXMuc3ViQ2h1bmtzID0gc3ViQ2h1bmtzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHN0cmluZyBmcm9tIHRoZSBidWZmZXIuIElmIG5vIHBvc2l0aW9uIGFuZCBubyBsZW5ndGggaXMgc3BlY2lmaWVkLCBpdCByZXR1cm5zIHRoZSB3aG9sZVxuICAgKiBidWZmZXIgYXMgYSBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcG9zaXRpb25dXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXVxuICAgKi9cbiAgcHVibGljIGdldFN0cmluZyhwb3NpdGlvbjogbnVtYmVyID0gMCwgbGVuZ3RoPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0U3RyaW5nRnJvbUJ1ZmZlcih0aGlzLmdldEJ1ZmZlcihwb3NpdGlvbiwgbGVuZ3RoIHx8IHRoaXMubGVuZ3RoIC0gcG9zaXRpb24pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBzaWduZWQgMTYtYml0IGludGVnZXIgZnJvbSB0aGUgYnVmZmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3Bvc2l0aW9uXVxuICAgKi9cbiAgcHVibGljIGdldEludDE2KHBvc2l0aW9uOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5idWZmZXJbcG9zaXRpb24rK10gfCAodGhpcy5idWZmZXJbcG9zaXRpb25dIDw8IDgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiB1bnNpZ25lZCAzMi1iaXQgaW50ZWdlciBmcm9tIHRoZSBidWZmZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcG9zaXRpb25dXG4gICAqL1xuICBwdWJsaWMgZ2V0VUludDMyKHBvc2l0aW9uOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuYnVmZmVyW3Bvc2l0aW9uKytdIHxcbiAgICAgICAgKHRoaXMuYnVmZmVyW3Bvc2l0aW9uKytdIDw8IDgpIHxcbiAgICAgICAgKHRoaXMuYnVmZmVyW3Bvc2l0aW9uKytdIDw8IDE2KSB8XG4gICAgICAgICh0aGlzLmJ1ZmZlcltwb3NpdGlvbl0gPDwgMjQpKSA+Pj5cbiAgICAgIDBcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGJ5dGUgZnJvbSB0aGUgYnVmZmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3Bvc2l0aW9uXVxuICAgKi9cbiAgcHVibGljIGdldEJ5dGUocG9zaXRpb246IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmJ1ZmZlcltwb3NpdGlvbl07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgY2hhciBmcm9tIHRoZSBidWZmZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcG9zaXRpb25dXG4gICAqL1xuICBwdWJsaWMgZ2V0Q2hhcihwb3NpdGlvbjogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgcmV0dXJuICh0aGlzLmJ1ZmZlcltwb3NpdGlvbl0gPDwgMjQpID4+IDI0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGNodW5rIGl0ZXJhdG9yIGZvciB0aGUgY2h1bmsuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRdIC0gVGhlIHBvc2l0aW9uIHdoZXJlIHRvIHN0YXJ0IGl0ZXJhdGluZy4gRGVmYXVsdHMgdG8gMC5cbiAgICovXG4gIHB1YmxpYyBpdGVyYXRvcjxUID0gYW55PihzdGFydDogbnVtYmVyID0gMCk6IENodW5rSXRlcmF0b3I8VD4ge1xuICAgIHJldHVybiBuZXcgQ2h1bmtJdGVyYXRvcjxUPih0aGlzLCBzdGFydCk7XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBxdWlja2x5IGl0ZXJhdGUgb3ZlciBhIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAdGVtcGxhdGUgVFxuICAgKiBAcGFyYW0geyhpdGVyYXRvcjogQ2h1bmtJdGVyYXRvcik6IFR9IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIHRoYXQgcmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGVcbiAgICogICBzcGVjaWZpZWQgcmV0dXJuIHR5cGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydF0gLSBUaGUgb3B0aW9uYWwgaW5kZXggd2hlcmUgdG8gc3RhcnQgaXRlcmF0aW5nIG92ZXIgdGhlIGNodW5rXG4gICAqL1xuICBwdWJsaWMgaXRlcmF0ZTxUID0gYW55PihjYWxsYmFjazogKGl0ZXJhdG9yOiBDaHVua0l0ZXJhdG9yKSA9PiBUIHwgbnVsbCwgc3RhcnQ6IG51bWJlciA9IDApOiBUW10ge1xuICAgIGNvbnN0IGl0ZXJhdG9yID0gbmV3IENodW5rSXRlcmF0b3I8VD4odGhpcywgc3RhcnQpO1xuICAgIGl0ZXJhdG9yLml0ZXJhdGUoY2FsbGJhY2spO1xuICAgIHJldHVybiBpdGVyYXRvci50YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgYnVmZmVyIGZyb20gYHN0YXJ0YCB0byBgc3RhcnRgICsgYGxlbmd0aGAuIFRoZSBidWZmZXIgaXMgbm90IGNvcGllZCAoZS5nLiB3aGVuIHVzaW5nXG4gICAqIC5zbGljZSgpKSwgc28gYW55IG1vZGlmaWNhdGlvbnMgdG8gdGhlIGJ1ZmZlciBhcmUgZG9uZSB0byB0aGUgb3JpZ2luYWwgYnVmZmVyIHRvby5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICovXG4gIHByaXZhdGUgZ2V0QnVmZmVyKHN0YXJ0OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKTogVWludDhBcnJheSB7XG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbmd0aCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEJhbmssXG4gIEdlbmVyYXRvclR5cGUsXG4gIEluc3RydW1lbnQsXG4gIEtleSxcbiAgTWV0YURhdGEsXG4gIFByZXNldCxcbiAgUHJlc2V0RGF0YSxcbiAgU2FtcGxlLFxuICBab25lSXRlbXNcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTRjJDaHVuayB9IGZyb20gJy4vY2h1bmsnO1xuaW1wb3J0IHsgcGFyc2VCdWZmZXIsIFBhcnNlRXJyb3IgfSBmcm9tICcuL3JpZmYnO1xuaW1wb3J0IHsgZ2V0SXRlbXNJblpvbmUgfSBmcm9tICcuL2NodW5rcyc7XG5pbXBvcnQgeyBtZW1vaXplIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBTb3VuZEZvbnQyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgU291bmRGb250MmAgaW5zdGFuY2UgZnJvbSBhIHJhdyBpbnB1dCBidWZmZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZmVyXG4gICAqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGggYG5ldyBTb3VuZEZvbnQyKGJ1ZmZlcjogVWludDhBcnJheSk7YFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tKGJ1ZmZlcjogVWludDhBcnJheSk6IFNvdW5kRm9udDIge1xuICAgIHJldHVybiBuZXcgU291bmRGb250MihidWZmZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSByYXcgUklGRiBjaHVuayBkYXRhLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGNodW5rOiBTRjJDaHVuaztcblxuICAvKipcbiAgICogVGhlIG1ldGEgZGF0YS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBtZXRhRGF0YTogTWV0YURhdGE7XG5cbiAgLyoqXG4gICAqIFRoZSByYXcgc2FtcGxlIGRhdGEuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgc2FtcGxlRGF0YTogVWludDhBcnJheTtcblxuICAvKipcbiAgICogVGhlIHBhcnNlZCBzYW1wbGVzLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHNhbXBsZXM6IFNhbXBsZVtdO1xuXG4gIC8qKlxuICAgKiBUaGUgdW5wYXJzZWQgcHJlc2V0IGRhdGEuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgcHJlc2V0RGF0YTogUHJlc2V0RGF0YTtcblxuICAvKipcbiAgICogVGhlIHBhcnNlZCBpbnN0dW1lbnRzLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGluc3RydW1lbnRzOiBJbnN0cnVtZW50W107XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJzZWQgcHJlc2V0cy5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBwcmVzZXRzOiBQcmVzZXRbXTtcblxuICAvKipcbiAgICogVGhlIHBhcnNlZCBiYW5rcy5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBiYW5rczogQmFua1tdO1xuXG4gIC8qKlxuICAgKiBMb2FkIGEgU291bmRGb250MiBmaWxlIGZyb20gYSBgVWludDhBcnJheWAgb3IgYSBgU0YyQ2h1bmtgLiBUaGUgcmVjb21tZW5kZWQgd2F5IGlzIHRvIHVzZSBhXG4gICAqIFVpbnQ4QXJyYXksIGxvYWRpbmcgYSBTb3VuZEZvbnQyIGZyb20gYSBgU0YyQ2h1bmtgIG9ubHkgZXhpc3RzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBhbmRcbiAgICogd2lsbCBsaWtlbHkgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl8U0YyQ2h1bmt9IGNodW5rXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoY2h1bms6IFVpbnQ4QXJyYXkgfCBTRjJDaHVuaykge1xuICAgIGlmICghKGNodW5rIGluc3RhbmNlb2YgU0YyQ2h1bmspKSB7XG4gICAgICBjb25zdCBwYXJzZWRCdWZmZXIgPSBwYXJzZUJ1ZmZlcihjaHVuayk7XG4gICAgICBjaHVuayA9IG5ldyBTRjJDaHVuayhwYXJzZWRCdWZmZXIpO1xuICAgIH1cblxuICAgIGlmIChjaHVuay5zdWJDaHVua3MubGVuZ3RoICE9PSAzKSB7XG4gICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcbiAgICAgICAgJ0ludmFsaWQgc2ZiayBzdHJ1Y3R1cmUnLFxuICAgICAgICAnMyBjaHVua3MnLFxuICAgICAgICBgJHtjaHVuay5zdWJDaHVua3MubGVuZ3RofSBjaHVua3NgXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuY2h1bmsgPSBjaHVuaztcbiAgICB0aGlzLm1ldGFEYXRhID0gY2h1bmsuc3ViQ2h1bmtzWzBdLmdldE1ldGFEYXRhKCk7XG4gICAgdGhpcy5zYW1wbGVEYXRhID0gY2h1bmsuc3ViQ2h1bmtzWzFdLmdldFNhbXBsZURhdGEoKTtcbiAgICB0aGlzLnByZXNldERhdGEgPSBjaHVuay5zdWJDaHVua3NbMl0uZ2V0UHJlc2V0RGF0YSgpO1xuXG4gICAgdGhpcy5zYW1wbGVzID0gdGhpcy5nZXRTYW1wbGVzKCk7XG4gICAgdGhpcy5pbnN0cnVtZW50cyA9IHRoaXMuZ2V0SW5zdHJ1bWVudHMoKTtcbiAgICB0aGlzLnByZXNldHMgPSB0aGlzLmdldFByZXNldHMoKTtcbiAgICB0aGlzLmJhbmtzID0gdGhpcy5nZXRCYW5rcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUga2V5IGRhdGEgYnkgTUlESSBiYW5rLCBwcmVzZXQgYW5kIGtleSBudW1iZXIuIE1heSByZXR1cm4gbnVsbCBpZiBubyBpbnN0cnVtZW50IHdhc1xuICAgKiBmb3VuZCBmb3IgdGhlIGdpdmVuIGlucHV0cy4gTm90ZSB0aGF0IHRoaXMgZG9lcyBub3QgcHJvY2VzcyBhbnkgb2YgdGhlIGdlbmVyYXRvcnMgdGhhdCBhcmVcbiAgICogc3BlY2lmaWMgdG8gdGhlIGtleSBudW1iZXIuXG4gICAqXG4gICAqIFRoZSByZXN1bHQgaXMgbWVtb2l6ZWQgYmFzZWQgb24gYWxsIGFyZ3VtZW50cywgdG8gcHJldmVudCBoYXZpbmcgdG8gY2hlY2sgYWxsIHByZXNldHMsXG4gICAqIGluc3RydW1lbnRzIGV0Yy4gZXZlcnkgdGltZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1lbW9pemVkS2V5TnVtYmVyIC0gVGhlIE1JREkga2V5IG51bWJlclxuICAgKiBAcGFyYW0ge251bWJlcn0gW21lbW9pemVkQmFua051bWJlcl0gLSBUaGUgYmFuayBpbmRleCBudW1iZXIsIGRlZmF1bHRzIHRvIDBcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttZW1vaXplZFByZXNldE51bWJlcl0gLSBUaGUgcHJlc2V0IG51bWJlciwgZGVmYXVsdHMgdG8gMFxuICAgKi9cbiAgcHVibGljIGdldEtleURhdGEoXG4gICAgbWVtb2l6ZWRLZXlOdW1iZXI6IG51bWJlcixcbiAgICBtZW1vaXplZEJhbmtOdW1iZXI6IG51bWJlciA9IDAsXG4gICAgbWVtb2l6ZWRQcmVzZXROdW1iZXI6IG51bWJlciA9IDBcbiAgKTogS2V5IHwgbnVsbCB7XG4gICAgLy8gR2V0IGEgbWVtb2l6ZWQgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb25cbiAgICByZXR1cm4gbWVtb2l6ZShcbiAgICAgIChrZXlOdW1iZXI6IG51bWJlciwgYmFua051bWJlcjogbnVtYmVyLCBwcmVzZXROdW1iZXI6IG51bWJlcik6IEtleSB8IG51bGwgPT4ge1xuICAgICAgICBjb25zdCBiYW5rID0gdGhpcy5iYW5rc1tiYW5rTnVtYmVyXTtcbiAgICAgICAgaWYgKGJhbmspIHtcbiAgICAgICAgICBjb25zdCBwcmVzZXQgPSBiYW5rLnByZXNldHNbcHJlc2V0TnVtYmVyXTtcbiAgICAgICAgICBpZiAocHJlc2V0KSB7XG4gICAgICAgICAgICBjb25zdCBwcmVzZXRab25lID0gcHJlc2V0LnpvbmVzLmZpbmQoem9uZSA9PiB0aGlzLmlzS2V5SW5SYW5nZSh6b25lLCBrZXlOdW1iZXIpKTtcbiAgICAgICAgICAgIGlmIChwcmVzZXRab25lKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGluc3RydW1lbnQgPSBwcmVzZXRab25lLmluc3RydW1lbnQ7XG4gICAgICAgICAgICAgIGNvbnN0IGluc3RydW1lbnRab25lID0gaW5zdHJ1bWVudC56b25lcy5maW5kKHpvbmUgPT5cbiAgICAgICAgICAgICAgICB0aGlzLmlzS2V5SW5SYW5nZSh6b25lLCBrZXlOdW1iZXIpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChpbnN0cnVtZW50Wm9uZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZSA9IGluc3RydW1lbnRab25lLnNhbXBsZTtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5lcmF0b3JzID0geyAuLi5wcmVzZXRab25lLmdlbmVyYXRvcnMsIC4uLmluc3RydW1lbnRab25lLmdlbmVyYXRvcnMgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGF0b3JzID0geyAuLi5wcmVzZXRab25lLm1vZHVsYXRvcnMsIC4uLmluc3RydW1lbnRab25lLm1vZHVsYXRvcnMgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBrZXlOdW1iZXIsXG4gICAgICAgICAgICAgICAgICBwcmVzZXQsXG4gICAgICAgICAgICAgICAgICBpbnN0cnVtZW50LFxuICAgICAgICAgICAgICAgICAgc2FtcGxlLFxuICAgICAgICAgICAgICAgICAgZ2VuZXJhdG9ycyxcbiAgICAgICAgICAgICAgICAgIG1vZHVsYXRvcnNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgKShtZW1vaXplZEtleU51bWJlciwgbWVtb2l6ZWRCYW5rTnVtYmVyLCBtZW1vaXplZFByZXNldE51bWJlcik7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgTUlESSBrZXkgbnVtYmVyIGlzIGluIHRoZSByYW5nZSBvZiBhIHpvbmUuXG4gICAqXG4gICAqIEBwYXJhbSB7Wm9uZUl0ZW1zfSB6b25lIC0gVGhlIHpvbmUgdG8gY2hlY2tcbiAgICogQHBhcmFtIHtudW1iZXJ9IGtleU51bWJlciAtIFRoZSBNSURJIGtleSBudW1iZXIsIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjdcbiAgICovXG4gIHByaXZhdGUgaXNLZXlJblJhbmdlKHpvbmU6IFpvbmVJdGVtcywga2V5TnVtYmVyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgem9uZS5rZXlSYW5nZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAoem9uZS5rZXlSYW5nZS5sbyA8PSBrZXlOdW1iZXIgJiYgem9uZS5rZXlSYW5nZS5oaSA+PSBrZXlOdW1iZXIpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgcHJlc2V0cyB0byBiYW5rcy5cbiAgICovXG4gIHByaXZhdGUgZ2V0QmFua3MoKTogQmFua1tdIHtcbiAgICByZXR1cm4gdGhpcy5wcmVzZXRzLnJlZHVjZTxCYW5rW10+KCh0YXJnZXQsIHByZXNldCkgPT4ge1xuICAgICAgY29uc3QgYmFua051bWJlciA9IHByZXNldC5oZWFkZXIuYmFuaztcblxuICAgICAgaWYgKCF0YXJnZXRbYmFua051bWJlcl0pIHtcbiAgICAgICAgdGFyZ2V0W2JhbmtOdW1iZXJdID0ge1xuICAgICAgICAgIHByZXNldHM6IFtdXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHRhcmdldFtiYW5rTnVtYmVyXS5wcmVzZXRzW3ByZXNldC5oZWFkZXIucHJlc2V0XSA9IHByZXNldDtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSByYXcgcHJlc2V0IGRhdGEgdG8gcHJlc2V0cy5cbiAgICovXG4gIHByaXZhdGUgZ2V0UHJlc2V0cygpOiBQcmVzZXRbXSB7XG4gICAgY29uc3QgeyBwcmVzZXRIZWFkZXJzLCBwcmVzZXRab25lcywgcHJlc2V0R2VuZXJhdG9ycywgcHJlc2V0TW9kdWxhdG9ycyB9ID0gdGhpcy5wcmVzZXREYXRhO1xuXG4gICAgY29uc3QgcHJlc2V0cyA9IGdldEl0ZW1zSW5ab25lKFxuICAgICAgcHJlc2V0SGVhZGVycyxcbiAgICAgIHByZXNldFpvbmVzLFxuICAgICAgcHJlc2V0TW9kdWxhdG9ycyxcbiAgICAgIHByZXNldEdlbmVyYXRvcnMsXG4gICAgICB0aGlzLmluc3RydW1lbnRzLFxuICAgICAgR2VuZXJhdG9yVHlwZS5JbnN0cnVtZW50XG4gICAgKTtcblxuICAgIHJldHVybiBwcmVzZXRzXG4gICAgICAuZmlsdGVyKHByZXNldCA9PiBwcmVzZXQuaGVhZGVyLm5hbWUgIT09ICdFT1AnKVxuICAgICAgLm1hcChwcmVzZXQgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhlYWRlcjogcHJlc2V0LmhlYWRlcixcbiAgICAgICAgICB6b25lczogcHJlc2V0LnpvbmVzLm1hcCh6b25lID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtleVJhbmdlOiB6b25lLmtleVJhbmdlLFxuICAgICAgICAgICAgICBnZW5lcmF0b3JzOiB6b25lLmdlbmVyYXRvcnMsXG4gICAgICAgICAgICAgIG1vZHVsYXRvcnM6IHpvbmUubW9kdWxhdG9ycyxcbiAgICAgICAgICAgICAgaW5zdHJ1bWVudDogem9uZS5yZWZlcmVuY2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSByYXcgaW5zdHJ1bWVudCBkYXRhIChmb3VuZCBpbiB0aGUgcHJlc2V0IGRhdGEpIHRvIGluc3RydW1lbnRzLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRJbnN0cnVtZW50cygpOiBJbnN0cnVtZW50W10ge1xuICAgIGNvbnN0IHtcbiAgICAgIGluc3RydW1lbnRIZWFkZXJzLFxuICAgICAgaW5zdHJ1bWVudFpvbmVzLFxuICAgICAgaW5zdHJ1bWVudE1vZHVsYXRvcnMsXG4gICAgICBpbnN0cnVtZW50R2VuZXJhdG9yc1xuICAgIH0gPSB0aGlzLnByZXNldERhdGE7XG5cbiAgICBjb25zdCBpbnN0cnVtZW50cyA9IGdldEl0ZW1zSW5ab25lKFxuICAgICAgaW5zdHJ1bWVudEhlYWRlcnMsXG4gICAgICBpbnN0cnVtZW50Wm9uZXMsXG4gICAgICBpbnN0cnVtZW50TW9kdWxhdG9ycyxcbiAgICAgIGluc3RydW1lbnRHZW5lcmF0b3JzLFxuICAgICAgdGhpcy5zYW1wbGVzLFxuICAgICAgR2VuZXJhdG9yVHlwZS5TYW1wbGVJZFxuICAgICk7XG5cbiAgICByZXR1cm4gaW5zdHJ1bWVudHNcbiAgICAgIC5maWx0ZXIoaW5zdHJ1bWVudCA9PiBpbnN0cnVtZW50LmhlYWRlci5uYW1lICE9PSAnRU9JJylcbiAgICAgIC5tYXAoaW5zdHJ1bWVudCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGVhZGVyOiBpbnN0cnVtZW50LmhlYWRlcixcbiAgICAgICAgICB6b25lczogaW5zdHJ1bWVudC56b25lcy5tYXAoem9uZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBrZXlSYW5nZTogem9uZS5rZXlSYW5nZSxcbiAgICAgICAgICAgICAgZ2VuZXJhdG9yczogem9uZS5nZW5lcmF0b3JzLFxuICAgICAgICAgICAgICBtb2R1bGF0b3JzOiB6b25lLm1vZHVsYXRvcnMsXG4gICAgICAgICAgICAgIHNhbXBsZTogem9uZS5yZWZlcmVuY2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSByYXcgc2FtcGxlIGRhdGEgYW5kIHNhbXBsZSBoZWFkZXJzIHRvIHNhbXBsZXMuXG4gICAqL1xuICBwcml2YXRlIGdldFNhbXBsZXMoKTogU2FtcGxlW10ge1xuICAgIHJldHVybiB0aGlzLnByZXNldERhdGEuc2FtcGxlSGVhZGVyc1xuICAgICAgLmZpbHRlcihzYW1wbGUgPT4gc2FtcGxlLm5hbWUgIT09ICdFT1MnKVxuICAgICAgLm1hcChoZWFkZXIgPT4ge1xuICAgICAgICAvLyBTYW1wbGUgcmF0ZSBtdXN0IGJlIGFib3ZlIDBcbiAgICAgICAgaWYgKGhlYWRlci5uYW1lICE9PSAnRU9TJyAmJiBoZWFkZXIuc2FtcGxlUmF0ZSA8PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYElsbGVnYWwgc2FtcGxlIHJhdGUgb2YgJHtoZWFkZXIuc2FtcGxlUmF0ZX0gaHogaW4gc2FtcGxlICcke2hlYWRlci5uYW1lfSdgXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9yaWdpbmFsIHBpdGNoIGNhbm5vdCBiZSBiZXR3ZWVuIDEyOCBhbmQgMjU0XG4gICAgICAgIGlmIChoZWFkZXIub3JpZ2luYWxQaXRjaCA+PSAxMjggJiYgaGVhZGVyLm9yaWdpbmFsUGl0Y2ggPD0gMjU0KSB7XG4gICAgICAgICAgaGVhZGVyLm9yaWdpbmFsUGl0Y2ggPSA2MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWRlci5zdGFydExvb3AgLT0gaGVhZGVyLnN0YXJ0O1xuICAgICAgICBoZWFkZXIuZW5kTG9vcCAtPSBoZWFkZXIuc3RhcnQ7XG5cbiAgICAgICAgLy8gVHVybnMgdGhlIFVpbnQ4QXJyYXkgaW50byBhIEludDE2QXJyYXlcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBJbnQxNkFycmF5KFxuICAgICAgICAgIG5ldyBVaW50OEFycmF5KHRoaXMuc2FtcGxlRGF0YS5zdWJhcnJheShoZWFkZXIuc3RhcnQgKiAyLCBoZWFkZXIuZW5kICogMikpLmJ1ZmZlclxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgIGRhdGFcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvKipcbiAqIEdlbmVyYXRvciAob3IgbW9kdWxhdG9yKSB0eXBlcy4gVGhlc2UgYXJlIGRlZmluZWQgaW4gYSBzcGVjaWZpYyBvcmRlciwgZm9sbG93aW5nIHRoZSBzcGVjLiBUaGVcbiAqIGVudW0gSUQgY29ycmVzcG9uZHMgd2l0aCB0aGUgSUQgaW4gdGhlIHNwZWMsIHNvIHRoZSB1bnVzZWQgYW5kIHJlc2VydmVkIGZpZWxkcyBzaG91bGQgbm90IGJlXG4gKiByZW1vdmVkLlxuICovXG5leHBvcnQgZW51bSBHZW5lcmF0b3JUeXBlIHtcbiAgLyoqXG4gICAqIFRoZSBvZmZzZXQgaW4gc2FtcGxlIGRhdGEgcG9pbnRzIGJleW9uZCB0aGUgYHN0YXJ0YCBzYW1wbGUgaGVhZGVyLlxuICAgKi9cbiAgU3RhcnRBZGRyc09mZnNldCxcblxuICAvKipcbiAgICogVGhlIG9mZnNldCBpbiBzYW1wbGUgZGF0YSBwb2ludHMgYmV5b25kIHRoZSBgZW5kYCBzYW1wbGUgaGVhZGVyLlxuICAgKi9cbiAgRW5kQWRkcnNPZmZzZXQsXG5cbiAgLyoqXG4gICAqIFRoZSBvZmZzZXQgaW4gc2FtcGxlIGRhdGEgcG9pbnRzIGJleW9uZCB0aGUgYHN0YXJ0TG9vcGAgc2FtcGxlIGhlYWRlciB0byB0aGUgZmlyc3Qgc2FtcGxlIGRhdGFcbiAgICogcG9pbnQgdG8gYmUgcmVwZWF0ZWQgaW4gdGhlIGxvb3AgZm9yIHRoZSBpbnN0cnVtZW50LlxuICAgKi9cbiAgU3RhcnRMb29wQWRkcnNPZmZzZXQsXG5cbiAgLyoqXG4gICAqIFRoZSBvZmZzZXQgaW4gc2FtcGxlIGRhdGEgcG9pbnRzIGJleW9uZCB0aGUgYGVuZExvb3BgIHNhbXBsZSBoZWFkZXIgdG8gdGhlIHNhbXBsZSBkYXRhIHBvaW50XG4gICAqIGNvbnNpZGVyZWQgZXF1aXZhbGVudCB0byB0aGUgYHN0YXJ0TG9vcGAgc2FtcGxlIGRhdGEgcG9pbnQgZm9yIHRoZSBsb29wIGZvciB0aGlzIGluc3RydW1lbnQuXG4gICAqL1xuICBFbmRMb29wQWRkcnNPZmZzZXQsXG5cbiAgLyoqXG4gICAqIFRoZSBvZmZzZXQgaW4gMzI3Njggc2FtcGxlIGRhdGEgcG9pbnQgaW5jcmVtZW50cyBiZXlvbmQgdGhlIGBzdGFydGAgc2FtcGxlIGhlYWRlciBhbmQgdGhlXG4gICAqIGZpcnN0IHNhbXBsZSBkYXRhIHBvaW50IHRvIGJlIHBsYXllZCBpbiB0aGUgaW5zdHJ1bWVudC5cbiAgICovXG4gIFN0YXJ0QWRkcnNDb2Fyc2VPZmZzZXQsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWdyZWUgKGluIGNlbnRzKSB0byB3aGljaCBhIGZ1bGwgc2NhbGUgZXhjdXJzaW9uIG9mIHRoZSBtb2R1bGF0aW9uIExGTyB3aWxsIGluZmx1ZW5jZSB0aGVcbiAgICogcGl0Y2guXG4gICAqL1xuICBNb2RMRk9Ub1BpdGNoLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVncmVlIChpbiBjZW50cykgdG8gd2hpY2ggYSBmdWxsIHNjYWxlIGV4Y3Vyc2lvbiBvZiB0aGUgdmlicmF0byBMRk8gd2lsbCBpbmZsdWVuY2UgdGhlXG4gICAqIHBpdGNoLlxuICAgKi9cbiAgVmliTEZPVG9QaXRjaCxcblxuICAvKipcbiAgICogVGhlIGRlZ3JlZSAoaW4gY2VudHMpIHRvIHdoaWNoIGEgZnVsbCBzY2FsZSBleGN1cnNpb24gb2YgdGhlIG1vZHVsYXRpb24gZW52ZWxvcGUgd2lsbFxuICAgKiBpbmZsdWVuY2UgcGl0Y2guXG4gICAqL1xuICBNb2RFbnZUb1BpdGNoLFxuXG4gIC8qKlxuICAgKiBUaGUgY3V0b2ZmIGFuZCByZXNvbmFudCBmcmVxdWVuY3kgb2YgdGhlIGxvd3Bhc3MgZmlsdGVyIGluIGFic29sdXRlIGNlbnQgdW5pdHMuXG4gICAqL1xuICBJbml0aWFsRmlsdGVyRmMsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgYWJvdmUgREMgZ2FpbiBpbiBjZW50aWJlbHMgd2hpY2ggdGhlIGZpbHRlciByZXNvbmFuY2UgZXhoaWJpdHMgYXQgdGhlIGN1dG9mZlxuICAgKiBsYXRlbmN5LlxuICAgKi9cbiAgSW5pdGlhbEZpbHRlclEsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWdyZWUgKGluIGNlbnRzKSB0byB3aGljaCBhIGZ1bGwgc2NhbGUgZXhjdXJzaW9uIG9mIHRoZSBtb2R1bGF0aW9uIExGTyB3aWxsIGluZmx1ZW5jZSB0aGVcbiAgICogZmlsdGVyIGN1dG9mZiBmcmVxdWVuY3kuXG4gICAqL1xuICBNb2RMRk9Ub0ZpbHRlckZjLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVncmVlIChpbiBjZW50cykgdG8gd2hpY2ggYSBmdWxsIHNjYWxlIGV4Y3Vyc2lvbiBvZiB0aGUgbW9kdWxhdGlvbiBlbnZlbG9wZSB3aWxsXG4gICAqIGluZmx1ZW5jZSB0aGUgZmlsdGVyIGN1dG9mZiBmcmVxdWVuY3kuXG4gICAqL1xuICBNb2RFbnZUb0ZpbHRlckZjLFxuXG4gIC8qKlxuICAgKiBUaGUgb2Zmc2V0IGluIDMyNzY4IHNhbXBsZSBkYXRhIHBvaW50IGluY3JlbWVudHMgYmV5b25kIHRoZSBgZW5kYCBzYW1wbGUgaGVhZGVyIGFuZCB0aGUgbGFzdFxuICAgKiBzYW1wbGUgZGF0YSBwb2ludCB0byBiZSBwbGF5ZWQgaW4gdGhpcyBpbnN0cnVtZW50LlxuICAgKi9cbiAgRW5kQWRkcnNDb2Fyc2VPZmZzZXQsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWdyZWUgKGluIGNlbnRpYmVscykgdG8gd2hpY2ggYSBmdWxsIHNjYWxlIGV4Y3Vyc2lvbiBvZiB0aGUgbW9kdWxhdGlvbiBMRk8gd2lsbCBpbmZsdWVuY2VcbiAgICogdm9sdW1lLlxuICAgKi9cbiAgTW9kTEZPVG9Wb2x1bWUsXG5cbiAgLyoqXG4gICAqIFVudXNlZCBnZW5lcmF0b3IuIElmIHRoaXMgZ2VuZXJhdG9yIGlzIGVuY291bnRlcmVkLCBpdCBzaG91bGQgYmUgaWdub3JlZC5cbiAgICovXG4gIFVudXNlZDEsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWdyZWUgKGluIDAuMSUgdW5pdHMpIHRvIHdoaWNoIHRoZSBhdWRpbyBvdXRwdXQgb2YgdGhlIG5vdGUgaXMgc2VudCB0byB0aGUgY2hvcnVzIGVmZmVjdHNcbiAgICogcHJvY2Vzc29yLlxuICAgKi9cbiAgQ2hvcnVzRWZmZWN0c1NlbmQsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWdyZWUgKGluIDAuMSUgdW5pdHMpIHRvIHdoaWNoIHRoZSBhdWRpbyBvdXRwdXQgb2YgdGhlIG5vdGUgaXMgc2VudCB0byB0aGUgcmV2ZXJiIGVmZmVjdHNcbiAgICogcHJvY2Vzc29yLlxuICAgKi9cbiAgUmV2ZXJiRWZmZWN0c1NlbmQsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWdyZWUgKGluIDAuMSUgdW5pdHMpIHRvIHdoaWNoIHRoZSBkcnkgYXVkaW8gb3V0cHV0IG9mIHRoZSBub3RlIGlzIHBvc2l0aW9uZWQgdG8gdGhlIGxlZnRcbiAgICogb3IgcmlnaHQgb3V0cHV0LlxuICAgKi9cbiAgUGFuLFxuXG4gIC8qKlxuICAgKiBVbnVzZWQgZ2VuZXJhdG9yLiBJZiB0aGlzIGdlbmVyYXRvciBpcyBlbmNvdW50ZXJlZCwgaXQgc2hvdWxkIGJlIGlnbm9yZWQuXG4gICAqL1xuICBVbnVzZWQyLFxuXG4gIC8qKlxuICAgKiBVbnVzZWQgZ2VuZXJhdG9yLiBJZiB0aGlzIGdlbmVyYXRvciBpcyBlbmNvdW50ZXJlZCwgaXQgc2hvdWxkIGJlIGlnbm9yZWQuXG4gICAqL1xuICBVbnVzZWQzLFxuXG4gIC8qKlxuICAgKiBVbnVzZWQgZ2VuZXJhdG9yLiBJZiB0aGlzIGdlbmVyYXRvciBpcyBlbmNvdW50ZXJlZCwgaXQgc2hvdWxkIGJlIGlnbm9yZWQuXG4gICAqL1xuICBVbnVzZWQ0LFxuXG4gIC8qKlxuICAgKiBUaGUgZGVsYXkgdGltZSAoaW4gYWJzb2x1dGUgdGltZWNlbnRzKSBmcm9tIGtleSBvbiB1bnRpbCB0aGUgbW9kdWxhdGlvbiBMRk8gYmVnaW5zIGl0cyB1cHdhcmRcbiAgICogcmFtcCBmcm9tIHplcm8gdmFsdWUuIEEgdmFsdWUgb2YgemVybyBpbmRpY2F0ZXMgYSBvbmUgc2Vjb25kIGRlbGF5LlxuICAgKi9cbiAgRGVsYXlNb2RMRk8sXG5cbiAgLyoqXG4gICAqIFRoZSBmcmVxdWVuY3kgKGluIGFic29sdXRlIGNlbnRzKSBvZiB0aGUgbW9kdWxhdGlvbiBMRk8ncyB0cmlhbmd1bGFyIHBlcmlvZC4gQSB2YWx1ZSBvZiAwXG4gICAqIGluZGljYXRlcyBhIGZyZXF1ZW5jeSBvZiA4LjE3NiBIei5cbiAgICovXG4gIEZyZXFNb2RMRk8sXG5cbiAgLyoqXG4gICAqIFRoZSBkZWxheSB0aW1lIChpbiBhYnNvbHV0ZSB0aW1lY2VudHMpIGZyb20ga2V5IG9uIHVudGlsIHRoZSB2aWJyYXRvIExGTyBiZWdpbnMgaXRzIHVwd2FyZHNcbiAgICogcmFtcCBmcm9tIHplcm8gdmFsdWUuIEEgdmFsdWUgb2YgemVybyBpbmRpY2F0ZXMgYSBvbmUgc2Vjb25kIGRlbGF5LlxuICAgKi9cbiAgRGVsYXlWaWJMRk8sXG5cbiAgLyoqXG4gICAqIFRoZSBmcmVxdWVuY3kgKGluIGFic29sdXRlIGNlbnRzKSBvZiB0aGUgdmlicmF0byBMRk8ncyB0cmlhbmd1bGFyIHBlcmlvZC4gQSB2YWx1ZSBvZiB6ZXJvXG4gICAqIGluZGljYXRlcyBhIGZyZXF1ZW5jeSBvZiA4LjE3NiBIei5cbiAgICovXG4gIEZyZXFWaWJMRk8sXG5cbiAgLyoqXG4gICAqIFRoZSBkZWxheSB0aW1lIChpbiBhYnNvbHV0ZSB0aW1lY2VudHMpIGJldHdlZW4ga2V5IG9uIGFuZCB0aGUgc3RhcnQgb2YgdGhlIGF0dGFjayBwaGFzZSBvbiB0aGVcbiAgICogbW9kdWxhdGlvbiBlbnZlbG9wZS4gQSB2YWx1ZSBvZiB6ZXJvIGluZGljYXRlcyBhIG9uZSBzZWNvbmQgZGVsYXkuXG4gICAqL1xuICBEZWxheU1vZEVudixcblxuICAvKipcbiAgICogVGhlIHRpbWUgKGluIGFic29sdXRlIHRpbWVjZW50cykgZnJvbSB0aGUgZW5kIG9mIHRoZSBtb2R1bGF0aW9uIGVudmVsb3BlIGRlbGF5IHRpbWUgdW50aWwgdGhlXG4gICAqIHBvaW50IGF0IHdoaWNoIHRoZSBtb2R1bGF0aW9uIGVudmVsb3BlIHZhbHVlIHJlYWNoZXMgaXRzIHBlYWsuXG4gICAqL1xuICBBdHRhY2tNb2RFbnYsXG5cbiAgLyoqXG4gICAqIFRoZSB0aW1lIChpbiBhYnNvbHV0ZSB0aW1lY2VudHMpIGZyb20gdGhlIGVuZCBvZiB0aGUgYXR0YWNrIHBoYXNlIHRvIHRoZSBlbnRyeSBpbnRvIGRlY2F5XG4gICAqIHBoYXNlLCBkdXJpbmcgd2hpY2ggdGhlIGVudmVsb3BlIHZhbHVlIGlzIGhlbGQgYXQgaXRzIHBlYWsuIEEgdmFsdWUgb2YgemVybyBpbmRpY2F0ZXMgYSBvbmVcbiAgICogc2Vjb25kIGhvbGQgdGltZS5cbiAgICovXG4gIEhvbGRNb2RFbnYsXG5cbiAgLyoqXG4gICAqIFRoZSB0aW1lIChpbiBhYnNvbHV0ZSB0aW1lY2VudHMpIGZvciBhIDEwMCUgY2hhbmdlIGluIHRoZSBtb2R1bGF0aW9uIGVudmVsb3BlIHZhbHVlIGR1cmluZ1xuICAgKiBkZWNheSBwaGFzZS5cbiAgICovXG4gIERlY2F5TW9kRW52LFxuXG4gIC8qKlxuICAgKiBUaGUgZGVjcmVhc2UgaW4gbGV2ZWwgKGV4cHJlc3NlZCBpbiAwLjElIHVuaXRzKSB0byB3aGljaCB0aGUgbW9kdWxhdGlvbiBlbnZlbG9wZSByYW1wcyBkdXJpbmdcbiAgICogdGhlIGRlY2F5IHBoYXNlLlxuICAgKi9cbiAgU3VzdGFpbk1vZEVudixcblxuICAvKipcbiAgICogVGhlIHRpbWUgKGluIGFic29sdXRlIHRpbWVjZW50cykgZm9yIGEgMTAwJSBjaGFuZ2UgaW4gdGhlIG1vZHVsYXRpb24gZW52ZWxvcGUgdmFsdWUgZHVyaW5nXG4gICAqIHJlbGVhc2UgcGhhc2UuXG4gICAqL1xuICBSZWxlYXNlTW9kRW52LFxuXG4gIC8qKlxuICAgKiBUaGUgZGVncmVlIChpbiB0aW1lY2VudHMgcGVyIGtleSBudW1iZXIgdW5pdHMpIHRvIHdoaWNoIHRoZSBob2xkIHRpbWUgb2YgdGhlIG1vZHVsYXRpb25cbiAgICogZW52ZWxvcGUgaXMgZGVjcmVhc2VkIGJ5IGluY3JlYXNpbmcgdGhlIE1JREkga2V5IG51bWJlci5cbiAgICovXG4gIEtleU51bVRvTW9kRW52SG9sZCxcblxuICAvKipcbiAgICogVGhlIGRlZ3JlZSAoaW4gdGltZWNlbnRzIHBlciBrZXkgbnVtYmVyIHVuaXRzKSB0byB3aGljaCB0aGUgaG9sZCB0aW1lIG9mIHRoZSBtb2R1bGF0aW9uXG4gICAqIGVudmVsb3BlIGlzIGRlY3JlYXNlZCBieSBpbmNyZWFzaW5nIHRoZSBNSURJIGtleSBudW1iZXIuXG4gICAqL1xuICBLZXlOdW1Ub01vZEVudkRlY2F5LFxuXG4gIC8qKlxuICAgKiBUaGUgZGVsYXkgdGltZSAoaW4gYWJzb2x1dGUgdGltZWNlbnRzKSBiZXR3ZWVuIGtleSBvbiBhbmQgdGhlIHN0YXJ0IG9mIHRoZSBhdHRhY2sgcGhhc2Ugb2YgdGhlXG4gICAqIHZvbHVtZSBlbnZlbG9wZS4gQSB2YWx1ZSBvZiB6ZXJvIGluZGljYXRlcyBhIG9uZSBzZWNvbmQgZGVsYXkuXG4gICAqL1xuICBEZWxheVZvbEVudixcblxuICAvKipcbiAgICogVGhlIGRlbGF5IHRpbWUgKGluIGFic29sdXRlIHRpbWVjZW50cykgZnJvbSB0aGUgZW5kIG9mIHRoZSB2b2x1bWUgZW52ZWxvcGUgZGVsYXkgdGltZSB1bnRpbFxuICAgKiB0aGUgcG9pbnQgYXQgd2hpY2ggdGhlIHZvbHVtZSBlbnZlbG9wZSB2YWx1ZSByZWFjaGVzIGl0cyBwZWFrLlxuICAgKi9cbiAgQXR0YWNrVm9sRW52LFxuXG4gIC8qKlxuICAgKiBUaGUgdGltZSAoaW4gYWJzb2x1dGUgdGltZWNlbnRzKSBmcm9tIHRoZSBlbmQgb2YgdGhlIGF0dGFjayBwaGFzZSB0byB0aGUgZW50cnkgaW50byBkZWNheVxuICAgKiBwaGFzZSBkdXJpbmcgd2hpY2ggdGhlIHZvbHVtZSBlbnZlbG9wZSB2YWx1ZSBpcyBoZWxkIGF0IGl0cyBwZWFrLiBBIHZhbHVlIG9mIHplcm8gaW5kaWNhdGVzIGFcbiAgICogb25lIHNlY29uZCBob2xkIHRpbWUuXG4gICAqL1xuICBIb2xkVm9sRW52LFxuXG4gIC8qKlxuICAgKiBUaGUgdGltZSAoaW4gYWJzb2x1dGUgdGltZWNlbnRzKSBmb3IgYSAxMDAlIGNoYW5nZSBpbiB0aGUgdm9sdW1lIGVudmVsb3BlIHZhbHVlIGR1cmluZyBkZWNheVxuICAgKiBwaGFzZS5cbiAgICovXG4gIERlY2F5Vm9sRW52LFxuXG4gIC8qKlxuICAgKiBUaGUgZGVjcmVhc2UgaW4gbGV2ZWwgKGV4cHJlc3NlZCBpbiBjZW50aWJlbHMpIHRvIHdoaWNoIHRoZSB2b2x1bWUgZW52ZWxvcGUgdmFsdWUgcmFtcHMgZHVyaW5nXG4gICAqIHRoZSBkZWNheSBwaGFzZS5cbiAgICovXG4gIFN1c3RhaW5Wb2xFbnYsXG5cbiAgLyoqXG4gICAqIFRoZSB0aW1lIChpbiBhYnNvbHV0ZSBjZW50aWJlbHMpIGZvciBhIDEwMCUgY2hhbmdlIGluIHRoZSB2b2x1bWUgZW52ZWxvcGUgZHVyaW5nIHJlbGVhc2VcbiAgICogcGhhc2UuIEEgdmFsdWUgb2YgemVybyBpbmRpY2F0ZXMgYSBvbmUgc2Vjb25kIGRlY2F5IHRpbWUuXG4gICAqL1xuICBSZWxlYXNlVm9sRW52LFxuXG4gIC8qKlxuICAgKiBUaGUgZGVncmVlIChpbiB0aW1lY2VudHMgcGVyIGtleSBudW1iZXIgdW5pdHMpIHRvIHdoaWNoIHRoZSBob2xkIHRpbWUgb2YgdGhlIHZvbHVtZSBlbnZlbG9wZVxuICAgKiBpcyBpbmNyZWFzZWQgYnkgaW5jcmVhc2luZyB0aGUgTUlESSBrZXkgbnVtYmVyLlxuICAgKi9cbiAgS2V5TnVtVG9Wb2xFbnZIb2xkLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVncmVlIChpbiB0aW1lY2VudHMgcGVyIGtleSBudW1iZXIgdW5pdHMpIHRvIHdoaWNoIHRoZSBob2xkIHRpbWUgb2YgdGhlIHZvbHVtZSBlbnZlbG9wZVxuICAgKiBpcyBkZWNyZWFzZWQgYnkgaW5jcmVhc2luZyB0aGUgTUlESSBrZXkgbnVtYmVyLlxuICAgKi9cbiAgS2V5TnVtVG9Wb2xFbnZEZWNheSxcblxuICAvKipcbiAgICogSW5kZXggb2YgYW4gaW5zdHJ1bWVudCBpbiB0aGUgYElOU1RgIHN1Yi1jaHVuay4gVGhpcyBnZW5lcmF0b3IgYW5kIGBTYW1wbGVJZGAgYXJlIHRoZSBvbmx5XG4gICAqIEluZGV4IGdlbmVyYXRvcnMuXG4gICAqL1xuICBJbnN0cnVtZW50LFxuXG4gIC8qKlxuICAgKiBVbnVzZWQgZ2VuZXJhdG9yLCByZXNlcnZlZCBmb3IgZnV0dXJlIGltcGxlbWVudGF0aW9uLiBJZiB0aGlzIGdlbmVyYXRvciBpcyBlbmNvdW50ZXJlZCwgaXRcbiAgICogc2hvdWxkIGJlIGlnbm9yZWQuXG4gICAqL1xuICBSZXNlcnZlZDEsXG5cbiAgLyoqXG4gICAqIFRoZSBrZXkgcmFuZ2UgdGhhdCB0aGUgcHJlc2V0IG9yIGluc3RydW1lbnQgem9uZSBhcHBsaWVzIHRvLiBUaGlzIGdlbmVyYXRvciBhbmQgYFZlbFJhbmdlYCBhcmVcbiAgICogdGhlIG9ubHkgUmFuZ2UgZ2VuZXJhdG9ycy5cbiAgICovXG4gIEtleVJhbmdlLFxuXG4gIC8qKlxuICAgKiBUaGUgdmVsb2NpdHkgcmFuZ2UgdGhhdCB0aGUgcHJlc2V0IG9yIGluc3RydW1lbnQgem9uZSBhcHBsaWVzIHRvLiBUaGlzIGdlbmVyYXRvciBhbmRcbiAgICogYEtleVJhbmdlYCBhcmUgdGhlIG9ubHkgUmFuZ2UgZ2VuZXJhdG9ycy5cbiAgICovXG4gIFZlbFJhbmdlLFxuXG4gIC8qKlxuICAgKiBUaGUgb2Zmc2V0IGluIDMyNzY4IHNhbXBsZSBkYXRhIHBvaW50IGluY3JlbWVudHMgYmV5b25kIHRoZSBgc3RhcnRMb29wYCBzYW1wbGUgaGVhZGVyIGFuZCB0aGVcbiAgICogZmlyc3Qgc2FtcGxlIGRhdGEgcG9pbnQgdG8gYmUgcmVwZWF0ZWQgaW4gdGhpcyBpbnN0cnVtZW50J3MgbG9vcC5cbiAgICovXG4gIFN0YXJ0TG9vcEFkZHJzQ29hcnNlT2Zmc2V0LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgdGhlIE1JREkga2V5IG51bWJlciB0byBiZSBpbnRlcnByZXRlZCBhcyB0aGUgdmFsdWUgZ2l2ZW4uIFRoaXMgY2FuIG9ubHkgYXBwZWFyIGF0XG4gICAqIGluc3RydW1lbnQgbGV2ZWwgYW5kIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjcuXG4gICAqL1xuICBLZXlOdW0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyB0aGUgTUlESSB2ZWxvY2l0eSB0byBiZSBpbnRlcnByZXRlZCBhcyB0aGUgdmFsdWUgZ2l2ZW4uIFRoaXMgY2FuIG9ubHkgYXBwZWFyIGF0XG4gICAqIGluc3RydW1lbnQgbGV2ZWwgYW5kIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMjcuXG4gICAqL1xuICBWZWxvY2l0eSxcblxuICAvKipcbiAgICogVGhlIGF0dGVudWF0aW9uIChpbiBjZW50aWJlbHMpIGJ5IHdoaWNoIGEgbm90ZSBpcyBhdHRlbnVhdGVkIGJlbG93IGZ1bGwgc2NhbGUuXG4gICAqL1xuICBJbml0aWFsQXR0ZW51YXRpb24sXG5cbiAgLyoqXG4gICAqIFVudXNlZCBnZW5lcmF0b3IsIHJlc2VydmVkIGZvciBmdXR1cmUgaW1wbGVtZW50YXRpb24uIElmIHRoaXMgZ2VuZXJhdG9yIGlzIGVuY291bnRlcmVkLCBpdFxuICAgKiBzaG91bGQgYmUgaWdub3JlZC5cbiAgICovXG4gIFJlc2VydmVkMixcblxuICAvKipcbiAgICogVGhlIG9mZnNldCBpbiAzMjc2OCBzYW1wbGUgZGF0YSBwb2ludCBpbmNyZW1lbnRzIGJleW9uZCB0aGUgYGVuZExvb3BgIHNhbXBsZSBoZWFkZXIgdG8gdGhlXG4gICAqIHNhbXBsZSBkYXRhIHBvaW50IGNvbnNpZGVyZWQgZXF1aXZhbGVudCB0byB0aGUgYHN0YXJ0TG9vcGAuXG4gICAqL1xuICBFbmRMb29wQWRkcnNDb2Fyc2VPZmZzZXQsXG5cbiAgLyoqXG4gICAqIFRoZSBwaXRjaCBvZmZzZXQgKGluIHNlbWl0b25lcykgd2hpY2ggc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIG5vdGUuIEl0IGlzIGFkZGl0aXZlIHdpdGhcbiAgICogYEZpbmVUdW5lYC5cbiAgICovXG4gIENvYXJzZVR1bmUsXG5cbiAgLyoqXG4gICAqIFRoZSBwaXRjaCBvZmZzZXQgKGluIGNlbnRzKSB3aGljaCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgbm90ZS4gSXQgaXMgYWRkaXRpdmUgd2l0aFxuICAgKiBgQ29hcnNlVHVuZWAuXG4gICAqL1xuICBGaW5lVHVuZSxcblxuICAvKipcbiAgICogSW5kZXggb2YgYSBzYW1wbGUgaW4gdGhlIGBTSERSYCBzdWItY2h1bmsuIFRoaXMgZ2VuZXJhdG9yIGFuZCBgSW5zdHJ1bWVudGAgYXJlIHRoZSBvbmx5IEluZGV4XG4gICAqIGdlbmVyYXRvcnMuXG4gICAqL1xuICBTYW1wbGVJZCxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIHdoaWNoIGdpdmVzIGEgdmFyaWV0eSBvZiBib29sZWFuIGZsYWdzIGRlc2NyaWJpbmcgdGhlIHNhbXBsZSBmb3IgdGhlIGN1cnJlbnRcbiAgICogaW5zdHJ1bWVudCB6b25lLiBBIHplcm8gaW5kaWNhdGVzIGEgc291bmQgcmVwcm9kdWNlZCB3aXRoIG5vIGxvb3AsIG9uZSBpbmRpY2F0ZXMgYSBzb3VuZCB3aGljaFxuICAgKiBsb29wcyBjb250aW51b3VzbHkgYW5kIHRocmVlIGluZGljYXRlcyBhIHNvdW5kIHdoaWNoIGxvb3BzIGZvciB0aGUgZHVyYXRpb24gb2Yga2V5IGRlcHJlc3Npb24sXG4gICAqIHRoZW4gcHJvY2VlZHMgdG8gcGxheSB0aGUgcmVtYWluZGVyIG9mIHRoZSBzYW1wbGUuXG4gICAqL1xuICBTYW1wbGVNb2RlcyxcblxuICAvKipcbiAgICogVW51c2VkIGdlbmVyYXRvciwgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSBpbXBsZW1lbnRhdGlvbi4gSWYgdGhpcyBnZW5lcmF0b3IgaXMgZW5jb3VudGVyZWQsIGl0XG4gICAqIHNob3VsZCBiZSBpZ25vcmVkLlxuICAgKi9cbiAgUmVzZXJ2ZWQzLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVncmVlIHRvIHdoaWNoIHRoZSBNSURJIGtleSBudW1iZXIgaW5mbHVlbmNlcyBwaXRjaC5cbiAgICovXG4gIFNjYWxlVHVuaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY2FwYWJpbGl0eSBmb3Iga2V5IGRlcHJlc3Npb24gaW4gYSBnaXZlbiBpbnN0cnVtZW50IHRvIHRlcm1pbmF0ZSB0aGUgcGxheWJhY2sgb2Ygb3RoZXJcbiAgICogaW5zdHJ1bWVudHMuXG4gICAqL1xuICBFeGNsdXNpdmVDbGFzcyxcblxuICAvKipcbiAgICogVGhlIE1JREkga2V5IG51bWJlciBhdCB3aGljaCB0aGUgc2FtcGxlIGlzIHRvIGJlIHBsYXllZCBiYWNrIGF0IGl0cyBvcmlnaW5hbCBzYW1wbGUgcmF0ZS4gSWZcbiAgICogbm90IHByZXNlbnQsIG9yIGlmIHByZXNlbnQgd2l0aCBhIHZhbHVlIG9mIC0xLCB0aGUgc2FtcGxlIGhlYWRlciBwYXJhbWV0ZXIgb3JpZ2luYWwga2V5IGlzXG4gICAqIHVzZWQgaW4gaXRzIHBsYWNlLlxuICAgKi9cbiAgT3ZlcnJpZGluZ1Jvb3RLZXksXG5cbiAgLyoqXG4gICAqIFVudXNlZCBnZW5lcmF0b3IuIElmIHRoaXMgZ2VuZXJhdG9yIGlzIGVuY291bnRlcmVkLCBpdCBzaG91bGQgYmUgaWdub3JlZC5cbiAgICovXG4gIFVudXNlZDUsXG5cbiAgLyoqXG4gICAqIFVudXNlZCBnZW5lcmF0b3IuIElmIHRoaXMgZ2VuZXJhdG9yIGlzIGVuY291bnRlcmVkLCBpdCBzaG91bGQgYmUgaWdub3JlZC5cbiAgICovXG4gIEVuZE9wZXJcbn1cblxuLyoqXG4gKiBBbGwgdW51c2VkIGdlbmVyYXRvcnMuXG4gKi9cbmV4cG9ydCB0eXBlIFVudXNlZEdlbmVyYXRvciA9XG4gIHwgR2VuZXJhdG9yVHlwZS5VbnVzZWQxXG4gIHwgR2VuZXJhdG9yVHlwZS5VbnVzZWQyXG4gIHwgR2VuZXJhdG9yVHlwZS5VbnVzZWQzXG4gIHwgR2VuZXJhdG9yVHlwZS5VbnVzZWQ0XG4gIHwgR2VuZXJhdG9yVHlwZS5VbnVzZWQ1XG4gIHwgR2VuZXJhdG9yVHlwZS5SZXNlcnZlZDFcbiAgfCBHZW5lcmF0b3JUeXBlLlJlc2VydmVkMlxuICB8IEdlbmVyYXRvclR5cGUuUmVzZXJ2ZWQzXG4gIHwgR2VuZXJhdG9yVHlwZS5FbmRPcGVyO1xuXG4vKipcbiAqIEFsbCByYW5nZSBnZW5lcmF0b3JzLlxuICovXG5leHBvcnQgdHlwZSBSYW5nZUdlbmVyYXRvciA9IEdlbmVyYXRvclR5cGUuS2V5UmFuZ2UgfCBHZW5lcmF0b3JUeXBlLlZlbFJhbmdlO1xuXG4vKipcbiAqIEFsbCBpbmRleCBnZW5lcmF0b3JzLlxuICovXG5leHBvcnQgdHlwZSBJbmRleEdlbmVyYXRvciA9IEdlbmVyYXRvclR5cGUuSW5zdHJ1bWVudCB8IEdlbmVyYXRvclR5cGUuU2FtcGxlSWQ7XG5cbi8qKlxuICogQWxsIHZhbHVlIGdlbmVyYXRvcnMuXG4gKi9cbmV4cG9ydCB0eXBlIFZhbHVlR2VuZXJhdG9yID0gRXhjbHVkZTxcbiAgR2VuZXJhdG9yVHlwZSxcbiAgVW51c2VkR2VuZXJhdG9yIHwgUmFuZ2VHZW5lcmF0b3IgfCBJbmRleEdlbmVyYXRvclxuPjtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCB2YWx1ZSBmb3IgYWxsIGdlbmVyYXRvciB0eXBlcyAod2hlcmUgYXBwbGljYWJsZSkuXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0dFTkVSQVRPUl9WQUxVRVM6IHsgW2tleSBpbiBWYWx1ZUdlbmVyYXRvcl06IG51bWJlciB9ID0ge1xuICBbR2VuZXJhdG9yVHlwZS5TdGFydEFkZHJzT2Zmc2V0XTogMCxcbiAgW0dlbmVyYXRvclR5cGUuRW5kQWRkcnNPZmZzZXRdOiAwLFxuICBbR2VuZXJhdG9yVHlwZS5TdGFydExvb3BBZGRyc09mZnNldF06IDAsXG4gIFtHZW5lcmF0b3JUeXBlLkVuZExvb3BBZGRyc09mZnNldF06IDAsXG4gIFtHZW5lcmF0b3JUeXBlLlN0YXJ0QWRkcnNDb2Fyc2VPZmZzZXRdOiAwLFxuICBbR2VuZXJhdG9yVHlwZS5Nb2RMRk9Ub1BpdGNoXTogMCxcbiAgW0dlbmVyYXRvclR5cGUuVmliTEZPVG9QaXRjaF06IDAsXG4gIFtHZW5lcmF0b3JUeXBlLk1vZEVudlRvUGl0Y2hdOiAwLFxuICBbR2VuZXJhdG9yVHlwZS5Jbml0aWFsRmlsdGVyRmNdOiAxMzUwMCxcbiAgW0dlbmVyYXRvclR5cGUuSW5pdGlhbEZpbHRlclFdOiAwLFxuICBbR2VuZXJhdG9yVHlwZS5Nb2RMRk9Ub0ZpbHRlckZjXTogMCxcbiAgW0dlbmVyYXRvclR5cGUuTW9kRW52VG9GaWx0ZXJGY106IDAsXG4gIFtHZW5lcmF0b3JUeXBlLkVuZEFkZHJzQ29hcnNlT2Zmc2V0XTogMCxcbiAgW0dlbmVyYXRvclR5cGUuTW9kTEZPVG9Wb2x1bWVdOiAwLFxuICBbR2VuZXJhdG9yVHlwZS5DaG9ydXNFZmZlY3RzU2VuZF06IDAsXG4gIFtHZW5lcmF0b3JUeXBlLlJldmVyYkVmZmVjdHNTZW5kXTogMCxcbiAgW0dlbmVyYXRvclR5cGUuUGFuXTogMCxcbiAgW0dlbmVyYXRvclR5cGUuRGVsYXlNb2RMRk9dOiAtMTIwMDAsXG4gIFtHZW5lcmF0b3JUeXBlLkZyZXFNb2RMRk9dOiAwLFxuICBbR2VuZXJhdG9yVHlwZS5EZWxheVZpYkxGT106IC0xMjAwMCxcbiAgW0dlbmVyYXRvclR5cGUuRnJlcVZpYkxGT106IDAsXG4gIFtHZW5lcmF0b3JUeXBlLkRlbGF5TW9kRW52XTogLTEyMDAwLFxuICBbR2VuZXJhdG9yVHlwZS5BdHRhY2tNb2RFbnZdOiAtMTIwMDAsXG4gIFtHZW5lcmF0b3JUeXBlLkhvbGRNb2RFbnZdOiAtMTIwMDAsXG4gIFtHZW5lcmF0b3JUeXBlLkRlY2F5TW9kRW52XTogLTEyMDAwLFxuICBbR2VuZXJhdG9yVHlwZS5TdXN0YWluTW9kRW52XTogMCxcbiAgW0dlbmVyYXRvclR5cGUuUmVsZWFzZU1vZEVudl06IC0xMjAwMCxcbiAgW0dlbmVyYXRvclR5cGUuS2V5TnVtVG9Nb2RFbnZIb2xkXTogMCxcbiAgW0dlbmVyYXRvclR5cGUuS2V5TnVtVG9Nb2RFbnZEZWNheV06IDAsXG4gIFtHZW5lcmF0b3JUeXBlLkRlbGF5Vm9sRW52XTogLTEyMDAwLFxuICBbR2VuZXJhdG9yVHlwZS5BdHRhY2tWb2xFbnZdOiAtMTIwMDAsXG4gIFtHZW5lcmF0b3JUeXBlLkhvbGRWb2xFbnZdOiAtMTIwMDAsXG4gIFtHZW5lcmF0b3JUeXBlLkRlY2F5Vm9sRW52XTogLTEyMDAwLFxuICBbR2VuZXJhdG9yVHlwZS5TdXN0YWluVm9sRW52XTogMCxcbiAgW0dlbmVyYXRvclR5cGUuUmVsZWFzZVZvbEVudl06IC0xMjAwMCxcbiAgW0dlbmVyYXRvclR5cGUuS2V5TnVtVG9Wb2xFbnZIb2xkXTogMCxcbiAgW0dlbmVyYXRvclR5cGUuS2V5TnVtVG9Wb2xFbnZEZWNheV06IDAsXG4gIFtHZW5lcmF0b3JUeXBlLlN0YXJ0TG9vcEFkZHJzQ29hcnNlT2Zmc2V0XTogMCxcbiAgW0dlbmVyYXRvclR5cGUuS2V5TnVtXTogLTEsXG4gIFtHZW5lcmF0b3JUeXBlLlZlbG9jaXR5XTogLTEsXG4gIFtHZW5lcmF0b3JUeXBlLkluaXRpYWxBdHRlbnVhdGlvbl06IDAsXG4gIFtHZW5lcmF0b3JUeXBlLkVuZExvb3BBZGRyc0NvYXJzZU9mZnNldF06IDAsXG4gIFtHZW5lcmF0b3JUeXBlLkNvYXJzZVR1bmVdOiAwLFxuICBbR2VuZXJhdG9yVHlwZS5GaW5lVHVuZV06IDAsXG4gIFtHZW5lcmF0b3JUeXBlLlNhbXBsZU1vZGVzXTogMCxcbiAgW0dlbmVyYXRvclR5cGUuU2NhbGVUdW5pbmddOiAxMDAsXG4gIFtHZW5lcmF0b3JUeXBlLkV4Y2x1c2l2ZUNsYXNzXTogMCxcbiAgW0dlbmVyYXRvclR5cGUuT3ZlcnJpZGluZ1Jvb3RLZXldOiAtMVxufTtcblxuLyoqXG4gKiBEZXNjcmliZXMgYSByYW5nZSBvZiBNSURJIGtleSBudW1iZXJzIChmb3IgdGhlIGBrZXlSYW5nZWAgZ2VuZXJhdG9yKSBvciBNSURJIHZlbG9jaXRpZXMgKGZvciB0aGVcbiAqIGB2ZWxSYW5nZWAgZ2VuZXJhdG9yKSB3aXRoIGEgbWluaW11bSAobG8pIGFuZCBtYXhpbXVtIChoaSkgdmFsdWUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2Uge1xuICAvKipcbiAgICogTG93IHZhbHVlIGZvciB0aGUgcmFuZ2UuXG4gICAqL1xuICBsbzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIaWdoIHZhbHVlIGZvciB0aGUgcmFuZ2UuXG4gICAqL1xuICBoaTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlbmVyYXRvciB7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIGdlbmVyYXRvci5cbiAgICovXG4gIGlkOiBHZW5lcmF0b3JUeXBlO1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0b3IgdmFsdWUuIElmIHRoZSByYW5nZSBpcyBub3Qgc3BlY2lmaWVkLCB0aGlzIHNob3VsZCBiZSBzZXQuXG4gICAqL1xuICB2YWx1ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHJhbmdlIG9mIHRoZSBnZW5lcmF0b3IuIElmIHRoZSB2YWx1ZSBpcyBub3Qgc3BlY2lmaWVkLCB0aGlzIHNob3VsZCBiZSBzZXQuXG4gICAqL1xuICByYW5nZT86IFJhbmdlO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9iYW5rJztcbmV4cG9ydCAqIGZyb20gJy4vZ2VuZXJhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdHJ1bWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2tleSc7XG5leHBvcnQgKiBmcm9tICcuL21ldGFEYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kdWxhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vcHJlc2V0JztcbmV4cG9ydCAqIGZyb20gJy4vcHJlc2V0RGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL3NhbXBsZSc7XG5leHBvcnQgKiBmcm9tICcuL3pvbmUnO1xuIiwiaW1wb3J0IHsgR2VuZXJhdG9yVHlwZSB9IGZyb20gJy4vZ2VuZXJhdG9yJztcblxuZXhwb3J0IGVudW0gQ29udHJvbGxlclR5cGUge1xuICAvKipcbiAgICogVGhlIGNvbnRyb2xsZXIgbW92ZXMgbGluZWFybHkgZnJvbSB0aGUgbWluaW11bSB0byB0aGUgbWF4aW11bSB2YWx1ZSwgd2l0aCB0aGUgZGlyZWN0aW9uIGFuZFxuICAgKiBwb2xhcml0eSBzcGVjaWZpZWQgYnkgdGhlIG1vZHVsYXRvci5cbiAgICovXG4gIExpbmVhciA9IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBjb250cm9sbGVyIG1vdmVzIGluIGEgY29uY2F2ZSBmYXNoaW9uIGZyb20gdGhlIG1pbmltdW0gdG8gdGhlIG1heGltdW0gdmFsdWUsIHdpdGggdGhlXG4gICAqIGRpcmVjdGlvbiBhbmQgcG9sYXJpdHkgc3BlY2lmaWVkIGJ5IHRoZSBtb2R1bGF0b3IuXG4gICAqXG4gICAqIGBvdXRwdXQgPSBNYXRoLmxvZyhNYXRoLnNxcnQodmFsdWUgKiogMikgLyBbbWF4IHZhbHVlXSAqKiAyKWBcbiAgICovXG4gIENvbmNhdmUgPSAxLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udHJvbGxlciBtb3ZlcyBpbiBhIGNvbnZleCBmYXNoaW9uIGZyb20gdGhlIG1pbmltdW0gdG8gdGhlIG1heGltdW0gdmFsdWUsIHdpdGggdGhlXG4gICAqIGRpcmVjdGlvbiBhbmQgcG9sYXJpdHkgc3BlY2lmaWVkIGJ5IHRoZSBtb2R1bGF0b3IuIFRoaXMgaXMgdGhlIHNhbWUgYXMgdGhlIGNvbmNhdmUgY3VydmUsIGJ1dFxuICAgKiB3aXRoIHRoZSBzdGFydCBhbmQgZW5kIHBvaW50cyByZXZlcnNlZC5cbiAgICovXG4gIENvbnZleCA9IDIsXG5cbiAgLyoqXG4gICAqIFRoZSBjb250cm9sbGVyIG91dHB1dCBpcyBhdCBhIG1pbmltdW0gdmFsdWUgd2hpbGUgdGhlIGNvbnRyb2xsZXIgaW5wdXQgbW92ZXMgZnJvbSB0aGUgbWluaW11bVxuICAgKiB0byBoYWxmIG9mIHRoZSBtYXhpbXVtLCBhZnRlciB3aGljaCB0aGUgY29udHJvbGxlciBvdXRwdXQgaXMgYXQgYSBtYXhpbXVtLiBUaGUgZGlyZWN0aW9uIGFuZFxuICAgKiBwb2xhcml0eSBhcmUgc3BlY2lmaWVkIGJ5IHRoZSBtb2R1bGF0b3IuXG4gICAqL1xuICBTd2l0Y2ggPSAzXG59XG5cbmV4cG9ydCBlbnVtIENvbnRyb2xsZXJQb2xhcml0eSB7XG4gIC8qKlxuICAgKiBUaGUgY29udHJvbGxlciBzaG91bGQgYmUgbWFwcGVkIHdpdGggYSBtaW5pbXVtIHZhbHVlIG9mIDAgYW5kIGEgbWF4aW11bSB2YWx1ZSBvZiAxLiBJdCBiZWhhdmVzXG4gICAqIHNpbWlsYXIgdG8gdGhlIG1vZHVsYXRpb24gd2hlZWwgY29udHJvbGxlciBvZiB0aGUgTUlESSBzcGVjaWZpY2F0aW9uLlxuICAgKi9cbiAgVW5pcG9sYXIgPSAwLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udHJvbGxlciBzaG91bGQgYmUgbWFwcGVkIHdpdGggYSBtaW5pbXVtIHZhbHVlIG9mIC0xIGFuZCBhIG1heGltdW0gdmFsdWUgb2YgMS4gSXRcbiAgICogYmVoYXZlcyBzaW1pbGFyIHRvIHRoZSBwaXRjaCB3aGVlbCBjb250cm9sbGVyIG9mIHRoZSBNSURJIHNwZWNpZmljYXRpb24uXG4gICAqL1xuICBCaXBvbGFyID0gMVxufVxuXG5leHBvcnQgZW51bSBDb250cm9sbGVyRGlyZWN0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rpb24gb2YgdGhlIGNvbnRyb2xsZXIgc2hvdWxkIGJlIGZyb20gdGhlIG1pbmltdW0gdG8gdGhlIG1heGltdW0gdmFsdWUuXG4gICAqL1xuICBJbmNyZWFzaW5nID0gMCxcblxuICAvKipcbiAgICogVGhlIGRpcmVjdGlvbiBvZiB0aGUgY29udHJvbGxlciBzaG91bGQgYmUgZnJvbSB0aGUgbWF4aW11bSB0byB0aGUgbWluaW11bSB2YWx1ZS5cbiAgICovXG4gIERlY3JlYXNpbmcgPSAxXG59XG5cbmV4cG9ydCBlbnVtIENvbnRyb2xsZXJQYWxldHRlIHtcbiAgLyoqXG4gICAqIFVzZSB0aGUgZ2VuZXJhbCBjb250cm9sbGVyIHBhbGV0dGUgYXMgZGVzY3JpYmVkIGJ5IHRoZSBgQ29udHJvbGxlcmAgZW51bS5cbiAgICovXG4gIEdlbmVyYWxDb250cm9sbGVyID0gMCxcblxuICAvKipcbiAgICogVXNlIHRoZSBNSURJIGNvbnRyb2xsZXIgcGFsZXR0ZS5cbiAgICovXG4gIE1pZGlDb250cm9sbGVyID0gMVxufVxuXG5leHBvcnQgZW51bSBDb250cm9sbGVyIHtcbiAgLyoqXG4gICAqIE5vIGNvbnRyb2xsZXIgaXMgdG8gYmUgdXNlZC5cbiAgICovXG4gIE5vQ29udHJvbGxlciA9IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBjb250cm9sbGVyIHNvdXJjZSB0byBiZSB1c2VkIGlzIHRoZSB2ZWxvY2l0eSB2YWx1ZSB3aGljaCBpcyBzZW50IGZyb20gdGhlIE1JREkgbm90ZS1vblxuICAgKiBjb21tYW5kLlxuICAgKi9cbiAgTm90ZU9uVmVsb2NpdHkgPSAyLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udHJvbGxlciBzb3VyY2UgdG8gYmUgdXNlZCBpcyB0aGUga2V5IG51bWJlciB2YWx1ZSB3aGljaCB3YXMgc2VudCBmcm9tIHRoZSBNSURJIG5vdGUtb25cbiAgICogY29tbWFuZC5cbiAgICovXG4gIE5vdGVPbktleU51bWJlciA9IDMsXG5cbiAgLyoqXG4gICAqIFRoZSBjb250cm9sbGVyIHNvdXJjZSB0byBiZSB1c2VkIGlzIHRoZSBwb2x5IHByZXNzdXJlIGFtb3VudCB0aGF0IGlzIHNlbnQgZnJvbSB0aGUgTUlESVxuICAgKiBwb2x5LXByZXNzdXJlIGNvbW1hbmQuXG4gICAqL1xuICBQb2x5UHJlc3N1cmUgPSAxMCxcblxuICAvKipcbiAgICogVGhlIGNvbnRyb2xsZXIgc291cmNlIHRvIGJlIHVzZWQgaXMgdGhlIGNoYW5uZWwgcHJlc3N1cmUgYW1vdW50IHRoYXQgaXMgc2VudCBmcm9tIHRoZSBNSURJXG4gICAqIGNoYW5uZWwtcHJlc3N1cmUgY29tbWFuZC5cbiAgICovXG4gIENoYW5uZWxQcmVzc3VyZSA9IDEzLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udHJvbGxlciBzb3VyY2UgdG8gYmUgdXNlZCBpcyB0aGUgcGl0Y2ggd2hlZWwgYW1vdW50IHdoaWNoIGlzIHNlbnQgZnJvbSB0aGUgTUlESSBwaXRjaFxuICAgKiB3aGVlbCBjb21tYW5kLlxuICAgKi9cbiAgUGl0Y2hXaGVlbCA9IDE0LFxuXG4gIC8qKlxuICAgKiBUaGUgY29udHJvbGxlciBzb3VyY2UgdG8gYmUgdXNlZCBpcyB0aGUgcGl0Y2ggd2hlZWwgc2Vuc2l0aXZpdHkgYW1vdW50IHdoaWNoIGlzIHNlbnQgZnJvbSB0aGVcbiAgICogTUlESSBSUE4gMCBwaXRjaCB3aGVlbCBzZW5zaXRpdml0eSBjb21tYW5kLlxuICAgKi9cbiAgUGl0Y2hXaGVlbFNlbnNpdGl2aXR5ID0gMTYsXG5cbiAgLyoqXG4gICAqIFRoZSBjb250cm9sbGVyIHNvdXJjZSBpcyB0aGUgb3V0cHV0IG9mIGFub3RoZXIgbW9kdWxhdG9yLiBUaGlzIGlzIG9ubHkgc3VwcG9ydGVkIGFzIGB2YWx1ZWAsXG4gICAqIG5vdCBhcyBgdmFsdWVTb3VyY2VgLlxuICAgKi9cbiAgTGluayA9IDEyN1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyb2xsZXJWYWx1ZSB7XG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiBtb2R1bGF0b3IuXG4gICAqL1xuICB0eXBlOiBDb250cm9sbGVyVHlwZTtcblxuICAvKipcbiAgICogVGhlIHBvbGFyaXR5IG9mIHRoZSBtb2R1bGF0b3IuXG4gICAqL1xuICBwb2xhcml0eTogQ29udHJvbGxlclBvbGFyaXR5O1xuXG4gIC8qKlxuICAgKiBUaGUgZGlyZWN0aW9uIG9mIHRoZSBtb2R1bGF0b3IuXG4gICAqL1xuICBkaXJlY3Rpb246IENvbnRyb2xsZXJEaXJlY3Rpb247XG5cbiAgLyoqXG4gICAqIFRoZSBjb250cm9sbGVyIHBhbGV0dGUgdXNlZCBmb3IgdGhlIG1vZHVsYXRvci5cbiAgICovXG4gIHBhbGV0dGU6IENvbnRyb2xsZXJQYWxldHRlO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5kZXggb2YgdGhlIGdlbmVyYWwgb3IgTUlESSBjb250cm9sbGVyLiBJZiB0aGUgcGFsZXR0ZSBpcyBzZXQgdG8gYEdlbmVyYWxDb250cm9sbGVyYCxcbiAgICogdGhpcyByZWZlcnMgdG8gYSB0eXBlIGluIHRoZSBgQ29udHJvbGxlcmAgdHlwZS4gT3RoZXJ3aXNlLCBpdHMgYSBNSURJIGNvbnRpbnVvdXMgY29udHJvbGxlci5cbiAgICovXG4gIGluZGV4OiBDb250cm9sbGVyIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBUcmFuc2Zvcm1UeXBlIHtcbiAgLyoqXG4gICAqIFRoZSBvdXRwdXQgdmFsdWUgb2YgdGhlIG11bHRpcGxpZXIgaXMgZmVkIGRpcmVjdGx5IHRvIHRoZSBzdW1taW5nIG5vZGUgb2YgdGhlIGdpdmVuXG4gICAqIGRlc3RpbmF0aW9uLlxuICAgKi9cbiAgTGluZWFyID0gMCxcblxuICAvKipcbiAgICogVGhlIG91dHB1dCB2YWx1ZSBvZiB0aGUgbXVsdGlwbGllciBpcyB0byBiZSB0aGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhlIGlucHV0IHZhbHVlLCBhcyBkZWZpbmVkXG4gICAqIGJ5IHRoZSByZWxhdGlvbnNoaXA6XG4gICAqXG4gICAqIGBvdXRwdXQgPSBNYXRoLnNxcnQoaW5wdXQgKiogMilgIG9yIHNpbXBseSBgb3V0cHV0ID0gTWF0aC5hYnMoaW5wdXQpYFxuICAgKi9cbiAgQWJzb2x1dGUgPSAyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kdWxhdG9yIHtcbiAgLyoqXG4gICAqIERlc3RpbmF0aW9uIGdlbmVyYXRvci5cbiAgICovXG4gIGlkOiBHZW5lcmF0b3JUeXBlO1xuXG4gIC8qKlxuICAgKiBTb3VyY2UgbW9kdWxhdG9yLlxuICAgKi9cbiAgc291cmNlOiBDb250cm9sbGVyVmFsdWU7XG5cbiAgLyoqXG4gICAqIERlZ3JlZSBvZiBtb2R1bGF0aW9uLlxuICAgKi9cbiAgdmFsdWU6IG51bWJlcjtcblxuICAvKipcbiAgICogU291cmNlIGNvbnRyb2xzIHZhbHVlIG9mIGZpcnN0LlxuICAgKlxuICAgKiBUT0RPOiBEZXNjcmlwdGlvbiBpcyB1bmNsZWFyLiBTaG91bGQgYmUgaW1wcm92ZWQuXG4gICAqL1xuICB2YWx1ZVNvdXJjZTogQ29udHJvbGxlclZhbHVlO1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gYXBwbGllZCB0byBzb3VyY2UuXG4gICAqL1xuICB0cmFuc2Zvcm06IFRyYW5zZm9ybVR5cGU7XG59XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgbW9kdWxhdG9ycyBhdCBpbnN0cnVtZW50IGxldmVsLiBJbXBsZW1lbnRpbmcgdGhlc2UgaXMgdXAgdG8gdGhlIGNvbnN1bWVyIG9mIHRoaXNcbiAqIGxpYnJhcnkuIFRvIG92ZXJyaWRlIHRoZXNlIG1vZHVsYXRvcnMsIG90aGVyIG1vZHVsYXRvcnMgaGF2ZSB0byBiZSBkZWZpbmVkIGV4cGxpY2l0bHkuXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOU1RSVU1FTlRfTU9EVUxBVE9SUzogTW9kdWxhdG9yW10gPSBbXG4gIC8vIE1JREkgbm90ZS1vbiB2ZWxvY2l0eSB0byBpbml0aWFsIGF0dGVudWF0aW9uXG4gIHtcbiAgICBpZDogR2VuZXJhdG9yVHlwZS5Jbml0aWFsQXR0ZW51YXRpb24sXG4gICAgc291cmNlOiB7XG4gICAgICB0eXBlOiBDb250cm9sbGVyVHlwZS5Db25jYXZlLFxuICAgICAgcG9sYXJpdHk6IENvbnRyb2xsZXJQb2xhcml0eS5Vbmlwb2xhcixcbiAgICAgIGRpcmVjdGlvbjogQ29udHJvbGxlckRpcmVjdGlvbi5EZWNyZWFzaW5nLFxuICAgICAgcGFsZXR0ZTogQ29udHJvbGxlclBhbGV0dGUuR2VuZXJhbENvbnRyb2xsZXIsXG4gICAgICBpbmRleDogQ29udHJvbGxlci5Ob3RlT25WZWxvY2l0eVxuICAgIH0sXG4gICAgdmFsdWU6IDk2MCxcbiAgICB2YWx1ZVNvdXJjZToge1xuICAgICAgdHlwZTogQ29udHJvbGxlclR5cGUuTGluZWFyLFxuICAgICAgcG9sYXJpdHk6IENvbnRyb2xsZXJQb2xhcml0eS5Vbmlwb2xhcixcbiAgICAgIGRpcmVjdGlvbjogQ29udHJvbGxlckRpcmVjdGlvbi5JbmNyZWFzaW5nLFxuICAgICAgcGFsZXR0ZTogQ29udHJvbGxlclBhbGV0dGUuR2VuZXJhbENvbnRyb2xsZXIsXG4gICAgICBpbmRleDogQ29udHJvbGxlci5Ob0NvbnRyb2xsZXJcbiAgICB9LFxuICAgIHRyYW5zZm9ybTogVHJhbnNmb3JtVHlwZS5MaW5lYXJcbiAgfSxcblxuICAvLyBNSURJIG5vdGUtb24gdmVsb2NpdHkgdG8gZmlsdGVyIGN1dG9mZlxuICB7XG4gICAgaWQ6IEdlbmVyYXRvclR5cGUuSW5pdGlhbEZpbHRlckZjLFxuICAgIHNvdXJjZToge1xuICAgICAgdHlwZTogQ29udHJvbGxlclR5cGUuTGluZWFyLFxuICAgICAgcG9sYXJpdHk6IENvbnRyb2xsZXJQb2xhcml0eS5Vbmlwb2xhcixcbiAgICAgIGRpcmVjdGlvbjogQ29udHJvbGxlckRpcmVjdGlvbi5EZWNyZWFzaW5nLFxuICAgICAgcGFsZXR0ZTogQ29udHJvbGxlclBhbGV0dGUuR2VuZXJhbENvbnRyb2xsZXIsXG4gICAgICBpbmRleDogQ29udHJvbGxlci5Ob3RlT25WZWxvY2l0eVxuICAgIH0sXG4gICAgdmFsdWU6IC0yNDAwLCAvLyBjZW50c1xuICAgIHZhbHVlU291cmNlOiB7XG4gICAgICB0eXBlOiBDb250cm9sbGVyVHlwZS5MaW5lYXIsXG4gICAgICBwb2xhcml0eTogQ29udHJvbGxlclBvbGFyaXR5LlVuaXBvbGFyLFxuICAgICAgZGlyZWN0aW9uOiBDb250cm9sbGVyRGlyZWN0aW9uLkluY3JlYXNpbmcsXG4gICAgICBwYWxldHRlOiBDb250cm9sbGVyUGFsZXR0ZS5HZW5lcmFsQ29udHJvbGxlcixcbiAgICAgIGluZGV4OiBDb250cm9sbGVyLk5vQ29udHJvbGxlclxuICAgIH0sXG4gICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm1UeXBlLkxpbmVhclxuICB9LFxuXG4gIC8vIE1JREkgY2hhbm5lbCBwcmVzc3VyZSB0byB2aWJyYXRvIExGTyBwaXRjaCBkZXB0aFxuICB7XG4gICAgaWQ6IEdlbmVyYXRvclR5cGUuVmliTEZPVG9QaXRjaCxcbiAgICBzb3VyY2U6IHtcbiAgICAgIHR5cGU6IENvbnRyb2xsZXJUeXBlLkxpbmVhcixcbiAgICAgIHBvbGFyaXR5OiBDb250cm9sbGVyUG9sYXJpdHkuVW5pcG9sYXIsXG4gICAgICBkaXJlY3Rpb246IENvbnRyb2xsZXJEaXJlY3Rpb24uSW5jcmVhc2luZyxcbiAgICAgIHBhbGV0dGU6IENvbnRyb2xsZXJQYWxldHRlLkdlbmVyYWxDb250cm9sbGVyLFxuICAgICAgaW5kZXg6IENvbnRyb2xsZXIuQ2hhbm5lbFByZXNzdXJlXG4gICAgfSxcbiAgICB2YWx1ZTogNTAsIC8vIGNlbnRzIC8gbWF4IGV4Y3Vyc2lvblxuICAgIHZhbHVlU291cmNlOiB7XG4gICAgICB0eXBlOiBDb250cm9sbGVyVHlwZS5MaW5lYXIsXG4gICAgICBwb2xhcml0eTogQ29udHJvbGxlclBvbGFyaXR5LlVuaXBvbGFyLFxuICAgICAgZGlyZWN0aW9uOiBDb250cm9sbGVyRGlyZWN0aW9uLkluY3JlYXNpbmcsXG4gICAgICBwYWxldHRlOiBDb250cm9sbGVyUGFsZXR0ZS5HZW5lcmFsQ29udHJvbGxlcixcbiAgICAgIGluZGV4OiBDb250cm9sbGVyLk5vQ29udHJvbGxlclxuICAgIH0sXG4gICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm1UeXBlLkxpbmVhclxuICB9LFxuXG4gIC8vIE1JREkgY29udGludW91cyBjb250cm9sbGVyIDEgdG8gdmlicmF0byBMRk8gcGl0Y2ggZGVwdGhcbiAge1xuICAgIGlkOiBHZW5lcmF0b3JUeXBlLlZpYkxGT1RvUGl0Y2gsXG4gICAgc291cmNlOiB7XG4gICAgICB0eXBlOiBDb250cm9sbGVyVHlwZS5MaW5lYXIsXG4gICAgICBwb2xhcml0eTogQ29udHJvbGxlclBvbGFyaXR5LlVuaXBvbGFyLFxuICAgICAgZGlyZWN0aW9uOiBDb250cm9sbGVyRGlyZWN0aW9uLkluY3JlYXNpbmcsXG4gICAgICBwYWxldHRlOiBDb250cm9sbGVyUGFsZXR0ZS5NaWRpQ29udHJvbGxlcixcbiAgICAgIGluZGV4OiAxXG4gICAgfSxcbiAgICB2YWx1ZTogNTAsXG4gICAgdmFsdWVTb3VyY2U6IHtcbiAgICAgIHR5cGU6IENvbnRyb2xsZXJUeXBlLkxpbmVhcixcbiAgICAgIHBvbGFyaXR5OiBDb250cm9sbGVyUG9sYXJpdHkuVW5pcG9sYXIsXG4gICAgICBkaXJlY3Rpb246IENvbnRyb2xsZXJEaXJlY3Rpb24uSW5jcmVhc2luZyxcbiAgICAgIHBhbGV0dGU6IENvbnRyb2xsZXJQYWxldHRlLkdlbmVyYWxDb250cm9sbGVyLFxuICAgICAgaW5kZXg6IENvbnRyb2xsZXIuTm9Db250cm9sbGVyXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IFRyYW5zZm9ybVR5cGUuTGluZWFyXG4gIH0sXG5cbiAgLy8gTUlESSBjb250aW51b3VzIGNvbnRyb2xsZXIgNyB0byBpbml0aWFsIGF0dGVudWF0aW9uXG4gIHtcbiAgICBpZDogR2VuZXJhdG9yVHlwZS5Jbml0aWFsQXR0ZW51YXRpb24sXG4gICAgc291cmNlOiB7XG4gICAgICB0eXBlOiBDb250cm9sbGVyVHlwZS5Db25jYXZlLFxuICAgICAgcG9sYXJpdHk6IENvbnRyb2xsZXJQb2xhcml0eS5Vbmlwb2xhcixcbiAgICAgIGRpcmVjdGlvbjogQ29udHJvbGxlckRpcmVjdGlvbi5EZWNyZWFzaW5nLFxuICAgICAgcGFsZXR0ZTogQ29udHJvbGxlclBhbGV0dGUuTWlkaUNvbnRyb2xsZXIsXG4gICAgICBpbmRleDogN1xuICAgIH0sXG4gICAgdmFsdWU6IDk2MCxcbiAgICB2YWx1ZVNvdXJjZToge1xuICAgICAgdHlwZTogQ29udHJvbGxlclR5cGUuTGluZWFyLFxuICAgICAgcG9sYXJpdHk6IENvbnRyb2xsZXJQb2xhcml0eS5Vbmlwb2xhcixcbiAgICAgIGRpcmVjdGlvbjogQ29udHJvbGxlckRpcmVjdGlvbi5JbmNyZWFzaW5nLFxuICAgICAgcGFsZXR0ZTogQ29udHJvbGxlclBhbGV0dGUuR2VuZXJhbENvbnRyb2xsZXIsXG4gICAgICBpbmRleDogQ29udHJvbGxlci5Ob0NvbnRyb2xsZXJcbiAgICB9LFxuICAgIHRyYW5zZm9ybTogVHJhbnNmb3JtVHlwZS5MaW5lYXJcbiAgfSxcblxuICAvLyBNSURJIGNvbnRpbnVvdXMgY29udHJvbGxlciAxMCB0byBwYW4gcG9zaXRpb25cbiAge1xuICAgIGlkOiBHZW5lcmF0b3JUeXBlLkluaXRpYWxBdHRlbnVhdGlvbixcbiAgICBzb3VyY2U6IHtcbiAgICAgIHR5cGU6IENvbnRyb2xsZXJUeXBlLkxpbmVhcixcbiAgICAgIHBvbGFyaXR5OiBDb250cm9sbGVyUG9sYXJpdHkuQmlwb2xhcixcbiAgICAgIGRpcmVjdGlvbjogQ29udHJvbGxlckRpcmVjdGlvbi5JbmNyZWFzaW5nLFxuICAgICAgcGFsZXR0ZTogQ29udHJvbGxlclBhbGV0dGUuTWlkaUNvbnRyb2xsZXIsXG4gICAgICBpbmRleDogMTBcbiAgICB9LFxuICAgIHZhbHVlOiAxMDAwLCAvLyB0ZW50aHMgb2YgYSBwZXJjZW50XG4gICAgdmFsdWVTb3VyY2U6IHtcbiAgICAgIHR5cGU6IENvbnRyb2xsZXJUeXBlLkxpbmVhcixcbiAgICAgIHBvbGFyaXR5OiBDb250cm9sbGVyUG9sYXJpdHkuVW5pcG9sYXIsXG4gICAgICBkaXJlY3Rpb246IENvbnRyb2xsZXJEaXJlY3Rpb24uSW5jcmVhc2luZyxcbiAgICAgIHBhbGV0dGU6IENvbnRyb2xsZXJQYWxldHRlLkdlbmVyYWxDb250cm9sbGVyLFxuICAgICAgaW5kZXg6IENvbnRyb2xsZXIuTm9Db250cm9sbGVyXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IFRyYW5zZm9ybVR5cGUuTGluZWFyXG4gIH0sXG5cbiAgLy8gTUlESSBjb250aW51b3VzIGNvbnRyb2xsZXIgMTEgdG8gaW5pdGlhbCBhdHRlbnVhdGlvblxuICB7XG4gICAgaWQ6IEdlbmVyYXRvclR5cGUuSW5pdGlhbEF0dGVudWF0aW9uLFxuICAgIHNvdXJjZToge1xuICAgICAgdHlwZTogQ29udHJvbGxlclR5cGUuQ29uY2F2ZSxcbiAgICAgIHBvbGFyaXR5OiBDb250cm9sbGVyUG9sYXJpdHkuVW5pcG9sYXIsXG4gICAgICBkaXJlY3Rpb246IENvbnRyb2xsZXJEaXJlY3Rpb24uRGVjcmVhc2luZyxcbiAgICAgIHBhbGV0dGU6IENvbnRyb2xsZXJQYWxldHRlLk1pZGlDb250cm9sbGVyLFxuICAgICAgaW5kZXg6IDExXG4gICAgfSxcbiAgICB2YWx1ZTogOTYwLFxuICAgIHZhbHVlU291cmNlOiB7XG4gICAgICB0eXBlOiBDb250cm9sbGVyVHlwZS5MaW5lYXIsXG4gICAgICBwb2xhcml0eTogQ29udHJvbGxlclBvbGFyaXR5LlVuaXBvbGFyLFxuICAgICAgZGlyZWN0aW9uOiBDb250cm9sbGVyRGlyZWN0aW9uLkluY3JlYXNpbmcsXG4gICAgICBwYWxldHRlOiBDb250cm9sbGVyUGFsZXR0ZS5HZW5lcmFsQ29udHJvbGxlcixcbiAgICAgIGluZGV4OiBDb250cm9sbGVyLk5vQ29udHJvbGxlclxuICAgIH0sXG4gICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm1UeXBlLkxpbmVhclxuICB9LFxuXG4gIC8vIE1JREkgY29udGludW91cyBjb250cm9sbGVyIDkxIHRvIHJldmVyYiBlZmZlY3RzIHNlbmRcbiAge1xuICAgIGlkOiBHZW5lcmF0b3JUeXBlLlJldmVyYkVmZmVjdHNTZW5kLFxuICAgIHNvdXJjZToge1xuICAgICAgdHlwZTogQ29udHJvbGxlclR5cGUuTGluZWFyLFxuICAgICAgcG9sYXJpdHk6IENvbnRyb2xsZXJQb2xhcml0eS5Vbmlwb2xhcixcbiAgICAgIGRpcmVjdGlvbjogQ29udHJvbGxlckRpcmVjdGlvbi5JbmNyZWFzaW5nLFxuICAgICAgcGFsZXR0ZTogQ29udHJvbGxlclBhbGV0dGUuTWlkaUNvbnRyb2xsZXIsXG4gICAgICBpbmRleDogOTFcbiAgICB9LFxuICAgIHZhbHVlOiAyMDAsIC8vIHRlbnRocyBvZiBhIHBlcmNlbnRcbiAgICB2YWx1ZVNvdXJjZToge1xuICAgICAgdHlwZTogQ29udHJvbGxlclR5cGUuTGluZWFyLFxuICAgICAgcG9sYXJpdHk6IENvbnRyb2xsZXJQb2xhcml0eS5Vbmlwb2xhcixcbiAgICAgIGRpcmVjdGlvbjogQ29udHJvbGxlckRpcmVjdGlvbi5JbmNyZWFzaW5nLFxuICAgICAgcGFsZXR0ZTogQ29udHJvbGxlclBhbGV0dGUuR2VuZXJhbENvbnRyb2xsZXIsXG4gICAgICBpbmRleDogQ29udHJvbGxlci5Ob0NvbnRyb2xsZXJcbiAgICB9LFxuICAgIHRyYW5zZm9ybTogVHJhbnNmb3JtVHlwZS5MaW5lYXJcbiAgfSxcblxuICAvLyBNSURJIGNvbnRpbnVvdXMgY29udHJvbGxlciA5MyB0byBjaG9ydXMgZWZmZWN0cyBzZW5kXG4gIHtcbiAgICBpZDogR2VuZXJhdG9yVHlwZS5DaG9ydXNFZmZlY3RzU2VuZCxcbiAgICBzb3VyY2U6IHtcbiAgICAgIHR5cGU6IENvbnRyb2xsZXJUeXBlLkxpbmVhcixcbiAgICAgIHBvbGFyaXR5OiBDb250cm9sbGVyUG9sYXJpdHkuVW5pcG9sYXIsXG4gICAgICBkaXJlY3Rpb246IENvbnRyb2xsZXJEaXJlY3Rpb24uSW5jcmVhc2luZyxcbiAgICAgIHBhbGV0dGU6IENvbnRyb2xsZXJQYWxldHRlLk1pZGlDb250cm9sbGVyLFxuICAgICAgaW5kZXg6IDkzXG4gICAgfSxcbiAgICB2YWx1ZTogMjAwLCAvLyB0ZW50aHMgb2YgYSBwZXJjZW50XG4gICAgdmFsdWVTb3VyY2U6IHtcbiAgICAgIHR5cGU6IENvbnRyb2xsZXJUeXBlLkxpbmVhcixcbiAgICAgIHBvbGFyaXR5OiBDb250cm9sbGVyUG9sYXJpdHkuVW5pcG9sYXIsXG4gICAgICBkaXJlY3Rpb246IENvbnRyb2xsZXJEaXJlY3Rpb24uSW5jcmVhc2luZyxcbiAgICAgIHBhbGV0dGU6IENvbnRyb2xsZXJQYWxldHRlLkdlbmVyYWxDb250cm9sbGVyLFxuICAgICAgaW5kZXg6IENvbnRyb2xsZXIuTm9Db250cm9sbGVyXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IFRyYW5zZm9ybVR5cGUuTGluZWFyXG4gIH0sXG5cbiAgLy8gTUlESSBwaXRjaCB3aGVlbCB0byBpbml0aWFsIHBpdGNoIGNvbnRyb2xsZWQgYnkgTUlESSBwaXRjaCB3aGVlbCBzZW5zaXRpdml0eVxuICB7XG4gICAgaWQ6IEdlbmVyYXRvclR5cGUuQ29hcnNlVHVuZSxcbiAgICBzb3VyY2U6IHtcbiAgICAgIHR5cGU6IENvbnRyb2xsZXJUeXBlLkxpbmVhcixcbiAgICAgIHBvbGFyaXR5OiBDb250cm9sbGVyUG9sYXJpdHkuQmlwb2xhcixcbiAgICAgIGRpcmVjdGlvbjogQ29udHJvbGxlckRpcmVjdGlvbi5JbmNyZWFzaW5nLFxuICAgICAgcGFsZXR0ZTogQ29udHJvbGxlclBhbGV0dGUuR2VuZXJhbENvbnRyb2xsZXIsXG4gICAgICBpbmRleDogQ29udHJvbGxlci5QaXRjaFdoZWVsXG4gICAgfSxcbiAgICB2YWx1ZTogMTI3MDAsIC8vIGNlbnRzXG4gICAgdmFsdWVTb3VyY2U6IHtcbiAgICAgIHR5cGU6IENvbnRyb2xsZXJUeXBlLkxpbmVhcixcbiAgICAgIHBvbGFyaXR5OiBDb250cm9sbGVyUG9sYXJpdHkuVW5pcG9sYXIsXG4gICAgICBkaXJlY3Rpb246IENvbnRyb2xsZXJEaXJlY3Rpb24uSW5jcmVhc2luZyxcbiAgICAgIHBhbGV0dGU6IENvbnRyb2xsZXJQYWxldHRlLkdlbmVyYWxDb250cm9sbGVyLFxuICAgICAgaW5kZXg6IENvbnRyb2xsZXIuUGl0Y2hXaGVlbFNlbnNpdGl2aXR5XG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IFRyYW5zZm9ybVR5cGUuTGluZWFyXG4gIH1cbl07XG4iLCIvKipcbiAqIFNvdW5kRm9udDIgc2FtcGxlcyBhcmUgaW4gdGhlIFdBViBmb3JtYXQsIG1lYW5pbmcgdGhhdCB0aGV5IGNvbnNpc3Qgb2YgYSBzaWduZWQgMTYtYml0IGFycmF5LFxuICogaW5zdGVhZCBvZiBhIHVuc2lnbmVkIDgtYml0IGFycmF5LCB3aGljaCBpcyByZWFkIGJ5IGRlZmF1bHQuIFRoZSBzYW1wbGUgZGF0YSBpbiB0aGUgYHNtcGxgXG4gKiBzdWItY2h1bmsgaXMgcGFyc2VkIGFzIEludDE2QXJyYXkgYmVmb3JlIGNyZWF0aW5nIGEgc2FtcGxlLlxuICovXG5leHBvcnQgdHlwZSBTYW1wbGVEYXRhID0gSW50MTZBcnJheTtcblxuLyoqXG4gKiBUaGUgc2FtcGxlIHR5cGUsIGZvdW5kIGluIHRoZSBgdHlwZWAgZmllbGQgaW4gdGhlIGhlYWRlci5cbiAqL1xuZXhwb3J0IGVudW0gU2FtcGxlVHlwZSB7XG4gIEVPUyA9IDAsXG4gIE1vbm8gPSAxLFxuICBSaWdodCA9IDIsXG4gIExlZnQgPSA0LFxuICBMaW5rZWQgPSA4LFxuICBSb21Nb25vID0gMzI3NjksXG4gIFJvbVJpZ2h0ID0gMzI3NzAsXG4gIFJvbUxlZnQgPSAzMjc3MixcbiAgUm9tTGlua2VkID0gMzI3NzZcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTYW1wbGVIZWFkZXIge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIHNhbXBsZS4gVGhpcyBtYXkgYmUgRU9TLCBpbmRpY2F0aW5nIGVuZCBvZiBzYW1wbGVzLCB3aXRoIGFsbCBvZiB0aGUgb3RoZXJcbiAgICogdmFsdWVzIHNldCB0byB6ZXJvLlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc3RhcnQgb2YgdGhlIHNhbXBsZSBpbiBkYXRhIHBvaW50cywgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzYW1wbGUgZGF0YSBmaWVsZCB0byB0aGVcbiAgICogZmlyc3QgZGF0YSBwb2ludCBvZiB0aGUgc2FtcGxlLlxuICAgKi9cbiAgc3RhcnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGVuZCBvZiB0aGUgc2FtcGxlIGluIGRhdGEgcG9pbnRzLCBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHNhbXBsZSBkYXRhIGZpZWxkIHRvIHRoZSBmaXJzdFxuICAgKiBzZXQgb2YgNDYgemVybyB2YWx1ZWQgZGF0YSBwb2ludHMgZm9sbG93aW5nIHRoaXMgc2FtcGxlLlxuICAgKi9cbiAgZW5kOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleCBpbiBzYW1wbGUgZGF0YSBwb2ludHMsIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgc2FtcGxlIGRhdGEgZmllbGQgdG8gdGhlIGZpcnN0IGRhdGFcbiAgICogcG9pbnQgaW4gdGhlIGxvb3Agb2YgdGhpcyBzYW1wbGUuXG4gICAqL1xuICBzdGFydExvb3A6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGluZGV4IGluIHNhbXBsZSBkYXRhIHBvaW50cywgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzYW1wbGUgZGF0YSBmaWVsZCB0byB0aGUgZmlyc3QgZGF0YVxuICAgKiBwb2ludCBmb2xsb3dpbmcgdGhlIGxvb3Agb2YgdGhpcyBzYW1wbGUuXG4gICAqL1xuICBlbmRMb29wOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzYW1wbGUgcmF0ZSBpbiBoZXJ0eiwgYXQgd2hpY2ggdGhlIHNhbXBsZSB3YXMgYWNxdWlyZWQgb3IgdG8gd2hpY2ggaXQgd2FzIG1vc3QgcmVjZW50bHlcbiAgICogY29udmVydGVkLiBUaGUgdmFsdWUgc2hvdWxkIGJlIGJldHdlZW4gNDAwIGFuZCA1MDAwMCBoZXJ0eiwgYnV0IHRoaXMgaXMgbm90IGEgc3RyaWN0XG4gICAqIHJlcXVpcmVtZW50LiBBIHZhbHVlIG9mIHplcm8gaXMgaWxsZWdhbC5cbiAgICovXG4gIHNhbXBsZVJhdGU6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIE1JREkga2V5IG51bWJlciBvZiB0aGUgcmVjb3JkZWQgcGl0Y2ggb2YgdGhlIHNhbXBsZS4gRm9yIHVucGl0Y2hlZCBzb3VuZHMsIHRoaXMgc2hvdWxkIGJlXG4gICAqIGEgdmFsdWUgb2YgMjU1LiBWYWx1ZXMgYmV0d2VlbiAxMjggYW5kIDI1NCBhcmUgaWxsZWdhbCBhbmQgYSB2YWx1ZSBvZiA2MCBzaG91bGQgYmUgdXNlZFxuICAgKiBpbnN0ZWFkLlxuICAgKi9cbiAgb3JpZ2luYWxQaXRjaDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgcGl0Y2ggY29ycmVjdGlvbiBpbiBjZW50cyB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBzYW1wbGUgb24gcGxheWJhY2ssIHRvIGNvbXBlbnNhdGVcbiAgICogZm9yIGFueSBwaXRjaCBlcnJvcnMgZHVyaW5nIHRoZSBzYW1wbGUgcmVjb3JkaW5nLlxuICAgKi9cbiAgcGl0Y2hDb3JyZWN0aW9uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzYW1wbGUgaGVhZGVyIGluZGV4IG9mIHRoZSBhc3NvY2lhdGVkIGxlZnQgb3IgcmlnaHQgc2FtcGxlLCBpZiB0aGUgc2FtcGxlIHR5cGUgaXMgYSBsZWZ0XG4gICAqIG9yIHJpZ2h0IHR5cGUuIEJvdGggc2FtcGxlcyBzaG91bGQgYmUgcGxheWVkIGF0IHRoZSBzYW1lIHRpbWUsIHdpdGggdGhlIHBpdGNoIGNvbnRyb2xsZWQgYnlcbiAgICogdGhlIHJpZ2h0IHNhbXBsZSdzIGdlbmVyYXRvcnMuXG4gICAqL1xuICBsaW5rOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgdHlwZSBvZiBzYW1wbGUuXG4gICAqL1xuICB0eXBlOiBTYW1wbGVUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNhbXBsZSB7XG4gIC8qKlxuICAgKiBUaGUgc2FtcGxlIGhlYWRlciBjb250YWluaW5nIHRoZSBtZXRhIGRhdGEuXG4gICAqL1xuICBoZWFkZXI6IFNhbXBsZUhlYWRlcjtcblxuICAvKipcbiAgICogVGhlIHNhbXBsZSBkYXRhIHBhcnNlZCBhcyBJbnQxNkFycmF5LlxuICAgKi9cbiAgZGF0YTogU2FtcGxlRGF0YTtcbn1cbiIsIi8qKlxuICogQ29udmVydCBhIFVURi04IGVuY29kZWQgYnVmZmVyIGludG8gYSBzdHJpbmcuIFRoaXMgd2lsbCByZWFkIHRoZSBmdWxsIGJ1ZmZlciBhcyBVVEYtOCBlbmNvZGVkXG4gKiBzdHJpbmcgYW5kIHJldHVybiBhbnl0aGluZyBiZWZvcmUgdGhlIGZpcnN0IE5VTEwgY2hhcmFjdGVyLiBUaGUgb3V0cHV0IHRleHQgaXMgdHJpbW1lZCBvZiBhbnlcbiAqIHByZWNlZGluZyBvciBmb2xsb3dpbmcgc3BhY2VzLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgLSBUaGUgaW5wdXQgYnVmZmVyXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTdHJpbmdGcm9tQnVmZmVyID0gKGJ1ZmZlcjogVWludDhBcnJheSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRlY29kZWQgPSBuZXcgVGV4dERlY29kZXIoJ3V0ZjgnKS5kZWNvZGUoYnVmZmVyKTtcbiAgcmV0dXJuIGRlY29kZWQuc3BsaXQoL1xcMC8pWzBdLnRyaW0oKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2J1ZmZlcic7XG5leHBvcnQgKiBmcm9tICcuL21lbW9pemUnO1xuIiwiLyoqXG4gKiBSZXR1cm5zIGEgbWVtb2l6ZWQgZnVuY3Rpb24gZm9yIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi4gRnVuY3Rpb24gYXJndW1lbnRzIGFyZSBzZXJpYWxpemVkIGFzIGFcbiAqIEpTT04gc3RyaW5nIGFuZCBzdG9yZWQgaW4gYW4gaW4tbWVtb3J5IG9iamVjdC5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHRlbXBsYXRlIFVcbiAqIEBwYXJhbSB7KC4uLm9yaWdpbmFsQXJnczogVFtdKSA9PiBVfSBvcmlnaW5hbEZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBtZW1vaXplID0gPFQsIFU+KFxuICBvcmlnaW5hbEZ1bmN0aW9uOiAoLi4ub3JpZ2luYWxBcmdzOiBUW10pID0+IFVcbik6ICgoLi4uYXJnczogVFtdKSA9PiBVKSA9PiB7XG4gIGNvbnN0IG1lbW86IHsgW2tleTogc3RyaW5nXTogVSB9ID0ge307XG5cbiAgcmV0dXJuICguLi5hcmdzOiBUW10pID0+IHtcbiAgICBjb25zdCBzZXJpYWxpemVkQXJncyA9IEpTT04uc3RyaW5naWZ5KGFyZ3MpO1xuICAgIGlmIChzZXJpYWxpemVkQXJncyBpbiBtZW1vKSB7XG4gICAgICByZXR1cm4gbWVtb1tzZXJpYWxpemVkQXJnc107XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0cHV0ID0gb3JpZ2luYWxGdW5jdGlvbiguLi5hcmdzKTtcbiAgICBtZW1vW3NlcmlhbGl6ZWRBcmdzXSA9IG91dHB1dDtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==