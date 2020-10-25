<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>


      <upload-files></upload-files>
  </div>
</template>

<script>
import UserService from '../services/user.service';
import UploadFiles from "./UploadFiles";

export default {
  name: 'Home',
  components: {
    UploadFiles
  },
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
