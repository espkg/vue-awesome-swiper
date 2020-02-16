(function webpackUniversalModuleDefinition (root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') { module.exports = factory() } else if (typeof define === 'function' && define.amd) { define([], factory) } else if (typeof exports === 'object') { exports['vue-awesome-swiper'] = factory() } else { root['vue-awesome-swiper'] = factory() }
})((typeof self !== 'undefined' ? self : this), function () {
  return /******/ (function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {}
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__ (moduleId) {
      /******/
      /******/ 		// Check if module is in cache
      /******/ 		if (installedModules[moduleId]) {
        /******/ 			return installedModules[moduleId].exports
        /******/ 		}
      /******/ 		// Create a new module (and put it into the cache)
      /******/ 		var module = installedModules[moduleId] = {
        /******/ 			i: moduleId,
        /******/ 			l: false,
        /******/ 			exports: {}
        /******/ 		}
      /******/
      /******/ 		// Execute the module function
      /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
      /******/
      /******/ 		// Flag the module as loaded
      /******/ 		module.l = true
      /******/
      /******/ 		// Return the exports of the module
      /******/ 		return module.exports
      /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function (exports, name, getter) {
      /******/ 		if (!__webpack_require__.o(exports, name)) {
        /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter })
        /******/ 		}
      /******/ 	}
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function (exports) {
      /******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/ 		}
      /******/ 		Object.defineProperty(exports, '__esModule', { value: true })
      /******/ 	}
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function (value, mode) {
      /******/ 		if (mode & 1) value = __webpack_require__(value)
      /******/ 		if (mode & 8) return value
      /******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value
      /******/ 		var ns = Object.create(null)
      /******/ 		__webpack_require__.r(ns)
      /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value })
      /******/ 		if (mode & 2 && typeof value !== 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key] }.bind(null, key))
      /******/ 		return ns
      /******/ 	}
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function (module) {
      /******/ 		var getter = module && module.__esModule
      /******/ 			? function getDefault () { return module.default }
      /******/ 			: function getModuleExports () { return module }
      /******/ 		__webpack_require__.d(getter, 'a', getter)
      /******/ 		return getter
      /******/ 	}
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property) }
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = ''
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 'fb15')
    /******/ })
  /************************************************************************/
  /******/ ({

    /***/ '00ee':
    /***/ function (module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__('b622')

      var TO_STRING_TAG = wellKnownSymbol('toStringTag')
      var test = {}

      test[TO_STRING_TAG] = 'z'

      module.exports = String(test) === '[object z]'
      /***/ },

    /***/ '0366':
    /***/ function (module, exports, __webpack_require__) {
      var aFunction = __webpack_require__('1c0b')

      // optional / simple context binding
      module.exports = function (fn, that, length) {
        aFunction(fn)
        if (that === undefined) return fn
        switch (length) {
          case 0: return function () {
            return fn.call(that)
          }
          case 1: return function (a) {
            return fn.call(that, a)
          }
          case 2: return function (a, b) {
            return fn.call(that, a, b)
          }
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c)
          }
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments)
        }
      }
      /***/ },

    /***/ '057f':
    /***/ function (module, exports, __webpack_require__) {
      var toIndexedObject = __webpack_require__('fc6a')
      var nativeGetOwnPropertyNames = __webpack_require__('241c').f

      var toString = {}.toString

      var windowNames = typeof window === 'object' && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window) : []

      var getWindowNames = function (it) {
        try {
          return nativeGetOwnPropertyNames(it)
        } catch (error) {
          return windowNames.slice()
        }
      }

      // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
      module.exports.f = function getOwnPropertyNames (it) {
        return windowNames && toString.call(it) == '[object Window]'
          ? getWindowNames(it)
          : nativeGetOwnPropertyNames(toIndexedObject(it))
      }
      /***/ },

    /***/ '06cf':
    /***/ function (module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__('83ab')
      var propertyIsEnumerableModule = __webpack_require__('d1e7')
      var createPropertyDescriptor = __webpack_require__('5c6c')
      var toIndexedObject = __webpack_require__('fc6a')
      var toPrimitive = __webpack_require__('c04e')
      var has = __webpack_require__('5135')
      var IE8_DOM_DEFINE = __webpack_require__('0cfb')

      var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
      exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor (O, P) {
        O = toIndexedObject(O)
        P = toPrimitive(P, true)
        if (IE8_DOM_DEFINE) {
          try {
            return nativeGetOwnPropertyDescriptor(O, P)
          } catch (error) { /* empty */ }
        }
        if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P])
      }
      /***/ },

    /***/ '0cfb':
    /***/ function (module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__('83ab')
      var fails = __webpack_require__('d039')
      var createElement = __webpack_require__('cc12')

      // Thank's IE8 for his funny defineProperty
      module.exports = !DESCRIPTORS && !fails(function () {
        return Object.defineProperty(createElement('div'), 'a', {
          get: function () { return 7 }
        }).a != 7
      })
      /***/ },

    /***/ '159b':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('da84')
      var DOMIterables = __webpack_require__('fdbc')
      var forEach = __webpack_require__('17c2')
      var createNonEnumerableProperty = __webpack_require__('9112')

      for (var COLLECTION_NAME in DOMIterables) {
        var Collection = global[COLLECTION_NAME]
        var CollectionPrototype = Collection && Collection.prototype
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype && CollectionPrototype.forEach !== forEach) {
          try {
            createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach)
          } catch (error) {
            CollectionPrototype.forEach = forEach
          }
        }
      }
      /***/ },

    /***/ '17c2':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var $forEach = __webpack_require__('b727').forEach
      var arrayMethodIsStrict = __webpack_require__('a640')
      var arrayMethodUsesToLength = __webpack_require__('ae40')

      var STRICT_METHOD = arrayMethodIsStrict('forEach')
      var USES_TO_LENGTH = arrayMethodUsesToLength('forEach')

      // `Array.prototype.forEach` method implementation
      // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
      module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach (callbackfn /* , thisArg */) {
        return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      } : [].forEach
      /***/ },

    /***/ '1be4':
    /***/ function (module, exports, __webpack_require__) {
      var getBuiltIn = __webpack_require__('d066')

      module.exports = getBuiltIn('document', 'documentElement')
      /***/ },

    /***/ '1c0b':
    /***/ function (module, exports) {
      module.exports = function (it) {
        if (typeof it !== 'function') {
          throw TypeError(String(it) + ' is not a function')
        } return it
      }
      /***/ },

    /***/ '1c7e':
    /***/ function (module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__('b622')

      var ITERATOR = wellKnownSymbol('iterator')
      var SAFE_CLOSING = false

      try {
        var called = 0
        var iteratorWithReturn = {
          next: function () {
            return { done: !!called++ }
          },
          return: function () {
            SAFE_CLOSING = true
          }
        }
        iteratorWithReturn[ITERATOR] = function () {
          return this
        }
        // eslint-disable-next-line no-throw-literal
        Array.from(iteratorWithReturn, function () { throw 2 })
      } catch (error) { /* empty */ }

      module.exports = function (exec, SKIP_CLOSING) {
        if (!SKIP_CLOSING && !SAFE_CLOSING) return false
        var ITERATION_SUPPORT = false
        try {
          var object = {}
          object[ITERATOR] = function () {
            return {
              next: function () {
                return { done: ITERATION_SUPPORT = true }
              }
            }
          }
          exec(object)
        } catch (error) { /* empty */ }
        return ITERATION_SUPPORT
      }
      /***/ },

    /***/ '1d80':
    /***/ function (module, exports) {
      // `RequireObjectCoercible` abstract operation
      // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on " + it)
        return it
      }
      /***/ },

    /***/ '1dde':
    /***/ function (module, exports, __webpack_require__) {
      var fails = __webpack_require__('d039')
      var wellKnownSymbol = __webpack_require__('b622')
      var V8_VERSION = __webpack_require__('2d00')

      var SPECIES = wellKnownSymbol('species')

      module.exports = function (METHOD_NAME) {
        // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/677
        return V8_VERSION >= 51 || !fails(function () {
          var array = []
          var constructor = array.constructor = {}
          constructor[SPECIES] = function () {
            return { foo: 1 }
          }
          return array[METHOD_NAME](Boolean).foo !== 1
        })
      }
      /***/ },

    /***/ '23cb':
    /***/ function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__('a691')

      var max = Math.max
      var min = Math.min

      // Helper for a popular repeating case of the spec:
      // Let integer be ? ToInteger(index).
      // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
      module.exports = function (index, length) {
        var integer = toInteger(index)
        return integer < 0 ? max(integer + length, 0) : min(integer, length)
      }
      /***/ },

    /***/ '23e7':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('da84')
      var getOwnPropertyDescriptor = __webpack_require__('06cf').f
      var createNonEnumerableProperty = __webpack_require__('9112')
      var redefine = __webpack_require__('6eeb')
      var setGlobal = __webpack_require__('ce4e')
      var copyConstructorProperties = __webpack_require__('e893')
      var isForced = __webpack_require__('94ca')

      /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
      module.exports = function (options, source) {
        var TARGET = options.target
        var GLOBAL = options.global
        var STATIC = options.stat
        var FORCED, target, key, targetProperty, sourceProperty, descriptor
        if (GLOBAL) {
          target = global
        } else if (STATIC) {
          target = global[TARGET] || setGlobal(TARGET, {})
        } else {
          target = (global[TARGET] || {}).prototype
        }
        if (target) {
          for (key in source) {
            sourceProperty = source[key]
            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor(target, key)
              targetProperty = descriptor && descriptor.value
            } else targetProperty = target[key]
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced)
            // contained in target
            if (!FORCED && targetProperty !== undefined) {
              if (typeof sourceProperty === typeof targetProperty) continue
              copyConstructorProperties(sourceProperty, targetProperty)
            }
            // add a flag to not completely full polyfills
            if (options.sham || (targetProperty && targetProperty.sham)) {
              createNonEnumerableProperty(sourceProperty, 'sham', true)
            }
            // extend global
            redefine(target, key, sourceProperty, options)
          }
        }
      }
      /***/ },

    /***/ '241c':
    /***/ function (module, exports, __webpack_require__) {
      var internalObjectKeys = __webpack_require__('ca84')
      var enumBugKeys = __webpack_require__('7839')

      var hiddenKeys = enumBugKeys.concat('length', 'prototype')

      // `Object.getOwnPropertyNames` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames (O) {
        return internalObjectKeys(O, hiddenKeys)
      }
      /***/ },

    /***/ '25f0':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var redefine = __webpack_require__('6eeb')
      var anObject = __webpack_require__('825a')
      var fails = __webpack_require__('d039')
      var flags = __webpack_require__('ad6d')

      var TO_STRING = 'toString'
      var RegExpPrototype = RegExp.prototype
      var nativeToString = RegExpPrototype[TO_STRING]

      var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b' })
      // FF44- RegExp#toString has a wrong name
      var INCORRECT_NAME = nativeToString.name != TO_STRING

      // `RegExp.prototype.toString` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
      if (NOT_GENERIC || INCORRECT_NAME) {
        redefine(RegExp.prototype, TO_STRING, function toString () {
          var R = anObject(this)
          var p = String(R.source)
          var rf = R.flags
          var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf)
          return '/' + p + '/' + f
        }, { unsafe: true })
      }
      /***/ },

    /***/ '2d00':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('da84')
      var userAgent = __webpack_require__('342f')

      var process = global.process
      var versions = process && process.versions
      var v8 = versions && versions.v8
      var match, version

      if (v8) {
        match = v8.split('.')
        version = match[0] + match[1]
      } else if (userAgent) {
        match = userAgent.match(/Edge\/(\d+)/)
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/)
          if (match) version = match[1]
        }
      }

      module.exports = version && +version
      /***/ },

    /***/ '342f':
    /***/ function (module, exports, __webpack_require__) {
      var getBuiltIn = __webpack_require__('d066')

      module.exports = getBuiltIn('navigator', 'userAgent') || ''
      /***/ },

    /***/ '35a1':
    /***/ function (module, exports, __webpack_require__) {
      var classof = __webpack_require__('f5df')
      var Iterators = __webpack_require__('3f8c')
      var wellKnownSymbol = __webpack_require__('b622')

      var ITERATOR = wellKnownSymbol('iterator')

      module.exports = function (it) {
        if (it != undefined) {
          return it[ITERATOR] ||
    it['@@iterator'] ||
    Iterators[classof(it)]
        }
      }
      /***/ },

    /***/ '37e8':
    /***/ function (module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__('83ab')
      var definePropertyModule = __webpack_require__('9bf2')
      var anObject = __webpack_require__('825a')
      var objectKeys = __webpack_require__('df75')

      // `Object.defineProperties` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperties
      module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties (O, Properties) {
        anObject(O)
        var keys = objectKeys(Properties)
        var length = keys.length
        var index = 0
        var key
        while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key])
        return O
      }
      /***/ },

    /***/ '3bbe':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('861d')

      module.exports = function (it) {
        if (!isObject(it) && it !== null) {
          throw TypeError("Can't set " + String(it) + ' as a prototype')
        } return it
      }
      /***/ },

    /***/ '3ca3':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var charAt = __webpack_require__('6547').charAt
      var InternalStateModule = __webpack_require__('69f3')
      var defineIterator = __webpack_require__('7dd0')

      var STRING_ITERATOR = 'String Iterator'
      var setInternalState = InternalStateModule.set
      var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR)

      // `String.prototype[@@iterator]` method
      // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
      defineIterator(String, 'String', function (iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: String(iterated),
          index: 0
        })
        // `%StringIteratorPrototype%.next` method
        // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
      }, function next () {
        var state = getInternalState(this)
        var string = state.string
        var index = state.index
        var point
        if (index >= string.length) return { value: undefined, done: true }
        point = charAt(string, index)
        state.index += point.length
        return { value: point, done: false }
      })
      /***/ },

    /***/ '3f8c':
    /***/ function (module, exports) {
      module.exports = {}
      /***/ },

    /***/ 4160:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var $ = __webpack_require__('23e7')
      var forEach = __webpack_require__('17c2')

      // `Array.prototype.forEach` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
      $({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
        forEach: forEach
      })
      /***/ },

    /***/ '428f':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('da84')

      module.exports = global
      /***/ },

    /***/ '44ad':
    /***/ function (module, exports, __webpack_require__) {
      var fails = __webpack_require__('d039')
      var classof = __webpack_require__('c6b6')

      var split = ''.split

      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      module.exports = fails(function () {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins
        return !Object('z').propertyIsEnumerable(0)
      }) ? function (it) {
          return classof(it) == 'String' ? split.call(it, '') : Object(it)
        } : Object
      /***/ },

    /***/ '44d2':
    /***/ function (module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__('b622')
      var create = __webpack_require__('7c73')
      var definePropertyModule = __webpack_require__('9bf2')

      var UNSCOPABLES = wellKnownSymbol('unscopables')
      var ArrayPrototype = Array.prototype

      // Array.prototype[@@unscopables]
      // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
      if (ArrayPrototype[UNSCOPABLES] == undefined) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null)
        })
      }

      // add a key to Array.prototype[@@unscopables]
      module.exports = function (key) {
        ArrayPrototype[UNSCOPABLES][key] = true
      }
      /***/ },

    /***/ 4930:
    /***/ function (module, exports, __webpack_require__) {
      var fails = __webpack_require__('d039')

      module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
        // Chrome 38 Symbol has incorrect toString conversion
        // eslint-disable-next-line no-undef
        return !String(Symbol())
      })
      /***/ },

    /***/ '4d64':
    /***/ function (module, exports, __webpack_require__) {
      var toIndexedObject = __webpack_require__('fc6a')
      var toLength = __webpack_require__('50c4')
      var toAbsoluteIndex = __webpack_require__('23cb')

      // `Array.prototype.{ indexOf, includes }` methods implementation
      var createMethod = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIndexedObject($this)
          var length = toLength(O.length)
          var index = toAbsoluteIndex(fromIndex, length)
          var value
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el) {
            while (length > index) {
              value = O[index++]
              // eslint-disable-next-line no-self-compare
              if (value != value) return true
            // Array#indexOf ignores holes, Array#includes - not
            }
          } else {
            for (;length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0
            }
          } return !IS_INCLUDES && -1
        }
      }

      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      }
      /***/ },

    /***/ '4df4':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var bind = __webpack_require__('0366')
      var toObject = __webpack_require__('7b0b')
      var callWithSafeIterationClosing = __webpack_require__('9bdd')
      var isArrayIteratorMethod = __webpack_require__('e95a')
      var toLength = __webpack_require__('50c4')
      var createProperty = __webpack_require__('8418')
      var getIteratorMethod = __webpack_require__('35a1')

      // `Array.from` method implementation
      // https://tc39.github.io/ecma262/#sec-array.from
      module.exports = function from (arrayLike /* , mapfn = undefined, thisArg = undefined */) {
        var O = toObject(arrayLike)
        var C = typeof this === 'function' ? this : Array
        var argumentsLength = arguments.length
        var mapfn = argumentsLength > 1 ? arguments[1] : undefined
        var mapping = mapfn !== undefined
        var iteratorMethod = getIteratorMethod(O)
        var index = 0
        var length, result, step, iterator, next, value
        if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2)
        // if the target is not iterable or it's an array with the default iterator - use a simple case
        if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
          iterator = iteratorMethod.call(O)
          next = iterator.next
          result = new C()
          for (;!(step = next.call(iterator)).done; index++) {
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value
            createProperty(result, index, value)
          }
        } else {
          length = toLength(O.length)
          result = new C(length)
          for (;length > index; index++) {
            value = mapping ? mapfn(O[index], index) : O[index]
            createProperty(result, index, value)
          }
        }
        result.length = index
        return result
      }
      /***/ },

    /***/ '50c4':
    /***/ function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__('a691')

      var min = Math.min

      // `ToLength` abstract operation
      // https://tc39.github.io/ecma262/#sec-tolength
      module.exports = function (argument) {
        return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0 // 2 ** 53 - 1 == 9007199254740991
      }
      /***/ },

    /***/ 5135:
    /***/ function (module, exports) {
      var hasOwnProperty = {}.hasOwnProperty

      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key)
      }
      /***/ },

    /***/ 5692:
    /***/ function (module, exports, __webpack_require__) {
      var IS_PURE = __webpack_require__('c430')
      var store = __webpack_require__('c6cd');

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {})
      })('versions', []).push({
        version: '3.6.4',
        mode: IS_PURE ? 'pure' : 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
      })
      /***/ },

    /***/ '56ef':
    /***/ function (module, exports, __webpack_require__) {
      var getBuiltIn = __webpack_require__('d066')
      var getOwnPropertyNamesModule = __webpack_require__('241c')
      var getOwnPropertySymbolsModule = __webpack_require__('7418')
      var anObject = __webpack_require__('825a')

      // all object keys, includes non-enumerable and symbols
      module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys (it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it))
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys
      }
      /***/ },

    /***/ 5899:
    /***/ function (module, exports) {
      // a string of all valid unicode whitespaces
      // eslint-disable-next-line max-len
      module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
      /***/ },

    /***/ '58a8':
    /***/ function (module, exports, __webpack_require__) {
      var requireObjectCoercible = __webpack_require__('1d80')
      var whitespaces = __webpack_require__('5899')

      var whitespace = '[' + whitespaces + ']'
      var ltrim = RegExp('^' + whitespace + whitespace + '*')
      var rtrim = RegExp(whitespace + whitespace + '*$')

      // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
      var createMethod = function (TYPE) {
        return function ($this) {
          var string = String(requireObjectCoercible($this))
          if (TYPE & 1) string = string.replace(ltrim, '')
          if (TYPE & 2) string = string.replace(rtrim, '')
          return string
        }
      }

      module.exports = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
        start: createMethod(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
        end: createMethod(2),
        // `String.prototype.trim` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.trim
        trim: createMethod(3)
      }
      /***/ },

    /***/ '5c6c':
    /***/ function (module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        }
      }
      /***/ },

    /***/ '60da':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var DESCRIPTORS = __webpack_require__('83ab')
      var fails = __webpack_require__('d039')
      var objectKeys = __webpack_require__('df75')
      var getOwnPropertySymbolsModule = __webpack_require__('7418')
      var propertyIsEnumerableModule = __webpack_require__('d1e7')
      var toObject = __webpack_require__('7b0b')
      var IndexedObject = __webpack_require__('44ad')

      var nativeAssign = Object.assign
      var defineProperty = Object.defineProperty

      // `Object.assign` method
      // https://tc39.github.io/ecma262/#sec-object.assign
      module.exports = !nativeAssign || fails(function () {
        // should have correct order of operations (Edge bug)
        if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
          enumerable: true,
          get: function () {
            defineProperty(this, 'b', {
              value: 3,
              enumerable: false
            })
          }
        }), { b: 2 })).b !== 1) return true
        // should work with symbols and should have deterministic property order (V8 bug)
        var A = {}
        var B = {}
        // eslint-disable-next-line no-undef
        var symbol = Symbol()
        var alphabet = 'abcdefghijklmnopqrst'
        A[symbol] = 7
        alphabet.split('').forEach(function (chr) { B[chr] = chr })
        return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet
      }) ? function assign (target, source) { // eslint-disable-line no-unused-vars
          var T = toObject(target)
          var argumentsLength = arguments.length
          var index = 1
          var getOwnPropertySymbols = getOwnPropertySymbolsModule.f
          var propertyIsEnumerable = propertyIsEnumerableModule.f
          while (argumentsLength > index) {
            var S = IndexedObject(arguments[index++])
            var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S)
            var length = keys.length
            var j = 0
            var key
            while (length > j) {
              key = keys[j++]
              if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key]
            }
          } return T
        } : nativeAssign
      /***/ },

    /***/ 6547:
    /***/ function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__('a691')
      var requireObjectCoercible = __webpack_require__('1d80')

      // `String.prototype.{ codePointAt, at }` methods implementation
      var createMethod = function (CONVERT_TO_STRING) {
        return function ($this, pos) {
          var S = String(requireObjectCoercible($this))
          var position = toInteger(pos)
          var size = S.length
          var first, second
          if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined
          first = S.charCodeAt(position)
          return first < 0xD800 || first > 0xDBFF || position + 1 === size ||
      (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
            ? CONVERT_TO_STRING ? S.charAt(position) : first
            : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000
        }
      }

      module.exports = {
        // `String.prototype.codePointAt` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod(true)
      }
      /***/ },

    /***/ '65f0':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('861d')
      var isArray = __webpack_require__('e8b5')
      var wellKnownSymbol = __webpack_require__('b622')

      var SPECIES = wellKnownSymbol('species')

      // `ArraySpeciesCreate` abstract operation
      // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
      module.exports = function (originalArray, length) {
        var C
        if (isArray(originalArray)) {
          C = originalArray.constructor
          // cross-realm fallback
          if (typeof C === 'function' && (C === Array || isArray(C.prototype))) C = undefined
          else if (isObject(C)) {
            C = C[SPECIES]
            if (C === null) C = undefined
          }
        } return new (C === undefined ? Array : C)(length === 0 ? 0 : length)
      }
      /***/ },

    /***/ '69f3':
    /***/ function (module, exports, __webpack_require__) {
      var NATIVE_WEAK_MAP = __webpack_require__('7f9a')
      var global = __webpack_require__('da84')
      var isObject = __webpack_require__('861d')
      var createNonEnumerableProperty = __webpack_require__('9112')
      var objectHas = __webpack_require__('5135')
      var sharedKey = __webpack_require__('f772')
      var hiddenKeys = __webpack_require__('d012')

      var WeakMap = global.WeakMap
      var set, get, has

      var enforce = function (it) {
        return has(it) ? get(it) : set(it, {})
      }

      var getterFor = function (TYPE) {
        return function (it) {
          var state
          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError('Incompatible receiver, ' + TYPE + ' required')
          } return state
        }
      }

      if (NATIVE_WEAK_MAP) {
        var store = new WeakMap()
        var wmget = store.get
        var wmhas = store.has
        var wmset = store.set
        set = function (it, metadata) {
          wmset.call(store, it, metadata)
          return metadata
        }
        get = function (it) {
          return wmget.call(store, it) || {}
        }
        has = function (it) {
          return wmhas.call(store, it)
        }
      } else {
        var STATE = sharedKey('state')
        hiddenKeys[STATE] = true
        set = function (it, metadata) {
          createNonEnumerableProperty(it, STATE, metadata)
          return metadata
        }
        get = function (it) {
          return objectHas(it, STATE) ? it[STATE] : {}
        }
        has = function (it) {
          return objectHas(it, STATE)
        }
      }

      module.exports = {
        set: set,
        get: get,
        has: has,
        enforce: enforce,
        getterFor: getterFor
      }
      /***/ },

    /***/ '6eeb':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('da84')
      var createNonEnumerableProperty = __webpack_require__('9112')
      var has = __webpack_require__('5135')
      var setGlobal = __webpack_require__('ce4e')
      var inspectSource = __webpack_require__('8925')
      var InternalStateModule = __webpack_require__('69f3')

      var getInternalState = InternalStateModule.get
      var enforceInternalState = InternalStateModule.enforce
      var TEMPLATE = String(String).split('String');

      (module.exports = function (O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false
        var simple = options ? !!options.enumerable : false
        var noTargetGet = options ? !!options.noTargetGet : false
        if (typeof value === 'function') {
          if (typeof key === 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key)
          enforceInternalState(value).source = TEMPLATE.join(typeof key === 'string' ? key : '')
        }
        if (O === global) {
          if (simple) O[key] = value
          else setGlobal(key, value)
          return
        } else if (!unsafe) {
          delete O[key]
        } else if (!noTargetGet && O[key]) {
          simple = true
        }
        if (simple) O[key] = value
        else createNonEnumerableProperty(O, key, value)
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, 'toString', function toString () {
        return typeof this === 'function' && getInternalState(this).source || inspectSource(this)
      })
      /***/ },

    /***/ 7156:
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('861d')
      var setPrototypeOf = __webpack_require__('d2bb')

      // makes subclassing work correct for wrapped built-ins
      module.exports = function ($this, dummy, Wrapper) {
        var NewTarget, NewTargetPrototype
        if (
        // it can work only with native `setPrototypeOf`
          setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) === 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
        ) setPrototypeOf($this, NewTargetPrototype)
        return $this
      }
      /***/ },

    /***/ 7418:
    /***/ function (module, exports) {
      exports.f = Object.getOwnPropertySymbols
      /***/ },

    /***/ '746f':
    /***/ function (module, exports, __webpack_require__) {
      var path = __webpack_require__('428f')
      var has = __webpack_require__('5135')
      var wrappedWellKnownSymbolModule = __webpack_require__('e538')
      var defineProperty = __webpack_require__('9bf2').f

      module.exports = function (NAME) {
        var Symbol = path.Symbol || (path.Symbol = {})
        if (!has(Symbol, NAME)) {
          defineProperty(Symbol, NAME, {
            value: wrappedWellKnownSymbolModule.f(NAME)
          })
        }
      }
      /***/ },

    /***/ 7839:
    /***/ function (module, exports) {
      // IE8- don't enum bug keys
      module.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf'
      ]
      /***/ },

    /***/ '7b0b':
    /***/ function (module, exports, __webpack_require__) {
      var requireObjectCoercible = __webpack_require__('1d80')

      // `ToObject` abstract operation
      // https://tc39.github.io/ecma262/#sec-toobject
      module.exports = function (argument) {
        return Object(requireObjectCoercible(argument))
      }
      /***/ },

    /***/ '7c73':
    /***/ function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__('825a')
      var defineProperties = __webpack_require__('37e8')
      var enumBugKeys = __webpack_require__('7839')
      var hiddenKeys = __webpack_require__('d012')
      var html = __webpack_require__('1be4')
      var documentCreateElement = __webpack_require__('cc12')
      var sharedKey = __webpack_require__('f772')

      var GT = '>'
      var LT = '<'
      var PROTOTYPE = 'prototype'
      var SCRIPT = 'script'
      var IE_PROTO = sharedKey('IE_PROTO')

      var EmptyConstructor = function () { /* empty */ }

      var scriptTag = function (content) {
        return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT
      }

      // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
      var NullProtoObjectViaActiveX = function (activeXDocument) {
        activeXDocument.write(scriptTag(''))
        activeXDocument.close()
        var temp = activeXDocument.parentWindow.Object
        activeXDocument = null // avoid memory leak
        return temp
      }

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var NullProtoObjectViaIFrame = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = documentCreateElement('iframe')
        var JS = 'java' + SCRIPT + ':'
        var iframeDocument
        iframe.style.display = 'none'
        html.appendChild(iframe)
        // https://github.com/zloirock/core-js/issues/475
        iframe.src = String(JS)
        iframeDocument = iframe.contentWindow.document
        iframeDocument.open()
        iframeDocument.write(scriptTag('document.F=Object'))
        iframeDocument.close()
        return iframeDocument.F
      }

      // Check for document.domain and active x support
      // No need to use active x approach when document.domain is not set
      // see https://github.com/es-shims/es5-shim/issues/150
      // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
      // avoid IE GC bug
      var activeXDocument
      var NullProtoObject = function () {
        try {
          /* global ActiveXObject */
          activeXDocument = document.domain && new ActiveXObject('htmlfile')
        } catch (error) { /* ignore */ }
        NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame()
        var length = enumBugKeys.length
        while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]]
        return NullProtoObject()
      }

      hiddenKeys[IE_PROTO] = true

      // `Object.create` method
      // https://tc39.github.io/ecma262/#sec-object.create
      module.exports = Object.create || function create (O, Properties) {
        var result
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O)
          result = new EmptyConstructor()
          EmptyConstructor[PROTOTYPE] = null
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O
        } else result = NullProtoObject()
        return Properties === undefined ? result : defineProperties(result, Properties)
      }
      /***/ },

    /***/ '7dd0':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var $ = __webpack_require__('23e7')
      var createIteratorConstructor = __webpack_require__('9ed3')
      var getPrototypeOf = __webpack_require__('e163')
      var setPrototypeOf = __webpack_require__('d2bb')
      var setToStringTag = __webpack_require__('d44e')
      var createNonEnumerableProperty = __webpack_require__('9112')
      var redefine = __webpack_require__('6eeb')
      var wellKnownSymbol = __webpack_require__('b622')
      var IS_PURE = __webpack_require__('c430')
      var Iterators = __webpack_require__('3f8c')
      var IteratorsCore = __webpack_require__('ae93')

      var IteratorPrototype = IteratorsCore.IteratorPrototype
      var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS
      var ITERATOR = wellKnownSymbol('iterator')
      var KEYS = 'keys'
      var VALUES = 'values'
      var ENTRIES = 'entries'

      var returnThis = function () { return this }

      module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next)

        var getIterationMethod = function (KIND) {
          if (KIND === DEFAULT && defaultIterator) return defaultIterator
          if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND]
          switch (KIND) {
            case KEYS: return function keys () { return new IteratorConstructor(this, KIND) }
            case VALUES: return function values () { return new IteratorConstructor(this, KIND) }
            case ENTRIES: return function entries () { return new IteratorConstructor(this, KIND) }
          } return function () { return new IteratorConstructor(this) }
        }

        var TO_STRING_TAG = NAME + ' Iterator'
        var INCORRECT_VALUES_NAME = false
        var IterablePrototype = Iterable.prototype
        var nativeIterator = IterablePrototype[ITERATOR] ||
    IterablePrototype['@@iterator'] ||
    DEFAULT && IterablePrototype[DEFAULT]
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT)
        var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator
        var CurrentIteratorPrototype, methods, KEY

        // fix native
        if (anyNativeIterator) {
          CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()))
          if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
              if (setPrototypeOf) {
                setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype)
              } else if (typeof CurrentIteratorPrototype[ITERATOR] !== 'function') {
                createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis)
              }
            }
            // Set @@toStringTag to native iterators
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true)
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis
          }
        }

        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          INCORRECT_VALUES_NAME = true
          defaultIterator = function values () { return nativeIterator.call(this) }
        }

        // define iterator
        if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
          createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator)
        }
        Iterators[NAME] = defaultIterator

        // export additional methods
        if (DEFAULT) {
          methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          }
          if (FORCED) {
            for (KEY in methods) {
              if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                redefine(IterablePrototype, KEY, methods[KEY])
              }
            }
          } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods)
        }

        return methods
      }
      /***/ },

    /***/ '7f9a':
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('da84')
      var inspectSource = __webpack_require__('8925')

      var WeakMap = global.WeakMap

      module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap))
      /***/ },

    /***/ '825a':
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('861d')

      module.exports = function (it) {
        if (!isObject(it)) {
          throw TypeError(String(it) + ' is not an object')
        } return it
      }
      /***/ },

    /***/ '83ab':
    /***/ function (module, exports, __webpack_require__) {
      var fails = __webpack_require__('d039')

      // Thank's IE8 for his funny defineProperty
      module.exports = !fails(function () {
        return Object.defineProperty({}, 1, { get: function () { return 7 } })[1] != 7
      })
      /***/ },

    /***/ 8418:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var toPrimitive = __webpack_require__('c04e')
      var definePropertyModule = __webpack_require__('9bf2')
      var createPropertyDescriptor = __webpack_require__('5c6c')

      module.exports = function (object, key, value) {
        var propertyKey = toPrimitive(key)
        if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value))
        else object[propertyKey] = value
      }
      /***/ },

    /***/ '861d':
    /***/ function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function'
      }
      /***/ },

    /***/ 8925:
    /***/ function (module, exports, __webpack_require__) {
      var store = __webpack_require__('c6cd')

      var functionToString = Function.toString

      // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
      if (typeof store.inspectSource !== 'function') {
        store.inspectSource = function (it) {
          return functionToString.call(it)
        }
      }

      module.exports = store.inspectSource
      /***/ },

    /***/ '90e3':
    /***/ function (module, exports) {
      var id = 0
      var postfix = Math.random()

      module.exports = function (key) {
        return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36)
      }
      /***/ },

    /***/ 9112:
    /***/ function (module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__('83ab')
      var definePropertyModule = __webpack_require__('9bf2')
      var createPropertyDescriptor = __webpack_require__('5c6c')

      module.exports = DESCRIPTORS ? function (object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value))
      } : function (object, key, value) {
        object[key] = value
        return object
      }
      /***/ },

    /***/ '94ca':
    /***/ function (module, exports, __webpack_require__) {
      var fails = __webpack_require__('d039')

      var replacement = /#|\.prototype\./

      var isForced = function (feature, detection) {
        var value = data[normalize(feature)]
        return value == POLYFILL ? true
          : value == NATIVE ? false
            : typeof detection === 'function' ? fails(detection)
              : !!detection
      }

      var normalize = isForced.normalize = function (string) {
        return String(string).replace(replacement, '.').toLowerCase()
      }

      var data = isForced.data = {}
      var NATIVE = isForced.NATIVE = 'N'
      var POLYFILL = isForced.POLYFILL = 'P'

      module.exports = isForced
      /***/ },

    /***/ '9bdd':
    /***/ function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__('825a')

      // call something on iterator step with safe closing on error
      module.exports = function (iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value)
          // 7.4.6 IteratorClose(iterator, completion)
        } catch (error) {
          var returnMethod = iterator.return
          if (returnMethod !== undefined) anObject(returnMethod.call(iterator))
          throw error
        }
      }
      /***/ },

    /***/ '9bf2':
    /***/ function (module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__('83ab')
      var IE8_DOM_DEFINE = __webpack_require__('0cfb')
      var anObject = __webpack_require__('825a')
      var toPrimitive = __webpack_require__('c04e')

      var nativeDefineProperty = Object.defineProperty

      // `Object.defineProperty` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperty
      exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty (O, P, Attributes) {
        anObject(O)
        P = toPrimitive(P, true)
        anObject(Attributes)
        if (IE8_DOM_DEFINE) {
          try {
            return nativeDefineProperty(O, P, Attributes)
          } catch (error) { /* empty */ }
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported')
        if ('value' in Attributes) O[P] = Attributes.value
        return O
      }
      /***/ },

    /***/ '9ed3':
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var IteratorPrototype = __webpack_require__('ae93').IteratorPrototype
      var create = __webpack_require__('7c73')
      var createPropertyDescriptor = __webpack_require__('5c6c')
      var setToStringTag = __webpack_require__('d44e')
      var Iterators = __webpack_require__('3f8c')

      var returnThis = function () { return this }

      module.exports = function (IteratorConstructor, NAME, next) {
        var TO_STRING_TAG = NAME + ' Iterator'
        IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) })
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true)
        Iterators[TO_STRING_TAG] = returnThis
        return IteratorConstructor
      }
      /***/ },

    /***/ a15b:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var $ = __webpack_require__('23e7')
      var IndexedObject = __webpack_require__('44ad')
      var toIndexedObject = __webpack_require__('fc6a')
      var arrayMethodIsStrict = __webpack_require__('a640')

      var nativeJoin = [].join

      var ES3_STRINGS = IndexedObject != Object
      var STRICT_METHOD = arrayMethodIsStrict('join', ',')

      // `Array.prototype.join` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.join
      $({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
        join: function join (separator) {
          return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator)
        }
      })
      /***/ },

    /***/ a434:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var $ = __webpack_require__('23e7')
      var toAbsoluteIndex = __webpack_require__('23cb')
      var toInteger = __webpack_require__('a691')
      var toLength = __webpack_require__('50c4')
      var toObject = __webpack_require__('7b0b')
      var arraySpeciesCreate = __webpack_require__('65f0')
      var createProperty = __webpack_require__('8418')
      var arrayMethodHasSpeciesSupport = __webpack_require__('1dde')
      var arrayMethodUsesToLength = __webpack_require__('ae40')

      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice')
      var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 })

      var max = Math.max
      var min = Math.min
      var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF
      var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'

      // `Array.prototype.splice` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.splice
      // with adding support of @@species
      $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
        splice: function splice (start, deleteCount /* , ...items */) {
          var O = toObject(this)
          var len = toLength(O.length)
          var actualStart = toAbsoluteIndex(start, len)
          var argumentsLength = arguments.length
          var insertCount, actualDeleteCount, A, k, from, to
          if (argumentsLength === 0) {
            insertCount = actualDeleteCount = 0
          } else if (argumentsLength === 1) {
            insertCount = 0
            actualDeleteCount = len - actualStart
          } else {
            insertCount = argumentsLength - 2
            actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart)
          }
          if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
            throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED)
          }
          A = arraySpeciesCreate(O, actualDeleteCount)
          for (k = 0; k < actualDeleteCount; k++) {
            from = actualStart + k
            if (from in O) createProperty(A, k, O[from])
          }
          A.length = actualDeleteCount
          if (insertCount < actualDeleteCount) {
            for (k = actualStart; k < len - actualDeleteCount; k++) {
              from = k + actualDeleteCount
              to = k + insertCount
              if (from in O) O[to] = O[from]
              else delete O[to]
            }
            for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1]
          } else if (insertCount > actualDeleteCount) {
            for (k = len - actualDeleteCount; k > actualStart; k--) {
              from = k + actualDeleteCount - 1
              to = k + insertCount - 1
              if (from in O) O[to] = O[from]
              else delete O[to]
            }
          }
          for (k = 0; k < insertCount; k++) {
            O[k + actualStart] = arguments[k + 2]
          }
          O.length = len - actualDeleteCount + insertCount
          return A
        }
      })
      /***/ },

    /***/ a4d3:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var $ = __webpack_require__('23e7')
      var global = __webpack_require__('da84')
      var getBuiltIn = __webpack_require__('d066')
      var IS_PURE = __webpack_require__('c430')
      var DESCRIPTORS = __webpack_require__('83ab')
      var NATIVE_SYMBOL = __webpack_require__('4930')
      var USE_SYMBOL_AS_UID = __webpack_require__('fdbf')
      var fails = __webpack_require__('d039')
      var has = __webpack_require__('5135')
      var isArray = __webpack_require__('e8b5')
      var isObject = __webpack_require__('861d')
      var anObject = __webpack_require__('825a')
      var toObject = __webpack_require__('7b0b')
      var toIndexedObject = __webpack_require__('fc6a')
      var toPrimitive = __webpack_require__('c04e')
      var createPropertyDescriptor = __webpack_require__('5c6c')
      var nativeObjectCreate = __webpack_require__('7c73')
      var objectKeys = __webpack_require__('df75')
      var getOwnPropertyNamesModule = __webpack_require__('241c')
      var getOwnPropertyNamesExternal = __webpack_require__('057f')
      var getOwnPropertySymbolsModule = __webpack_require__('7418')
      var getOwnPropertyDescriptorModule = __webpack_require__('06cf')
      var definePropertyModule = __webpack_require__('9bf2')
      var propertyIsEnumerableModule = __webpack_require__('d1e7')
      var createNonEnumerableProperty = __webpack_require__('9112')
      var redefine = __webpack_require__('6eeb')
      var shared = __webpack_require__('5692')
      var sharedKey = __webpack_require__('f772')
      var hiddenKeys = __webpack_require__('d012')
      var uid = __webpack_require__('90e3')
      var wellKnownSymbol = __webpack_require__('b622')
      var wrappedWellKnownSymbolModule = __webpack_require__('e538')
      var defineWellKnownSymbol = __webpack_require__('746f')
      var setToStringTag = __webpack_require__('d44e')
      var InternalStateModule = __webpack_require__('69f3')
      var $forEach = __webpack_require__('b727').forEach

      var HIDDEN = sharedKey('hidden')
      var SYMBOL = 'Symbol'
      var PROTOTYPE = 'prototype'
      var TO_PRIMITIVE = wellKnownSymbol('toPrimitive')
      var setInternalState = InternalStateModule.set
      var getInternalState = InternalStateModule.getterFor(SYMBOL)
      var ObjectPrototype = Object[PROTOTYPE]
      var $Symbol = global.Symbol
      var $stringify = getBuiltIn('JSON', 'stringify')
      var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
      var nativeDefineProperty = definePropertyModule.f
      var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f
      var nativePropertyIsEnumerable = propertyIsEnumerableModule.f
      var AllSymbols = shared('symbols')
      var ObjectPrototypeSymbols = shared('op-symbols')
      var StringToSymbolRegistry = shared('string-to-symbol-registry')
      var SymbolToStringRegistry = shared('symbol-to-string-registry')
      var WellKnownSymbolsStore = shared('wks')
      var QObject = global.QObject
      // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
      var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild

      // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
      var setSymbolDescriptor = DESCRIPTORS && fails(function () {
        return nativeObjectCreate(nativeDefineProperty({}, 'a', {
          get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a }
        })).a != 7
      }) ? function (O, P, Attributes) {
          var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P)
          if (ObjectPrototypeDescriptor) delete ObjectPrototype[P]
          nativeDefineProperty(O, P, Attributes)
          if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
            nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor)
          }
        } : nativeDefineProperty

      var wrap = function (tag, description) {
        var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE])
        setInternalState(symbol, {
          type: SYMBOL,
          tag: tag,
          description: description
        })
        if (!DESCRIPTORS) symbol.description = description
        return symbol
      }

      var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
        return typeof it === 'symbol'
      } : function (it) {
        return Object(it) instanceof $Symbol
      }

      var $defineProperty = function defineProperty (O, P, Attributes) {
        if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes)
        anObject(O)
        var key = toPrimitive(P, true)
        anObject(Attributes)
        if (has(AllSymbols, key)) {
          if (!Attributes.enumerable) {
            if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}))
            O[HIDDEN][key] = true
          } else {
            if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false
            Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) })
          } return setSymbolDescriptor(O, key, Attributes)
        } return nativeDefineProperty(O, key, Attributes)
      }

      var $defineProperties = function defineProperties (O, Properties) {
        anObject(O)
        var properties = toIndexedObject(Properties)
        var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties))
        $forEach(keys, function (key) {
          if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key])
        })
        return O
      }

      var $create = function create (O, Properties) {
        return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties)
      }

      var $propertyIsEnumerable = function propertyIsEnumerable (V) {
        var P = toPrimitive(V, true)
        var enumerable = nativePropertyIsEnumerable.call(this, P)
        if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false
        return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true
      }

      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor (O, P) {
        var it = toIndexedObject(O)
        var key = toPrimitive(P, true)
        if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return
        var descriptor = nativeGetOwnPropertyDescriptor(it, key)
        if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
          descriptor.enumerable = true
        }
        return descriptor
      }

      var $getOwnPropertyNames = function getOwnPropertyNames (O) {
        var names = nativeGetOwnPropertyNames(toIndexedObject(O))
        var result = []
        $forEach(names, function (key) {
          if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key)
        })
        return result
      }

      var $getOwnPropertySymbols = function getOwnPropertySymbols (O) {
        var IS_OBJECT_PROTOTYPE = O === ObjectPrototype
        var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O))
        var result = []
        $forEach(names, function (key) {
          if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
            result.push(AllSymbols[key])
          }
        })
        return result
      }

      // `Symbol` constructor
      // https://tc39.github.io/ecma262/#sec-symbol-constructor
      if (!NATIVE_SYMBOL) {
        $Symbol = function Symbol () {
          if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor')
          var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0])
          var tag = uid(description)
          var setter = function (value) {
            if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value)
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false
            setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value))
          }
          if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter })
          return wrap(tag, description)
        }

        redefine($Symbol[PROTOTYPE], 'toString', function toString () {
          return getInternalState(this).tag
        })

        redefine($Symbol, 'withoutSetter', function (description) {
          return wrap(uid(description), description)
        })

        propertyIsEnumerableModule.f = $propertyIsEnumerable
        definePropertyModule.f = $defineProperty
        getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor
        getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames
        getOwnPropertySymbolsModule.f = $getOwnPropertySymbols

        wrappedWellKnownSymbolModule.f = function (name) {
          return wrap(wellKnownSymbol(name), name)
        }

        if (DESCRIPTORS) {
          // https://github.com/tc39/proposal-Symbol-description
          nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
            configurable: true,
            get: function description () {
              return getInternalState(this).description
            }
          })
          if (!IS_PURE) {
            redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true })
          }
        }
      }

      $({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
        Symbol: $Symbol
      })

      $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
        defineWellKnownSymbol(name)
      })

      $({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
        // `Symbol.for` method
        // https://tc39.github.io/ecma262/#sec-symbol.for
        for: function (key) {
          var string = String(key)
          if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string]
          var symbol = $Symbol(string)
          StringToSymbolRegistry[string] = symbol
          SymbolToStringRegistry[symbol] = string
          return symbol
        },
        // `Symbol.keyFor` method
        // https://tc39.github.io/ecma262/#sec-symbol.keyfor
        keyFor: function keyFor (sym) {
          if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol')
          if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym]
        },
        useSetter: function () { USE_SETTER = true },
        useSimple: function () { USE_SETTER = false }
      })

      $({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
        // `Object.create` method
        // https://tc39.github.io/ecma262/#sec-object.create
        create: $create,
        // `Object.defineProperty` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperty
        defineProperty: $defineProperty,
        // `Object.defineProperties` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperties
        defineProperties: $defineProperties,
        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor
      })

      $({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
        // `Object.getOwnPropertyNames` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
        getOwnPropertyNames: $getOwnPropertyNames,
        // `Object.getOwnPropertySymbols` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
        getOwnPropertySymbols: $getOwnPropertySymbols
      })

      // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
      // https://bugs.chromium.org/p/v8/issues/detail?id=3443
      $({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1) }) }, {
        getOwnPropertySymbols: function getOwnPropertySymbols (it) {
          return getOwnPropertySymbolsModule.f(toObject(it))
        }
      })

      // `JSON.stringify` method behavior with symbols
      // https://tc39.github.io/ecma262/#sec-json.stringify
      if ($stringify) {
        var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
          var symbol = $Symbol()
          // MS Edge converts symbol values to JSON as {}
          return $stringify([symbol]) != '[null]' ||
      // WebKit converts symbol values to JSON as null
      $stringify({ a: symbol }) != '{}' ||
      // V8 throws on boxed symbols
      $stringify(Object(symbol)) != '{}'
        })

        $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
          // eslint-disable-next-line no-unused-vars
          stringify: function stringify (it, replacer, space) {
            var args = [it]
            var index = 1
            var $replacer
            while (arguments.length > index) args.push(arguments[index++])
            $replacer = replacer
            if (!isObject(replacer) && it === undefined || isSymbol(it)) return // IE8 returns string on undefined
            if (!isArray(replacer)) {
              replacer = function (key, value) {
                if (typeof $replacer === 'function') value = $replacer.call(this, key, value)
                if (!isSymbol(value)) return value
              }
            }
            args[1] = replacer
            return $stringify.apply(null, args)
          }
        })
      }

      // `Symbol.prototype[@@toPrimitive]` method
      // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
      if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
        createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf)
      }
      // `Symbol.prototype[@@toStringTag]` property
      // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
      setToStringTag($Symbol, SYMBOL)

      hiddenKeys[HIDDEN] = true
      /***/ },

    /***/ a630:
    /***/ function (module, exports, __webpack_require__) {
      var $ = __webpack_require__('23e7')
      var from = __webpack_require__('4df4')
      var checkCorrectnessOfIteration = __webpack_require__('1c7e')

      var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
        Array.from(iterable)
      })

      // `Array.from` method
      // https://tc39.github.io/ecma262/#sec-array.from
      $({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
        from: from
      })
      /***/ },

    /***/ a640:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var fails = __webpack_require__('d039')

      module.exports = function (METHOD_NAME, argument) {
        var method = [][METHOD_NAME]
        return !!method && fails(function () {
          // eslint-disable-next-line no-useless-call,no-throw-literal
          method.call(null, argument || function () { throw 1 }, 1)
        })
      }
      /***/ },

    /***/ a691:
    /***/ function (module, exports) {
      var ceil = Math.ceil
      var floor = Math.floor

      // `ToInteger` abstract operation
      // https://tc39.github.io/ecma262/#sec-tointeger
      module.exports = function (argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument)
      }
      /***/ },

    /***/ a9e3:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var DESCRIPTORS = __webpack_require__('83ab')
      var global = __webpack_require__('da84')
      var isForced = __webpack_require__('94ca')
      var redefine = __webpack_require__('6eeb')
      var has = __webpack_require__('5135')
      var classof = __webpack_require__('c6b6')
      var inheritIfRequired = __webpack_require__('7156')
      var toPrimitive = __webpack_require__('c04e')
      var fails = __webpack_require__('d039')
      var create = __webpack_require__('7c73')
      var getOwnPropertyNames = __webpack_require__('241c').f
      var getOwnPropertyDescriptor = __webpack_require__('06cf').f
      var defineProperty = __webpack_require__('9bf2').f
      var trim = __webpack_require__('58a8').trim

      var NUMBER = 'Number'
      var NativeNumber = global[NUMBER]
      var NumberPrototype = NativeNumber.prototype

      // Opera ~12 has broken Object#toString
      var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER

      // `ToNumber` abstract operation
      // https://tc39.github.io/ecma262/#sec-tonumber
      var toNumber = function (argument) {
        var it = toPrimitive(argument, false)
        var first, third, radix, maxCode, digits, length, index, code
        if (typeof it === 'string' && it.length > 2) {
          it = trim(it)
          first = it.charCodeAt(0)
          if (first === 43 || first === 45) {
            third = it.charCodeAt(2)
            if (third === 88 || third === 120) return NaN // Number('+0x1') should be NaN, old V8 fix
          } else if (first === 48) {
            switch (it.charCodeAt(1)) {
              case 66: case 98: radix = 2; maxCode = 49; break // fast equal of /^0b[01]+$/i
              case 79: case 111: radix = 8; maxCode = 55; break // fast equal of /^0o[0-7]+$/i
              default: return +it
            }
            digits = it.slice(2)
            length = digits.length
            for (index = 0; index < length; index++) {
              code = digits.charCodeAt(index)
              // parseInt parses a string to a first unavailable symbol
              // but ToNumber should return NaN if a string contains unavailable symbols
              if (code < 48 || code > maxCode) return NaN
            } return parseInt(digits, radix)
          }
        } return +it
      }

      // `Number` constructor
      // https://tc39.github.io/ecma262/#sec-number-constructor
      if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
        var NumberWrapper = function Number (value) {
          var it = arguments.length < 1 ? 0 : value
          var dummy = this
          return dummy instanceof NumberWrapper &&
      // check on 1..constructor(foo) case
      (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy) }) : classof(dummy) != NUMBER)
            ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it)
        }
        for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
          // ES3:
            'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
          ).split(','), j = 0, key; keys.length > j; j++) {
          if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
            defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key))
          }
        }
        NumberWrapper.prototype = NumberPrototype
        NumberPrototype.constructor = NumberWrapper
        redefine(global, NUMBER, NumberWrapper)
      }
      /***/ },

    /***/ ad6d:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var anObject = __webpack_require__('825a')

      // `RegExp.prototype.flags` getter implementation
      // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
      module.exports = function () {
        var that = anObject(this)
        var result = ''
        if (that.global) result += 'g'
        if (that.ignoreCase) result += 'i'
        if (that.multiline) result += 'm'
        if (that.dotAll) result += 's'
        if (that.unicode) result += 'u'
        if (that.sticky) result += 'y'
        return result
      }
      /***/ },

    /***/ ae40:
    /***/ function (module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__('83ab')
      var fails = __webpack_require__('d039')
      var has = __webpack_require__('5135')

      var defineProperty = Object.defineProperty
      var cache = {}

      var thrower = function (it) { throw it }

      module.exports = function (METHOD_NAME, options) {
        if (has(cache, METHOD_NAME)) return cache[METHOD_NAME]
        if (!options) options = {}
        var method = [][METHOD_NAME]
        var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false
        var argument0 = has(options, 0) ? options[0] : thrower
        var argument1 = has(options, 1) ? options[1] : undefined

        return cache[METHOD_NAME] = !!method && !fails(function () {
          if (ACCESSORS && !DESCRIPTORS) return true
          var O = { length: -1 }

          if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower })
          else O[1] = 1

          method.call(O, argument0, argument1)
        })
      }
      /***/ },

    /***/ ae93:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var getPrototypeOf = __webpack_require__('e163')
      var createNonEnumerableProperty = __webpack_require__('9112')
      var has = __webpack_require__('5135')
      var wellKnownSymbol = __webpack_require__('b622')
      var IS_PURE = __webpack_require__('c430')

      var ITERATOR = wellKnownSymbol('iterator')
      var BUGGY_SAFARI_ITERATORS = false

      var returnThis = function () { return this }

      // `%IteratorPrototype%` object
      // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
      var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator

      if ([].keys) {
        arrayIterator = [].keys()
        // Safari 8 has buggy iterators w/o `next`
        if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true
        else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator))
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype
        }
      }

      if (IteratorPrototype == undefined) IteratorPrototype = {}

      // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
      if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
        createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis)
      }

      module.exports = {
        IteratorPrototype: IteratorPrototype,
        BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
      }
      /***/ },

    /***/ b041:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var TO_STRING_TAG_SUPPORT = __webpack_require__('00ee')
      var classof = __webpack_require__('f5df')

      // `Object.prototype.toString` method implementation
      // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
      module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString () {
        return '[object ' + classof(this) + ']'
      }
      /***/ },

    /***/ b0c0:
    /***/ function (module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__('83ab')
      var defineProperty = __webpack_require__('9bf2').f

      var FunctionPrototype = Function.prototype
      var FunctionPrototypeToString = FunctionPrototype.toString
      var nameRE = /^\s*function ([^ (]*)/
      var NAME = 'name'

      // Function instances `.name` property
      // https://tc39.github.io/ecma262/#sec-function-instances-name
      if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
        defineProperty(FunctionPrototype, NAME, {
          configurable: true,
          get: function () {
            try {
              return FunctionPrototypeToString.call(this).match(nameRE)[1]
            } catch (error) {
              return ''
            }
          }
        })
      }
      /***/ },

    /***/ b622:
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('da84')
      var shared = __webpack_require__('5692')
      var has = __webpack_require__('5135')
      var uid = __webpack_require__('90e3')
      var NATIVE_SYMBOL = __webpack_require__('4930')
      var USE_SYMBOL_AS_UID = __webpack_require__('fdbf')

      var WellKnownSymbolsStore = shared('wks')
      var Symbol = global.Symbol
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid

      module.exports = function (name) {
        if (!has(WellKnownSymbolsStore, name)) {
          if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name]
          else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name)
        } return WellKnownSymbolsStore[name]
      }
      /***/ },

    /***/ b64b:
    /***/ function (module, exports, __webpack_require__) {
      var $ = __webpack_require__('23e7')
      var toObject = __webpack_require__('7b0b')
      var nativeKeys = __webpack_require__('df75')
      var fails = __webpack_require__('d039')

      var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1) })

      // `Object.keys` method
      // https://tc39.github.io/ecma262/#sec-object.keys
      $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
        keys: function keys (it) {
          return nativeKeys(toObject(it))
        }
      })
      /***/ },

    /***/ b727:
    /***/ function (module, exports, __webpack_require__) {
      var bind = __webpack_require__('0366')
      var IndexedObject = __webpack_require__('44ad')
      var toObject = __webpack_require__('7b0b')
      var toLength = __webpack_require__('50c4')
      var arraySpeciesCreate = __webpack_require__('65f0')

      var push = [].push

      // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
      var createMethod = function (TYPE) {
        var IS_MAP = TYPE == 1
        var IS_FILTER = TYPE == 2
        var IS_SOME = TYPE == 3
        var IS_EVERY = TYPE == 4
        var IS_FIND_INDEX = TYPE == 6
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX
        return function ($this, callbackfn, that, specificCreate) {
          var O = toObject($this)
          var self = IndexedObject(O)
          var boundFunction = bind(callbackfn, that, 3)
          var length = toLength(self.length)
          var index = 0
          var create = specificCreate || arraySpeciesCreate
          var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
          var value, result
          for (;length > index; index++) {
            if (NO_HOLES || index in self) {
              value = self[index]
              result = boundFunction(value, index, O)
              if (TYPE) {
                if (IS_MAP) target[index] = result // map
                else if (result) {
                  switch (TYPE) {
                    case 3: return true // some
                    case 5: return value // find
                    case 6: return index // findIndex
                    case 2: push.call(target, value) // filter
                  }
                } else if (IS_EVERY) return false // every
              }
            }
          }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target
        }
      }

      module.exports = {
        // `Array.prototype.forEach` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
        forEach: createMethod(0),
        // `Array.prototype.map` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.map
        map: createMethod(1),
        // `Array.prototype.filter` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.filter
        filter: createMethod(2),
        // `Array.prototype.some` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.some
        some: createMethod(3),
        // `Array.prototype.every` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.every
        every: createMethod(4),
        // `Array.prototype.find` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.find
        find: createMethod(5),
        // `Array.prototype.findIndex` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod(6)
      }
      /***/ },

    /***/ c04e:
    /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('861d')

      // `ToPrimitive` abstract operation
      // https://tc39.github.io/ecma262/#sec-toprimitive
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (input, PREFERRED_STRING) {
        if (!isObject(input)) return input
        var fn, val
        if (PREFERRED_STRING && typeof (fn = input.toString) === 'function' && !isObject(val = fn.call(input))) return val
        if (typeof (fn = input.valueOf) === 'function' && !isObject(val = fn.call(input))) return val
        if (!PREFERRED_STRING && typeof (fn = input.toString) === 'function' && !isObject(val = fn.call(input))) return val
        throw TypeError("Can't convert object to primitive value")
      }
      /***/ },

    /***/ c430:
    /***/ function (module, exports) {
      module.exports = false
      /***/ },

    /***/ c6b6:
    /***/ function (module, exports) {
      var toString = {}.toString

      module.exports = function (it) {
        return toString.call(it).slice(8, -1)
      }
      /***/ },

    /***/ c6cd:
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('da84')
      var setGlobal = __webpack_require__('ce4e')

      var SHARED = '__core-js_shared__'
      var store = global[SHARED] || setGlobal(SHARED, {})

      module.exports = store
      /***/ },

    /***/ c8ba:
    /***/ function (module, exports) {
      var g

      // This works in non-strict mode
      g = (function () {
        return this
      })()

      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function('return this')()
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === 'object') g = window
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g
      /***/ },

    /***/ c975:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var $ = __webpack_require__('23e7')
      var $indexOf = __webpack_require__('4d64').indexOf
      var arrayMethodIsStrict = __webpack_require__('a640')
      var arrayMethodUsesToLength = __webpack_require__('ae40')

      var nativeIndexOf = [].indexOf

      var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0
      var STRICT_METHOD = arrayMethodIsStrict('indexOf')
      var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 })

      // `Array.prototype.indexOf` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
      $({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
        indexOf: function indexOf (searchElement /* , fromIndex = 0 */) {
          return NEGATIVE_ZERO
          // convert -0 to +0
            ? nativeIndexOf.apply(this, arguments) || 0
            : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined)
        }
      })
      /***/ },

    /***/ ca84:
    /***/ function (module, exports, __webpack_require__) {
      var has = __webpack_require__('5135')
      var toIndexedObject = __webpack_require__('fc6a')
      var indexOf = __webpack_require__('4d64').indexOf
      var hiddenKeys = __webpack_require__('d012')

      module.exports = function (object, names) {
        var O = toIndexedObject(object)
        var i = 0
        var result = []
        var key
        for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key)
        // Don't enum bug & hidden keys
        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~indexOf(result, key) || result.push(key)
          }
        }
        return result
      }
      /***/ },

    /***/ cc12:
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('da84')
      var isObject = __webpack_require__('861d')

      var document = global.document
      // typeof document.createElement is 'object' in old IE
      var EXISTS = isObject(document) && isObject(document.createElement)

      module.exports = function (it) {
        return EXISTS ? document.createElement(it) : {}
      }
      /***/ },

    /***/ cca6:
    /***/ function (module, exports, __webpack_require__) {
      var $ = __webpack_require__('23e7')
      var assign = __webpack_require__('60da')

      // `Object.assign` method
      // https://tc39.github.io/ecma262/#sec-object.assign
      $({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
        assign: assign
      })
      /***/ },

    /***/ ce4e:
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('da84')
      var createNonEnumerableProperty = __webpack_require__('9112')

      module.exports = function (key, value) {
        try {
          createNonEnumerableProperty(global, key, value)
        } catch (error) {
          global[key] = value
        } return value
      }
      /***/ },

    /***/ d012:
    /***/ function (module, exports) {
      module.exports = {}
      /***/ },

    /***/ d039:
    /***/ function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec()
        } catch (error) {
          return true
        }
      }
      /***/ },

    /***/ d066:
    /***/ function (module, exports, __webpack_require__) {
      var path = __webpack_require__('428f')
      var global = __webpack_require__('da84')

      var aFunction = function (variable) {
        return typeof variable === 'function' ? variable : undefined
      }

      module.exports = function (namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
          : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method]
      }
      /***/ },

    /***/ d1e7:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var nativePropertyIsEnumerable = {}.propertyIsEnumerable
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

      // Nashorn ~ JDK8 bug
      var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1)

      // `Object.prototype.propertyIsEnumerable` method implementation
      // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
      exports.f = NASHORN_BUG ? function propertyIsEnumerable (V) {
        var descriptor = getOwnPropertyDescriptor(this, V)
        return !!descriptor && descriptor.enumerable
      } : nativePropertyIsEnumerable
      /***/ },

    /***/ d28b:
    /***/ function (module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__('746f')

      // `Symbol.iterator` well-known symbol
      // https://tc39.github.io/ecma262/#sec-symbol.iterator
      defineWellKnownSymbol('iterator')
      /***/ },

    /***/ d2bb:
    /***/ function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__('825a')
      var aPossiblePrototype = __webpack_require__('3bbe')

      // `Object.setPrototypeOf` method
      // https://tc39.github.io/ecma262/#sec-object.setprototypeof
      // Works with __proto__ only. Old v8 can't work with null proto objects.
      /* eslint-disable no-proto */
      module.exports = Object.setPrototypeOf || ('__proto__' in {} ? (function () {
        var CORRECT_SETTER = false
        var test = {}
        var setter
        try {
          setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set
          setter.call(test, [])
          CORRECT_SETTER = test instanceof Array
        } catch (error) { /* empty */ }
        return function setPrototypeOf (O, proto) {
          anObject(O)
          aPossiblePrototype(proto)
          if (CORRECT_SETTER) setter.call(O, proto)
          else O.__proto__ = proto
          return O
        }
      }()) : undefined)
      /***/ },

    /***/ d3b7:
    /***/ function (module, exports, __webpack_require__) {
      var TO_STRING_TAG_SUPPORT = __webpack_require__('00ee')
      var redefine = __webpack_require__('6eeb')
      var toString = __webpack_require__('b041')

      // `Object.prototype.toString` method
      // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
      if (!TO_STRING_TAG_SUPPORT) {
        redefine(Object.prototype, 'toString', toString, { unsafe: true })
      }
      /***/ },

    /***/ d44e:
    /***/ function (module, exports, __webpack_require__) {
      var defineProperty = __webpack_require__('9bf2').f
      var has = __webpack_require__('5135')
      var wellKnownSymbol = __webpack_require__('b622')

      var TO_STRING_TAG = wellKnownSymbol('toStringTag')

      module.exports = function (it, TAG, STATIC) {
        if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
          defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG })
        }
      }
      /***/ },

    /***/ da84:
    /***/ function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function (global) {
        var check = function (it) {
          return it && it.Math == Math && it
        }

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis === 'object' && globalThis) ||
  check(typeof window === 'object' && window) ||
  check(typeof self === 'object' && self) ||
  check(typeof global === 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')()
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__('c8ba')))
      /***/ },

    /***/ ddb0:
    /***/ function (module, exports, __webpack_require__) {
      var global = __webpack_require__('da84')
      var DOMIterables = __webpack_require__('fdbc')
      var ArrayIteratorMethods = __webpack_require__('e260')
      var createNonEnumerableProperty = __webpack_require__('9112')
      var wellKnownSymbol = __webpack_require__('b622')

      var ITERATOR = wellKnownSymbol('iterator')
      var TO_STRING_TAG = wellKnownSymbol('toStringTag')
      var ArrayValues = ArrayIteratorMethods.values

      for (var COLLECTION_NAME in DOMIterables) {
        var Collection = global[COLLECTION_NAME]
        var CollectionPrototype = Collection && Collection.prototype
        if (CollectionPrototype) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype[ITERATOR] !== ArrayValues) {
            try {
              createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues)
            } catch (error) {
              CollectionPrototype[ITERATOR] = ArrayValues
            }
          }
          if (!CollectionPrototype[TO_STRING_TAG]) {
            createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME)
          }
          if (DOMIterables[COLLECTION_NAME]) {
            for (var METHOD_NAME in ArrayIteratorMethods) {
            // some Chrome versions have non-configurable methods on DOMTokenList
              if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) {
                try {
                  createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME])
                } catch (error) {
                  CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME]
                }
              }
            }
          }
        }
      }
      /***/ },

    /***/ df75:
    /***/ function (module, exports, __webpack_require__) {
      var internalObjectKeys = __webpack_require__('ca84')
      var enumBugKeys = __webpack_require__('7839')

      // `Object.keys` method
      // https://tc39.github.io/ecma262/#sec-object.keys
      module.exports = Object.keys || function keys (O) {
        return internalObjectKeys(O, enumBugKeys)
      }
      /***/ },

    /***/ e01a:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'
      // `Symbol.prototype.description` getter
      // https://tc39.github.io/ecma262/#sec-symbol.prototype.description

      var $ = __webpack_require__('23e7')
      var DESCRIPTORS = __webpack_require__('83ab')
      var global = __webpack_require__('da84')
      var has = __webpack_require__('5135')
      var isObject = __webpack_require__('861d')
      var defineProperty = __webpack_require__('9bf2').f
      var copyConstructorProperties = __webpack_require__('e893')

      var NativeSymbol = global.Symbol

      if (DESCRIPTORS && typeof NativeSymbol === 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
      )) {
        var EmptyStringDescriptionStore = {}
        // wrap Symbol constructor for correct work with undefined description
        var SymbolWrapper = function Symbol () {
          var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0])
          var result = this instanceof SymbolWrapper
            ? new NativeSymbol(description)
          // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
            : description === undefined ? NativeSymbol() : NativeSymbol(description)
          if (description === '') EmptyStringDescriptionStore[result] = true
          return result
        }
        copyConstructorProperties(SymbolWrapper, NativeSymbol)
        var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype
        symbolPrototype.constructor = SymbolWrapper

        var symbolToString = symbolPrototype.toString
        var native = String(NativeSymbol('test')) == 'Symbol(test)'
        var regexp = /^Symbol\((.*)\)[^)]+$/
        defineProperty(symbolPrototype, 'description', {
          configurable: true,
          get: function description () {
            var symbol = isObject(this) ? this.valueOf() : this
            var string = symbolToString.call(symbol)
            if (has(EmptyStringDescriptionStore, symbol)) return ''
            var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1')
            return desc === '' ? undefined : desc
          }
        })

        $({ global: true, forced: true }, {
          Symbol: SymbolWrapper
        })
      }
      /***/ },

    /***/ e163:
    /***/ function (module, exports, __webpack_require__) {
      var has = __webpack_require__('5135')
      var toObject = __webpack_require__('7b0b')
      var sharedKey = __webpack_require__('f772')
      var CORRECT_PROTOTYPE_GETTER = __webpack_require__('e177')

      var IE_PROTO = sharedKey('IE_PROTO')
      var ObjectPrototype = Object.prototype

      // `Object.getPrototypeOf` method
      // https://tc39.github.io/ecma262/#sec-object.getprototypeof
      module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
        O = toObject(O)
        if (has(O, IE_PROTO)) return O[IE_PROTO]
        if (typeof O.constructor === 'function' && O instanceof O.constructor) {
          return O.constructor.prototype
        } return O instanceof Object ? ObjectPrototype : null
      }
      /***/ },

    /***/ e177:
    /***/ function (module, exports, __webpack_require__) {
      var fails = __webpack_require__('d039')

      module.exports = !fails(function () {
        function F () { /* empty */ }
        F.prototype.constructor = null
        return Object.getPrototypeOf(new F()) !== F.prototype
      })
      /***/ },

    /***/ e260:
    /***/ function (module, exports, __webpack_require__) {
      'use strict'

      var toIndexedObject = __webpack_require__('fc6a')
      var addToUnscopables = __webpack_require__('44d2')
      var Iterators = __webpack_require__('3f8c')
      var InternalStateModule = __webpack_require__('69f3')
      var defineIterator = __webpack_require__('7dd0')

      var ARRAY_ITERATOR = 'Array Iterator'
      var setInternalState = InternalStateModule.set
      var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR)

      // `Array.prototype.entries` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.entries
      // `Array.prototype.keys` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.keys
      // `Array.prototype.values` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.values
      // `Array.prototype[@@iterator]` method
      // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
      // `CreateArrayIterator` internal method
      // https://tc39.github.io/ecma262/#sec-createarrayiterator
      module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated), // target
          index: 0, // next index
          kind: kind // kind
        })
        // `%ArrayIteratorPrototype%.next` method
        // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
      }, function () {
        var state = getInternalState(this)
        var target = state.target
        var kind = state.kind
        var index = state.index++
        if (!target || index >= target.length) {
          state.target = undefined
          return { value: undefined, done: true }
        }
        if (kind == 'keys') return { value: index, done: false }
        if (kind == 'values') return { value: target[index], done: false }
        return { value: [index, target[index]], done: false }
      }, 'values')

      // argumentsList[@@iterator] is %ArrayProto_values%
      // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
      // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
      Iterators.Arguments = Iterators.Array

      // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
      addToUnscopables('keys')
      addToUnscopables('values')
      addToUnscopables('entries')
      /***/ },

    /***/ e439:
    /***/ function (module, exports, __webpack_require__) {
      var $ = __webpack_require__('23e7')
      var fails = __webpack_require__('d039')
      var toIndexedObject = __webpack_require__('fc6a')
      var nativeGetOwnPropertyDescriptor = __webpack_require__('06cf').f
      var DESCRIPTORS = __webpack_require__('83ab')

      var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1) })
      var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES

      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
      $({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor (it, key) {
          return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key)
        }
      })
      /***/ },

    /***/ e538:
    /***/ function (module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__('b622')

      exports.f = wellKnownSymbol
      /***/ },

    /***/ e893:
    /***/ function (module, exports, __webpack_require__) {
      var has = __webpack_require__('5135')
      var ownKeys = __webpack_require__('56ef')
      var getOwnPropertyDescriptorModule = __webpack_require__('06cf')
      var definePropertyModule = __webpack_require__('9bf2')

      module.exports = function (target, source) {
        var keys = ownKeys(source)
        var defineProperty = definePropertyModule.f
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i]
          if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key))
        }
      }
      /***/ },

    /***/ e8b5:
    /***/ function (module, exports, __webpack_require__) {
      var classof = __webpack_require__('c6b6')

      // `IsArray` abstract operation
      // https://tc39.github.io/ecma262/#sec-isarray
      module.exports = Array.isArray || function isArray (arg) {
        return classof(arg) == 'Array'
      }
      /***/ },

    /***/ e95a:
    /***/ function (module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__('b622')
      var Iterators = __webpack_require__('3f8c')

      var ITERATOR = wellKnownSymbol('iterator')
      var ArrayPrototype = Array.prototype

      // check on default Array iterator
      module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it)
      }
      /***/ },

    /***/ f5df:
    /***/ function (module, exports, __webpack_require__) {
      var TO_STRING_TAG_SUPPORT = __webpack_require__('00ee')
      var classofRaw = __webpack_require__('c6b6')
      var wellKnownSymbol = __webpack_require__('b622')

      var TO_STRING_TAG = wellKnownSymbol('toStringTag')
      // ES3 wrong here
      var CORRECT_ARGUMENTS = classofRaw(function () { return arguments }()) == 'Arguments'

      // fallback for IE11 Script Access Denied error
      var tryGet = function (it, key) {
        try {
          return it[key]
        } catch (error) { /* empty */ }
      }

      // getting tag from ES6+ `Object.prototype.toString`
      module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
        var O, tag, result
        return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
          : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) === 'string' ? tag
          // builtinTag case
            : CORRECT_ARGUMENTS ? classofRaw(O)
            // ES3 arguments fallback
              : (result = classofRaw(O)) == 'Object' && typeof O.callee === 'function' ? 'Arguments' : result
      }
      /***/ },

    /***/ f6fd:
    /***/ function (module, exports) {
      // document.currentScript polyfill by Adam Miller

      // MIT license

      (function (document) {
        var currentScript = 'currentScript'
        var scripts = document.getElementsByTagName('script') // Live NodeList collection

        // If browser needs currentScript polyfill, add get currentScript() to the document object
        if (!(currentScript in document)) {
          Object.defineProperty(document, currentScript, {
            get: function () {
              // IE 6-10 supports script readyState
              // IE 10+ support stack trace
              try { throw new Error() } catch (err) {
                // Find the second match for the "at" string to get file src url from stack.
                // Specifically works with the format of stack traces in IE.
                var i; var res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1]

                // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
                for (i in scripts) {
                  if (scripts[i].src == res || scripts[i].readyState == 'interactive') {
                    return scripts[i]
                  }
                }

                // If no match, return null
                return null
              }
            }
          })
        }
      })(document)
      /***/ },

    /***/ f772:
    /***/ function (module, exports, __webpack_require__) {
      var shared = __webpack_require__('5692')
      var uid = __webpack_require__('90e3')

      var keys = shared('keys')

      module.exports = function (key) {
        return keys[key] || (keys[key] = uid(key))
      }
      /***/ },

    /***/ fb15:
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
      // This file is imported into lib/wc client bundles.

      if (typeof window !== 'undefined') {
        if (true) {
          __webpack_require__('f6fd')
        }

        var setPublicPath_i
        if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
        }
      }

      // Indicate to webpack that this file can be concatenated
      /* harmony default export */ var setPublicPath = (null)

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
      var es_function_name = __webpack_require__('b0c0')

      // CONCATENATED MODULE: ./node_modules/ssr-window/dist/ssr-window.esm.js
      /**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */
      var doc = (typeof document === 'undefined') ? {
        body: {},
        addEventListener: function addEventListener () {},
        removeEventListener: function removeEventListener () {},
        activeElement: {
          blur: function blur () {},
          nodeName: ''
        },
        querySelector: function querySelector () {
          return null
        },
        querySelectorAll: function querySelectorAll () {
          return []
        },
        getElementById: function getElementById () {
          return null
        },
        createEvent: function createEvent () {
          return {
            initEvent: function initEvent () {}
          }
        },
        createElement: function createElement () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function setAttribute () {},
            getElementsByTagName: function getElementsByTagName () {
              return []
            }
          }
        },
        location: { hash: '' }
} : document; // eslint-disable-line

      var win = (typeof window === 'undefined') ? {
        document: doc,
        navigator: {
          userAgent: ''
        },
        location: {},
        history: {},
        CustomEvent: function CustomEvent () {
          return this
        },
        addEventListener: function addEventListener () {},
        removeEventListener: function removeEventListener () {},
        getComputedStyle: function getComputedStyle () {
          return {
            getPropertyValue: function getPropertyValue () {
              return ''
            }
          }
        },
        Image: function Image () {},
        Date: function Date () {},
        screen: {},
        setTimeout: function setTimeout () {},
        clearTimeout: function clearTimeout () {}
} : window; // eslint-disable-line

      // CONCATENATED MODULE: ./node_modules/dom7/dist/dom7.modular.js
      /**
 * Dom7 2.1.3
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2019, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 11, 2019
 */

      class Dom7 {
        constructor (arr) {
          const self = this
          // Create array-like object
          for (let i = 0; i < arr.length; i += 1) {
            self[i] = arr[i]
          }
          self.length = arr.length
          // Return collection with methods
          return this
        }
      }

      function $ (selector, context) {
        const arr = []
        let i = 0
        if (selector && !context) {
          if (selector instanceof Dom7) {
            return selector
          }
        }
        if (selector) {
          // String
          if (typeof selector === 'string') {
            let els
            let tempParent
            const html = selector.trim()
            if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
              let toCreate = 'div'
              if (html.indexOf('<li') === 0) toCreate = 'ul'
              if (html.indexOf('<tr') === 0) toCreate = 'tbody'
              if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr'
              if (html.indexOf('<tbody') === 0) toCreate = 'table'
              if (html.indexOf('<option') === 0) toCreate = 'select'
              tempParent = doc.createElement(toCreate)
              tempParent.innerHTML = html
              for (i = 0; i < tempParent.childNodes.length; i += 1) {
                arr.push(tempParent.childNodes[i])
              }
            } else {
              if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                // Pure ID selector
                els = [doc.getElementById(selector.trim().split('#')[1])]
              } else {
                // Other selectors
                els = (context || doc).querySelectorAll(selector.trim())
              }
              for (i = 0; i < els.length; i += 1) {
                if (els[i]) arr.push(els[i])
              }
            }
          } else if (selector.nodeType || selector === win || selector === doc) {
            // Node/element
            arr.push(selector)
          } else if (selector.length > 0 && selector[0].nodeType) {
            // Array of elements or instance of Dom
            for (i = 0; i < selector.length; i += 1) {
              arr.push(selector[i])
            }
          }
        }
        return new Dom7(arr)
      }

      $.fn = Dom7.prototype
      $.Class = Dom7
      $.Dom7 = Dom7

      function unique (arr) {
        const uniqueArray = []
        for (let i = 0; i < arr.length; i += 1) {
          if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i])
        }
        return uniqueArray
      }
      function toCamelCase (string) {
        return string.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase())
      }

      function requestAnimationFrame (callback) {
        if (win.requestAnimationFrame) return win.requestAnimationFrame(callback)
        else if (win.webkitRequestAnimationFrame) return win.webkitRequestAnimationFrame(callback)
        return win.setTimeout(callback, 1000 / 60)
      }
      function cancelAnimationFrame (id) {
        if (win.cancelAnimationFrame) return win.cancelAnimationFrame(id)
        else if (win.webkitCancelAnimationFrame) return win.webkitCancelAnimationFrame(id)
        return win.clearTimeout(id)
      }

      // Classes and attributes
      function addClass (className) {
        if (typeof className === 'undefined') {
          return this
        }
        const classes = className.split(' ')
        for (let i = 0; i < classes.length; i += 1) {
          for (let j = 0; j < this.length; j += 1) {
            if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i])
          }
        }
        return this
      }
      function removeClass (className) {
        const classes = className.split(' ')
        for (let i = 0; i < classes.length; i += 1) {
          for (let j = 0; j < this.length; j += 1) {
            if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i])
          }
        }
        return this
      }
      function hasClass (className) {
        if (!this[0]) return false
        return this[0].classList.contains(className)
      }
      function toggleClass (className) {
        const classes = className.split(' ')
        for (let i = 0; i < classes.length; i += 1) {
          for (let j = 0; j < this.length; j += 1) {
            if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i])
          }
        }
        return this
      }
      function attr (attrs, value) {
        if (arguments.length === 1 && typeof attrs === 'string') {
          // Get attr
          if (this[0]) return this[0].getAttribute(attrs)
          return undefined
        }

        // Set attrs
        for (let i = 0; i < this.length; i += 1) {
          if (arguments.length === 2) {
            // String
            this[i].setAttribute(attrs, value)
          } else {
            // Object
            // eslint-disable-next-line
      for (const attrName in attrs) {
              this[i][attrName] = attrs[attrName]
              this[i].setAttribute(attrName, attrs[attrName])
            }
          }
        }
        return this
      }
      // eslint-disable-next-line
