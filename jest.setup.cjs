// Make RTL matchers available
require('@testing-library/jest-dom');

// Polyfill TextEncoder/TextDecoder used by react-router in JSDOM
const { TextEncoder, TextDecoder } = require('node:util');
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}


