<template>
  <v-card class="mx-auto" max-width="250">
    <v-card-actions>
      <v-img
        :src="futomomo.image_url"
        height="200px"
        width="250px"
        cover
        @click="show = !show"
      ></v-img>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ futomomo.text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
  props: ["futomomo"],
};
</script>
