(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/choices.js/public/assets/scripts/choices.js
  var require_choices = __commonJS({
    "node_modules/choices.js/public/assets/scripts/choices.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["Choices"] = factory();
        else
          root["Choices"] = factory();
      })(window, function() {
        return function() {
          "use strict";
          var __webpack_modules__ = {
            282: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.clearChoices = exports2.activateChoices = exports2.filterChoices = exports2.addChoice = void 0;
              var constants_1 = __webpack_require__2(883);
              var addChoice = function(_a) {
                var value = _a.value, label = _a.label, id = _a.id, groupId = _a.groupId, disabled = _a.disabled, elementId = _a.elementId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                return {
                  type: constants_1.ACTION_TYPES.ADD_CHOICE,
                  value,
                  label,
                  id,
                  groupId,
                  disabled,
                  elementId,
                  customProperties,
                  placeholder,
                  keyCode
                };
              };
              exports2.addChoice = addChoice;
              var filterChoices = function(results) {
                return {
                  type: constants_1.ACTION_TYPES.FILTER_CHOICES,
                  results
                };
              };
              exports2.filterChoices = filterChoices;
              var activateChoices = function(active) {
                if (active === void 0) {
                  active = true;
                }
                return {
                  type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
                  active
                };
              };
              exports2.activateChoices = activateChoices;
              var clearChoices = function() {
                return {
                  type: constants_1.ACTION_TYPES.CLEAR_CHOICES
                };
              };
              exports2.clearChoices = clearChoices;
            },
            783: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.addGroup = void 0;
              var constants_1 = __webpack_require__2(883);
              var addGroup = function(_a) {
                var value = _a.value, id = _a.id, active = _a.active, disabled = _a.disabled;
                return {
                  type: constants_1.ACTION_TYPES.ADD_GROUP,
                  value,
                  id,
                  active,
                  disabled
                };
              };
              exports2.addGroup = addGroup;
            },
            464: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.highlightItem = exports2.removeItem = exports2.addItem = void 0;
              var constants_1 = __webpack_require__2(883);
              var addItem = function(_a) {
                var value = _a.value, label = _a.label, id = _a.id, choiceId = _a.choiceId, groupId = _a.groupId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                return {
                  type: constants_1.ACTION_TYPES.ADD_ITEM,
                  value,
                  label,
                  id,
                  choiceId,
                  groupId,
                  customProperties,
                  placeholder,
                  keyCode
                };
              };
              exports2.addItem = addItem;
              var removeItem = function(id, choiceId) {
                return {
                  type: constants_1.ACTION_TYPES.REMOVE_ITEM,
                  id,
                  choiceId
                };
              };
              exports2.removeItem = removeItem;
              var highlightItem = function(id, highlighted) {
                return {
                  type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
                  id,
                  highlighted
                };
              };
              exports2.highlightItem = highlightItem;
            },
            137: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.setIsLoading = exports2.resetTo = exports2.clearAll = void 0;
              var constants_1 = __webpack_require__2(883);
              var clearAll = function() {
                return {
                  type: constants_1.ACTION_TYPES.CLEAR_ALL
                };
              };
              exports2.clearAll = clearAll;
              var resetTo = function(state) {
                return {
                  type: constants_1.ACTION_TYPES.RESET_TO,
                  state
                };
              };
              exports2.resetTo = resetTo;
              var setIsLoading = function(isLoading) {
                return {
                  type: constants_1.ACTION_TYPES.SET_IS_LOADING,
                  isLoading
                };
              };
              exports2.setIsLoading = setIsLoading;
            },
            373: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                if (pack || arguments.length === 2)
                  for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                      if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                      ar[i] = from[i];
                    }
                  }
                return to.concat(ar || Array.prototype.slice.call(from));
              };
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var deepmerge_1 = __importDefault(__webpack_require__2(996));
              var fuse_js_1 = __importDefault(__webpack_require__2(221));
              var choices_1 = __webpack_require__2(282);
              var groups_1 = __webpack_require__2(783);
              var items_1 = __webpack_require__2(464);
              var misc_1 = __webpack_require__2(137);
              var components_1 = __webpack_require__2(520);
              var constants_1 = __webpack_require__2(883);
              var defaults_1 = __webpack_require__2(789);
              var utils_1 = __webpack_require__2(799);
              var reducers_1 = __webpack_require__2(655);
              var store_1 = __importDefault(__webpack_require__2(744));
              var templates_1 = __importDefault(__webpack_require__2(686));
              var IS_IE11 = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
              var USER_DEFAULTS = {};
              var Choices2 = function() {
                function Choices3(element, userConfig) {
                  if (element === void 0) {
                    element = "[data-choice]";
                  }
                  if (userConfig === void 0) {
                    userConfig = {};
                  }
                  var _this = this;
                  if (userConfig.allowHTML === void 0) {
                    console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.");
                  }
                  this.config = deepmerge_1.default.all(
                    [defaults_1.DEFAULT_CONFIG, Choices3.defaults.options, userConfig],
                    {
                      arrayMerge: function(_, sourceArray) {
                        return __spreadArray([], sourceArray, true);
                      }
                    }
                  );
                  var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);
                  if (invalidConfigOptions.length) {
                    console.warn("Unknown config option(s) passed", invalidConfigOptions.join(", "));
                  }
                  var passedElement = typeof element === "string" ? document.querySelector(element) : element;
                  if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
                    throw TypeError("Expected one of the following types text|select-one|select-multiple");
                  }
                  this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
                  this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
                  this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
                  this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
                  this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
                  if (!["auto", "always"].includes("".concat(this.config.renderSelectedChoices))) {
                    this.config.renderSelectedChoices = "auto";
                  }
                  if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== "function") {
                    var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                    this.config.addItemFilter = re.test.bind(re);
                  }
                  if (this._isTextElement) {
                    this.passedElement = new components_1.WrappedInput({
                      element: passedElement,
                      classNames: this.config.classNames,
                      delimiter: this.config.delimiter
                    });
                  } else {
                    this.passedElement = new components_1.WrappedSelect({
                      element: passedElement,
                      classNames: this.config.classNames,
                      template: function(data) {
                        return _this._templates.option(data);
                      }
                    });
                  }
                  this.initialised = false;
                  this._store = new store_1.default();
                  this._initialState = reducers_1.defaultState;
                  this._currentState = reducers_1.defaultState;
                  this._prevState = reducers_1.defaultState;
                  this._currentValue = "";
                  this._canSearch = !!this.config.searchEnabled;
                  this._isScrollingOnIe = false;
                  this._highlightPosition = 0;
                  this._wasTap = true;
                  this._placeholderValue = this._generatePlaceholderValue();
                  this._baseId = (0, utils_1.generateId)(this.passedElement.element, "choices-");
                  this._direction = this.passedElement.dir;
                  if (!this._direction) {
                    var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
                    var documentDirection = window.getComputedStyle(document.documentElement).direction;
                    if (elementDirection !== documentDirection) {
                      this._direction = elementDirection;
                    }
                  }
                  this._idNames = {
                    itemChoice: "item-choice"
                  };
                  if (this._isSelectElement) {
                    this._presetGroups = this.passedElement.optionGroups;
                    this._presetOptions = this.passedElement.options;
                  }
                  this._presetChoices = this.config.choices;
                  this._presetItems = this.config.items;
                  if (this.passedElement.value && this._isTextElement) {
                    var splitValues = this.passedElement.value.split(this.config.delimiter);
                    this._presetItems = this._presetItems.concat(splitValues);
                  }
                  if (this.passedElement.options) {
                    this.passedElement.options.forEach(function(option) {
                      _this._presetChoices.push({
                        value: option.value,
                        label: option.innerHTML,
                        selected: !!option.selected,
                        disabled: option.disabled || option.parentNode.disabled,
                        placeholder: option.value === "" || option.hasAttribute("placeholder"),
                        customProperties: (0, utils_1.parseCustomProperties)(option.dataset.customProperties)
                      });
                    });
                  }
                  this._render = this._render.bind(this);
                  this._onFocus = this._onFocus.bind(this);
                  this._onBlur = this._onBlur.bind(this);
                  this._onKeyUp = this._onKeyUp.bind(this);
                  this._onKeyDown = this._onKeyDown.bind(this);
                  this._onClick = this._onClick.bind(this);
                  this._onTouchMove = this._onTouchMove.bind(this);
                  this._onTouchEnd = this._onTouchEnd.bind(this);
                  this._onMouseDown = this._onMouseDown.bind(this);
                  this._onMouseOver = this._onMouseOver.bind(this);
                  this._onFormReset = this._onFormReset.bind(this);
                  this._onSelectKey = this._onSelectKey.bind(this);
                  this._onEnterKey = this._onEnterKey.bind(this);
                  this._onEscapeKey = this._onEscapeKey.bind(this);
                  this._onDirectionKey = this._onDirectionKey.bind(this);
                  this._onDeleteKey = this._onDeleteKey.bind(this);
                  if (this.passedElement.isActive) {
                    if (!this.config.silent) {
                      console.warn("Trying to initialise Choices on element already initialised", {
                        element
                      });
                    }
                    this.initialised = true;
                    return;
                  }
                  this.init();
                }
                Object.defineProperty(Choices3, "defaults", {
                  get: function() {
                    return Object.preventExtensions({
                      get options() {
                        return USER_DEFAULTS;
                      },
                      get templates() {
                        return templates_1.default;
                      }
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Choices3.prototype.init = function() {
                  if (this.initialised) {
                    return;
                  }
                  this._createTemplates();
                  this._createElements();
                  this._createStructure();
                  this._store.subscribe(this._render);
                  this._render();
                  this._addEventListeners();
                  var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute("disabled");
                  if (shouldDisable) {
                    this.disable();
                  }
                  this.initialised = true;
                  var callbackOnInit = this.config.callbackOnInit;
                  if (callbackOnInit && typeof callbackOnInit === "function") {
                    callbackOnInit.call(this);
                  }
                };
                Choices3.prototype.destroy = function() {
                  if (!this.initialised) {
                    return;
                  }
                  this._removeEventListeners();
                  this.passedElement.reveal();
                  this.containerOuter.unwrap(this.passedElement.element);
                  this.clearStore();
                  if (this._isSelectElement) {
                    this.passedElement.options = this._presetOptions;
                  }
                  this._templates = templates_1.default;
                  this.initialised = false;
                };
                Choices3.prototype.enable = function() {
                  if (this.passedElement.isDisabled) {
                    this.passedElement.enable();
                  }
                  if (this.containerOuter.isDisabled) {
                    this._addEventListeners();
                    this.input.enable();
                    this.containerOuter.enable();
                  }
                  return this;
                };
                Choices3.prototype.disable = function() {
                  if (!this.passedElement.isDisabled) {
                    this.passedElement.disable();
                  }
                  if (!this.containerOuter.isDisabled) {
                    this._removeEventListeners();
                    this.input.disable();
                    this.containerOuter.disable();
                  }
                  return this;
                };
                Choices3.prototype.highlightItem = function(item, runEvent) {
                  if (runEvent === void 0) {
                    runEvent = true;
                  }
                  if (!item || !item.id) {
                    return this;
                  }
                  var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                  var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                  this._store.dispatch((0, items_1.highlightItem)(id, true));
                  if (runEvent) {
                    this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                      id,
                      value,
                      label,
                      groupValue: group && group.value ? group.value : null
                    });
                  }
                  return this;
                };
                Choices3.prototype.unhighlightItem = function(item) {
                  if (!item || !item.id) {
                    return this;
                  }
                  var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                  var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                  this._store.dispatch((0, items_1.highlightItem)(id, false));
                  this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                    id,
                    value,
                    label,
                    groupValue: group && group.value ? group.value : null
                  });
                  return this;
                };
                Choices3.prototype.highlightAll = function() {
                  var _this = this;
                  this._store.items.forEach(function(item) {
                    return _this.highlightItem(item);
                  });
                  return this;
                };
                Choices3.prototype.unhighlightAll = function() {
                  var _this = this;
                  this._store.items.forEach(function(item) {
                    return _this.unhighlightItem(item);
                  });
                  return this;
                };
                Choices3.prototype.removeActiveItemsByValue = function(value) {
                  var _this = this;
                  this._store.activeItems.filter(function(item) {
                    return item.value === value;
                  }).forEach(function(item) {
                    return _this._removeItem(item);
                  });
                  return this;
                };
                Choices3.prototype.removeActiveItems = function(excludedId) {
                  var _this = this;
                  this._store.activeItems.filter(function(_a) {
                    var id = _a.id;
                    return id !== excludedId;
                  }).forEach(function(item) {
                    return _this._removeItem(item);
                  });
                  return this;
                };
                Choices3.prototype.removeHighlightedItems = function(runEvent) {
                  var _this = this;
                  if (runEvent === void 0) {
                    runEvent = false;
                  }
                  this._store.highlightedActiveItems.forEach(function(item) {
                    _this._removeItem(item);
                    if (runEvent) {
                      _this._triggerChange(item.value);
                    }
                  });
                  return this;
                };
                Choices3.prototype.showDropdown = function(preventInputFocus) {
                  var _this = this;
                  if (this.dropdown.isActive) {
                    return this;
                  }
                  requestAnimationFrame(function() {
                    _this.dropdown.show();
                    _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);
                    if (!preventInputFocus && _this._canSearch) {
                      _this.input.focus();
                    }
                    _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
                  });
                  return this;
                };
                Choices3.prototype.hideDropdown = function(preventInputBlur) {
                  var _this = this;
                  if (!this.dropdown.isActive) {
                    return this;
                  }
                  requestAnimationFrame(function() {
                    _this.dropdown.hide();
                    _this.containerOuter.close();
                    if (!preventInputBlur && _this._canSearch) {
                      _this.input.removeActiveDescendant();
                      _this.input.blur();
                    }
                    _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
                  });
                  return this;
                };
                Choices3.prototype.getValue = function(valueOnly) {
                  if (valueOnly === void 0) {
                    valueOnly = false;
                  }
                  var values = this._store.activeItems.reduce(function(selectedItems, item) {
                    var itemValue = valueOnly ? item.value : item;
                    selectedItems.push(itemValue);
                    return selectedItems;
                  }, []);
                  return this._isSelectOneElement ? values[0] : values;
                };
                Choices3.prototype.setValue = function(items) {
                  var _this = this;
                  if (!this.initialised) {
                    return this;
                  }
                  items.forEach(function(value) {
                    return _this._setChoiceOrItem(value);
                  });
                  return this;
                };
                Choices3.prototype.setChoiceByValue = function(value) {
                  var _this = this;
                  if (!this.initialised || this._isTextElement) {
                    return this;
                  }
                  var choiceValue = Array.isArray(value) ? value : [value];
                  choiceValue.forEach(function(val) {
                    return _this._findAndSelectChoiceByValue(val);
                  });
                  return this;
                };
                Choices3.prototype.setChoices = function(choicesArrayOrFetcher, value, label, replaceChoices) {
                  var _this = this;
                  if (choicesArrayOrFetcher === void 0) {
                    choicesArrayOrFetcher = [];
                  }
                  if (value === void 0) {
                    value = "value";
                  }
                  if (label === void 0) {
                    label = "label";
                  }
                  if (replaceChoices === void 0) {
                    replaceChoices = false;
                  }
                  if (!this.initialised) {
                    throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                  }
                  if (!this._isSelectElement) {
                    throw new TypeError("setChoices can't be used with INPUT based Choices");
                  }
                  if (typeof value !== "string" || !value) {
                    throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                  }
                  if (replaceChoices) {
                    this.clearChoices();
                  }
                  if (typeof choicesArrayOrFetcher === "function") {
                    var fetcher_1 = choicesArrayOrFetcher(this);
                    if (typeof Promise === "function" && fetcher_1 instanceof Promise) {
                      return new Promise(function(resolve) {
                        return requestAnimationFrame(resolve);
                      }).then(function() {
                        return _this._handleLoadingState(true);
                      }).then(function() {
                        return fetcher_1;
                      }).then(function(data) {
                        return _this.setChoices(data, value, label, replaceChoices);
                      }).catch(function(err) {
                        if (!_this.config.silent) {
                          console.error(err);
                        }
                      }).then(function() {
                        return _this._handleLoadingState(false);
                      }).then(function() {
                        return _this;
                      });
                    }
                    if (!Array.isArray(fetcher_1)) {
                      throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
                    }
                    return this.setChoices(fetcher_1, value, label, false);
                  }
                  if (!Array.isArray(choicesArrayOrFetcher)) {
                    throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                  }
                  this.containerOuter.removeLoadingState();
                  this._startLoading();
                  choicesArrayOrFetcher.forEach(function(groupOrChoice) {
                    if (groupOrChoice.choices) {
                      _this._addGroup({
                        id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
                        group: groupOrChoice,
                        valueKey: value,
                        labelKey: label
                      });
                    } else {
                      var choice = groupOrChoice;
                      _this._addChoice({
                        value: choice[value],
                        label: choice[label],
                        isSelected: !!choice.selected,
                        isDisabled: !!choice.disabled,
                        placeholder: !!choice.placeholder,
                        customProperties: choice.customProperties
                      });
                    }
                  });
                  this._stopLoading();
                  return this;
                };
                Choices3.prototype.clearChoices = function() {
                  this._store.dispatch((0, choices_1.clearChoices)());
                  return this;
                };
                Choices3.prototype.clearStore = function() {
                  this._store.dispatch((0, misc_1.clearAll)());
                  return this;
                };
                Choices3.prototype.clearInput = function() {
                  var shouldSetInputWidth = !this._isSelectOneElement;
                  this.input.clear(shouldSetInputWidth);
                  if (!this._isTextElement && this._canSearch) {
                    this._isSearching = false;
                    this._store.dispatch((0, choices_1.activateChoices)(true));
                  }
                  return this;
                };
                Choices3.prototype._render = function() {
                  if (this._store.isLoading()) {
                    return;
                  }
                  this._currentState = this._store.state;
                  var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
                  var shouldRenderChoices = this._isSelectElement;
                  var shouldRenderItems = this._currentState.items !== this._prevState.items;
                  if (!stateChanged) {
                    return;
                  }
                  if (shouldRenderChoices) {
                    this._renderChoices();
                  }
                  if (shouldRenderItems) {
                    this._renderItems();
                  }
                  this._prevState = this._currentState;
                };
                Choices3.prototype._renderChoices = function() {
                  var _this = this;
                  var _a = this._store, activeGroups = _a.activeGroups, activeChoices = _a.activeChoices;
                  var choiceListFragment = document.createDocumentFragment();
                  this.choiceList.clear();
                  if (this.config.resetScrollPosition) {
                    requestAnimationFrame(function() {
                      return _this.choiceList.scrollToTop();
                    });
                  }
                  if (activeGroups.length >= 1 && !this._isSearching) {
                    var activePlaceholders = activeChoices.filter(function(activeChoice) {
                      return activeChoice.placeholder === true && activeChoice.groupId === -1;
                    });
                    if (activePlaceholders.length >= 1) {
                      choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                    }
                    choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
                  } else if (activeChoices.length >= 1) {
                    choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
                  }
                  if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                    var activeItems = this._store.activeItems;
                    var canAddItem = this._canAddItem(activeItems, this.input.value);
                    if (canAddItem.response) {
                      this.choiceList.append(choiceListFragment);
                      this._highlightChoice();
                    } else {
                      var notice = this._getTemplate("notice", canAddItem.notice);
                      this.choiceList.append(notice);
                    }
                  } else {
                    var dropdownItem = void 0;
                    var notice = void 0;
                    if (this._isSearching) {
                      notice = typeof this.config.noResultsText === "function" ? this.config.noResultsText() : this.config.noResultsText;
                      dropdownItem = this._getTemplate("notice", notice, "no-results");
                    } else {
                      notice = typeof this.config.noChoicesText === "function" ? this.config.noChoicesText() : this.config.noChoicesText;
                      dropdownItem = this._getTemplate("notice", notice, "no-choices");
                    }
                    this.choiceList.append(dropdownItem);
                  }
                };
                Choices3.prototype._renderItems = function() {
                  var activeItems = this._store.activeItems || [];
                  this.itemList.clear();
                  var itemListFragment = this._createItemsFragment(activeItems);
                  if (itemListFragment.childNodes) {
                    this.itemList.append(itemListFragment);
                  }
                };
                Choices3.prototype._createGroupsFragment = function(groups, choices, fragment) {
                  var _this = this;
                  if (fragment === void 0) {
                    fragment = document.createDocumentFragment();
                  }
                  var getGroupChoices = function(group) {
                    return choices.filter(function(choice) {
                      if (_this._isSelectOneElement) {
                        return choice.groupId === group.id;
                      }
                      return choice.groupId === group.id && (_this.config.renderSelectedChoices === "always" || !choice.selected);
                    });
                  };
                  if (this.config.shouldSort) {
                    groups.sort(this.config.sorter);
                  }
                  groups.forEach(function(group) {
                    var groupChoices = getGroupChoices(group);
                    if (groupChoices.length >= 1) {
                      var dropdownGroup = _this._getTemplate("choiceGroup", group);
                      fragment.appendChild(dropdownGroup);
                      _this._createChoicesFragment(groupChoices, fragment, true);
                    }
                  });
                  return fragment;
                };
                Choices3.prototype._createChoicesFragment = function(choices, fragment, withinGroup) {
                  var _this = this;
                  if (fragment === void 0) {
                    fragment = document.createDocumentFragment();
                  }
                  if (withinGroup === void 0) {
                    withinGroup = false;
                  }
                  var _a = this.config, renderSelectedChoices = _a.renderSelectedChoices, searchResultLimit = _a.searchResultLimit, renderChoiceLimit = _a.renderChoiceLimit;
                  var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;
                  var appendChoice = function(choice) {
                    var shouldRender = renderSelectedChoices === "auto" ? _this._isSelectOneElement || !choice.selected : true;
                    if (shouldRender) {
                      var dropdownItem = _this._getTemplate("choice", choice, _this.config.itemSelectText);
                      fragment.appendChild(dropdownItem);
                    }
                  };
                  var rendererableChoices = choices;
                  if (renderSelectedChoices === "auto" && !this._isSelectOneElement) {
                    rendererableChoices = choices.filter(function(choice) {
                      return !choice.selected;
                    });
                  }
                  var _b = rendererableChoices.reduce(function(acc, choice) {
                    if (choice.placeholder) {
                      acc.placeholderChoices.push(choice);
                    } else {
                      acc.normalChoices.push(choice);
                    }
                    return acc;
                  }, {
                    placeholderChoices: [],
                    normalChoices: []
                  }), placeholderChoices = _b.placeholderChoices, normalChoices = _b.normalChoices;
                  if (this.config.shouldSort || this._isSearching) {
                    normalChoices.sort(filter);
                  }
                  var choiceLimit = rendererableChoices.length;
                  var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;
                  if (this._isSearching) {
                    choiceLimit = searchResultLimit;
                  } else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
                    choiceLimit = renderChoiceLimit;
                  }
                  for (var i = 0; i < choiceLimit; i += 1) {
                    if (sortedChoices[i]) {
                      appendChoice(sortedChoices[i]);
                    }
                  }
                  return fragment;
                };
                Choices3.prototype._createItemsFragment = function(items, fragment) {
                  var _this = this;
                  if (fragment === void 0) {
                    fragment = document.createDocumentFragment();
                  }
                  var _a = this.config, shouldSortItems = _a.shouldSortItems, sorter = _a.sorter, removeItemButton = _a.removeItemButton;
                  if (shouldSortItems && !this._isSelectOneElement) {
                    items.sort(sorter);
                  }
                  if (this._isTextElement) {
                    this.passedElement.value = items.map(function(_a2) {
                      var value = _a2.value;
                      return value;
                    }).join(this.config.delimiter);
                  } else {
                    this.passedElement.options = items;
                  }
                  var addItemToFragment = function(item) {
                    var listItem = _this._getTemplate("item", item, removeItemButton);
                    fragment.appendChild(listItem);
                  };
                  items.forEach(addItemToFragment);
                  return fragment;
                };
                Choices3.prototype._triggerChange = function(value) {
                  if (value === void 0 || value === null) {
                    return;
                  }
                  this.passedElement.triggerEvent(constants_1.EVENTS.change, {
                    value
                  });
                };
                Choices3.prototype._selectPlaceholderChoice = function(placeholderChoice) {
                  this._addItem({
                    value: placeholderChoice.value,
                    label: placeholderChoice.label,
                    choiceId: placeholderChoice.id,
                    groupId: placeholderChoice.groupId,
                    placeholder: placeholderChoice.placeholder
                  });
                  this._triggerChange(placeholderChoice.value);
                };
                Choices3.prototype._handleButtonAction = function(activeItems, element) {
                  if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
                    return;
                  }
                  var itemId = element.parentNode && element.parentNode.dataset.id;
                  var itemToRemove = itemId && activeItems.find(function(item) {
                    return item.id === parseInt(itemId, 10);
                  });
                  if (!itemToRemove) {
                    return;
                  }
                  this._removeItem(itemToRemove);
                  this._triggerChange(itemToRemove.value);
                  if (this._isSelectOneElement && this._store.placeholderChoice) {
                    this._selectPlaceholderChoice(this._store.placeholderChoice);
                  }
                };
                Choices3.prototype._handleItemAction = function(activeItems, element, hasShiftKey) {
                  var _this = this;
                  if (hasShiftKey === void 0) {
                    hasShiftKey = false;
                  }
                  if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
                    return;
                  }
                  var passedId = element.dataset.id;
                  activeItems.forEach(function(item) {
                    if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) {
                      _this.highlightItem(item);
                    } else if (!hasShiftKey && item.highlighted) {
                      _this.unhighlightItem(item);
                    }
                  });
                  this.input.focus();
                };
                Choices3.prototype._handleChoiceAction = function(activeItems, element) {
                  if (!activeItems || !element) {
                    return;
                  }
                  var id = element.dataset.id;
                  var choice = id && this._store.getChoiceById(id);
                  if (!choice) {
                    return;
                  }
                  var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : void 0;
                  var hasActiveDropdown = this.dropdown.isActive;
                  choice.keyCode = passedKeyCode;
                  this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
                    choice
                  });
                  if (!choice.selected && !choice.disabled) {
                    var canAddItem = this._canAddItem(activeItems, choice.value);
                    if (canAddItem.response) {
                      this._addItem({
                        value: choice.value,
                        label: choice.label,
                        choiceId: choice.id,
                        groupId: choice.groupId,
                        customProperties: choice.customProperties,
                        placeholder: choice.placeholder,
                        keyCode: choice.keyCode
                      });
                      this._triggerChange(choice.value);
                    }
                  }
                  this.clearInput();
                  if (hasActiveDropdown && this._isSelectOneElement) {
                    this.hideDropdown(true);
                    this.containerOuter.focus();
                  }
                };
                Choices3.prototype._handleBackspace = function(activeItems) {
                  if (!this.config.removeItems || !activeItems) {
                    return;
                  }
                  var lastItem = activeItems[activeItems.length - 1];
                  var hasHighlightedItems = activeItems.some(function(item) {
                    return item.highlighted;
                  });
                  if (this.config.editItems && !hasHighlightedItems && lastItem) {
                    this.input.value = lastItem.value;
                    this.input.setWidth();
                    this._removeItem(lastItem);
                    this._triggerChange(lastItem.value);
                  } else {
                    if (!hasHighlightedItems) {
                      this.highlightItem(lastItem, false);
                    }
                    this.removeHighlightedItems(true);
                  }
                };
                Choices3.prototype._startLoading = function() {
                  this._store.dispatch((0, misc_1.setIsLoading)(true));
                };
                Choices3.prototype._stopLoading = function() {
                  this._store.dispatch((0, misc_1.setIsLoading)(false));
                };
                Choices3.prototype._handleLoadingState = function(setLoading) {
                  if (setLoading === void 0) {
                    setLoading = true;
                  }
                  var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
                  if (setLoading) {
                    this.disable();
                    this.containerOuter.addLoadingState();
                    if (this._isSelectOneElement) {
                      if (!placeholderItem) {
                        placeholderItem = this._getTemplate("placeholder", this.config.loadingText);
                        if (placeholderItem) {
                          this.itemList.append(placeholderItem);
                        }
                      } else {
                        placeholderItem.innerHTML = this.config.loadingText;
                      }
                    } else {
                      this.input.placeholder = this.config.loadingText;
                    }
                  } else {
                    this.enable();
                    this.containerOuter.removeLoadingState();
                    if (this._isSelectOneElement) {
                      if (placeholderItem) {
                        placeholderItem.innerHTML = this._placeholderValue || "";
                      }
                    } else {
                      this.input.placeholder = this._placeholderValue || "";
                    }
                  }
                };
                Choices3.prototype._handleSearch = function(value) {
                  if (!this.input.isFocussed) {
                    return;
                  }
                  var choices = this._store.choices;
                  var _a = this.config, searchFloor = _a.searchFloor, searchChoices = _a.searchChoices;
                  var hasUnactiveChoices = choices.some(function(option) {
                    return !option.active;
                  });
                  if (value !== null && typeof value !== "undefined" && value.length >= searchFloor) {
                    var resultCount = searchChoices ? this._searchChoices(value) : 0;
                    this.passedElement.triggerEvent(constants_1.EVENTS.search, {
                      value,
                      resultCount
                    });
                  } else if (hasUnactiveChoices) {
                    this._isSearching = false;
                    this._store.dispatch((0, choices_1.activateChoices)(true));
                  }
                };
                Choices3.prototype._canAddItem = function(activeItems, value) {
                  var canAddItem = true;
                  var notice = typeof this.config.addItemText === "function" ? this.config.addItemText(value) : this.config.addItemText;
                  if (!this._isSelectOneElement) {
                    var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);
                    if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                      canAddItem = false;
                      notice = typeof this.config.maxItemText === "function" ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                    }
                    if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                      canAddItem = false;
                      notice = typeof this.config.uniqueItemText === "function" ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                    }
                    if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === "function" && !this.config.addItemFilter(value)) {
                      canAddItem = false;
                      notice = typeof this.config.customAddItemText === "function" ? this.config.customAddItemText(value) : this.config.customAddItemText;
                    }
                  }
                  return {
                    response: canAddItem,
                    notice
                  };
                };
                Choices3.prototype._searchChoices = function(value) {
                  var newValue = typeof value === "string" ? value.trim() : value;
                  var currentValue = typeof this._currentValue === "string" ? this._currentValue.trim() : this._currentValue;
                  if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) {
                    return 0;
                  }
                  var haystack = this._store.searchableChoices;
                  var needle = newValue;
                  var options = Object.assign(this.config.fuseOptions, {
                    keys: __spreadArray([], this.config.searchFields, true),
                    includeMatches: true
                  });
                  var fuse = new fuse_js_1.default(haystack, options);
                  var results = fuse.search(needle);
                  this._currentValue = newValue;
                  this._highlightPosition = 0;
                  this._isSearching = true;
                  this._store.dispatch((0, choices_1.filterChoices)(results));
                  return results.length;
                };
                Choices3.prototype._addEventListeners = function() {
                  var documentElement = document.documentElement;
                  documentElement.addEventListener("touchend", this._onTouchEnd, true);
                  this.containerOuter.element.addEventListener("keydown", this._onKeyDown, true);
                  this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, true);
                  documentElement.addEventListener("click", this._onClick, {
                    passive: true
                  });
                  documentElement.addEventListener("touchmove", this._onTouchMove, {
                    passive: true
                  });
                  this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                    passive: true
                  });
                  if (this._isSelectOneElement) {
                    this.containerOuter.element.addEventListener("focus", this._onFocus, {
                      passive: true
                    });
                    this.containerOuter.element.addEventListener("blur", this._onBlur, {
                      passive: true
                    });
                  }
                  this.input.element.addEventListener("keyup", this._onKeyUp, {
                    passive: true
                  });
                  this.input.element.addEventListener("focus", this._onFocus, {
                    passive: true
                  });
                  this.input.element.addEventListener("blur", this._onBlur, {
                    passive: true
                  });
                  if (this.input.element.form) {
                    this.input.element.form.addEventListener("reset", this._onFormReset, {
                      passive: true
                    });
                  }
                  this.input.addEventListeners();
                };
                Choices3.prototype._removeEventListeners = function() {
                  var documentElement = document.documentElement;
                  documentElement.removeEventListener("touchend", this._onTouchEnd, true);
                  this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, true);
                  this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, true);
                  documentElement.removeEventListener("click", this._onClick);
                  documentElement.removeEventListener("touchmove", this._onTouchMove);
                  this.dropdown.element.removeEventListener("mouseover", this._onMouseOver);
                  if (this._isSelectOneElement) {
                    this.containerOuter.element.removeEventListener("focus", this._onFocus);
                    this.containerOuter.element.removeEventListener("blur", this._onBlur);
                  }
                  this.input.element.removeEventListener("keyup", this._onKeyUp);
                  this.input.element.removeEventListener("focus", this._onFocus);
                  this.input.element.removeEventListener("blur", this._onBlur);
                  if (this.input.element.form) {
                    this.input.element.form.removeEventListener("reset", this._onFormReset);
                  }
                  this.input.removeEventListeners();
                };
                Choices3.prototype._onKeyDown = function(event2) {
                  var keyCode = event2.keyCode;
                  var activeItems = this._store.activeItems;
                  var hasFocusedInput = this.input.isFocussed;
                  var hasActiveDropdown = this.dropdown.isActive;
                  var hasItems = this.itemList.hasChildren();
                  var keyString = String.fromCharCode(keyCode);
                  var wasPrintableChar = /[^\x00-\x1F]/.test(keyString);
                  var BACK_KEY = constants_1.KEY_CODES.BACK_KEY, DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY, ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY, A_KEY = constants_1.KEY_CODES.A_KEY, ESC_KEY = constants_1.KEY_CODES.ESC_KEY, UP_KEY = constants_1.KEY_CODES.UP_KEY, DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY, PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY, PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                  if (!this._isTextElement && !hasActiveDropdown && wasPrintableChar) {
                    this.showDropdown();
                    if (!this.input.isFocussed) {
                      this.input.value += event2.key.toLowerCase();
                    }
                  }
                  switch (keyCode) {
                    case A_KEY:
                      return this._onSelectKey(event2, hasItems);
                    case ENTER_KEY:
                      return this._onEnterKey(event2, activeItems, hasActiveDropdown);
                    case ESC_KEY:
                      return this._onEscapeKey(hasActiveDropdown);
                    case UP_KEY:
                    case PAGE_UP_KEY:
                    case DOWN_KEY:
                    case PAGE_DOWN_KEY:
                      return this._onDirectionKey(event2, hasActiveDropdown);
                    case DELETE_KEY:
                    case BACK_KEY:
                      return this._onDeleteKey(event2, activeItems, hasFocusedInput);
                    default:
                  }
                };
                Choices3.prototype._onKeyUp = function(_a) {
                  var target = _a.target, keyCode = _a.keyCode;
                  var value = this.input.value;
                  var activeItems = this._store.activeItems;
                  var canAddItem = this._canAddItem(activeItems, value);
                  var backKey = constants_1.KEY_CODES.BACK_KEY, deleteKey = constants_1.KEY_CODES.DELETE_KEY;
                  if (this._isTextElement) {
                    var canShowDropdownNotice = canAddItem.notice && value;
                    if (canShowDropdownNotice) {
                      var dropdownItem = this._getTemplate("notice", canAddItem.notice);
                      this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                      this.showDropdown(true);
                    } else {
                      this.hideDropdown(true);
                    }
                  } else {
                    var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
                    var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
                    var canReactivateChoices = !this._isTextElement && this._isSearching;
                    var canSearch = this._canSearch && canAddItem.response;
                    if (userHasRemovedValue && canReactivateChoices) {
                      this._isSearching = false;
                      this._store.dispatch((0, choices_1.activateChoices)(true));
                    } else if (canSearch) {
                      this._handleSearch(this.input.rawValue);
                    }
                  }
                  this._canSearch = this.config.searchEnabled;
                };
                Choices3.prototype._onSelectKey = function(event2, hasItems) {
                  var ctrlKey = event2.ctrlKey, metaKey = event2.metaKey;
                  var hasCtrlDownKeyPressed = ctrlKey || metaKey;
                  if (hasCtrlDownKeyPressed && hasItems) {
                    this._canSearch = false;
                    var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                    if (shouldHightlightAll) {
                      this.highlightAll();
                    }
                  }
                };
                Choices3.prototype._onEnterKey = function(event2, activeItems, hasActiveDropdown) {
                  var target = event2.target;
                  var enterKey = constants_1.KEY_CODES.ENTER_KEY;
                  var targetWasButton = target && target.hasAttribute("data-button");
                  if (this._isTextElement && target && target.value) {
                    var value = this.input.value;
                    var canAddItem = this._canAddItem(activeItems, value);
                    if (canAddItem.response) {
                      this.hideDropdown(true);
                      this._addItem({
                        value
                      });
                      this._triggerChange(value);
                      this.clearInput();
                    }
                  }
                  if (targetWasButton) {
                    this._handleButtonAction(activeItems, target);
                    event2.preventDefault();
                  }
                  if (hasActiveDropdown) {
                    var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                    if (highlightedChoice) {
                      if (activeItems[0]) {
                        activeItems[0].keyCode = enterKey;
                      }
                      this._handleChoiceAction(activeItems, highlightedChoice);
                    }
                    event2.preventDefault();
                  } else if (this._isSelectOneElement) {
                    this.showDropdown();
                    event2.preventDefault();
                  }
                };
                Choices3.prototype._onEscapeKey = function(hasActiveDropdown) {
                  if (hasActiveDropdown) {
                    this.hideDropdown(true);
                    this.containerOuter.focus();
                  }
                };
                Choices3.prototype._onDirectionKey = function(event2, hasActiveDropdown) {
                  var keyCode = event2.keyCode, metaKey = event2.metaKey;
                  var downKey = constants_1.KEY_CODES.DOWN_KEY, pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY, pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                  if (hasActiveDropdown || this._isSelectOneElement) {
                    this.showDropdown();
                    this._canSearch = false;
                    var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                    var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                    var selectableChoiceIdentifier = "[data-choice-selectable]";
                    var nextEl = void 0;
                    if (skipKey) {
                      if (directionInt > 0) {
                        nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
                      } else {
                        nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                      }
                    } else {
                      var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                      if (currentEl) {
                        nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
                      } else {
                        nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                      }
                    }
                    if (nextEl) {
                      if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) {
                        this.choiceList.scrollToChildElement(nextEl, directionInt);
                      }
                      this._highlightChoice(nextEl);
                    }
                    event2.preventDefault();
                  }
                };
                Choices3.prototype._onDeleteKey = function(event2, activeItems, hasFocusedInput) {
                  var target = event2.target;
                  if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
                    this._handleBackspace(activeItems);
                    event2.preventDefault();
                  }
                };
                Choices3.prototype._onTouchMove = function() {
                  if (this._wasTap) {
                    this._wasTap = false;
                  }
                };
                Choices3.prototype._onTouchEnd = function(event2) {
                  var target = (event2 || event2.touches[0]).target;
                  var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
                  if (touchWasWithinContainer) {
                    var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
                    if (containerWasExactTarget) {
                      if (this._isTextElement) {
                        this.input.focus();
                      } else if (this._isSelectMultipleElement) {
                        this.showDropdown();
                      }
                    }
                    event2.stopPropagation();
                  }
                  this._wasTap = true;
                };
                Choices3.prototype._onMouseDown = function(event2) {
                  var target = event2.target;
                  if (!(target instanceof HTMLElement)) {
                    return;
                  }
                  if (IS_IE11 && this.choiceList.element.contains(target)) {
                    var firstChoice = this.choiceList.element.firstElementChild;
                    var isOnScrollbar = this._direction === "ltr" ? event2.offsetX >= firstChoice.offsetWidth : event2.offsetX < firstChoice.offsetLeft;
                    this._isScrollingOnIe = isOnScrollbar;
                  }
                  if (target === this.input.element) {
                    return;
                  }
                  var item = target.closest("[data-button],[data-item],[data-choice]");
                  if (item instanceof HTMLElement) {
                    var hasShiftKey = event2.shiftKey;
                    var activeItems = this._store.activeItems;
                    var dataset = item.dataset;
                    if ("button" in dataset) {
                      this._handleButtonAction(activeItems, item);
                    } else if ("item" in dataset) {
                      this._handleItemAction(activeItems, item, hasShiftKey);
                    } else if ("choice" in dataset) {
                      this._handleChoiceAction(activeItems, item);
                    }
                  }
                  event2.preventDefault();
                };
                Choices3.prototype._onMouseOver = function(_a) {
                  var target = _a.target;
                  if (target instanceof HTMLElement && "choice" in target.dataset) {
                    this._highlightChoice(target);
                  }
                };
                Choices3.prototype._onClick = function(_a) {
                  var target = _a.target;
                  var clickWasWithinContainer = this.containerOuter.element.contains(target);
                  if (clickWasWithinContainer) {
                    if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
                      if (this._isTextElement) {
                        if (document.activeElement !== this.input.element) {
                          this.input.focus();
                        }
                      } else {
                        this.showDropdown();
                        this.containerOuter.focus();
                      }
                    } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
                      this.hideDropdown();
                    }
                  } else {
                    var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
                    if (hasHighlightedItems) {
                      this.unhighlightAll();
                    }
                    this.containerOuter.removeFocusState();
                    this.hideDropdown(true);
                  }
                };
                Choices3.prototype._onFocus = function(_a) {
                  var _b;
                  var _this = this;
                  var target = _a.target;
                  var focusWasWithinContainer = target && this.containerOuter.element.contains(target);
                  if (!focusWasWithinContainer) {
                    return;
                  }
                  var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                    if (target === _this.input.element) {
                      _this.containerOuter.addFocusState();
                    }
                  }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                    _this.containerOuter.addFocusState();
                    if (target === _this.input.element) {
                      _this.showDropdown(true);
                    }
                  }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                    if (target === _this.input.element) {
                      _this.showDropdown(true);
                      _this.containerOuter.addFocusState();
                    }
                  }, _b);
                  focusActions[this.passedElement.element.type]();
                };
                Choices3.prototype._onBlur = function(_a) {
                  var _b;
                  var _this = this;
                  var target = _a.target;
                  var blurWasWithinContainer = target && this.containerOuter.element.contains(target);
                  if (blurWasWithinContainer && !this._isScrollingOnIe) {
                    var activeItems = this._store.activeItems;
                    var hasHighlightedItems_1 = activeItems.some(function(item) {
                      return item.highlighted;
                    });
                    var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                      if (target === _this.input.element) {
                        _this.containerOuter.removeFocusState();
                        if (hasHighlightedItems_1) {
                          _this.unhighlightAll();
                        }
                        _this.hideDropdown(true);
                      }
                    }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                      _this.containerOuter.removeFocusState();
                      if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) {
                        _this.hideDropdown(true);
                      }
                    }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                      if (target === _this.input.element) {
                        _this.containerOuter.removeFocusState();
                        _this.hideDropdown(true);
                        if (hasHighlightedItems_1) {
                          _this.unhighlightAll();
                        }
                      }
                    }, _b);
                    blurActions[this.passedElement.element.type]();
                  } else {
                    this._isScrollingOnIe = false;
                    this.input.element.focus();
                  }
                };
                Choices3.prototype._onFormReset = function() {
                  this._store.dispatch((0, misc_1.resetTo)(this._initialState));
                };
                Choices3.prototype._highlightChoice = function(el) {
                  var _this = this;
                  if (el === void 0) {
                    el = null;
                  }
                  var choices = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                  if (!choices.length) {
                    return;
                  }
                  var passedEl = el;
                  var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState)));
                  highlightedChoices.forEach(function(choice) {
                    choice.classList.remove(_this.config.classNames.highlightedState);
                    choice.setAttribute("aria-selected", "false");
                  });
                  if (passedEl) {
                    this._highlightPosition = choices.indexOf(passedEl);
                  } else {
                    if (choices.length > this._highlightPosition) {
                      passedEl = choices[this._highlightPosition];
                    } else {
                      passedEl = choices[choices.length - 1];
                    }
                    if (!passedEl) {
                      passedEl = choices[0];
                    }
                  }
                  passedEl.classList.add(this.config.classNames.highlightedState);
                  passedEl.setAttribute("aria-selected", "true");
                  this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
                    el: passedEl
                  });
                  if (this.dropdown.isActive) {
                    this.input.setActiveDescendant(passedEl.id);
                    this.containerOuter.setActiveDescendant(passedEl.id);
                  }
                };
                Choices3.prototype._addItem = function(_a) {
                  var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.choiceId, choiceId = _c === void 0 ? -1 : _c, _d = _a.groupId, groupId = _d === void 0 ? -1 : _d, _e = _a.customProperties, customProperties = _e === void 0 ? {} : _e, _f = _a.placeholder, placeholder = _f === void 0 ? false : _f, _g = _a.keyCode, keyCode = _g === void 0 ? -1 : _g;
                  var passedValue = typeof value === "string" ? value.trim() : value;
                  var items = this._store.items;
                  var passedLabel = label || passedValue;
                  var passedOptionId = choiceId || -1;
                  var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                  var id = items ? items.length + 1 : 1;
                  if (this.config.prependValue) {
                    passedValue = this.config.prependValue + passedValue.toString();
                  }
                  if (this.config.appendValue) {
                    passedValue += this.config.appendValue.toString();
                  }
                  this._store.dispatch((0, items_1.addItem)({
                    value: passedValue,
                    label: passedLabel,
                    id,
                    choiceId: passedOptionId,
                    groupId,
                    customProperties,
                    placeholder,
                    keyCode
                  }));
                  if (this._isSelectOneElement) {
                    this.removeActiveItems(id);
                  }
                  this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
                    id,
                    value: passedValue,
                    label: passedLabel,
                    customProperties,
                    groupValue: group && group.value ? group.value : null,
                    keyCode
                  });
                };
                Choices3.prototype._removeItem = function(item) {
                  var id = item.id, value = item.value, label = item.label, customProperties = item.customProperties, choiceId = item.choiceId, groupId = item.groupId;
                  var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
                  if (!id || !choiceId) {
                    return;
                  }
                  this._store.dispatch((0, items_1.removeItem)(id, choiceId));
                  this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
                    id,
                    value,
                    label,
                    customProperties,
                    groupValue: group && group.value ? group.value : null
                  });
                };
                Choices3.prototype._addChoice = function(_a) {
                  var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.groupId, groupId = _e === void 0 ? -1 : _e, _f = _a.customProperties, customProperties = _f === void 0 ? {} : _f, _g = _a.placeholder, placeholder = _g === void 0 ? false : _g, _h = _a.keyCode, keyCode = _h === void 0 ? -1 : _h;
                  if (typeof value === "undefined" || value === null) {
                    return;
                  }
                  var choices = this._store.choices;
                  var choiceLabel = label || value;
                  var choiceId = choices ? choices.length + 1 : 1;
                  var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);
                  this._store.dispatch((0, choices_1.addChoice)({
                    id: choiceId,
                    groupId,
                    elementId: choiceElementId,
                    value,
                    label: choiceLabel,
                    disabled: isDisabled,
                    customProperties,
                    placeholder,
                    keyCode
                  }));
                  if (isSelected) {
                    this._addItem({
                      value,
                      label: choiceLabel,
                      choiceId,
                      customProperties,
                      placeholder,
                      keyCode
                    });
                  }
                };
                Choices3.prototype._addGroup = function(_a) {
                  var _this = this;
                  var group = _a.group, id = _a.id, _b = _a.valueKey, valueKey = _b === void 0 ? "value" : _b, _c = _a.labelKey, labelKey = _c === void 0 ? "label" : _c;
                  var groupChoices = (0, utils_1.isType)("Object", group) ? group.choices : Array.from(group.getElementsByTagName("OPTION"));
                  var groupId = id || Math.floor(new Date().valueOf() * Math.random());
                  var isDisabled = group.disabled ? group.disabled : false;
                  if (groupChoices) {
                    this._store.dispatch((0, groups_1.addGroup)({
                      value: group.label,
                      id: groupId,
                      active: true,
                      disabled: isDisabled
                    }));
                    var addGroupChoices = function(choice) {
                      var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                      _this._addChoice({
                        value: choice[valueKey],
                        label: (0, utils_1.isType)("Object", choice) ? choice[labelKey] : choice.innerHTML,
                        isSelected: choice.selected,
                        isDisabled: isOptDisabled,
                        groupId,
                        customProperties: choice.customProperties,
                        placeholder: choice.placeholder
                      });
                    };
                    groupChoices.forEach(addGroupChoices);
                  } else {
                    this._store.dispatch((0, groups_1.addGroup)({
                      value: group.label,
                      id: group.id,
                      active: false,
                      disabled: group.disabled
                    }));
                  }
                };
                Choices3.prototype._getTemplate = function(template) {
                  var _a;
                  var args = [];
                  for (var _i2 = 1; _i2 < arguments.length; _i2++) {
                    args[_i2 - 1] = arguments[_i2];
                  }
                  return (_a = this._templates[template]).call.apply(_a, __spreadArray([this, this.config], args, false));
                };
                Choices3.prototype._createTemplates = function() {
                  var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
                  var userTemplates = {};
                  if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === "function") {
                    userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
                  }
                  this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
                };
                Choices3.prototype._createElements = function() {
                  this.containerOuter = new components_1.Container({
                    element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type,
                    position: this.config.position
                  });
                  this.containerInner = new components_1.Container({
                    element: this._getTemplate("containerInner"),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type,
                    position: this.config.position
                  });
                  this.input = new components_1.Input({
                    element: this._getTemplate("input", this._placeholderValue),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type,
                    preventPaste: !this.config.paste
                  });
                  this.choiceList = new components_1.List({
                    element: this._getTemplate("choiceList", this._isSelectOneElement)
                  });
                  this.itemList = new components_1.List({
                    element: this._getTemplate("itemList", this._isSelectOneElement)
                  });
                  this.dropdown = new components_1.Dropdown({
                    element: this._getTemplate("dropdown"),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type
                  });
                };
                Choices3.prototype._createStructure = function() {
                  this.passedElement.conceal();
                  this.containerInner.wrap(this.passedElement.element);
                  this.containerOuter.wrap(this.containerInner.element);
                  if (this._isSelectOneElement) {
                    this.input.placeholder = this.config.searchPlaceholderValue || "";
                  } else if (this._placeholderValue) {
                    this.input.placeholder = this._placeholderValue;
                    this.input.setWidth();
                  }
                  this.containerOuter.element.appendChild(this.containerInner.element);
                  this.containerOuter.element.appendChild(this.dropdown.element);
                  this.containerInner.element.appendChild(this.itemList.element);
                  if (!this._isTextElement) {
                    this.dropdown.element.appendChild(this.choiceList.element);
                  }
                  if (!this._isSelectOneElement) {
                    this.containerInner.element.appendChild(this.input.element);
                  } else if (this.config.searchEnabled) {
                    this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
                  }
                  if (this._isSelectElement) {
                    this._highlightPosition = 0;
                    this._isSearching = false;
                    this._startLoading();
                    if (this._presetGroups.length) {
                      this._addPredefinedGroups(this._presetGroups);
                    } else {
                      this._addPredefinedChoices(this._presetChoices);
                    }
                    this._stopLoading();
                  }
                  if (this._isTextElement) {
                    this._addPredefinedItems(this._presetItems);
                  }
                };
                Choices3.prototype._addPredefinedGroups = function(groups) {
                  var _this = this;
                  var placeholderChoice = this.passedElement.placeholderOption;
                  if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === "SELECT") {
                    this._addChoice({
                      value: placeholderChoice.value,
                      label: placeholderChoice.innerHTML,
                      isSelected: placeholderChoice.selected,
                      isDisabled: placeholderChoice.disabled,
                      placeholder: true
                    });
                  }
                  groups.forEach(function(group) {
                    return _this._addGroup({
                      group,
                      id: group.id || null
                    });
                  });
                };
                Choices3.prototype._addPredefinedChoices = function(choices) {
                  var _this = this;
                  if (this.config.shouldSort) {
                    choices.sort(this.config.sorter);
                  }
                  var hasSelectedChoice = choices.some(function(choice) {
                    return choice.selected;
                  });
                  var firstEnabledChoiceIndex = choices.findIndex(function(choice) {
                    return choice.disabled === void 0 || !choice.disabled;
                  });
                  choices.forEach(function(choice, index) {
                    var _a = choice.value, value = _a === void 0 ? "" : _a, label = choice.label, customProperties = choice.customProperties, placeholder = choice.placeholder;
                    if (_this._isSelectElement) {
                      if (choice.choices) {
                        _this._addGroup({
                          group: choice,
                          id: choice.id || null
                        });
                      } else {
                        var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                        var isSelected = shouldPreselect ? true : choice.selected;
                        var isDisabled = choice.disabled;
                        _this._addChoice({
                          value,
                          label,
                          isSelected: !!isSelected,
                          isDisabled: !!isDisabled,
                          placeholder: !!placeholder,
                          customProperties
                        });
                      }
                    } else {
                      _this._addChoice({
                        value,
                        label,
                        isSelected: !!choice.selected,
                        isDisabled: !!choice.disabled,
                        placeholder: !!choice.placeholder,
                        customProperties
                      });
                    }
                  });
                };
                Choices3.prototype._addPredefinedItems = function(items) {
                  var _this = this;
                  items.forEach(function(item) {
                    if (typeof item === "object" && item.value) {
                      _this._addItem({
                        value: item.value,
                        label: item.label,
                        choiceId: item.id,
                        customProperties: item.customProperties,
                        placeholder: item.placeholder
                      });
                    }
                    if (typeof item === "string") {
                      _this._addItem({
                        value: item
                      });
                    }
                  });
                };
                Choices3.prototype._setChoiceOrItem = function(item) {
                  var _this = this;
                  var itemType = (0, utils_1.getType)(item).toLowerCase();
                  var handleType = {
                    object: function() {
                      if (!item.value) {
                        return;
                      }
                      if (!_this._isTextElement) {
                        _this._addChoice({
                          value: item.value,
                          label: item.label,
                          isSelected: true,
                          isDisabled: false,
                          customProperties: item.customProperties,
                          placeholder: item.placeholder
                        });
                      } else {
                        _this._addItem({
                          value: item.value,
                          label: item.label,
                          choiceId: item.id,
                          customProperties: item.customProperties,
                          placeholder: item.placeholder
                        });
                      }
                    },
                    string: function() {
                      if (!_this._isTextElement) {
                        _this._addChoice({
                          value: item,
                          label: item,
                          isSelected: true,
                          isDisabled: false
                        });
                      } else {
                        _this._addItem({
                          value: item
                        });
                      }
                    }
                  };
                  handleType[itemType]();
                };
                Choices3.prototype._findAndSelectChoiceByValue = function(value) {
                  var _this = this;
                  var choices = this._store.choices;
                  var foundChoice = choices.find(function(choice) {
                    return _this.config.valueComparer(choice.value, value);
                  });
                  if (foundChoice && !foundChoice.selected) {
                    this._addItem({
                      value: foundChoice.value,
                      label: foundChoice.label,
                      choiceId: foundChoice.id,
                      groupId: foundChoice.groupId,
                      customProperties: foundChoice.customProperties,
                      placeholder: foundChoice.placeholder,
                      keyCode: foundChoice.keyCode
                    });
                  }
                };
                Choices3.prototype._generatePlaceholderValue = function() {
                  if (this._isSelectElement && this.passedElement.placeholderOption) {
                    var placeholderOption = this.passedElement.placeholderOption;
                    return placeholderOption ? placeholderOption.text : null;
                  }
                  var _a = this.config, placeholder = _a.placeholder, placeholderValue = _a.placeholderValue;
                  var dataset = this.passedElement.element.dataset;
                  if (placeholder) {
                    if (placeholderValue) {
                      return placeholderValue;
                    }
                    if (dataset.placeholder) {
                      return dataset.placeholder;
                    }
                  }
                  return null;
                };
                return Choices3;
              }();
              exports2["default"] = Choices2;
            },
            613: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var utils_1 = __webpack_require__2(799);
              var constants_1 = __webpack_require__2(883);
              var Container = function() {
                function Container2(_a) {
                  var element = _a.element, type = _a.type, classNames = _a.classNames, position = _a.position;
                  this.element = element;
                  this.classNames = classNames;
                  this.type = type;
                  this.position = position;
                  this.isOpen = false;
                  this.isFlipped = false;
                  this.isFocussed = false;
                  this.isDisabled = false;
                  this.isLoading = false;
                  this._onFocus = this._onFocus.bind(this);
                  this._onBlur = this._onBlur.bind(this);
                }
                Container2.prototype.addEventListeners = function() {
                  this.element.addEventListener("focus", this._onFocus);
                  this.element.addEventListener("blur", this._onBlur);
                };
                Container2.prototype.removeEventListeners = function() {
                  this.element.removeEventListener("focus", this._onFocus);
                  this.element.removeEventListener("blur", this._onBlur);
                };
                Container2.prototype.shouldFlip = function(dropdownPos) {
                  if (typeof dropdownPos !== "number") {
                    return false;
                  }
                  var shouldFlip = false;
                  if (this.position === "auto") {
                    shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
                  } else if (this.position === "top") {
                    shouldFlip = true;
                  }
                  return shouldFlip;
                };
                Container2.prototype.setActiveDescendant = function(activeDescendantID) {
                  this.element.setAttribute("aria-activedescendant", activeDescendantID);
                };
                Container2.prototype.removeActiveDescendant = function() {
                  this.element.removeAttribute("aria-activedescendant");
                };
                Container2.prototype.open = function(dropdownPos) {
                  this.element.classList.add(this.classNames.openState);
                  this.element.setAttribute("aria-expanded", "true");
                  this.isOpen = true;
                  if (this.shouldFlip(dropdownPos)) {
                    this.element.classList.add(this.classNames.flippedState);
                    this.isFlipped = true;
                  }
                };
                Container2.prototype.close = function() {
                  this.element.classList.remove(this.classNames.openState);
                  this.element.setAttribute("aria-expanded", "false");
                  this.removeActiveDescendant();
                  this.isOpen = false;
                  if (this.isFlipped) {
                    this.element.classList.remove(this.classNames.flippedState);
                    this.isFlipped = false;
                  }
                };
                Container2.prototype.focus = function() {
                  if (!this.isFocussed) {
                    this.element.focus();
                  }
                };
                Container2.prototype.addFocusState = function() {
                  this.element.classList.add(this.classNames.focusState);
                };
                Container2.prototype.removeFocusState = function() {
                  this.element.classList.remove(this.classNames.focusState);
                };
                Container2.prototype.enable = function() {
                  this.element.classList.remove(this.classNames.disabledState);
                  this.element.removeAttribute("aria-disabled");
                  if (this.type === constants_1.SELECT_ONE_TYPE) {
                    this.element.setAttribute("tabindex", "0");
                  }
                  this.isDisabled = false;
                };
                Container2.prototype.disable = function() {
                  this.element.classList.add(this.classNames.disabledState);
                  this.element.setAttribute("aria-disabled", "true");
                  if (this.type === constants_1.SELECT_ONE_TYPE) {
                    this.element.setAttribute("tabindex", "-1");
                  }
                  this.isDisabled = true;
                };
                Container2.prototype.wrap = function(element) {
                  (0, utils_1.wrap)(element, this.element);
                };
                Container2.prototype.unwrap = function(element) {
                  if (this.element.parentNode) {
                    this.element.parentNode.insertBefore(element, this.element);
                    this.element.parentNode.removeChild(this.element);
                  }
                };
                Container2.prototype.addLoadingState = function() {
                  this.element.classList.add(this.classNames.loadingState);
                  this.element.setAttribute("aria-busy", "true");
                  this.isLoading = true;
                };
                Container2.prototype.removeLoadingState = function() {
                  this.element.classList.remove(this.classNames.loadingState);
                  this.element.removeAttribute("aria-busy");
                  this.isLoading = false;
                };
                Container2.prototype._onFocus = function() {
                  this.isFocussed = true;
                };
                Container2.prototype._onBlur = function() {
                  this.isFocussed = false;
                };
                return Container2;
              }();
              exports2["default"] = Container;
            },
            217: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var Dropdown = function() {
                function Dropdown2(_a) {
                  var element = _a.element, type = _a.type, classNames = _a.classNames;
                  this.element = element;
                  this.classNames = classNames;
                  this.type = type;
                  this.isActive = false;
                }
                Object.defineProperty(Dropdown2.prototype, "distanceFromTopWindow", {
                  get: function() {
                    return this.element.getBoundingClientRect().bottom;
                  },
                  enumerable: false,
                  configurable: true
                });
                Dropdown2.prototype.getChild = function(selector3) {
                  return this.element.querySelector(selector3);
                };
                Dropdown2.prototype.show = function() {
                  this.element.classList.add(this.classNames.activeState);
                  this.element.setAttribute("aria-expanded", "true");
                  this.isActive = true;
                  return this;
                };
                Dropdown2.prototype.hide = function() {
                  this.element.classList.remove(this.classNames.activeState);
                  this.element.setAttribute("aria-expanded", "false");
                  this.isActive = false;
                  return this;
                };
                return Dropdown2;
              }();
              exports2["default"] = Dropdown;
            },
            520: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.WrappedSelect = exports2.WrappedInput = exports2.List = exports2.Input = exports2.Container = exports2.Dropdown = void 0;
              var dropdown_1 = __importDefault(__webpack_require__2(217));
              exports2.Dropdown = dropdown_1.default;
              var container_1 = __importDefault(__webpack_require__2(613));
              exports2.Container = container_1.default;
              var input_1 = __importDefault(__webpack_require__2(11));
              exports2.Input = input_1.default;
              var list_1 = __importDefault(__webpack_require__2(624));
              exports2.List = list_1.default;
              var wrapped_input_1 = __importDefault(__webpack_require__2(541));
              exports2.WrappedInput = wrapped_input_1.default;
              var wrapped_select_1 = __importDefault(__webpack_require__2(982));
              exports2.WrappedSelect = wrapped_select_1.default;
            },
            11: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var utils_1 = __webpack_require__2(799);
              var constants_1 = __webpack_require__2(883);
              var Input = function() {
                function Input2(_a) {
                  var element = _a.element, type = _a.type, classNames = _a.classNames, preventPaste = _a.preventPaste;
                  this.element = element;
                  this.type = type;
                  this.classNames = classNames;
                  this.preventPaste = preventPaste;
                  this.isFocussed = this.element.isEqualNode(document.activeElement);
                  this.isDisabled = element.disabled;
                  this._onPaste = this._onPaste.bind(this);
                  this._onInput = this._onInput.bind(this);
                  this._onFocus = this._onFocus.bind(this);
                  this._onBlur = this._onBlur.bind(this);
                }
                Object.defineProperty(Input2.prototype, "placeholder", {
                  set: function(placeholder) {
                    this.element.placeholder = placeholder;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Input2.prototype, "value", {
                  get: function() {
                    return (0, utils_1.sanitise)(this.element.value);
                  },
                  set: function(value) {
                    this.element.value = value;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Input2.prototype, "rawValue", {
                  get: function() {
                    return this.element.value;
                  },
                  enumerable: false,
                  configurable: true
                });
                Input2.prototype.addEventListeners = function() {
                  this.element.addEventListener("paste", this._onPaste);
                  this.element.addEventListener("input", this._onInput, {
                    passive: true
                  });
                  this.element.addEventListener("focus", this._onFocus, {
                    passive: true
                  });
                  this.element.addEventListener("blur", this._onBlur, {
                    passive: true
                  });
                };
                Input2.prototype.removeEventListeners = function() {
                  this.element.removeEventListener("input", this._onInput);
                  this.element.removeEventListener("paste", this._onPaste);
                  this.element.removeEventListener("focus", this._onFocus);
                  this.element.removeEventListener("blur", this._onBlur);
                };
                Input2.prototype.enable = function() {
                  this.element.removeAttribute("disabled");
                  this.isDisabled = false;
                };
                Input2.prototype.disable = function() {
                  this.element.setAttribute("disabled", "");
                  this.isDisabled = true;
                };
                Input2.prototype.focus = function() {
                  if (!this.isFocussed) {
                    this.element.focus();
                  }
                };
                Input2.prototype.blur = function() {
                  if (this.isFocussed) {
                    this.element.blur();
                  }
                };
                Input2.prototype.clear = function(setWidth) {
                  if (setWidth === void 0) {
                    setWidth = true;
                  }
                  if (this.element.value) {
                    this.element.value = "";
                  }
                  if (setWidth) {
                    this.setWidth();
                  }
                  return this;
                };
                Input2.prototype.setWidth = function() {
                  var _a = this.element, style = _a.style, value = _a.value, placeholder = _a.placeholder;
                  style.minWidth = "".concat(placeholder.length + 1, "ch");
                  style.width = "".concat(value.length + 1, "ch");
                };
                Input2.prototype.setActiveDescendant = function(activeDescendantID) {
                  this.element.setAttribute("aria-activedescendant", activeDescendantID);
                };
                Input2.prototype.removeActiveDescendant = function() {
                  this.element.removeAttribute("aria-activedescendant");
                };
                Input2.prototype._onInput = function() {
                  if (this.type !== constants_1.SELECT_ONE_TYPE) {
                    this.setWidth();
                  }
                };
                Input2.prototype._onPaste = function(event2) {
                  if (this.preventPaste) {
                    event2.preventDefault();
                  }
                };
                Input2.prototype._onFocus = function() {
                  this.isFocussed = true;
                };
                Input2.prototype._onBlur = function() {
                  this.isFocussed = false;
                };
                return Input2;
              }();
              exports2["default"] = Input;
            },
            624: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var constants_1 = __webpack_require__2(883);
              var List = function() {
                function List2(_a) {
                  var element = _a.element;
                  this.element = element;
                  this.scrollPos = this.element.scrollTop;
                  this.height = this.element.offsetHeight;
                }
                List2.prototype.clear = function() {
                  this.element.innerHTML = "";
                };
                List2.prototype.append = function(node) {
                  this.element.appendChild(node);
                };
                List2.prototype.getChild = function(selector3) {
                  return this.element.querySelector(selector3);
                };
                List2.prototype.hasChildren = function() {
                  return this.element.hasChildNodes();
                };
                List2.prototype.scrollToTop = function() {
                  this.element.scrollTop = 0;
                };
                List2.prototype.scrollToChildElement = function(element, direction) {
                  var _this = this;
                  if (!element) {
                    return;
                  }
                  var listHeight = this.element.offsetHeight;
                  var listScrollPosition = this.element.scrollTop + listHeight;
                  var elementHeight = element.offsetHeight;
                  var elementPos = element.offsetTop + elementHeight;
                  var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
                  requestAnimationFrame(function() {
                    _this._animateScroll(destination, direction);
                  });
                };
                List2.prototype._scrollDown = function(scrollPos, strength, destination) {
                  var easing = (destination - scrollPos) / strength;
                  var distance = easing > 1 ? easing : 1;
                  this.element.scrollTop = scrollPos + distance;
                };
                List2.prototype._scrollUp = function(scrollPos, strength, destination) {
                  var easing = (scrollPos - destination) / strength;
                  var distance = easing > 1 ? easing : 1;
                  this.element.scrollTop = scrollPos - distance;
                };
                List2.prototype._animateScroll = function(destination, direction) {
                  var _this = this;
                  var strength = constants_1.SCROLLING_SPEED;
                  var choiceListScrollTop = this.element.scrollTop;
                  var continueAnimation = false;
                  if (direction > 0) {
                    this._scrollDown(choiceListScrollTop, strength, destination);
                    if (choiceListScrollTop < destination) {
                      continueAnimation = true;
                    }
                  } else {
                    this._scrollUp(choiceListScrollTop, strength, destination);
                    if (choiceListScrollTop > destination) {
                      continueAnimation = true;
                    }
                  }
                  if (continueAnimation) {
                    requestAnimationFrame(function() {
                      _this._animateScroll(destination, direction);
                    });
                  }
                };
                return List2;
              }();
              exports2["default"] = List;
            },
            730: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var utils_1 = __webpack_require__2(799);
              var WrappedElement = function() {
                function WrappedElement2(_a) {
                  var element = _a.element, classNames = _a.classNames;
                  this.element = element;
                  this.classNames = classNames;
                  if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
                    throw new TypeError("Invalid element passed");
                  }
                  this.isDisabled = false;
                }
                Object.defineProperty(WrappedElement2.prototype, "isActive", {
                  get: function() {
                    return this.element.dataset.choice === "active";
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(WrappedElement2.prototype, "dir", {
                  get: function() {
                    return this.element.dir;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(WrappedElement2.prototype, "value", {
                  get: function() {
                    return this.element.value;
                  },
                  set: function(value) {
                    this.element.value = value;
                  },
                  enumerable: false,
                  configurable: true
                });
                WrappedElement2.prototype.conceal = function() {
                  this.element.classList.add(this.classNames.input);
                  this.element.hidden = true;
                  this.element.tabIndex = -1;
                  var origStyle = this.element.getAttribute("style");
                  if (origStyle) {
                    this.element.setAttribute("data-choice-orig-style", origStyle);
                  }
                  this.element.setAttribute("data-choice", "active");
                };
                WrappedElement2.prototype.reveal = function() {
                  this.element.classList.remove(this.classNames.input);
                  this.element.hidden = false;
                  this.element.removeAttribute("tabindex");
                  var origStyle = this.element.getAttribute("data-choice-orig-style");
                  if (origStyle) {
                    this.element.removeAttribute("data-choice-orig-style");
                    this.element.setAttribute("style", origStyle);
                  } else {
                    this.element.removeAttribute("style");
                  }
                  this.element.removeAttribute("data-choice");
                  this.element.value = this.element.value;
                };
                WrappedElement2.prototype.enable = function() {
                  this.element.removeAttribute("disabled");
                  this.element.disabled = false;
                  this.isDisabled = false;
                };
                WrappedElement2.prototype.disable = function() {
                  this.element.setAttribute("disabled", "");
                  this.element.disabled = true;
                  this.isDisabled = true;
                };
                WrappedElement2.prototype.triggerEvent = function(eventType, data) {
                  (0, utils_1.dispatchEvent)(this.element, eventType, data);
                };
                return WrappedElement2;
              }();
              exports2["default"] = WrappedElement;
            },
            541: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __extends = this && this.__extends || function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                  } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2)
                      if (Object.prototype.hasOwnProperty.call(b2, p))
                        d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  if (typeof b !== "function" && b !== null)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              }();
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var wrapped_element_1 = __importDefault(__webpack_require__2(730));
              var WrappedInput = function(_super) {
                __extends(WrappedInput2, _super);
                function WrappedInput2(_a) {
                  var element = _a.element, classNames = _a.classNames, delimiter = _a.delimiter;
                  var _this = _super.call(this, {
                    element,
                    classNames
                  }) || this;
                  _this.delimiter = delimiter;
                  return _this;
                }
                Object.defineProperty(WrappedInput2.prototype, "value", {
                  get: function() {
                    return this.element.value;
                  },
                  set: function(value) {
                    this.element.setAttribute("value", value);
                    this.element.value = value;
                  },
                  enumerable: false,
                  configurable: true
                });
                return WrappedInput2;
              }(wrapped_element_1.default);
              exports2["default"] = WrappedInput;
            },
            982: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __extends = this && this.__extends || function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                  } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2)
                      if (Object.prototype.hasOwnProperty.call(b2, p))
                        d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  if (typeof b !== "function" && b !== null)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              }();
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var wrapped_element_1 = __importDefault(__webpack_require__2(730));
              var WrappedSelect = function(_super) {
                __extends(WrappedSelect2, _super);
                function WrappedSelect2(_a) {
                  var element = _a.element, classNames = _a.classNames, template = _a.template;
                  var _this = _super.call(this, {
                    element,
                    classNames
                  }) || this;
                  _this.template = template;
                  return _this;
                }
                Object.defineProperty(WrappedSelect2.prototype, "placeholderOption", {
                  get: function() {
                    return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(WrappedSelect2.prototype, "optionGroups", {
                  get: function() {
                    return Array.from(this.element.getElementsByTagName("OPTGROUP"));
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(WrappedSelect2.prototype, "options", {
                  get: function() {
                    return Array.from(this.element.options);
                  },
                  set: function(options) {
                    var _this = this;
                    var fragment = document.createDocumentFragment();
                    var addOptionToFragment = function(data) {
                      var option = _this.template(data);
                      fragment.appendChild(option);
                    };
                    options.forEach(function(optionData) {
                      return addOptionToFragment(optionData);
                    });
                    this.appendDocFragment(fragment);
                  },
                  enumerable: false,
                  configurable: true
                });
                WrappedSelect2.prototype.appendDocFragment = function(fragment) {
                  this.element.innerHTML = "";
                  this.element.appendChild(fragment);
                };
                return WrappedSelect2;
              }(wrapped_element_1.default);
              exports2["default"] = WrappedSelect;
            },
            883: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.SCROLLING_SPEED = exports2.SELECT_MULTIPLE_TYPE = exports2.SELECT_ONE_TYPE = exports2.TEXT_TYPE = exports2.KEY_CODES = exports2.ACTION_TYPES = exports2.EVENTS = void 0;
              exports2.EVENTS = {
                showDropdown: "showDropdown",
                hideDropdown: "hideDropdown",
                change: "change",
                choice: "choice",
                search: "search",
                addItem: "addItem",
                removeItem: "removeItem",
                highlightItem: "highlightItem",
                highlightChoice: "highlightChoice",
                unhighlightItem: "unhighlightItem"
              };
              exports2.ACTION_TYPES = {
                ADD_CHOICE: "ADD_CHOICE",
                FILTER_CHOICES: "FILTER_CHOICES",
                ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                CLEAR_CHOICES: "CLEAR_CHOICES",
                ADD_GROUP: "ADD_GROUP",
                ADD_ITEM: "ADD_ITEM",
                REMOVE_ITEM: "REMOVE_ITEM",
                HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                CLEAR_ALL: "CLEAR_ALL",
                RESET_TO: "RESET_TO",
                SET_IS_LOADING: "SET_IS_LOADING"
              };
              exports2.KEY_CODES = {
                BACK_KEY: 46,
                DELETE_KEY: 8,
                ENTER_KEY: 13,
                A_KEY: 65,
                ESC_KEY: 27,
                UP_KEY: 38,
                DOWN_KEY: 40,
                PAGE_UP_KEY: 33,
                PAGE_DOWN_KEY: 34
              };
              exports2.TEXT_TYPE = "text";
              exports2.SELECT_ONE_TYPE = "select-one";
              exports2.SELECT_MULTIPLE_TYPE = "select-multiple";
              exports2.SCROLLING_SPEED = 4;
            },
            789: function(__unused_webpack_module, exports2, __webpack_require__2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.DEFAULT_CONFIG = exports2.DEFAULT_CLASSNAMES = void 0;
              var utils_1 = __webpack_require__2(799);
              exports2.DEFAULT_CLASSNAMES = {
                containerOuter: "choices",
                containerInner: "choices__inner",
                input: "choices__input",
                inputCloned: "choices__input--cloned",
                list: "choices__list",
                listItems: "choices__list--multiple",
                listSingle: "choices__list--single",
                listDropdown: "choices__list--dropdown",
                item: "choices__item",
                itemSelectable: "choices__item--selectable",
                itemDisabled: "choices__item--disabled",
                itemChoice: "choices__item--choice",
                placeholder: "choices__placeholder",
                group: "choices__group",
                groupHeading: "choices__heading",
                button: "choices__button",
                activeState: "is-active",
                focusState: "is-focused",
                openState: "is-open",
                disabledState: "is-disabled",
                highlightedState: "is-highlighted",
                selectedState: "is-selected",
                flippedState: "is-flipped",
                loadingState: "is-loading",
                noResults: "has-no-results",
                noChoices: "has-no-choices"
              };
              exports2.DEFAULT_CONFIG = {
                items: [],
                choices: [],
                silent: false,
                renderChoiceLimit: -1,
                maxItemCount: -1,
                addItems: true,
                addItemFilter: null,
                removeItems: true,
                removeItemButton: false,
                editItems: false,
                allowHTML: true,
                duplicateItemsAllowed: true,
                delimiter: ",",
                paste: true,
                searchEnabled: true,
                searchChoices: true,
                searchFloor: 1,
                searchResultLimit: 4,
                searchFields: ["label", "value"],
                position: "auto",
                resetScrollPosition: true,
                shouldSort: true,
                shouldSortItems: false,
                sorter: utils_1.sortByAlpha,
                placeholder: true,
                placeholderValue: null,
                searchPlaceholderValue: null,
                prependValue: null,
                appendValue: null,
                renderSelectedChoices: "auto",
                loadingText: "Loading...",
                noResultsText: "No results found",
                noChoicesText: "No choices to choose from",
                itemSelectText: "Press to select",
                uniqueItemText: "Only unique values can be added",
                customAddItemText: "Only values matching specific conditions can be added",
                addItemText: function(value) {
                  return 'Press Enter to add <b>"'.concat((0, utils_1.sanitise)(value), '"</b>');
                },
                maxItemText: function(maxItemCount) {
                  return "Only ".concat(maxItemCount, " values can be added");
                },
                valueComparer: function(value1, value2) {
                  return value1 === value2;
                },
                fuseOptions: {
                  includeScore: true
                },
                labelId: "",
                callbackOnInit: null,
                callbackOnCreateTemplates: null,
                classNames: exports2.DEFAULT_CLASSNAMES
              };
            },
            18: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            978: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            948: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            359: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            285: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            533: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            187: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                if (k2 === void 0)
                  k2 = k;
                var desc = Object.getOwnPropertyDescriptor(m, k);
                if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                  desc = {
                    enumerable: true,
                    get: function() {
                      return m[k];
                    }
                  };
                }
                Object.defineProperty(o, k2, desc);
              } : function(o, m, k, k2) {
                if (k2 === void 0)
                  k2 = k;
                o[k2] = m[k];
              });
              var __exportStar = this && this.__exportStar || function(m, exports3) {
                for (var p in m)
                  if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
                    __createBinding(exports3, m, p);
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              __exportStar(__webpack_require__2(18), exports2);
              __exportStar(__webpack_require__2(978), exports2);
              __exportStar(__webpack_require__2(948), exports2);
              __exportStar(__webpack_require__2(359), exports2);
              __exportStar(__webpack_require__2(285), exports2);
              __exportStar(__webpack_require__2(533), exports2);
              __exportStar(__webpack_require__2(287), exports2);
              __exportStar(__webpack_require__2(132), exports2);
              __exportStar(__webpack_require__2(837), exports2);
              __exportStar(__webpack_require__2(598), exports2);
              __exportStar(__webpack_require__2(369), exports2);
              __exportStar(__webpack_require__2(37), exports2);
              __exportStar(__webpack_require__2(47), exports2);
              __exportStar(__webpack_require__2(923), exports2);
              __exportStar(__webpack_require__2(876), exports2);
            },
            287: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            132: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            837: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            598: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            37: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            369: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            47: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            923: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            876: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
            },
            799: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.parseCustomProperties = exports2.diff = exports2.cloneObject = exports2.existsInArray = exports2.dispatchEvent = exports2.sortByScore = exports2.sortByAlpha = exports2.strToEl = exports2.sanitise = exports2.isScrolledIntoView = exports2.getAdjacentEl = exports2.wrap = exports2.isType = exports2.getType = exports2.generateId = exports2.generateChars = exports2.getRandomNumber = void 0;
              var getRandomNumber = function(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
              };
              exports2.getRandomNumber = getRandomNumber;
              var generateChars = function(length) {
                return Array.from({
                  length
                }, function() {
                  return (0, exports2.getRandomNumber)(0, 36).toString(36);
                }).join("");
              };
              exports2.generateChars = generateChars;
              var generateId = function(element, prefix) {
                var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports2.generateChars)(2)) || (0, exports2.generateChars)(4);
                id = id.replace(/(:|\.|\[|\]|,)/g, "");
                id = "".concat(prefix, "-").concat(id);
                return id;
              };
              exports2.generateId = generateId;
              var getType = function(obj) {
                return Object.prototype.toString.call(obj).slice(8, -1);
              };
              exports2.getType = getType;
              var isType = function(type, obj) {
                return obj !== void 0 && obj !== null && (0, exports2.getType)(obj) === type;
              };
              exports2.isType = isType;
              var wrap3 = function(element, wrapper) {
                if (wrapper === void 0) {
                  wrapper = document.createElement("div");
                }
                if (element.parentNode) {
                  if (element.nextSibling) {
                    element.parentNode.insertBefore(wrapper, element.nextSibling);
                  } else {
                    element.parentNode.appendChild(wrapper);
                  }
                }
                return wrapper.appendChild(element);
              };
              exports2.wrap = wrap3;
              var getAdjacentEl = function(startEl, selector3, direction) {
                if (direction === void 0) {
                  direction = 1;
                }
                var prop = "".concat(direction > 0 ? "next" : "previous", "ElementSibling");
                var sibling = startEl[prop];
                while (sibling) {
                  if (sibling.matches(selector3)) {
                    return sibling;
                  }
                  sibling = sibling[prop];
                }
                return sibling;
              };
              exports2.getAdjacentEl = getAdjacentEl;
              var isScrolledIntoView = function(element, parent, direction) {
                if (direction === void 0) {
                  direction = 1;
                }
                if (!element) {
                  return false;
                }
                var isVisible;
                if (direction > 0) {
                  isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
                } else {
                  isVisible = element.offsetTop >= parent.scrollTop;
                }
                return isVisible;
              };
              exports2.isScrolledIntoView = isScrolledIntoView;
              var sanitise = function(value) {
                if (typeof value !== "string") {
                  return value;
                }
                return value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
              };
              exports2.sanitise = sanitise;
              exports2.strToEl = function() {
                var tmpEl = document.createElement("div");
                return function(str) {
                  var cleanedInput = str.trim();
                  tmpEl.innerHTML = cleanedInput;
                  var firldChild = tmpEl.children[0];
                  while (tmpEl.firstChild) {
                    tmpEl.removeChild(tmpEl.firstChild);
                  }
                  return firldChild;
                };
              }();
              var sortByAlpha = function(_a, _b) {
                var value = _a.value, _c = _a.label, label = _c === void 0 ? value : _c;
                var value2 = _b.value, _d = _b.label, label2 = _d === void 0 ? value2 : _d;
                return label.localeCompare(label2, [], {
                  sensitivity: "base",
                  ignorePunctuation: true,
                  numeric: true
                });
              };
              exports2.sortByAlpha = sortByAlpha;
              var sortByScore = function(a, b) {
                var _a = a.score, scoreA = _a === void 0 ? 0 : _a;
                var _b = b.score, scoreB = _b === void 0 ? 0 : _b;
                return scoreA - scoreB;
              };
              exports2.sortByScore = sortByScore;
              var dispatchEvent = function(element, type, customArgs) {
                if (customArgs === void 0) {
                  customArgs = null;
                }
                var event2 = new CustomEvent(type, {
                  detail: customArgs,
                  bubbles: true,
                  cancelable: true
                });
                return element.dispatchEvent(event2);
              };
              exports2.dispatchEvent = dispatchEvent;
              var existsInArray = function(array, value, key) {
                if (key === void 0) {
                  key = "value";
                }
                return array.some(function(item) {
                  if (typeof value === "string") {
                    return item[key] === value.trim();
                  }
                  return item[key] === value;
                });
              };
              exports2.existsInArray = existsInArray;
              var cloneObject = function(obj) {
                return JSON.parse(JSON.stringify(obj));
              };
              exports2.cloneObject = cloneObject;
              var diff = function(a, b) {
                var aKeys = Object.keys(a).sort();
                var bKeys = Object.keys(b).sort();
                return aKeys.filter(function(i) {
                  return bKeys.indexOf(i) < 0;
                });
              };
              exports2.diff = diff;
              var parseCustomProperties = function(customProperties) {
                if (typeof customProperties !== "undefined") {
                  try {
                    return JSON.parse(customProperties);
                  } catch (e) {
                    return customProperties;
                  }
                }
                return {};
              };
              exports2.parseCustomProperties = parseCustomProperties;
            },
            273: function(__unused_webpack_module, exports2) {
              var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                if (pack || arguments.length === 2)
                  for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                      if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                      ar[i] = from[i];
                    }
                  }
                return to.concat(ar || Array.prototype.slice.call(from));
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultState = void 0;
              exports2.defaultState = [];
              function choices(state, action) {
                if (state === void 0) {
                  state = exports2.defaultState;
                }
                if (action === void 0) {
                  action = {};
                }
                switch (action.type) {
                  case "ADD_CHOICE": {
                    var addChoiceAction = action;
                    var choice = {
                      id: addChoiceAction.id,
                      elementId: addChoiceAction.elementId,
                      groupId: addChoiceAction.groupId,
                      value: addChoiceAction.value,
                      label: addChoiceAction.label || addChoiceAction.value,
                      disabled: addChoiceAction.disabled || false,
                      selected: false,
                      active: true,
                      score: 9999,
                      customProperties: addChoiceAction.customProperties,
                      placeholder: addChoiceAction.placeholder || false
                    };
                    return __spreadArray(__spreadArray([], state, true), [choice], false);
                  }
                  case "ADD_ITEM": {
                    var addItemAction_1 = action;
                    if (addItemAction_1.choiceId > -1) {
                      return state.map(function(obj) {
                        var choice2 = obj;
                        if (choice2.id === parseInt("".concat(addItemAction_1.choiceId), 10)) {
                          choice2.selected = true;
                        }
                        return choice2;
                      });
                    }
                    return state;
                  }
                  case "REMOVE_ITEM": {
                    var removeItemAction_1 = action;
                    if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) {
                      return state.map(function(obj) {
                        var choice2 = obj;
                        if (choice2.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) {
                          choice2.selected = false;
                        }
                        return choice2;
                      });
                    }
                    return state;
                  }
                  case "FILTER_CHOICES": {
                    var filterChoicesAction_1 = action;
                    return state.map(function(obj) {
                      var choice2 = obj;
                      choice2.active = filterChoicesAction_1.results.some(function(_a) {
                        var item = _a.item, score = _a.score;
                        if (item.id === choice2.id) {
                          choice2.score = score;
                          return true;
                        }
                        return false;
                      });
                      return choice2;
                    });
                  }
                  case "ACTIVATE_CHOICES": {
                    var activateChoicesAction_1 = action;
                    return state.map(function(obj) {
                      var choice2 = obj;
                      choice2.active = activateChoicesAction_1.active;
                      return choice2;
                    });
                  }
                  case "CLEAR_CHOICES": {
                    return exports2.defaultState;
                  }
                  default: {
                    return state;
                  }
                }
              }
              exports2["default"] = choices;
            },
            871: function(__unused_webpack_module, exports2) {
              var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                if (pack || arguments.length === 2)
                  for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                      if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                      ar[i] = from[i];
                    }
                  }
                return to.concat(ar || Array.prototype.slice.call(from));
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultState = void 0;
              exports2.defaultState = [];
              function groups(state, action) {
                if (state === void 0) {
                  state = exports2.defaultState;
                }
                if (action === void 0) {
                  action = {};
                }
                switch (action.type) {
                  case "ADD_GROUP": {
                    var addGroupAction = action;
                    return __spreadArray(__spreadArray([], state, true), [{
                      id: addGroupAction.id,
                      value: addGroupAction.value,
                      active: addGroupAction.active,
                      disabled: addGroupAction.disabled
                    }], false);
                  }
                  case "CLEAR_CHOICES": {
                    return [];
                  }
                  default: {
                    return state;
                  }
                }
              }
              exports2["default"] = groups;
            },
            655: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultState = void 0;
              var redux_1 = __webpack_require__2(791);
              var items_1 = __importDefault(__webpack_require__2(52));
              var groups_1 = __importDefault(__webpack_require__2(871));
              var choices_1 = __importDefault(__webpack_require__2(273));
              var loading_1 = __importDefault(__webpack_require__2(502));
              var utils_1 = __webpack_require__2(799);
              exports2.defaultState = {
                groups: [],
                items: [],
                choices: [],
                loading: false
              };
              var appReducer = (0, redux_1.combineReducers)({
                items: items_1.default,
                groups: groups_1.default,
                choices: choices_1.default,
                loading: loading_1.default
              });
              var rootReducer = function(passedState, action) {
                var state = passedState;
                if (action.type === "CLEAR_ALL") {
                  state = exports2.defaultState;
                } else if (action.type === "RESET_TO") {
                  return (0, utils_1.cloneObject)(action.state);
                }
                return appReducer(state, action);
              };
              exports2["default"] = rootReducer;
            },
            52: function(__unused_webpack_module, exports2) {
              var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                if (pack || arguments.length === 2)
                  for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                      if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                      ar[i] = from[i];
                    }
                  }
                return to.concat(ar || Array.prototype.slice.call(from));
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultState = void 0;
              exports2.defaultState = [];
              function items(state, action) {
                if (state === void 0) {
                  state = exports2.defaultState;
                }
                if (action === void 0) {
                  action = {};
                }
                switch (action.type) {
                  case "ADD_ITEM": {
                    var addItemAction = action;
                    var newState = __spreadArray(__spreadArray([], state, true), [{
                      id: addItemAction.id,
                      choiceId: addItemAction.choiceId,
                      groupId: addItemAction.groupId,
                      value: addItemAction.value,
                      label: addItemAction.label,
                      active: true,
                      highlighted: false,
                      customProperties: addItemAction.customProperties,
                      placeholder: addItemAction.placeholder || false,
                      keyCode: null
                    }], false);
                    return newState.map(function(obj) {
                      var item = obj;
                      item.highlighted = false;
                      return item;
                    });
                  }
                  case "REMOVE_ITEM": {
                    return state.map(function(obj) {
                      var item = obj;
                      if (item.id === action.id) {
                        item.active = false;
                      }
                      return item;
                    });
                  }
                  case "HIGHLIGHT_ITEM": {
                    var highlightItemAction_1 = action;
                    return state.map(function(obj) {
                      var item = obj;
                      if (item.id === highlightItemAction_1.id) {
                        item.highlighted = highlightItemAction_1.highlighted;
                      }
                      return item;
                    });
                  }
                  default: {
                    return state;
                  }
                }
              }
              exports2["default"] = items;
            },
            502: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.defaultState = void 0;
              exports2.defaultState = false;
              var general = function(state, action) {
                if (state === void 0) {
                  state = exports2.defaultState;
                }
                if (action === void 0) {
                  action = {};
                }
                switch (action.type) {
                  case "SET_IS_LOADING": {
                    return action.isLoading;
                  }
                  default: {
                    return state;
                  }
                }
              };
              exports2["default"] = general;
            },
            744: function(__unused_webpack_module, exports2, __webpack_require__2) {
              var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                if (pack || arguments.length === 2)
                  for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                      if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                      ar[i] = from[i];
                    }
                  }
                return to.concat(ar || Array.prototype.slice.call(from));
              };
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var redux_1 = __webpack_require__2(791);
              var index_1 = __importDefault(__webpack_require__2(655));
              var Store = function() {
                function Store2() {
                  this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                }
                Store2.prototype.subscribe = function(onChange) {
                  this._store.subscribe(onChange);
                };
                Store2.prototype.dispatch = function(action) {
                  this._store.dispatch(action);
                };
                Object.defineProperty(Store2.prototype, "state", {
                  get: function() {
                    return this._store.getState();
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "items", {
                  get: function() {
                    return this.state.items;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "activeItems", {
                  get: function() {
                    return this.items.filter(function(item) {
                      return item.active === true;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "highlightedActiveItems", {
                  get: function() {
                    return this.items.filter(function(item) {
                      return item.active && item.highlighted;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "choices", {
                  get: function() {
                    return this.state.choices;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "activeChoices", {
                  get: function() {
                    return this.choices.filter(function(choice) {
                      return choice.active === true;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "selectableChoices", {
                  get: function() {
                    return this.choices.filter(function(choice) {
                      return choice.disabled !== true;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "searchableChoices", {
                  get: function() {
                    return this.selectableChoices.filter(function(choice) {
                      return choice.placeholder !== true;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "placeholderChoice", {
                  get: function() {
                    return __spreadArray([], this.choices, true).reverse().find(function(choice) {
                      return choice.placeholder === true;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "groups", {
                  get: function() {
                    return this.state.groups;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Store2.prototype, "activeGroups", {
                  get: function() {
                    var _a = this, groups = _a.groups, choices = _a.choices;
                    return groups.filter(function(group) {
                      var isActive = group.active === true && group.disabled === false;
                      var hasActiveOptions = choices.some(function(choice) {
                        return choice.active === true && choice.disabled === false;
                      });
                      return isActive && hasActiveOptions;
                    }, []);
                  },
                  enumerable: false,
                  configurable: true
                });
                Store2.prototype.isLoading = function() {
                  return this.state.loading;
                };
                Store2.prototype.getChoiceById = function(id) {
                  return this.activeChoices.find(function(choice) {
                    return choice.id === parseInt(id, 10);
                  });
                };
                Store2.prototype.getGroupById = function(id) {
                  return this.groups.find(function(group) {
                    return group.id === id;
                  });
                };
                return Store2;
              }();
              exports2["default"] = Store;
            },
            686: function(__unused_webpack_module, exports2) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var templates = {
                containerOuter: function(_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
                  var containerOuter = _a.classNames.containerOuter;
                  var div = Object.assign(document.createElement("div"), {
                    className: containerOuter
                  });
                  div.dataset.type = passedElementType;
                  if (dir) {
                    div.dir = dir;
                  }
                  if (isSelectOneElement) {
                    div.tabIndex = 0;
                  }
                  if (isSelectElement) {
                    div.setAttribute("role", searchEnabled ? "combobox" : "listbox");
                    if (searchEnabled) {
                      div.setAttribute("aria-autocomplete", "list");
                    }
                  }
                  div.setAttribute("aria-haspopup", "true");
                  div.setAttribute("aria-expanded", "false");
                  if (labelId) {
                    div.setAttribute("aria-labelledby", labelId);
                  }
                  return div;
                },
                containerInner: function(_a) {
                  var containerInner = _a.classNames.containerInner;
                  return Object.assign(document.createElement("div"), {
                    className: containerInner
                  });
                },
                itemList: function(_a, isSelectOneElement) {
                  var _b = _a.classNames, list = _b.list, listSingle = _b.listSingle, listItems = _b.listItems;
                  return Object.assign(document.createElement("div"), {
                    className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
                  });
                },
                placeholder: function(_a, value) {
                  var _b;
                  var allowHTML = _a.allowHTML, placeholder = _a.classNames.placeholder;
                  return Object.assign(document.createElement("div"), (_b = {
                    className: placeholder
                  }, _b[allowHTML ? "innerHTML" : "innerText"] = value, _b));
                },
                item: function(_a, _b, removeItemButton) {
                  var _c, _d;
                  var allowHTML = _a.allowHTML, _e = _a.classNames, item = _e.item, button = _e.button, highlightedState = _e.highlightedState, itemSelectable = _e.itemSelectable, placeholder = _e.placeholder;
                  var id = _b.id, value = _b.value, label = _b.label, customProperties = _b.customProperties, active = _b.active, disabled = _b.disabled, highlighted = _b.highlighted, isPlaceholder = _b.placeholder;
                  var div = Object.assign(document.createElement("div"), (_c = {
                    className: item
                  }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c));
                  Object.assign(div.dataset, {
                    item: "",
                    id,
                    value,
                    customProperties
                  });
                  if (active) {
                    div.setAttribute("aria-selected", "true");
                  }
                  if (disabled) {
                    div.setAttribute("aria-disabled", "true");
                  }
                  if (isPlaceholder) {
                    div.classList.add(placeholder);
                  }
                  div.classList.add(highlighted ? highlightedState : itemSelectable);
                  if (removeItemButton) {
                    if (disabled) {
                      div.classList.remove(itemSelectable);
                    }
                    div.dataset.deletable = "";
                    var REMOVE_ITEM_TEXT = "Remove item";
                    var removeButton = Object.assign(document.createElement("button"), (_d = {
                      type: "button",
                      className: button
                    }, _d[allowHTML ? "innerHTML" : "innerText"] = REMOVE_ITEM_TEXT, _d));
                    removeButton.setAttribute("aria-label", "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
                    removeButton.dataset.button = "";
                    div.appendChild(removeButton);
                  }
                  return div;
                },
                choiceList: function(_a, isSelectOneElement) {
                  var list = _a.classNames.list;
                  var div = Object.assign(document.createElement("div"), {
                    className: list
                  });
                  if (!isSelectOneElement) {
                    div.setAttribute("aria-multiselectable", "true");
                  }
                  div.setAttribute("role", "listbox");
                  return div;
                },
                choiceGroup: function(_a, _b) {
                  var _c;
                  var allowHTML = _a.allowHTML, _d = _a.classNames, group = _d.group, groupHeading = _d.groupHeading, itemDisabled = _d.itemDisabled;
                  var id = _b.id, value = _b.value, disabled = _b.disabled;
                  var div = Object.assign(document.createElement("div"), {
                    className: "".concat(group, " ").concat(disabled ? itemDisabled : "")
                  });
                  div.setAttribute("role", "group");
                  Object.assign(div.dataset, {
                    group: "",
                    id,
                    value
                  });
                  if (disabled) {
                    div.setAttribute("aria-disabled", "true");
                  }
                  div.appendChild(Object.assign(document.createElement("div"), (_c = {
                    className: groupHeading
                  }, _c[allowHTML ? "innerHTML" : "innerText"] = value, _c)));
                  return div;
                },
                choice: function(_a, _b, selectText) {
                  var _c;
                  var allowHTML = _a.allowHTML, _d = _a.classNames, item = _d.item, itemChoice = _d.itemChoice, itemSelectable = _d.itemSelectable, selectedState = _d.selectedState, itemDisabled = _d.itemDisabled, placeholder = _d.placeholder;
                  var id = _b.id, value = _b.value, label = _b.label, groupId = _b.groupId, elementId = _b.elementId, isDisabled = _b.disabled, isSelected = _b.selected, isPlaceholder = _b.placeholder;
                  var div = Object.assign(document.createElement("div"), (_c = {
                    id: elementId
                  }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c.className = "".concat(item, " ").concat(itemChoice), _c));
                  if (isSelected) {
                    div.classList.add(selectedState);
                  }
                  if (isPlaceholder) {
                    div.classList.add(placeholder);
                  }
                  div.setAttribute("role", groupId && groupId > 0 ? "treeitem" : "option");
                  Object.assign(div.dataset, {
                    choice: "",
                    id,
                    value,
                    selectText
                  });
                  if (isDisabled) {
                    div.classList.add(itemDisabled);
                    div.dataset.choiceDisabled = "";
                    div.setAttribute("aria-disabled", "true");
                  } else {
                    div.classList.add(itemSelectable);
                    div.dataset.choiceSelectable = "";
                  }
                  return div;
                },
                input: function(_a, placeholderValue) {
                  var _b = _a.classNames, input = _b.input, inputCloned = _b.inputCloned;
                  var inp = Object.assign(document.createElement("input"), {
                    type: "search",
                    name: "search_terms",
                    className: "".concat(input, " ").concat(inputCloned),
                    autocomplete: "off",
                    autocapitalize: "off",
                    spellcheck: false
                  });
                  inp.setAttribute("role", "textbox");
                  inp.setAttribute("aria-autocomplete", "list");
                  inp.setAttribute("aria-label", placeholderValue);
                  return inp;
                },
                dropdown: function(_a) {
                  var _b = _a.classNames, list = _b.list, listDropdown = _b.listDropdown;
                  var div = document.createElement("div");
                  div.classList.add(list, listDropdown);
                  div.setAttribute("aria-expanded", "false");
                  return div;
                },
                notice: function(_a, innerText, type) {
                  var _b;
                  var allowHTML = _a.allowHTML, _c = _a.classNames, item = _c.item, itemChoice = _c.itemChoice, noResults = _c.noResults, noChoices = _c.noChoices;
                  if (type === void 0) {
                    type = "";
                  }
                  var classes2 = [item, itemChoice];
                  if (type === "no-choices") {
                    classes2.push(noChoices);
                  } else if (type === "no-results") {
                    classes2.push(noResults);
                  }
                  return Object.assign(document.createElement("div"), (_b = {}, _b[allowHTML ? "innerHTML" : "innerText"] = innerText, _b.className = classes2.join(" "), _b));
                },
                option: function(_a) {
                  var label = _a.label, value = _a.value, customProperties = _a.customProperties, active = _a.active, disabled = _a.disabled;
                  var opt = new Option(label, value, false, active);
                  if (customProperties) {
                    opt.dataset.customProperties = "".concat(customProperties);
                  }
                  opt.disabled = !!disabled;
                  return opt;
                }
              };
              exports2["default"] = templates;
            },
            996: function(module2) {
              var isMergeableObject = function isMergeableObject2(value) {
                return isNonNullObject(value) && !isSpecial(value);
              };
              function isNonNullObject(value) {
                return !!value && typeof value === "object";
              }
              function isSpecial(value) {
                var stringValue = Object.prototype.toString.call(value);
                return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
              }
              var canUseSymbol = typeof Symbol === "function" && Symbol.for;
              var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
              function isReactElement(value) {
                return value.$$typeof === REACT_ELEMENT_TYPE;
              }
              function emptyTarget(val) {
                return Array.isArray(val) ? [] : {};
              }
              function cloneUnlessOtherwiseSpecified(value, options) {
                return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
              }
              function defaultArrayMerge(target, source, options) {
                return target.concat(source).map(function(element) {
                  return cloneUnlessOtherwiseSpecified(element, options);
                });
              }
              function getMergeFunction(key, options) {
                if (!options.customMerge) {
                  return deepmerge;
                }
                var customMerge = options.customMerge(key);
                return typeof customMerge === "function" ? customMerge : deepmerge;
              }
              function getEnumerableOwnPropertySymbols(target) {
                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
                  return target.propertyIsEnumerable(symbol);
                }) : [];
              }
              function getKeys(target) {
                return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
              }
              function propertyIsOnObject(object, property) {
                try {
                  return property in object;
                } catch (_) {
                  return false;
                }
              }
              function propertyIsUnsafe(target, key) {
                return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
              }
              function mergeObject(target, source, options) {
                var destination = {};
                if (options.isMergeableObject(target)) {
                  getKeys(target).forEach(function(key) {
                    destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                  });
                }
                getKeys(source).forEach(function(key) {
                  if (propertyIsUnsafe(target, key)) {
                    return;
                  }
                  if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
                    destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
                  } else {
                    destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                  }
                });
                return destination;
              }
              function deepmerge(target, source, options) {
                options = options || {};
                options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                var sourceIsArray = Array.isArray(source);
                var targetIsArray = Array.isArray(target);
                var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                if (!sourceAndTargetTypesMatch) {
                  return cloneUnlessOtherwiseSpecified(source, options);
                } else if (sourceIsArray) {
                  return options.arrayMerge(target, source, options);
                } else {
                  return mergeObject(target, source, options);
                }
              }
              deepmerge.all = function deepmergeAll(array, options) {
                if (!Array.isArray(array)) {
                  throw new Error("first argument should be an array");
                }
                return array.reduce(function(prev, next) {
                  return deepmerge(prev, next, options);
                }, {});
              };
              var deepmerge_1 = deepmerge;
              module2.exports = deepmerge_1;
            },
            221: function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                "default": function() {
                  return Fuse;
                }
              });
              function isArray(value) {
                return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
              }
              const INFINITY = 1 / 0;
              function baseToString(value) {
                if (typeof value == "string") {
                  return value;
                }
                let result = value + "";
                return result == "0" && 1 / value == -INFINITY ? "-0" : result;
              }
              function toString(value) {
                return value == null ? "" : baseToString(value);
              }
              function isString(value) {
                return typeof value === "string";
              }
              function isNumber(value) {
                return typeof value === "number";
              }
              function isBoolean(value) {
                return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
              }
              function isObject3(value) {
                return typeof value === "object";
              }
              function isObjectLike(value) {
                return isObject3(value) && value !== null;
              }
              function isDefined(value) {
                return value !== void 0 && value !== null;
              }
              function isBlank(value) {
                return !value.trim().length;
              }
              function getTag(value) {
                return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
              }
              const EXTENDED_SEARCH_UNAVAILABLE = "Extended search is not available";
              const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
              const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
              const PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
              const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
              const INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
              const hasOwn = Object.prototype.hasOwnProperty;
              class KeyStore {
                constructor(keys) {
                  this._keys = [];
                  this._keyMap = {};
                  let totalWeight = 0;
                  keys.forEach((key) => {
                    let obj = createKey(key);
                    totalWeight += obj.weight;
                    this._keys.push(obj);
                    this._keyMap[obj.id] = obj;
                    totalWeight += obj.weight;
                  });
                  this._keys.forEach((key) => {
                    key.weight /= totalWeight;
                  });
                }
                get(keyId) {
                  return this._keyMap[keyId];
                }
                keys() {
                  return this._keys;
                }
                toJSON() {
                  return JSON.stringify(this._keys);
                }
              }
              function createKey(key) {
                let path = null;
                let id = null;
                let src = null;
                let weight = 1;
                let getFn = null;
                if (isString(key) || isArray(key)) {
                  src = key;
                  path = createKeyPath(key);
                  id = createKeyId(key);
                } else {
                  if (!hasOwn.call(key, "name")) {
                    throw new Error(MISSING_KEY_PROPERTY("name"));
                  }
                  const name = key.name;
                  src = name;
                  if (hasOwn.call(key, "weight")) {
                    weight = key.weight;
                    if (weight <= 0) {
                      throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
                    }
                  }
                  path = createKeyPath(name);
                  id = createKeyId(name);
                  getFn = key.getFn;
                }
                return { path, id, weight, src, getFn };
              }
              function createKeyPath(key) {
                return isArray(key) ? key : key.split(".");
              }
              function createKeyId(key) {
                return isArray(key) ? key.join(".") : key;
              }
              function get(obj, path) {
                let list = [];
                let arr = false;
                const deepGet = (obj2, path2, index) => {
                  if (!isDefined(obj2)) {
                    return;
                  }
                  if (!path2[index]) {
                    list.push(obj2);
                  } else {
                    let key = path2[index];
                    const value = obj2[key];
                    if (!isDefined(value)) {
                      return;
                    }
                    if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
                      list.push(toString(value));
                    } else if (isArray(value)) {
                      arr = true;
                      for (let i = 0, len = value.length; i < len; i += 1) {
                        deepGet(value[i], path2, index + 1);
                      }
                    } else if (path2.length) {
                      deepGet(value, path2, index + 1);
                    }
                  }
                };
                deepGet(obj, isString(path) ? path.split(".") : path, 0);
                return arr ? list : list[0];
              }
              const MatchOptions = {
                includeMatches: false,
                findAllMatches: false,
                minMatchCharLength: 1
              };
              const BasicOptions = {
                isCaseSensitive: false,
                includeScore: false,
                keys: [],
                shouldSort: true,
                sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
              };
              const FuzzyOptions = {
                location: 0,
                threshold: 0.6,
                distance: 100
              };
              const AdvancedOptions = {
                useExtendedSearch: false,
                getFn: get,
                ignoreLocation: false,
                ignoreFieldNorm: false,
                fieldNormWeight: 1
              };
              var Config = {
                ...BasicOptions,
                ...MatchOptions,
                ...FuzzyOptions,
                ...AdvancedOptions
              };
              const SPACE = /[^ ]+/g;
              function norm(weight = 1, mantissa = 3) {
                const cache = /* @__PURE__ */ new Map();
                const m = Math.pow(10, mantissa);
                return {
                  get(value) {
                    const numTokens = value.match(SPACE).length;
                    if (cache.has(numTokens)) {
                      return cache.get(numTokens);
                    }
                    const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
                    const n = parseFloat(Math.round(norm2 * m) / m);
                    cache.set(numTokens, n);
                    return n;
                  },
                  clear() {
                    cache.clear();
                  }
                };
              }
              class FuseIndex {
                constructor({
                  getFn = Config.getFn,
                  fieldNormWeight = Config.fieldNormWeight
                } = {}) {
                  this.norm = norm(fieldNormWeight, 3);
                  this.getFn = getFn;
                  this.isCreated = false;
                  this.setIndexRecords();
                }
                setSources(docs = []) {
                  this.docs = docs;
                }
                setIndexRecords(records = []) {
                  this.records = records;
                }
                setKeys(keys = []) {
                  this.keys = keys;
                  this._keysMap = {};
                  keys.forEach((key, idx) => {
                    this._keysMap[key.id] = idx;
                  });
                }
                create() {
                  if (this.isCreated || !this.docs.length) {
                    return;
                  }
                  this.isCreated = true;
                  if (isString(this.docs[0])) {
                    this.docs.forEach((doc, docIndex) => {
                      this._addString(doc, docIndex);
                    });
                  } else {
                    this.docs.forEach((doc, docIndex) => {
                      this._addObject(doc, docIndex);
                    });
                  }
                  this.norm.clear();
                }
                add(doc) {
                  const idx = this.size();
                  if (isString(doc)) {
                    this._addString(doc, idx);
                  } else {
                    this._addObject(doc, idx);
                  }
                }
                removeAt(idx) {
                  this.records.splice(idx, 1);
                  for (let i = idx, len = this.size(); i < len; i += 1) {
                    this.records[i].i -= 1;
                  }
                }
                getValueForItemAtKeyId(item, keyId) {
                  return item[this._keysMap[keyId]];
                }
                size() {
                  return this.records.length;
                }
                _addString(doc, docIndex) {
                  if (!isDefined(doc) || isBlank(doc)) {
                    return;
                  }
                  let record = {
                    v: doc,
                    i: docIndex,
                    n: this.norm.get(doc)
                  };
                  this.records.push(record);
                }
                _addObject(doc, docIndex) {
                  let record = { i: docIndex, $: {} };
                  this.keys.forEach((key, keyIndex) => {
                    let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
                    if (!isDefined(value)) {
                      return;
                    }
                    if (isArray(value)) {
                      let subRecords = [];
                      const stack = [{ nestedArrIndex: -1, value }];
                      while (stack.length) {
                        const { nestedArrIndex, value: value2 } = stack.pop();
                        if (!isDefined(value2)) {
                          continue;
                        }
                        if (isString(value2) && !isBlank(value2)) {
                          let subRecord = {
                            v: value2,
                            i: nestedArrIndex,
                            n: this.norm.get(value2)
                          };
                          subRecords.push(subRecord);
                        } else if (isArray(value2)) {
                          value2.forEach((item, k) => {
                            stack.push({
                              nestedArrIndex: k,
                              value: item
                            });
                          });
                        } else
                          ;
                      }
                      record.$[keyIndex] = subRecords;
                    } else if (isString(value) && !isBlank(value)) {
                      let subRecord = {
                        v: value,
                        n: this.norm.get(value)
                      };
                      record.$[keyIndex] = subRecord;
                    }
                  });
                  this.records.push(record);
                }
                toJSON() {
                  return {
                    keys: this.keys,
                    records: this.records
                  };
                }
              }
              function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
                const myIndex = new FuseIndex({ getFn, fieldNormWeight });
                myIndex.setKeys(keys.map(createKey));
                myIndex.setSources(docs);
                myIndex.create();
                return myIndex;
              }
              function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
                const { keys, records } = data;
                const myIndex = new FuseIndex({ getFn, fieldNormWeight });
                myIndex.setKeys(keys);
                myIndex.setIndexRecords(records);
                return myIndex;
              }
              function computeScore$1(pattern, {
                errors = 0,
                currentLocation = 0,
                expectedLocation = 0,
                distance = Config.distance,
                ignoreLocation = Config.ignoreLocation
              } = {}) {
                const accuracy = errors / pattern.length;
                if (ignoreLocation) {
                  return accuracy;
                }
                const proximity = Math.abs(expectedLocation - currentLocation);
                if (!distance) {
                  return proximity ? 1 : accuracy;
                }
                return accuracy + proximity / distance;
              }
              function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
                let indices = [];
                let start = -1;
                let end = -1;
                let i = 0;
                for (let len = matchmask.length; i < len; i += 1) {
                  let match = matchmask[i];
                  if (match && start === -1) {
                    start = i;
                  } else if (!match && start !== -1) {
                    end = i - 1;
                    if (end - start + 1 >= minMatchCharLength) {
                      indices.push([start, end]);
                    }
                    start = -1;
                  }
                }
                if (matchmask[i - 1] && i - start >= minMatchCharLength) {
                  indices.push([start, i - 1]);
                }
                return indices;
              }
              const MAX_BITS = 32;
              function search(text, pattern, patternAlphabet, {
                location = Config.location,
                distance = Config.distance,
                threshold = Config.threshold,
                findAllMatches = Config.findAllMatches,
                minMatchCharLength = Config.minMatchCharLength,
                includeMatches = Config.includeMatches,
                ignoreLocation = Config.ignoreLocation
              } = {}) {
                if (pattern.length > MAX_BITS) {
                  throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
                }
                const patternLen = pattern.length;
                const textLen = text.length;
                const expectedLocation = Math.max(0, Math.min(location, textLen));
                let currentThreshold = threshold;
                let bestLocation = expectedLocation;
                const computeMatches = minMatchCharLength > 1 || includeMatches;
                const matchMask = computeMatches ? Array(textLen) : [];
                let index;
                while ((index = text.indexOf(pattern, bestLocation)) > -1) {
                  let score = computeScore$1(pattern, {
                    currentLocation: index,
                    expectedLocation,
                    distance,
                    ignoreLocation
                  });
                  currentThreshold = Math.min(score, currentThreshold);
                  bestLocation = index + patternLen;
                  if (computeMatches) {
                    let i = 0;
                    while (i < patternLen) {
                      matchMask[index + i] = 1;
                      i += 1;
                    }
                  }
                }
                bestLocation = -1;
                let lastBitArr = [];
                let finalScore = 1;
                let binMax = patternLen + textLen;
                const mask = 1 << patternLen - 1;
                for (let i = 0; i < patternLen; i += 1) {
                  let binMin = 0;
                  let binMid = binMax;
                  while (binMin < binMid) {
                    const score2 = computeScore$1(pattern, {
                      errors: i,
                      currentLocation: expectedLocation + binMid,
                      expectedLocation,
                      distance,
                      ignoreLocation
                    });
                    if (score2 <= currentThreshold) {
                      binMin = binMid;
                    } else {
                      binMax = binMid;
                    }
                    binMid = Math.floor((binMax - binMin) / 2 + binMin);
                  }
                  binMax = binMid;
                  let start = Math.max(1, expectedLocation - binMid + 1);
                  let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
                  let bitArr = Array(finish + 2);
                  bitArr[finish + 1] = (1 << i) - 1;
                  for (let j = finish; j >= start; j -= 1) {
                    let currentLocation = j - 1;
                    let charMatch = patternAlphabet[text.charAt(currentLocation)];
                    if (computeMatches) {
                      matchMask[currentLocation] = +!!charMatch;
                    }
                    bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
                    if (i) {
                      bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
                    }
                    if (bitArr[j] & mask) {
                      finalScore = computeScore$1(pattern, {
                        errors: i,
                        currentLocation,
                        expectedLocation,
                        distance,
                        ignoreLocation
                      });
                      if (finalScore <= currentThreshold) {
                        currentThreshold = finalScore;
                        bestLocation = currentLocation;
                        if (bestLocation <= expectedLocation) {
                          break;
                        }
                        start = Math.max(1, 2 * expectedLocation - bestLocation);
                      }
                    }
                  }
                  const score = computeScore$1(pattern, {
                    errors: i + 1,
                    currentLocation: expectedLocation,
                    expectedLocation,
                    distance,
                    ignoreLocation
                  });
                  if (score > currentThreshold) {
                    break;
                  }
                  lastBitArr = bitArr;
                }
                const result = {
                  isMatch: bestLocation >= 0,
                  score: Math.max(1e-3, finalScore)
                };
                if (computeMatches) {
                  const indices = convertMaskToIndices(matchMask, minMatchCharLength);
                  if (!indices.length) {
                    result.isMatch = false;
                  } else if (includeMatches) {
                    result.indices = indices;
                  }
                }
                return result;
              }
              function createPatternAlphabet(pattern) {
                let mask = {};
                for (let i = 0, len = pattern.length; i < len; i += 1) {
                  const char = pattern.charAt(i);
                  mask[char] = (mask[char] || 0) | 1 << len - i - 1;
                }
                return mask;
              }
              class BitapSearch {
                constructor(pattern, {
                  location = Config.location,
                  threshold = Config.threshold,
                  distance = Config.distance,
                  includeMatches = Config.includeMatches,
                  findAllMatches = Config.findAllMatches,
                  minMatchCharLength = Config.minMatchCharLength,
                  isCaseSensitive = Config.isCaseSensitive,
                  ignoreLocation = Config.ignoreLocation
                } = {}) {
                  this.options = {
                    location,
                    threshold,
                    distance,
                    includeMatches,
                    findAllMatches,
                    minMatchCharLength,
                    isCaseSensitive,
                    ignoreLocation
                  };
                  this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                  this.chunks = [];
                  if (!this.pattern.length) {
                    return;
                  }
                  const addChunk = (pattern2, startIndex) => {
                    this.chunks.push({
                      pattern: pattern2,
                      alphabet: createPatternAlphabet(pattern2),
                      startIndex
                    });
                  };
                  const len = this.pattern.length;
                  if (len > MAX_BITS) {
                    let i = 0;
                    const remainder = len % MAX_BITS;
                    const end = len - remainder;
                    while (i < end) {
                      addChunk(this.pattern.substr(i, MAX_BITS), i);
                      i += MAX_BITS;
                    }
                    if (remainder) {
                      const startIndex = len - MAX_BITS;
                      addChunk(this.pattern.substr(startIndex), startIndex);
                    }
                  } else {
                    addChunk(this.pattern, 0);
                  }
                }
                searchIn(text) {
                  const { isCaseSensitive, includeMatches } = this.options;
                  if (!isCaseSensitive) {
                    text = text.toLowerCase();
                  }
                  if (this.pattern === text) {
                    let result2 = {
                      isMatch: true,
                      score: 0
                    };
                    if (includeMatches) {
                      result2.indices = [[0, text.length - 1]];
                    }
                    return result2;
                  }
                  const {
                    location,
                    distance,
                    threshold,
                    findAllMatches,
                    minMatchCharLength,
                    ignoreLocation
                  } = this.options;
                  let allIndices = [];
                  let totalScore = 0;
                  let hasMatches = false;
                  this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
                    const { isMatch, score, indices } = search(text, pattern, alphabet, {
                      location: location + startIndex,
                      distance,
                      threshold,
                      findAllMatches,
                      minMatchCharLength,
                      includeMatches,
                      ignoreLocation
                    });
                    if (isMatch) {
                      hasMatches = true;
                    }
                    totalScore += score;
                    if (isMatch && indices) {
                      allIndices = [...allIndices, ...indices];
                    }
                  });
                  let result = {
                    isMatch: hasMatches,
                    score: hasMatches ? totalScore / this.chunks.length : 1
                  };
                  if (hasMatches && includeMatches) {
                    result.indices = allIndices;
                  }
                  return result;
                }
              }
              class BaseMatch {
                constructor(pattern) {
                  this.pattern = pattern;
                }
                static isMultiMatch(pattern) {
                  return getMatch(pattern, this.multiRegex);
                }
                static isSingleMatch(pattern) {
                  return getMatch(pattern, this.singleRegex);
                }
                search() {
                }
              }
              function getMatch(pattern, exp) {
                const matches = pattern.match(exp);
                return matches ? matches[1] : null;
              }
              class ExactMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "exact";
                }
                static get multiRegex() {
                  return /^="(.*)"$/;
                }
                static get singleRegex() {
                  return /^=(.*)$/;
                }
                search(text) {
                  const isMatch = text === this.pattern;
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices: [0, this.pattern.length - 1]
                  };
                }
              }
              class InverseExactMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "inverse-exact";
                }
                static get multiRegex() {
                  return /^!"(.*)"$/;
                }
                static get singleRegex() {
                  return /^!(.*)$/;
                }
                search(text) {
                  const index = text.indexOf(this.pattern);
                  const isMatch = index === -1;
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices: [0, text.length - 1]
                  };
                }
              }
              class PrefixExactMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "prefix-exact";
                }
                static get multiRegex() {
                  return /^\^"(.*)"$/;
                }
                static get singleRegex() {
                  return /^\^(.*)$/;
                }
                search(text) {
                  const isMatch = text.startsWith(this.pattern);
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices: [0, this.pattern.length - 1]
                  };
                }
              }
              class InversePrefixExactMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "inverse-prefix-exact";
                }
                static get multiRegex() {
                  return /^!\^"(.*)"$/;
                }
                static get singleRegex() {
                  return /^!\^(.*)$/;
                }
                search(text) {
                  const isMatch = !text.startsWith(this.pattern);
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices: [0, text.length - 1]
                  };
                }
              }
              class SuffixExactMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "suffix-exact";
                }
                static get multiRegex() {
                  return /^"(.*)"\$$/;
                }
                static get singleRegex() {
                  return /^(.*)\$$/;
                }
                search(text) {
                  const isMatch = text.endsWith(this.pattern);
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices: [text.length - this.pattern.length, text.length - 1]
                  };
                }
              }
              class InverseSuffixExactMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "inverse-suffix-exact";
                }
                static get multiRegex() {
                  return /^!"(.*)"\$$/;
                }
                static get singleRegex() {
                  return /^!(.*)\$$/;
                }
                search(text) {
                  const isMatch = !text.endsWith(this.pattern);
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices: [0, text.length - 1]
                  };
                }
              }
              class FuzzyMatch extends BaseMatch {
                constructor(pattern, {
                  location = Config.location,
                  threshold = Config.threshold,
                  distance = Config.distance,
                  includeMatches = Config.includeMatches,
                  findAllMatches = Config.findAllMatches,
                  minMatchCharLength = Config.minMatchCharLength,
                  isCaseSensitive = Config.isCaseSensitive,
                  ignoreLocation = Config.ignoreLocation
                } = {}) {
                  super(pattern);
                  this._bitapSearch = new BitapSearch(pattern, {
                    location,
                    threshold,
                    distance,
                    includeMatches,
                    findAllMatches,
                    minMatchCharLength,
                    isCaseSensitive,
                    ignoreLocation
                  });
                }
                static get type() {
                  return "fuzzy";
                }
                static get multiRegex() {
                  return /^"(.*)"$/;
                }
                static get singleRegex() {
                  return /^(.*)$/;
                }
                search(text) {
                  return this._bitapSearch.searchIn(text);
                }
              }
              class IncludeMatch extends BaseMatch {
                constructor(pattern) {
                  super(pattern);
                }
                static get type() {
                  return "include";
                }
                static get multiRegex() {
                  return /^'"(.*)"$/;
                }
                static get singleRegex() {
                  return /^'(.*)$/;
                }
                search(text) {
                  let location = 0;
                  let index;
                  const indices = [];
                  const patternLen = this.pattern.length;
                  while ((index = text.indexOf(this.pattern, location)) > -1) {
                    location = index + patternLen;
                    indices.push([index, location - 1]);
                  }
                  const isMatch = !!indices.length;
                  return {
                    isMatch,
                    score: isMatch ? 0 : 1,
                    indices
                  };
                }
              }
              const searchers = [
                ExactMatch,
                IncludeMatch,
                PrefixExactMatch,
                InversePrefixExactMatch,
                InverseSuffixExactMatch,
                SuffixExactMatch,
                InverseExactMatch,
                FuzzyMatch
              ];
              const searchersLen = searchers.length;
              const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
              const OR_TOKEN = "|";
              function parseQuery(pattern, options = {}) {
                return pattern.split(OR_TOKEN).map((item) => {
                  let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
                  let results = [];
                  for (let i = 0, len = query.length; i < len; i += 1) {
                    const queryItem = query[i];
                    let found = false;
                    let idx = -1;
                    while (!found && ++idx < searchersLen) {
                      const searcher = searchers[idx];
                      let token = searcher.isMultiMatch(queryItem);
                      if (token) {
                        results.push(new searcher(token, options));
                        found = true;
                      }
                    }
                    if (found) {
                      continue;
                    }
                    idx = -1;
                    while (++idx < searchersLen) {
                      const searcher = searchers[idx];
                      let token = searcher.isSingleMatch(queryItem);
                      if (token) {
                        results.push(new searcher(token, options));
                        break;
                      }
                    }
                  }
                  return results;
                });
              }
              const MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
              class ExtendedSearch {
                constructor(pattern, {
                  isCaseSensitive = Config.isCaseSensitive,
                  includeMatches = Config.includeMatches,
                  minMatchCharLength = Config.minMatchCharLength,
                  ignoreLocation = Config.ignoreLocation,
                  findAllMatches = Config.findAllMatches,
                  location = Config.location,
                  threshold = Config.threshold,
                  distance = Config.distance
                } = {}) {
                  this.query = null;
                  this.options = {
                    isCaseSensitive,
                    includeMatches,
                    minMatchCharLength,
                    findAllMatches,
                    ignoreLocation,
                    location,
                    threshold,
                    distance
                  };
                  this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                  this.query = parseQuery(this.pattern, this.options);
                }
                static condition(_, options) {
                  return options.useExtendedSearch;
                }
                searchIn(text) {
                  const query = this.query;
                  if (!query) {
                    return {
                      isMatch: false,
                      score: 1
                    };
                  }
                  const { includeMatches, isCaseSensitive } = this.options;
                  text = isCaseSensitive ? text : text.toLowerCase();
                  let numMatches = 0;
                  let allIndices = [];
                  let totalScore = 0;
                  for (let i = 0, qLen = query.length; i < qLen; i += 1) {
                    const searchers2 = query[i];
                    allIndices.length = 0;
                    numMatches = 0;
                    for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
                      const searcher = searchers2[j];
                      const { isMatch, indices, score } = searcher.search(text);
                      if (isMatch) {
                        numMatches += 1;
                        totalScore += score;
                        if (includeMatches) {
                          const type = searcher.constructor.type;
                          if (MultiMatchSet.has(type)) {
                            allIndices = [...allIndices, ...indices];
                          } else {
                            allIndices.push(indices);
                          }
                        }
                      } else {
                        totalScore = 0;
                        numMatches = 0;
                        allIndices.length = 0;
                        break;
                      }
                    }
                    if (numMatches) {
                      let result = {
                        isMatch: true,
                        score: totalScore / numMatches
                      };
                      if (includeMatches) {
                        result.indices = allIndices;
                      }
                      return result;
                    }
                  }
                  return {
                    isMatch: false,
                    score: 1
                  };
                }
              }
              const registeredSearchers = [];
              function register2(...args) {
                registeredSearchers.push(...args);
              }
              function createSearcher(pattern, options) {
                for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
                  let searcherClass = registeredSearchers[i];
                  if (searcherClass.condition(pattern, options)) {
                    return new searcherClass(pattern, options);
                  }
                }
                return new BitapSearch(pattern, options);
              }
              const LogicalOperator = {
                AND: "$and",
                OR: "$or"
              };
              const KeyType = {
                PATH: "$path",
                PATTERN: "$val"
              };
              const isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
              const isPath = (query) => !!query[KeyType.PATH];
              const isLeaf = (query) => !isArray(query) && isObject3(query) && !isExpression(query);
              const convertToExplicit = (query) => ({
                [LogicalOperator.AND]: Object.keys(query).map((key) => ({
                  [key]: query[key]
                }))
              });
              function parse(query, options, { auto = true } = {}) {
                const next = (query2) => {
                  let keys = Object.keys(query2);
                  const isQueryPath = isPath(query2);
                  if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
                    return next(convertToExplicit(query2));
                  }
                  if (isLeaf(query2)) {
                    const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
                    const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
                    if (!isString(pattern)) {
                      throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
                    }
                    const obj = {
                      keyId: createKeyId(key),
                      pattern
                    };
                    if (auto) {
                      obj.searcher = createSearcher(pattern, options);
                    }
                    return obj;
                  }
                  let node = {
                    children: [],
                    operator: keys[0]
                  };
                  keys.forEach((key) => {
                    const value = query2[key];
                    if (isArray(value)) {
                      value.forEach((item) => {
                        node.children.push(next(item));
                      });
                    }
                  });
                  return node;
                };
                if (!isExpression(query)) {
                  query = convertToExplicit(query);
                }
                return next(query);
              }
              function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
                results.forEach((result) => {
                  let totalScore = 1;
                  result.matches.forEach(({ key, norm: norm2, score }) => {
                    const weight = key ? key.weight : null;
                    totalScore *= Math.pow(
                      score === 0 && weight ? Number.EPSILON : score,
                      (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
                    );
                  });
                  result.score = totalScore;
                });
              }
              function transformMatches(result, data) {
                const matches = result.matches;
                data.matches = [];
                if (!isDefined(matches)) {
                  return;
                }
                matches.forEach((match) => {
                  if (!isDefined(match.indices) || !match.indices.length) {
                    return;
                  }
                  const { indices, value } = match;
                  let obj = {
                    indices,
                    value
                  };
                  if (match.key) {
                    obj.key = match.key.src;
                  }
                  if (match.idx > -1) {
                    obj.refIndex = match.idx;
                  }
                  data.matches.push(obj);
                });
              }
              function transformScore(result, data) {
                data.score = result.score;
              }
              function format(results, docs, {
                includeMatches = Config.includeMatches,
                includeScore = Config.includeScore
              } = {}) {
                const transformers = [];
                if (includeMatches)
                  transformers.push(transformMatches);
                if (includeScore)
                  transformers.push(transformScore);
                return results.map((result) => {
                  const { idx } = result;
                  const data = {
                    item: docs[idx],
                    refIndex: idx
                  };
                  if (transformers.length) {
                    transformers.forEach((transformer) => {
                      transformer(result, data);
                    });
                  }
                  return data;
                });
              }
              class Fuse {
                constructor(docs, options = {}, index) {
                  this.options = { ...Config, ...options };
                  if (this.options.useExtendedSearch && false) {
                  }
                  this._keyStore = new KeyStore(this.options.keys);
                  this.setCollection(docs, index);
                }
                setCollection(docs, index) {
                  this._docs = docs;
                  if (index && !(index instanceof FuseIndex)) {
                    throw new Error(INCORRECT_INDEX_TYPE);
                  }
                  this._myIndex = index || createIndex(this.options.keys, this._docs, {
                    getFn: this.options.getFn,
                    fieldNormWeight: this.options.fieldNormWeight
                  });
                }
                add(doc) {
                  if (!isDefined(doc)) {
                    return;
                  }
                  this._docs.push(doc);
                  this._myIndex.add(doc);
                }
                remove(predicate = () => false) {
                  const results = [];
                  for (let i = 0, len = this._docs.length; i < len; i += 1) {
                    const doc = this._docs[i];
                    if (predicate(doc, i)) {
                      this.removeAt(i);
                      i -= 1;
                      len -= 1;
                      results.push(doc);
                    }
                  }
                  return results;
                }
                removeAt(idx) {
                  this._docs.splice(idx, 1);
                  this._myIndex.removeAt(idx);
                }
                getIndex() {
                  return this._myIndex;
                }
                search(query, { limit = -1 } = {}) {
                  const {
                    includeMatches,
                    includeScore,
                    shouldSort,
                    sortFn,
                    ignoreFieldNorm
                  } = this.options;
                  let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
                  computeScore(results, { ignoreFieldNorm });
                  if (shouldSort) {
                    results.sort(sortFn);
                  }
                  if (isNumber(limit) && limit > -1) {
                    results = results.slice(0, limit);
                  }
                  return format(results, this._docs, {
                    includeMatches,
                    includeScore
                  });
                }
                _searchStringList(query) {
                  const searcher = createSearcher(query, this.options);
                  const { records } = this._myIndex;
                  const results = [];
                  records.forEach(({ v: text, i: idx, n: norm2 }) => {
                    if (!isDefined(text)) {
                      return;
                    }
                    const { isMatch, score, indices } = searcher.searchIn(text);
                    if (isMatch) {
                      results.push({
                        item: text,
                        idx,
                        matches: [{ score, value: text, norm: norm2, indices }]
                      });
                    }
                  });
                  return results;
                }
                _searchLogical(query) {
                  const expression = parse(query, this.options);
                  const evaluate = (node, item, idx) => {
                    if (!node.children) {
                      const { keyId, searcher } = node;
                      const matches = this._findMatches({
                        key: this._keyStore.get(keyId),
                        value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                        searcher
                      });
                      if (matches && matches.length) {
                        return [
                          {
                            idx,
                            item,
                            matches
                          }
                        ];
                      }
                      return [];
                    }
                    const res = [];
                    for (let i = 0, len = node.children.length; i < len; i += 1) {
                      const child = node.children[i];
                      const result = evaluate(child, item, idx);
                      if (result.length) {
                        res.push(...result);
                      } else if (node.operator === LogicalOperator.AND) {
                        return [];
                      }
                    }
                    return res;
                  };
                  const records = this._myIndex.records;
                  const resultMap = {};
                  const results = [];
                  records.forEach(({ $: item, i: idx }) => {
                    if (isDefined(item)) {
                      let expResults = evaluate(expression, item, idx);
                      if (expResults.length) {
                        if (!resultMap[idx]) {
                          resultMap[idx] = { idx, item, matches: [] };
                          results.push(resultMap[idx]);
                        }
                        expResults.forEach(({ matches }) => {
                          resultMap[idx].matches.push(...matches);
                        });
                      }
                    }
                  });
                  return results;
                }
                _searchObjectList(query) {
                  const searcher = createSearcher(query, this.options);
                  const { keys, records } = this._myIndex;
                  const results = [];
                  records.forEach(({ $: item, i: idx }) => {
                    if (!isDefined(item)) {
                      return;
                    }
                    let matches = [];
                    keys.forEach((key, keyIndex) => {
                      matches.push(
                        ...this._findMatches({
                          key,
                          value: item[keyIndex],
                          searcher
                        })
                      );
                    });
                    if (matches.length) {
                      results.push({
                        idx,
                        item,
                        matches
                      });
                    }
                  });
                  return results;
                }
                _findMatches({ key, value, searcher }) {
                  if (!isDefined(value)) {
                    return [];
                  }
                  let matches = [];
                  if (isArray(value)) {
                    value.forEach(({ v: text, i: idx, n: norm2 }) => {
                      if (!isDefined(text)) {
                        return;
                      }
                      const { isMatch, score, indices } = searcher.searchIn(text);
                      if (isMatch) {
                        matches.push({
                          score,
                          key,
                          value: text,
                          idx,
                          norm: norm2,
                          indices
                        });
                      }
                    });
                  } else {
                    const { v: text, n: norm2 } = value;
                    const { isMatch, score, indices } = searcher.searchIn(text);
                    if (isMatch) {
                      matches.push({ score, key, value: text, norm: norm2, indices });
                    }
                  }
                  return matches;
                }
              }
              Fuse.version = "6.6.2";
              Fuse.createIndex = createIndex;
              Fuse.parseIndex = parseIndex;
              Fuse.config = Config;
              {
                Fuse.parseQuery = parse;
              }
              {
                register2(ExtendedSearch);
              }
            },
            791: function(__unused_webpack_module, __webpack_exports__2, __webpack_require__2) {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                "__DO_NOT_USE__ActionTypes": function() {
                  return ActionTypes;
                },
                "applyMiddleware": function() {
                  return applyMiddleware;
                },
                "bindActionCreators": function() {
                  return bindActionCreators;
                },
                "combineReducers": function() {
                  return combineReducers;
                },
                "compose": function() {
                  return compose;
                },
                "createStore": function() {
                  return createStore;
                },
                "legacy_createStore": function() {
                  return legacy_createStore;
                }
              });
              ;
              function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                  return typeof obj2;
                } : function(obj2) {
                  return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                }, _typeof(obj);
              }
              ;
              function _toPrimitive(input, hint) {
                if (_typeof(input) !== "object" || input === null)
                  return input;
                var prim = input[Symbol.toPrimitive];
                if (prim !== void 0) {
                  var res = prim.call(input, hint || "default");
                  if (_typeof(res) !== "object")
                    return res;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return (hint === "string" ? String : Number)(input);
              }
              ;
              function _toPropertyKey(arg) {
                var key = _toPrimitive(arg, "string");
                return _typeof(key) === "symbol" ? key : String(key);
              }
              ;
              function _defineProperty(obj, key, value) {
                key = _toPropertyKey(key);
                if (key in obj) {
                  Object.defineProperty(obj, key, {
                    value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  });
                } else {
                  obj[key] = value;
                }
                return obj;
              }
              ;
              function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                  var symbols = Object.getOwnPropertySymbols(object);
                  enumerableOnly && (symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                  })), keys.push.apply(keys, symbols);
                }
                return keys;
              }
              function _objectSpread2(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                  });
                }
                return target;
              }
              ;
              function formatProdErrorMessage(code) {
                return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
              }
              var $$observable = function() {
                return typeof Symbol === "function" && Symbol.observable || "@@observable";
              }();
              var randomString = function randomString2() {
                return Math.random().toString(36).substring(7).split("").join(".");
              };
              var ActionTypes = {
                INIT: "@@redux/INIT" + randomString(),
                REPLACE: "@@redux/REPLACE" + randomString(),
                PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                  return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                }
              };
              function isPlainObject(obj) {
                if (typeof obj !== "object" || obj === null)
                  return false;
                var proto = obj;
                while (Object.getPrototypeOf(proto) !== null) {
                  proto = Object.getPrototypeOf(proto);
                }
                return Object.getPrototypeOf(obj) === proto;
              }
              function miniKindOf(val) {
                if (val === void 0)
                  return "undefined";
                if (val === null)
                  return "null";
                var type = typeof val;
                switch (type) {
                  case "boolean":
                  case "string":
                  case "number":
                  case "symbol":
                  case "function": {
                    return type;
                  }
                }
                if (Array.isArray(val))
                  return "array";
                if (isDate(val))
                  return "date";
                if (isError(val))
                  return "error";
                var constructorName = ctorName(val);
                switch (constructorName) {
                  case "Symbol":
                  case "Promise":
                  case "WeakMap":
                  case "WeakSet":
                  case "Map":
                  case "Set":
                    return constructorName;
                }
                return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
              }
              function ctorName(val) {
                return typeof val.constructor === "function" ? val.constructor.name : null;
              }
              function isError(val) {
                return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
              }
              function isDate(val) {
                if (val instanceof Date)
                  return true;
                return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
              }
              function kindOf(val) {
                var typeOfVal = typeof val;
                if (false) {
                }
                return typeOfVal;
              }
              function createStore(reducer, preloadedState, enhancer) {
                var _ref2;
                if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
                  throw new Error(true ? formatProdErrorMessage(0) : 0);
                }
                if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
                  enhancer = preloadedState;
                  preloadedState = void 0;
                }
                if (typeof enhancer !== "undefined") {
                  if (typeof enhancer !== "function") {
                    throw new Error(true ? formatProdErrorMessage(1) : 0);
                  }
                  return enhancer(createStore)(reducer, preloadedState);
                }
                if (typeof reducer !== "function") {
                  throw new Error(true ? formatProdErrorMessage(2) : 0);
                }
                var currentReducer = reducer;
                var currentState = preloadedState;
                var currentListeners = [];
                var nextListeners = currentListeners;
                var isDispatching = false;
                function ensureCanMutateNextListeners() {
                  if (nextListeners === currentListeners) {
                    nextListeners = currentListeners.slice();
                  }
                }
                function getState() {
                  if (isDispatching) {
                    throw new Error(true ? formatProdErrorMessage(3) : 0);
                  }
                  return currentState;
                }
                function subscribe(listener) {
                  if (typeof listener !== "function") {
                    throw new Error(true ? formatProdErrorMessage(4) : 0);
                  }
                  if (isDispatching) {
                    throw new Error(true ? formatProdErrorMessage(5) : 0);
                  }
                  var isSubscribed = true;
                  ensureCanMutateNextListeners();
                  nextListeners.push(listener);
                  return function unsubscribe() {
                    if (!isSubscribed) {
                      return;
                    }
                    if (isDispatching) {
                      throw new Error(true ? formatProdErrorMessage(6) : 0);
                    }
                    isSubscribed = false;
                    ensureCanMutateNextListeners();
                    var index = nextListeners.indexOf(listener);
                    nextListeners.splice(index, 1);
                    currentListeners = null;
                  };
                }
                function dispatch(action) {
                  if (!isPlainObject(action)) {
                    throw new Error(true ? formatProdErrorMessage(7) : 0);
                  }
                  if (typeof action.type === "undefined") {
                    throw new Error(true ? formatProdErrorMessage(8) : 0);
                  }
                  if (isDispatching) {
                    throw new Error(true ? formatProdErrorMessage(9) : 0);
                  }
                  try {
                    isDispatching = true;
                    currentState = currentReducer(currentState, action);
                  } finally {
                    isDispatching = false;
                  }
                  var listeners = currentListeners = nextListeners;
                  for (var i = 0; i < listeners.length; i++) {
                    var listener = listeners[i];
                    listener();
                  }
                  return action;
                }
                function replaceReducer(nextReducer) {
                  if (typeof nextReducer !== "function") {
                    throw new Error(true ? formatProdErrorMessage(10) : 0);
                  }
                  currentReducer = nextReducer;
                  dispatch({
                    type: ActionTypes.REPLACE
                  });
                }
                function observable() {
                  var _ref;
                  var outerSubscribe = subscribe;
                  return _ref = {
                    subscribe: function subscribe2(observer) {
                      if (typeof observer !== "object" || observer === null) {
                        throw new Error(true ? formatProdErrorMessage(11) : 0);
                      }
                      function observeState() {
                        if (observer.next) {
                          observer.next(getState());
                        }
                      }
                      observeState();
                      var unsubscribe = outerSubscribe(observeState);
                      return {
                        unsubscribe
                      };
                    }
                  }, _ref[$$observable] = function() {
                    return this;
                  }, _ref;
                }
                dispatch({
                  type: ActionTypes.INIT
                });
                return _ref2 = {
                  dispatch,
                  subscribe,
                  getState,
                  replaceReducer
                }, _ref2[$$observable] = observable, _ref2;
              }
              var legacy_createStore = createStore;
              function warning(message) {
                if (typeof console !== "undefined" && typeof console.error === "function") {
                  console.error(message);
                }
                try {
                  throw new Error(message);
                } catch (e) {
                }
              }
              function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
                var reducerKeys = Object.keys(reducers);
                var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
                if (reducerKeys.length === 0) {
                  return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
                }
                if (!isPlainObject(inputState)) {
                  return "The " + argumentName + ' has unexpected type of "' + kindOf(inputState) + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
                }
                var unexpectedKeys = Object.keys(inputState).filter(function(key) {
                  return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
                });
                unexpectedKeys.forEach(function(key) {
                  unexpectedKeyCache[key] = true;
                });
                if (action && action.type === ActionTypes.REPLACE)
                  return;
                if (unexpectedKeys.length > 0) {
                  return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
                }
              }
              function assertReducerShape(reducers) {
                Object.keys(reducers).forEach(function(key) {
                  var reducer = reducers[key];
                  var initialState = reducer(void 0, {
                    type: ActionTypes.INIT
                  });
                  if (typeof initialState === "undefined") {
                    throw new Error(true ? formatProdErrorMessage(12) : 0);
                  }
                  if (typeof reducer(void 0, {
                    type: ActionTypes.PROBE_UNKNOWN_ACTION()
                  }) === "undefined") {
                    throw new Error(true ? formatProdErrorMessage(13) : 0);
                  }
                });
              }
              function combineReducers(reducers) {
                var reducerKeys = Object.keys(reducers);
                var finalReducers = {};
                for (var i = 0; i < reducerKeys.length; i++) {
                  var key = reducerKeys[i];
                  if (false) {
                  }
                  if (typeof reducers[key] === "function") {
                    finalReducers[key] = reducers[key];
                  }
                }
                var finalReducerKeys = Object.keys(finalReducers);
                var unexpectedKeyCache;
                if (false) {
                }
                var shapeAssertionError;
                try {
                  assertReducerShape(finalReducers);
                } catch (e) {
                  shapeAssertionError = e;
                }
                return function combination(state, action) {
                  if (state === void 0) {
                    state = {};
                  }
                  if (shapeAssertionError) {
                    throw shapeAssertionError;
                  }
                  if (false) {
                    var warningMessage;
                  }
                  var hasChanged = false;
                  var nextState = {};
                  for (var _i2 = 0; _i2 < finalReducerKeys.length; _i2++) {
                    var _key = finalReducerKeys[_i2];
                    var reducer = finalReducers[_key];
                    var previousStateForKey = state[_key];
                    var nextStateForKey = reducer(previousStateForKey, action);
                    if (typeof nextStateForKey === "undefined") {
                      var actionType = action && action.type;
                      throw new Error(true ? formatProdErrorMessage(14) : 0);
                    }
                    nextState[_key] = nextStateForKey;
                    hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                  }
                  hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
                  return hasChanged ? nextState : state;
                };
              }
              function bindActionCreator(actionCreator, dispatch) {
                return function() {
                  return dispatch(actionCreator.apply(this, arguments));
                };
              }
              function bindActionCreators(actionCreators, dispatch) {
                if (typeof actionCreators === "function") {
                  return bindActionCreator(actionCreators, dispatch);
                }
                if (typeof actionCreators !== "object" || actionCreators === null) {
                  throw new Error(true ? formatProdErrorMessage(16) : 0);
                }
                var boundActionCreators = {};
                for (var key in actionCreators) {
                  var actionCreator = actionCreators[key];
                  if (typeof actionCreator === "function") {
                    boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
                  }
                }
                return boundActionCreators;
              }
              function compose() {
                for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
                  funcs[_key] = arguments[_key];
                }
                if (funcs.length === 0) {
                  return function(arg) {
                    return arg;
                  };
                }
                if (funcs.length === 1) {
                  return funcs[0];
                }
                return funcs.reduce(function(a, b) {
                  return function() {
                    return a(b.apply(void 0, arguments));
                  };
                });
              }
              function applyMiddleware() {
                for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
                  middlewares[_key] = arguments[_key];
                }
                return function(createStore2) {
                  return function() {
                    var store = createStore2.apply(void 0, arguments);
                    var _dispatch5 = function dispatch() {
                      throw new Error(true ? formatProdErrorMessage(15) : 0);
                    };
                    var middlewareAPI = {
                      getState: store.getState,
                      dispatch: function dispatch() {
                        return _dispatch5.apply(void 0, arguments);
                      }
                    };
                    var chain = middlewares.map(function(middleware) {
                      return middleware(middlewareAPI);
                    });
                    _dispatch5 = compose.apply(void 0, chain)(store.dispatch);
                    return _objectSpread2(_objectSpread2({}, store), {}, {
                      dispatch: _dispatch5
                    });
                  };
                };
              }
              function isCrushed() {
              }
              if (false) {
              }
            }
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              exports: {}
            };
            __webpack_modules__[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          !function() {
            __webpack_require__.n = function(module2) {
              var getter = module2 && module2.__esModule ? function() {
                return module2["default"];
              } : function() {
                return module2;
              };
              __webpack_require__.d(getter, { a: getter });
              return getter;
            };
          }();
          !function() {
            __webpack_require__.d = function(exports2, definition) {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          }();
          !function() {
            __webpack_require__.o = function(obj, prop) {
              return Object.prototype.hasOwnProperty.call(obj, prop);
            };
          }();
          !function() {
            __webpack_require__.r = function(exports2) {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
          }();
          var __webpack_exports__ = {};
          !function() {
            var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(373);
            var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
            var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);
            var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(_scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__);
            var _scripts_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(883);
            var _scripts_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(789);
            var _scripts_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(686);
            __webpack_exports__["default"] = _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default();
          }();
          __webpack_exports__ = __webpack_exports__["default"];
          return __webpack_exports__;
        }();
      });
    }
  });

  // app/javascript/custom/components/popup.js
  var Popup = class {
    animationDuration = 600;
    body = null;
    closeEscapeHandler;
    init() {
      this.body = document.querySelector("body");
      this.openInit();
      this.closeInit();
    }
    openInit() {
      document.addEventListener("click", (e) => {
        if (!e.target.closest(".popup-open"))
          return;
        e.preventDefault();
        const target = e.target.closest(".popup-open");
        const href = target.getAttribute("href");
        const dataPopup = target.dataset["popup"];
        let popup2;
        if (href && href !== "#") {
          popup2 = document.querySelector(href);
        }
        if (dataPopup) {
          popup2 = document.querySelector(`#${dataPopup}`);
        }
        if (!href && !dataPopup || !popup2) {
          console.error("Couldn't find a popup");
          return;
        }
        this.open(popup2);
      });
    }
    closeInit() {
      document.addEventListener("click", (e) => {
        if (!e.target.closest(".popup__close"))
          return;
        e.preventDefault();
        const target = e.target;
        this.close(target.closest(".popup"));
      });
      document.addEventListener("click", (e) => {
        if (!e.target.matches(".popup"))
          return;
        e.preventDefault();
        const target = e.target;
        this.close(target);
      });
    }
    open(popup2) {
      this.body.classList.add("overflow-hidden");
      popup2.classList.add("popup_show");
      this.createEscapeListener();
    }
    close(popup2) {
      this.body.classList.remove("overflow-hidden");
      popup2.classList.add("popup_hide");
      setTimeout(() => {
        popup2.classList.remove("popup_show");
        popup2.classList.remove("popup_hide");
      }, this.animationDuration);
      this.removeEscapeListener();
    }
    closeEscapeHandle(event2) {
      const popup2 = document.querySelector(".popup.popup_show");
      if (popup2 && event2.key === "Escape") {
        this.close(popup2);
      }
    }
    createEscapeListener() {
      this.closeEscapeHandler = this.closeEscapeHandle.bind(this);
      document.addEventListener("keyup", this.closeEscapeHandler);
    }
    removeEscapeListener() {
      document.removeEventListener("keyup", this.closeEscapeHandler);
    }
  };
  var popup = new Popup();

  // app/javascript/custom/components/header.js
  var Header = class {
    lastScrollY = 0;
    pageRefreshed = true;
    headerOffset = 60;
    locales = ["ru", "en", "zh"];
    init() {
      const header2 = document.querySelector(".header");
      this.checkScrollFixed(header2);
      window.addEventListener("scroll", () => {
        this.checkScrollFixed(header2);
        this.checkScrollHidden(header2);
      });
      this.pageRefreshed = localStorage.getItem("header_hidden") === "false";
      window.addEventListener("beforeunload", () => {
        localStorage.setItem("header_hidden", "false");
      });
      this.changeLanguage();
    }
    checkScrollFixed(header2) {
      if (this.pageRefreshed) {
        header2.style.transition = "none";
      }
      if (window.scrollY > this.headerOffset && !header2.classList.contains("header_fixed")) {
        header2.classList.add("header_fixed");
      } else if (window.scrollY <= this.headerOffset && header2.classList.contains("header_fixed")) {
        header2.classList.remove("header_fixed");
      }
      if (this.pageRefreshed) {
        header2.removeAttribute("style");
      }
    }
    checkScrollHidden(header2) {
      if (this.pageRefreshed) {
        this.pageRefreshed = false;
        return;
      }
      if (document.body.classList.contains("navigation_show")) {
        return;
      }
      const scrollY = window.scrollY;
      if (scrollY > this.headerOffset && scrollY > this.lastScrollY && !header2.classList.contains("header_hidden")) {
        header2.classList.add("header_hidden");
      } else if (header2.classList.contains("header_hidden") && (scrollY <= this.headerOffset || scrollY < this.lastScrollY)) {
        header2.classList.remove("header_hidden");
      }
      this.lastScrollY = scrollY;
    }
    changeLanguage() {
      const currentLocale = document.body.dataset.locale;
      document.querySelector(`.header-language__item[data-locale='${currentLocale}']`)?.classList.add("header-language__item_active");
      document.querySelectorAll(".header-language__item").forEach((el) => {
        el.onclick = () => {
          const locale = el.dataset.locale;
          const paths = window.location.pathname.split("/");
          paths.splice(0, 1);
          paths.forEach((path, i) => {
            if (this.locales.includes(path)) {
              paths.splice(i, 1);
            }
          });
          switch (locale) {
            case "ru":
              window.location.href = "/" + paths.join("/");
              break;
            case "en":
              window.location.href = "/en/" + paths.join("/");
              break;
            case "zh":
              window.location.href = "/zh/" + paths.join("/");
              break;
          }
        };
      });
    }
  };
  var header = new Header();

  // node_modules/gsap/gsap-core.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l = toFind.length, i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
    }
    return i < l;
  };
  var _lazyRender = function _lazyRender2() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p) {
    return p;
  };
  var _setDefaults = function _setDefaults2(obj, defaults3) {
    for (var p in defaults3) {
      p in obj || (obj[p] = defaults3[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults3) {
      for (var p in defaults3) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults3[p]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {
    }
    return i < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t = timeline2;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
          }
          wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s = "", i, nums, end, isArray;
    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate2(start[i - 1], start[i]));
        }
        l--;
        func = function func2(p2) {
          p2 *= l;
          var i2 = Math.min(il, ~~p2);
          return interpolators[i2](p2 - i2);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (_windowExists() && config3) {
      config3 = !config3.name && config3["default"] || config3;
      var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      config3 && _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + 0.5);
      a[1] = ~~(s * 100 + 0.5);
      a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  };
  var _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  };
  var _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
      var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
          _listeners3[_i2](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _raf = _win.requestAnimationFrame;
            _registerPluginQueue.forEach(_createPlugin);
          }
          _id && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t, d, f, v) {
          callback(t, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners3[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners3.indexOf(callback)) && _listeners3.splice(i, 1) && _i2 >= i && _i2--;
      },
      _listeners: _listeners3
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p) {
      return 1 - ease(1 - p);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), true);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.vars.immediateRender ? -Infinity : this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill2() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render4(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i = animations.length;
      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }
      if (self._dirty) {
        parent = self.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }
            self.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
        self._dirty = 0;
      }
      return self._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate,
          onUpdateParams,
          callbackScope,
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            stagger: 0,
            parent
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;
      while (i--) {
        pt = lookup[i][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return 1;
        }
        ptCache.push(pt);
      }
    }
    i = ptCache.length;
    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults3 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults3 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i = 0; i < l; i++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }
            for (p in copy) {
              a = copy[p].sort(function(a2, b) {
                return a2.t - b.t;
              });
              time = 0;
              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render4(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
        return this.resetTo(property, value, start, startIsRelative);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill2(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function(name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i = parsedTargets.length;
      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];
          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
        pt = pt._next;
      }
      s += data.c;
    }
    data.set(data.t, data.p, s, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
      return f();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c) {
        var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c) {
        return c.onMatch(c);
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self = this, f = function f2() {
        var prev = _context, prevSelector = self.selector, result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
      self.last = f;
      return name === _isFunction ? f(self) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function(e) {
        return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
      });
      return a;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill2(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        var tweens = this.getTweens();
        this.data.forEach(function(t) {
          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function(tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        });
        tweens.map(function(t) {
          return {
            g: t.globalTime(0),
            t
          };
        }).sort(function(a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function(o) {
          return o.t.revert(revert);
        });
        this.data.forEach(function(e) {
          return !(e instanceof Tween) && e.revert && e.revert(revert);
        });
        this._r.forEach(function(f) {
          return f(revert, _this4);
        });
        this.isReverted = true;
      } else {
        this.data.forEach(function(e) {
          return e.kill && e.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i = _media.length;
        while (i--) {
          _media[i].id === this.id && _media.splice(i, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  }();
  var MatchMedia = /* @__PURE__ */ function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3);
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill2(revert) {
      this.contexts.forEach(function(c) {
        return c.kill(revert, true);
      });
    };
    return MatchMedia2;
  }();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t) {
          return gsap.quickSetter(t, property, unit);
        }), l = setters.length;
        return function(value) {
          var i = l;
          while (i--) {
            setters[i](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function(value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge22;
      var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults3 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults3), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c) {
        var cond = c.conditions, found, p;
        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }
        found && c.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type], i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      rawVars: 1,
      init: function init6(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;
      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;
        this._props.push(p);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    init: function init2(target, value) {
      var i = value.length;
      while (i--) {
        this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.12.2";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/gsap/CSSPlugin.js
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (target._gsap.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for (i = 0; i < props.length; i += 3) {
      props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i = _reverting2();
      if ((!i || !i.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && properties.split(",").forEach(function(p) {
      return saver.save(p);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e.style ? e : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !(_prefixes[i] + property in s)) {
    }
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack2;
      } catch (e) {
      }
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style = target.style;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // app/javascript/custom/utils/animation.util.js
  var slideUp = (target, duration = 500) => {
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";
    window.setTimeout(() => {
      target.style.display = "none";
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };
  var slideDown = (target, duration = 500, styleDisplay = "block") => {
    target.style.removeProperty("display");
    let display = window.getComputedStyle(target).display;
    if (display === "none")
      display = styleDisplay;
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };
  var slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === "none") {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  };

  // app/javascript/custom/utils/request.util.js
  var getHTML = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "text";
    xhr.onload = () => {
      const status = xhr.status;
      console.log(xhr);
      callback(status, xhr.response);
      if (xhr.status !== 200) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043D\u043E\u0432\u043E\u0441\u0442\u0438...");
      }
    };
    xhr.send();
  };
  var formPOST = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.responseType = "json";
    xhr.onload = () => {
      const status = xhr.status;
      console.log(xhr);
      callback(status, xhr.response);
      if (xhr.status !== 200) {
        console.error("error");
      }
    };
    xhr.send();
  };

  // app/javascript/custom/utils/screen.util.js
  var isMobileDevice = () => {
    return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  // app/javascript/custom/utils/validators.util.js
  var validatorEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(email, emailRegex.test(email));
    return emailRegex.test(email);
  };

  // app/javascript/custom/utils/cookies.util.js
  var getCookie = (cookieName) => {
    let neededCookie = null;
    const cookies2 = document.cookie.split("; ");
    cookies2.forEach((cookie) => {
      const parts = cookie.split("=");
      if (parts[0] === cookieName) {
        neededCookie = parts[1];
      }
    });
    return neededCookie;
  };

  // app/javascript/custom/components/navigation.js
  var Navigation = class {
    navigation;
    navigationTimeline1;
    navigationTimeline2;
    headerBurgerTimeline;
    init() {
      this.navigation = document.querySelector(".navigation");
      if (!this.navigation) {
        return;
      }
      this.navigationSetHeight();
      window.addEventListener("resize", () => {
        this.navigationSetHeight();
      });
      gsapWithCSS.to(this.navigation, { y: "-100%", opacity: 0 });
      this.navigationTimelineInit();
      this.headerTimelineInit();
      this.navigationLinkInit();
      this.soonInit();
      const burgerButton = document.querySelector(".header-burger");
      burgerButton.onclick = () => {
        if (document.body.classList.contains("navigation_show")) {
          this.navigationHide();
        } else {
          document.body.classList.add("navigation_show", "overflow-hidden");
          this.navigationTimeline1.play();
          this.navigationTimeline2.play();
          this.headerBurgerTimeline.play();
        }
      };
    }
    navigationHide() {
      this.navigationTimeline1.reverse();
      this.navigationTimeline1.eventCallback("onReverseComplete", () => {
        this.headerBurgerTimeline.reverse();
        document.body.classList.remove("navigation_show", "overflow-hidden");
      });
      this.navigationTimeline2.reverse();
    }
    headerTimelineInit() {
      this.headerBurgerTimeline = gsapWithCSS.timeline({ paused: true });
      this.headerBurgerTimeline.to(".header-burger__text_open", {
        duration: 0.3,
        display: "none",
        opacity: 0
      });
      this.headerBurgerTimeline.to(".header-burger__text_close", {
        duration: 0.3,
        display: "block",
        opacity: 1
      });
    }
    navigationTimelineInit() {
      gsapWithCSS.set(
        ".navigation-contact__title, .navigation-contact__item, .navigation__li",
        {
          opacity: 0,
          y: -50
        }
      );
      this.navigationTimeline1 = gsapWithCSS.timeline({ paused: true });
      this.navigationTimeline1.set(".navigation", {
        display: "block"
      });
      this.navigationTimeline1.to(".navigation", {
        duration: 0.5,
        y: 0,
        opacity: 1
      });
      this.navigation.querySelectorAll(".navigation__li").forEach((el, i) => {
        this.navigationTimeline1.to(
          el,
          {
            duration: 0.2,
            opacity: 1,
            y: 0
          },
          i === 0 ? "" : "-=.1s"
        );
      });
      this.navigationTimeline2 = gsapWithCSS.timeline({ paused: true });
      this.navigation.querySelectorAll(".navigation-contact").forEach((el, i) => {
        const title = el.querySelector(".navigation-contact__title");
        const items = el.querySelectorAll(".navigation-contact__item");
        this.navigationTimeline2.to(
          title,
          {
            duration: 0.2,
            opacity: 1,
            y: 0
          },
          i === 0 ? "" : "-=0.1s"
        );
        items.forEach((item) => {
          this.navigationTimeline2.to(
            item,
            {
              duration: 0.2,
              opacity: 1,
              y: 0
            },
            "-=0.1s"
          );
        });
      });
    }
    navigationSetHeight() {
      if (isMobileDevice()) {
        this.navigation.style.height = `${window.screen.availHeight}px`;
      } else {
        this.navigation.style.height = `${innerHeight}px`;
      }
    }
    navigationLinkInit() {
      this.navigation.querySelectorAll(".navigation__link").forEach((el) => {
        const href = el.getAttribute("href");
        if (href?.startsWith("#")) {
          el.onclick = (e) => {
            e.preventDefault();
            this.navigationHide();
            const scrollToElement = document.querySelector(href);
            window.scrollTo({
              top: scrollToElement.offsetTop,
              behavior: "smooth"
            });
          };
        }
      });
    }
    soonInit() {
      this.navigation.querySelectorAll(".navigation__link_disabled").forEach((el) => {
        const text = el.querySelector(".navigation__link_text");
        const soon = el.querySelector(".navigation__link_soon");
        el.addEventListener("mouseenter", () => {
          gsapWithCSS.set(text, { display: "none" });
          gsapWithCSS.set(soon, { display: "block" });
        });
        el.addEventListener("mouseleave", () => {
          gsapWithCSS.set(soon, { display: "none" });
          gsapWithCSS.set(text, { display: "block" });
        });
      });
    }
  };
  var navigation = new Navigation();

  // node_modules/gsap/ScrollToPlugin.js
  var gsap2;
  var _coreInitted2;
  var _window;
  var _docEl;
  var _body;
  var _toArray;
  var _config2;
  var ScrollTrigger;
  var _windowExists5 = function _windowExists6() {
    return typeof window !== "undefined";
  };
  var _getGSAP = function _getGSAP2() {
    return gsap2 || _windowExists5() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
  };
  var _isString3 = function _isString4(value) {
    return typeof value === "string";
  };
  var _isFunction3 = function _isFunction4(value) {
    return typeof value === "function";
  };
  var _max = function _max2(element, axis) {
    var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
    return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
  };
  var _buildGetter = function _buildGetter2(e, axis) {
    var p = "scroll" + (axis === "x" ? "Left" : "Top");
    if (e === _window) {
      if (e.pageXOffset != null) {
        p = "page" + axis.toUpperCase() + "Offset";
      } else {
        e = _docEl[p] != null ? _docEl : _body;
      }
    }
    return function() {
      return e[p];
    };
  };
  var _clean = function _clean2(value, index, target, targets) {
    _isFunction3(value) && (value = value(index, target, targets));
    if (typeof value !== "object") {
      return _isString3(value) && value !== "max" && value.charAt(1) !== "=" ? {
        x: value,
        y: value
      } : {
        y: value
      };
    } else if (value.nodeType) {
      return {
        y: value,
        x: value
      };
    } else {
      var result = {}, p;
      for (p in value) {
        result[p] = p !== "onAutoKill" && _isFunction3(value[p]) ? value[p](index, target, targets) : value[p];
      }
      return result;
    }
  };
  var _getOffset = function _getOffset2(element, container) {
    element = _toArray(element)[0];
    if (!element || !element.getBoundingClientRect) {
      return console.warn("scrollTo target doesn't exist. Using 0") || {
        x: 0,
        y: 0
      };
    }
    var rect = element.getBoundingClientRect(), isRoot = !container || container === _window || container === _body, cRect = isRoot ? {
      top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
      left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
    } : container.getBoundingClientRect(), offsets = {
      x: rect.left - cRect.left,
      y: rect.top - cRect.top
    };
    if (!isRoot && container) {
      offsets.x += _buildGetter(container, "x")();
      offsets.y += _buildGetter(container, "y")();
    }
    return offsets;
  };
  var _parseVal = function _parseVal2(value, target, axis, currentVal, offset) {
    return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString3(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
  };
  var _initCore3 = function _initCore4() {
    gsap2 = _getGSAP();
    if (_windowExists5() && gsap2 && typeof document !== "undefined" && document.body) {
      _window = window;
      _body = document.body;
      _docEl = document.documentElement;
      _toArray = gsap2.utils.toArray;
      gsap2.config({
        autoKillThreshold: 7
      });
      _config2 = gsap2.config();
      _coreInitted2 = 1;
    }
  };
  var ScrollToPlugin = {
    version: "3.12.2",
    name: "scrollTo",
    rawVars: 1,
    register: function register(core) {
      gsap2 = core;
      _initCore3();
    },
    init: function init4(target, value, tween, index, targets) {
      _coreInitted2 || _initCore3();
      var data = this, snapType = gsap2.getProperty(target, "scrollSnapType");
      data.isWin = target === _window;
      data.target = target;
      data.tween = tween;
      value = _clean(value, index, target, targets);
      data.vars = value;
      data.autoKill = !!value.autoKill;
      data.getX = _buildGetter(target, "x");
      data.getY = _buildGetter(target, "y");
      data.x = data.xPrev = data.getX();
      data.y = data.yPrev = data.getY();
      ScrollTrigger || (ScrollTrigger = gsap2.core.globals().ScrollTrigger);
      gsap2.getProperty(target, "scrollBehavior") === "smooth" && gsap2.set(target, {
        scrollBehavior: "auto"
      });
      if (snapType && snapType !== "none") {
        data.snap = 1;
        data.snapInline = target.style.scrollSnapType;
        target.style.scrollSnapType = "none";
      }
      if (value.x != null) {
        data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);
        data._props.push("scrollTo_x");
      } else {
        data.skipX = 1;
      }
      if (value.y != null) {
        data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);
        data._props.push("scrollTo_y");
      } else {
        data.skipY = 1;
      }
    },
    render: function render3(ratio, data) {
      var pt = data._pt, target = data.target, tween = data.tween, autoKill = data.autoKill, xPrev = data.xPrev, yPrev = data.yPrev, isWin = data.isWin, snap3 = data.snap, snapInline = data.snapInline, x, y, yDif, xDif, threshold;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      x = isWin || !data.skipX ? data.getX() : xPrev;
      y = isWin || !data.skipY ? data.getY() : yPrev;
      yDif = y - yPrev;
      xDif = x - xPrev;
      threshold = _config2.autoKillThreshold;
      if (data.x < 0) {
        data.x = 0;
      }
      if (data.y < 0) {
        data.y = 0;
      }
      if (autoKill) {
        if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
          data.skipX = 1;
        }
        if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
          data.skipY = 1;
        }
        if (data.skipX && data.skipY) {
          tween.kill();
          data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
        }
      }
      if (isWin) {
        _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
      } else {
        data.skipY || (target.scrollTop = data.y);
        data.skipX || (target.scrollLeft = data.x);
      }
      if (snap3 && (ratio === 1 || ratio === 0)) {
        y = target.scrollTop;
        x = target.scrollLeft;
        snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
        target.scrollTop = y + 1;
        target.scrollLeft = x + 1;
        target.scrollTop = y;
        target.scrollLeft = x;
      }
      data.xPrev = data.x;
      data.yPrev = data.y;
      ScrollTrigger && ScrollTrigger.update();
    },
    kill: function kill(property) {
      var both = property === "scrollTo";
      if (both || property === "scrollTo_x") {
        this.skipX = 1;
      }
      if (both || property === "scrollTo_y") {
        this.skipY = 1;
      }
    }
  };
  ScrollToPlugin.max = _max;
  ScrollToPlugin.getOffset = _getOffset;
  ScrollToPlugin.buildGetter = _buildGetter;
  _getGSAP() && gsap2.registerPlugin(ScrollToPlugin);

  // node_modules/gsap/Observer.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var gsap3;
  var _coreInitted3;
  var _clamp3;
  var _win3;
  var _doc3;
  var _docEl2;
  var _body2;
  var _isTouch;
  var _pointerType;
  var ScrollTrigger2;
  var _root;
  var _normalizer;
  var _eventTypes;
  var _context2;
  var _getGSAP3 = function _getGSAP4() {
    return gsap3 || typeof window !== "undefined" && (gsap3 = window.gsap) && gsap3.registerPlugin && gsap3;
  };
  var _startup = 1;
  var _observers = [];
  var _scrollers = [];
  var _proxies = [];
  var _getTime = Date.now;
  var _bridge = function _bridge2(name, value) {
    return value;
  };
  var _integrate = function _integrate2() {
    var core = ScrollTrigger2.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge3(name, value) {
      return data[name](value);
    };
  };
  var _getProxyProp = function _getProxyProp2(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  };
  var _isViewport = function _isViewport2(el) {
    return !!~_root.indexOf(el);
  };
  var _addListener = function _addListener2(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener = function _removeListener2(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _onScroll = function _onScroll2() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  };
  var _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
    var cachingFunc = function cachingFunc2(value) {
      if (value || value === 0) {
        _startup && (_win3.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f(value);
        cachingFunc2.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
        cachingFunc2.cacheID = _scrollers.cache;
        cachingFunc2.v = f();
      }
      return cachingFunc2.v + cachingFunc2.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
  };
  var _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win3.scrollTo(value, _vertical.sc()) : _win3.pageXOffset || _doc3[_scrollLeft] || _docEl2[_scrollLeft] || _body2[_scrollLeft] || 0;
    })
  };
  var _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win3.scrollTo(_horizontal.sc(), value) : _win3.pageYOffset || _doc3[_scrollTop] || _docEl2[_scrollTop] || _body2[_scrollTop] || 0;
    })
  };
  var _getTarget = function _getTarget2(t, self) {
    return (self && self._ctx && self._ctx.selector || gsap3.utils.toArray)(t)[0] || (typeof t === "string" && gsap3.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc3.scrollingElement || _docEl2);
    var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i && (i = _scrollers.push(element) - 1);
    _scrollers[i + offset] || _addListener(element, "scroll", _onScroll);
    var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
      return arguments.length ? element[s] = value : element[s];
    })));
    func.target = element;
    prev || (func.smooth = gsap3.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update2 = function update3(value2, force) {
      var t = _getTime();
      if (force || t - t1 > min) {
        v2 = v1;
        v1 = value2;
        t2 = t1;
        t1 = t;
      } else if (useDelta) {
        v1 += value2;
      } else {
        v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
      }
    }, reset = function reset2() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t2, vOld = v2, t = _getTime();
      (latestValue || latestValue === 0) && latestValue !== v1 && update2(latestValue);
      return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
    };
    return {
      update: update2,
      reset,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
  };
  var _getAbsoluteMax = function _getAbsoluteMax2(a) {
    var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  };
  var _setScrollTrigger = function _setScrollTrigger2() {
    ScrollTrigger2 = gsap3.core.globals().ScrollTrigger;
    ScrollTrigger2 && ScrollTrigger2.core && _integrate();
  };
  var _initCore5 = function _initCore6(core) {
    gsap3 = core || _getGSAP3();
    if (gsap3 && typeof document !== "undefined" && document.body) {
      _win3 = window;
      _doc3 = document;
      _docEl2 = _doc3.documentElement;
      _body2 = _doc3.body;
      _root = [_win3, _doc3, _docEl2, _body2];
      _clamp3 = gsap3.utils.clamp;
      _context2 = gsap3.core.context || function() {
      };
      _pointerType = "onpointerenter" in _body2 ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win3.matchMedia && _win3.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win3 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl2 ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl2) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function() {
        return _startup = 0;
      }, 500);
      _setScrollTrigger();
      _coreInitted3 = 1;
    }
    return _coreInitted3;
  };
  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = /* @__PURE__ */ function() {
    function Observer3(vars) {
      this.init(vars);
    }
    var _proto = Observer3.prototype;
    _proto.init = function init6(vars) {
      _coreInitted3 || _initCore5(gsap3) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger2 || _setScrollTrigger();
      var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event2 = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick2 = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl2;
      this.vars = vars;
      ignore && (ignore = gsap3.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce = debounce !== false;
      lineHeight || (lineHeight = parseFloat(_win3.getComputedStyle(_body2).lineHeight) || 22);
      var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc3, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
        return onClickTime = _getTime();
      }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
        return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
      }, onStopFunc = function onStopFunc2() {
        self._vx.reset();
        self._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self);
      }, update2 = function update3() {
        var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
        if (changedX) {
          onRight && self.deltaX > 0 && onRight(self);
          onLeft && self.deltaX < 0 && onLeft(self);
          onChangeX && onChangeX(self);
          onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
          prevDeltaX = self.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self.deltaY > 0 && onDown(self);
          onUp && self.deltaY < 0 && onUp(self);
          onChangeY && onChangeY(self);
          onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
          prevDeltaY = self.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self);
          if (dragged) {
            onDrag(self);
            dragged = false;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self);
        if (wheeled) {
          onWheel(self);
          wheeled = false;
        }
        id = 0;
      }, onDelta = function onDelta2(x, y, index) {
        deltaX[index] += x;
        deltaY[index] += y;
        self._vx.update(x);
        self._vy.update(y);
        debounce ? id || (id = requestAnimationFrame(update2)) : update2();
      }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
        if (lockAxis && !axis) {
          self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x;
          self._vx.update(x, true);
        }
        if (axis !== "x") {
          deltaY[2] += y;
          self._vy.update(y, true);
        }
        debounce ? id || (id = requestAnimationFrame(update2)) : update2();
      }, _onDrag = function _onDrag2(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
        self.x = x;
        self.y = y;
        if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self);
        }
      }, _onPress = self.onPress = function(e) {
        if (_ignoreCheck(e, 1) || e && e.button) {
          return;
        }
        self.axis = axis = null;
        onStopDelayedCall.pause();
        self.isPressed = true;
        e = _getEvent(e);
        prevDeltaX = prevDeltaY = 0;
        self.startX = self.x = e.clientX;
        self.startY = self.y = e.clientY;
        self._vx.reset();
        self._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
        self.deltaX = self.deltaY = 0;
        onPress && onPress(self);
      }, _onRelease = self.onRelease = function(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
        if (!wasDragging && isTrackingDrag) {
          self._vx.reset();
          self._vy.reset();
          if (preventDefault && allowClicks) {
            gsap3.delayedCall(0.08, function() {
              if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                if (e.target.click) {
                  e.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win3, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self.isDragging = self.isGesturing = self.isPressed = false;
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self);
        onRelease && onRelease(self, wasDragging);
      }, _onGestureStart = function _onGestureStart2(e) {
        return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self.isGesturing = false) || onGestureEnd(self);
      }, onScroll2 = function onScroll3(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = scrollFuncX(), y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win3.innerHeight : 1) * wheelSpeed;
        onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
        self.x = x;
        self.y = y;
        moved = true;
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e) {
        self.event = e;
        onHover(self);
      }, _onHoverEnd = function _onHoverEnd2(e) {
        self.event = e;
        onHoverEnd(self);
      }, _onClick = function _onClick2(e) {
        return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick2(self);
      };
      onStopDelayedCall = self._dc = gsap3.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self.deltaX = self.deltaY = 0;
      self._vx = _getVelocityProp(0, 50, true);
      self._vy = _getVelocityProp(0, 50, true);
      self.scrollX = scrollFuncX;
      self.scrollY = scrollFuncY;
      self.isDragging = self.isGesturing = self.isPressed = false;
      _context2(this);
      self.enable = function(e) {
        if (!self.isEnabled) {
          _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll2, preventDefault, capture);
          type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);
          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);
            _addListener(ownerDoc, _eventTypes[2], _onRelease);
            _addListener(ownerDoc, _eventTypes[3], _onRelease);
            allowClicks && _addListener(target, "click", clickCapture, false, true);
            onClick2 && _addListener(target, "click", _onClick);
            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener(target, _pointerType + "move", _onMove);
          }
          self.isEnabled = true;
          e && e.type && _onPress(e);
          onEnable && onEnable(self);
        }
        return self;
      };
      self.disable = function() {
        if (self.isEnabled) {
          _observers.filter(function(o) {
            return o !== self && _isViewport(o.target);
          }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          if (self.isPressed) {
            self._vx.reset();
            self._vy.reset();
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }
          _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll2, capture);
          _removeListener(target, "wheel", _onWheel, capture);
          _removeListener(target, _eventTypes[0], _onPress, capture);
          _removeListener(ownerDoc, _eventTypes[2], _onRelease);
          _removeListener(ownerDoc, _eventTypes[3], _onRelease);
          _removeListener(target, "click", clickCapture, true);
          _removeListener(target, "click", _onClick);
          _removeListener(ownerDoc, "gesturestart", _onGestureStart);
          _removeListener(ownerDoc, "gestureend", _onGestureEnd);
          _removeListener(target, _pointerType + "enter", _onHover);
          _removeListener(target, _pointerType + "leave", _onHoverEnd);
          _removeListener(target, _pointerType + "move", _onMove);
          self.isEnabled = self.isPressed = self.isDragging = false;
          onDisable && onDisable(self);
        }
      };
      self.kill = self.revert = function() {
        self.disable();
        var i = _observers.indexOf(self);
        i >= 0 && _observers.splice(i, 1);
        _normalizer === self && (_normalizer = 0);
      };
      _observers.push(self);
      isNormalizer && _isViewport(target) && (_normalizer = self);
      self.enable(event2);
    };
    _createClass(Observer3, [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]);
    return Observer3;
  }();
  Observer.version = "3.12.2";
  Observer.create = function(vars) {
    return new Observer(vars);
  };
  Observer.register = _initCore5;
  Observer.getAll = function() {
    return _observers.slice();
  };
  Observer.getById = function(id) {
    return _observers.filter(function(o) {
      return o.vars.id === id;
    })[0];
  };
  _getGSAP3() && gsap3.registerPlugin(Observer);

  // node_modules/gsap/ScrollTrigger.js
  var gsap4;
  var _coreInitted4;
  var _win4;
  var _doc4;
  var _docEl3;
  var _body3;
  var _root2;
  var _resizeDelay;
  var _toArray2;
  var _clamp4;
  var _time2;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp2;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites2;
  var _ignoreResize;
  var _normalizer2;
  var _ignoreMobileResize;
  var _baseScreenHeight;
  var _baseScreenWidth;
  var _fixIOSBug;
  var _context3;
  var _scrollRestoration;
  var _div100vh;
  var _100vh;
  var _limitCallbacks;
  var _startup2 = 1;
  var _getTime2 = Date.now;
  var _time1 = _getTime2();
  var _lastScrollTime = 0;
  var _enabled = 0;
  var _parseClamp = function _parseClamp2(value, type, self) {
    var clamp3 = _isString5(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self["_" + type + "Clamp"] = clamp3;
    return clamp3 ? value.substr(6, value.length - 7) : value;
  };
  var _keepClamp = function _keepClamp2(value, clamp3) {
    return clamp3 && (!_isString5(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
  };
  var _rafBugFix = function _rafBugFix2() {
    return _enabled && requestAnimationFrame(_rafBugFix2);
  };
  var _pointerDownHandler = function _pointerDownHandler2() {
    return _pointerIsDown = 1;
  };
  var _pointerUpHandler = function _pointerUpHandler2() {
    return _pointerIsDown = 0;
  };
  var _passThrough3 = function _passThrough4(v) {
    return v;
  };
  var _round3 = function _round4(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _windowExists7 = function _windowExists8() {
    return typeof window !== "undefined";
  };
  var _getGSAP5 = function _getGSAP6() {
    return gsap4 || _windowExists7() && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
  };
  var _isViewport3 = function _isViewport4(e) {
    return !!~_root2.indexOf(e);
  };
  var _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win4["inner" + dimensionProperty]) || _docEl3["client" + dimensionProperty] || _body3["client" + dimensionProperty];
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
      _winOffsets.width = _win4.innerWidth;
      _winOffsets.height = _100vh;
      return _winOffsets;
    } : function() {
      return _getBounds(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a = _ref.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a()[d];
    } : function() {
      return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref2) {
    var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
    return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl3[s] || _body3[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events2) {
    for (var i = 0; i < _autoRefresh.length; i += 3) {
      (!events2 || ~events2.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
  };
  var _isString5 = function _isString6(value) {
    return typeof value === "string";
  };
  var _isFunction5 = function _isFunction6(value) {
    return typeof value === "function";
  };
  var _isNumber3 = function _isNumber4(value) {
    return typeof value === "number";
  };
  var _isObject3 = function _isObject4(value) {
    return typeof value === "object";
  };
  var _endAnimation = function _endAnimation2(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  };
  var _callback3 = function _callback4(self, func) {
    if (self.enabled) {
      var result = func(self);
      result && result.totalTime && (self.callbackAnimation = result);
    }
  };
  var _abs = Math.abs;
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win4.getComputedStyle(element);
  };
  var _makePositionable = function _makePositionable2(element) {
    var position = _getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  };
  var _setDefaults3 = function _setDefaults4(obj, defaults3) {
    for (var p in defaults3) {
      p in obj || (obj[p] = defaults3[p]);
    }
    return obj;
  };
  var _getBounds = function _getBounds2(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp2] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap4.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
    var a = [], labels = timeline2.labels, duration = timeline2.duration(), p;
    for (p in labels) {
      a.push(labels[p] / duration);
    }
    return a;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value) {
      return gsap4.utils.snap(_getLabelRatioArray(animation), value);
    };
  };
  var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
    var snap3 = gsap4.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
      return a2 - b;
    });
    return a ? function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i;
      if (!direction) {
        return snap3(value);
      }
      if (direction > 0) {
        value -= threshold;
        for (i = 0; i < a.length; i++) {
          if (a[i] >= value) {
            return a[i];
          }
        }
        return a[i - 1];
      } else {
        i = a.length;
        value += threshold;
        while (i--) {
          if (a[i] <= value) {
            return a[i];
          }
        }
      }
      return a[0];
    } : function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap3(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
    return function(value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener3 = function _removeListener4(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults2 = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value, size) {
    if (_isString5(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  };
  var _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e = _doc4.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body3 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap4.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _rafID;
  var _sync = function _sync2() {
    return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  };
  var _onScroll3 = function _onScroll4() {
    if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body3.clientWidth) {
      _scrollers.cache++;
      if (_normalizer2) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }
      _lastScrollTime || _dispatch3("scrollStart");
      _lastScrollTime = _getTime2();
    }
  };
  var _setBaseDimensions = function _setBaseDimensions2() {
    _baseScreenWidth = _win4.innerWidth;
    _baseScreenHeight = _win4.innerHeight;
  };
  var _onResize = function _onResize2() {
    _scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc4.fullscreenElement && !_doc4.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win4.innerWidth || Math.abs(_win4.innerHeight - _baseScreenHeight) > _win4.innerHeight * 0.25) && _resizeDelay.restart(true);
  };
  var _listeners2 = {};
  var _emptyArray2 = [];
  var _softRefresh = function _softRefresh2() {
    return _removeListener3(ScrollTrigger3, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch3 = function _dispatch4(type) {
    return _listeners2[type] && _listeners2[type].map(function(f) {
      return f();
    }) || _emptyArray2;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i = 0; i < _savedStyles.length; i += 5) {
      if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
        _savedStyles[i + 3].uncache = 1;
      }
    }
  };
  var _revertAll = function _revertAll2(kill2, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill2) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    media && _revertRecorded(media);
    media || _dispatch3("revert");
  };
  var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
    _scrollers.cache++;
    (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
      return _isFunction5(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString5(scrollRestoration) && (_win4.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  };
  var _refreshingAll;
  var _refreshID = 0;
  var _queueRefreshID;
  var _queueRefreshAll = function _queueRefreshAll2() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function() {
        return id === _refreshID && _refreshAll(true);
      });
    }
  };
  var _refresh100vh = function _refresh100vh2() {
    _body3.appendChild(_div100vh);
    _100vh = _div100vh.offsetHeight || _win4.innerHeight;
    _body3.removeChild(_div100vh);
  };
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    if (_lastScrollTime && !force) {
      _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
      return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger3.isRefreshing = true;
    _scrollers.forEach(function(obj) {
      return _isFunction5(obj) && ++obj.cacheID && (obj.rec = obj());
    });
    var refreshInits = _dispatch3("refreshInit");
    _sort && ScrollTrigger3.sort();
    skipRevert || _revertAll();
    _scrollers.forEach(function(obj) {
      if (_isFunction5(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });
    _triggers.slice(0).forEach(function(t) {
      return t.refresh();
    });
    _triggers.forEach(function(t, i) {
      if (t._subPinOffset && t.pin) {
        var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
        t.revert(true, 1);
        t.adjustPinSpacing(t.pin[prop] - original);
        t.refresh();
      }
    });
    _triggers.forEach(function(t) {
      var max = _maxScroll(t.scroller, t._dir);
      (t.vars.end === "max" || t._endClamp && t.end > max) && t.setPositions(t.start, Math.max(t.start + 1, max), true);
    });
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _scrollers.forEach(function(obj) {
      if (_isFunction5(obj)) {
        obj.smooth && requestAnimationFrame(function() {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t) {
      return _isFunction5(t.vars.onRefresh) && t.vars.onRefresh(t);
    });
    _refreshingAll = ScrollTrigger3.isRefreshing = false;
    _dispatch3("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _primary;
  var _updateAll = function _updateAll2(force) {
    if (!_refreshingAll || force === 2) {
      ScrollTrigger3.isUpdating = true;
      _primary && _primary.update(0);
      var l = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll);
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch3("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time;
      }
      if (_direction < 0) {
        _i = l;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger3.isUpdating = false;
    }
    _rafID = 0;
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
      while (i--) {
        p = _propNamesToCopy[i];
        spacerStyle[p] = cs[p];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  };
  var _capsExp2 = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style = state.t.style, l = state.length, i = 0, p, value;
      (state.t._gsap || gsap4.core.getCache(state.t)).uncache = 1;
      for (; i < l; i += 2) {
        value = state[i + 1];
        p = state[i];
        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp2, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l = _stateProps.length, style = element.style, state = [], i = 0;
    for (; i < l; i++) {
      state.push(_stateProps[i], style[_stateProps[i]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
    for (; i < l; i += 2) {
      p = state[i];
      result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction5(value) && (value = value(self));
    if (_isString5(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value);
    if (!_isNumber3(value)) {
      _isFunction5(trigger) && (trigger = trigger(self));
      var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
      element = _getTarget(trigger, self) || _body3;
      bounds = _getBounds(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else {
      containerAnimation && (value = gsap4.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
      self[clampZeroProp] = value || -1e-3;
      value < 0 && (value = 0);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body3[p1], _docEl3[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  };
  var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style, p, cs;
      if (parent === _body3) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle(element);
        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap4.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  };
  var _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
      var current = Math.round(getValueFunc());
      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        value = current;
        onInterrupt && onInterrupt();
      }
      last2 = last1;
      last1 = value;
      return value;
    };
  };
  var _shiftMarker = function _shiftMarker2(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap4.set(marker, vars);
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
      initialValue = initialValue || getScroll();
      var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
        tween.kill();
        getTween2.tween = 0;
      });
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      vars[prop] = scrollTo;
      vars.modifiers = modifiers;
      modifiers[prop] = function() {
        return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
      };
      vars.onUpdate = function() {
        _scrollers.cache++;
        _updateAll();
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap4.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener3(scroller, "wheel", getScroll.wheelHandler);
    ScrollTrigger3.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };
  var ScrollTrigger3 = /* @__PURE__ */ function() {
    function ScrollTrigger4(vars, animation) {
      _coreInitted4 || ScrollTrigger4.register(gsap4) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      _context3(this);
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger4.prototype;
    _proto.init = function init6(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough3;
        return;
      }
      vars = _setDefaults3(_isString5(vars) || _isNumber3(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults2);
      var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win4), scrollerCache = gsap4.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
      self._startClamp = self._endClamp = false;
      self._dir = direction;
      anticipatePin *= 45;
      self.scroller = scroller;
      self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self.vars = vars;
      animation = animation || vars.animation;
      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self);
      }
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      self.scrubDuration = function(value) {
        scrubSmooth = _isNumber3(value) && value;
        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap4.to(animation, {
            ease: "expo",
            totalProgress: "+=0",
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self);
            }
          });
        }
      };
      if (animation) {
        animation.vars.lazy = false;
        animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self.animation = animation.pause();
        animation.scrollTrigger = self;
        self.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      if (snap3) {
        if (!_isObject3(snap3) || snap3.push) {
          snap3 = {
            snapTo: snap3
          };
        }
        "scrollBehavior" in _body3.style && gsap4.set(isViewport ? [_body3, _docEl3] : scroller, {
          scrollBehavior: "auto"
        });
        _scrollers.forEach(function(o) {
          return _isFunction5(o) && o.target === (isViewport ? _doc4.scrollingElement || _docEl3 : scroller) && (o.smooth = false);
        });
        snapFunc = _isFunction5(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
          return _snapDirectional(snap3.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
        } : gsap4.utils.snap(snap3.snapTo);
        snapDurClamp = snap3.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject3(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap4.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
          var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
          if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap4.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue = _clamp4(0, 1, snapFunc(naturalEnd, self)), endScroll = Math.round(start + endValue * change), _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                return;
              }
              if (snap3.inertia === false) {
                change1 = endValue - progress;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap3.ease || "power3",
                data: _abs(endScroll - scroll),
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                },
                onComplete: function onComplete() {
                  self.update();
                  lastSnap = scrollFunc();
                  snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self.progress;
                  onSnapComplete && onSnapComplete(self);
                  _onComplete && _onComplete(self);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self, tweenTo.tween);
            }
          } else if (self.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self);
      trigger = self.trigger = _getTarget(trigger || pin !== true && pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString5(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
        self.pin = pin;
        pinCache = gsap4.core.getCache(pin);
        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }
          pinCache.spacer = spacer = pinSpacer || _doc4.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        vars.force3D !== false && gsap4.set(pin, {
          force3D: true
        });
        self.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap4.getProperty(pin);
        pinSetter = gsap4.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject3(markers) ? _setDefaults3(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap4.quickSetter([markerStart, markerEnd], direction.a, _px));
        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body3 : scroller);
          gsap4.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap4.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap4.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function() {
          self.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
        });
      }
      self.previous = function() {
        return _triggers[_triggers.indexOf(self) - 1];
      };
      self.next = function() {
        return _triggers[_triggers.indexOf(self) + 1];
      };
      self.revert = function(revert, temp) {
        if (!temp) {
          return self.kill(true);
        }
        var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
        if (r !== self.isReverted) {
          if (r) {
            prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
            prevProgress = self.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.style.display = r ? "none" : "block";
          });
          if (r) {
            _refreshing = self;
            self.update(r);
          }
          if (pin && (!pinReparent || !self.isActive)) {
            if (r) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
            }
          }
          r || self.update(r);
          _refreshing = prevRefreshing;
          self.isReverted = r;
        }
      };
      self.refresh = function(soft, force, position, pinOffset) {
        if ((_refreshing || !self.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener3(ScrollTrigger4, "scrollEnd", _softRefresh);
          return;
        }
        !_refreshingAll && onRefreshInit && onRefreshInit(self);
        _refreshing = self;
        if (tweenTo.tween && !position) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }
        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.revert({
          kill: false
        }).invalidate();
        self.isReverted || self.revert(true, true);
        self._subPinOffset = false;
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject3(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject3(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        if (markers && _isObject3(position)) {
          markerStartOffset = gsap4.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap4.getProperty(markerEndTrigger, direction.p);
        }
        while (i--) {
          curTrigger = _triggers[i];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i]) {
            triggerIndex--;
            i--;
          }
        }
        _isFunction5(parsedStart) && (parsedStart = parsedStart(self));
        parsedStart = _parseClamp(parsedStart, "start", self);
        start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
        _isFunction5(parsedEnd) && (parsedEnd = parsedEnd(self));
        if (_isString5(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString5(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString5(parsedStart) ? parsedStart : (containerAnimation ? gsap4.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
            parsedEndTrigger = trigger;
          }
        }
        parsedEnd = _parseClamp(parsedEnd, "end", self);
        end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -1e-3;
        offset2 = 0;
        i = triggerIndex;
        while (i--) {
          curTrigger = _triggers[i];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs2 = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
              offset2 += cs2 * (1 - curTrigger.progress);
            }
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self._startClamp && (self._startClamp += offset2);
        if (self._endClamp && !_refreshingAll) {
          self._endClamp = end || -1e-3;
          end = Math.min(end, _maxScroll(scroller, direction));
        }
        change = end - start || (start -= 0.01) && 1e-3;
        if (isFirstRefresh) {
          prevProgress = gsap4.utils.clamp(0, 1, gsap4.utils.normalize(start, end, prevScroll));
        }
        self._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap4.set([markerStart, markerEnd], cs2);
        }
        if (pin) {
          cs2 = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          if (!max && end > 1) {
            forcedOverflow = (isViewport ? _doc4.scrollingElement || _docEl3 : scroller).style;
            forcedOverflow = {
              style: forcedOverflow,
              value: forcedOverflow["overflow" + direction.a.toUpperCase()]
            };
            if (isViewport && _getComputedStyle(_body3)["overflow" + direction.a.toUpperCase()] !== "scroll") {
              forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
            }
          }
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            i && spacerState.push(direction.d, i + _px);
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t) {
                if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                  t._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites2(1);
            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            pinMoves = Math.abs(change - pinChange) > 1;
            useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());
            _suppressOverwrites2(0);
          } else {
            pinChange = change;
          }
          forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body3) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t) {
          return t.revert(false, true);
        });
        self.start = start;
        self.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self.scroll.rec = 0;
        }
        self.revert(false, true);
        lastRefresh = _getTime2();
        if (snapDelayedCall) {
          lastSnap = -1;
          snapDelayedCall.restart(true);
        }
        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
        if (isFirstRefresh || prevProgress !== self.progress || containerAnimation) {
          animation && !isToggle && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap4.utils.normalize(start, end, 0) : prevProgress, true);
          self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
        scrubTween && scrubTween.invalidate();
        if (!isNaN(markerStartOffset)) {
          markerStartOffset -= gsap4.getProperty(markerStartTrigger, direction.p);
          markerEndOffset -= gsap4.getProperty(markerEndTrigger, direction.p);
          _shiftMarker(markerStartTrigger, direction, markerStartOffset);
          _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
          _shiftMarker(markerEndTrigger, direction, markerEndOffset);
          _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
        }
        isFirstRefresh && !_refreshingAll && self.update();
        if (onRefresh && !_refreshingAll && !executingOnRefresh) {
          executingOnRefresh = true;
          onRefresh(self);
          executingOnRefresh = false;
        }
      };
      self.getVelocity = function() {
        return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
      };
      self.endAnimation = function() {
        _endAnimation(self.callbackAnimation);
        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
        }
      };
      self.labelToScroll = function(label) {
        return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };
      self.getTrailing = function(name) {
        var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
        return (_isString5(name) ? a.filter(function(t) {
          return t.vars.preventOverlaps === name;
        }) : a).filter(function(t) {
          return self.direction > 0 ? t.end <= start : t.start >= end;
        });
      };
      self.update = function(reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }
        var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;
          if (snap3) {
            snap22 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        anticipatePin && !clipped && pin && !_refreshing && !_startup2 && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin && (clipped = 1e-4);
        if (clipped !== prevProgress2 && self.enabled) {
          isActive = self.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self.direction = clipped > prevProgress2 ? 1 : -1;
          self.progress = clipped;
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction5(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
            return t.endAnimation();
          }));
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup2) {
              scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(_round3(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds(pin, true), _offset = scroll - start;
                  _reparent(pin, _body3, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || isAtMax ? pinActiveState : pinState);
              pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray2(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self);
          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback3(self, onToggle);
              callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
              once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
              }
            }
            if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber3(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self.callbackAnimation);
              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self);
          }
        }
        if (markerEndSetter) {
          var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n);
        }
        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };
      self.enable = function(reset, refresh) {
        if (!self.enabled) {
          self.enabled = true;
          _addListener3(scroller, "resize", _onResize);
          isViewport || _addListener3(scroller, "scroll", _onScroll3);
          onRefreshInit && _addListener3(ScrollTrigger4, "refreshInit", onRefreshInit);
          if (reset !== false) {
            self.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }
          refresh !== false && self.refresh();
        }
      };
      self.getTween = function(snap4) {
        return snap4 && tweenTo ? tweenTo.tween : scrubTween;
      };
      self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
        if (containerAnimation) {
          var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
          newStart = st.start + _change * newStart / duration;
          newEnd = st.start + _change * newEnd / duration;
        }
        self.refresh(false, false, {
          start: _keepClamp(newStart, keepClamp && !!self._startClamp),
          end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
        }, pinOffset);
        self.update();
      };
      self.adjustPinSpacing = function(amount) {
        if (spacerState && amount) {
          var i = spacerState.indexOf(direction.d) + 1;
          spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
          _setState(spacerState);
        }
      };
      self.disable = function(reset, allowAnimation) {
        if (self.enabled) {
          reset !== false && self.revert(true, true);
          self.enabled = self.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener3(ScrollTrigger4, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i = _triggers.length;
            while (i--) {
              if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                return;
              }
            }
            _removeListener3(scroller, "resize", _onResize);
            isViewport || _removeListener3(scroller, "scroll", _onScroll3);
          }
        }
      };
      self.kill = function(revert, allowAnimation) {
        self.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];
        var i = _triggers.indexOf(self);
        i >= 0 && _triggers.splice(i, 1);
        i === _i && _direction > 0 && _i--;
        i = 0;
        _triggers.forEach(function(t) {
          return t.scroller === self.scroller && (i = 1);
        });
        i || _refreshingAll || (self.scroll.rec = 0);
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.parentNode && m.parentNode.removeChild(m);
        });
        _primary === self && (_primary = 0);
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i = 0;
          _triggers.forEach(function(t) {
            return t.pin === pin && i++;
          });
          i || (pinCache.spacer = 0);
        }
        vars.onKill && vars.onKill(self);
      };
      _triggers.push(self);
      self.enable(false, false);
      customRevertReturn && customRevertReturn(self);
      if (animation && animation.add && !change) {
        var updateFunc = self.update;
        self.update = function() {
          self.update = updateFunc;
          start || end || self.refresh();
        };
        gsap4.delayedCall(0.01, self.update);
        change = 0.01;
        start = end = 0;
      } else {
        self.refresh();
      }
      pin && _queueRefreshAll();
    };
    ScrollTrigger4.register = function register2(core) {
      if (!_coreInitted4) {
        gsap4 = core || _getGSAP5();
        _windowExists7() && window.document && ScrollTrigger4.enable();
        _coreInitted4 = _enabled;
      }
      return _coreInitted4;
    };
    ScrollTrigger4.defaults = function defaults3(config3) {
      if (config3) {
        for (var p in config3) {
          _defaults2[p] = config3[p];
        }
      }
      return _defaults2;
    };
    ScrollTrigger4.disable = function disable(reset, kill2) {
      _enabled = 0;
      _triggers.forEach(function(trigger) {
        return trigger[kill2 ? "kill" : "disable"](reset);
      });
      _removeListener3(_win4, "wheel", _onScroll3);
      _removeListener3(_doc4, "scroll", _onScroll3);
      clearInterval(_syncInterval);
      _removeListener3(_doc4, "touchcancel", _passThrough3);
      _removeListener3(_body3, "touchstart", _passThrough3);
      _multiListener(_removeListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
      _multiListener(_removeListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
      _resizeDelay.kill();
      _iterateAutoRefresh(_removeListener3);
      for (var i = 0; i < _scrollers.length; i += 3) {
        _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
        _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
      }
    };
    ScrollTrigger4.enable = function enable() {
      _win4 = window;
      _doc4 = document;
      _docEl3 = _doc4.documentElement;
      _body3 = _doc4.body;
      if (gsap4) {
        _toArray2 = gsap4.utils.toArray;
        _clamp4 = gsap4.utils.clamp;
        _context3 = gsap4.core.context || _passThrough3;
        _suppressOverwrites2 = gsap4.core.suppressOverwrites || _passThrough3;
        _scrollRestoration = _win4.history.scrollRestoration || "auto";
        _lastScroll = _win4.pageYOffset;
        gsap4.core.globals("ScrollTrigger", ScrollTrigger4);
        if (_body3) {
          _enabled = 1;
          _div100vh = document.createElement("div");
          _div100vh.style.height = "100vh";
          _div100vh.style.position = "absolute";
          _refresh100vh();
          _rafBugFix();
          Observer.register(gsap4);
          ScrollTrigger4.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
          _addListener3(_win4, "wheel", _onScroll3);
          _root2 = [_win4, _doc4, _docEl3, _body3];
          if (gsap4.matchMedia) {
            ScrollTrigger4.matchMedia = function(vars) {
              var mm = gsap4.matchMedia(), p;
              for (p in vars) {
                mm.add(p, vars[p]);
              }
              return mm;
            };
            gsap4.addEventListener("matchMediaInit", function() {
              return _revertAll();
            });
            gsap4.addEventListener("matchMediaRevert", function() {
              return _revertRecorded();
            });
            gsap4.addEventListener("matchMedia", function() {
              _refreshAll(0, 1);
              _dispatch3("matchMedia");
            });
            gsap4.matchMedia("(orientation: portrait)", function() {
              _setBaseDimensions();
              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }
          _setBaseDimensions();
          _addListener3(_doc4, "scroll", _onScroll3);
          var bodyStyle = _body3.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap4.core.Animation.prototype, bounds, i;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds(_body3);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 250);
          gsap4.delayedCall(0.5, function() {
            return _startup2 = 0;
          });
          _addListener3(_doc4, "touchcancel", _passThrough3);
          _addListener3(_body3, "touchstart", _passThrough3);
          _multiListener(_addListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_addListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
          _transformProp2 = gsap4.utils.checkPrefix("transform");
          _stateProps.push(_transformProp2);
          _coreInitted4 = _getTime2();
          _resizeDelay = gsap4.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc4, "visibilitychange", function() {
            var w = _win4.innerWidth, h = _win4.innerHeight;
            if (_doc4.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc4, "DOMContentLoaded", _refreshAll, _win4, "load", _refreshAll, _win4, "resize", _onResize];
          _iterateAutoRefresh(_addListener3);
          _triggers.forEach(function(trigger) {
            return trigger.enable(0, 1);
          });
          for (i = 0; i < _scrollers.length; i += 3) {
            _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
            _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
          }
        }
      }
    };
    ScrollTrigger4.config = function config3(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger4.isTouch === 1 && vars.ignoreMobileResize);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger4.scrollerProxy = function scrollerProxy(target, vars) {
      var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport3(t);
      if (~i) {
        _scrollers.splice(i, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win4, vars, _body3, vars, _docEl3, vars) : _proxies.unshift(t, vars);
      }
    };
    ScrollTrigger4.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function(t) {
        return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
      });
    };
    ScrollTrigger4.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString5(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win4.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win4.innerHeight;
    };
    ScrollTrigger4.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString5(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win4.innerWidth : (bounds.top + offset) / _win4.innerHeight;
    };
    ScrollTrigger4.killAll = function killAll(allowListeners) {
      _triggers.slice(0).forEach(function(t) {
        return t.vars.id !== "ScrollSmoother" && t.kill();
      });
      if (allowListeners !== true) {
        var listeners = _listeners2.killAll || [];
        _listeners2 = {};
        listeners.forEach(function(f) {
          return f();
        });
      }
    };
    return ScrollTrigger4;
  }();
  ScrollTrigger3.version = "3.12.2";
  ScrollTrigger3.saveStyles = function(targets) {
    return targets ? _toArray2(targets).forEach(function(target) {
      if (target && target.style) {
        var i = _savedStyles.indexOf(target);
        i >= 0 && _savedStyles.splice(i, 5);
        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap4.core.getCache(target), _context3());
      }
    }) : _savedStyles;
  };
  ScrollTrigger3.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger3.create = function(vars, animation) {
    return new ScrollTrigger3(vars, animation);
  };
  ScrollTrigger3.refresh = function(safe) {
    return safe ? _onResize() : (_coreInitted4 || ScrollTrigger3.register()) && _refreshAll(true);
  };
  ScrollTrigger3.update = function(force) {
    return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
  };
  ScrollTrigger3.clearScrollMemory = _clearScrollMemory;
  ScrollTrigger3.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger3.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger3.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger3.getAll = function() {
    return _triggers.filter(function(t) {
      return t.vars.id !== "ScrollSmoother";
    });
  };
  ScrollTrigger3.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger3.snapDirectional = _snapDirectional;
  ScrollTrigger3.addEventListener = function(type, callback) {
    var a = _listeners2[type] || (_listeners2[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };
  ScrollTrigger3.removeEventListener = function(type, callback) {
    var a = _listeners2[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  };
  ScrollTrigger3.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap4.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self) {
        elements.length || delay.restart(true);
        elements.push(self.trigger);
        triggers.push(self);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p;
    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction5(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }
    if (_isFunction5(batchMax)) {
      batchMax = batchMax();
      _addListener3(ScrollTrigger3, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray2(targets).forEach(function(target) {
      var config3 = {};
      for (p in varsCopy) {
        config3[p] = varsCopy[p];
      }
      config3.trigger = target;
      result.push(ScrollTrigger3.create(config3));
    });
    return result;
  };
  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  };
  var _allowNativePanning = function _allowNativePanning2(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }
    target === _docEl3 && _allowNativePanning2(_body3, direction);
  };
  var _overflow = {
    auto: 1,
    scroll: 1
  };
  var _nestedScroll = function _nestedScroll2(_ref5) {
    var event2 = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event2.changedTouches ? event2.changedTouches[0] : event2).target, cache = node._gsap || gsap4.core.getCache(node), time = _getTime2(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
      while (node && node !== _body3 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
      event2.stopPropagation();
      event2._gsapAllow = true;
    }
  };
  var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
    return Observer.create({
      target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener3(_doc4, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener3(_doc4, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  };
  var _inputExp = /(input|label|select|textarea)/i;
  var _inputIsFocused;
  var _captureInputs = function _captureInputs2(e) {
    var isInput = _inputExp.test(e.target.tagName);
    if (isInput || _inputIsFocused) {
      e._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  };
  var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
    _isObject3(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = _getTarget(vars.target) || _docEl3, smoother = gsap4.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win4.visualViewport ? _win4.visualViewport.scale * _win4.visualViewport.width : _win4.outerWidth) / _win4.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction5(momentum) ? function() {
      return momentum(self);
    } : function() {
      return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
      return skipTouchMove = false;
    }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset2() {
      content._gsap.y = _round3(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
      content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag2() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);
        var offset = _round3(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
        if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;
          var y = _round3((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
          content._gsap.y = y + "px";
          scrollFuncY.cacheID = _scrollers.cache;
          _updateAll();
        }
        return true;
      }
      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize2 = function onResize3() {
      updateClamps();
      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };
    content && gsap4.set(content, {
      y: "+=0"
    });
    vars.ignoreCheck = function(e) {
      return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };
    vars.onPress = function() {
      skipTouchMove = false;
      var prevScale = scale;
      scale = _round3((_win4.visualViewport && _win4.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(), currentScroll, endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap4.to({}, {
            onUpdate: onResize2,
            duration: dur
          });
        }
      }
      onRelease && onRelease(self2);
    };
    vars.onWheel = function() {
      tween._ts && tween.pause();
      if (_getTime2() - wheelRefresh > 1e3) {
        lastRefreshID = 0;
        wheelRefresh = _getTime2();
      }
    };
    vars.onChange = function(self2, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self2.startY - self2.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger3.addEventListener("refresh", onResize2);
      _addListener3(_win4, "resize", onResize2);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function() {
      _allowNativePanning(target, true);
      _removeListener3(_win4, "resize", onResize2);
      ScrollTrigger3.removeEventListener("refresh", onResize2);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new Observer(vars);
    self.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap4.ticker.add(_passThrough3);
    onStopDelayedCall = self._dc;
    tween = gsap4.to(self, {
      ease: "power4",
      paused: true,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self;
  };
  ScrollTrigger3.sort = function(func) {
    return _triggers.sort(func || function(a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    });
  };
  ScrollTrigger3.observe = function(vars) {
    return new Observer(vars);
  };
  ScrollTrigger3.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") {
      return _normalizer2;
    }
    if (vars === true && _normalizer2) {
      return _normalizer2.enable();
    }
    if (vars === false) {
      return _normalizer2 && _normalizer2.kill();
    }
    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
    _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
    return normalizer;
  };
  ScrollTrigger3.core = {
    _getVelocityProp,
    _inputObserver,
    _scrollers,
    _proxies,
    bridge: {
      ss: function ss() {
        _lastScrollTime || _dispatch3("scrollStart");
        _lastScrollTime = _getTime2();
      },
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP5() && gsap4.registerPlugin(ScrollTrigger3);

  // app/javascript/custom/components/navigation-page.js
  var NavigationPage = class {
    navigationPage;
    timeline;
    checkClick = false;
    linkActiveClass = "navigation-page__link_active";
    init() {
      this.navigationPage = document.querySelector(".navigation-page");
      if (!this.navigationPage) {
        return;
      }
      gsapWithCSS.registerPlugin(ScrollTrigger3, ScrollToPlugin);
      this.resizeInit();
      this.animationInit();
      this.timelineInit();
      this.showInit();
      this.navigationInit();
      this.activeInit();
    }
    resizeInit() {
      this.navigationPage.style.minHeight = `${innerHeight}px`;
      window.addEventListener("resize", () => {
        this.navigationPage.style.minHeight = `${innerHeight}px`;
      });
    }
    animationInit() {
      gsapWithCSS.fromTo(
        this.navigationPage,
        { opacity: 0, x: -100 },
        {
          scrollTrigger: {
            trigger: this.navigationPage,
            start: `80% top`,
            scrub: true
          },
          x: 0,
          opacity: 1
        }
      );
    }
    timelineInit() {
      this.timeline = gsapWithCSS.timeline({ paused: true });
      this.timeline.to(".navigation-page__background", {
        duration: 0.2,
        x: 0
      });
      this.navigationPage.querySelectorAll(".navigation-page__text").forEach((el, i) => {
        this.timeline.to(
          el,
          {
            duration: 0.1,
            width: 160
          },
          i === 0 ? "-=.1s" : "-=.05s"
        );
      });
    }
    showInit() {
      const nav = this.navigationPage.querySelector(".navigation-page__nav");
      nav.addEventListener("mouseenter", () => {
        this.timeline.play();
      });
      nav.addEventListener("mouseleave", () => {
        this.timeline.reverse();
      });
    }
    navigationInit() {
      this.navigationPage.querySelectorAll(".navigation-page__link").forEach((el) => {
        el.onclick = (e) => {
          e.preventDefault();
          const hash = el.getAttribute("href");
          history.replaceState(void 0, void 0, hash);
          this.checkClick = true;
          this.navigationPage.querySelector(".navigation-page__link_active").classList.remove(this.linkActiveClass);
          el.classList.add(this.linkActiveClass);
          gsapWithCSS.to(window, {
            duration: 0.5,
            scrollTo: hash,
            onComplete: () => {
              this.checkClick = false;
            }
          });
        };
      });
    }
    activeInit() {
      document.querySelectorAll(".home-section").forEach((el) => {
        const id = el.getAttribute("id");
        const link = this.navigationPage.querySelector(
          `.navigation-page__link[href='#${id}']`
        );
        ScrollTrigger3.create({
          trigger: el,
          start: "top bottom-=20%",
          end: "bottom bottom-=20%",
          onEnter: () => {
            if (!this.checkClick) {
              link.classList.add(this.linkActiveClass);
            }
          },
          onEnterBack: () => {
            if (!this.checkClick) {
              link.classList.add(this.linkActiveClass);
            }
          },
          onLeave: () => {
            if (!this.checkClick) {
              link.classList.remove(this.linkActiveClass);
            }
          },
          onLeaveBack: () => {
            if (!this.checkClick) {
              link.classList.remove(this.linkActiveClass);
            }
          },
          markers: false
        });
      });
    }
  };
  var navigationPage = new NavigationPage();

  // app/javascript/custom/components/news.js
  var News = class {
    init() {
      const popup2 = document.querySelector("#popup-news");
      document.querySelectorAll(".news-list-item").forEach((el) => {
        el.addEventListener("click", () => {
          const newsContainer = popup2.querySelector(".news__container");
          newsContainer.innerHTML = "";
          this.addLoader(newsContainer);
          this.getContent(el, newsContainer);
        });
      });
    }
    addLoader(newsContainer) {
      const loader = document.createElement("div");
      loader.classList.add("news__loader");
      newsContainer.append(loader);
    }
    getContent(newsItem, newsContainer) {
      const url = newsItem.dataset.link;
      getHTML(url, (responseCode, responseData) => {
        if (responseCode === 200) {
          newsContainer.innerHTML = responseData;
        } else {
        }
      });
    }
  };
  var news = new News();

  // app/javascript/custom/components/form-email-us.js
  var FormEmailUs = class {
    loader;
    error;
    init() {
      const form = document.querySelector("#form-email-us");
      if (!form)
        return;
      form.onsubmit = (e) => {
        e.preventDefault();
        this.submit(form);
      };
      const popupOpen = document.querySelector(
        '.popup-open[href="#popup-email-us"]'
      );
      popupOpen.addEventListener("click", () => {
        const popup2 = document.querySelector(popupOpen.getAttribute("href"));
        popup2.querySelector(".form_hide")?.classList.remove("form_hide");
        popup2.querySelector(".form-success_show")?.classList.remove("form-success_show");
      });
    }
    submit(form) {
      const formData = new FormData(form);
      if (!this.isValid(form, formData)) {
        return;
      }
      form.querySelectorAll(".form__field").forEach((el) => {
        el.classList.remove("form__field_invalid");
      });
      form.querySelectorAll(".form__error").forEach((el) => {
        el.classList.remove("form__error_show");
      });
      const url = "//sibstar-forms-mailer.dsml.ru/api/v1/email_us?" + new URLSearchParams(formData).toString();
      form.classList.add("form_hide");
      this.addLoader(form);
      this.error?.remove();
      formPOST(url, (status, response) => {
        if (status === 200) {
          this.loader.remove();
          form.reset();
          form.closest(".popup").querySelector(".form-success")?.classList.add("form-success_show");
        } else {
          this.loader.remove();
          form.classList.remove("form_hide");
          this.error = document.createElement("div");
          this.error.classList.add("form__error_main");
          const locale = document.body.dataset.locale;
          switch (locale) {
            case "en":
              this.error.textContent = "Error: " + status;
              break;
            case "zh":
              this.error.textContent = "\u9519\u8BEF: " + status;
              break;
            default:
              this.error.textContent = "\u041E\u0448\u0438\u0431\u043A\u0430: " + status;
              break;
          }
          const submit = form.querySelector(".form__submit");
          form.insertBefore(this.error, submit);
        }
      });
    }
    isValid(form, formData) {
      let formInvalid = false;
      form.querySelectorAll(".form__input, .form__textarea").forEach((el) => {
        const name = el.getAttribute("name");
        const formField = el.closest(".form__field");
        if (!formData.get(name)) {
          formField.classList.add("form__field_invalid");
          formField.querySelector('.form__error[data-type="required"]').classList.add("form__error_show");
          formInvalid = true;
        }
        if (name === "email" && !validatorEmail(formData.get(name))) {
          formField.classList.add("form__field_invalid");
          formField.querySelector('.form__error[data-type="email"]').classList.add("form__error_show");
          formInvalid = true;
        }
      });
      return !formInvalid;
    }
    addLoader(form) {
      this.loader = document.createElement("div");
      this.loader.classList.add("form__loader");
      form.closest(".popup__container").append(this.loader);
    }
  };
  var formEmailUs = new FormEmailUs();

  // app/javascript/custom/components/form-order.js
  var import_choices = __toESM(require_choices());
  var FormOrder = class {
    form;
    steps;
    stepsLength;
    currentStep;
    nextButton;
    prevButton;
    submitButton;
    choices = {};
    destinationStations;
    loader;
    error;
    countInput;
    init() {
      this.form = document.querySelector("#form-order");
      if (!this.form) {
        return;
      }
      this.submitButton = this.form.querySelector(".form-step__submit");
      this.countInput = this.form.querySelector("#order__count");
      this.destinationStations = this.form.querySelectorAll(
        ".order__destination-station"
      );
      this.selectInit();
      this.stepsInit();
      this.nextInit();
      this.prevInit();
      this.destinationStationInit();
      this.stepsReset();
      this.countInit();
      const popupOpen = document.querySelector(
        '.popup-open[href="#popup-order"]'
      );
      popupOpen.addEventListener("click", () => {
        const popup2 = document.querySelector(popupOpen.getAttribute("href"));
        popup2.querySelector(".form_hide")?.classList.remove("form_hide");
        popup2.querySelector(".form-success_show")?.classList.remove("form-success_show");
        this.stepsReset();
      });
      this.form.onsubmit = (e) => {
        e.preventDefault();
        this.submit();
      };
    }
    selectInit() {
      this.form.querySelectorAll(".form__select").forEach((el) => {
        this.choices[el.getAttribute("id")] = new import_choices.default(el, {
          searchEnabled: false,
          shouldSort: false,
          position: "bottom"
        });
      });
    }
    stepsInit() {
      this.steps = this.form.querySelectorAll(".form-step__item");
      this.stepsLength = this.steps.length;
      this.steps.forEach(() => {
        const item = document.createElement("div");
        item.classList.add("form-step-navigation__item");
        this.form.querySelector(".form-step-navigation").append(item);
      });
    }
    stepsReset() {
      this.stepClearActive();
      this.prevButton.setAttribute("disabled", "disabled");
      this.nextButton.classList.remove("form-step__next_hide");
      this.submitButton.classList.remove("form-step__submit_show");
      this.currentStep = 0;
      this.choices["order__delivery-direction"].setChoiceByValue("China");
      this.destinationStations.item(0).classList.remove("form__field_hide");
      this.destinationStations.item(1).classList.add("form__field_hide");
      this.stepSet();
    }
    stepClearActive() {
      this.form.querySelector(".form-step-navigation__item_active")?.classList.remove("form-step-navigation__item_active");
      this.form.querySelector(".form-step__item_active")?.classList.remove("form-step__item_active");
    }
    stepSet() {
      this.form.querySelectorAll(".form-step-navigation__item").item(this.currentStep).classList.add("form-step-navigation__item_active");
      this.form.querySelectorAll(".form-step__item").item(this.currentStep)?.classList.add("form-step__item_active");
    }
    nextInit() {
      this.nextButton = this.form.querySelector(".form-step__next");
      this.nextButton.onclick = (e) => {
        e.preventDefault();
        this.form.querySelectorAll(".form__field").forEach((el) => {
          el.classList.remove("form__field_invalid");
        });
        this.form.querySelectorAll(".form__error").forEach((el) => {
          el.classList.remove("form__error_show");
        });
        if (this.currentStep === 1 && !this.isValidStep2()) {
          return;
        }
        if (this.currentStep !== this.stepsLength - 1) {
          this.currentStep++;
          this.stepClearActive();
          this.stepSet();
          this.prevButton.removeAttribute("disabled");
          if (this.currentStep === this.stepsLength - 1) {
            this.nextButton.classList.add("form-step__next_hide");
            this.submitButton.classList.add("form-step__submit_show");
          }
        }
      };
    }
    prevInit() {
      this.prevButton = this.form.querySelector(".form-step__prev");
      this.prevButton.onclick = (e) => {
        e.preventDefault();
        if (this.currentStep !== 0) {
          this.currentStep--;
          this.stepClearActive();
          this.stepSet();
          this.nextButton.classList.remove("form-step__next_hide");
          this.submitButton.classList.remove("form-step__submit_show");
          if (this.currentStep === 0) {
            this.prevButton.setAttribute("disabled", "disabled");
          }
        }
      };
    }
    destinationStationInit() {
      this.choices["order__delivery-direction"].passedElement.element.addEventListener("change", (change) => {
        if (change.detail.value === "China") {
          this.destinationStations.item(0).classList.remove("form__field_hide");
          this.destinationStations.item(1).classList.add("form__field_hide");
        }
        if (change.detail.value === "Turkey") {
          this.destinationStations.item(0).classList.add("form__field_hide");
          this.destinationStations.item(1).classList.remove("form__field_hide");
        }
      });
    }
    submit() {
      const formData = new FormData(this.form);
      if (!this.isValid(formData)) {
        return;
      }
      this.form.querySelectorAll(".form__field").forEach((el) => {
        el.classList.remove("form__field_invalid");
      });
      this.form.querySelectorAll(".form__error").forEach((el) => {
        el.classList.remove("form__error_show");
      });
      const url = "//sibstar-forms-mailer.dsml.ru/api/v1/order?" + new URLSearchParams(formData).toString();
      this.form.classList.add("form_hide");
      this.addLoader(this.form);
      this.error?.remove();
      formPOST(url, (status, response) => {
        if (status === 200) {
          this.loader.remove();
          this.form.reset();
          this.form.closest(".popup").querySelector(".form-success")?.classList.add("form-success_show");
        } else {
          this.loader.remove();
          this.form.classList.remove("form_hide");
          this.error = document.createElement("div");
          this.error.classList.add("form__error_main");
          const locale = document.body.dataset.locale;
          switch (locale) {
            case "en":
              this.error.textContent = "Error: " + status;
              break;
            case "zh":
              this.error.textContent = "\u9519\u8BEF: " + status;
              break;
            default:
              this.error.textContent = "\u041E\u0448\u0438\u0431\u043A\u0430: " + status;
              break;
          }
          const submit = this.form.querySelector(".form__submit");
          this.form.insertBefore(this.error, submit);
        }
      });
    }
    isValid(formData) {
      let formValid = true;
      if (!this.isValidStep2()) {
        formValid = false;
      }
      const requiredFields = ["email", "price", "phone"];
      this.form.querySelectorAll(".form__input, .form__textarea").forEach((el) => {
        const name = el.getAttribute("name");
        const formField = el.closest(".form__field");
        if (requiredFields.includes(name) && !formData.get(name)) {
          formField.classList.add("form__field_invalid");
          formField.querySelector('.form__error[data-type="required"]').classList.add("form__error_show");
          formValid = false;
        }
        if (name === "email" && !validatorEmail(formData.get(name))) {
          formField.classList.add("form__field_invalid");
          formField.querySelector('.form__error[data-type="email"]').classList.add("form__error_show");
          formValid = false;
        }
      });
      return formValid;
    }
    isValidStep2() {
      let formValid = true;
      const formData = new FormData(this.form);
      const requiredFields = ["count"];
      if (formData.get("formData") === "China") {
        requiredFields.push("destination_station_turkey");
      } else {
        requiredFields.push("destination_station_china");
      }
      this.form.querySelectorAll(".form__input, .form__textarea").forEach((el) => {
        const name = el.getAttribute("name");
        const formField = el.closest(".form__field");
        if (requiredFields.includes(name) && !formData.get(name)) {
          formField.classList.add("form__field_invalid");
          formField.querySelector('.form__error[data-type="required"]').classList.add("form__error_show");
          formValid = false;
        }
        if (name === "count" && this.countIsInvalid(parseInt(formData.get(name).toString()))) {
          formField.classList.add("form__field_invalid");
          formField.querySelector('.form__error[data-type="not-valid"]')?.classList.add("form__error_show");
          formValid = false;
        }
      });
      return formValid;
    }
    addLoader() {
      this.loader = document.createElement("div");
      this.loader.classList.add("form__loader");
      this.form.closest(".popup__container").append(this.loader);
    }
    step2Init() {
    }
    countInit() {
      let timeout;
      this.countInput.addEventListener("keyup", () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          const value = parseInt(this.countInput.value);
          this.countSetValidValue(value);
        }, 300);
      });
    }
    countIsInvalid(value) {
      return value % 70 !== 0;
    }
    countSetValidValue(value) {
      if (this.countIsInvalid(value)) {
        this.countInput.value = (Math.ceil(value / 70) * 70).toString(10);
      }
    }
  };
  var formOrder = new FormOrder();

  // app/javascript/custom/components/command.js
  var Command = class {
    init() {
    }
  };
  var command = new Command();

  // app/javascript/custom/components/cookies.js
  var Cookies = class {
    init() {
      if (getCookie("confirmCookie")) {
        return;
      }
      gsapWithCSS.to(".cookies__container", {
        duration: 0.3,
        y: 0,
        opacity: 1,
        delay: 1
      });
      const tl = gsapWithCSS.timeline({ paused: true });
      tl.to(".cookies__container", {
        duration: 0.3,
        y: "100%",
        opacity: 0
      });
      tl.set(".cookies", { display: "none" });
      document.querySelector(".cookies__button").onclick = () => {
        tl.play();
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 7);
        const expires = currentDate.toUTCString();
        document.cookie = "confirmCookie=true; expires=" + expires + "; path=/";
      };
    }
  };
  var cookies = new Cookies();

  // app/javascript/custom/pages/home/home-hero-counter.js
  var HomeHeroCounter = class {
    locale;
    init() {
      const counters = document.querySelectorAll(".home-hero-counter__value");
      if (!counters.length) {
        return;
      }
      this.locale = document.querySelector("body").dataset.locale;
      counters.forEach((el) => {
        this.animate(el);
      });
    }
    animate(counter) {
      const value = +counter.dataset.counter;
      const data = +counter.innerText.replace(/\D/g, "");
      const speed = +counter.dataset.speed;
      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time).toLocaleString(this.locale);
        setTimeout(() => {
          this.animate(counter);
        }, 1);
      } else {
        counter.innerText = value.toLocaleString(this.locale);
      }
    }
  };
  var homeHeroCounter = new HomeHeroCounter();

  // app/javascript/custom/pages/home/home-animations.js
  var HomeAnimations = class {
    headScrollTrigger;
    init() {
      gsapWithCSS.registerPlugin(ScrollTrigger3);
      this.heroInit();
      this.aboutInit();
    }
    heroInit() {
      const homeHero = document.querySelector(".home-hero");
      if (!homeHero) {
        return;
      }
      this.heroSetHeight(homeHero);
      this.headScrollTriggerInit(homeHero);
      window.addEventListener("resize", () => {
        this.headScrollTrigger.kill();
        this.heroSetHeight(homeHero);
        this.headScrollTriggerInit(homeHero);
      });
    }
    headScrollTriggerInit(homeHero) {
      this.headScrollTrigger = ScrollTrigger3.create({
        trigger: homeHero,
        start: `top top`,
        pinSpacing: false,
        pin: true
      });
    }
    aboutInit() {
      const homeAbout = document.querySelector(".home-about");
      if (!homeAbout) {
        return;
      }
      const homeAboutHeadTitle = document.querySelector(
        ".home-about-head__title"
      );
      const containerWidth = homeAbout.querySelector(".container").offsetWidth;
      gsapWithCSS.fromTo(
        homeAboutHeadTitle,
        {
          x: (innerWidth - containerWidth) / 2 + containerWidth
        },
        {
          scrollTrigger: {
            trigger: homeAboutHeadTitle,
            start: "-150px bottom-=250px",
            end: "bottom 70%",
            scrub: true,
            markers: false
          },
          x: 0
        }
      );
      const homeAboutHeadH2 = document.querySelector(".home-about-head__h2");
      gsapWithCSS.fromTo(
        homeAboutHeadH2,
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: homeAboutHeadH2,
            start: "-150px bottom-=250px",
            end: "top 80%",
            scrub: true
          },
          opacity: 1
        }
      );
    }
    heroSetHeight(homeHero) {
      if (isMobileDevice()) {
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
          homeHero.style.height = `${window.screen.availWidth}px`;
        } else {
          homeHero.style.height = `${window.screen.availHeight}px`;
        }
      } else {
        homeHero.style.height = `${innerHeight}px`;
      }
    }
  };
  var homeAnimations = new HomeAnimations();

  // node_modules/swiper/shared/ssr-window.esm.mjs
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach((key) => {
      if (typeof target[key] === "undefined")
        target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent2() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/swiper/shared/utils.mjs
  function classesToTokens(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return classes2.trim().split(" ").filter((c) => !!c.trim());
  }
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
      }
      try {
        delete object[key];
      } catch (e) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m41;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[12]);
      else
        curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m42;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[13]);
      else
        curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend2() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper,
      targetPosition,
      side
    } = _ref;
    const window2 = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = new Date().getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }
  function getSlideTransformEl(slideEl) {
    return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
  }
  function elementChildren(element, selector3) {
    if (selector3 === void 0) {
      selector3 = "";
    }
    return [...element.children].filter((el) => el.matches(selector3));
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
    }
  }
  function createElement(tag, classes2) {
    if (classes2 === void 0) {
      classes2 = [];
    }
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
    return el;
  }
  function elementPrevAll(el, selector3) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector3) {
        if (prev.matches(selector3))
          prevEls.push(prev);
      } else
        prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector3) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector3) {
        if (next.matches(selector3))
          nextEls.push(next);
      } else
        nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window2 = getWindow();
    return window2.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1)
          i += 1;
      }
      return i;
    }
    return void 0;
  }
  function elementParents(el, selector3) {
    const parents = [];
    let parent = el.parentElement;
    while (parent) {
      if (selector3) {
        if (parent.matches(selector3))
          parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
      if (e.target !== el)
        return;
      callback.call(el, e);
      el.removeEventListener("transitionend", fireCallBack);
    }
    if (callback) {
      el.addEventListener("transitionend", fireCallBack);
    }
  }
  function elementOuterSize(el, size, includeMargins) {
    const window2 = getWindow();
    if (includeMargins) {
      return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    }
    return el.offsetWidth;
  }

  // node_modules/swiper/shared/swiper-core.mjs
  var support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent
    } = _temp === void 0 ? {} : _temp;
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad)
        ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    const window2 = getWindow();
    let needPerspectiveFix = false;
    function isSafari() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
      const ua = String(window2.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    return {
      isSafari: needPerspectiveFix || isSafari(),
      needPerspectiveFix,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    let {
      swiper,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach((_ref2) => {
            let {
              contentBoxSize,
              contentRect,
              target
            } = _ref2;
            if (target && target !== swiper.el)
              return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("orientationchange");
    };
    on("init", () => {
      if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }
  function Observer2(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const observers = [];
    const window2 = getWindow();
    const attach = function(target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (swiper.__preventObserver__)
          return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: typeof options.childList === "undefined" ? true : options.childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init6 = () => {
      if (!swiper.params.observer)
        return;
      if (swiper.params.observeParents) {
        const containerParents = elementParents(swiper.hostEl);
        for (let i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      });
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on("init", init6);
    on("destroy", destroy);
  }
  var eventsEmitter = {
    on(events2, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed)
        return self;
      if (typeof handler !== "function")
        return self;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self.eventsListeners[event2])
          self.eventsListeners[event2] = [];
        self.eventsListeners[event2][method](handler);
      });
      return self;
    },
    once(events2, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed)
        return self;
      if (typeof handler !== "function")
        return self;
      function onceHandler() {
        self.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self, args);
      }
      onceHandler.__emitterProxy = handler;
      return self.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed)
        return self;
      if (typeof handler !== "function")
        return self;
      const method = priority ? "unshift" : "push";
      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }
      return self;
    },
    offAny(handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed)
        return self;
      if (!self.eventsAnyListeners)
        return self;
      const index = self.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }
      return self;
    },
    off(events2, handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed)
        return self;
      if (!self.eventsListeners)
        return self;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self.eventsListeners[event2] = [];
        } else if (self.eventsListeners[event2]) {
          self.eventsListeners[event2].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event2].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit() {
      const self = this;
      if (!self.eventsListeners || self.destroyed)
        return self;
      if (!self.eventsListeners)
        return self;
      let events2;
      let data;
      let context3;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context3 = self;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context3 = args[0].context || self;
      }
      data.unshift(context3);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context3, [event2, ...data]);
          });
        }
        if (self.eventsListeners && self.eventsListeners[event2]) {
          self.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context3, data);
          });
        }
      });
      return self;
    }
  };
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
    height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width))
      width = 0;
    if (Number.isNaN(height))
      height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      let slide2;
      if (slides[i])
        slide2 = slides[i];
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide2, slides);
      }
      if (slides[i] && elementStyle(slide2, "display") === "none")
        continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i].style[swiper.getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide2);
        const currentTransform = slide2.style.transform;
        const currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform) {
          slide2.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3)
          slidePosition = 0;
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths)
          slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i = 0; i < groups; i += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0)
      snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
      slides.filter((_, slideIndex) => {
        if (!params.cssMode || params.loop)
          return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach((slideEl) => {
        slideEl.style[key] = `${spaceBetween}px`;
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map((snap3) => {
        if (snap3 <= 0)
          return -offsetBefore;
        if (snap3 > maxSnap)
          return maxSnap + offsetAfter;
        return snap3;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      if (allSlidesSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach((snap3, snapIndex) => {
          snapGrid[snapIndex] = snap3 - allSlidesOffset;
        });
        slidesGrid.forEach((snap3, snapIndex) => {
          slidesGrid[snapIndex] = snap3 + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow)
        swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded)
          swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual)
            break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0)
      swiper.wrapperEl.style.height = `${newHeight}px`;
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }
  function updateSlidesProgress(translate2) {
    if (translate2 === void 0) {
      translate2 = this && this.translate || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0)
      return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl)
      offsetCenter = translate2;
    slides.forEach((slideEl) => {
      slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
    });
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slide2 = slides[i];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide2);
        swiper.visibleSlidesIndexes.push(i);
        slides[i].classList.add(params.slideVisibleClass);
      }
      if (isFullyVisible) {
        slides[i].classList.add(params.slideFullyVisibleClass);
      }
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate2) {
    const swiper = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded)
        progress = 0;
      if (isEndRounded)
        progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper.getSlideIndexByData(0);
      const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate2);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1)
        progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
      swiper.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector3) => {
      return elementChildren(slidesEl, `.${params.slideClass}${selector3}, swiper-slide${selector3}`)[0];
    };
    slides.forEach((slideEl) => {
      slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
    });
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0)
          slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length)
          slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
      } else {
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.filter((slideEl) => slideEl.column === activeIndex)[0];
        nextSlide = slides.filter((slideEl) => slideEl.column === activeIndex + 1)[0];
        prevSlide = slides.filter((slideEl) => slideEl.column === activeIndex - 1)[0];
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      activeSlide.classList.add(params.slideActiveClass);
      if (gridEnabled) {
        if (nextSlide) {
          nextSlide.classList.add(params.slideNextClass);
        }
        if (prevSlide) {
          prevSlide.classList.add(params.slidePrevClass);
        }
      } else {
        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        if (nextSlide) {
          nextSlide.classList.add(params.slideNextClass);
        }
        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
        if (prevSlide) {
          prevSlide.classList.add(params.slidePrevClass);
        }
      }
    }
    swiper.emitSlidesClasses();
  }
  var processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params)
      return;
    const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        } else {
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
              if (lazyEl)
                lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl)
        lazyEl.remove();
    }
  };
  var unlazy = (swiper, index) => {
    if (!swiper.slides[index])
      return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl)
      imageEl.removeAttribute("loading");
  };
  var preload = (swiper) => {
    if (!swiper || swiper.destroyed || !swiper.params)
      return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0)
      return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_, i) => {
        return activeColumn + slidesPerView + i;
      }));
      swiper.slides.forEach((slideEl, i) => {
        if (preloadColumns.includes(slideEl.column))
          unlazy(swiper, i);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
        const realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView)
          unlazy(swiper, realIndex);
      }
    } else {
      for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
        if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
          unlazy(swiper, i);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper) {
    const {
      slidesGrid,
      params
    } = swiper;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate2 >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined")
        activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex2 = aIndex - swiper.virtual.slidesBefore;
      if (realIndex2 < 0) {
        realIndex2 = swiper.virtual.slides.length + realIndex2;
      }
      if (realIndex2 >= swiper.virtual.slides.length) {
        realIndex2 -= swiper.virtual.slides.length;
      }
      return realIndex2;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper.slides.filter((slideEl) => slideEl.column === activeIndex)[0];
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit("realIndexChange");
      }
      swiper.emit("slideChange");
    }
  }
  function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
          slide2 = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide2) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper.clickedSlide = slide2;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
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
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl)
      currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate2 : translate2;
    } else {
      y = translate2;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x -= swiper.cssOverflowAdjustment();
      } else {
        y -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate2);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
    if (translate2 === void 0) {
      translate2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2)
      newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2)
      newTranslate = maxTranslate2;
    else
      newTranslate = translate2;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
            if (!swiper || swiper.destroyed)
              return;
            if (e.target !== this)
              return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper.emit("setTransition", duration, byController);
  }
  function transitionEmit(_ref) {
    let {
      swiper,
      runCallbacks,
      direction,
      step
    } = _ref;
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex)
        dir = "next";
      else if (activeIndex < previousIndex)
        dir = "prev";
      else
        dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit(`slideResetTransition${step}`);
        return;
      }
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode)
      return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start"
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode)
      return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End"
    });
  }
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0)
      slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
      return false;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    swiper.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex)
      direction = "next";
    else if (slideIndex < activeIndex)
      direction = "prev";
    else
      direction = "reset";
    if (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t = rtl ? translate2 : -translate2;
      if (speed === 0) {
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t,
          behavior: "smooth"
        });
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed)
            return;
          if (e.target !== this)
            return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper = this;
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
        const {
          centeredSlides
        } = swiper.params;
        let slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (needLoopFix) {
          const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
          swiper.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper.realIndex : void 0
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      enabled,
      params,
      animating
    } = swiper;
    if (!enabled)
      return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding)
        return false;
      swiper.loopFix({
        direction: "next"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper;
    if (!enabled)
      return swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding)
        return false;
      swiper.loopFix({
        direction: "prev"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize3(val) {
      if (val < 0)
        return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize3(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize3(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap3, snapIndex) => {
        if (normalizedTranslate >= snap3) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0)
        prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate2 >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
      if (swiper.animating)
        return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };
  function loopCreate(slideRealIndex) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
      return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i = 0; i < amountOfSlides; i += 1) {
        const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? void 0 : "next"
    });
  }
  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo: slideTo2 = true,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController,
      byMousewheel
    } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop)
      return;
    swiper.emit("beforeLoopFix");
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper;
    const {
      centeredSlides
    } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo2) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper.getSlideIndex(slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
            if (slides[i2].column === colIndexToPrepend)
              prependSlidesIndexes.push(i2);
          }
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      for (let i = 0; i < slidesAppended; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide2, slideIndex) => {
            if (slide2.column === index)
              appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper.slides.forEach((slide2, slideIndex) => {
        swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo2) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate2) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate: setTranslate2,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach((c) => {
          if (!c.destroyed && c.params.loop)
            c.loopFix({
              ...loopParams,
              slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
            });
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix({
          ...loopParams,
          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      }
    }
    swiper.emit("loopFix");
  }
  function loopDestroy() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
      return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl) => {
      const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
      return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };
  function closestElement(selector3, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow())
        return null;
      if (el.assignedSlot)
        el = el.assignedSlot;
      const found = el.closest(selector3);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event2, startX) {
    const window2 = getWindow();
    const {
      params
    } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event2) {
    const swiper = this;
    const document2 = getDocument();
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e.pointerId) {
        return;
      }
      data.pointerId = e.pointerId;
    } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
      data.touchId = e.targetTouches[0].identifier;
    }
    if (e.type === "touchstart") {
      preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && e.pointerType === "mouse")
      return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let targetEl = e.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!swiper.wrapperEl.contains(targetEl))
        return;
    }
    if ("which" in e && e.which === 3)
      return;
    if ("button" in e && e.button > 0)
      return;
    if (data.isTouched && data.isMoved)
      return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler))
        return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    if (!preventEdgeSwipe(swiper, e, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0)
      data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e);
  }
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && event2.pointerType === "mouse")
      return;
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    if (e.type === "pointermove") {
      if (data.touchId !== null)
        return;
      const id = e.pointerId;
      if (id !== data.pointerId)
        return;
    }
    let targetTouch;
    if (e.type === "touchmove") {
      targetTouch = [...e.changedTouches].filter((t) => t.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId)
        return;
    } else {
      targetTouch = e;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (document2.activeElement) {
      if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
      return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    let loopFixed;
    new Date().getTime();
    if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) {
        swiper.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode)
      return;
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null)
        return;
      if (e.pointerId !== data.pointerId)
        return;
      targetTouch = e;
    } else {
      targetTouch = [...e.changedTouches].filter((t) => t.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId)
        return;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
      const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && e.pointerType === "mouse")
      return;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed)
        swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment2] !== "undefined") {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment2] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
        else
          swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0)
      return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    const swiper = this;
    if (!swiper.enabled)
      return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks)
        e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled)
      return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0)
      swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }
  function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }
  function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded)
      return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = "auto";
    }
  }
  var events = (swiper, method) => {
    const document2 = getDocument();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
      passive: false
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
      passive: false
    });
    document2[domMethod]("touchmove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("pointermove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("touchend", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerup", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointercancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("touchcancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerout", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerleave", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("contextmenu", swiper.onTouchEnd, {
      passive: true
    });
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
    el[domMethod]("load", swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };
  var isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper;
    const breakpoints2 = params.breakpoints;
    if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
      return;
    const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint)
      return;
    const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined")
        return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend2(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints2 || base === "container" && !containerEl)
      return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const {
        point,
        value
      } = points[i];
      if (base === "window") {
        if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "free-mode": swiper.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    const swiper = this;
    const {
      el,
      classNames
    } = swiper;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses,
    removeClasses
  };
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };
  var defaults2 = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: false,
    userAgent: null,
    url: null,
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    autoHeight: false,
    setWrapperSize: false,
    virtualTranslate: false,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    watchOverflow: true,
    roundLengths: false,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    uniqueNavElements: true,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    grabCursor: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    rewind: false,
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: true,
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend2(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend2(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName])
        params[moduleParamName] = {
          enabled: false
        };
      extend2(allModulesParams, obj);
    };
  }
  var prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  var extendedDefaults = {};
  var Swiper = class {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params)
        params = {};
      params = extend2({}, params);
      if (el && !params.el)
        params.el = el;
      const document2 = getDocument();
      if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document2.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          params,
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });
      const swiperParams = extend2({}, defaults2, allModulesParams);
      swiper.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend2({}, swiper.params);
      swiper.passedParams = extend2({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: true,
        isEnd: false,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: swiper.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        allowClick: true,
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
    }
    recalcSlides() {
      const swiper = this;
      const {
        slidesEl,
        params
      } = swiper;
      swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
      const swiper = this;
      if (swiper.enabled)
        return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled)
        return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed)
        return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const updates = [];
      swiper.slides.forEach((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = "current";
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (typeof params.slidesPerView === "number")
        return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed)
        return;
      const {
        snapGrid,
        params
      } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        }
      });
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate2();
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
          const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
          translated = swiper.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
      swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate)
        swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr")
        return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "rtl";
      } else {
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(element) {
      const swiper = this;
      if (swiper.mounted)
        return true;
      let el = element || swiper.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") {
        swiper.isElement = true;
      }
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper.params.createElements) {
        wrapperEl = createElement("div", swiper.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        el,
        wrapperEl,
        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper.isElement ? el.parentNode.host : el,
        mounted: true,
        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized)
        return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false)
        return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.attachEvents();
      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
      if (swiper.isElement) {
        lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        } else {
          imageEl.addEventListener("load", (e) => {
            processLazyPreloader(swiper, e.target);
          });
        }
      });
      preload(swiper);
      swiper.initialized = true;
      preload(swiper);
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        el.removeAttribute("style");
        wrapperEl.removeAttribute("style");
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.el.swiper = null;
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults2;
    }
    static installModule(mod) {
      if (!Swiper.prototype.__modules__)
        Swiper.prototype.__modules__ = [];
      const modules = Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m) => Swiper.installModule(m));
        return Swiper;
      }
      Swiper.installModule(module);
      return Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer2]);

  // node_modules/swiper/shared/create-element-if-not-defined.mjs
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
          if (!element) {
            element = createElement("div", checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/swiper/shared/classes-to-selector.mjs
  function classesToSelector(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }

  // node_modules/swiper/modules/pagination.mjs
  function Pagination(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: `${pfx}-bullet`,
        bulletActiveClass: `${pfx}-bullet-active`,
        modifierClass: `${pfx}-`,
        currentClass: `${pfx}-current`,
        totalClass: `${pfx}-total`,
        hiddenClass: `${pfx}-hidden`,
        progressbarFillClass: `${pfx}-progressbar-fill`,
        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
        clickableClass: `${pfx}-clickable`,
        lockClass: `${pfx}-lock`,
        horizontalClass: `${pfx}-horizontal`,
        verticalClass: `${pfx}-vertical`,
        paginationDisabledClass: `${pfx}-disabled`
      }
    });
    swiper.pagination = {
      el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    const makeElementsArray = (el) => (Array.isArray(el) ? el : [el]).filter((e) => !!e);
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
      const {
        bulletActiveClass
      } = swiper.params.pagination;
      if (!bulletEl)
        return;
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}`);
        bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
        if (bulletEl) {
          bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
        }
      }
    }
    function onBulletClick(e) {
      const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
      if (!bulletEl) {
        return;
      }
      e.preventDefault();
      const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
      if (swiper.params.loop) {
        if (swiper.realIndex === index)
          return;
        swiper.slideToLoop(index);
      } else {
        swiper.slideTo(index);
      }
    }
    function update2() {
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled())
        return;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let current;
      let previousIndex;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        previousIndex = swiper.previousRealIndex || 0;
        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
        previousIndex = swiper.previousSnapIndex;
      } else {
        previousIndex = swiper.previousIndex || 0;
        current = swiper.activeIndex || 0;
      }
      if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
          el.forEach((subEl) => {
            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach((bulletEl) => {
          const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
          bulletEl.classList.remove(...classesToRemove);
        });
        if (el.length > 1) {
          bullets.forEach((bullet) => {
            const bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              bullet.classList.add(...params.bulletActiveClass.split(" "));
            } else if (swiper.isElement) {
              bullet.setAttribute("part", "bullet");
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, "next");
              }
            }
          });
        } else {
          const bullet = bullets[current];
          if (bullet) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          }
          if (swiper.isElement) {
            bullets.forEach((bulletEl, bulletIndex) => {
              bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
            });
          }
          if (params.dynamicBullets) {
            const firstDisplayedBullet = bullets[firstIndex];
            const lastDisplayedBullet = bullets[lastIndex];
            for (let i = firstIndex; i <= lastIndex; i += 1) {
              if (bullets[i]) {
                bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
              }
            }
            setSideBullets(firstDisplayedBullet, "prev");
            setSideBullets(lastDisplayedBullet, "next");
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.forEach((bullet) => {
            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
          });
        }
      }
      el.forEach((subEl, subElIndex) => {
        if (params.type === "fraction") {
          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
            fractionEl.textContent = params.formatFractionCurrent(current + 1);
          });
          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
            totalEl.textContent = params.formatFractionTotal(total);
          });
        }
        if (params.type === "progressbar") {
          let progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
          } else {
            progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
          }
          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;
          if (progressbarDirection === "horizontal") {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
          });
        }
        if (params.type === "custom" && params.renderCustom) {
          subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
          if (subElIndex === 0)
            emit("paginationRender", subEl);
        } else {
          if (subElIndex === 0)
            emit("paginationRender", subEl);
          emit("paginationUpdate", subEl);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      });
    }
    function render4() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled())
        return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
          }
        }
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
        }
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
      }
      swiper.pagination.bullets = [];
      el.forEach((subEl) => {
        if (params.type !== "custom") {
          subEl.innerHTML = paginationHTML || "";
        }
        if (params.type === "bullets") {
          swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
        }
      });
      if (params.type !== "custom") {
        emit("paginationRender", el[0]);
      }
    }
    function init6() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: "swiper-pagination"
      });
      const params = swiper.params.pagination;
      if (!params.el)
        return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = [...document.querySelectorAll(params.el)];
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0)
        return;
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
        el = [...swiper.el.querySelectorAll(params.el)];
        if (el.length > 1) {
          el = el.filter((subEl) => {
            if (elementParents(subEl, ".swiper")[0] !== swiper.el)
              return false;
            return true;
          })[0];
        }
      }
      if (Array.isArray(el) && el.length === 1)
        el = el[0];
      Object.assign(swiper.pagination, {
        el
      });
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (params.type === "bullets" && params.clickable) {
          subEl.classList.add(...(params.clickableClass || "").split(" "));
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === "bullets" && params.dynamicBullets) {
          subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === "progressbar" && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener("click", onBulletClick);
        }
        if (!swiper.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled())
        return;
      let el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.clickable) {
            subEl.classList.remove(...(params.clickableClass || "").split(" "));
            subEl.removeEventListener("click", onBulletClick);
          }
        });
      }
      if (swiper.pagination.bullets)
        swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
    }
    on("changeDirection", () => {
      if (!swiper.pagination || !swiper.pagination.el)
        return;
      const params = swiper.params.pagination;
      let {
        el
      } = swiper.pagination;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on("init", () => {
      if (swiper.params.pagination.enabled === false) {
        disable();
      } else {
        init6();
        render4();
        update2();
      }
    });
    on("activeIndexChange", () => {
      if (typeof swiper.snapIndex === "undefined") {
        update2();
      }
    });
    on("snapIndexChange", () => {
      update2();
    });
    on("snapGridLengthChange", () => {
      render4();
      update2();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
      }
    });
    on("lock unlock", () => {
      update2();
    });
    on("click", (_s, e) => {
      const targetEl = e.target;
      const el = makeElementsArray(swiper.pagination.el);
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
          return;
        const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
      }
      init6();
      render4();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
      }
      destroy();
    };
    Object.assign(swiper.pagination, {
      enable,
      disable,
      render: render4,
      update: update2,
      init: init6,
      destroy
    });
  }

  // node_modules/swiper/modules/autoplay.mjs
  function Autoplay(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit,
      params
    } = _ref;
    swiper.autoplay = {
      running: false,
      paused: false,
      timeLeft: 0
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3e3,
        waitForTransition: true,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayTimeLeft;
    let autoplayStartTime = new Date().getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    let pausedByPointerEnter;
    function onTransitionEnd(e) {
      if (!swiper || swiper.destroyed || !swiper.wrapperEl)
        return;
      if (e.target !== swiper.wrapperEl)
        return;
      swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
      if (pausedByPointerEnter) {
        return;
      }
      resume();
    }
    const calcTimeLeft = () => {
      if (swiper.destroyed || !swiper.autoplay.running)
        return;
      if (swiper.autoplay.paused) {
        wasPaused = true;
      } else if (wasPaused) {
        autoplayDelayCurrent = autoplayTimeLeft;
        wasPaused = false;
      }
      const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
      swiper.autoplay.timeLeft = timeLeft;
      emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
      raf = requestAnimationFrame(() => {
        calcTimeLeft();
      });
    };
    const getSlideDelay = () => {
      let activeSlideEl;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        activeSlideEl = swiper.slides.filter((slideEl) => slideEl.classList.contains("swiper-slide-active"))[0];
      } else {
        activeSlideEl = swiper.slides[swiper.activeIndex];
      }
      if (!activeSlideEl)
        return void 0;
      const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
      return currentSlideDelay;
    };
    const run = (delayForce) => {
      if (swiper.destroyed || !swiper.autoplay.running)
        return;
      cancelAnimationFrame(raf);
      calcTimeLeft();
      let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
      autoplayDelayTotal = swiper.params.autoplay.delay;
      autoplayDelayCurrent = swiper.params.autoplay.delay;
      const currentSlideDelay = getSlideDelay();
      if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
        delay = currentSlideDelay;
        autoplayDelayTotal = currentSlideDelay;
        autoplayDelayCurrent = currentSlideDelay;
      }
      autoplayTimeLeft = delay;
      const speed = swiper.params.speed;
      const proceed = () => {
        if (!swiper || swiper.destroyed)
          return;
        if (swiper.params.autoplay.reverseDirection) {
          if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
            swiper.slidePrev(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
            emit("autoplay");
          }
        } else {
          if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
            swiper.slideNext(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, speed, true, true);
            emit("autoplay");
          }
        }
        if (swiper.params.cssMode) {
          autoplayStartTime = new Date().getTime();
          requestAnimationFrame(() => {
            run();
          });
        }
      };
      if (delay > 0) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          proceed();
        }, delay);
      } else {
        requestAnimationFrame(() => {
          proceed();
        });
      }
      return delay;
    };
    const start = () => {
      autoplayStartTime = new Date().getTime();
      swiper.autoplay.running = true;
      run();
      emit("autoplayStart");
    };
    const stop = () => {
      swiper.autoplay.running = false;
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      emit("autoplayStop");
    };
    const pause = (internal, reset) => {
      if (swiper.destroyed || !swiper.autoplay.running)
        return;
      clearTimeout(timeout);
      if (!internal) {
        pausedByInteraction = true;
      }
      const proceed = () => {
        emit("autoplayPause");
        if (swiper.params.autoplay.waitForTransition) {
          swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
        } else {
          resume();
        }
      };
      swiper.autoplay.paused = true;
      if (reset) {
        if (slideChanged) {
          autoplayTimeLeft = swiper.params.autoplay.delay;
        }
        slideChanged = false;
        proceed();
        return;
      }
      const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
      autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop)
        return;
      if (autoplayTimeLeft < 0)
        autoplayTimeLeft = 0;
      proceed();
    };
    const resume = () => {
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running)
        return;
      autoplayStartTime = new Date().getTime();
      if (pausedByInteraction) {
        pausedByInteraction = false;
        run(autoplayTimeLeft);
      } else {
        run();
      }
      swiper.autoplay.paused = false;
      emit("autoplayResume");
    };
    const onVisibilityChange = () => {
      if (swiper.destroyed || !swiper.autoplay.running)
        return;
      const document2 = getDocument();
      if (document2.visibilityState === "hidden") {
        pausedByInteraction = true;
        pause(true);
      }
      if (document2.visibilityState === "visible") {
        resume();
      }
    };
    const onPointerEnter = (e) => {
      if (e.pointerType !== "mouse")
        return;
      pausedByInteraction = true;
      pausedByPointerEnter = true;
      if (swiper.animating || swiper.autoplay.paused)
        return;
      pause(true);
    };
    const onPointerLeave = (e) => {
      if (e.pointerType !== "mouse")
        return;
      pausedByPointerEnter = false;
      if (swiper.autoplay.paused) {
        resume();
      }
    };
    const attachMouseEvents = () => {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.el.addEventListener("pointerenter", onPointerEnter);
        swiper.el.addEventListener("pointerleave", onPointerLeave);
      }
    };
    const detachMouseEvents = () => {
      swiper.el.removeEventListener("pointerenter", onPointerEnter);
      swiper.el.removeEventListener("pointerleave", onPointerLeave);
    };
    const attachDocumentEvents = () => {
      const document2 = getDocument();
      document2.addEventListener("visibilitychange", onVisibilityChange);
    };
    const detachDocumentEvents = () => {
      const document2 = getDocument();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
    };
    on("init", () => {
      if (swiper.params.autoplay.enabled) {
        attachMouseEvents();
        attachDocumentEvents();
        start();
      }
    });
    on("destroy", () => {
      detachMouseEvents();
      detachDocumentEvents();
      if (swiper.autoplay.running) {
        stop();
      }
    });
    on("_freeModeStaticRelease", () => {
      if (pausedByTouch || pausedByInteraction) {
        resume();
      }
    });
    on("_freeModeNoMomentumRelease", () => {
      if (!swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on("beforeTransitionStart", (_s, speed, internal) => {
      if (swiper.destroyed || !swiper.autoplay.running)
        return;
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on("sliderFirstMove", () => {
      if (swiper.destroyed || !swiper.autoplay.running)
        return;
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = true;
      pausedByTouch = false;
      pausedByInteraction = false;
      touchStartTimeout = setTimeout(() => {
        pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
      }, 200);
    });
    on("touchEnd", () => {
      if (swiper.destroyed || !swiper.autoplay.running || !isTouched)
        return;
      clearTimeout(touchStartTimeout);
      clearTimeout(timeout);
      if (swiper.params.autoplay.disableOnInteraction) {
        pausedByTouch = false;
        isTouched = false;
        return;
      }
      if (pausedByTouch && swiper.params.cssMode)
        resume();
      pausedByTouch = false;
      isTouched = false;
    });
    on("slideChange", () => {
      if (swiper.destroyed || !swiper.autoplay.running)
        return;
      slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
      start,
      stop,
      pause,
      resume
    });
  }

  // node_modules/swiper/shared/effect-init.mjs
  function effectInit(params) {
    const {
      effect,
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams,
      perspective,
      recreateShadows,
      getEffectParams
    } = params;
    on("beforeInit", () => {
      if (swiper.params.effect !== effect)
        return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
      if (perspective && perspective()) {
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      }
      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on("setTranslate", () => {
      if (swiper.params.effect !== effect)
        return;
      setTranslate2();
    });
    on("setTransition", (_s, duration) => {
      if (swiper.params.effect !== effect)
        return;
      setTransition2(duration);
    });
    on("transitionEnd", () => {
      if (swiper.params.effect !== effect)
        return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows)
          return;
        swiper.slides.forEach((slideEl) => {
          slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
        });
        recreateShadows();
      }
    });
    let requireUpdateOnVirtual;
    on("virtualUpdate", () => {
      if (swiper.params.effect !== effect)
        return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate2();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }

  // node_modules/swiper/shared/effect-target.mjs
  function effectTarget(effectParams, slideEl) {
    const transformEl = getSlideTransformEl(slideEl);
    if (transformEl !== slideEl) {
      transformEl.style.backfaceVisibility = "hidden";
      transformEl.style["-webkit-backface-visibility"] = "hidden";
    }
    return transformEl;
  }

  // node_modules/swiper/shared/effect-virtual-transition-end.mjs
  function effectVirtualTransitionEnd(_ref) {
    let {
      swiper,
      duration,
      transformElements,
      allSlides
    } = _ref;
    const {
      activeIndex
    } = swiper;
    const getSlide = (el) => {
      if (!el.parentElement) {
        const slide2 = swiper.slides.filter((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
        return slide2;
      }
      return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      let transitionEndTarget;
      if (allSlides) {
        transitionEndTarget = transformElements;
      } else {
        transitionEndTarget = transformElements.filter((transformEl) => {
          const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
          return swiper.getSlideIndex(el) === activeIndex;
        });
      }
      transitionEndTarget.forEach((el) => {
        elementTransitionEnd(el, () => {
          if (eventTriggered)
            return;
          if (!swiper || swiper.destroyed)
            return;
          eventTriggered = true;
          swiper.animating = false;
          const evt = new window.CustomEvent("transitionend", {
            bubbles: true,
            cancelable: true
          });
          swiper.wrapperEl.dispatchEvent(evt);
        });
      });
    }
  }

  // node_modules/swiper/modules/effect-fade.mjs
  function EffectFade(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      fadeEffect: {
        crossFade: false
      }
    });
    const setTranslate2 = () => {
      const {
        slides
      } = swiper;
      const params = swiper.params.fadeEffect;
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = swiper.slides[i];
        const offset = slideEl.swiperSlideOffset;
        let tx = -offset;
        if (!swiper.params.virtualTranslate)
          tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.opacity = slideOpacity;
        targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: "fade",
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // app/javascript/custom/pages/home/home-about-slider.js
  var HomeAboutSlider = class {
    init() {
      const slider = document.querySelector(".home-about-slider");
      if (!slider) {
        return;
      }
      Swiper.use([Pagination, Autoplay, EffectFade]);
      gsapWithCSS.registerPlugin(ScrollTrigger3);
      const navigation2 = document.querySelector(".home-about-slider-navigation");
      const swiper = new Swiper(slider, {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3500
        },
        speed: 1e3,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: navigation2,
          clickable: true,
          bulletClass: "home-about-slider-navigation__bullet",
          bulletActiveClass: "home-about-slider-navigation__bullet_active"
        }
      });
      swiper.autoplay.pause();
      navigation2.querySelector(".home-about-slider-navigation__bullet_active").classList.remove("home-about-slider-navigation__bullet_active");
      ScrollTrigger3.create({
        once: true,
        trigger: slider,
        start: `top 60%`,
        onEnter: () => {
          swiper.setProgress(0);
          navigation2.querySelectorAll(".home-about-slider-navigation__bullet").item(0).classList.add("home-about-slider-navigation__bullet_active");
          swiper.autoplay.start();
        }
      });
    }
  };
  var homeAboutSlider = new HomeAboutSlider();

  // app/javascript/custom/pages/home/home-coal-sales.js
  var HomeCoalSales = class {
    accordionActiveClass = "home-coal-sales-accordion_active";
    init() {
      const accordions = document.querySelectorAll(".home-coal-sales-accordion");
      if (!accordions.length) {
        return;
      }
      accordions.forEach((el) => {
        el.querySelector(".home-coal-sales-accordion__head").onclick = () => {
          if (!el.classList.contains(this.accordionActiveClass)) {
            const active = document.querySelector(
              ".home-coal-sales-accordion_active"
            );
            if (active) {
              active.classList.remove(this.accordionActiveClass);
              slideUp(active.querySelector(".home-coal-sales-accordion__body"));
            }
          }
          el.classList.toggle(this.accordionActiveClass);
          slideToggle(el.querySelector(".home-coal-sales-accordion__body"));
        };
      });
    }
  };
  var homeCoalSales = new HomeCoalSales();

  // app/javascript/custom/pages/home/home-supply-basis.js
  var HomeSupplyBasis = class {
    buttons;
    pathDefault;
    allDots;
    videoClicked = false;
    init() {
      this.buttons = document.querySelector(".home-supply-basis__buttons");
      if (!this.buttons) {
        return;
      }
      this.allDots = document.querySelectorAll(
        ".home-supply-basis-map-item_small"
      );
      this.pathsInit();
      this.videoInit();
      this.navigationInit();
      this.popupsInit();
      this.videoPopupCloseInit();
    }
    pathsInit() {
      this.pathDefault = document.querySelector(
        ".home-supply-basis-map__path_default"
      );
      this.pathDefault?.classList.add("home-supply-basis-map__path_show");
      this.buttons.querySelectorAll(".button:not(.home-supply-basis__button-close)").forEach((button) => {
        const path = document.querySelector(
          `.home-supply-basis-map__path_${button.dataset.path}`
        );
        button.addEventListener("mouseenter", () => {
          this.pathDefault?.classList.remove(
            "home-supply-basis-map__path_show"
          );
          path?.classList.add("home-supply-basis-map__path_show");
          this.dotShow(button.dataset.cities.split(","));
        });
        button.addEventListener("mouseleave", () => {
          this.pathDefault?.classList.add("home-supply-basis-map__path_show");
          path?.classList.remove("home-supply-basis-map__path_show");
          this.dotsAllShow();
        });
      });
    }
    dotShow(cities) {
      this.allDots.forEach((el) => {
        if (!cities.includes(el.dataset.city)) {
          el.classList.add("home-supply-basis-map-item_hide");
        }
      });
    }
    dotsAllShow() {
      this.allDots.forEach((el) => {
        el.classList.remove("home-supply-basis-map-item_hide");
      });
    }
    videoInit() {
      document.querySelectorAll(".home-supply-basis-map-video__dot").forEach((el) => {
        const video = document.querySelector(
          `.home-supply-basis-map-video__path_${el.dataset.video}`
        );
        el.onclick = () => {
          this.videoShow(video, this.videoClicked);
          this.videoPopupShow(video);
          el.classList.add("home-supply-basis-map-video__dot_active");
          this.videoClicked = true;
        };
        el.addEventListener("mouseenter", () => {
          this.videoShow(video, this.videoClicked);
          el.classList.add("home-supply-basis-map-video__dot_active");
          this.videoClicked = false;
        });
        el.addEventListener("mouseleave", () => {
          if (!this.videoClicked) {
            this.videoHide();
          }
        });
      });
    }
    videoShow(video, popup2) {
      if (video.classList.contains("home-supply-basis-map-video__path_show")) {
        return;
      }
      this.videoHide(popup2);
      video.classList.add("home-supply-basis-map-video__path_show");
      video.play();
    }
    videoHide(popup2 = false) {
      const video = document.querySelector(
        ".home-supply-basis-map-video__path_show"
      );
      document.querySelector(".home-supply-basis-map-video__dot_active")?.classList.remove("home-supply-basis-map-video__dot_active");
      if (video) {
        video.classList.remove("home-supply-basis-map-video__path_show");
        video.pause();
        video.currentTime = 0;
      }
      if (popup2) {
        this.videoClicked = false;
        this.videoPopupHide(video);
      }
    }
    videoPopupShow(video) {
      document.querySelector(
        `.home-supply-basis-map-video-popup_${video?.dataset.popup}`
      )?.classList.add("home-supply-basis-map-video-popup_show");
    }
    videoPopupHide(video) {
      document.querySelector(
        `.home-supply-basis-map-video-popup_${video?.dataset.popup}`
      )?.classList.remove("home-supply-basis-map-video-popup_show");
    }
    navigationInit() {
      const buttons = this.buttons.querySelectorAll(
        ".home-supply-basis__buttons .button"
      );
      buttons.forEach((button) => {
        if (button.classList.contains("home-supply-basis__button-close")) {
          button.onclick = (e) => {
            e.preventDefault();
            this.videoHideAll();
            this.navigationButtonsRemoveActiveAll(buttons);
            this.videoHide(true);
            button.classList.remove("home-supply-basis__button-close_show");
          };
        } else {
          button.onclick = (e) => {
            e.preventDefault();
            if (button.classList.contains("button_active")) {
              return;
            }
            this.popupsHideAll();
            document.querySelector(".home-supply-basis__button-close").classList.add("home-supply-basis__button-close_show");
            this.navigationButtonsRemoveActiveAll(buttons);
            this.videoHideAll();
            this.videoHide(true);
            button.classList.add("button_active");
            document.querySelector(
              `.home-supply-basis-map-video_${button.dataset.path}`
            )?.classList.add("home-supply-basis-map-video_show");
          };
        }
      });
    }
    videoHideAll() {
      document.querySelectorAll(".home-supply-basis-map-video").forEach((el) => {
        el.classList.remove("home-supply-basis-map-video_show");
      });
    }
    navigationButtonsRemoveActiveAll(buttons) {
      buttons.forEach((el) => {
        el.classList.remove("button_active");
      });
    }
    popupsInit() {
      document.querySelectorAll(".home-supply-basis-map-item_small").forEach((el) => {
        el.onclick = () => {
          this.popupsHideAll();
          el.classList.add("home-supply-basis-map-item_active");
          document.querySelector(`.home-supply-basis-map-popup_${el.dataset.city}`).classList.add("home-supply-basis-map-popup_show");
        };
      });
      document.querySelectorAll(".home-supply-basis-map-popup__close").forEach((el) => {
        el.onclick = () => {
          this.popupsHideAll();
        };
      });
      document.querySelectorAll(".home-supply-basis-map-popup__link").forEach((el) => {
        el.onclick = () => {
          this.popupsHideAll();
          document.querySelector(`.home-supply-basis-map-video_${el.dataset.path}`)?.classList.add("home-supply-basis-map-video_show");
          console.log(el.dataset.path);
          this.buttons.querySelector(`.button[data-path='${el.dataset.path}']`)?.classList.add("button_active");
          this.buttons.querySelector(".home-supply-basis__button-close")?.classList.add("home-supply-basis__button-close_show");
        };
      });
    }
    popupsHideAll() {
      document.querySelector(".home-supply-basis-map-popup_show")?.classList.remove("home-supply-basis-map-popup_show");
      document.querySelector(".home-supply-basis-map-item_active")?.classList.remove("home-supply-basis-map-item_active");
    }
    videoPopupCloseInit() {
      document.querySelectorAll(".home-supply-basis-map-video-popup__close").forEach((el) => {
        el.onclick = () => {
          this.videoHide(true);
        };
      });
    }
  };
  var homeSupplyBasis = new HomeSupplyBasis();

  // app/javascript/custom/custom.js
  window.addEventListener("DOMContentLoaded", () => {
    init5();
  });
  function init5() {
    popup.init();
    header.init();
    navigation.init();
    navigationPage.init();
    news.init();
    formEmailUs.init();
    formOrder.init();
    command.init();
    cookies.init();
    homeHeroCounter.init();
    homeAnimations.init();
    homeAboutSlider.init();
    homeCoalSales.init();
    homeSupplyBasis.init();
  }
})();
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * ScrollToPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*! choices.js v10.2.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
//# sourceMappingURL=/assets/application.js.map
