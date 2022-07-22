<template>
  <v-app>
    <div>
      <Header />
      <v-main>
        <slot />
      </v-main>
      <Footer />
    </div>
  </v-app>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
