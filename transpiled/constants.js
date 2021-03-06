'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _ = require('lodash');

// keys that will have a symbol with the value of the key
var symbols = ['ACTION_LOG_OUT', 'ACTION_VALIDATING_AUTH_TOKEN', 'ACTION_VALID_AUTH_TOKEN', 'ACTION_INVALID_AUTH_TOKEN', 'ACTION_FETCH_ALL', 'ACTION_NEW_CONFIG', 'ACTION_NEW_EVENTS', 'ACTION_NEW_SERVICES', 'ACTION_NEW_STATES', 'ACTION_NEW_STATE_HISTORY', 'ACTION_NEW_LOGBOOK', 'ACTION_NEW_NOTIFICATION', 'ACTION_SET_PREFERENCE', 'ACTION_EVENT_FIRED', 'ACTION_INITIAL_LOAD_DONE', 'ACTION_STREAM_START', 'ACTION_STREAM_STOP', 'ACTION_STREAM_ERROR', 'ACTION_REMOTE_EVENT_RECEIVED', 'ACTION_LISTENING_START', 'ACTION_LISTENING_TRANSMITTING', 'ACTION_LISTENING_DONE', 'ACTION_LISTENING_ERROR', 'ACTION_LISTENING_RESULT'];

exports['default'] = _.merge({

  REMOTE_EVENT_HOMEASSISTANT_START: 'homeassistant_start',
  REMOTE_EVENT_HOMEASSISTANT_STOP: 'homeassistant_stop',
  REMOTE_EVENT_STATE_CHANGED: 'state_changed',
  REMOTE_EVENT_TIME_CHANGED: 'time_changed',
  REMOTE_EVENT_CALL_SERVICE: 'call_service',
  REMOTE_EVENT_SERVICE_EXECUTED: 'service_executed',
  REMOTE_EVENT_PLATFORM_DISCOVERED: 'platform_discovered',
  REMOTE_EVENT_SERVICE_REGISTERED: 'service_registered',
  REMOTE_EVENT_COMPONENT_LOADED: 'component_loaded',

  UNIT_TEMP_C: '°C',
  UNIT_TEMP_F: '°F' }, _.zipObject(symbols, symbols));
module.exports = exports['default'];