function removeAttr(attr) {
        for (let i = 0; i < this.length; i += 1) {
          this[i].removeAttribute(attr)
        }
        return this
      }
      // eslint-disable-next-line
function dom7_modular_prop(props, value) {
        if (arguments.length === 1 && typeof props === 'string') {
          // Get prop
          if (this[0]) return this[0][props]
        } else {
          // Set props
          for (let i = 0; i < this.length; i += 1) {
            if (arguments.length === 2) {
              // String
              this[i][props] = value
            } else {
              // Object
              // eslint-disable-next-line
        for (const propName in props) {
                this[i][propName] = props[propName]
              }
            }
          }
          return this
        }
      }
      function dom7_modular_data (key, value) {
        let el
        if (typeof value === 'undefined') {
          el = this[0]
          // Get value
          if (el) {
            if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
              return el.dom7ElementDataStorage[key]
            }

            const dataKey = el.getAttribute(`data-${key}`)
            if (dataKey) {
              return dataKey
            }
            return undefined
          }
          return undefined
        }

        // Set value
        for (let i = 0; i < this.length; i += 1) {
          el = this[i]
          if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {}
          el.dom7ElementDataStorage[key] = value
        }
        return this
      }
      function removeData (key) {
        for (let i = 0; i < this.length; i += 1) {
          const el = this[i]
          if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
            el.dom7ElementDataStorage[key] = null
            delete el.dom7ElementDataStorage[key]
          }
        }
      }
      function dataset () {
        const el = this[0]
        if (!el) return undefined
  const dataset = {}; // eslint-disable-line
        if (el.dataset) {
          // eslint-disable-next-line
    for (const dataKey in el.dataset) {
            dataset[dataKey] = el.dataset[dataKey]
          }
        } else {
          for (let i = 0; i < el.attributes.length; i += 1) {
            // eslint-disable-next-line
      const attr = el.attributes[i];
            if (attr.name.indexOf('data-') >= 0) {
              dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value
            }
          }
        }
        // eslint-disable-next-line
  for (const key in dataset) {
          if (dataset[key] === 'false') dataset[key] = false
          else if (dataset[key] === 'true') dataset[key] = true
          else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1
        }
        return dataset
      }
      function val (value) {
        const dom = this
        if (typeof value === 'undefined') {
          if (dom[0]) {
            if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
              const values = []
              for (let i = 0; i < dom[0].selectedOptions.length; i += 1) {
                values.push(dom[0].selectedOptions[i].value)
              }
              return values
            }
            return dom[0].value
          }
          return undefined
        }

        for (let i = 0; i < dom.length; i += 1) {
          const el = dom[i]
          if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
            for (let j = 0; j < el.options.length; j += 1) {
              el.options[j].selected = value.indexOf(el.options[j].value) >= 0
            }
          } else {
            el.value = value
          }
        }
        return dom
      }
      // Transforms
      // eslint-disable-next-line
