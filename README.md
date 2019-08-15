# Vue Pusher
A lightweight wrapper for the utilization of Pusher with Vue.

## Installation
Install and use the plugin like any other plugin that has been developed for Vue.

~~~js
const Vue = require('vue');
const VuePusher = require('vue-pusher');

Vue.use(VuePusher, {
  api_key: 'xxxxxxxxxxxxxx',
  options: {
    cluster: 'us2',
    forceTLS: true
  }
});
~~~

### Using the Pusher instance
Inside your components you can utilize the '$pusher' prototype object.

~~~js
export default {
  ready() {
    let channel = this.$pusher.subscribe('main');
    
    channel.bind('user.new', ({ data }) => {
      console.log(`${data.user.name} has registered for the site!`);
    });
  }
}
~~~

### Subscribing to a channel
Subscribing to a channel can be done in the same way you would using pusher-js.

~~~js
this.$pusher.subscribe('main', (channel) => {
  channel.bind('user.new', ({ data }) => {
    console.log(`${data.user.name} has registered for the site!`);
  });
});
~~~

### Unsubscribing from a channel
Unsubscribing from a channel can be done in the same way you would using pusher-js.

~~~js
this.$pusher.unsubscrube('main');
~~~

### Getting all subscribed channels
You can get all of the subscribed channels using getChannels() function.

~~~js
this.$pusher.subscribe('main');
this.$pusher.subscribe('other');

this.$pusher.getChannels().forEach(channel => {
  channel.bind('user.new', ({ data }) => {
    console.log(`${data.user.name} has registered for the site!`);
  });
});
~~~