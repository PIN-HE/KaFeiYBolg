<template>
     <RouterView />
     <canvas id="particle-canvas"></canvas>
</template>

<script setup>
import { RouterView } from 'vue-router';
import initParticleEffect from 'canvas-particle-effect'
import 'canvas-particle-effect/dist/style.css'
import { onMounted } from 'vue';

onMounted(() => {
     initParticleEffect()
})

</script>

<style scoped></style>