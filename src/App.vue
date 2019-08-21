<template>
 <div>
   <app-header></app-header>
   <registrationForm></registrationForm>
   <app-footer></app-footer>
 </div>
</template>

<script>
import Header from './components/Header.vue';
import RegistrationForm from './components/RegistrationForm.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    'app-header':Header,
    'registrationForm':RegistrationForm,
    'app-footer':Footer
  },
  data () {
    return {
    
    }
  },
}
</script>

<style>
 
</style>
