<template>
  <div class="footer">
    <div class="links">
      <a
        href="http://118.14.111.143:9999/"
        target="_blank"
      >胡佳传&罗慧琴 Forever</a>
      <a
        href="https://github.com/DavidWhom"
        target="_blank"
      >
        GitHub-DavidWhom
        <a-icon type="github" />
      </a>
    </div>
    <div class="copyright">
      Copyright
      <a-icon type="copyright" /> 2019 <span>胡萝卜情侣微财务</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.footer {
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;

  .links {
    margin-bottom: 8px;

    a {
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>
