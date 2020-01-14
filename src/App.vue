<template>
  <v-app>
    <router-view />
    <v-bottom-navigation
      color="primary"
      absolute
      grow
      v-model="bottomNav"
      @change="changeMenu"
    >
      <v-btn height="100%" value="category">
        <span>Category</span>
        <v-icon>mdi-tag</v-icon>
      </v-btn>

      <v-btn height="100%" value="purchase">
        <span>Purchase</span>
        <v-icon>mdi-basket</v-icon>
      </v-btn>

      <v-btn height="100%" value="nearby">
        <span>NFC-e</span>
        <v-icon>mdi-package-up</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bottomNav: "category"
    };
  },
  methods: {
    changeMenu(value) {
      this.$router.push(`/${value}`);
    }
  }
};
</script>
