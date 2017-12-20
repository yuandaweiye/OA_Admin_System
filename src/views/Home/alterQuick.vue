<template>
  <Transfer
    :data="totalColumn"
    :target-keys="curColumn"
    filterable
    :titles="column"
    @on-change="selectColumn" not-found-text="暂无栏目菜单" :list-style="listStyle" filter-placeholder="请输入要搜索的栏目"></Transfer>
</template>

<script>
    export default {
      name: "alter-quick",
      data () {
        return {
          column:['总栏目','添加为快捷栏目'],
          totalColumn: [
            {
              key:1,
              label:"月度需求申请",
              url:"/office/monthApply"
            },
            {
              key:2,
              label:"办公用品领用申请",
              url:"/office/useApply"
            },
            {
              key:3,
              label:"临时急性物品申请",
              url:"/office/acuteApply"
            },
            {
              key:4,
              label:"月度需求审批",
              url:"/office/monthApproval"
            },
            {
              key:5,
              label:"办公用品领用审批",
              url:"/office/useApproval"
            },
            {
              key:6,
              label:"临时急性物品审批",
              url:"/office/acuteApproval"
            },
            {
              key:7,
              label:"查看我的办公用品审批进度",
              url:'/office/myProgress'
            },
            {
              key:8,
              label:"车辆管理（行政）",
              url:"/car/carManageMent"
            }
          ],
          curColumn: [],
          listStyle: {
            width: '300px',
            height: '300px'
          }
        }
      },
      methods: {
        selectColumn (newTargetKeys) {
          this.curColumn = newTargetKeys;
        }
      }
    }
</script>

<style scoped>

</style>
