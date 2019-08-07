<template>
  <div class="hello">个人博客123456</div>
</template>

<script>
export default {
  name: "header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  color: $primary-lt-blue;
  font-size: $title-size;
}
</style>