function dom7_modular_transform(transform) {
        for (let i = 0; i < this.length; i += 1) {
          const elStyle = this[i].style
          elStyle.webkitTransform = transform
          elStyle.transform = transform
        }
        return this
      }
      function transition (duration) {
        if (typeof duration !== 'string') {
    duration = `${duration}ms`; // eslint-disable-line
        }
        for (let i = 0; i < this.length; i += 1) {
          const elStyle = this[i].style
          elStyle.webkitTransitionDuration = duration
          elStyle.transitionDuration = duration
        }
        return this
      }
      // Events
      function on (...args) {
        let [eventType, targetSelector, listener, capture] = args
        if (typeof args[1] === 'function') {
          [eventType, listener, capture] = args
          targetSelector = undefined
        }
        if (!capture) capture = false

        function handleLiveEvent (e) {
          const target = e.target
          if (!target) return
          const eventData = e.target.dom7EventData || []
          if (eventData.indexOf(e) < 0) {
            eventData.unshift(e)
          }
          if ($(target).is(targetSelector)) listener.apply(target, eventData)
          else {
      const parents = $(target).parents(); // eslint-disable-line
            for (let k = 0; k < parents.length; k += 1) {
              if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData)
            }
          }
        }
        function handleEvent (e) {
          const eventData = e && e.target ? e.target.dom7EventData || [] : []
          if (eventData.indexOf(e) < 0) {
            eventData.unshift(e)
          }
          listener.apply(this, eventData)
        }
        const events = eventType.split(' ')
        let j
        for (let i = 0; i < this.length; i += 1) {
          const el = this[i]
          if (!targetSelector) {
            for (j = 0; j < events.length; j += 1) {
              const event = events[j]
              if (!el.dom7Listeners) el.dom7Listeners = {}
              if (!el.dom7Listeners[event]) el.dom7Listeners[event] = []
              el.dom7Listeners[event].push({
                listener,
                proxyListener: handleEvent
              })
              el.addEventListener(event, handleEvent, capture)
            }
          } else {
            // Live events
            for (j = 0; j < events.length; j += 1) {
              const event = events[j]
              if (!el.dom7LiveListeners) el.dom7LiveListeners = {}
              if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = []
              el.dom7LiveListeners[event].push({
                listener,
                proxyListener: handleLiveEvent
              })
              el.addEventListener(event, handleLiveEvent, capture)
            }
          }
        }
        return this
      }
      function off (...args) {
        let [eventType, targetSelector, listener, capture] = args
        if (typeof args[1] === 'function') {
          [eventType, listener, capture] = args
          targetSelector = undefined
        }
        if (!capture) capture = false

        const events = eventType.split(' ')
        for (let i = 0; i < events.length; i += 1) {
          const event = events[i]
          for (let j = 0; j < this.length; j += 1) {
            const el = this[j]
            let handlers
            if (!targetSelector && el.dom7Listeners) {
              handlers = el.dom7Listeners[event]
            } else if (targetSelector && el.dom7LiveListeners) {
              handlers = el.dom7LiveListeners[event]
            }
            if (handlers && handlers.length) {
              for (let k = handlers.length - 1; k >= 0; k -= 1) {
                const handler = handlers[k]
                if (listener && handler.listener === listener) {
                  el.removeEventListener(event, handler.proxyListener, capture)
                  handlers.splice(k, 1)
                } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                  el.removeEventListener(event, handler.proxyListener, capture)
                  handlers.splice(k, 1)
                } else if (!listener) {
                  el.removeEventListener(event, handler.proxyListener, capture)
                  handlers.splice(k, 1)
                }
              }
            }
          }
        }
        return this
      }
      function once (...args) {
        const dom = this
        let [eventName, targetSelector, listener, capture] = args
        if (typeof args[1] === 'function') {
          [eventName, listener, capture] = args
          targetSelector = undefined
        }
        function onceHandler (...eventArgs) {
          listener.apply(this, eventArgs)
          dom.off(eventName, targetSelector, onceHandler, capture)
          if (onceHandler.dom7proxy) {
            delete onceHandler.dom7proxy
          }
        }
        onceHandler.dom7proxy = listener
        return dom.on(eventName, targetSelector, onceHandler, capture)
      }
      function trigger (...args) {
        const events = args[0].split(' ')
        const eventData = args[1]
        for (let i = 0; i < events.length; i += 1) {
          const event = events[i]
          for (let j = 0; j < this.length; j += 1) {
            const el = this[j]
            let evt
            try {
              evt = new win.CustomEvent(event, {
                detail: eventData,
                bubbles: true,
                cancelable: true
              })
            } catch (e) {
              evt = doc.createEvent('Event')
              evt.initEvent(event, true, true)
              evt.detail = eventData
            }
            // eslint-disable-next-line
      el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
            el.dispatchEvent(evt)
            el.dom7EventData = []
            delete el.dom7EventData
          }
        }
        return this
      }
      function transitionEnd (callback) {
        const events = ['webkitTransitionEnd', 'transitionend']
        const dom = this
        let i
        function fireCallBack (e) {
          /* jshint validthis:true */
          if (e.target !== this) return
          callback.call(this, e)
          for (i = 0; i < events.length; i += 1) {
            dom.off(events[i], fireCallBack)
          }
        }
        if (callback) {
          for (i = 0; i < events.length; i += 1) {
            dom.on(events[i], fireCallBack)
          }
        }
        return this
      }
      function animationEnd (callback) {
        const events = ['webkitAnimationEnd', 'animationend']
        const dom = this
        let i
        function fireCallBack (e) {
          if (e.target !== this) return
          callback.call(this, e)
          for (i = 0; i < events.length; i += 1) {
            dom.off(events[i], fireCallBack)
          }
        }
        if (callback) {
          for (i = 0; i < events.length; i += 1) {
            dom.on(events[i], fireCallBack)
          }
        }
        return this
      }
      // Sizing/Styles
      function width () {
        if (this[0] === win) {
          return win.innerWidth
        }

        if (this.length > 0) {
          return parseFloat(this.css('width'))
        }

        return null
      }
      function dom7_modular_outerWidth (includeMargins) {
        if (this.length > 0) {
          if (includeMargins) {
            // eslint-disable-next-line
      const styles = this.styles();
            return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'))
          }
          return this[0].offsetWidth
        }
        return null
      }
      function height () {
        if (this[0] === win) {
          return win.innerHeight
        }

        if (this.length > 0) {
          return parseFloat(this.css('height'))
        }

        return null
      }
      function dom7_modular_outerHeight (includeMargins) {
        if (this.length > 0) {
          if (includeMargins) {
            // eslint-disable-next-line
      const styles = this.styles();
            return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'))
          }
          return this[0].offsetHeight
        }
        return null
      }
      function dom7_modular_offset () {
        if (this.length > 0) {
          const el = this[0]
          const box = el.getBoundingClientRect()
          const body = doc.body
          const clientTop = el.clientTop || body.clientTop || 0
          const clientLeft = el.clientLeft || body.clientLeft || 0
          const scrollTop = el === win ? win.scrollY : el.scrollTop
          const scrollLeft = el === win ? win.scrollX : el.scrollLeft
          return {
            top: (box.top + scrollTop) - clientTop,
            left: (box.left + scrollLeft) - clientLeft
          }
        }

        return null
      }
      function hide () {
        for (let i = 0; i < this.length; i += 1) {
          this[i].style.display = 'none'
        }
        return this
      }
      function show () {
        for (let i = 0; i < this.length; i += 1) {
          const el = this[i]
          if (el.style.display === 'none') {
            el.style.display = ''
          }
          if (win.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
            // Still not visible
            el.style.display = 'block'
          }
        }
        return this
      }
      function styles () {
        if (this[0]) return win.getComputedStyle(this[0], null)
        return {}
      }
      function css (props, value) {
        let i
        if (arguments.length === 1) {
          if (typeof props === 'string') {
            if (this[0]) return win.getComputedStyle(this[0], null).getPropertyValue(props)
          } else {
            for (i = 0; i < this.length; i += 1) {
              // eslint-disable-next-line
        for (let prop in props) {
                this[i].style[prop] = props[prop]
              }
            }
            return this
          }
        }
        if (arguments.length === 2 && typeof props === 'string') {
          for (i = 0; i < this.length; i += 1) {
            this[i].style[props] = value
          }
          return this
        }
        return this
      }

      // Dom manipulation
      function toArray () {
        const arr = []
        for (let i = 0; i < this.length; i += 1) {
          arr.push(this[i])
        }
        return arr
      }
      // Iterate over the collection passing elements to `callback`
      function each (callback) {
        // Don't bother continuing without a callback
        if (!callback) return this
        // Iterate over the current collection
        for (let i = 0; i < this.length; i += 1) {
          // If the callback returns false
          if (callback.call(this[i], i, this[i]) === false) {
            // End the loop early
            return this
          }
        }
        // Return `this` to allow chained DOM operations
        return this
      }
      function forEach (callback) {
        // Don't bother continuing without a callback
        if (!callback) return this
        // Iterate over the current collection
        for (let i = 0; i < this.length; i += 1) {
          // If the callback returns false
          if (callback.call(this[i], this[i], i) === false) {
            // End the loop early
            return this
          }
        }
        // Return `this` to allow chained DOM operations
        return this
      }
      function filter (callback) {
        const matchedItems = []
        const dom = this
        for (let i = 0; i < dom.length; i += 1) {
          if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i])
        }
        return new Dom7(matchedItems)
      }
      function map (callback) {
        const modifiedItems = []
        const dom = this
        for (let i = 0; i < dom.length; i += 1) {
          modifiedItems.push(callback.call(dom[i], i, dom[i]))
        }
        return new Dom7(modifiedItems)
      }
      // eslint-disable-next-line
function dom7_modular_html(html) {
        if (typeof html === 'undefined') {
          return this[0] ? this[0].innerHTML : undefined
        }

        for (let i = 0; i < this.length; i += 1) {
          this[i].innerHTML = html
        }
        return this
      }
      // eslint-disable-next-line
function dom7_modular_text(text) {
        if (typeof text === 'undefined') {
          if (this[0]) {
            return this[0].textContent.trim()
          }
          return null
        }

        for (let i = 0; i < this.length; i += 1) {
          this[i].textContent = text
        }
        return this
      }
      function is (selector) {
        const el = this[0]
        let compareWith
        let i
        if (!el || typeof selector === 'undefined') return false
        if (typeof selector === 'string') {
          if (el.matches) return el.matches(selector)
          else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector)
          else if (el.msMatchesSelector) return el.msMatchesSelector(selector)

          compareWith = $(selector)
          for (i = 0; i < compareWith.length; i += 1) {
            if (compareWith[i] === el) return true
          }
          return false
        } else if (selector === doc) return el === doc
        else if (selector === win) return el === win

        if (selector.nodeType || selector instanceof Dom7) {
          compareWith = selector.nodeType ? [selector] : selector
          for (i = 0; i < compareWith.length; i += 1) {
            if (compareWith[i] === el) return true
          }
          return false
        }
        return false
      }
      function indexOf (el) {
        for (let i = 0; i < this.length; i += 1) {
          if (this[i] === el) return i
        }
        return -1
      }
      function dom7_modular_index () {
        let child = this[0]
        let i
        if (child) {
          i = 0
          // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
            if (child.nodeType === 1) i += 1
          }
          return i
        }
        return undefined
      }
      // eslint-disable-next-line
function eq(index) {
        if (typeof index === 'undefined') return this
        const length = this.length
        let returnIndex
        if (index > length - 1) {
          return new Dom7([])
        }
        if (index < 0) {
          returnIndex = length + index
          if (returnIndex < 0) return new Dom7([])
          return new Dom7([this[returnIndex]])
        }
        return new Dom7([this[index]])
      }
      function append (...args) {
        let newChild

        for (let k = 0; k < args.length; k += 1) {
          newChild = args[k]
          for (let i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
              const tempDiv = doc.createElement('div')
              tempDiv.innerHTML = newChild
              while (tempDiv.firstChild) {
                this[i].appendChild(tempDiv.firstChild)
              }
            } else if (newChild instanceof Dom7) {
              for (let j = 0; j < newChild.length; j += 1) {
                this[i].appendChild(newChild[j])
              }
            } else {
              this[i].appendChild(newChild)
            }
          }
        }

        return this
      }
      // eslint-disable-next-line
function appendTo(parent) {
        $(parent).append(this)
        return this
      }
      function prepend (newChild) {
        let i
        let j
        for (i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            const tempDiv = doc.createElement('div')
            tempDiv.innerHTML = newChild
            for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
              this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0])
            }
          } else if (newChild instanceof Dom7) {
            for (j = 0; j < newChild.length; j += 1) {
              this[i].insertBefore(newChild[j], this[i].childNodes[0])
            }
          } else {
            this[i].insertBefore(newChild, this[i].childNodes[0])
          }
        }
        return this
      }
      // eslint-disable-next-line
