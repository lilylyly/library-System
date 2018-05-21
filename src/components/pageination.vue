<template>
  <div class="pageination_align">
    <div class="pageination">
      <div class="pagination_page" >首页</div>
      <div class="pagination_page">上一页</div>
      <ul class="pages" ref="pages">
        <li class="pagination_page">1</li>
        <li class="pagination_page">2</li>
      </ul>
      <div class="pagination_page">下一页</div>
      <div class="pagination_page pagination_page_right">尾页
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .pageination_align{
    text-align: center
  }

  ul {
    float: left;
  }

  .pageination {
    color: #48576a;
    font-size: 12px;
    display: inline-block;
    user-select: none;
    margin-top: 20px;
  }

  .pagination_page {
    padding: 0 4px;
    border: 1px solid #d1dbe5;
    border-right: 0;
    background: #fff;
    font-size: 13px;
    min-width: 28px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    float: left;
  }

  .pagination_page_right {
    border-right: 1px solid #d1dbe5;
  }

  .pagination_page:hover {
    color: #20a0ff;
  }

  .disabled {
    color: #e4e4e4 !important;
    background-color: #fff;
    cursor: not-allowed;
  }

  .pagination_page_active {
    border-color: #20a0ff;
    background-color: #20a0ff;
    color: #fff !important;;
    cursor: default;
  }
</style>
