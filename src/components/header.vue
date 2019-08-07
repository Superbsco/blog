<template>
  <div class="hello">个人博客1234567</div>
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
  color: $neutral-cool-grey;
  font-size: $title-size;
  background-color: red;
}
</style>
