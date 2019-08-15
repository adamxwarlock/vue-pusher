/**
 * Import Pusher from their library
 */
const Pusher = require('pusher-js');

/**
 * Create the vuePusher class utilizing the default pusher configuration.
 * 
 * @param {String} api_key
 * @param {Object} options
 */
function VuePusher(api_key, options) {
  this.pusher = new Pusher(api_key, options);
}

/**
 * Subscribe to any given channel and add a callback if applicable.
 * 
 * @param {String} channel
 * @param {Function} callback
 */
VuePusher.prototype.subscribe = function(channel, callback) {
  callback(this.pusher.subscribe(channel));
}

/**
 * Unsubcribe from a given channel.
 * 
 * @param {String} channel
 */
VuePusher.prototype.unsubscribe = function(channel) {
  this.pusher.unsubscribe(channel);
}

/**
 * Get all channels that have been subscribed to.
 * 
 * @return {Array}
 */
VuePusher.prototype.getChannels = function() {
  return this.pusher.allChannels;
}

/**
 * Send an event to the channels.
 * 
 * @param {String} event
 * @param {Object} data
 * @param {String} channel
 */
VuePusher.prototype.sendEvent = function(event, data, channel) {
  return this.pusher.connection.send_event(event, data, channel);
}

/**
 * Get a channel by name.
 * 
 * @return {Channel}
 */
VuePusher.prototype.getChannel = function(name) {
  return this.pusher.channel(name);
}

/**
 * Export the module.
 */
module.exports = {
  install: function(Vue, options) {
    var pusher = new VuePusher(options.api_key, options.options);

    Vue.prototype.$pusher = pusher;
  }
}