function prependTo(parent) {
        $(parent).prepend(this)
        return this
      }
      function insertBefore (selector) {
        const before = $(selector)
        for (let i = 0; i < this.length; i += 1) {
          if (before.length === 1) {
            before[0].parentNode.insertBefore(this[i], before[0])
          } else if (before.length > 1) {
            for (let j = 0; j < before.length; j += 1) {
              before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j])
            }
          }
        }
      }
      function insertAfter (selector) {
        const after = $(selector)
        for (let i = 0; i < this.length; i += 1) {
          if (after.length === 1) {
            after[0].parentNode.insertBefore(this[i], after[0].nextSibling)
          } else if (after.length > 1) {
            for (let j = 0; j < after.length; j += 1) {
              after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling)
            }
          }
        }
      }
      function next (selector) {
        if (this.length > 0) {
          if (selector) {
            if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
              return new Dom7([this[0].nextElementSibling])
            }
            return new Dom7([])
          }

          if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling])
          return new Dom7([])
        }
        return new Dom7([])
      }
      function nextAll (selector) {
        const nextEls = []
        let el = this[0]
        if (!el) return new Dom7([])
        while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
          if (selector) {
            if ($(next).is(selector)) nextEls.push(next)
          } else nextEls.push(next)
          el = next
        }
        return new Dom7(nextEls)
      }
      function prev (selector) {
        if (this.length > 0) {
          const el = this[0]
          if (selector) {
            if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
              return new Dom7([el.previousElementSibling])
            }
            return new Dom7([])
          }

          if (el.previousElementSibling) return new Dom7([el.previousElementSibling])
          return new Dom7([])
        }
        return new Dom7([])
      }
      function prevAll (selector) {
        const prevEls = []
        let el = this[0]
        if (!el) return new Dom7([])
        while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
          if (selector) {
            if ($(prev).is(selector)) prevEls.push(prev)
          } else prevEls.push(prev)
          el = prev
        }
        return new Dom7(prevEls)
      }
      function siblings (selector) {
        return this.nextAll(selector).add(this.prevAll(selector))
      }
      function dom7_modular_parent (selector) {
  const parents = []; // eslint-disable-line
        for (let i = 0; i < this.length; i += 1) {
          if (this[i].parentNode !== null) {
            if (selector) {
              if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode)
            } else {
              parents.push(this[i].parentNode)
            }
          }
        }
        return $(unique(parents))
      }
      function parents (selector) {
  const parents = []; // eslint-disable-line
        for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line
          while (parent) {
            if (selector) {
              if ($(parent).is(selector)) parents.push(parent)
            } else {
              parents.push(parent)
            }
            parent = parent.parentNode
          }
        }
        return $(unique(parents))
      }
      function closest (selector) {
  let closest = this; // eslint-disable-line
        if (typeof selector === 'undefined') {
          return new Dom7([])
        }
        if (!closest.is(selector)) {
          closest = closest.parents(selector).eq(0)
        }
        return closest
      }
      function find (selector) {
        const foundElements = []
        for (let i = 0; i < this.length; i += 1) {
          const found = this[i].querySelectorAll(selector)
          for (let j = 0; j < found.length; j += 1) {
            foundElements.push(found[j])
          }
        }
        return new Dom7(foundElements)
      }
      function dom7_modular_children (selector) {
  const children = []; // eslint-disable-line
        for (let i = 0; i < this.length; i += 1) {
          const childNodes = this[i].childNodes

          for (let j = 0; j < childNodes.length; j += 1) {
            if (!selector) {
              if (childNodes[j].nodeType === 1) children.push(childNodes[j])
            } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
              children.push(childNodes[j])
            }
          }
        }
        return new Dom7(unique(children))
      }
      function remove () {
        for (let i = 0; i < this.length; i += 1) {
          if (this[i].parentNode) this[i].parentNode.removeChild(this[i])
        }
        return this
      }
      function detach () {
        return this.remove()
      }
      function add (...args) {
        const dom = this
        let i
        let j
        for (i = 0; i < args.length; i += 1) {
          const toAdd = $(args[i])
          for (j = 0; j < toAdd.length; j += 1) {
            dom[dom.length] = toAdd[j]
            dom.length += 1
          }
        }
        return dom
      }
      function empty () {
        for (let i = 0; i < this.length; i += 1) {
          const el = this[i]
          if (el.nodeType === 1) {
            for (let j = 0; j < el.childNodes.length; j += 1) {
              if (el.childNodes[j].parentNode) {
                el.childNodes[j].parentNode.removeChild(el.childNodes[j])
              }
            }
            el.textContent = ''
          }
        }
        return this
      }

      function scrollTo (...args) {
        let [left, top, duration, easing, callback] = args
        if (args.length === 4 && typeof easing === 'function') {
          callback = easing;
          [left, top, duration, callback, easing] = args
        }
        if (typeof easing === 'undefined') easing = 'swing'

        return this.each(function animate () {
          const el = this
          let currentTop
          let currentLeft
          let maxTop
          let maxLeft
          let newTop
          let newLeft
    let scrollTop; // eslint-disable-line
    let scrollLeft; // eslint-disable-line
          let animateTop = top > 0 || top === 0
          let animateLeft = left > 0 || left === 0
          if (typeof easing === 'undefined') {
            easing = 'swing'
          }
          if (animateTop) {
            currentTop = el.scrollTop
            if (!duration) {
              el.scrollTop = top
            }
          }
          if (animateLeft) {
            currentLeft = el.scrollLeft
            if (!duration) {
              el.scrollLeft = left
            }
          }
          if (!duration) return
          if (animateTop) {
            maxTop = el.scrollHeight - el.offsetHeight
            newTop = Math.max(Math.min(top, maxTop), 0)
          }
          if (animateLeft) {
            maxLeft = el.scrollWidth - el.offsetWidth
            newLeft = Math.max(Math.min(left, maxLeft), 0)
          }
          let startTime = null
          if (animateTop && newTop === currentTop) animateTop = false
          if (animateLeft && newLeft === currentLeft) animateLeft = false
          function render (time = new Date().getTime()) {
            if (startTime === null) {
              startTime = time
            }
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0)
            const easeProgress = easing === 'linear' ? progress : (0.5 - (Math.cos(progress * Math.PI) / 2))
            let done
            if (animateTop) scrollTop = currentTop + (easeProgress * (newTop - currentTop))
            if (animateLeft) scrollLeft = currentLeft + (easeProgress * (newLeft - currentLeft))
            if (animateTop && newTop > currentTop && scrollTop >= newTop) {
              el.scrollTop = newTop
              done = true
            }
            if (animateTop && newTop < currentTop && scrollTop <= newTop) {
              el.scrollTop = newTop
              done = true
            }
            if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
              el.scrollLeft = newLeft
              done = true
            }
            if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
              el.scrollLeft = newLeft
              done = true
            }

            if (done) {
              if (callback) callback()
              return
            }
            if (animateTop) el.scrollTop = scrollTop
            if (animateLeft) el.scrollLeft = scrollLeft
            requestAnimationFrame(render)
          }
          requestAnimationFrame(render)
        })
      }
      // scrollTop(top, duration, easing, callback) {
      function dom7_modular_scrollTop (...args) {
        let [top, duration, easing, callback] = args
        if (args.length === 3 && typeof easing === 'function') {
          [top, duration, callback, easing] = args
        }
        const dom = this
        if (typeof top === 'undefined') {
          if (dom.length > 0) return dom[0].scrollTop
          return null
        }
        return dom.scrollTo(undefined, top, duration, easing, callback)
      }
      function dom7_modular_scrollLeft (...args) {
        let [left, duration, easing, callback] = args
        if (args.length === 3 && typeof easing === 'function') {
          [left, duration, callback, easing] = args
        }
        const dom = this
        if (typeof left === 'undefined') {
          if (dom.length > 0) return dom[0].scrollLeft
          return null
        }
        return dom.scrollTo(left, undefined, duration, easing, callback)
      }

      function animate (initialProps, initialParams) {
        const els = this
        const a = {
          props: Object.assign({}, initialProps),
          params: Object.assign({
            duration: 300,
            easing: 'swing' // or 'linear'
            /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
          }, initialParams),

          elements: els,
          animating: false,
          que: [],

          easingProgress (easing, progress) {
            if (easing === 'swing') {
              return 0.5 - (Math.cos(progress * Math.PI) / 2)
            }
            if (typeof easing === 'function') {
              return easing(progress)
            }
            return progress
          },
          stop () {
            if (a.frameId) {
              cancelAnimationFrame(a.frameId)
            }
            a.animating = false
            a.elements.each((index, el) => {
              const element = el
              delete element.dom7AnimateInstance
            })
            a.que = []
          },
          done (complete) {
            a.animating = false
            a.elements.each((index, el) => {
              const element = el
              delete element.dom7AnimateInstance
            })
            if (complete) complete(els)
            if (a.que.length > 0) {
              const que = a.que.shift()
              a.animate(que[0], que[1])
            }
          },
          animate (props, params) {
            if (a.animating) {
              a.que.push([props, params])
              return a
            }
            const elements = []

            // Define & Cache Initials & Units
            a.elements.each((index, el) => {
              let initialFullValue
              let initialValue
              let unit
              let finalValue
              let finalFullValue

              if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a

              elements[index] = {
                container: el
              }
              Object.keys(props).forEach((prop) => {
                initialFullValue = win.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.')
                initialValue = parseFloat(initialFullValue)
                unit = initialFullValue.replace(initialValue, '')
                finalValue = parseFloat(props[prop])
                finalFullValue = props[prop] + unit
                elements[index][prop] = {
                  initialFullValue,
                  initialValue,
                  unit,
                  finalValue,
                  finalFullValue,
                  currentValue: initialValue
                }
              })
            })

            let startTime = null
            let time
            let elementsDone = 0
            let propsDone = 0
            let done
            let began = false

            a.animating = true

            function render () {
              time = new Date().getTime()
              let progress
              let easeProgress
              // let el;
              if (!began) {
                began = true
                if (params.begin) params.begin(els)
              }
              if (startTime === null) {
                startTime = time
              }
              if (params.progress) {
                // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), ((startTime + params.duration) - time < 0 ? 0 : (startTime + params.duration) - time), startTime);
              }

              elements.forEach((element) => {
                const el = element
                if (done || el.done) return
                Object.keys(props).forEach((prop) => {
                  if (done || el.done) return
                  progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0)
                  easeProgress = a.easingProgress(params.easing, progress)
                  const { initialValue, finalValue, unit } = el[prop]
                  el[prop].currentValue = initialValue + (easeProgress * (finalValue - initialValue))
                  const currentValue = el[prop].currentValue

                  if (
                    (finalValue > initialValue && currentValue >= finalValue) ||
              (finalValue < initialValue && currentValue <= finalValue)) {
                    el.container.style[prop] = finalValue + unit
                    propsDone += 1
                    if (propsDone === Object.keys(props).length) {
                      el.done = true
                      elementsDone += 1
                    }
                    if (elementsDone === elements.length) {
                      done = true
                    }
                  }
                  if (done) {
                    a.done(params.complete)
                    return
                  }
                  el.container.style[prop] = currentValue + unit
                })
              })
              if (done) return
              // Then call
              a.frameId = requestAnimationFrame(render)
            }
            a.frameId = requestAnimationFrame(render)
            return a
          }
        }

        if (a.elements.length === 0) {
          return els
        }

        let animateInstance
        for (let i = 0; i < a.elements.length; i += 1) {
          if (a.elements[i].dom7AnimateInstance) {
            animateInstance = a.elements[i].dom7AnimateInstance
          } else a.elements[i].dom7AnimateInstance = a
        }
        if (!animateInstance) {
          animateInstance = a
        }

        if (initialProps === 'stop') {
          animateInstance.stop()
        } else {
          animateInstance.animate(a.props, a.params)
        }

        return els
      }

      function stop () {
        const els = this
        for (let i = 0; i < els.length; i += 1) {
          if (els[i].dom7AnimateInstance) {
            els[i].dom7AnimateInstance.stop()
          }
        }
      }

      const noTrigger = ('resize scroll').split(' ')
      function eventShortcut (name, ...args) {
        if (typeof args[0] === 'undefined') {
          for (let i = 0; i < this.length; i += 1) {
            if (noTrigger.indexOf(name) < 0) {
              if (name in this[i]) this[i][name]()
              else {
                $(this[i]).trigger(name)
              }
            }
          }
          return this
        }
        return this.on(name, ...args)
      }

      function click (...args) {
        return eventShortcut.bind(this)('click', ...args)
      }
      function dom7_modular_blur (...args) {
        return eventShortcut.bind(this)('blur', ...args)
      }
      function dom7_modular_focus (...args) {
        return eventShortcut.bind(this)('focus', ...args)
      }
      function focusin (...args) {
        return eventShortcut.bind(this)('focusin', ...args)
      }
      function focusout (...args) {
        return eventShortcut.bind(this)('focusout', ...args)
      }
      function keyup (...args) {
        return eventShortcut.bind(this)('keyup', ...args)
      }
      function keydown (...args) {
        return eventShortcut.bind(this)('keydown', ...args)
      }
      function keypress (...args) {
        return eventShortcut.bind(this)('keypress', ...args)
      }
      function dom7_modular_submit (...args) {
        return eventShortcut.bind(this)('submit', ...args)
      }
      function change (...args) {
        return eventShortcut.bind(this)('change', ...args)
      }
      function mousedown (...args) {
        return eventShortcut.bind(this)('mousedown', ...args)
      }
      function mousemove (...args) {
        return eventShortcut.bind(this)('mousemove', ...args)
      }
      function mouseup (...args) {
        return eventShortcut.bind(this)('mouseup', ...args)
      }
      function mouseenter (...args) {
        return eventShortcut.bind(this)('mouseenter', ...args)
      }
      function mouseleave (...args) {
        return eventShortcut.bind(this)('mouseleave', ...args)
      }
      function mouseout (...args) {
        return eventShortcut.bind(this)('mouseout', ...args)
      }
      function mouseover (...args) {
        return eventShortcut.bind(this)('mouseover', ...args)
      }
      function touchstart (...args) {
        return eventShortcut.bind(this)('touchstart', ...args)
      }
      function touchend (...args) {
        return eventShortcut.bind(this)('touchend', ...args)
      }
      function touchmove (...args) {
        return eventShortcut.bind(this)('touchmove', ...args)
      }
      function resize (...args) {
        return eventShortcut.bind(this)('resize', ...args)
      }
      function dom7_modular_scroll (...args) {
        return eventShortcut.bind(this)('scroll', ...args)
      }

      // CONCATENATED MODULE: ./node_modules/swiper/js/swiper.esm.bundle.js
      /**
 * Swiper 5.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 8, 2020
 */

      const Methods = {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        attr: attr,
        removeAttr: removeAttr,
        data: dom7_modular_data,
        transform: dom7_modular_transform,
        transition: transition,
        on: on,
        off: off,
        trigger: trigger,
        transitionEnd: transitionEnd,
        outerWidth: dom7_modular_outerWidth,
        outerHeight: dom7_modular_outerHeight,
        offset: dom7_modular_offset,
        css: css,
        each: each,
        html: dom7_modular_html,
        text: dom7_modular_text,
        is: is,
        index: dom7_modular_index,
        eq: eq,
        append: append,
        prepend: prepend,
        next: next,
        nextAll: nextAll,
        prev: prev,
        prevAll: prevAll,
        parent: dom7_modular_parent,
        parents: parents,
        closest: closest,
        find: find,
        children: dom7_modular_children,
        filter: filter,
        remove: remove,
        add: add,
        styles: styles
      }

      Object.keys(Methods).forEach((methodName) => {
        $.fn[methodName] = $.fn[methodName] || Methods[methodName]
      })

      const Utils = {
        deleteProps (obj) {
          const object = obj
          Object.keys(object).forEach((key) => {
            try {
              object[key] = null
            } catch (e) {
              // no getter for object
            }
            try {
              delete object[key]
            } catch (e) {
              // something got wrong
            }
          })
        },
        nextTick (callback, delay = 0) {
          return setTimeout(callback, delay)
        },
        now () {
          return Date.now()
        },
        getTranslate (el, axis = 'x') {
          let matrix
          let curTransform
          let transformMatrix

          const curStyle = win.getComputedStyle(el, null)

          if (win.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform
            if (curTransform.split(',').length > 6) {
              curTransform = curTransform.split(', ').map((a) => a.replace(',', '.')).join(', ')
            }
            // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case
            transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform)
          } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')
            matrix = transformMatrix.toString().split(',')
          }

          if (axis === 'x') {
            // Latest Chrome and webkits Fix
            if (win.WebKitCSSMatrix) curTransform = transformMatrix.m41
            // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[12])
            // Normal Browsers
            else curTransform = parseFloat(matrix[4])
          }
          if (axis === 'y') {
            // Latest Chrome and webkits Fix
            if (win.WebKitCSSMatrix) curTransform = transformMatrix.m42
            // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[13])
            // Normal Browsers
            else curTransform = parseFloat(matrix[5])
          }
          return curTransform || 0
        },
        parseUrlQuery (url) {
          const query = {}
          let urlToParse = url || win.location.href
          let i
          let params
          let param
          let length
          if (typeof urlToParse === 'string' && urlToParse.length) {
            urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : ''
            params = urlToParse.split('&').filter((paramsPart) => paramsPart !== '')
            length = params.length

            for (i = 0; i < length; i += 1) {
              param = params[i].replace(/#\S+/g, '').split('=')
              query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || ''
            }
          }
          return query
        },
        isObject (o) {
          return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object
        },
        extend (...args) {
          const to = Object(args[0])
          for (let i = 1; i < args.length; i += 1) {
            const nextSource = args[i]
            if (nextSource !== undefined && nextSource !== null) {
              const keysArray = Object.keys(Object(nextSource))
              for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                const nextKey = keysArray[nextIndex]
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey)
                if (desc !== undefined && desc.enumerable) {
                  if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                    Utils.extend(to[nextKey], nextSource[nextKey])
                  } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                    to[nextKey] = {}
                    Utils.extend(to[nextKey], nextSource[nextKey])
                  } else {
                    to[nextKey] = nextSource[nextKey]
                  }
                }
              }
            }
          }
          return to
        }
      }

      const swiper_esm_bundle_Support = (function Support () {
        return {
          touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch () {
            return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch))
          }()),

          pointerEvents: !!win.PointerEvent && ('maxTouchPoints' in win.navigator) && win.navigator.maxTouchPoints > 0,

          observer: (function checkObserver () {
            return ('MutationObserver' in win || 'WebkitMutationObserver' in win)
          }()),

          passiveListener: (function checkPassiveListener () {
            let supportsPassive = false
            try {
              const opts = Object.defineProperty({}, 'passive', {
                // eslint-disable-next-line
          get() {
                  supportsPassive = true
                }
              })
              win.addEventListener('testPassiveListener', null, opts)
            } catch (e) {
              // No support
            }
            return supportsPassive
          }()),

          gestures: (function checkGestures () {
            return 'ongesturestart' in win
          }())
        }
      }())

      class SwiperClass {
        constructor (params = {}) {
          const self = this
          self.params = params

          // Events
          self.eventsListeners = {}

          if (self.params && self.params.on) {
            Object.keys(self.params.on).forEach((eventName) => {
              self.on(eventName, self.params.on[eventName])
            })
          }
        }

        on (events, handler, priority) {
          const self = this
          if (typeof handler !== 'function') return self
          const method = priority ? 'unshift' : 'push'
          events.split(' ').forEach((event) => {
            if (!self.eventsListeners[event]) self.eventsListeners[event] = []
            self.eventsListeners[event][method](handler)
          })
          return self
        }

        once (events, handler, priority) {
          const self = this
          if (typeof handler !== 'function') return self
          function onceHandler (...args) {
            self.off(events, onceHandler)
            if (onceHandler.f7proxy) {
              delete onceHandler.f7proxy
            }
            handler.apply(self, args)
          }
          onceHandler.f7proxy = handler
          return self.on(events, onceHandler, priority)
        }

        off (events, handler) {
          const self = this
          if (!self.eventsListeners) return self
          events.split(' ').forEach((event) => {
            if (typeof handler === 'undefined') {
              self.eventsListeners[event] = []
            } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
              self.eventsListeners[event].forEach((eventHandler, index) => {
                if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
                  self.eventsListeners[event].splice(index, 1)
                }
              })
            }
          })
          return self
        }

        emit (...args) {
          const self = this
          if (!self.eventsListeners) return self
          let events
          let data
          let context
          if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0]
            data = args.slice(1, args.length)
            context = self
          } else {
            events = args[0].events
            data = args[0].data
            context = args[0].context || self
          }
          const eventsArray = Array.isArray(events) ? events : events.split(' ')
          eventsArray.forEach((event) => {
            if (self.eventsListeners && self.eventsListeners[event]) {
              const handlers = []
              self.eventsListeners[event].forEach((eventHandler) => {
                handlers.push(eventHandler)
              })
              handlers.forEach((eventHandler) => {
                eventHandler.apply(context, data)
              })
            }
          })
          return self
        }

        useModulesParams (instanceParams) {
          const instance = this
          if (!instance.modules) return
          Object.keys(instance.modules).forEach((moduleName) => {
            const module = instance.modules[moduleName]
            // Extend params
            if (module.params) {
              Utils.extend(instanceParams, module.params)
            }
          })
        }

        useModules (modulesParams = {}) {
          const instance = this
          if (!instance.modules) return
          Object.keys(instance.modules).forEach((moduleName) => {
            const module = instance.modules[moduleName]
            const moduleParams = modulesParams[moduleName] || {}
            // Extend instance methods and props
            if (module.instance) {
              Object.keys(module.instance).forEach((modulePropName) => {
                const moduleProp = module.instance[modulePropName]
                if (typeof moduleProp === 'function') {
                  instance[modulePropName] = moduleProp.bind(instance)
                } else {
                  instance[modulePropName] = moduleProp
                }
              })
            }
            // Add event listeners
            if (module.on && instance.on) {
              Object.keys(module.on).forEach((moduleEventName) => {
                instance.on(moduleEventName, module.on[moduleEventName])
              })
            }

            // Module create callback
            if (module.create) {
              module.create.bind(instance)(moduleParams)
            }
          })
        }

        static set components (components) {
          const Class = this
          if (!Class.use) return
          Class.use(components)
        }

        static installModule (module, ...params) {
          const Class = this
          if (!Class.prototype.modules) Class.prototype.modules = {}
          const name = module.name || (`${Object.keys(Class.prototype.modules).length}_${Utils.now()}`)
          Class.prototype.modules[name] = module
          // Prototype
          if (module.proto) {
            Object.keys(module.proto).forEach((key) => {
              Class.prototype[key] = module.proto[key]
            })
          }
          // Class
          if (module.static) {
            Object.keys(module.static).forEach((key) => {
              Class[key] = module.static[key]
            })
          }
          // Callback
          if (module.install) {
            module.install.apply(Class, params)
          }
          return Class
        }

        static use (module, ...params) {
          const Class = this
          if (Array.isArray(module)) {
            module.forEach((m) => Class.installModule(m))
            return Class
          }
          return Class.installModule(module, ...params)
        }
      }

      function updateSize () {
        const swiper = this
        let width
        let height
        const $el = swiper.$el
        if (typeof swiper.params.width !== 'undefined') {
          width = swiper.params.width
        } else {
          width = $el[0].clientWidth
        }
        if (typeof swiper.params.height !== 'undefined') {
          height = swiper.params.height
        } else {
          height = $el[0].clientHeight
        }
        if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
          return
        }

        // Subtract paddings
        width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10)
        height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10)

        Utils.extend(swiper, {
          width,
          height,
          size: swiper.isHorizontal() ? width : height
        })
      }

      function updateSlides () {
        const swiper = this
        const params = swiper.params

        const {
          $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL
        } = swiper
        const isVirtual = swiper.virtual && params.virtual.enabled
        const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length
        const slides = $wrapperEl.children(`.${swiper.params.slideClass}`)
        const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length
        let snapGrid = []
        const slidesGrid = []
        const slidesSizesGrid = []

        function slidesForMargin (slideIndex) {
          if (!params.cssMode) return true
          if (slideIndex === slides.length - 1) {
            return false
          }
          return true
        }

        let offsetBefore = params.slidesOffsetBefore
        if (typeof offsetBefore === 'function') {
          offsetBefore = params.slidesOffsetBefore.call(swiper)
        }

        let offsetAfter = params.slidesOffsetAfter
        if (typeof offsetAfter === 'function') {
          offsetAfter = params.slidesOffsetAfter.call(swiper)
        }

        const previousSnapGridLength = swiper.snapGrid.length
        const previousSlidesGridLength = swiper.snapGrid.length

        let spaceBetween = params.spaceBetween
        let slidePosition = -offsetBefore
        let prevSlideSize = 0
        let index = 0
        if (typeof swiperSize === 'undefined') {
          return
        }
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
          spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize
        }

        swiper.virtualSize = -spaceBetween

        // reset margins
        if (rtl) slides.css({ marginLeft: '', marginTop: '' })
        else slides.css({ marginRight: '', marginBottom: '' })

        let slidesNumberEvenToRows
        if (params.slidesPerColumn > 1) {
          if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
            slidesNumberEvenToRows = slidesLength
          } else {
            slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn
          }
          if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
            slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn)
          }
        }

        // Calc slides
        let slideSize
        const slidesPerColumn = params.slidesPerColumn
        const slidesPerRow = slidesNumberEvenToRows / slidesPerColumn
        const numFullColumns = Math.floor(slidesLength / params.slidesPerColumn)
        for (let i = 0; i < slidesLength; i += 1) {
          slideSize = 0
          const slide = slides.eq(i)
          if (params.slidesPerColumn > 1) {
            // Set slides order
            let newSlideOrderIndex
            let column
            let row
            if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
              const groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn))
              const slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex
              const columnsInGroup = groupIndex === 0
                ? params.slidesPerGroup
                : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup)
              row = Math.floor(slideIndexInGroup / columnsInGroup)
              column = (slideIndexInGroup - row * columnsInGroup) + groupIndex * params.slidesPerGroup

              newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn)
              slide
                .css({
                  '-webkit-box-ordinal-group': newSlideOrderIndex,
                  '-moz-box-ordinal-group': newSlideOrderIndex,
                  '-ms-flex-order': newSlideOrderIndex,
                  '-webkit-order': newSlideOrderIndex,
                  order: newSlideOrderIndex
                })
            } else if (params.slidesPerColumnFill === 'column') {
              column = Math.floor(i / slidesPerColumn)
              row = i - (column * slidesPerColumn)
              if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
                row += 1
                if (row >= slidesPerColumn) {
                  row = 0
                  column += 1
                }
              }
            } else {
              row = Math.floor(i / slidesPerRow)
              column = i - (row * slidesPerRow)
            }
            slide.css(
        `margin-${swiper.isHorizontal() ? 'top' : 'left'}`,
        (row !== 0 && params.spaceBetween) && (`${params.spaceBetween}px`)
            )
          }
    if (slide.css('display') === 'none') continue; // eslint-disable-line

          if (params.slidesPerView === 'auto') {
            const slideStyles = win.getComputedStyle(slide[0], null)
            const currentTransform = slide[0].style.transform
            const currentWebKitTransform = slide[0].style.webkitTransform
            if (currentTransform) {
              slide[0].style.transform = 'none'
            }
            if (currentWebKitTransform) {
              slide[0].style.webkitTransform = 'none'
            }
            if (params.roundLengths) {
              slideSize = swiper.isHorizontal()
                ? slide.outerWidth(true)
                : slide.outerHeight(true)
            } else {
              // eslint-disable-next-line
        if (swiper.isHorizontal()) {
                const width = parseFloat(slideStyles.getPropertyValue('width'))
                const paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'))
                const paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'))
                const marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'))
                const marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'))
                const boxSizing = slideStyles.getPropertyValue('box-sizing')
                if (boxSizing && boxSizing === 'border-box') {
                  slideSize = width + marginLeft + marginRight
                } else {
                  slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight
                }
              } else {
                const height = parseFloat(slideStyles.getPropertyValue('height'))
                const paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'))
                const paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'))
                const marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'))
                const marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'))
                const boxSizing = slideStyles.getPropertyValue('box-sizing')
                if (boxSizing && boxSizing === 'border-box') {
                  slideSize = height + marginTop + marginBottom
                } else {
                  slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom
                }
              }
            }
            if (currentTransform) {
              slide[0].style.transform = currentTransform
            }
            if (currentWebKitTransform) {
              slide[0].style.webkitTransform = currentWebKitTransform
            }
            if (params.roundLengths) slideSize = Math.floor(slideSize)
          } else {
            slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView
            if (params.roundLengths) slideSize = Math.floor(slideSize)

            if (slides[i]) {
              if (swiper.isHorizontal()) {
                slides[i].style.width = `${slideSize}px`
              } else {
                slides[i].style.height = `${slideSize}px`
              }
            }
          }
          if (slides[i]) {
            slides[i].swiperSlideSize = slideSize
          }
          slidesSizesGrid.push(slideSize)

          if (params.centeredSlides) {
            slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween
            if (i === 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween
            if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0
            if (params.roundLengths) slidePosition = Math.floor(slidePosition)
            if ((index) % params.slidesPerGroup === 0) snapGrid.push(slidePosition)
            slidesGrid.push(slidePosition)
          } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition)
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition)
            slidesGrid.push(slidePosition)
            slidePosition = slidePosition + slideSize + spaceBetween
          }

          swiper.virtualSize += slideSize + spaceBetween

          prevSlideSize = slideSize

          index += 1
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter
        let newSlidesGrid

        if (
          rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
          $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` })
        }
        if (params.setWrapperSize) {
          if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` })
          else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` })
        }

        if (params.slidesPerColumn > 1) {
          swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows
          swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween
          if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` })
          else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` })
          if (params.centeredSlides) {
            newSlidesGrid = []
            for (let i = 0; i < snapGrid.length; i += 1) {
              let slidesGridItem = snapGrid[i]
              if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem)
              if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem)
            }
            snapGrid = newSlidesGrid
          }
        }

        // Remove last grid elements depending on width
        if (!params.centeredSlides) {
          newSlidesGrid = []
          for (let i = 0; i < snapGrid.length; i += 1) {
            let slidesGridItem = snapGrid[i]
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem)
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
              newSlidesGrid.push(slidesGridItem)
            }
          }
          snapGrid = newSlidesGrid
          if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
            snapGrid.push(swiper.virtualSize - swiperSize)
          }
        }
        if (snapGrid.length === 0) snapGrid = [0]

        if (params.spaceBetween !== 0) {
          if (swiper.isHorizontal()) {
            if (rtl) slides.filter(slidesForMargin).css({ marginLeft: `${spaceBetween}px` })
            else slides.filter(slidesForMargin).css({ marginRight: `${spaceBetween}px` })
          } else slides.filter(slidesForMargin).css({ marginBottom: `${spaceBetween}px` })
        }

        if (params.centeredSlides && params.centeredSlidesBounds) {
          let allSlidesSize = 0
          slidesSizesGrid.forEach((slideSizeValue) => {
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0)
          })
          allSlidesSize -= params.spaceBetween
          const maxSnap = allSlidesSize - swiperSize
          snapGrid = snapGrid.map((snap) => {
            if (snap < 0) return -offsetBefore
            if (snap > maxSnap) return maxSnap + offsetAfter
            return snap
          })
        }

        if (params.centerInsufficientSlides) {
          let allSlidesSize = 0
          slidesSizesGrid.forEach((slideSizeValue) => {
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0)
          })
          allSlidesSize -= params.spaceBetween
          if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2
            snapGrid.forEach((snap, snapIndex) => {
              snapGrid[snapIndex] = snap - allSlidesOffset
            })
            slidesGrid.forEach((snap, snapIndex) => {
              slidesGrid[snapIndex] = snap + allSlidesOffset
            })
          }
        }

        Utils.extend(swiper, {
          slides,
          snapGrid,
          slidesGrid,
          slidesSizesGrid
        })

        if (slidesLength !== previousSlidesLength) {
          swiper.emit('slidesLengthChange')
        }
        if (snapGrid.length !== previousSnapGridLength) {
          if (swiper.params.watchOverflow) swiper.checkOverflow()
          swiper.emit('snapGridLengthChange')
        }
        if (slidesGrid.length !== previousSlidesGridLength) {
          swiper.emit('slidesGridLengthChange')
        }

        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
          swiper.updateSlidesOffset()
        }
      }

      function updateAutoHeight (speed) {
        const swiper = this
        const activeSlides = []
        let newHeight = 0
        let i
        if (typeof speed === 'number') {
          swiper.setTransition(speed)
        } else if (speed === true) {
          swiper.setTransition(swiper.params.speed)
        }
        // Find slides currently in view
        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            const index = swiper.activeIndex + i
            if (index > swiper.slides.length) break
            activeSlides.push(swiper.slides.eq(index)[0])
          }
        } else {
          activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0])
        }

        // Find new height from highest slide in view
        for (i = 0; i < activeSlides.length; i += 1) {
          if (typeof activeSlides[i] !== 'undefined') {
            const height = activeSlides[i].offsetHeight
            newHeight = height > newHeight ? height : newHeight
          }
        }

        // Update Height
        if (newHeight) swiper.$wrapperEl.css('height', `${newHeight}px`)
      }

      function updateSlidesOffset () {
        const swiper = this
        const slides = swiper.slides
        for (let i = 0; i < slides.length; i += 1) {
          slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop
        }
      }

      function updateSlidesProgress (translate = (this && this.translate) || 0) {
        const swiper = this
        const params = swiper.params

        const { slides, rtlTranslate: rtl } = swiper

        if (slides.length === 0) return
        if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset()

        let offsetCenter = -translate
        if (rtl) offsetCenter = translate

        // Visible Slides
        slides.removeClass(params.slideVisibleClass)

        swiper.visibleSlidesIndexes = []
        swiper.visibleSlides = []

        for (let i = 0; i < slides.length; i += 1) {
          const slide = slides[i]
          const slideProgress = (
            (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
          ) / (slide.swiperSlideSize + params.spaceBetween)
          if (params.watchSlidesVisibility) {
            const slideBefore = -(offsetCenter - slide.swiperSlideOffset)
            const slideAfter = slideBefore + swiper.slidesSizesGrid[i]
            const isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1) ||
                (slideAfter > 1 && slideAfter <= swiper.size) ||
                (slideBefore <= 0 && slideAfter >= swiper.size)
            if (isVisible) {
              swiper.visibleSlides.push(slide)
              swiper.visibleSlidesIndexes.push(i)
              slides.eq(i).addClass(params.slideVisibleClass)
            }
          }
          slide.progress = rtl ? -slideProgress : slideProgress
        }
        swiper.visibleSlides = $(swiper.visibleSlides)
      }

      function updateProgress (translate) {
        const swiper = this
        if (typeof translate === 'undefined') {
          const multiplier = swiper.rtlTranslate ? -1 : 1
          // eslint-disable-next-line
    translate = (swiper && swiper.translate && (swiper.translate * multiplier)) || 0;
        }
        const params = swiper.params
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate()
        let { progress, isBeginning, isEnd } = swiper
        const wasBeginning = isBeginning
        const wasEnd = isEnd
        if (translatesDiff === 0) {
          progress = 0
          isBeginning = true
          isEnd = true
        } else {
          progress = (translate - swiper.minTranslate()) / (translatesDiff)
          isBeginning = progress <= 0
          isEnd = progress >= 1
        }
        Utils.extend(swiper, {
          progress,
          isBeginning,
          isEnd
        })

        if (params.watchSlidesProgress || params.watchSlidesVisibility) swiper.updateSlidesProgress(translate)

        if (isBeginning && !wasBeginning) {
          swiper.emit('reachBeginning toEdge')
        }
        if (isEnd && !wasEnd) {
          swiper.emit('reachEnd toEdge')
        }
        if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
          swiper.emit('fromEdge')
        }

        swiper.emit('progress', progress)
      }

      function updateSlidesClasses () {
        const swiper = this

        const {
          slides, params, $wrapperEl, activeIndex, realIndex
        } = swiper
        const isVirtual = swiper.virtual && params.virtual.enabled

        slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`)

        let activeSlide
        if (isVirtual) {
          activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`)
        } else {
          activeSlide = slides.eq(activeIndex)
        }

        // Active classes
        activeSlide.addClass(params.slideActiveClass)

        if (params.loop) {
          // Duplicate to all looped slides
          if (activeSlide.hasClass(params.slideDuplicateClass)) {
            $wrapperEl
              .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`)
              .addClass(params.slideDuplicateActiveClass)
          } else {
            $wrapperEl
              .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`)
              .addClass(params.slideDuplicateActiveClass)
          }
        }
        // Next Slide
        let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass)
        if (params.loop && nextSlide.length === 0) {
          nextSlide = slides.eq(0)
          nextSlide.addClass(params.slideNextClass)
        }
        // Prev Slide
        let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass)
        if (params.loop && prevSlide.length === 0) {
          prevSlide = slides.eq(-1)
          prevSlide.addClass(params.slidePrevClass)
        }
        if (params.loop) {
          // Duplicate to all looped slides
          if (nextSlide.hasClass(params.slideDuplicateClass)) {
            $wrapperEl
              .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
              .addClass(params.slideDuplicateNextClass)
          } else {
            $wrapperEl
              .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
              .addClass(params.slideDuplicateNextClass)
          }
          if (prevSlide.hasClass(params.slideDuplicateClass)) {
            $wrapperEl
              .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
              .addClass(params.slideDuplicatePrevClass)
          } else {
            $wrapperEl
              .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
              .addClass(params.slideDuplicatePrevClass)
          }
        }
      }

      function updateActiveIndex (newActiveIndex) {
        const swiper = this
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate
        const {
          slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex
        } = swiper
        let activeIndex = newActiveIndex
        let snapIndex
        if (typeof activeIndex === 'undefined') {
          for (let i = 0; i < slidesGrid.length; i += 1) {
            if (typeof slidesGrid[i + 1] !== 'undefined') {
              if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
                activeIndex = i
              } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                activeIndex = i + 1
              }
            } else if (translate >= slidesGrid[i]) {
              activeIndex = i
            }
          }
          // Normalize slideIndex
          if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0
          }
        }
        if (snapGrid.indexOf(translate) >= 0) {
          snapIndex = snapGrid.indexOf(translate)
        } else {
          const skip = Math.min(params.slidesPerGroupSkip, activeIndex)
          snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup)
        }
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1
        if (activeIndex === previousIndex) {
          if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex
            swiper.emit('snapIndexChange')
          }
          return
        }

        // Get real index
        const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10)

        Utils.extend(swiper, {
          snapIndex,
          realIndex,
          previousIndex,
          activeIndex
        })
        swiper.emit('activeIndexChange')
        swiper.emit('snapIndexChange')
        if (previousRealIndex !== realIndex) {
          swiper.emit('realIndexChange')
        }
        if (swiper.initialized || swiper.runCallbacksOnInit) {
          swiper.emit('slideChange')
        }
      }

      function updateClickedSlide (e) {
        const swiper = this
        const params = swiper.params
        const slide = $(e.target).closest(`.${params.slideClass}`)[0]
        let slideFound = false
        if (slide) {
          for (let i = 0; i < swiper.slides.length; i += 1) {
            if (swiper.slides[i] === slide) slideFound = true
          }
        }

        if (slide && slideFound) {
          swiper.clickedSlide = slide
          if (swiper.virtual && swiper.params.virtual.enabled) {
            swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10)
          } else {
            swiper.clickedIndex = $(slide).index()
          }
        } else {
          swiper.clickedSlide = undefined
          swiper.clickedIndex = undefined
          return
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
          swiper.slideToClickedSlide()
        }
      }

      var update = {
        updateSize,
        updateSlides,
        updateAutoHeight,
        updateSlidesOffset,
        updateSlidesProgress,
        updateProgress,
        updateSlidesClasses,
        updateActiveIndex,
        updateClickedSlide
      }

      function getTranslate (axis = this.isHorizontal() ? 'x' : 'y') {
        const swiper = this

        const {
          params, rtlTranslate: rtl, translate, $wrapperEl
        } = swiper

        if (params.virtualTranslate) {
          return rtl ? -translate : translate
        }
        if (params.cssMode) {
          return translate
        }

        let currentTranslate = Utils.getTranslate($wrapperEl[0], axis)
        if (rtl) currentTranslate = -currentTranslate

        return currentTranslate || 0
      }

      function setTranslate (translate, byController) {
        const swiper = this
        const {
          rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress
        } = swiper
        let x = 0
        let y = 0
        const z = 0

        if (swiper.isHorizontal()) {
          x = rtl ? -translate : translate
        } else {
          y = translate
        }

        if (params.roundLengths) {
          x = Math.floor(x)
          y = Math.floor(y)
        }

        if (params.cssMode) {
          wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y
        } else if (!params.virtualTranslate) {
          $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`)
        }
        swiper.previousTranslate = swiper.translate
        swiper.translate = swiper.isHorizontal() ? x : y

        // Check if we need to update progress
        let newProgress
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate()
        if (translatesDiff === 0) {
          newProgress = 0
        } else {
          newProgress = (translate - swiper.minTranslate()) / (translatesDiff)
        }
        if (newProgress !== progress) {
          swiper.updateProgress(translate)
        }

        swiper.emit('setTranslate', swiper.translate, byController)
      }

      function minTranslate () {
        return (-this.snapGrid[0])
      }

      function maxTranslate () {
        return (-this.snapGrid[this.snapGrid.length - 1])
      }

      function translateTo (translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
        const swiper = this

        const {
          params,
          wrapperEl
        } = swiper

        if (swiper.animating && params.preventInteractionOnTransition) {
          return false
        }

        const minTranslate = swiper.minTranslate()
        const maxTranslate = swiper.maxTranslate()
        let newTranslate
        if (translateBounds && translate > minTranslate) newTranslate = minTranslate
        else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate
        else newTranslate = translate

        // Update progress
        swiper.updateProgress(newTranslate)

        if (params.cssMode) {
          const isH = swiper.isHorizontal()
          if (speed === 0) {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate
          } else {
            // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
              wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: -newTranslate,
                behavior: 'smooth'
              })
            } else {
              wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate
            }
          }
          return true
        }

        if (speed === 0) {
          swiper.setTransition(0)
          swiper.setTranslate(newTranslate)
          if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal)
            swiper.emit('transitionEnd')
          }
        } else {
          swiper.setTransition(speed)
          swiper.setTranslate(newTranslate)
          if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal)
            swiper.emit('transitionStart')
          }
          if (!swiper.animating) {
            swiper.animating = true
            if (!swiper.onTranslateToWrapperTransitionEnd) {
              swiper.onTranslateToWrapperTransitionEnd = function transitionEnd (e) {
                if (!swiper || swiper.destroyed) return
                if (e.target !== this) return
                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd)
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd)
                swiper.onTranslateToWrapperTransitionEnd = null
                delete swiper.onTranslateToWrapperTransitionEnd
                if (runCallbacks) {
                  swiper.emit('transitionEnd')
                }
              }
            }
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd)
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd)
          }
        }

        return true
      }

      var swiper_esm_bundle_translate = {
        getTranslate,
        setTranslate,
        minTranslate,
        maxTranslate,
        translateTo
      }

      function setTransition (duration, byController) {
        const swiper = this

        if (!swiper.params.cssMode) {
          swiper.$wrapperEl.transition(duration)
        }

        swiper.emit('setTransition', duration, byController)
      }

      function transitionStart (runCallbacks = true, direction) {
        const swiper = this
        const { activeIndex, params, previousIndex } = swiper
        if (params.cssMode) return
        if (params.autoHeight) {
          swiper.updateAutoHeight()
        }

        let dir = direction
        if (!dir) {
          if (activeIndex > previousIndex) dir = 'next'
          else if (activeIndex < previousIndex) dir = 'prev'
          else dir = 'reset'
        }

        swiper.emit('transitionStart')

        if (runCallbacks && activeIndex !== previousIndex) {
          if (dir === 'reset') {
            swiper.emit('slideResetTransitionStart')
            return
          }
          swiper.emit('slideChangeTransitionStart')
          if (dir === 'next') {
            swiper.emit('slideNextTransitionStart')
          } else {
            swiper.emit('slidePrevTransitionStart')
          }
        }
      }

      function swiper_esm_bundle_transitionEnd (runCallbacks = true, direction) {
        const swiper = this
        const { activeIndex, previousIndex, params } = swiper
        swiper.animating = false
        if (params.cssMode) return
        swiper.setTransition(0)

        let dir = direction
        if (!dir) {
          if (activeIndex > previousIndex) dir = 'next'
          else if (activeIndex < previousIndex) dir = 'prev'
          else dir = 'reset'
        }

        swiper.emit('transitionEnd')

        if (runCallbacks && activeIndex !== previousIndex) {
          if (dir === 'reset') {
            swiper.emit('slideResetTransitionEnd')
            return
          }
          swiper.emit('slideChangeTransitionEnd')
          if (dir === 'next') {
            swiper.emit('slideNextTransitionEnd')
          } else {
            swiper.emit('slidePrevTransitionEnd')
          }
        }
      }

      var swiper_esm_bundle_transition = {
        setTransition,
        transitionStart,
        transitionEnd: swiper_esm_bundle_transitionEnd
      }

      function slideTo (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
        const swiper = this
        let slideIndex = index
        if (slideIndex < 0) slideIndex = 0

        const {
          params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl
        } = swiper
        if (swiper.animating && params.preventInteractionOnTransition) {
          return false
        }

        const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex)
        let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup)
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1

        if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
          swiper.emit('beforeSlideChangeStart')
        }

        const translate = -snapGrid[snapIndex]

        // Update progress
        swiper.updateProgress(translate)

        // Normalize slideIndex
        if (params.normalizeSlideIndex) {
          for (let i = 0; i < slidesGrid.length; i += 1) {
            if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
              slideIndex = i
            }
          }
        }
        // Directions locks
        if (swiper.initialized && slideIndex !== activeIndex) {
          if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
            return false
          }
          if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false
          }
        }

        let direction
        if (slideIndex > activeIndex) direction = 'next'
        else if (slideIndex < activeIndex) direction = 'prev'
        else direction = 'reset'

        // Update Index
        if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
          swiper.updateActiveIndex(slideIndex)
          // Update Height
          if (params.autoHeight) {
            swiper.updateAutoHeight()
          }
          swiper.updateSlidesClasses()
          if (params.effect !== 'slide') {
            swiper.setTranslate(translate)
          }
          if (direction !== 'reset') {
            swiper.transitionStart(runCallbacks, direction)
            swiper.transitionEnd(runCallbacks, direction)
          }
          return false
        }
        if (params.cssMode) {
          const isH = swiper.isHorizontal()
          if (speed === 0) {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -translate
          } else {
            // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
              wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: -translate,
                behavior: 'smooth'
              })
            } else {
              wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -translate
            }
          }
          return true
        }

        if (speed === 0) {
          swiper.setTransition(0)
          swiper.setTranslate(translate)
          swiper.updateActiveIndex(slideIndex)
          swiper.updateSlidesClasses()
          swiper.emit('beforeTransitionStart', speed, internal)
          swiper.transitionStart(runCallbacks, direction)
          swiper.transitionEnd(runCallbacks, direction)
        } else {
          swiper.setTransition(speed)
          swiper.setTranslate(translate)
          swiper.updateActiveIndex(slideIndex)
          swiper.updateSlidesClasses()
          swiper.emit('beforeTransitionStart', speed, internal)
          swiper.transitionStart(runCallbacks, direction)
          if (!swiper.animating) {
            swiper.animating = true
            if (!swiper.onSlideToWrapperTransitionEnd) {
              swiper.onSlideToWrapperTransitionEnd = function transitionEnd (e) {
                if (!swiper || swiper.destroyed) return
                if (e.target !== this) return
                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd)
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd)
                swiper.onSlideToWrapperTransitionEnd = null
                delete swiper.onSlideToWrapperTransitionEnd
                swiper.transitionEnd(runCallbacks, direction)
              }
            }
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd)
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd)
          }
        }

        return true
      }

      function slideToLoop (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
        const swiper = this
        let newIndex = index
        if (swiper.params.loop) {
          newIndex += swiper.loopedSlides
        }

        return swiper.slideTo(newIndex, speed, runCallbacks, internal)
      }

      /* eslint no-unused-vars: "off" */
      function slideNext (speed = this.params.speed, runCallbacks = true, internal) {
        const swiper = this
        const { params, animating } = swiper
        const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup
        if (params.loop) {
          if (animating) return false
          swiper.loopFix()
          // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }
        return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal)
      }

      /* eslint no-unused-vars: "off" */
      function slidePrev (speed = this.params.speed, runCallbacks = true, internal) {
        const swiper = this
        const {
          params, animating, snapGrid, slidesGrid, rtlTranslate
        } = swiper

        if (params.loop) {
          if (animating) return false
          swiper.loopFix()
          // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }
        const translate = rtlTranslate ? swiper.translate : -swiper.translate
        function normalize (val) {
          if (val < 0) return -Math.floor(Math.abs(val))
          return Math.floor(val)
        }
        const normalizedTranslate = normalize(translate)
        const normalizedSnapGrid = snapGrid.map((val) => normalize(val))
        const normalizedSlidesGrid = slidesGrid.map((val) => normalize(val))

        const currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)]
        let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1]
        if (typeof prevSnap === 'undefined' && params.cssMode) {
          snapGrid.forEach((snap) => {
            if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap
          })
        }
        let prevIndex
        if (typeof prevSnap !== 'undefined') {
          prevIndex = slidesGrid.indexOf(prevSnap)
          if (prevIndex < 0) prevIndex = swiper.activeIndex - 1
        }
        return swiper.slideTo(prevIndex, speed, runCallbacks, internal)
      }

      /* eslint no-unused-vars: "off" */
      function slideReset (speed = this.params.speed, runCallbacks = true, internal) {
        const swiper = this
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal)
      }

      /* eslint no-unused-vars: "off" */
      function slideToClosest (speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
        const swiper = this
        let index = swiper.activeIndex
        const skip = Math.min(swiper.params.slidesPerGroupSkip, index)
        const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup)

        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate

        if (translate >= swiper.snapGrid[snapIndex]) {
          // The current translate is on or after the current snap index, so the choice
          // is between the current index and the one after it.
          const currentSnap = swiper.snapGrid[snapIndex]
          const nextSnap = swiper.snapGrid[snapIndex + 1]
          if ((translate - currentSnap) > (nextSnap - currentSnap) * threshold) {
            index += swiper.params.slidesPerGroup
          }
        } else {
          // The current translate is before the current snap index, so the choice
          // is between the current index and the one before it.
          const prevSnap = swiper.snapGrid[snapIndex - 1]
          const currentSnap = swiper.snapGrid[snapIndex]
          if ((translate - prevSnap) <= (currentSnap - prevSnap) * threshold) {
            index -= swiper.params.slidesPerGroup
          }
        }
        index = Math.max(index, 0)
        index = Math.min(index, swiper.slidesGrid.length - 1)

        return swiper.slideTo(index, speed, runCallbacks, internal)
      }

      function slideToClickedSlide () {
        const swiper = this
        const { params, $wrapperEl } = swiper

        const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView
        let slideToIndex = swiper.clickedIndex
        let realIndex
        if (params.loop) {
          if (swiper.animating) return
          realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10)
          if (params.centeredSlides) {
            if (
              (slideToIndex < swiper.loopedSlides - (slidesPerView / 2)) ||
        (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
            ) {
              swiper.loopFix()
              slideToIndex = $wrapperEl
                .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
                .eq(0)
                .index()

              Utils.nextTick(() => {
                swiper.slideTo(slideToIndex)
              })
            } else {
              swiper.slideTo(slideToIndex)
            }
          } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix()
            slideToIndex = $wrapperEl
              .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
              .eq(0)
              .index()

            Utils.nextTick(() => {
              swiper.slideTo(slideToIndex)
            })
          } else {
            swiper.slideTo(slideToIndex)
          }
        } else {
          swiper.slideTo(slideToIndex)
        }
      }

      var swiper_esm_bundle_slide = {
        slideTo,
        slideToLoop,
        slideNext,
        slidePrev,
        slideReset,
        slideToClosest,
        slideToClickedSlide
      }

      function loopCreate () {
        const swiper = this
        const { params, $wrapperEl } = swiper
        // Remove duplicated slides
        $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove()

        let slides = $wrapperEl.children(`.${params.slideClass}`)

        if (params.loopFillGroupWithBlank) {
          const blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup)
          if (blankSlidesNum !== params.slidesPerGroup) {
            for (let i = 0; i < blankSlidesNum; i += 1) {
              const blankNode = $(doc.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`)
              $wrapperEl.append(blankNode)
            }
            slides = $wrapperEl.children(`.${params.slideClass}`)
          }
        }

        if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length

        swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10))
        swiper.loopedSlides += params.loopAdditionalSlides
        if (swiper.loopedSlides > slides.length) {
          swiper.loopedSlides = slides.length
        }

        const prependSlides = []
        const appendSlides = []
        slides.each((index, el) => {
          const slide = $(el)
          if (index < swiper.loopedSlides) appendSlides.push(el)
          if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el)
          slide.attr('data-swiper-slide-index', index)
        })
        for (let i = 0; i < appendSlides.length; i += 1) {
          $wrapperEl.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass))
        }
        for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
          $wrapperEl.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass))
        }
      }

      function loopFix () {
        const swiper = this

        swiper.emit('beforeLoopFix')

        const {
          activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl
        } = swiper
        let newIndex
        swiper.allowSlidePrev = true
        swiper.allowSlideNext = true

        const snapTranslate = -snapGrid[activeIndex]
        const diff = snapTranslate - swiper.getTranslate()

        // Fix For Negative Oversliding
        if (activeIndex < loopedSlides) {
          newIndex = (slides.length - (loopedSlides * 3)) + activeIndex
          newIndex += loopedSlides
          const slideChanged = swiper.slideTo(newIndex, 0, false, true)
          if (slideChanged && diff !== 0) {
            swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff)
          }
        } else if (activeIndex >= slides.length - loopedSlides) {
          // Fix For Positive Oversliding
          newIndex = -slides.length + activeIndex + loopedSlides
          newIndex += loopedSlides
          const slideChanged = swiper.slideTo(newIndex, 0, false, true)
          if (slideChanged && diff !== 0) {
            swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff)
          }
        }
        swiper.allowSlidePrev = allowSlidePrev
        swiper.allowSlideNext = allowSlideNext

        swiper.emit('loopFix')
      }

      function loopDestroy () {
        const swiper = this
        const { $wrapperEl, params, slides } = swiper
        $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove()
        slides.removeAttr('data-swiper-slide-index')
      }

      var loop = {
        loopCreate,
        loopFix,
        loopDestroy
      }

      function setGrabCursor (moving) {
        const swiper = this
        if (swiper_esm_bundle_Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) return
        const el = swiper.el
        el.style.cursor = 'move'
        el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab'
        el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab'
        el.style.cursor = moving ? 'grabbing' : 'grab'
      }

      function unsetGrabCursor () {
        const swiper = this
        if (swiper_esm_bundle_Support.touch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) return
        swiper.el.style.cursor = ''
      }

      var grabCursor = {
        setGrabCursor,
        unsetGrabCursor
      }

      function appendSlide (slides) {
        const swiper = this
        const { $wrapperEl, params } = swiper
        if (params.loop) {
          swiper.loopDestroy()
        }
        if (typeof slides === 'object' && 'length' in slides) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) $wrapperEl.append(slides[i])
          }
        } else {
          $wrapperEl.append(slides)
        }
        if (params.loop) {
          swiper.loopCreate()
        }
        if (!(params.observer && swiper_esm_bundle_Support.observer)) {
          swiper.update()
        }
      }

      function prependSlide (slides) {
        const swiper = this
        const { params, $wrapperEl, activeIndex } = swiper

        if (params.loop) {
          swiper.loopDestroy()
        }
        let newActiveIndex = activeIndex + 1
        if (typeof slides === 'object' && 'length' in slides) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) $wrapperEl.prepend(slides[i])
          }
          newActiveIndex = activeIndex + slides.length
        } else {
          $wrapperEl.prepend(slides)
        }
        if (params.loop) {
          swiper.loopCreate()
        }
        if (!(params.observer && swiper_esm_bundle_Support.observer)) {
          swiper.update()
        }
        swiper.slideTo(newActiveIndex, 0, false)
      }

      function addSlide (index, slides) {
        const swiper = this
        const { $wrapperEl, params, activeIndex } = swiper
        let activeIndexBuffer = activeIndex
        if (params.loop) {
          activeIndexBuffer -= swiper.loopedSlides
          swiper.loopDestroy()
          swiper.slides = $wrapperEl.children(`.${params.slideClass}`)
        }
        const baseLength = swiper.slides.length
        if (index <= 0) {
          swiper.prependSlide(slides)
          return
        }
        if (index >= baseLength) {
          swiper.appendSlide(slides)
          return
        }
        let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer

        const slidesBuffer = []
        for (let i = baseLength - 1; i >= index; i -= 1) {
          const currentSlide = swiper.slides.eq(i)
          currentSlide.remove()
          slidesBuffer.unshift(currentSlide)
        }

        if (typeof slides === 'object' && 'length' in slides) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) $wrapperEl.append(slides[i])
          }
          newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer
        } else {
          $wrapperEl.append(slides)
        }

        for (let i = 0; i < slidesBuffer.length; i += 1) {
          $wrapperEl.append(slidesBuffer[i])
        }

        if (params.loop) {
          swiper.loopCreate()
        }
        if (!(params.observer && swiper_esm_bundle_Support.observer)) {
          swiper.update()
        }
        if (params.loop) {
          swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false)
        } else {
          swiper.slideTo(newActiveIndex, 0, false)
        }
      }

      function removeSlide (slidesIndexes) {
        const swiper = this
        const { params, $wrapperEl, activeIndex } = swiper

        let activeIndexBuffer = activeIndex
        if (params.loop) {
          activeIndexBuffer -= swiper.loopedSlides
          swiper.loopDestroy()
          swiper.slides = $wrapperEl.children(`.${params.slideClass}`)
        }
        let newActiveIndex = activeIndexBuffer
        let indexToRemove

        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
          for (let i = 0; i < slidesIndexes.length; i += 1) {
            indexToRemove = slidesIndexes[i]
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove()
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1
          }
          newActiveIndex = Math.max(newActiveIndex, 0)
        } else {
          indexToRemove = slidesIndexes
          if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove()
          if (indexToRemove < newActiveIndex) newActiveIndex -= 1
          newActiveIndex = Math.max(newActiveIndex, 0)
        }

        if (params.loop) {
          swiper.loopCreate()
        }

        if (!(params.observer && swiper_esm_bundle_Support.observer)) {
          swiper.update()
        }
        if (params.loop) {
          swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false)
        } else {
          swiper.slideTo(newActiveIndex, 0, false)
        }
      }

      function removeAllSlides () {
        const swiper = this

        const slidesIndexes = []
        for (let i = 0; i < swiper.slides.length; i += 1) {
          slidesIndexes.push(i)
        }
        swiper.removeSlide(slidesIndexes)
      }

      var manipulation = {
        appendSlide,
        prependSlide,
        addSlide,
        removeSlide,
        removeAllSlides
      }

      const swiper_esm_bundle_Device = (function Device () {
        const platform = win.navigator.platform
        const ua = win.navigator.userAgent

        const device = {
          ios: false,
          android: false,
          androidChrome: false,
          desktop: false,
          iphone: false,
          ipod: false,
          ipad: false,
          edge: false,
          ie: false,
          firefox: false,
          macos: false,
          windows: false,
          cordova: !!(win.cordova || win.phonegap),
          phonegap: !!(win.cordova || win.phonegap),
          electron: false
        }

        const screenWidth = win.screen.width
        const screenHeight = win.screen.height

  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
        let ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
        const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
        const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
        const ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0
        const edge = ua.indexOf('Edge/') >= 0
        const firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0
        const windows = platform === 'Win32'
        const electron = ua.toLowerCase().indexOf('electron') >= 0
        let macos = platform === 'MacIntel'

        // iPadOs 13 fix
        if (!ipad &&
    macos &&
    swiper_esm_bundle_Support.touch &&
    (
      (screenWidth === 1024 && screenHeight === 1366) || // Pro 12.9
      (screenWidth === 834 && screenHeight === 1194) || // Pro 11
      (screenWidth === 834 && screenHeight === 1112) || // Pro 10.5
      (screenWidth === 768 && screenHeight === 1024) // other
    )
        ) {
          ipad = ua.match(/(Version)\/([\d.]+)/)
          macos = false
        }

        device.ie = ie
        device.edge = edge
        device.firefox = firefox

        // Android
        if (android && !windows) {
          device.os = 'android'
          device.osVersion = android[2]
          device.android = true
          device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0
        }
        if (ipad || iphone || ipod) {
          device.os = 'ios'
          device.ios = true
        }
        // iOS
        if (iphone && !ipod) {
          device.osVersion = iphone[2].replace(/_/g, '.')
          device.iphone = true
        }
        if (ipad) {
          device.osVersion = ipad[2].replace(/_/g, '.')
          device.ipad = true
        }
        if (ipod) {
          device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null
          device.ipod = true
        }
        // iOS 8+ changed UA
        if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
          if (device.osVersion.split('.')[0] === '10') {
            device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0]
          }
        }

        // Webview
        device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || win.navigator.standalone)) ||
    (win.matchMedia && win.matchMedia('(display-mode: standalone)').matches)
        device.webview = device.webView
        device.standalone = device.webView

        // Desktop
        device.desktop = !(device.ios || device.android) || electron
        if (device.desktop) {
          device.electron = electron
          device.macos = macos
          device.windows = windows
          if (device.macos) {
            device.os = 'macos'
          }
          if (device.windows) {
            device.os = 'windows'
          }
        }

        // Pixel Ratio
        device.pixelRatio = win.devicePixelRatio || 1

        // Export object
        return device
      }())

      function onTouchStart (event) {
        const swiper = this
        const data = swiper.touchEventsData
        const { params, touches } = swiper

        if (swiper.animating && params.preventInteractionOnTransition) {
          return
        }
        let e = event
        if (e.originalEvent) e = e.originalEvent
        const $targetEl = $(e.target)

        if (params.touchEventsTarget === 'wrapper') {
          if (!$targetEl.closest(swiper.wrapperEl).length) return
        }
        data.isTouchEvent = e.type === 'touchstart'
        if (!data.isTouchEvent && 'which' in e && e.which === 3) return
        if (!data.isTouchEvent && 'button' in e && e.button > 0) return
        if (data.isTouched && data.isMoved) return
        if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`)[0]) {
          swiper.allowClick = true
          return
        }
        if (params.swipeHandler) {
          if (!$targetEl.closest(params.swipeHandler)[0]) return
        }

        touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX
        touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY
        const startX = touches.currentX
        const startY = touches.currentY

        // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

        const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection
        const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold
        if (
          edgeSwipeDetection &&
    ((startX <= edgeSwipeThreshold) ||
    (startX >= win.screen.width - edgeSwipeThreshold))
        ) {
          return
        }

        Utils.extend(data, {
          isTouched: true,
          isMoved: false,
          allowTouchCallbacks: true,
          isScrolling: undefined,
          startMoving: undefined
        })

        touches.startX = startX
        touches.startY = startY
        data.touchStartTime = Utils.now()
        swiper.allowClick = true
        swiper.updateSize()
        swiper.swipeDirection = undefined
        if (params.threshold > 0) data.allowThresholdMove = false
        if (e.type !== 'touchstart') {
          let preventDefault = true
          if ($targetEl.is(data.formElements)) preventDefault = false
          if (
            doc.activeElement &&
      $(doc.activeElement).is(data.formElements) &&
      doc.activeElement !== $targetEl[0]
          ) {
            doc.activeElement.blur()
          }

          const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault
          if (params.touchStartForcePreventDefault || shouldPreventDefault) {
            e.preventDefault()
          }
        }
        swiper.emit('touchStart', e)
      }

      function onTouchMove (event) {
        const swiper = this
        const data = swiper.touchEventsData
        const { params, touches, rtlTranslate: rtl } = swiper
        let e = event
        if (e.originalEvent) e = e.originalEvent
        if (!data.isTouched) {
          if (data.startMoving && data.isScrolling) {
            swiper.emit('touchMoveOpposite', e)
          }
          return
        }
        if (data.isTouchEvent && e.type === 'mousemove') return
        const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0])
        const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX
        const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY
        if (e.preventedByNestedSwiper) {
          touches.startX = pageX
          touches.startY = pageY
          return
        }
        if (!swiper.allowTouchMove) {
          // isMoved = true;
          swiper.allowClick = false
          if (data.isTouched) {
            Utils.extend(touches, {
              startX: pageX,
              startY: pageY,
              currentX: pageX,
              currentY: pageY
            })
            data.touchStartTime = Utils.now()
          }
          return
        }
        if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
          if (swiper.isVertical()) {
            // Vertical
            if (
              (pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) ||
        (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
            ) {
              data.isTouched = false
              data.isMoved = false
              return
            }
          } else if (
            (pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
      (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
          ) {
            return
          }
        }
        if (data.isTouchEvent && doc.activeElement) {
          if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
            data.isMoved = true
            swiper.allowClick = false
            return
          }
        }
        if (data.allowTouchCallbacks) {
          swiper.emit('touchMove', e)
        }
        if (e.targetTouches && e.targetTouches.length > 1) return

        touches.currentX = pageX
        touches.currentY = pageY

        const diffX = touches.currentX - touches.startX
        const diffY = touches.currentY - touches.startY
        if (swiper.params.threshold && Math.sqrt((diffX ** 2) + (diffY ** 2)) < swiper.params.threshold) return

        if (typeof data.isScrolling === 'undefined') {
          let touchAngle
          if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
            data.isScrolling = false
          } else {
            // eslint-disable-next-line
      if ((diffX * diffX) + (diffY * diffY) >= 25) {
              touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI
              data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle)
            }
          }
        }
        if (data.isScrolling) {
          swiper.emit('touchMoveOpposite', e)
        }
        if (typeof data.startMoving === 'undefined') {
          if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
            data.startMoving = true
          }
        }
        if (data.isScrolling) {
          data.isTouched = false
          return
        }
        if (!data.startMoving) {
          return
        }
        swiper.allowClick = false
        if (!params.cssMode) {
          e.preventDefault()
        }
        if (params.touchMoveStopPropagation && !params.nested) {
          e.stopPropagation()
        }

        if (!data.isMoved) {
          if (params.loop) {
            swiper.loopFix()
          }
          data.startTranslate = swiper.getTranslate()
          swiper.setTransition(0)
          if (swiper.animating) {
            swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend')
          }
          data.allowMomentumBounce = false
          // Grab Cursor
          if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(true)
          }
          swiper.emit('sliderFirstMove', e)
        }
        swiper.emit('sliderMove', e)
        data.isMoved = true

        let diff = swiper.isHorizontal() ? diffX : diffY
        touches.diff = diff

        diff *= params.touchRatio
        if (rtl) diff = -diff

        swiper.swipeDirection = diff > 0 ? 'prev' : 'next'
        data.currentTranslate = diff + data.startTranslate

        let disableParentSwiper = true
        let resistanceRatio = params.resistanceRatio
        if (params.touchReleaseOnEdges) {
          resistanceRatio = 0
        }
        if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
          disableParentSwiper = false
          if (params.resistance) data.currentTranslate = (swiper.minTranslate() - 1) + ((-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio)
        } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
          disableParentSwiper = false
          if (params.resistance) data.currentTranslate = (swiper.maxTranslate() + 1) - ((swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio)
        }

        if (disableParentSwiper) {
          e.preventedByNestedSwiper = true
        }

        // Directions locks
        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
          data.currentTranslate = data.startTranslate
        }
        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
          data.currentTranslate = data.startTranslate
        }

        // Threshold
        if (params.threshold > 0) {
          if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
              data.allowThresholdMove = true
              touches.startX = touches.currentX
              touches.startY = touches.currentY
              data.currentTranslate = data.startTranslate
              touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY
              return
            }
          } else {
            data.currentTranslate = data.startTranslate
            return
          }
        }

        if (!params.followFinger || params.cssMode) return

        // Update active index in free mode
        if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
          swiper.updateActiveIndex()
          swiper.updateSlidesClasses()
        }
        if (params.freeMode) {
          // Velocity
          if (data.velocities.length === 0) {
            data.velocities.push({
              position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
              time: data.touchStartTime
            })
          }
          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
            time: Utils.now()
          })
        }
        // Update progress
        swiper.updateProgress(data.currentTranslate)
        // Update translate
        swiper.setTranslate(data.currentTranslate)
      }

      function onTouchEnd (event) {
        const swiper = this
        const data = swiper.touchEventsData

        const {
          params, touches, rtlTranslate: rtl, $wrapperEl, slidesGrid, snapGrid
        } = swiper
        let e = event
        if (e.originalEvent) e = e.originalEvent
        if (data.allowTouchCallbacks) {
          swiper.emit('touchEnd', e)
        }
        data.allowTouchCallbacks = false
        if (!data.isTouched) {
          if (data.isMoved && params.grabCursor) {
            swiper.setGrabCursor(false)
          }
          data.isMoved = false
          data.startMoving = false
          return
        }
        // Return Grab Cursor
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
          swiper.setGrabCursor(false)
        }

        // Time diff
        const touchEndTime = Utils.now()
        const timeDiff = touchEndTime - data.touchStartTime

        // Tap, doubleTap, Click
        if (swiper.allowClick) {
          swiper.updateClickedSlide(e)
          swiper.emit('tap click', e)
          if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
            swiper.emit('doubleTap doubleClick', e)
          }
        }

        data.lastClickTime = Utils.now()
        Utils.nextTick(() => {
          if (!swiper.destroyed) swiper.allowClick = true
        })

        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
          data.isTouched = false
          data.isMoved = false
          data.startMoving = false
          return
        }
        data.isTouched = false
        data.isMoved = false
        data.startMoving = false

        let currentPos
        if (params.followFinger) {
          currentPos = rtl ? swiper.translate : -swiper.translate
        } else {
          currentPos = -data.currentTranslate
        }

        if (params.cssMode) {
          return
        }

        if (params.freeMode) {
          if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex)
            return
          }
          if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) {
              swiper.slideTo(snapGrid.length - 1)
            } else {
              swiper.slideTo(swiper.slides.length - 1)
            }
            return
          }

          if (params.freeModeMomentum) {
            if (data.velocities.length > 1) {
              const lastMoveEvent = data.velocities.pop()
              const velocityEvent = data.velocities.pop()

              const distance = lastMoveEvent.position - velocityEvent.position
              const time = lastMoveEvent.time - velocityEvent.time
              swiper.velocity = distance / time
              swiper.velocity /= 2
              if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
                swiper.velocity = 0
              }
              // this implies that the user stopped moving a finger then released.
              // There would be no events with distance zero, so the last event is stale.
              if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
                swiper.velocity = 0
              }
            } else {
              swiper.velocity = 0
            }
            swiper.velocity *= params.freeModeMomentumVelocityRatio

            data.velocities.length = 0
            let momentumDuration = 1000 * params.freeModeMomentumRatio
            const momentumDistance = swiper.velocity * momentumDuration

            let newPosition = swiper.translate + momentumDistance
            if (rtl) newPosition = -newPosition

            let doBounce = false
            let afterBouncePosition
            const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio
            let needsLoopFix
            if (newPosition < swiper.maxTranslate()) {
              if (params.freeModeMomentumBounce) {
                if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                  newPosition = swiper.maxTranslate() - bounceAmount
                }
                afterBouncePosition = swiper.maxTranslate()
                doBounce = true
                data.allowMomentumBounce = true
              } else {
                newPosition = swiper.maxTranslate()
              }
              if (params.loop && params.centeredSlides) needsLoopFix = true
            } else if (newPosition > swiper.minTranslate()) {
              if (params.freeModeMomentumBounce) {
                if (newPosition - swiper.minTranslate() > bounceAmount) {
                  newPosition = swiper.minTranslate() + bounceAmount
                }
                afterBouncePosition = swiper.minTranslate()
                doBounce = true
                data.allowMomentumBounce = true
              } else {
                newPosition = swiper.minTranslate()
              }
              if (params.loop && params.centeredSlides) needsLoopFix = true
            } else if (params.freeModeSticky) {
              let nextSlide
              for (let j = 0; j < snapGrid.length; j += 1) {
                if (snapGrid[j] > -newPosition) {
                  nextSlide = j
                  break
                }
              }

              if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                newPosition = snapGrid[nextSlide]
              } else {
                newPosition = snapGrid[nextSlide - 1]
              }
              newPosition = -newPosition
            }
            if (needsLoopFix) {
              swiper.once('transitionEnd', () => {
                swiper.loopFix()
              })
            }
            // Fix duration
            if (swiper.velocity !== 0) {
              if (rtl) {
                momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity)
              } else {
                momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity)
              }
              if (params.freeModeSticky) {
                // If freeModeSticky is active and the user ends a swipe with a slow-velocity
                // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                // It's easy to see this when simulating touch with mouse events. To fix this,
                // limit single-slide swipes to the default slide duration. This also has the
                // nice side effect of matching slide speed if the user stopped moving before
                // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                // For faster swipes, also apply limits (albeit higher ones).
                const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate)
                const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex]
                if (moveDistance < currentSlideSize) {
                  momentumDuration = params.speed
                } else if (moveDistance < 2 * currentSlideSize) {
                  momentumDuration = params.speed * 1.5
                } else {
                  momentumDuration = params.speed * 2.5
                }
              }
            } else if (params.freeModeSticky) {
              swiper.slideToClosest()
              return
            }

            if (params.freeModeMomentumBounce && doBounce) {
              swiper.updateProgress(afterBouncePosition)
              swiper.setTransition(momentumDuration)
              swiper.setTranslate(newPosition)
              swiper.transitionStart(true, swiper.swipeDirection)
              swiper.animating = true
              $wrapperEl.transitionEnd(() => {
                if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return
                swiper.emit('momentumBounce')

                swiper.setTransition(params.speed)
                swiper.setTranslate(afterBouncePosition)
                $wrapperEl.transitionEnd(() => {
                  if (!swiper || swiper.destroyed) return
                  swiper.transitionEnd()
                })
              })
            } else if (swiper.velocity) {
              swiper.updateProgress(newPosition)
              swiper.setTransition(momentumDuration)
              swiper.setTranslate(newPosition)
              swiper.transitionStart(true, swiper.swipeDirection)
              if (!swiper.animating) {
                swiper.animating = true
                $wrapperEl.transitionEnd(() => {
                  if (!swiper || swiper.destroyed) return
                  swiper.transitionEnd()
                })
              }
            } else {
              swiper.updateProgress(newPosition)
            }

            swiper.updateActiveIndex()
            swiper.updateSlidesClasses()
          } else if (params.freeModeSticky) {
            swiper.slideToClosest()
            return
          }

          if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
            swiper.updateProgress()
            swiper.updateActiveIndex()
            swiper.updateSlidesClasses()
          }
          return
        }

        // Find current slide
        let stopIndex = 0
        let groupSize = swiper.slidesSizesGrid[0]
        for (let i = 0; i < slidesGrid.length; i += (i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup)) {
          const increment = (i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup)
          if (typeof slidesGrid[i + increment] !== 'undefined') {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
              stopIndex = i
              groupSize = slidesGrid[i + increment] - slidesGrid[i]
            }
          } else if (currentPos >= slidesGrid[i]) {
            stopIndex = i
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2]
          }
        }

        // Find current slide size
        const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize
        const increment = (stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup)

        if (timeDiff > params.longSwipesMs) {
          // Long touches
          if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex)
            return
          }
          if (swiper.swipeDirection === 'next') {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment)
            else swiper.slideTo(stopIndex)
          }
          if (swiper.swipeDirection === 'prev') {
            if (ratio > (1 - params.longSwipesRatio)) swiper.slideTo(stopIndex + increment)
            else swiper.slideTo(stopIndex)
          }
        } else {
          // Short swipes
          if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex)
            return
          }
          const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl)
          if (!isNavButtonTarget) {
            if (swiper.swipeDirection === 'next') {
              swiper.slideTo(stopIndex + increment)
            }
            if (swiper.swipeDirection === 'prev') {
              swiper.slideTo(stopIndex)
            }
          } else if (e.target === swiper.navigation.nextEl) {
            swiper.slideTo(stopIndex + increment)
          } else {
            swiper.slideTo(stopIndex)
          }
        }
      }

      function onResize () {
        const swiper = this

        const { params, el } = swiper

        if (el && el.offsetWidth === 0) return

        // Breakpoints
        if (params.breakpoints) {
          swiper.setBreakpoint()
        }

        // Save locks
        const { allowSlideNext, allowSlidePrev, snapGrid } = swiper

        // Disable locks on resize
        swiper.allowSlideNext = true
        swiper.allowSlidePrev = true

        swiper.updateSize()
        swiper.updateSlides()

        swiper.updateSlidesClasses()
        if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          swiper.slideTo(swiper.slides.length - 1, 0, false, true)
        } else {
          swiper.slideTo(swiper.activeIndex, 0, false, true)
        }

        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.run()
        }
        // Return locks after resize
        swiper.allowSlidePrev = allowSlidePrev
        swiper.allowSlideNext = allowSlideNext

        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow()
        }
      }

      function swiper_esm_bundle_onClick (e) {
        const swiper = this
        if (!swiper.allowClick) {
          if (swiper.params.preventClicks) e.preventDefault()
          if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation()
            e.stopImmediatePropagation()
          }
        }
      }

      function onScroll () {
        const swiper = this
        const { wrapperEl } = swiper
        swiper.previousTranslate = swiper.translate
        swiper.translate = swiper.isHorizontal() ? -wrapperEl.scrollLeft : -wrapperEl.scrollTop
        // eslint-disable-next-line
  if (swiper.translate === -0) swiper.translate = 0;

        swiper.updateActiveIndex()
        swiper.updateSlidesClasses()

        let newProgress
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate()
        if (translatesDiff === 0) {
          newProgress = 0
        } else {
          newProgress = (swiper.translate - swiper.minTranslate()) / (translatesDiff)
        }
        if (newProgress !== swiper.progress) {
          swiper.updateProgress(swiper.translate)
        }

        swiper.emit('setTranslate', swiper.translate, false)
      }

      let dummyEventAttached = false
      function dummyEventListener () {}

      function attachEvents () {
        const swiper = this
        const {
          params, touchEvents, el, wrapperEl
        } = swiper

        swiper.onTouchStart = onTouchStart.bind(swiper)
        swiper.onTouchMove = onTouchMove.bind(swiper)
        swiper.onTouchEnd = onTouchEnd.bind(swiper)
        if (params.cssMode) {
          swiper.onScroll = onScroll.bind(swiper)
        }

        swiper.onClick = swiper_esm_bundle_onClick.bind(swiper)

        const capture = !!params.nested

        // Touch Events
        if (!swiper_esm_bundle_Support.touch && swiper_esm_bundle_Support.pointerEvents) {
          el.addEventListener(touchEvents.start, swiper.onTouchStart, false)
          doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture)
          doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false)
        } else {
          if (swiper_esm_bundle_Support.touch) {
            const passiveListener = touchEvents.start === 'touchstart' && swiper_esm_bundle_Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false
            el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener)
            el.addEventListener(touchEvents.move, swiper.onTouchMove, swiper_esm_bundle_Support.passiveListener ? { passive: false, capture } : capture)
            el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener)
            if (touchEvents.cancel) {
              el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener)
            }
            if (!dummyEventAttached) {
              doc.addEventListener('touchstart', dummyEventListener)
              dummyEventAttached = true
            }
          }
          if ((params.simulateTouch && !swiper_esm_bundle_Device.ios && !swiper_esm_bundle_Device.android) || (params.simulateTouch && !swiper_esm_bundle_Support.touch && swiper_esm_bundle_Device.ios)) {
            el.addEventListener('mousedown', swiper.onTouchStart, false)
            doc.addEventListener('mousemove', swiper.onTouchMove, capture)
            doc.addEventListener('mouseup', swiper.onTouchEnd, false)
          }
        }
        // Prevent Links Clicks
        if (params.preventClicks || params.preventClicksPropagation) {
          el.addEventListener('click', swiper.onClick, true)
        }
        if (params.cssMode) {
          wrapperEl.addEventListener('scroll', swiper.onScroll)
        }

        // Resize handler
        if (params.updateOnWindowResize) {
          swiper.on((swiper_esm_bundle_Device.ios || swiper_esm_bundle_Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true)
        } else {
          swiper.on('observerUpdate', onResize, true)
        }
      }

      function detachEvents () {
        const swiper = this

        const {
          params, touchEvents, el, wrapperEl
        } = swiper

        const capture = !!params.nested

        // Touch Events
        if (!swiper_esm_bundle_Support.touch && swiper_esm_bundle_Support.pointerEvents) {
          el.removeEventListener(touchEvents.start, swiper.onTouchStart, false)
          doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture)
          doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false)
        } else {
          if (swiper_esm_bundle_Support.touch) {
            const passiveListener = touchEvents.start === 'onTouchStart' && swiper_esm_bundle_Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false
            el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener)
            el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture)
            el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener)
            if (touchEvents.cancel) {
              el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener)
            }
          }
          if ((params.simulateTouch && !swiper_esm_bundle_Device.ios && !swiper_esm_bundle_Device.android) || (params.simulateTouch && !swiper_esm_bundle_Support.touch && swiper_esm_bundle_Device.ios)) {
            el.removeEventListener('mousedown', swiper.onTouchStart, false)
            doc.removeEventListener('mousemove', swiper.onTouchMove, capture)
            doc.removeEventListener('mouseup', swiper.onTouchEnd, false)
          }
        }
        // Prevent Links Clicks
        if (params.preventClicks || params.preventClicksPropagation) {
          el.removeEventListener('click', swiper.onClick, true)
        }

        if (params.cssMode) {
          wrapperEl.removeEventListener('scroll', swiper.onScroll)
        }

        // Resize handler
        swiper.off((swiper_esm_bundle_Device.ios || swiper_esm_bundle_Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize)
      }

      var swiper_esm_bundle_events = {
        attachEvents,
        detachEvents
      }

      function setBreakpoint () {
        const swiper = this
        const {
          activeIndex, initialized, loopedSlides = 0, params, $el
        } = swiper
        const breakpoints = params.breakpoints
        if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) return

        // Get breakpoint for window width and update parameters
        const breakpoint = swiper.getBreakpoint(breakpoints)

        if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
          const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined
          if (breakpointOnlyParams) {
            ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach((param) => {
              const paramValue = breakpointOnlyParams[param]
              if (typeof paramValue === 'undefined') return
              if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
                breakpointOnlyParams[param] = 'auto'
              } else if (param === 'slidesPerView') {
                breakpointOnlyParams[param] = parseFloat(paramValue)
              } else {
                breakpointOnlyParams[param] = parseInt(paramValue, 10)
              }
            })
          }

          const breakpointParams = breakpointOnlyParams || swiper.originalParams
          const wasMultiRow = params.slidesPerColumn > 1
          const isMultiRow = breakpointParams.slidesPerColumn > 1
          if (wasMultiRow && !isMultiRow) {
            $el.removeClass(`${params.containerModifierClass}multirow ${params.containerModifierClass}multirow-column`)
          } else if (!wasMultiRow && isMultiRow) {
            $el.addClass(`${params.containerModifierClass}multirow`)
            if (breakpointParams.slidesPerColumnFill === 'column') {
              $el.addClass(`${params.containerModifierClass}multirow-column`)
            }
          }

          const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction
          const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged)

          if (directionChanged && initialized) {
            swiper.changeDirection()
          }

          Utils.extend(swiper.params, breakpointParams)

          Utils.extend(swiper, {
            allowTouchMove: swiper.params.allowTouchMove,
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev
          })

          swiper.currentBreakpoint = breakpoint

          if (needsReLoop && initialized) {
            swiper.loopDestroy()
            swiper.loopCreate()
            swiper.updateSlides()
            swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false)
          }

          swiper.emit('breakpoint', breakpointParams)
        }
      }

      function getBreakpoint (breakpoints) {
        // Get breakpoint for window width
        if (!breakpoints) return undefined
        let breakpoint = false

        const points = Object.keys(breakpoints).map((point) => {
          if (typeof point === 'string' && point.startsWith('@')) {
            const minRatio = parseFloat(point.substr(1))
            const value = win.innerHeight * minRatio
            return { value, point }
          }
          return { value: point, point }
        })

        points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10))
        for (let i = 0; i < points.length; i += 1) {
          const { point, value } = points[i]
          if (value <= win.innerWidth) {
            breakpoint = point
          }
        }
        return breakpoint || 'max'
      }

      var swiper_esm_bundle_breakpoints = { setBreakpoint, getBreakpoint }

      function addClasses () {
        const swiper = this
        const {
          classNames, params, rtl, $el
        } = swiper
        const suffixes = []

        suffixes.push('initialized')
        suffixes.push(params.direction)

        if (params.freeMode) {
          suffixes.push('free-mode')
        }
        if (params.autoHeight) {
          suffixes.push('autoheight')
        }
        if (rtl) {
          suffixes.push('rtl')
        }
        if (params.slidesPerColumn > 1) {
          suffixes.push('multirow')
          if (params.slidesPerColumnFill === 'column') {
            suffixes.push('multirow-column')
          }
        }
        if (swiper_esm_bundle_Device.android) {
          suffixes.push('android')
        }
        if (swiper_esm_bundle_Device.ios) {
          suffixes.push('ios')
        }

        if (params.cssMode) {
          suffixes.push('css-mode')
        }

        suffixes.forEach((suffix) => {
          classNames.push(params.containerModifierClass + suffix)
        })

        $el.addClass(classNames.join(' '))
      }

      function removeClasses () {
        const swiper = this
        const { $el, classNames } = swiper

        $el.removeClass(classNames.join(' '))
      }

      var swiper_esm_bundle_classes = { addClasses, removeClasses }

      function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
        let image
        function onReady () {
          if (callback) callback()
        }
        if (!imageEl.complete || !checkForComplete) {
          if (src) {
            image = new win.Image()
            image.onload = onReady
            image.onerror = onReady
            if (sizes) {
              image.sizes = sizes
            }
            if (srcset) {
              image.srcset = srcset
            }
            if (src) {
              image.src = src
            }
          } else {
            onReady()
          }
        } else {
          // image already loaded...
          onReady()
        }
      }

      function preloadImages () {
        const swiper = this
        swiper.imagesToLoad = swiper.$el.find('img')
        function onReady () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return
          if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1
          if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
            if (swiper.params.updateOnImagesReady) swiper.update()
            swiper.emit('imagesReady')
          }
        }
        for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
          const imageEl = swiper.imagesToLoad[i]
          swiper.loadImage(
            imageEl,
            imageEl.currentSrc || imageEl.getAttribute('src'),
            imageEl.srcset || imageEl.getAttribute('srcset'),
            imageEl.sizes || imageEl.getAttribute('sizes'),
            true,
            onReady
          )
        }
      }

      var swiper_esm_bundle_images = {
        loadImage,
        preloadImages
      }

      function checkOverflow () {
        const swiper = this
        const params = swiper.params
        const wasLocked = swiper.isLocked
        const lastSlidePosition = swiper.slides.length > 0 && (params.slidesOffsetBefore + (params.spaceBetween * (swiper.slides.length - 1)) + ((swiper.slides[0]).offsetWidth) * swiper.slides.length)

        if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
          swiper.isLocked = lastSlidePosition <= swiper.size
        } else {
          swiper.isLocked = swiper.snapGrid.length === 1
        }

        swiper.allowSlideNext = !swiper.isLocked
        swiper.allowSlidePrev = !swiper.isLocked

        // events
        if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock')

        if (wasLocked && wasLocked !== swiper.isLocked) {
          swiper.isEnd = false
          swiper.navigation.update()
        }
      }

      var checkOverflow$1 = { checkOverflow }

      var defaults = {
        init: true,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        //
        preventInteractionOnTransition: false,

        // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,

        // Free mode
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,

        // Autoheight
        autoHeight: false,

        // Set wrapper width
        setWrapperSize: false,

        // Virtual Translate
        virtualTranslate: false,

        // Effects
        effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

        // Breakpoints
        breakpoints: undefined,

        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0, // in px
        slidesOffsetAfter: 0, // in px
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,

        // Disable swiper and hide navigation when container not overflow
        watchOverflow: false,

        // Round length
        roundLengths: false,

        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,

        // Unique Navigation Elements
        uniqueNavElements: true,

        // Resistance
        resistance: true,
        resistanceRatio: 0.85,

        // Progress
        watchSlidesProgress: false,
        watchSlidesVisibility: false,

        // Cursor
        grabCursor: false,

        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,

        // Images
        preloadImages: true,
        updateOnImagesReady: true,

        // loop
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,

        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null, // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,

        // Passive Listeners
        passiveListeners: true,

        // NS
        containerModifierClass: 'swiper-container-', // NEW
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',

        // Callbacks
        runCallbacksOnInit: true
      }

      /* eslint no-param-reassign: "off" */

      const prototypes = {
        update,
        translate: swiper_esm_bundle_translate,
        transition: swiper_esm_bundle_transition,
        slide: swiper_esm_bundle_slide,
        loop,
        grabCursor,
        manipulation,
        events: swiper_esm_bundle_events,
        breakpoints: swiper_esm_bundle_breakpoints,
        checkOverflow: checkOverflow$1,
        classes: swiper_esm_bundle_classes,
        images: swiper_esm_bundle_images
      }

      const extendedDefaults = {}

      class swiper_esm_bundle_Swiper extends SwiperClass {
        constructor (...args) {
          let el
          let params
          if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
            params = args[0]
          } else {
            [el, params] = args
          }
          if (!params) params = {}

          params = Utils.extend({}, params)
          if (el && !params.el) params.el = el

          super(params)

          Object.keys(prototypes).forEach((prototypeGroup) => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
              if (!swiper_esm_bundle_Swiper.prototype[protoMethod]) {
                swiper_esm_bundle_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod]
              }
            })
          })

          // Swiper Instance
          const swiper = this
          if (typeof swiper.modules === 'undefined') {
            swiper.modules = {}
          }
          Object.keys(swiper.modules).forEach((moduleName) => {
            const module = swiper.modules[moduleName]
            if (module.params) {
              const moduleParamName = Object.keys(module.params)[0]
              const moduleParams = module.params[moduleParamName]
              if (typeof moduleParams !== 'object' || moduleParams === null) return
              if (!(moduleParamName in params && 'enabled' in moduleParams)) return
              if (params[moduleParamName] === true) {
                params[moduleParamName] = { enabled: true }
              }
              if (
                typeof params[moduleParamName] === 'object' &&
          !('enabled' in params[moduleParamName])
              ) {
                params[moduleParamName].enabled = true
              }
              if (!params[moduleParamName]) params[moduleParamName] = { enabled: false }
            }
          })

          // Extend defaults with modules params
          const swiperParams = Utils.extend({}, defaults)
          swiper.useModulesParams(swiperParams)

          // Extend defaults with passed params
          swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params)
          swiper.originalParams = Utils.extend({}, swiper.params)
          swiper.passedParams = Utils.extend({}, params)

          // Save Dom lib
          swiper.$ = $

          // Find el
          const $el = $(swiper.params.el)
          el = $el[0]

          if (!el) {
            return undefined
          }

          if ($el.length > 1) {
            const swipers = []
            $el.each((index, containerEl) => {
              const newParams = Utils.extend({}, params, { el: containerEl })
              swipers.push(new swiper_esm_bundle_Swiper(newParams))
            })
            return swipers
          }

          el.swiper = swiper
          $el.data('swiper', swiper)

          // Find Wrapper
          let $wrapperEl
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            $wrapperEl = $(el.shadowRoot.querySelector(`.${swiper.params.wrapperClass}`))
            // Children needs to return slot items
            $wrapperEl.children = (options) => $el.children(options)
          } else {
            $wrapperEl = $el.children(`.${swiper.params.wrapperClass}`)
          }
          // Extend Swiper
          Utils.extend(swiper, {
            $el,
            el,
            $wrapperEl,
            wrapperEl: $wrapperEl[0],

            // Classes
            classNames: [],

            // Slides
            slides: $(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],

            // isDirection
            isHorizontal () {
              return swiper.params.direction === 'horizontal'
            },
            isVertical () {
              return swiper.params.direction === 'vertical'
            },
            // RTL
            rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            wrongRTL: $wrapperEl.css('display') === '-webkit-box',

            // Indexes
            activeIndex: 0,
            realIndex: 0,

            //
            isBeginning: true,
            isEnd: false,

            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,

            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,

            // Touch Events
            touchEvents: (function touchEvents () {
              const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel']
              let desktop = ['mousedown', 'mousemove', 'mouseup']
              if (swiper_esm_bundle_Support.pointerEvents) {
                desktop = ['pointerdown', 'pointermove', 'pointerup']
              }
              swiper.touchEventsTouch = {
                start: touch[0],
                move: touch[1],
                end: touch[2],
                cancel: touch[3]
              }
              swiper.touchEventsDesktop = {
                start: desktop[0],
                move: desktop[1],
                end: desktop[2]
              }
              return swiper_esm_bundle_Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop
            }()),
            touchEventsData: {
              isTouched: undefined,
              isMoved: undefined,
              allowTouchCallbacks: undefined,
              touchStartTime: undefined,
              isScrolling: undefined,
              currentTranslate: undefined,
              startTranslate: undefined,
              allowThresholdMove: undefined,
              // Form elements to match
              formElements: 'input, select, option, textarea, button, video, label',
              // Last click time
              lastClickTime: Utils.now(),
              clickTimeout: undefined,
              // Velocities
              velocities: [],
              allowMomentumBounce: undefined,
              isTouchEvent: undefined,
              startMoving: undefined
            },

            // Clicks
            allowClick: true,

            // Touches
            allowTouchMove: swiper.params.allowTouchMove,

            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },

            // Images
            imagesToLoad: [],
            imagesLoaded: 0

          })

          // Install Modules
          swiper.useModules()

          // Init
          if (swiper.params.init) {
            swiper.init()
          }

          // Return app instance
          return swiper
        }

        slidesPerViewDynamic () {
          const swiper = this
          const {
            params, slides, slidesGrid, size: swiperSize, activeIndex
          } = swiper
          let spv = 1
          if (params.centeredSlides) {
            let slideSize = slides[activeIndex].swiperSlideSize
            let breakLoop
            for (let i = activeIndex + 1; i < slides.length; i += 1) {
              if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize
                spv += 1
                if (slideSize > swiperSize) breakLoop = true
              }
            }
            for (let i = activeIndex - 1; i >= 0; i -= 1) {
              if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize
                spv += 1
                if (slideSize > swiperSize) breakLoop = true
              }
            }
          } else {
            for (let i = activeIndex + 1; i < slides.length; i += 1) {
              if (slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) {
                spv += 1
              }
            }
          }
          return spv
        }

        update () {
          const swiper = this
          if (!swiper || swiper.destroyed) return
          const { snapGrid, params } = swiper
          // Breakpoints
          if (params.breakpoints) {
            swiper.setBreakpoint()
          }
          swiper.updateSize()
          swiper.updateSlides()
          swiper.updateProgress()
          swiper.updateSlidesClasses()

          function setTranslate () {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate())
            swiper.setTranslate(newTranslate)
            swiper.updateActiveIndex()
            swiper.updateSlidesClasses()
          }
          let translated
          if (swiper.params.freeMode) {
            setTranslate()
            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight()
            }
          } else {
            if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
              translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true)
            } else {
              translated = swiper.slideTo(swiper.activeIndex, 0, false, true)
            }
            if (!translated) {
              setTranslate()
            }
          }
          if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow()
          }
          swiper.emit('update')
        }

        changeDirection (newDirection, needUpdate = true) {
          const swiper = this
          const currentDirection = swiper.params.direction
          if (!newDirection) {
            // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
          }
          if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
            return swiper
          }

          swiper.$el
            .removeClass(`${swiper.params.containerModifierClass}${currentDirection}`)
            .addClass(`${swiper.params.containerModifierClass}${newDirection}`)

          swiper.params.direction = newDirection

          swiper.slides.each((slideIndex, slideEl) => {
            if (newDirection === 'vertical') {
              slideEl.style.width = ''
            } else {
              slideEl.style.height = ''
            }
          })

          swiper.emit('changeDirection')
          if (needUpdate) swiper.update()

          return swiper
        }

        init () {
          const swiper = this
          if (swiper.initialized) return

          swiper.emit('beforeInit')

          // Set breakpoint
          if (swiper.params.breakpoints) {
            swiper.setBreakpoint()
          }

          // Add Classes
          swiper.addClasses()

          // Create loop
          if (swiper.params.loop) {
            swiper.loopCreate()
          }

          // Update size
          swiper.updateSize()

          // Update slides
          swiper.updateSlides()

          if (swiper.params.watchOverflow) {
            swiper.checkOverflow()
          }

          // Set Grab Cursor
          if (swiper.params.grabCursor) {
            swiper.setGrabCursor()
          }

          if (swiper.params.preloadImages) {
            swiper.preloadImages()
          }

          // Slide To Initial Slide
          if (swiper.params.loop) {
            swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit)
          } else {
            swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit)
          }

          // Attach events
          swiper.attachEvents()

          // Init Flag
          swiper.initialized = true

          // Emit
          swiper.emit('init')
        }

        destroy (deleteInstance = true, cleanStyles = true) {
          const swiper = this
          const {
            params, $el, $wrapperEl, slides
          } = swiper

          if (typeof swiper.params === 'undefined' || swiper.destroyed) {
            return null
          }

          swiper.emit('beforeDestroy')

          // Init Flag
          swiper.initialized = false

          // Detach events
          swiper.detachEvents()

          // Destroy loop
          if (params.loop) {
            swiper.loopDestroy()
          }

          // Cleanup styles
          if (cleanStyles) {
            swiper.removeClasses()
            $el.removeAttr('style')
            $wrapperEl.removeAttr('style')
            if (slides && slides.length) {
              slides
                .removeClass([
                  params.slideVisibleClass,
                  params.slideActiveClass,
                  params.slideNextClass,
                  params.slidePrevClass
                ].join(' '))
                .removeAttr('style')
                .removeAttr('data-swiper-slide-index')
            }
          }

          swiper.emit('destroy')

          // Detach emitter events
          Object.keys(swiper.eventsListeners).forEach((eventName) => {
            swiper.off(eventName)
          })

          if (deleteInstance !== false) {
            swiper.$el[0].swiper = null
            swiper.$el.data('swiper', null)
            Utils.deleteProps(swiper)
          }
          swiper.destroyed = true

          return null
        }

        static extendDefaults (newDefaults) {
          Utils.extend(extendedDefaults, newDefaults)
        }

        static get extendedDefaults () {
          return extendedDefaults
        }

        static get defaults () {
          return defaults
        }

        static get Class () {
          return SwiperClass
        }

        static get $ () {
          return $
        }
      }

      var Device$1 = {
        name: 'device',
        proto: {
          device: swiper_esm_bundle_Device
        },
        static: {
          device: swiper_esm_bundle_Device
        }
      }

      var Support$1 = {
        name: 'support',
        proto: {
          support: swiper_esm_bundle_Support
        },
        static: {
          support: swiper_esm_bundle_Support
        }
      }

      const swiper_esm_bundle_Browser = (function Browser () {
        function isSafari () {
          const ua = win.navigator.userAgent.toLowerCase()
          return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0)
        }
        return {
          isEdge: !!win.navigator.userAgent.match(/Edge/g),
          isSafari: isSafari(),
          isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent)
        }
      }())

      var Browser$1 = {
        name: 'browser',
        proto: {
          browser: swiper_esm_bundle_Browser
        },
        static: {
          browser: swiper_esm_bundle_Browser
        }
      }

      var Resize = {
        name: 'resize',
        create () {
          const swiper = this
          Utils.extend(swiper, {
            resize: {
              resizeHandler () {
                if (!swiper || swiper.destroyed || !swiper.initialized) return
                swiper.emit('beforeResize')
                swiper.emit('resize')
              },
              orientationChangeHandler () {
                if (!swiper || swiper.destroyed || !swiper.initialized) return
                swiper.emit('orientationchange')
              }
            }
          })
        },
        on: {
          init () {
            const swiper = this
            // Emit resize
            win.addEventListener('resize', swiper.resize.resizeHandler)

            // Emit orientationchange
            win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler)
          },
          destroy () {
            const swiper = this
            win.removeEventListener('resize', swiper.resize.resizeHandler)
            win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler)
          }
        }
      }

      const Observer = {
        func: win.MutationObserver || win.WebkitMutationObserver,
        attach (target, options = {}) {
          const swiper = this

          const ObserverFunc = Observer.func
          const observer = new ObserverFunc((mutations) => {
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (mutations.length === 1) {
              swiper.emit('observerUpdate', mutations[0])
              return
            }
            const observerUpdate = function observerUpdate () {
              swiper.emit('observerUpdate', mutations[0])
            }

            if (win.requestAnimationFrame) {
              win.requestAnimationFrame(observerUpdate)
            } else {
              win.setTimeout(observerUpdate, 0)
            }
          })

          observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: typeof options.childList === 'undefined' ? true : options.childList,
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData
          })

          swiper.observer.observers.push(observer)
        },
        init () {
          const swiper = this
          if (!swiper_esm_bundle_Support.observer || !swiper.params.observer) return
          if (swiper.params.observeParents) {
            const containerParents = swiper.$el.parents()
            for (let i = 0; i < containerParents.length; i += 1) {
              swiper.observer.attach(containerParents[i])
            }
          }
          // Observe container
          swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren })

          // Observe wrapper
          swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false })
        },
        destroy () {
          const swiper = this
          swiper.observer.observers.forEach((observer) => {
            observer.disconnect()
          })
          swiper.observer.observers = []
        }
      }

      var Observer$1 = {
        name: 'observer',
        params: {
          observer: false,
          observeParents: false,
          observeSlideChildren: false
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            observer: {
              init: Observer.init.bind(swiper),
              attach: Observer.attach.bind(swiper),
              destroy: Observer.destroy.bind(swiper),
              observers: []
            }
          })
        },
        on: {
          init () {
            const swiper = this
            swiper.observer.init()
          },
          destroy () {
            const swiper = this
            swiper.observer.destroy()
          }
        }
      }

      const Virtual = {
        update (force) {
          const swiper = this
          const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params
          const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual
          const {
            from: previousFrom,
            to: previousTo,
            slides,
            slidesGrid: previousSlidesGrid,
            renderSlide,
            offset: previousOffset
          } = swiper.virtual
          swiper.updateActiveIndex()
          const activeIndex = swiper.activeIndex || 0

          let offsetProp
          if (swiper.rtlTranslate) offsetProp = 'right'
          else offsetProp = swiper.isHorizontal() ? 'left' : 'top'

          let slidesAfter
          let slidesBefore
          if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter
          } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore
            slidesBefore = slidesPerGroup + addSlidesAfter
          }
          const from = Math.max((activeIndex || 0) - slidesBefore, 0)
          const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1)
          const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0)

          Utils.extend(swiper.virtual, {
            from,
            to,
            offset,
            slidesGrid: swiper.slidesGrid
          })

          function onRendered () {
            swiper.updateSlides()
            swiper.updateProgress()
            swiper.updateSlidesClasses()
            if (swiper.lazy && swiper.params.lazy.enabled) {
              swiper.lazy.load()
            }
          }

          if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
              swiper.slides.css(offsetProp, `${offset}px`)
            }
            swiper.updateProgress()
            return
          }
          if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
              offset,
              from,
              to,
              slides: (function getSlides () {
                const slidesToRender = []
                for (let i = from; i <= to; i += 1) {
                  slidesToRender.push(slides[i])
                }
                return slidesToRender
              }())
            })
            onRendered()
            return
          }
          const prependIndexes = []
          const appendIndexes = []
          if (force) {
            swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove()
          } else {
            for (let i = previousFrom; i <= previousTo; i += 1) {
              if (i < from || i > to) {
                swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove()
              }
            }
          }
          for (let i = 0; i < slides.length; i += 1) {
            if (i >= from && i <= to) {
              if (typeof previousTo === 'undefined' || force) {
                appendIndexes.push(i)
              } else {
                if (i > previousTo) appendIndexes.push(i)
                if (i < previousFrom) prependIndexes.push(i)
              }
            }
          }
          appendIndexes.forEach((index) => {
            swiper.$wrapperEl.append(renderSlide(slides[index], index))
          })
          prependIndexes.sort((a, b) => b - a).forEach((index) => {
            swiper.$wrapperEl.prepend(renderSlide(slides[index], index))
          })
          swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`)
          onRendered()
        },
        renderSlide (slide, index) {
          const swiper = this
          const params = swiper.params.virtual
          if (params.cache && swiper.virtual.cache[index]) {
            return swiper.virtual.cache[index]
          }
          const $slideEl = params.renderSlide
            ? $(params.renderSlide.call(swiper, slide, index))
            : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`)
          if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index)
          if (params.cache) swiper.virtual.cache[index] = $slideEl
          return $slideEl
        },
        appendSlide (slides) {
          const swiper = this
          if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
              if (slides[i]) swiper.virtual.slides.push(slides[i])
            }
          } else {
            swiper.virtual.slides.push(slides)
          }
          swiper.virtual.update(true)
        },
        prependSlide (slides) {
          const swiper = this
          const activeIndex = swiper.activeIndex
          let newActiveIndex = activeIndex + 1
          let numberOfNewSlides = 1

          if (Array.isArray(slides)) {
            for (let i = 0; i < slides.length; i += 1) {
              if (slides[i]) swiper.virtual.slides.unshift(slides[i])
            }
            newActiveIndex = activeIndex + slides.length
            numberOfNewSlides = slides.length
          } else {
            swiper.virtual.slides.unshift(slides)
          }
          if (swiper.params.virtual.cache) {
            const cache = swiper.virtual.cache
            const newCache = {}
            Object.keys(cache).forEach((cachedIndex) => {
              const $cachedEl = cache[cachedIndex]
              const cachedElIndex = $cachedEl.attr('data-swiper-slide-index')
              if (cachedElIndex) {
                $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1)
              }
              newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl
            })
            swiper.virtual.cache = newCache
          }
          swiper.virtual.update(true)
          swiper.slideTo(newActiveIndex, 0)
        },
        removeSlide (slidesIndexes) {
          const swiper = this
          if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return
          let activeIndex = swiper.activeIndex
          if (Array.isArray(slidesIndexes)) {
            for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
              swiper.virtual.slides.splice(slidesIndexes[i], 1)
              if (swiper.params.virtual.cache) {
                delete swiper.virtual.cache[slidesIndexes[i]]
              }
              if (slidesIndexes[i] < activeIndex) activeIndex -= 1
              activeIndex = Math.max(activeIndex, 0)
            }
          } else {
            swiper.virtual.slides.splice(slidesIndexes, 1)
            if (swiper.params.virtual.cache) {
              delete swiper.virtual.cache[slidesIndexes]
            }
            if (slidesIndexes < activeIndex) activeIndex -= 1
            activeIndex = Math.max(activeIndex, 0)
          }
          swiper.virtual.update(true)
          swiper.slideTo(activeIndex, 0)
        },
        removeAllSlides () {
          const swiper = this
          swiper.virtual.slides = []
          if (swiper.params.virtual.cache) {
            swiper.virtual.cache = {}
          }
          swiper.virtual.update(true)
          swiper.slideTo(0, 0)
        }
      }

      var Virtual$1 = {
        name: 'virtual',
        params: {
          virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            virtual: {
              update: Virtual.update.bind(swiper),
              appendSlide: Virtual.appendSlide.bind(swiper),
              prependSlide: Virtual.prependSlide.bind(swiper),
              removeSlide: Virtual.removeSlide.bind(swiper),
              removeAllSlides: Virtual.removeAllSlides.bind(swiper),
              renderSlide: Virtual.renderSlide.bind(swiper),
              slides: swiper.params.virtual.slides,
              cache: {}
            }
          })
        },
        on: {
          beforeInit () {
            const swiper = this
            if (!swiper.params.virtual.enabled) return
            swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`)
            const overwriteParams = {
              watchSlidesProgress: true
            }
            Utils.extend(swiper.params, overwriteParams)
            Utils.extend(swiper.originalParams, overwriteParams)

            if (!swiper.params.initialSlide) {
              swiper.virtual.update()
            }
          },
          setTranslate () {
            const swiper = this
            if (!swiper.params.virtual.enabled) return
            swiper.virtual.update()
          }
        }
      }

      const Keyboard = {
        handle (event) {
          const swiper = this
          const { rtlTranslate: rtl } = swiper
          let e = event
          if (e.originalEvent) e = e.originalEvent // jquery fix
          const kc = e.keyCode || e.charCode
          // Directions locks
          if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40) || kc === 34)) {
            return false
          }
          if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38) || kc === 33)) {
            return false
          }
          if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
            return undefined
          }
          if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
            return undefined
          }
          if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
            let inView = false
            // Check that swiper should be inside of visible area of window
            if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
              return undefined
            }
            const windowWidth = win.innerWidth
            const windowHeight = win.innerHeight
            const swiperOffset = swiper.$el.offset()
            if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft
            const swiperCoord = [
              [swiperOffset.left, swiperOffset.top],
              [swiperOffset.left + swiper.width, swiperOffset.top],
              [swiperOffset.left, swiperOffset.top + swiper.height],
              [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]
            ]
            for (let i = 0; i < swiperCoord.length; i += 1) {
              const point = swiperCoord[i]
              if (
                point[0] >= 0 && point[0] <= windowWidth &&
          point[1] >= 0 && point[1] <= windowHeight
              ) {
                inView = true
              }
            }
            if (!inView) return undefined
          }
          if (swiper.isHorizontal()) {
            if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
              if (e.preventDefault) e.preventDefault()
              else e.returnValue = false
            }
            if (((kc === 34 || kc === 39) && !rtl) || ((kc === 33 || kc === 37) && rtl)) swiper.slideNext()
            if (((kc === 33 || kc === 37) && !rtl) || ((kc === 34 || kc === 39) && rtl)) swiper.slidePrev()
          } else {
            if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
              if (e.preventDefault) e.preventDefault()
              else e.returnValue = false
            }
            if (kc === 34 || kc === 40) swiper.slideNext()
            if (kc === 33 || kc === 38) swiper.slidePrev()
          }
          swiper.emit('keyPress', kc)
          return undefined
        },
        enable () {
          const swiper = this
          if (swiper.keyboard.enabled) return
          $(doc).on('keydown', swiper.keyboard.handle)
          swiper.keyboard.enabled = true
        },
        disable () {
          const swiper = this
          if (!swiper.keyboard.enabled) return
          $(doc).off('keydown', swiper.keyboard.handle)
          swiper.keyboard.enabled = false
        }
      }

      var Keyboard$1 = {
        name: 'keyboard',
        params: {
          keyboard: {
            enabled: false,
            onlyInViewport: true
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            keyboard: {
              enabled: false,
              enable: Keyboard.enable.bind(swiper),
              disable: Keyboard.disable.bind(swiper),
              handle: Keyboard.handle.bind(swiper)
            }
          })
        },
        on: {
          init () {
            const swiper = this
            if (swiper.params.keyboard.enabled) {
              swiper.keyboard.enable()
            }
          },
          destroy () {
            const swiper = this
            if (swiper.keyboard.enabled) {
              swiper.keyboard.disable()
            }
          }
        }
      }

      function isEventSupported () {
        const eventName = 'onwheel'
        let isSupported = eventName in doc

        if (!isSupported) {
          const element = doc.createElement('div')
          element.setAttribute(eventName, 'return;')
          isSupported = typeof element[eventName] === 'function'
        }

        if (!isSupported &&
    doc.implementation &&
    doc.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    doc.implementation.hasFeature('', '') !== true
        ) {
          // This is the only way to test support for the `wheel` event in IE9+.
          isSupported = doc.implementation.hasFeature('Events.wheel', '3.0')
        }

        return isSupported
      }
      const Mousewheel = {
        lastScrollTime: Utils.now(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: [],
        event () {
          if (win.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll'
          return isEventSupported() ? 'wheel' : 'mousewheel'
        },
        normalize (e) {
          // Reasonable defaults
          const PIXEL_STEP = 10
          const LINE_HEIGHT = 40
          const PAGE_HEIGHT = 800

          let sX = 0
          let sY = 0 // spinX, spinY
          let pX = 0
          let pY = 0 // pixelX, pixelY

          // Legacy
          if ('detail' in e) {
            sY = e.detail
          }
          if ('wheelDelta' in e) {
            sY = -e.wheelDelta / 120
          }
          if ('wheelDeltaY' in e) {
            sY = -e.wheelDeltaY / 120
          }
          if ('wheelDeltaX' in e) {
            sX = -e.wheelDeltaX / 120
          }

          // side scrolling on FF with DOMMouseScroll
          if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY
            sY = 0
          }

          pX = sX * PIXEL_STEP
          pY = sY * PIXEL_STEP

          if ('deltaY' in e) {
            pY = e.deltaY
          }
          if ('deltaX' in e) {
            pX = e.deltaX
          }

          if (e.shiftKey && !pX) { // if user scrolls with shift he wants horizontal scroll
            pX = pY
            pY = 0
          }

          if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) { // delta in LINE units
              pX *= LINE_HEIGHT
              pY *= LINE_HEIGHT
            } else { // delta in PAGE units
              pX *= PAGE_HEIGHT
              pY *= PAGE_HEIGHT
            }
          }

          // Fall-back if spin cannot be determined
          if (pX && !sX) {
            sX = (pX < 1) ? -1 : 1
          }
          if (pY && !sY) {
            sY = (pY < 1) ? -1 : 1
          }

          return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
          }
        },
        handleMouseEnter () {
          const swiper = this
          swiper.mouseEntered = true
        },
        handleMouseLeave () {
          const swiper = this
          swiper.mouseEntered = false
        },
        handle (event) {
          let e = event
          const swiper = this
          const params = swiper.params.mousewheel

          if (swiper.params.cssMode) {
            e.preventDefault()
          }

          let target = swiper.$el
          if (swiper.params.mousewheel.eventsTarged !== 'container') {
            target = $(swiper.params.mousewheel.eventsTarged)
          }
          if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true

          if (e.originalEvent) e = e.originalEvent // jquery fix
          let delta = 0
          const rtlFactor = swiper.rtlTranslate ? -1 : 1

          const data = Mousewheel.normalize(e)

          if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
              if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor
              else return true
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY
            else return true
          } else {
            delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY
          }

          if (delta === 0) return true

          if (params.invert) delta = -delta

          if (!swiper.params.freeMode) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
              time: Utils.now(),
              delta: Math.abs(delta),
              direction: Math.sign(delta),
              raw: event
            }

            // Keep the most recent events
            const recentWheelEvents = swiper.mousewheel.recentWheelEvents
            if (recentWheelEvents.length >= 2) {
              recentWheelEvents.shift() // only store the last N events
            }
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined
            recentWheelEvents.push(newEvent)

            // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
              if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta) {
                swiper.mousewheel.animateSlider(newEvent)
              }
            } else {
              swiper.mousewheel.animateSlider(newEvent)
            }

            // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (swiper.mousewheel.releaseScroll(newEvent)) {
              return true
            }
          } else {
            // Freemode or scrollContainer:

            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            const newEvent = { time: Utils.now(), delta: Math.abs(delta), direction: Math.sign(delta) }
            const { lastEventBeforeSnap } = swiper.mousewheel
            const ignoreWheelEvents = lastEventBeforeSnap &&
        newEvent.time < lastEventBeforeSnap.time + 500 &&
        newEvent.delta <= lastEventBeforeSnap.delta &&
        newEvent.direction === lastEventBeforeSnap.direction
            if (!ignoreWheelEvents) {
              swiper.mousewheel.lastEventBeforeSnap = undefined

              if (swiper.params.loop) {
                swiper.loopFix()
              }
              let position = swiper.getTranslate() + (delta * params.sensitivity)
              const wasBeginning = swiper.isBeginning
              const wasEnd = swiper.isEnd

              if (position >= swiper.minTranslate()) position = swiper.minTranslate()
              if (position <= swiper.maxTranslate()) position = swiper.maxTranslate()

              swiper.setTransition(0)
              swiper.setTranslate(position)
              swiper.updateProgress()
              swiper.updateActiveIndex()
              swiper.updateSlidesClasses()

              if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
                swiper.updateSlidesClasses()
              }

              if (swiper.params.freeModeSticky) {
                // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                // the end of a momentum scroll by storing recent (N=15?) wheel events.
                // 1. do all N events have decreasing or same (absolute value) delta?
                // 2. did all N events arrive in the last M (M=500?) msecs?
                // 3. does the earliest event have an (absolute value) delta that's
                //    at least P (P=1?) larger than the most recent event's delta?
                // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
                // Snap immediately and ignore remaining wheel events in this scroll.
                // See comment above for "remaining wheel events in this scroll" determination.
                // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                clearTimeout(swiper.mousewheel.timeout)
                swiper.mousewheel.timeout = undefined
                const recentWheelEvents = swiper.mousewheel.recentWheelEvents
                if (recentWheelEvents.length >= 15) {
                  recentWheelEvents.shift() // only store the last N events
                }
                const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined
                const firstEvent = recentWheelEvents[0]
                recentWheelEvents.push(newEvent)
                if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                  // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                  recentWheelEvents.splice(0)
                } else if (recentWheelEvents.length >= 15 &&
              newEvent.time - firstEvent.time < 500 &&
              firstEvent.delta - newEvent.delta >= 1 &&
              newEvent.delta <= 6
                ) {
                  // We're at the end of the deceleration of a momentum scroll, so there's no need
                  // to wait for more events. Snap ASAP on the next tick.
                  // Also, because there's some remaining momentum we'll bias the snap in the
                  // direction of the ongoing scroll because it's better UX for the scroll to snap
                  // in the same direction as the scroll instead of reversing to snap.  Therefore,
                  // if it's already scrolled more than 20% in the current direction, keep going.
                  const snapToThreshold = delta > 0 ? 0.8 : 0.2
                  swiper.mousewheel.lastEventBeforeSnap = newEvent
                  recentWheelEvents.splice(0)
                  swiper.mousewheel.timeout = Utils.nextTick(() => {
                    swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold)
                  }, 0) // no delay; move on next tick
                }
                if (!swiper.mousewheel.timeout) {
                  // if we get here, then we haven't detected the end of a momentum scroll, so
                  // we'll consider a scroll "complete" when there haven't been any wheel events
                  // for 500ms.
                  swiper.mousewheel.timeout = Utils.nextTick(() => {
                    const snapToThreshold = 0.5
                    swiper.mousewheel.lastEventBeforeSnap = newEvent
                    recentWheelEvents.splice(0)
                    swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold)
                  }, 500)
                }
              }

              // Emit event
              if (!ignoreWheelEvents) swiper.emit('scroll', e)

              // Stop autoplay
              if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop()
              // Return page scroll on edge positions
              if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true
            }
          }

          if (e.preventDefault) e.preventDefault()
          else e.returnValue = false
          return false
        },
        animateSlider (newEvent) {
          const swiper = this
          // If the movement is NOT big enough and
          // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
          //   Don't go any further (avoid insignificant scroll movement).
          if (newEvent.delta >= 6 && Utils.now() - swiper.mousewheel.lastScrollTime < 60) {
            // Return false as a default
            return true
          }
          // If user is scrolling towards the end:
          //   If the slider hasn't hit the latest slide or
          //   if the slider is a loop and
          //   if the slider isn't moving right now:
          //     Go to next slide and
          //     emit a scroll event.
          // Else (the user is scrolling towards the beginning) and
          // if the slider hasn't hit the first slide or
          // if the slider is a loop and
          // if the slider isn't moving right now:
          //   Go to prev slide and
          //   emit a scroll event.
          if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext()
              swiper.emit('scroll', newEvent.raw)
            }
          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev()
            swiper.emit('scroll', newEvent.raw)
          }
          // If you got here is because an animation has been triggered so store the current time
          swiper.mousewheel.lastScrollTime = (new win.Date()).getTime()
          // Return false as a default
          return false
        },
        releaseScroll (newEvent) {
          const swiper = this
          const params = swiper.params.mousewheel
          if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
              // Return true to animate scroll on edges
              return true
            }
          } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true
          }
          return false
        },
        enable () {
          const swiper = this
          const event = Mousewheel.event()
          if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle)
            return true
          }
          if (!event) return false
          if (swiper.mousewheel.enabled) return false
          let target = swiper.$el
          if (swiper.params.mousewheel.eventsTarged !== 'container') {
            target = $(swiper.params.mousewheel.eventsTarged)
          }
          target.on('mouseenter', swiper.mousewheel.handleMouseEnter)
          target.on('mouseleave', swiper.mousewheel.handleMouseLeave)
          target.on(event, swiper.mousewheel.handle)
          swiper.mousewheel.enabled = true
          return true
        },
        disable () {
          const swiper = this
          const event = Mousewheel.event()
          if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle)
            return true
          }
          if (!event) return false
          if (!swiper.mousewheel.enabled) return false
          let target = swiper.$el
          if (swiper.params.mousewheel.eventsTarged !== 'container') {
            target = $(swiper.params.mousewheel.eventsTarged)
          }
          target.off(event, swiper.mousewheel.handle)
          swiper.mousewheel.enabled = false
          return true
        }
      }

      var Mousewheel$1 = {
        name: 'mousewheel',
        params: {
          mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarged: 'container'
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            mousewheel: {
              enabled: false,
              enable: Mousewheel.enable.bind(swiper),
              disable: Mousewheel.disable.bind(swiper),
              handle: Mousewheel.handle.bind(swiper),
              handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
              handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
              animateSlider: Mousewheel.animateSlider.bind(swiper),
              releaseScroll: Mousewheel.releaseScroll.bind(swiper),
              lastScrollTime: Utils.now(),
              lastEventBeforeSnap: undefined,
              recentWheelEvents: []
            }
          })
        },
        on: {
          init () {
            const swiper = this
            if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
              swiper.mousewheel.disable()
            }
            if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable()
          },
          destroy () {
            const swiper = this
            if (swiper.params.cssMode) {
              swiper.mousewheel.enable()
            }
            if (swiper.mousewheel.enabled) swiper.mousewheel.disable()
          }
        }
      }

      const Navigation = {
        update () {
          // Update Navigation Buttons
          const swiper = this
          const params = swiper.params.navigation

          if (swiper.params.loop) return
          const { $nextEl, $prevEl } = swiper.navigation

          if ($prevEl && $prevEl.length > 0) {
            if (swiper.isBeginning) {
              $prevEl.addClass(params.disabledClass)
            } else {
              $prevEl.removeClass(params.disabledClass)
            }
            $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass)
          }
          if ($nextEl && $nextEl.length > 0) {
            if (swiper.isEnd) {
              $nextEl.addClass(params.disabledClass)
            } else {
              $nextEl.removeClass(params.disabledClass)
            }
            $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass)
          }
        },
        onPrevClick (e) {
          const swiper = this
          e.preventDefault()
          if (swiper.isBeginning && !swiper.params.loop) return
          swiper.slidePrev()
        },
        onNextClick (e) {
          const swiper = this
          e.preventDefault()
          if (swiper.isEnd && !swiper.params.loop) return
          swiper.slideNext()
        },
        init () {
          const swiper = this
          const params = swiper.params.navigation
          if (!(params.nextEl || params.prevEl)) return

          let $nextEl
          let $prevEl
          if (params.nextEl) {
            $nextEl = $(params.nextEl)
            if (
              swiper.params.uniqueNavElements &&
        typeof params.nextEl === 'string' &&
        $nextEl.length > 1 &&
        swiper.$el.find(params.nextEl).length === 1
            ) {
              $nextEl = swiper.$el.find(params.nextEl)
            }
          }
          if (params.prevEl) {
            $prevEl = $(params.prevEl)
            if (
              swiper.params.uniqueNavElements &&
        typeof params.prevEl === 'string' &&
        $prevEl.length > 1 &&
        swiper.$el.find(params.prevEl).length === 1
            ) {
              $prevEl = swiper.$el.find(params.prevEl)
            }
          }

          if ($nextEl && $nextEl.length > 0) {
            $nextEl.on('click', swiper.navigation.onNextClick)
          }
          if ($prevEl && $prevEl.length > 0) {
            $prevEl.on('click', swiper.navigation.onPrevClick)
          }

          Utils.extend(swiper.navigation, {
            $nextEl,
            nextEl: $nextEl && $nextEl[0],
            $prevEl,
            prevEl: $prevEl && $prevEl[0]
          })
        },
        destroy () {
          const swiper = this
          const { $nextEl, $prevEl } = swiper.navigation
          if ($nextEl && $nextEl.length) {
            $nextEl.off('click', swiper.navigation.onNextClick)
            $nextEl.removeClass(swiper.params.navigation.disabledClass)
          }
          if ($prevEl && $prevEl.length) {
            $prevEl.off('click', swiper.navigation.onPrevClick)
            $prevEl.removeClass(swiper.params.navigation.disabledClass)
          }
        }
      }

      var Navigation$1 = {
        name: 'navigation',
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,

            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock'
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            navigation: {
              init: Navigation.init.bind(swiper),
              update: Navigation.update.bind(swiper),
              destroy: Navigation.destroy.bind(swiper),
              onNextClick: Navigation.onNextClick.bind(swiper),
              onPrevClick: Navigation.onPrevClick.bind(swiper)
            }
          })
        },
        on: {
          init () {
            const swiper = this
            swiper.navigation.init()
            swiper.navigation.update()
          },
          toEdge () {
            const swiper = this
            swiper.navigation.update()
          },
          fromEdge () {
            const swiper = this
            swiper.navigation.update()
          },
          destroy () {
            const swiper = this
            swiper.navigation.destroy()
          },
          click (e) {
            const swiper = this
            const { $nextEl, $prevEl } = swiper.navigation
            if (
              swiper.params.navigation.hideOnClick &&
        !$(e.target).is($prevEl) &&
        !$(e.target).is($nextEl)
            ) {
              let isHidden
              if ($nextEl) {
                isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass)
              } else if ($prevEl) {
                isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass)
              }
              if (isHidden === true) {
                swiper.emit('navigationShow', swiper)
              } else {
                swiper.emit('navigationHide', swiper)
              }
              if ($nextEl) {
                $nextEl.toggleClass(swiper.params.navigation.hiddenClass)
              }
              if ($prevEl) {
                $prevEl.toggleClass(swiper.params.navigation.hiddenClass)
              }
            }
          }
        }
      }

      const Pagination = {
        update () {
          // Render || Update Pagination bullets/items
          const swiper = this
          const rtl = swiper.rtl
          const params = swiper.params.pagination
          if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return
          const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length
          const $el = swiper.pagination.$el
          // Current/Total
          let current
          const total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length
          if (swiper.params.loop) {
            current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup)
            if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
              current -= (slidesLength - (swiper.loopedSlides * 2))
            }
            if (current > total - 1) current -= total
            if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current
          } else if (typeof swiper.snapIndex !== 'undefined') {
            current = swiper.snapIndex
          } else {
            current = swiper.activeIndex || 0
          }
          // Types
          if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            const bullets = swiper.pagination.bullets
            let firstIndex
            let lastIndex
            let midIndex
            if (params.dynamicBullets) {
              swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true)
              $el.css(swiper.isHorizontal() ? 'width' : 'height', `${swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)}px`)
              if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex)
                if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
                  swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1
                } else if (swiper.pagination.dynamicBulletIndex < 0) {
                  swiper.pagination.dynamicBulletIndex = 0
                }
              }
              firstIndex = current - swiper.pagination.dynamicBulletIndex
              lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1)
              midIndex = (lastIndex + firstIndex) / 2
            }
            bullets.removeClass(`${params.bulletActiveClass} ${params.bulletActiveClass}-next ${params.bulletActiveClass}-next-next ${params.bulletActiveClass}-prev ${params.bulletActiveClass}-prev-prev ${params.bulletActiveClass}-main`)
            if ($el.length > 1) {
              bullets.each((index, bullet) => {
                const $bullet = $(bullet)
                const bulletIndex = $bullet.index()
                if (bulletIndex === current) {
                  $bullet.addClass(params.bulletActiveClass)
                }
                if (params.dynamicBullets) {
                  if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                    $bullet.addClass(`${params.bulletActiveClass}-main`)
                  }
                  if (bulletIndex === firstIndex) {
                    $bullet
                      .prev()
                      .addClass(`${params.bulletActiveClass}-prev`)
                      .prev()
                      .addClass(`${params.bulletActiveClass}-prev-prev`)
                  }
                  if (bulletIndex === lastIndex) {
                    $bullet
                      .next()
                      .addClass(`${params.bulletActiveClass}-next`)
                      .next()
                      .addClass(`${params.bulletActiveClass}-next-next`)
                  }
                }
              })
            } else {
              const $bullet = bullets.eq(current)
              const bulletIndex = $bullet.index()
              $bullet.addClass(params.bulletActiveClass)
              if (params.dynamicBullets) {
                const $firstDisplayedBullet = bullets.eq(firstIndex)
                const $lastDisplayedBullet = bullets.eq(lastIndex)
                for (let i = firstIndex; i <= lastIndex; i += 1) {
                  bullets.eq(i).addClass(`${params.bulletActiveClass}-main`)
                }
                if (swiper.params.loop) {
                  if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                    for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                      bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`)
                    }
                    bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`)
                  } else {
                    $firstDisplayedBullet
                      .prev()
                      .addClass(`${params.bulletActiveClass}-prev`)
                      .prev()
                      .addClass(`${params.bulletActiveClass}-prev-prev`)
                    $lastDisplayedBullet
                      .next()
                      .addClass(`${params.bulletActiveClass}-next`)
                      .next()
                      .addClass(`${params.bulletActiveClass}-next-next`)
                  }
                } else {
                  $firstDisplayedBullet
                    .prev()
                    .addClass(`${params.bulletActiveClass}-prev`)
                    .prev()
                    .addClass(`${params.bulletActiveClass}-prev-prev`)
                  $lastDisplayedBullet
                    .next()
                    .addClass(`${params.bulletActiveClass}-next`)
                    .next()
                    .addClass(`${params.bulletActiveClass}-next-next`)
                }
              }
            }
            if (params.dynamicBullets) {
              const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4)
              const bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize)
              const offsetProp = rtl ? 'right' : 'left'
              bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`)
            }
          }
          if (params.type === 'fraction') {
            $el.find(`.${params.currentClass}`).text(params.formatFractionCurrent(current + 1))
            $el.find(`.${params.totalClass}`).text(params.formatFractionTotal(total))
          }
          if (params.type === 'progressbar') {
            let progressbarDirection
            if (params.progressbarOpposite) {
              progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal'
            } else {
              progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical'
            }
            const scale = (current + 1) / total
            let scaleX = 1
            let scaleY = 1
            if (progressbarDirection === 'horizontal') {
              scaleX = scale
            } else {
              scaleY = scale
            }
            $el.find(`.${params.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed)
          }
          if (params.type === 'custom' && params.renderCustom) {
            $el.html(params.renderCustom(swiper, current + 1, total))
            swiper.emit('paginationRender', swiper, $el[0])
          } else {
            swiper.emit('paginationUpdate', swiper, $el[0])
          }
          $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass)
        },
        render () {
          // Render Container
          const swiper = this
          const params = swiper.params.pagination
          if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return
          const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length

          const $el = swiper.pagination.$el
          let paginationHTML = ''
          if (params.type === 'bullets') {
            const numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length
            for (let i = 0; i < numberOfBullets; i += 1) {
              if (params.renderBullet) {
                paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass)
              } else {
                paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`
              }
            }
            $el.html(paginationHTML)
            swiper.pagination.bullets = $el.find(`.${params.bulletClass}`)
          }
          if (params.type === 'fraction') {
            if (params.renderFraction) {
              paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass)
            } else {
              paginationHTML = `<span class="${params.currentClass}"></span>` +
        ' / ' +
        `<span class="${params.totalClass}"></span>`
            }
            $el.html(paginationHTML)
          }
          if (params.type === 'progressbar') {
            if (params.renderProgressbar) {
              paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass)
            } else {
              paginationHTML = `<span class="${params.progressbarFillClass}"></span>`
            }
            $el.html(paginationHTML)
          }
          if (params.type !== 'custom') {
            swiper.emit('paginationRender', swiper.pagination.$el[0])
          }
        },
        init () {
          const swiper = this
          const params = swiper.params.pagination
          if (!params.el) return

          let $el = $(params.el)
          if ($el.length === 0) return

          if (
            swiper.params.uniqueNavElements &&
      typeof params.el === 'string' &&
      $el.length > 1 &&
      swiper.$el.find(params.el).length === 1
          ) {
            $el = swiper.$el.find(params.el)
          }

          if (params.type === 'bullets' && params.clickable) {
            $el.addClass(params.clickableClass)
          }

          $el.addClass(params.modifierClass + params.type)

          if (params.type === 'bullets' && params.dynamicBullets) {
            $el.addClass(`${params.modifierClass}${params.type}-dynamic`)
            swiper.pagination.dynamicBulletIndex = 0
            if (params.dynamicMainBullets < 1) {
              params.dynamicMainBullets = 1
            }
          }
          if (params.type === 'progressbar' && params.progressbarOpposite) {
            $el.addClass(params.progressbarOppositeClass)
          }

          if (params.clickable) {
            $el.on('click', `.${params.bulletClass}`, function onClick (e) {
              e.preventDefault()
              let index = $(this).index() * swiper.params.slidesPerGroup
              if (swiper.params.loop) index += swiper.loopedSlides
              swiper.slideTo(index)
            })
          }

          Utils.extend(swiper.pagination, {
            $el,
            el: $el[0]
          })
        },
        destroy () {
          const swiper = this
          const params = swiper.params.pagination
          if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return
          const $el = swiper.pagination.$el

          $el.removeClass(params.hiddenClass)
          $el.removeClass(params.modifierClass + params.type)
          if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass)
          if (params.clickable) {
            $el.off('click', `.${params.bulletClass}`)
          }
        }
      }

      var Pagination$1 = {
        name: 'pagination',
        params: {
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number) => number,
            formatFractionTotal: (number) => number,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            modifierClass: 'swiper-pagination-', // NEW
            currentClass: 'swiper-pagination-current',
            totalClass: 'swiper-pagination-total',
            hiddenClass: 'swiper-pagination-hidden',
            progressbarFillClass: 'swiper-pagination-progressbar-fill',
            progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
            clickableClass: 'swiper-pagination-clickable', // NEW
            lockClass: 'swiper-pagination-lock'
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            pagination: {
              init: Pagination.init.bind(swiper),
              render: Pagination.render.bind(swiper),
              update: Pagination.update.bind(swiper),
              destroy: Pagination.destroy.bind(swiper),
              dynamicBulletIndex: 0
            }
          })
        },
        on: {
          init () {
            const swiper = this
            swiper.pagination.init()
            swiper.pagination.render()
            swiper.pagination.update()
          },
          activeIndexChange () {
            const swiper = this
            if (swiper.params.loop) {
              swiper.pagination.update()
            } else if (typeof swiper.snapIndex === 'undefined') {
              swiper.pagination.update()
            }
          },
          snapIndexChange () {
            const swiper = this
            if (!swiper.params.loop) {
              swiper.pagination.update()
            }
          },
          slidesLengthChange () {
            const swiper = this
            if (swiper.params.loop) {
              swiper.pagination.render()
              swiper.pagination.update()
            }
          },
          snapGridLengthChange () {
            const swiper = this
            if (!swiper.params.loop) {
              swiper.pagination.render()
              swiper.pagination.update()
            }
          },
          destroy () {
            const swiper = this
            swiper.pagination.destroy()
          },
          click (e) {
            const swiper = this
            if (
              swiper.params.pagination.el &&
        swiper.params.pagination.hideOnClick &&
        swiper.pagination.$el.length > 0 &&
        !$(e.target).hasClass(swiper.params.pagination.bulletClass)
            ) {
              const isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass)
              if (isHidden === true) {
                swiper.emit('paginationShow', swiper)
              } else {
                swiper.emit('paginationHide', swiper)
              }
              swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass)
            }
          }
        }
      }

      const Scrollbar = {
        setTranslate () {
          const swiper = this
          if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return
          const { scrollbar, rtlTranslate: rtl, progress } = swiper
          const {
            dragSize, trackSize, $dragEl, $el
          } = scrollbar
          const params = swiper.params.scrollbar

          let newSize = dragSize
          let newPos = (trackSize - dragSize) * progress
          if (rtl) {
            newPos = -newPos
            if (newPos > 0) {
              newSize = dragSize - newPos
              newPos = 0
            } else if (-newPos + dragSize > trackSize) {
              newSize = trackSize + newPos
            }
          } else if (newPos < 0) {
            newSize = dragSize + newPos
            newPos = 0
          } else if (newPos + dragSize > trackSize) {
            newSize = trackSize - newPos
          }
          if (swiper.isHorizontal()) {
            $dragEl.transform(`translate3d(${newPos}px, 0, 0)`)
            $dragEl[0].style.width = `${newSize}px`
          } else {
            $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`)
            $dragEl[0].style.height = `${newSize}px`
          }
          if (params.hide) {
            clearTimeout(swiper.scrollbar.timeout)
            $el[0].style.opacity = 1
            swiper.scrollbar.timeout = setTimeout(() => {
              $el[0].style.opacity = 0
              $el.transition(400)
            }, 1000)
          }
        },
        setTransition (duration) {
          const swiper = this
          if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return
          swiper.scrollbar.$dragEl.transition(duration)
        },
        updateSize () {
          const swiper = this
          if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return

          const { scrollbar } = swiper
          const { $dragEl, $el } = scrollbar

          $dragEl[0].style.width = ''
          $dragEl[0].style.height = ''
          const trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight

          const divider = swiper.size / swiper.virtualSize
          const moveDivider = divider * (trackSize / swiper.size)
          let dragSize
          if (swiper.params.scrollbar.dragSize === 'auto') {
            dragSize = trackSize * divider
          } else {
            dragSize = parseInt(swiper.params.scrollbar.dragSize, 10)
          }

          if (swiper.isHorizontal()) {
            $dragEl[0].style.width = `${dragSize}px`
          } else {
            $dragEl[0].style.height = `${dragSize}px`
          }

          if (divider >= 1) {
            $el[0].style.display = 'none'
          } else {
            $el[0].style.display = ''
          }
          if (swiper.params.scrollbar.hide) {
            $el[0].style.opacity = 0
          }
          Utils.extend(scrollbar, {
            trackSize,
            divider,
            moveDivider,
            dragSize
          })
          scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass)
        },
        getPointerPosition (e) {
          const swiper = this
          if (swiper.isHorizontal()) {
            return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].clientX : e.clientX)
          }
          return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].clientY : e.clientY)
        },
        setDragPosition (e) {
          const swiper = this
          const { scrollbar, rtlTranslate: rtl } = swiper
          const {
            $el,
            dragSize,
            trackSize,
            dragStartPos
          } = scrollbar

          let positionRatio
          positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] -
      (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize)
          positionRatio = Math.max(Math.min(positionRatio, 1), 0)
          if (rtl) {
            positionRatio = 1 - positionRatio
          }

          const position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio)

          swiper.updateProgress(position)
          swiper.setTranslate(position)
          swiper.updateActiveIndex()
          swiper.updateSlidesClasses()
        },
        onDragStart (e) {
          const swiper = this
          const params = swiper.params.scrollbar
          const { scrollbar, $wrapperEl } = swiper
          const { $el, $dragEl } = scrollbar
          swiper.scrollbar.isTouched = true
          swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl)
            ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null
          e.preventDefault()
          e.stopPropagation()

          $wrapperEl.transition(100)
          $dragEl.transition(100)
          scrollbar.setDragPosition(e)

          clearTimeout(swiper.scrollbar.dragTimeout)

          $el.transition(0)
          if (params.hide) {
            $el.css('opacity', 1)
          }
          if (swiper.params.cssMode) {
            swiper.$wrapperEl.css('scroll-snap-type', 'none')
          }
          swiper.emit('scrollbarDragStart', e)
        },
        onDragMove (e) {
          const swiper = this
          const { scrollbar, $wrapperEl } = swiper
          const { $el, $dragEl } = scrollbar

          if (!swiper.scrollbar.isTouched) return
          if (e.preventDefault) e.preventDefault()
          else e.returnValue = false
          scrollbar.setDragPosition(e)
          $wrapperEl.transition(0)
          $el.transition(0)
          $dragEl.transition(0)
          swiper.emit('scrollbarDragMove', e)
        },
        onDragEnd (e) {
          const swiper = this

          const params = swiper.params.scrollbar
          const { scrollbar, $wrapperEl } = swiper
          const { $el } = scrollbar

          if (!swiper.scrollbar.isTouched) return
          swiper.scrollbar.isTouched = false
          if (swiper.params.cssMode) {
            swiper.$wrapperEl.css('scroll-snap-type', '')
            $wrapperEl.transition('')
          }
          if (params.hide) {
            clearTimeout(swiper.scrollbar.dragTimeout)
            swiper.scrollbar.dragTimeout = Utils.nextTick(() => {
              $el.css('opacity', 0)
              $el.transition(400)
            }, 1000)
          }
          swiper.emit('scrollbarDragEnd', e)
          if (params.snapOnRelease) {
            swiper.slideToClosest()
          }
        },
        enableDraggable () {
          const swiper = this
          if (!swiper.params.scrollbar.el) return
          const {
            scrollbar, touchEventsTouch, touchEventsDesktop, params
          } = swiper
          const $el = scrollbar.$el
          const target = $el[0]
          const activeListener = swiper_esm_bundle_Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false
          const passiveListener = swiper_esm_bundle_Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false
          if (!swiper_esm_bundle_Support.touch) {
            target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener)
            doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener)
            doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener)
          } else {
            target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener)
            target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener)
            target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener)
          }
        },
        disableDraggable () {
          const swiper = this
          if (!swiper.params.scrollbar.el) return
          const {
            scrollbar, touchEventsTouch, touchEventsDesktop, params
          } = swiper
          const $el = scrollbar.$el
          const target = $el[0]
          const activeListener = swiper_esm_bundle_Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false
          const passiveListener = swiper_esm_bundle_Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false
          if (!swiper_esm_bundle_Support.touch) {
            target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener)
            doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener)
            doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener)
          } else {
            target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener)
            target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener)
            target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener)
          }
        },
        init () {
          const swiper = this
          if (!swiper.params.scrollbar.el) return
          const { scrollbar, $el: $swiperEl } = swiper
          const params = swiper.params.scrollbar

          let $el = $(params.el)
          if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
            $el = $swiperEl.find(params.el)
          }

          let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`)
          if ($dragEl.length === 0) {
            $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`)
            $el.append($dragEl)
          }

          Utils.extend(scrollbar, {
            $el,
            el: $el[0],
            $dragEl,
            dragEl: $dragEl[0]
          })

          if (params.draggable) {
            scrollbar.enableDraggable()
          }
        },
        destroy () {
          const swiper = this
          swiper.scrollbar.disableDraggable()
        }
      }

      var Scrollbar$1 = {
        name: 'scrollbar',
        params: {
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag'
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            scrollbar: {
              init: Scrollbar.init.bind(swiper),
              destroy: Scrollbar.destroy.bind(swiper),
              updateSize: Scrollbar.updateSize.bind(swiper),
              setTranslate: Scrollbar.setTranslate.bind(swiper),
              setTransition: Scrollbar.setTransition.bind(swiper),
              enableDraggable: Scrollbar.enableDraggable.bind(swiper),
              disableDraggable: Scrollbar.disableDraggable.bind(swiper),
              setDragPosition: Scrollbar.setDragPosition.bind(swiper),
              getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
              onDragStart: Scrollbar.onDragStart.bind(swiper),
              onDragMove: Scrollbar.onDragMove.bind(swiper),
              onDragEnd: Scrollbar.onDragEnd.bind(swiper),
              isTouched: false,
              timeout: null,
              dragTimeout: null
            }
          })
        },
        on: {
          init () {
            const swiper = this
            swiper.scrollbar.init()
            swiper.scrollbar.updateSize()
            swiper.scrollbar.setTranslate()
          },
          update () {
            const swiper = this
            swiper.scrollbar.updateSize()
          },
          resize () {
            const swiper = this
            swiper.scrollbar.updateSize()
          },
          observerUpdate () {
            const swiper = this
            swiper.scrollbar.updateSize()
          },
          setTranslate () {
            const swiper = this
            swiper.scrollbar.setTranslate()
          },
          setTransition (duration) {
            const swiper = this
            swiper.scrollbar.setTransition(duration)
          },
          destroy () {
            const swiper = this
            swiper.scrollbar.destroy()
          }
        }
      }

      const Parallax = {
        setTransform (el, progress) {
          const swiper = this
          const { rtl } = swiper

          const $el = $(el)
          const rtlFactor = rtl ? -1 : 1

          const p = $el.attr('data-swiper-parallax') || '0'
          let x = $el.attr('data-swiper-parallax-x')
          let y = $el.attr('data-swiper-parallax-y')
          const scale = $el.attr('data-swiper-parallax-scale')
          const opacity = $el.attr('data-swiper-parallax-opacity')

          if (x || y) {
            x = x || '0'
            y = y || '0'
          } else if (swiper.isHorizontal()) {
            x = p
            y = '0'
          } else {
            y = p
            x = '0'
          }

          if ((x).indexOf('%') >= 0) {
            x = `${parseInt(x, 10) * progress * rtlFactor}%`
          } else {
            x = `${x * progress * rtlFactor}px`
          }
          if ((y).indexOf('%') >= 0) {
            y = `${parseInt(y, 10) * progress}%`
          } else {
            y = `${y * progress}px`
          }

          if (typeof opacity !== 'undefined' && opacity !== null) {
            const currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)))
            $el[0].style.opacity = currentOpacity
          }
          if (typeof scale === 'undefined' || scale === null) {
            $el.transform(`translate3d(${x}, ${y}, 0px)`)
          } else {
            const currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)))
            $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`)
          }
        },
        setTranslate () {
          const swiper = this
          const {
            $el, slides, progress, snapGrid
          } = swiper
          $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
            .each((index, el) => {
              swiper.parallax.setTransform(el, progress)
            })
          slides.each((slideIndex, slideEl) => {
            let slideProgress = slideEl.progress
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
              slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1))
            }
            slideProgress = Math.min(Math.max(slideProgress, -1), 1)
            $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
              .each((index, el) => {
                swiper.parallax.setTransform(el, slideProgress)
              })
          })
        },
        setTransition (duration = this.params.speed) {
          const swiper = this
          const { $el } = swiper
          $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
            .each((index, parallaxEl) => {
              const $parallaxEl = $(parallaxEl)
              let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration
              if (duration === 0) parallaxDuration = 0
              $parallaxEl.transition(parallaxDuration)
            })
        }
      }

      var Parallax$1 = {
        name: 'parallax',
        params: {
          parallax: {
            enabled: false
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            parallax: {
              setTransform: Parallax.setTransform.bind(swiper),
              setTranslate: Parallax.setTranslate.bind(swiper),
              setTransition: Parallax.setTransition.bind(swiper)
            }
          })
        },
        on: {
          beforeInit () {
            const swiper = this
            if (!swiper.params.parallax.enabled) return
            swiper.params.watchSlidesProgress = true
            swiper.originalParams.watchSlidesProgress = true
          },
          init () {
            const swiper = this
            if (!swiper.params.parallax.enabled) return
            swiper.parallax.setTranslate()
          },
          setTranslate () {
            const swiper = this
            if (!swiper.params.parallax.enabled) return
            swiper.parallax.setTranslate()
          },
          setTransition (duration) {
            const swiper = this
            if (!swiper.params.parallax.enabled) return
            swiper.parallax.setTransition(duration)
          }
        }
      }

      const Zoom = {
        // Calc Scale From Multi-touches
        getDistanceBetweenTouches (e) {
          if (e.targetTouches.length < 2) return 1
          const x1 = e.targetTouches[0].pageX
          const y1 = e.targetTouches[0].pageY
          const x2 = e.targetTouches[1].pageX
          const y2 = e.targetTouches[1].pageY
          const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
          return distance
        },
        // Events
        onGestureStart (e) {
          const swiper = this
          const params = swiper.params.zoom
          const zoom = swiper.zoom
          const { gesture } = zoom
          zoom.fakeGestureTouched = false
          zoom.fakeGestureMoved = false
          if (!swiper_esm_bundle_Support.gestures) {
            if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
              return
            }
            zoom.fakeGestureTouched = true
            gesture.scaleStart = Zoom.getDistanceBetweenTouches(e)
          }
          if (!gesture.$slideEl || !gesture.$slideEl.length) {
            gesture.$slideEl = $(e.target).closest('.swiper-slide')
            if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex)
            gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas')
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`)
            gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio
            if (gesture.$imageWrapEl.length === 0) {
              gesture.$imageEl = undefined
              return
            }
          }
          gesture.$imageEl.transition(0)
          swiper.zoom.isScaling = true
        },
        onGestureChange (e) {
          const swiper = this
          const params = swiper.params.zoom
          const zoom = swiper.zoom
          const { gesture } = zoom
          if (!swiper_esm_bundle_Support.gestures) {
            if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
              return
            }
            zoom.fakeGestureMoved = true
            gesture.scaleMove = Zoom.getDistanceBetweenTouches(e)
          }
          if (!gesture.$imageEl || gesture.$imageEl.length === 0) return
          if (swiper_esm_bundle_Support.gestures) {
            zoom.scale = e.scale * zoom.currentScale
          } else {
            zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale
          }
          if (zoom.scale > gesture.maxRatio) {
            zoom.scale = (gesture.maxRatio - 1) + (((zoom.scale - gesture.maxRatio) + 1) ** 0.5)
          }
          if (zoom.scale < params.minRatio) {
            zoom.scale = (params.minRatio + 1) - (((params.minRatio - zoom.scale) + 1) ** 0.5)
          }
          gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`)
        },
        onGestureEnd (e) {
          const swiper = this
          const params = swiper.params.zoom
          const zoom = swiper.zoom
          const { gesture } = zoom
          if (!swiper_esm_bundle_Support.gestures) {
            if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
              return
            }
            if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !swiper_esm_bundle_Device.android)) {
              return
            }
            zoom.fakeGestureTouched = false
            zoom.fakeGestureMoved = false
          }
          if (!gesture.$imageEl || gesture.$imageEl.length === 0) return
          zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio)
          gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`)
          zoom.currentScale = zoom.scale
          zoom.isScaling = false
          if (zoom.scale === 1) gesture.$slideEl = undefined
        },
        onTouchStart (e) {
          const swiper = this
          const zoom = swiper.zoom
          const { gesture, image } = zoom
          if (!gesture.$imageEl || gesture.$imageEl.length === 0) return
          if (image.isTouched) return
          if (swiper_esm_bundle_Device.android) e.preventDefault()
          image.isTouched = true
          image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX
          image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY
        },
        onTouchMove (e) {
          const swiper = this
          const zoom = swiper.zoom
          const { gesture, image, velocity } = zoom
          if (!gesture.$imageEl || gesture.$imageEl.length === 0) return
          swiper.allowClick = false
          if (!image.isTouched || !gesture.$slideEl) return

          if (!image.isMoved) {
            image.width = gesture.$imageEl[0].offsetWidth
            image.height = gesture.$imageEl[0].offsetHeight
            image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0
            image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0
            gesture.slideWidth = gesture.$slideEl[0].offsetWidth
            gesture.slideHeight = gesture.$slideEl[0].offsetHeight
            gesture.$imageWrapEl.transition(0)
            if (swiper.rtl) {
              image.startX = -image.startX
              image.startY = -image.startY
            }
          }
          // Define if we need image drag
          const scaledWidth = image.width * zoom.scale
          const scaledHeight = image.height * zoom.scale

          if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return

          image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0)
          image.maxX = -image.minX
          image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0)
          image.maxY = -image.minY

          image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX
          image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY

          if (!image.isMoved && !zoom.isScaling) {
            if (
              swiper.isHorizontal() &&
        (
          (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x) ||
          (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
        )
            ) {
              image.isTouched = false
              return
            } if (
              !swiper.isHorizontal() &&
        (
          (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y) ||
          (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
        )
            ) {
              image.isTouched = false
              return
            }
          }
          e.preventDefault()
          e.stopPropagation()

          image.isMoved = true
          image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX
          image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY

          if (image.currentX < image.minX) {
            image.currentX = (image.minX + 1) - (((image.minX - image.currentX) + 1) ** 0.8)
          }
          if (image.currentX > image.maxX) {
            image.currentX = (image.maxX - 1) + (((image.currentX - image.maxX) + 1) ** 0.8)
          }

          if (image.currentY < image.minY) {
            image.currentY = (image.minY + 1) - (((image.minY - image.currentY) + 1) ** 0.8)
          }
          if (image.currentY > image.maxY) {
            image.currentY = (image.maxY - 1) + (((image.currentY - image.maxY) + 1) ** 0.8)
          }

          // Velocity
          if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x
          if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y
          if (!velocity.prevTime) velocity.prevTime = Date.now()
          velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2
          velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2
          if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0
          if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0
          velocity.prevPositionX = image.touchesCurrent.x
          velocity.prevPositionY = image.touchesCurrent.y
          velocity.prevTime = Date.now()

          gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`)
        },
        onTouchEnd () {
          const swiper = this
          const zoom = swiper.zoom
          const { gesture, image, velocity } = zoom
          if (!gesture.$imageEl || gesture.$imageEl.length === 0) return
          if (!image.isTouched || !image.isMoved) {
            image.isTouched = false
            image.isMoved = false
            return
          }
          image.isTouched = false
          image.isMoved = false
          let momentumDurationX = 300
          let momentumDurationY = 300
          const momentumDistanceX = velocity.x * momentumDurationX
          const newPositionX = image.currentX + momentumDistanceX
          const momentumDistanceY = velocity.y * momentumDurationY
          const newPositionY = image.currentY + momentumDistanceY

          // Fix duration
          if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x)
          if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y)
          const momentumDuration = Math.max(momentumDurationX, momentumDurationY)

          image.currentX = newPositionX
          image.currentY = newPositionY

          // Define if we need image drag
          const scaledWidth = image.width * zoom.scale
          const scaledHeight = image.height * zoom.scale
          image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0)
          image.maxX = -image.minX
          image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0)
          image.maxY = -image.minY
          image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX)
          image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY)

          gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`)
        },
        onTransitionEnd () {
          const swiper = this
          const zoom = swiper.zoom
          const { gesture } = zoom
          if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
            gesture.$imageEl.transform('translate3d(0,0,0) scale(1)')
            gesture.$imageWrapEl.transform('translate3d(0,0,0)')

            zoom.scale = 1
            zoom.currentScale = 1

            gesture.$slideEl = undefined
            gesture.$imageEl = undefined
            gesture.$imageWrapEl = undefined
          }
        },
        // Toggle Zoom
        toggle (e) {
          const swiper = this
          const zoom = swiper.zoom

          if (zoom.scale && zoom.scale !== 1) {
            // Zoom Out
            zoom.out()
          } else {
            // Zoom In
            zoom.in(e)
          }
        },
        in (e) {
          const swiper = this

          const zoom = swiper.zoom
          const params = swiper.params.zoom
          const { gesture, image } = zoom

          if (!gesture.$slideEl) {
            gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex)
            gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas')
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`)
          }
          if (!gesture.$imageEl || gesture.$imageEl.length === 0) return

          gesture.$slideEl.addClass(`${params.zoomedSlideClass}`)

          let touchX
          let touchY
          let offsetX
          let offsetY
          let diffX
          let diffY
          let translateX
          let translateY
          let imageWidth
          let imageHeight
          let scaledWidth
          let scaledHeight
          let translateMinX
          let translateMinY
          let translateMaxX
          let translateMaxY
          let slideWidth
          let slideHeight

          if (typeof image.touchesStart.x === 'undefined' && e) {
            touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX
            touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY
          } else {
            touchX = image.touchesStart.x
            touchY = image.touchesStart.y
          }

          zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio
          zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio
          if (e) {
            slideWidth = gesture.$slideEl[0].offsetWidth
            slideHeight = gesture.$slideEl[0].offsetHeight
            offsetX = gesture.$slideEl.offset().left
            offsetY = gesture.$slideEl.offset().top
            diffX = (offsetX + (slideWidth / 2)) - touchX
            diffY = (offsetY + (slideHeight / 2)) - touchY

            imageWidth = gesture.$imageEl[0].offsetWidth
            imageHeight = gesture.$imageEl[0].offsetHeight
            scaledWidth = imageWidth * zoom.scale
            scaledHeight = imageHeight * zoom.scale

            translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0)
            translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0)
            translateMaxX = -translateMinX
            translateMaxY = -translateMinY

            translateX = diffX * zoom.scale
            translateY = diffY * zoom.scale

            if (translateX < translateMinX) {
              translateX = translateMinX
            }
            if (translateX > translateMaxX) {
              translateX = translateMaxX
            }

            if (translateY < translateMinY) {
              translateY = translateMinY
            }
            if (translateY > translateMaxY) {
              translateY = translateMaxY
            }
          } else {
            translateX = 0
            translateY = 0
          }
          gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`)
          gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`)
        },
        out () {
          const swiper = this

          const zoom = swiper.zoom
          const params = swiper.params.zoom
          const { gesture } = zoom

          if (!gesture.$slideEl) {
            gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex)
            gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas')
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`)
          }
          if (!gesture.$imageEl || gesture.$imageEl.length === 0) return

          zoom.scale = 1
          zoom.currentScale = 1
          gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)')
          gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)')
          gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`)
          gesture.$slideEl = undefined
        },
        // Attach/Detach Events
        enable () {
          const swiper = this
          const zoom = swiper.zoom
          if (zoom.enabled) return
          zoom.enabled = true

          const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper_esm_bundle_Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false
          const activeListenerWithCapture = swiper_esm_bundle_Support.passiveListener ? { passive: false, capture: true } : true

          // Scale image
          if (swiper_esm_bundle_Support.gestures) {
            swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener)
            swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener)
            swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener)
          } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener)
            swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, activeListenerWithCapture)
            swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener)
            if (swiper.touchEvents.cancel) {
              swiper.$wrapperEl.on(swiper.touchEvents.cancel, '.swiper-slide', zoom.onGestureEnd, passiveListener)
            }
          }

          // Move image
          swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove, activeListenerWithCapture)
        },
        disable () {
          const swiper = this
          const zoom = swiper.zoom
          if (!zoom.enabled) return

          swiper.zoom.enabled = false

          const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper_esm_bundle_Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false
          const activeListenerWithCapture = swiper_esm_bundle_Support.passiveListener ? { passive: false, capture: true } : true

          // Scale image
          if (swiper_esm_bundle_Support.gestures) {
            swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener)
            swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener)
            swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener)
          } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener)
            swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, activeListenerWithCapture)
            swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener)
            if (swiper.touchEvents.cancel) {
              swiper.$wrapperEl.off(swiper.touchEvents.cancel, '.swiper-slide', zoom.onGestureEnd, passiveListener)
            }
          }

          // Move image
          swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove, activeListenerWithCapture)
        }
      }

      var Zoom$1 = {
        name: 'zoom',
        params: {
          zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed'
          }
        },
        create () {
          const swiper = this
          const zoom = {
            enabled: false,
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
              $slideEl: undefined,
              slideWidth: undefined,
              slideHeight: undefined,
              $imageEl: undefined,
              $imageWrapEl: undefined,
              maxRatio: 3
            },
            image: {
              isTouched: undefined,
              isMoved: undefined,
              currentX: undefined,
              currentY: undefined,
              minX: undefined,
              minY: undefined,
              maxX: undefined,
              maxY: undefined,
              width: undefined,
              height: undefined,
              startX: undefined,
              startY: undefined,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: undefined,
              y: undefined,
              prevPositionX: undefined,
              prevPositionY: undefined,
              prevTime: undefined
            }
          };

          ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach((methodName) => {
            zoom[methodName] = Zoom[methodName].bind(swiper)
          })
          Utils.extend(swiper, {
            zoom
          })

          let scale = 1
          Object.defineProperty(swiper.zoom, 'scale', {
            get () {
              return scale
            },
            set (value) {
              if (scale !== value) {
                const imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined
                const slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined
                swiper.emit('zoomChange', value, imageEl, slideEl)
              }
              scale = value
            }
          })
        },
        on: {
          init () {
            const swiper = this
            if (swiper.params.zoom.enabled) {
              swiper.zoom.enable()
            }
          },
          destroy () {
            const swiper = this
            swiper.zoom.disable()
          },
          touchStart (e) {
            const swiper = this
            if (!swiper.zoom.enabled) return
            swiper.zoom.onTouchStart(e)
          },
          touchEnd (e) {
            const swiper = this
            if (!swiper.zoom.enabled) return
            swiper.zoom.onTouchEnd(e)
          },
          doubleTap (e) {
            const swiper = this
            if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
              swiper.zoom.toggle(e)
            }
          },
          transitionEnd () {
            const swiper = this
            if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
              swiper.zoom.onTransitionEnd()
            }
          },
          slideChange () {
            const swiper = this
            if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
              swiper.zoom.onTransitionEnd()
            }
          }
        }
      }

      const Lazy = {
        loadInSlide (index, loadInDuplicate = true) {
          const swiper = this
          const params = swiper.params.lazy
          if (typeof index === 'undefined') return
          if (swiper.slides.length === 0) return
          const isVirtual = swiper.virtual && swiper.params.virtual.enabled

          const $slideEl = isVirtual
            ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`)
            : swiper.slides.eq(index)

          let $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`)
          if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
            $images = $images.add($slideEl[0])
          }
          if ($images.length === 0) return

          $images.each((imageIndex, imageEl) => {
            const $imageEl = $(imageEl)
            $imageEl.addClass(params.loadingClass)

            const background = $imageEl.attr('data-background')
            const src = $imageEl.attr('data-src')
            const srcset = $imageEl.attr('data-srcset')
            const sizes = $imageEl.attr('data-sizes')

            swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, () => {
              if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) return
              if (background) {
                $imageEl.css('background-image', `url("${background}")`)
                $imageEl.removeAttr('data-background')
              } else {
                if (srcset) {
                  $imageEl.attr('srcset', srcset)
                  $imageEl.removeAttr('data-srcset')
                }
                if (sizes) {
                  $imageEl.attr('sizes', sizes)
                  $imageEl.removeAttr('data-sizes')
                }
                if (src) {
                  $imageEl.attr('src', src)
                  $imageEl.removeAttr('data-src')
                }
              }

              $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass)
              $slideEl.find(`.${params.preloaderClass}`).remove()
              if (swiper.params.loop && loadInDuplicate) {
                const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index')
                if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                  const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`)
                  swiper.lazy.loadInSlide(originalSlide.index(), false)
                } else {
                  const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`)
                  swiper.lazy.loadInSlide(duplicatedSlide.index(), false)
                }
              }
              swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0])
            })

            swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0])
          })
        },
        load () {
          const swiper = this
          const {
            $wrapperEl, params: swiperParams, slides, activeIndex
          } = swiper
          const isVirtual = swiper.virtual && swiperParams.virtual.enabled
          const params = swiperParams.lazy

          let slidesPerView = swiperParams.slidesPerView
          if (slidesPerView === 'auto') {
            slidesPerView = 0
          }

          function slideExist (index) {
            if (isVirtual) {
              if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
                return true
              }
            } else if (slides[index]) return true
            return false
          }
          function slideIndex (slideEl) {
            if (isVirtual) {
              return $(slideEl).attr('data-swiper-slide-index')
            }
            return $(slideEl).index()
          }

          if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true
          if (swiper.params.watchSlidesVisibility) {
            $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((elIndex, slideEl) => {
              const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index()
              swiper.lazy.loadInSlide(index)
            })
          } else if (slidesPerView > 1) {
            for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
              if (slideExist(i)) swiper.lazy.loadInSlide(i)
            }
          } else {
            swiper.lazy.loadInSlide(activeIndex)
          }
          if (params.loadPrevNext) {
            if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
              const amount = params.loadPrevNextAmount
              const spv = slidesPerView
              const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length)
              const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0)
              // Next Slides
              for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
                if (slideExist(i)) swiper.lazy.loadInSlide(i)
              }
              // Prev Slides
              for (let i = minIndex; i < activeIndex; i += 1) {
                if (slideExist(i)) swiper.lazy.loadInSlide(i)
              }
            } else {
              const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`)
              if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide))

              const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`)
              if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide))
            }
          }
        }
      }

      var Lazy$1 = {
        name: 'lazy',
        params: {
          lazy: {
            enabled: false,
            loadPrevNext: false,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: false,

            elementClass: 'swiper-lazy',
            loadingClass: 'swiper-lazy-loading',
            loadedClass: 'swiper-lazy-loaded',
            preloaderClass: 'swiper-lazy-preloader'
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            lazy: {
              initialImageLoaded: false,
              load: Lazy.load.bind(swiper),
              loadInSlide: Lazy.loadInSlide.bind(swiper)
            }
          })
        },
        on: {
          beforeInit () {
            const swiper = this
            if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
              swiper.params.preloadImages = false
            }
          },
          init () {
            const swiper = this
            if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
              swiper.lazy.load()
            }
          },
          scroll () {
            const swiper = this
            if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
              swiper.lazy.load()
            }
          },
          resize () {
            const swiper = this
            if (swiper.params.lazy.enabled) {
              swiper.lazy.load()
            }
          },
          scrollbarDragMove () {
            const swiper = this
            if (swiper.params.lazy.enabled) {
              swiper.lazy.load()
            }
          },
          transitionStart () {
            const swiper = this
            if (swiper.params.lazy.enabled) {
              if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
                swiper.lazy.load()
              }
            }
          },
          transitionEnd () {
            const swiper = this
            if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
              swiper.lazy.load()
            }
          },
          slideChange () {
            const swiper = this
            if (swiper.params.lazy.enabled && swiper.params.cssMode) {
              swiper.lazy.load()
            }
          }
        }
      }

      /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

      const Controller = {
        LinearSpline: function LinearSpline (x, y) {
          const binarySearch = (function search () {
            let maxIndex
            let minIndex
            let guess
            return (array, val) => {
              minIndex = -1
              maxIndex = array.length
              while (maxIndex - minIndex > 1) {
                guess = maxIndex + minIndex >> 1
                if (array[guess] <= val) {
                  minIndex = guess
                } else {
                  maxIndex = guess
                }
              }
              return maxIndex
            }
          }())
          this.x = x
          this.y = y
          this.lastIndex = x.length - 1
          // Given an x value (x2), return the expected y2 value:
          // (x1,y1) is the known point before given value,
          // (x3,y3) is the known point after given value.
          let i1
          let i3

          this.interpolate = function interpolate (x2) {
            if (!x2) return 0

            // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2)
            i1 = i3 - 1

            // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1]
          }
          return this
        },
        // xxx: for now i will just save one spline function to to
        getInterpolateFunction (c) {
          const swiper = this
          if (!swiper.controller.spline) {
            swiper.controller.spline = swiper.params.loop
              ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
              : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid)
          }
        },
        setTranslate (setTranslate, byController) {
          const swiper = this
          const controlled = swiper.controller.control
          let multiplier
          let controlledTranslate
          function setControlledTranslate (c) {
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate
            if (swiper.params.controller.by === 'slide') {
              swiper.controller.getInterpolateFunction(c)
              // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
              // but it did not work out
              controlledTranslate = -swiper.controller.spline.interpolate(-translate)
            }

            if (!controlledTranslate || swiper.params.controller.by === 'container') {
              multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate())
              controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate()
            }

            if (swiper.params.controller.inverse) {
              controlledTranslate = c.maxTranslate() - controlledTranslate
            }
            c.updateProgress(controlledTranslate)
            c.setTranslate(controlledTranslate, swiper)
            c.updateActiveIndex()
            c.updateSlidesClasses()
          }
          if (Array.isArray(controlled)) {
            for (let i = 0; i < controlled.length; i += 1) {
              if (controlled[i] !== byController && controlled[i] instanceof swiper_esm_bundle_Swiper) {
                setControlledTranslate(controlled[i])
              }
            }
          } else if (controlled instanceof swiper_esm_bundle_Swiper && byController !== controlled) {
            setControlledTranslate(controlled)
          }
        },
        setTransition (duration, byController) {
          const swiper = this
          const controlled = swiper.controller.control
          let i
          function setControlledTransition (c) {
            c.setTransition(duration, swiper)
            if (duration !== 0) {
              c.transitionStart()
              if (c.params.autoHeight) {
                Utils.nextTick(() => {
                  c.updateAutoHeight()
                })
              }
              c.$wrapperEl.transitionEnd(() => {
                if (!controlled) return
                if (c.params.loop && swiper.params.controller.by === 'slide') {
                  c.loopFix()
                }
                c.transitionEnd()
              })
            }
          }
          if (Array.isArray(controlled)) {
            for (i = 0; i < controlled.length; i += 1) {
              if (controlled[i] !== byController && controlled[i] instanceof swiper_esm_bundle_Swiper) {
                setControlledTransition(controlled[i])
              }
            }
          } else if (controlled instanceof swiper_esm_bundle_Swiper && byController !== controlled) {
            setControlledTransition(controlled)
          }
        }
      }
      var Controller$1 = {
        name: 'controller',
        params: {
          controller: {
            control: undefined,
            inverse: false,
            by: 'slide' // or 'container'
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            controller: {
              control: swiper.params.controller.control,
              getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
              setTranslate: Controller.setTranslate.bind(swiper),
              setTransition: Controller.setTransition.bind(swiper)
            }
          })
        },
        on: {
          update () {
            const swiper = this
            if (!swiper.controller.control) return
            if (swiper.controller.spline) {
              swiper.controller.spline = undefined
              delete swiper.controller.spline
            }
          },
          resize () {
            const swiper = this
            if (!swiper.controller.control) return
            if (swiper.controller.spline) {
              swiper.controller.spline = undefined
              delete swiper.controller.spline
            }
          },
          observerUpdate () {
            const swiper = this
            if (!swiper.controller.control) return
            if (swiper.controller.spline) {
              swiper.controller.spline = undefined
              delete swiper.controller.spline
            }
          },
          setTranslate (translate, byController) {
            const swiper = this
            if (!swiper.controller.control) return
            swiper.controller.setTranslate(translate, byController)
          },
          setTransition (duration, byController) {
            const swiper = this
            if (!swiper.controller.control) return
            swiper.controller.setTransition(duration, byController)
          }
        }
      }

      const a11y = {
        makeElFocusable ($el) {
          $el.attr('tabIndex', '0')
          return $el
        },
        addElRole ($el, role) {
          $el.attr('role', role)
          return $el
        },
        addElLabel ($el, label) {
          $el.attr('aria-label', label)
          return $el
        },
        disableEl ($el) {
          $el.attr('aria-disabled', true)
          return $el
        },
        enableEl ($el) {
          $el.attr('aria-disabled', false)
          return $el
        },
        onEnterKey (e) {
          const swiper = this
          const params = swiper.params.a11y
          if (e.keyCode !== 13) return
          const $targetEl = $(e.target)
          if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
            if (!(swiper.isEnd && !swiper.params.loop)) {
              swiper.slideNext()
            }
            if (swiper.isEnd) {
              swiper.a11y.notify(params.lastSlideMessage)
            } else {
              swiper.a11y.notify(params.nextSlideMessage)
            }
          }
          if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
            if (!(swiper.isBeginning && !swiper.params.loop)) {
              swiper.slidePrev()
            }
            if (swiper.isBeginning) {
              swiper.a11y.notify(params.firstSlideMessage)
            } else {
              swiper.a11y.notify(params.prevSlideMessage)
            }
          }
          if (swiper.pagination && $targetEl.is(`.${swiper.params.pagination.bulletClass}`)) {
            $targetEl[0].click()
          }
        },
        notify (message) {
          const swiper = this
          const notification = swiper.a11y.liveRegion
          if (notification.length === 0) return
          notification.html('')
          notification.html(message)
        },
        updateNavigation () {
          const swiper = this

          if (swiper.params.loop || !swiper.navigation) return
          const { $nextEl, $prevEl } = swiper.navigation

          if ($prevEl && $prevEl.length > 0) {
            if (swiper.isBeginning) {
              swiper.a11y.disableEl($prevEl)
            } else {
              swiper.a11y.enableEl($prevEl)
            }
          }
          if ($nextEl && $nextEl.length > 0) {
            if (swiper.isEnd) {
              swiper.a11y.disableEl($nextEl)
            } else {
              swiper.a11y.enableEl($nextEl)
            }
          }
        },
        updatePagination () {
          const swiper = this
          const params = swiper.params.a11y
          if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
            swiper.pagination.bullets.each((bulletIndex, bulletEl) => {
              const $bulletEl = $(bulletEl)
              swiper.a11y.makeElFocusable($bulletEl)
              swiper.a11y.addElRole($bulletEl, 'button')
              swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1))
            })
          }
        },
        init () {
          const swiper = this

          swiper.$el.append(swiper.a11y.liveRegion)

          // Navigation
          const params = swiper.params.a11y
          let $nextEl
          let $prevEl
          if (swiper.navigation && swiper.navigation.$nextEl) {
            $nextEl = swiper.navigation.$nextEl
          }
          if (swiper.navigation && swiper.navigation.$prevEl) {
            $prevEl = swiper.navigation.$prevEl
          }
          if ($nextEl) {
            swiper.a11y.makeElFocusable($nextEl)
            swiper.a11y.addElRole($nextEl, 'button')
            swiper.a11y.addElLabel($nextEl, params.nextSlideMessage)
            $nextEl.on('keydown', swiper.a11y.onEnterKey)
          }
          if ($prevEl) {
            swiper.a11y.makeElFocusable($prevEl)
            swiper.a11y.addElRole($prevEl, 'button')
            swiper.a11y.addElLabel($prevEl, params.prevSlideMessage)
            $prevEl.on('keydown', swiper.a11y.onEnterKey)
          }

          // Pagination
          if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
            swiper.pagination.$el.on('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey)
          }
        },
        destroy () {
          const swiper = this
          if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove()

          let $nextEl
          let $prevEl
          if (swiper.navigation && swiper.navigation.$nextEl) {
            $nextEl = swiper.navigation.$nextEl
          }
          if (swiper.navigation && swiper.navigation.$prevEl) {
            $prevEl = swiper.navigation.$prevEl
          }
          if ($nextEl) {
            $nextEl.off('keydown', swiper.a11y.onEnterKey)
          }
          if ($prevEl) {
            $prevEl.off('keydown', swiper.a11y.onEnterKey)
          }

          // Pagination
          if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
            swiper.pagination.$el.off('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey)
          }
        }
      }
      var A11y = {
        name: 'a11y',
        params: {
          a11y: {
            enabled: true,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}'
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            a11y: {
              liveRegion: $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
            }
          })
          Object.keys(a11y).forEach((methodName) => {
            swiper.a11y[methodName] = a11y[methodName].bind(swiper)
          })
        },
        on: {
          init () {
            const swiper = this
            if (!swiper.params.a11y.enabled) return
            swiper.a11y.init()
            swiper.a11y.updateNavigation()
          },
          toEdge () {
            const swiper = this
            if (!swiper.params.a11y.enabled) return
            swiper.a11y.updateNavigation()
          },
          fromEdge () {
            const swiper = this
            if (!swiper.params.a11y.enabled) return
            swiper.a11y.updateNavigation()
          },
          paginationUpdate () {
            const swiper = this
            if (!swiper.params.a11y.enabled) return
            swiper.a11y.updatePagination()
          },
          destroy () {
            const swiper = this
            if (!swiper.params.a11y.enabled) return
            swiper.a11y.destroy()
          }
        }
      }

      const History = {
        init () {
          const swiper = this
          if (!swiper.params.history) return
          if (!win.history || !win.history.pushState) {
            swiper.params.history.enabled = false
            swiper.params.hashNavigation.enabled = true
            return
          }
          const history = swiper.history
          history.initialized = true
          history.paths = History.getPathValues()
          if (!history.paths.key && !history.paths.value) return
          history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit)
          if (!swiper.params.history.replaceState) {
            win.addEventListener('popstate', swiper.history.setHistoryPopState)
          }
        },
        destroy () {
          const swiper = this
          if (!swiper.params.history.replaceState) {
            win.removeEventListener('popstate', swiper.history.setHistoryPopState)
          }
        },
        setHistoryPopState () {
          const swiper = this
          swiper.history.paths = History.getPathValues()
          swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false)
        },
        getPathValues () {
          const pathArray = win.location.pathname.slice(1).split('/').filter((part) => part !== '')
          const total = pathArray.length
          const key = pathArray[total - 2]
          const value = pathArray[total - 1]
          return { key, value }
        },
        setHistory (key, index) {
          const swiper = this
          if (!swiper.history.initialized || !swiper.params.history.enabled) return
          const slide = swiper.slides.eq(index)
          let value = History.slugify(slide.attr('data-history'))
          if (!win.location.pathname.includes(key)) {
            value = `${key}/${value}`
          }
          const currentState = win.history.state
          if (currentState && currentState.value === value) {
            return
          }
          if (swiper.params.history.replaceState) {
            win.history.replaceState({ value }, null, value)
          } else {
            win.history.pushState({ value }, null, value)
          }
        },
        slugify (text) {
          return text.toString()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '')
        },
        scrollToSlide (speed, value, runCallbacks) {
          const swiper = this
          if (value) {
            for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
              const slide = swiper.slides.eq(i)
              const slideHistory = History.slugify(slide.attr('data-history'))
              if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                const index = slide.index()
                swiper.slideTo(index, speed, runCallbacks)
              }
            }
          } else {
            swiper.slideTo(0, speed, runCallbacks)
          }
        }
      }

      var History$1 = {
        name: 'history',
        params: {
          history: {
            enabled: false,
            replaceState: false,
            key: 'slides'
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            history: {
              init: History.init.bind(swiper),
              setHistory: History.setHistory.bind(swiper),
              setHistoryPopState: History.setHistoryPopState.bind(swiper),
              scrollToSlide: History.scrollToSlide.bind(swiper),
              destroy: History.destroy.bind(swiper)
            }
          })
        },
        on: {
          init () {
            const swiper = this
            if (swiper.params.history.enabled) {
              swiper.history.init()
            }
          },
          destroy () {
            const swiper = this
            if (swiper.params.history.enabled) {
              swiper.history.destroy()
            }
          },
          transitionEnd () {
            const swiper = this
            if (swiper.history.initialized) {
              swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex)
            }
          },
          slideChange () {
            const swiper = this
            if (swiper.history.initialized && swiper.params.cssMode) {
              swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex)
            }
          }
        }
      }

      const HashNavigation = {
        onHashCange () {
          const swiper = this
          const newHash = doc.location.hash.replace('#', '')
          const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash')
          if (newHash !== activeSlideHash) {
            const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index()
            if (typeof newIndex === 'undefined') return
            swiper.slideTo(newIndex)
          }
        },
        setHash () {
          const swiper = this
          if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return
          if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
            win.history.replaceState(null, null, (`#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || ''))
          } else {
            const slide = swiper.slides.eq(swiper.activeIndex)
            const hash = slide.attr('data-hash') || slide.attr('data-history')
            doc.location.hash = hash || ''
          }
        },
        init () {
          const swiper = this
          if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) return
          swiper.hashNavigation.initialized = true
          const hash = doc.location.hash.replace('#', '')
          if (hash) {
            const speed = 0
            for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
              const slide = swiper.slides.eq(i)
              const slideHash = slide.attr('data-hash') || slide.attr('data-history')
              if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                const index = slide.index()
                swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true)
              }
            }
          }
          if (swiper.params.hashNavigation.watchState) {
            $(win).on('hashchange', swiper.hashNavigation.onHashCange)
          }
        },
        destroy () {
          const swiper = this
          if (swiper.params.hashNavigation.watchState) {
            $(win).off('hashchange', swiper.hashNavigation.onHashCange)
          }
        }
      }
      var HashNavigation$1 = {
        name: 'hash-navigation',
        params: {
          hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            hashNavigation: {
              initialized: false,
              init: HashNavigation.init.bind(swiper),
              destroy: HashNavigation.destroy.bind(swiper),
              setHash: HashNavigation.setHash.bind(swiper),
              onHashCange: HashNavigation.onHashCange.bind(swiper)
            }
          })
        },
        on: {
          init () {
            const swiper = this
            if (swiper.params.hashNavigation.enabled) {
              swiper.hashNavigation.init()
            }
          },
          destroy () {
            const swiper = this
            if (swiper.params.hashNavigation.enabled) {
              swiper.hashNavigation.destroy()
            }
          },
          transitionEnd () {
            const swiper = this
            if (swiper.hashNavigation.initialized) {
              swiper.hashNavigation.setHash()
            }
          },
          slideChange () {
            const swiper = this
            if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
              swiper.hashNavigation.setHash()
            }
          }
        }
      }

      /* eslint no-underscore-dangle: "off" */

      const Autoplay = {
        run () {
          const swiper = this
          const $activeSlideEl = swiper.slides.eq(swiper.activeIndex)
          let delay = swiper.params.autoplay.delay
          if ($activeSlideEl.attr('data-swiper-autoplay')) {
            delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay
          }
          clearTimeout(swiper.autoplay.timeout)
          swiper.autoplay.timeout = Utils.nextTick(() => {
            if (swiper.params.autoplay.reverseDirection) {
              if (swiper.params.loop) {
                swiper.loopFix()
                swiper.slidePrev(swiper.params.speed, true, true)
                swiper.emit('autoplay')
              } else if (!swiper.isBeginning) {
                swiper.slidePrev(swiper.params.speed, true, true)
                swiper.emit('autoplay')
              } else if (!swiper.params.autoplay.stopOnLastSlide) {
                swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true)
                swiper.emit('autoplay')
              } else {
                swiper.autoplay.stop()
              }
            } else if (swiper.params.loop) {
              swiper.loopFix()
              swiper.slideNext(swiper.params.speed, true, true)
              swiper.emit('autoplay')
            } else if (!swiper.isEnd) {
              swiper.slideNext(swiper.params.speed, true, true)
              swiper.emit('autoplay')
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
              swiper.slideTo(0, swiper.params.speed, true, true)
              swiper.emit('autoplay')
            } else {
              swiper.autoplay.stop()
            }
            if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run()
          }, delay)
        },
        start () {
          const swiper = this
          if (typeof swiper.autoplay.timeout !== 'undefined') return false
          if (swiper.autoplay.running) return false
          swiper.autoplay.running = true
          swiper.emit('autoplayStart')
          swiper.autoplay.run()
          return true
        },
        stop () {
          const swiper = this
          if (!swiper.autoplay.running) return false
          if (typeof swiper.autoplay.timeout === 'undefined') return false

          if (swiper.autoplay.timeout) {
            clearTimeout(swiper.autoplay.timeout)
            swiper.autoplay.timeout = undefined
          }
          swiper.autoplay.running = false
          swiper.emit('autoplayStop')
          return true
        },
        pause (speed) {
          const swiper = this
          if (!swiper.autoplay.running) return
          if (swiper.autoplay.paused) return
          if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout)
          swiper.autoplay.paused = true
          if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
            swiper.autoplay.paused = false
            swiper.autoplay.run()
          } else {
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd)
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd)
          }
        }
      }

      var Autoplay$1 = {
        name: 'autoplay',
        params: {
          autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            autoplay: {
              running: false,
              paused: false,
              run: Autoplay.run.bind(swiper),
              start: Autoplay.start.bind(swiper),
              stop: Autoplay.stop.bind(swiper),
              pause: Autoplay.pause.bind(swiper),
              onVisibilityChange () {
                if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
                  swiper.autoplay.pause()
                }
                if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
                  swiper.autoplay.run()
                  swiper.autoplay.paused = false
                }
              },
              onTransitionEnd (e) {
                if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return
                if (e.target !== this) return
                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd)
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd)
                swiper.autoplay.paused = false
                if (!swiper.autoplay.running) {
                  swiper.autoplay.stop()
                } else {
                  swiper.autoplay.run()
                }
              }
            }
          })
        },
        on: {
          init () {
            const swiper = this
            if (swiper.params.autoplay.enabled) {
              swiper.autoplay.start()
              document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange)
            }
          },
          beforeTransitionStart (speed, internal) {
            const swiper = this
            if (swiper.autoplay.running) {
              if (internal || !swiper.params.autoplay.disableOnInteraction) {
                swiper.autoplay.pause(speed)
              } else {
                swiper.autoplay.stop()
              }
            }
          },
          sliderFirstMove () {
            const swiper = this
            if (swiper.autoplay.running) {
              if (swiper.params.autoplay.disableOnInteraction) {
                swiper.autoplay.stop()
              } else {
                swiper.autoplay.pause()
              }
            }
          },
          touchEnd () {
            const swiper = this
            if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
              swiper.autoplay.run()
            }
          },
          destroy () {
            const swiper = this
            if (swiper.autoplay.running) {
              swiper.autoplay.stop()
            }
            document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange)
          }
        }
      }

      const Fade = {
        setTranslate () {
          const swiper = this
          const { slides } = swiper
          for (let i = 0; i < slides.length; i += 1) {
            const $slideEl = swiper.slides.eq(i)
            const offset = $slideEl[0].swiperSlideOffset
            let tx = -offset
            if (!swiper.params.virtualTranslate) tx -= swiper.translate
            let ty = 0
            if (!swiper.isHorizontal()) {
              ty = tx
              tx = 0
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
              : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0)
            $slideEl
              .css({
                opacity: slideOpacity
              })
              .transform(`translate3d(${tx}px, ${ty}px, 0px)`)
          }
        },
        setTransition (duration) {
          const swiper = this
          const { slides, $wrapperEl } = swiper
          slides.transition(duration)
          if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false
            slides.transitionEnd(() => {
              if (eventTriggered) return
              if (!swiper || swiper.destroyed) return
              eventTriggered = true
              swiper.animating = false
              const triggerEvents = ['webkitTransitionEnd', 'transitionend']
              for (let i = 0; i < triggerEvents.length; i += 1) {
                $wrapperEl.trigger(triggerEvents[i])
              }
            })
          }
        }
      }

      var EffectFade = {
        name: 'effect-fade',
        params: {
          fadeEffect: {
            crossFade: false
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            fadeEffect: {
              setTranslate: Fade.setTranslate.bind(swiper),
              setTransition: Fade.setTransition.bind(swiper)
            }
          })
        },
        on: {
          beforeInit () {
            const swiper = this
            if (swiper.params.effect !== 'fade') return
            swiper.classNames.push(`${swiper.params.containerModifierClass}fade`)
            const overwriteParams = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: true,
              spaceBetween: 0,
              virtualTranslate: true
            }
            Utils.extend(swiper.params, overwriteParams)
            Utils.extend(swiper.originalParams, overwriteParams)
          },
          setTranslate () {
            const swiper = this
            if (swiper.params.effect !== 'fade') return
            swiper.fadeEffect.setTranslate()
          },
          setTransition (duration) {
            const swiper = this
            if (swiper.params.effect !== 'fade') return
            swiper.fadeEffect.setTransition(duration)
          }
        }
      }

      const Cube = {
        setTranslate () {
          const swiper = this
          const {
            $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize
          } = swiper
          const params = swiper.params.cubeEffect
          const isHorizontal = swiper.isHorizontal()
          const isVirtual = swiper.virtual && swiper.params.virtual.enabled
          let wrapperRotate = 0
          let $cubeShadowEl
          if (params.shadow) {
            if (isHorizontal) {
              $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow')
              if ($cubeShadowEl.length === 0) {
                $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>')
                $wrapperEl.append($cubeShadowEl)
              }
              $cubeShadowEl.css({ height: `${swiperWidth}px` })
            } else {
              $cubeShadowEl = $el.find('.swiper-cube-shadow')
              if ($cubeShadowEl.length === 0) {
                $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>')
                $el.append($cubeShadowEl)
              }
            }
          }
          for (let i = 0; i < slides.length; i += 1) {
            const $slideEl = slides.eq(i)
            let slideIndex = i
            if (isVirtual) {
              slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10)
            }
            let slideAngle = slideIndex * 90
            let round = Math.floor(slideAngle / 360)
            if (rtl) {
              slideAngle = -slideAngle
              round = Math.floor(-slideAngle / 360)
            }
            const progress = Math.max(Math.min($slideEl[0].progress, 1), -1)
            let tx = 0
            let ty = 0
            let tz = 0
            if (slideIndex % 4 === 0) {
              tx = -round * 4 * swiperSize
              tz = 0
            } else if ((slideIndex - 1) % 4 === 0) {
              tx = 0
              tz = -round * 4 * swiperSize
            } else if ((slideIndex - 2) % 4 === 0) {
              tx = swiperSize + (round * 4 * swiperSize)
              tz = swiperSize
            } else if ((slideIndex - 3) % 4 === 0) {
              tx = -swiperSize
              tz = (3 * swiperSize) + (swiperSize * 4 * round)
            }
            if (rtl) {
              tx = -tx
            }

            if (!isHorizontal) {
              ty = tx
              tx = 0
            }

            const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`
            if (progress <= 1 && progress > -1) {
              wrapperRotate = (slideIndex * 90) + (progress * 90)
              if (rtl) wrapperRotate = (-slideIndex * 90) - (progress * 90)
            }
            $slideEl.transform(transform)
            if (params.slideShadows) {
              // Set shadows
              let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top')
              let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom')
              if (shadowBefore.length === 0) {
                shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`)
                $slideEl.append(shadowBefore)
              }
              if (shadowAfter.length === 0) {
                shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`)
                $slideEl.append(shadowAfter)
              }
              if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0)
              if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0)
            }
          }
          $wrapperEl.css({
            '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
            '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
            '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
            'transform-origin': `50% 50% -${swiperSize / 2}px`
          })

          if (params.shadow) {
            if (isHorizontal) {
              $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`)
            } else {
              const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90)
              const multiplier = 1.5 - (
                (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2) +
          (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
              )
              const scale1 = params.shadowScale
              const scale2 = params.shadowScale / multiplier
              const offset = params.shadowOffset
              $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`)
            }
          }
          const zFactor = (swiper_esm_bundle_Browser.isSafari || swiper_esm_bundle_Browser.isUiWebView) ? (-swiperSize / 2) : 0
          $wrapperEl
            .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`)
        },
        setTransition (duration) {
          const swiper = this
          const { $el, slides } = swiper
          slides
            .transition(duration)
            .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
            .transition(duration)
          if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
            $el.find('.swiper-cube-shadow').transition(duration)
          }
        }
      }

      var EffectCube = {
        name: 'effect-cube',
        params: {
          cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            cubeEffect: {
              setTranslate: Cube.setTranslate.bind(swiper),
              setTransition: Cube.setTransition.bind(swiper)
            }
          })
        },
        on: {
          beforeInit () {
            const swiper = this
            if (swiper.params.effect !== 'cube') return
            swiper.classNames.push(`${swiper.params.containerModifierClass}cube`)
            swiper.classNames.push(`${swiper.params.containerModifierClass}3d`)
            const overwriteParams = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: true,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: false,
              virtualTranslate: true
            }
            Utils.extend(swiper.params, overwriteParams)
            Utils.extend(swiper.originalParams, overwriteParams)
          },
          setTranslate () {
            const swiper = this
            if (swiper.params.effect !== 'cube') return
            swiper.cubeEffect.setTranslate()
          },
          setTransition (duration) {
            const swiper = this
            if (swiper.params.effect !== 'cube') return
            swiper.cubeEffect.setTransition(duration)
          }
        }
      }

      const Flip = {
        setTranslate () {
          const swiper = this
          const { slides, rtlTranslate: rtl } = swiper
          for (let i = 0; i < slides.length; i += 1) {
            const $slideEl = slides.eq(i)
            let progress = $slideEl[0].progress
            if (swiper.params.flipEffect.limitRotation) {
              progress = Math.max(Math.min($slideEl[0].progress, 1), -1)
            }
            const offset = $slideEl[0].swiperSlideOffset
            const rotate = -180 * progress
            let rotateY = rotate
            let rotateX = 0
            let tx = -offset
            let ty = 0
            if (!swiper.isHorizontal()) {
              ty = tx
              tx = 0
              rotateX = -rotateY
              rotateY = 0
            } else if (rtl) {
              rotateY = -rotateY
            }

            $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length

            if (swiper.params.flipEffect.slideShadows) {
              // Set shadows
              let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top')
              let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom')
              if (shadowBefore.length === 0) {
                shadowBefore = $(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`)
                $slideEl.append(shadowBefore)
              }
              if (shadowAfter.length === 0) {
                shadowAfter = $(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`)
                $slideEl.append(shadowAfter)
              }
              if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0)
              if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0)
            }
            $slideEl
              .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
          }
        },
        setTransition (duration) {
          const swiper = this
          const { slides, activeIndex, $wrapperEl } = swiper
          slides
            .transition(duration)
            .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
            .transition(duration)
          if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false
            // eslint-disable-next-line
      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
              if (eventTriggered) return
              if (!swiper || swiper.destroyed) return
              // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
              eventTriggered = true
              swiper.animating = false
              const triggerEvents = ['webkitTransitionEnd', 'transitionend']
              for (let i = 0; i < triggerEvents.length; i += 1) {
                $wrapperEl.trigger(triggerEvents[i])
              }
            })
          }
        }
      }

      var EffectFlip = {
        name: 'effect-flip',
        params: {
          flipEffect: {
            slideShadows: true,
            limitRotation: true
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            flipEffect: {
              setTranslate: Flip.setTranslate.bind(swiper),
              setTransition: Flip.setTransition.bind(swiper)
            }
          })
        },
        on: {
          beforeInit () {
            const swiper = this
            if (swiper.params.effect !== 'flip') return
            swiper.classNames.push(`${swiper.params.containerModifierClass}flip`)
            swiper.classNames.push(`${swiper.params.containerModifierClass}3d`)
            const overwriteParams = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: true,
              spaceBetween: 0,
              virtualTranslate: true
            }
            Utils.extend(swiper.params, overwriteParams)
            Utils.extend(swiper.originalParams, overwriteParams)
          },
          setTranslate () {
            const swiper = this
            if (swiper.params.effect !== 'flip') return
            swiper.flipEffect.setTranslate()
          },
          setTransition (duration) {
            const swiper = this
            if (swiper.params.effect !== 'flip') return
            swiper.flipEffect.setTransition(duration)
          }
        }
      }

      const Coverflow = {
        setTranslate () {
          const swiper = this
          const {
            width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid
          } = swiper
          const params = swiper.params.coverflowEffect
          const isHorizontal = swiper.isHorizontal()
          const transform = swiper.translate
          const center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2)
          const rotate = isHorizontal ? params.rotate : -params.rotate
          const translate = params.depth
          // Each slide offset from center
          for (let i = 0, length = slides.length; i < length; i += 1) {
            const $slideEl = slides.eq(i)
            const slideSize = slidesSizesGrid[i]
            const slideOffset = $slideEl[0].swiperSlideOffset
            const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier

            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier
            // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier)

            let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier)
            let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0

            // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0
            if (Math.abs(translateY) < 0.001) translateY = 0
            if (Math.abs(translateZ) < 0.001) translateZ = 0
            if (Math.abs(rotateY) < 0.001) rotateY = 0
            if (Math.abs(rotateX) < 0.001) rotateX = 0

            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

            $slideEl.transform(slideTransform)
            $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1
            if (params.slideShadows) {
              // Set shadows
              let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top')
              let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom')
              if ($shadowBeforeEl.length === 0) {
                $shadowBeforeEl = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`)
                $slideEl.append($shadowBeforeEl)
              }
              if ($shadowAfterEl.length === 0) {
                $shadowAfterEl = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`)
                $slideEl.append($shadowAfterEl)
              }
              if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0
              if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0
            }
          }

          // Set correct perspective for IE10
          if (swiper_esm_bundle_Support.pointerEvents || swiper_esm_bundle_Support.prefixedPointerEvents) {
            const ws = $wrapperEl[0].style
            ws.perspectiveOrigin = `${center}px 50%`
          }
        },
        setTransition (duration) {
          const swiper = this
          swiper.slides
            .transition(duration)
            .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
            .transition(duration)
        }
      }

      var EffectCoverflow = {
        name: 'effect-coverflow',
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            coverflowEffect: {
              setTranslate: Coverflow.setTranslate.bind(swiper),
              setTransition: Coverflow.setTransition.bind(swiper)
            }
          })
        },
        on: {
          beforeInit () {
            const swiper = this
            if (swiper.params.effect !== 'coverflow') return

            swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`)
            swiper.classNames.push(`${swiper.params.containerModifierClass}3d`)

            swiper.params.watchSlidesProgress = true
            swiper.originalParams.watchSlidesProgress = true
          },
          setTranslate () {
            const swiper = this
            if (swiper.params.effect !== 'coverflow') return
            swiper.coverflowEffect.setTranslate()
          },
          setTransition (duration) {
            const swiper = this
            if (swiper.params.effect !== 'coverflow') return
            swiper.coverflowEffect.setTransition(duration)
          }
        }
      }

      const Thumbs = {
        init () {
          const swiper = this
          const { thumbs: thumbsParams } = swiper.params
          const SwiperClass = swiper.constructor
          if (thumbsParams.swiper instanceof SwiperClass) {
            swiper.thumbs.swiper = thumbsParams.swiper
            Utils.extend(swiper.thumbs.swiper.originalParams, {
              watchSlidesProgress: true,
              slideToClickedSlide: false
            })
            Utils.extend(swiper.thumbs.swiper.params, {
              watchSlidesProgress: true,
              slideToClickedSlide: false
            })
          } else if (Utils.isObject(thumbsParams.swiper)) {
            swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
              watchSlidesVisibility: true,
              watchSlidesProgress: true,
              slideToClickedSlide: false
            }))
            swiper.thumbs.swiperCreated = true
          }
          swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass)
          swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick)
        },
        onThumbClick () {
          const swiper = this
          const thumbsSwiper = swiper.thumbs.swiper
          if (!thumbsSwiper) return
          const clickedIndex = thumbsSwiper.clickedIndex
          const clickedSlide = thumbsSwiper.clickedSlide
          if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return
          if (typeof clickedIndex === 'undefined' || clickedIndex === null) return
          let slideToIndex
          if (thumbsSwiper.params.loop) {
            slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10)
          } else {
            slideToIndex = clickedIndex
          }
          if (swiper.params.loop) {
            let currentIndex = swiper.activeIndex
            if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
              swiper.loopFix()
              // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
              currentIndex = swiper.activeIndex
            }
            const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index()
            const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index()
            if (typeof prevIndex === 'undefined') slideToIndex = nextIndex
            else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex
            else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex
            else slideToIndex = prevIndex
          }
          swiper.slideTo(slideToIndex)
        },
        update (initial) {
          const swiper = this
          const thumbsSwiper = swiper.thumbs.swiper
          if (!thumbsSwiper) return

          const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
            ? thumbsSwiper.slidesPerViewDynamic()
            : thumbsSwiper.params.slidesPerView

          if (swiper.realIndex !== thumbsSwiper.realIndex) {
            let currentThumbsIndex = thumbsSwiper.activeIndex
            let newThumbsIndex
            if (thumbsSwiper.params.loop) {
              if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                thumbsSwiper.loopFix()
                // eslint-disable-next-line
          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                currentThumbsIndex = thumbsSwiper.activeIndex
              }
              // Find actual thumbs index to slide to
              const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index()
              const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index()
              if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex
              else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex
              else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex
              else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex
              else newThumbsIndex = prevThumbsIndex
            } else {
              newThumbsIndex = swiper.realIndex
            }
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
              if (thumbsSwiper.params.centeredSlides) {
                if (newThumbsIndex > currentThumbsIndex) {
                  newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1
                } else {
                  newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1
                }
              } else if (newThumbsIndex > currentThumbsIndex) {
                newThumbsIndex = newThumbsIndex - slidesPerView + 1
              }
              thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined)
            }
          }

          // Activate thumbs
          let thumbsToActivate = 1
          const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass

          if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
            thumbsToActivate = swiper.params.slidesPerView
          }

          if (!swiper.params.thumbs.multipleActiveThumbs) {
            thumbsToActivate = 1
          }

          thumbsToActivate = Math.floor(thumbsToActivate)

          thumbsSwiper.slides.removeClass(thumbActiveClass)
          if (thumbsSwiper.params.loop || (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)) {
            for (let i = 0; i < thumbsToActivate; i += 1) {
              thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass)
            }
          } else {
            for (let i = 0; i < thumbsToActivate; i += 1) {
              thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass)
            }
          }
        }
      }
      var Thumbs$1 = {
        name: 'thumbs',
        params: {
          thumbs: {
            multipleActiveThumbs: true,
            swiper: null,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-container-thumbs'
          }
        },
        create () {
          const swiper = this
          Utils.extend(swiper, {
            thumbs: {
              swiper: null,
              init: Thumbs.init.bind(swiper),
              update: Thumbs.update.bind(swiper),
              onThumbClick: Thumbs.onThumbClick.bind(swiper)
            }
          })
        },
        on: {
          beforeInit () {
            const swiper = this
            const { thumbs } = swiper.params
            if (!thumbs || !thumbs.swiper) return
            swiper.thumbs.init()
            swiper.thumbs.update(true)
          },
          slideChange () {
            const swiper = this
            if (!swiper.thumbs.swiper) return
            swiper.thumbs.update()
          },
          update () {
            const swiper = this
            if (!swiper.thumbs.swiper) return
            swiper.thumbs.update()
          },
          resize () {
            const swiper = this
            if (!swiper.thumbs.swiper) return
            swiper.thumbs.update()
          },
          observerUpdate () {
            const swiper = this
            if (!swiper.thumbs.swiper) return
            swiper.thumbs.update()
          },
          setTransition (duration) {
            const swiper = this
            const thumbsSwiper = swiper.thumbs.swiper
            if (!thumbsSwiper) return
            thumbsSwiper.setTransition(duration)
          },
          beforeDestroy () {
            const swiper = this
            const thumbsSwiper = swiper.thumbs.swiper
            if (!thumbsSwiper) return
            if (swiper.thumbs.swiperCreated && thumbsSwiper) {
              thumbsSwiper.destroy()
            }
          }
        }
      }

      // Swiper Class

      const components = [
        Device$1,
        Support$1,
        Browser$1,
        Resize,
        Observer$1,
        Virtual$1,
        Keyboard$1,
        Mousewheel$1,
        Navigation$1,
        Pagination$1,
        Scrollbar$1,
        Parallax$1,
        Zoom$1,
        Lazy$1,
        Controller$1,
        A11y,
        History$1,
        HashNavigation$1,
        Autoplay$1,
        EffectFade,
        EffectCube,
        EffectFlip,
        EffectCoverflow,
        Thumbs$1
      ]

      if (typeof swiper_esm_bundle_Swiper.use === 'undefined') {
        swiper_esm_bundle_Swiper.use = swiper_esm_bundle_Swiper.Class.use
        swiper_esm_bundle_Swiper.installModule = swiper_esm_bundle_Swiper.Class.installModule
      }

      swiper_esm_bundle_Swiper.use(components)

      /* harmony default export */ var swiper_esm_bundle = (swiper_esm_bundle_Swiper)
      // # sourceMappingURL=swiper.esm.bundle.js.map

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
      var es_number_constructor = __webpack_require__('a9e3')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
      var es_array_for_each = __webpack_require__('4160')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
      var es_array_index_of = __webpack_require__('c975')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
      var es_array_join = __webpack_require__('a15b')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
      var es_array_splice = __webpack_require__('a434')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
      var es_object_get_own_property_descriptor = __webpack_require__('e439')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
      var es_object_keys = __webpack_require__('b64b')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
      var web_dom_collections_for_each = __webpack_require__('159b')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
      var es_symbol = __webpack_require__('a4d3')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
      var es_symbol_description = __webpack_require__('e01a')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
      var es_symbol_iterator = __webpack_require__('d28b')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
      var es_array_iterator = __webpack_require__('e260')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
      var es_object_to_string = __webpack_require__('d3b7')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
      var es_string_iterator = __webpack_require__('3ca3')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
      var web_dom_collections_iterator = __webpack_require__('ddb0')

      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js

      function _typeof (obj) {
        '@babel/helpers - typeof'

        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
          _typeof = function _typeof (obj) {
            return typeof obj
          }
        } else {
          _typeof = function _typeof (obj) {
            return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
          }
        }

        return _typeof(obj)
      }
      // CONCATENATED MODULE: ./src/utils/utils.js

      var utils_Utils = {
        extend: function extend () {
          var deep = true
          var to
          var from

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key]
          }

          if (typeof args[0] === 'boolean') {
            deep = args[0]
            to = args[1]
            args.splice(0, 2)
            from = args
          } else {
            to = args[0]
            args.splice(0, 1)
            from = args
          }

          for (var i = 0; i < from.length; i += 1) {
            var nextSource = args[i]

            if (nextSource !== undefined && nextSource !== null) {
              var keysArray = Object.keys(Object(nextSource))

              for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                var nextKey = keysArray[nextIndex]
                var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey)

                if (desc !== undefined && desc.enumerable) {
                  if (!deep) {
                    to[nextKey] = nextSource[nextKey]
                  } else if (utils_Utils.isObject(to[nextKey]) && utils_Utils.isObject(nextSource[nextKey])) {
                    utils_Utils.extend(to[nextKey], nextSource[nextKey])
                  } else if (!utils_Utils.isObject(to[nextKey]) && utils_Utils.isObject(nextSource[nextKey])) {
                    to[nextKey] = {}
                    utils_Utils.extend(to[nextKey], nextSource[nextKey])
                  } else {
                    to[nextKey] = nextSource[nextKey]
                  }
                }
              }
            }
          }

          return to
        },
        classNames: function classNames () {
          var classes = []

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2]
          }

          args.forEach(function (arg) {
            if (_typeof(arg) === 'object' && arg.constructor === Object) {
              Object.keys(arg).forEach(function (key) {
                if (arg[key]) classes.push(key)
              })
            } else if (arg) classes.push(arg)
          })
          var uniqueClasses = []
          classes.forEach(function (c) {
            if (uniqueClasses.indexOf(c) < 0) uniqueClasses.push(c)
          })
          return uniqueClasses.join(' ')
        }
      }
      /* harmony default export */ var utils = (utils_Utils)
      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
      function _arrayWithoutHoles (arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i]
          }

          return arr2
        }
      }
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
      var es_array_from = __webpack_require__('a630')

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
      var es_regexp_to_string = __webpack_require__('25f0')

      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js

      function _iterableToArray (iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]') return Array.from(iter)
      }
      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
      function _nonIterableSpread () {
        throw new TypeError('Invalid attempt to spread non-iterable instance')
      }
      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js

      function _toConsumableArray (arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
      }
      // CONCATENATED MODULE: ./src/runtime-helpers/vue-component-props.js

      /* harmony default export */ var vue_component_props = function (component) {
        var props = {}
        var $props = component.$props
        Object.keys($props).forEach(function (propKey) {
          if (typeof $props[propKey] !== 'undefined') props[propKey] = $props[propKey]
        })
        var children = []
        Object.keys(component.$slots).forEach(function (slotName) {
          children.push.apply(children, _toConsumableArray(component.$slots[slotName]))
        })
        props.children = children
        return props
      }
      // CONCATENATED MODULE: ./src/packages/vue-awesome-swiper/slide.js

      /* harmony default export */ var vue_awesome_swiper_slide = ({
        name: 'swiper-slide',
        props: {
          id: [String, Number],
          zoom: Boolean
        },
        render: function render () {
          var _h = this.$createElement
          var props = this.props
          var className = props.className
          var id = props.id
          var style = props.style
          var zoom = props.zoom
          var classes = utils.classNames(className, 'swiper-slide')
          return _h('div', {
            style: style,
            class: classes,
            attrs: {
              id: id
            }
          }, [zoom ? _h('div', {
            class: 'swiper-zoom-container'
          }, [this.$slots.default]) : this.$slots.default])
        },
        computed: {
          props: function props () {
            return vue_component_props(this)
          }
        }
      })
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
      var es_object_assign = __webpack_require__('cca6')

      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
      function _defineProperty (obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          })
        } else {
          obj[key] = value
        }

        return obj
      }
      // CONCATENATED MODULE: ./src/utils/mixins.js

      var Mixins = {
        colorProps: {
          color: String,
          colorTheme: String,
          textColor: String,
          bgColor: String,
          borderColor: String,
          rippleColor: String,
          themeDark: Boolean
        },
        colorClasses: function colorClasses (props) {
          var _ref

          var color = props.color
          var colorTheme = props.colorTheme
          var textColor = props.textColor
          var bgColor = props.bgColor
          var borderColor = props.borderColor
          var rippleColor = props.rippleColor
          var themeDark = props.themeDark
          return _ref = {
            'theme-dark': themeDark
          }, _defineProperty(_ref, 'color-'.concat(color), color), _defineProperty(_ref, 'color-theme-'.concat(colorTheme), colorTheme), _defineProperty(_ref, 'text-color-'.concat(textColor), textColor), _defineProperty(_ref, 'bg-color-'.concat(bgColor), bgColor), _defineProperty(_ref, 'border-color-'.concat(borderColor), borderColor), _defineProperty(_ref, 'ripple-color-'.concat(rippleColor), rippleColor), _ref
        }
      }
      /* harmony default export */ var mixins = (Mixins)
      // CONCATENATED MODULE: ./src/packages/vue-awesome-swiper/swiper.js

      /* harmony default export */ var vue_awesome_swiper_swiper = ({
        name: 'swiper',
        props: Object.assign({
          id: [String, Number],
          params: Object,
          pagination: Boolean,
          scrollbar: Boolean,
          navigation: Boolean,
          init: {
            type: Boolean,
            default: true
          }
        }, mixins.colorProps),
        render: function render () {
          var _h = this.$createElement
          var props = this.props
          var id = props.id
          var style = props.style
          var className = props.className
          var paginationEl
          var scrollbarEl
          var buttonNextEl
          var buttonPrevEl

          if (this.paginationComputed) {
            paginationEl = _h('div', {
              ref: 'paginationEl',
              class: 'swiper-pagination'
            })
          }

          if (this.scrollbarComputed) {
            scrollbarEl = _h('div', {
              ref: 'scrollbarEl',
              class: 'swiper-scrollbar'
            })
          }

          if (this.navigationComputed) {
            buttonNextEl = _h('div', {
              ref: 'nextEl',
              class: 'swiper-button-next'
            })
            buttonPrevEl = _h('div', {
              ref: 'prevEl',
              class: 'swiper-button-prev'
            })
          }

          var classes = utils.classNames(className, 'swiper-container', mixins.colorClasses(props))
          return _h('div', {
            style: style,
            ref: 'el',
            class: classes,
            attrs: {
              id: id
            }
          }, [this.$slots['before-wrapper'], _h('div', {
            class: 'swiper-wrapper'
          }, [this.$slots.default]), paginationEl, scrollbarEl, buttonPrevEl, buttonNextEl, this.$slots['after-wrapper']])
        },
        computed: {
          paginationComputed: function paginationComputed () {
            var _this$props = this.props
            var pagination = _this$props.pagination
            var params = _this$props.params // eslint-disable-next-line

            if (pagination === true || params && params.pagination && !params.pagination.el) {
              return true
            }

            return false
          },
          scrollbarComputed: function scrollbarComputed () {
            var _this$props2 = this.props
            var scrollbar = _this$props2.scrollbar
            var params = _this$props2.params // eslint-disable-next-line

            if (scrollbar === true || params && params.scrollbar && !params.scrollbar.el) {
              return true
            }

            return false
          },
          navigationComputed: function navigationComputed () {
            var _this$props3 = this.props
            var navigation = _this$props3.navigation
            var params = _this$props3.params // eslint-disable-next-line

            if (navigation === true || params && params.navigation && !params.navigation.nextEl && !params.navigation.prevEl) {
              return true
            }

            return false
          },
          props: function props () {
            return vue_component_props(this)
          }
        },
        updated: function updated () {
          if (!this.initialUpdate) {
            this.initialUpdate = true
            return
          }

          if (this.swiper && this.swiper.update) this.swiper.update()
        },
        mounted: function mounted () {
          if (!this.props.init) return
          var newParams = {
            pagination: {},
            navigation: {},
            scrollbar: {}
          }
          var _this$props4 = this.props
          var params = _this$props4.params
          var pagination = _this$props4.pagination
          var navigation = _this$props4.navigation
          var scrollbar = _this$props4.scrollbar
          if (params) utils.extend(newParams, params)
          if (pagination && !newParams.pagination.el) newParams.pagination.el = this.$refs.paginationEl

          if (navigation && !newParams.navigation.nextEl && !newParams.navigation.prevEl) {
            newParams.navigation.nextEl = this.$refs.nextEl
            newParams.navigation.prevEl = this.$refs.prevEl
          }

          if (scrollbar && !newParams.scrollbar.el) newParams.scrollbar.el = this.$refs.scrollbarEl
          this.swiper = swiper_esm_bundle.create(this.$refs.el, newParams)
        },
        beforeDestroy: function beforeDestroy () {
          if (!this.props.init) return
          if (this.swiper && this.swiper.destroy) this.swiper.destroy()
        }
      })
      // CONCATENATED MODULE: ./src/packages/index.js

      var packages_swiper = vue_awesome_swiper_swiper
      var swiperSlide = vue_awesome_swiper_slide

      var packages_install = function install (Vue, globalOptions) {
        if (globalOptions) {
          vue_awesome_swiper_swiper.props.globalOptions.default = function () {
            return globalOptions
          }
        }

        Vue.component(vue_awesome_swiper_swiper.name, vue_awesome_swiper_swiper)
        Vue.component(vue_awesome_swiper_slide.name, vue_awesome_swiper_slide)
      }

      var VueAwesomeSwiper = {
        Swiper: swiper_esm_bundle,
        swiper: packages_swiper,
        swiperSlide: swiperSlide,
        install: packages_install
      }
      /* harmony default export */ var src_packages = (VueAwesomeSwiper)

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
      /* concated harmony reexport Swiper */__webpack_require__.d(__webpack_exports__, 'Swiper', function () { return swiper_esm_bundle })
      /* concated harmony reexport swiper */__webpack_require__.d(__webpack_exports__, 'swiper', function () { return packages_swiper })
      /* concated harmony reexport swiperSlide */__webpack_require__.d(__webpack_exports__, 'swiperSlide', function () { return swiperSlide })
      /* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, 'install', function () { return packages_install })

      /* harmony default export */ var entry_lib = __webpack_exports__.default = (src_packages)
      /***/ },

    /***/ fc6a:
    /***/ function (module, exports, __webpack_require__) {
      // toObject with fallback for non-array-like ES3 strings
      var IndexedObject = __webpack_require__('44ad')
      var requireObjectCoercible = __webpack_require__('1d80')

      module.exports = function (it) {
        return IndexedObject(requireObjectCoercible(it))
      }
      /***/ },

    /***/ fdbc:
    /***/ function (module, exports) {
      // iterable DOM collections
      // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
      module.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      }
      /***/ },

    /***/ fdbf:
    /***/ function (module, exports, __webpack_require__) {
      var NATIVE_SYMBOL = __webpack_require__('4930')

      module.exports = NATIVE_SYMBOL &&
  // eslint-disable-next-line no-undef
  !Symbol.sham &&
  // eslint-disable-next-line no-undef
  typeof Symbol.iterator === 'symbol'
      /***/ }

    /******/ })
})
// # sourceMappingURL=vue-awesome-swiper.umd.js.map
