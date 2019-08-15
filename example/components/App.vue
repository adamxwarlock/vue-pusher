<template>
  <div>
    <ul>
      <li v-foreach="thing in things" :key="thing">{{ thing }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        things: []]
      }
    },

    created() {
      this.$pusher.subscribe('main', (channel) => {
        channel.bind('new_thing', ({ data }) => {
          this.things.push(data.name);
        });
      });
    }
  }
</script>