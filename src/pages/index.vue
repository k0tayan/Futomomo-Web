<script setup>
const { data: futomomos } = await useFetch("/api/futomomos");
</script>
<template>
  <v-container fluid fill-height>
    <!-- 画面いっぱい-->
    <v-row justify="center">
      <!-- 左右中央よせ-->
      <div v-for="futomomo in futomomos" :key="futomomo">
        <v-col>
          <Card class="" :futomomo="futomomo" />
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>
<script>
import Card from "@/components/card.vue";
export default {
  components: {
    Card,
  },
};
</script>
