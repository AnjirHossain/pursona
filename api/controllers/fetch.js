/*
  Written with love by Anjir
*/

// import jQuery
import $ from 'jquery';
import _ from 'underscore';

// factor out signature
const OPTS_SIGNATURE = {
  'base_url': '',
  'q': '',
  'type': []
};

const INVALID_SIGNATURE_MESSAGE = 'Options object must match the signature: { url: String, q: String, type: Array }';

function fetch(options, callback) {
  // object doesn't match expected signature or is empty
  if ( invalidSignature(_.keys(OPTS_SIGNATURE), _.keys(options)) || _.isEmpty(options) ) {
    callback(new Error(INVALID_SIGNATURE_MESSAGE));
  } else {
    for (let prop in options) {
      // if typeof === 'object', then digg deeper to ensure its an array
      if (typeof options[prop] === 'object') {
        if (!Array.isArray(options[prop])) {
          callback(new Error(INVALID_SIGNATURE_MESSAGE));
        }
      }

      if (typeof options[prop] !== typeof OPTS_SIGNATURE[prop]) {
        callback(new Error(INVALID_SIGNATURE_MESSAGE));
      }
    }
  }

  // options have been validated thoroughly
  console.log( constructUrl(options['base_url'], options['q'], options['type']) );
}

/*
  if length isn't a falsey then its safe to assume options is
  missing some key from the OPTS_SIGNATURE array ergo an invalidSignature
*/
function invalidSignature(a, b) {
  return _.difference(a, b).length;
}

/*
  find a way to break this shit and then fix it
 */
function constructUrl(base, query, types) {
  return base + '?q=' + query.replace(' ', '+') + '&type=' + types.join(',');
}

export default fetch;
