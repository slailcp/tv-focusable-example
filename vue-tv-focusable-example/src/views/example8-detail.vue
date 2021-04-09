<template>
  <div class="tv-demo">
    <img src="../assets/tv/detail2.jpg" />
  </div>
</template>

<script>
export default {
  name: "Example8Detail",
  data() {
    return {
      currentMenu: 0,
      contentCount: 30,
    };
  },
  created() {
    document.body.style.backgroundColor = "#012c40";
  },
  destroyed() {
    document.body.style.backgroundColor = "#fff";
  },
  methods: {
    goDetail() {},
  },
};
</script>


<style lang="less" scoped>
img {
  width: 100%;
  margin-top: 46px;
}
</style>
