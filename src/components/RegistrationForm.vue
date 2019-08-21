<template>
  <div id="regForm">
    <form  id="app"  @submit="checkForm"  action="#"  method="post"  novalidate="true">
       <!-- novalidate to disable HTML 5 validation -->
    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
        <li v-for="error in errors">{{ error }}</li>
        </ul>
    </p>

    <p>
        <label for="name">Name</label>
        <input id="name" v-model="name" type="text" name="name">
    </p>

    <p>
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" name="email">
    </p>

    <p>
        <label for="licenseNumber">License Number</label>
        <input id="licenseNumber" v-model="licenseNumber" type="text" name="licenseNumber">
    </p>

    <p>
        <input type="submit" value="Submit">
    </p>

    </form>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
        errors: [],
        name: null,
        email: null,
        licenseNumber:null,
    }
  },
  methods:{
    checkForm: function (e) {
    this.errors = [];

    if (!this.name) {
    this.errors.push("Name required.");
     } //Validate name
        
    if (!this.email) {
    this.errors.push('Email required.');
    } else if (!this.validEmail(this.email)) {
    this.errors.push('Valid email required.');
    }//Validate email

    if (!this.licenseNumber){
        this.errors.push('License Number required.');
    } else if (!this.validLicenseNumber(this.licenseNumber)){
        this.errors.push('Valid License Number required.');
    }//Validate license number

    if (!this.errors.length) {
    return true;
    }//If there are no errors

    e.preventDefault();
    },//end fn checkForm
    validEmail: function (email) {
        //Allowed universal pattern for email
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      return re.test(email);
    },// end fn validEmail
    validLicenseNumber: function(licenseNumber) {
        var re=/[a-zA-Z0-9]/; //Allowed characters
        if(re.test(licenseNumber)){
            var strlength=this.licenseNumber.length;
            if(strlength>=6){//Allowed length, more than 6, I'm not sure feel free to correct
                return true;
            }
        }
    }
    
  }//end methods
  }//end export default
</script>

<style scoped>
</style>
