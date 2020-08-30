<template>
  <LoginComponent />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginComponent from '@/components/Login.vue';

@Component({
  components: {
    LoginComponent
  }
})
export default class LoginPage extends Vue {}
</script>
