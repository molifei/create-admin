<template>
  <div class="tab">
    <el-scrollbar class="list-scroll-wrap">
      <ul ref="scrollList">
        <li
            v-for="(item,index) in list"
            v-dragging="{ item: item, list: list, group: 'item',key:index }"
            :key="item.path"
            :to="item.path"
            :ref="`scrollItem${index}`"
            :class="{active:item.active}"
            @click="toView(item,$event)"
            @click.middle="middleClick(index,$event)">
          <span :title="item.title">{{ item.title }}</span>
          <i class="el-icon-close" @click.stop="closeTab(index)"></i>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'TagView',

  watch: {
    // 监听路由变化
    // active 当前项高亮组合
    $route: {
      immediate: true,
      handler(to, from) {
        // console.log(to)
        // 将页签列表每个页签的状态设置为false
        this.list.forEach(item => {
          item.active = false;
        });

        // 组装当前路由对象
        let f = {
          active: false,
          name: to.name,
          title: to.meta.title,
          path: to.path
        };

        // 检测路由对象是否存在于页签数组
        let flag = this.list.find(item => {
          // console.log(item);
          return JSON.stringify(item) === JSON.stringify(f);
        });

        // 如果不存在，为undefined，则将状态设置为true
        if (!flag) {
          f.active = true;
          this.list.push(f);
        } else { // 如果存在，则将此项状态设置为true
          flag.active = true;
        }

        this.activeView(this.list.findIndex(item => item.active));

      }
    }
  },

  data() {
    return {
      // 页签对象数组
      list: [],
    };
  },

  methods: {
    // 关闭点击标签页
    closeTab(index) {
      // 当前页面地址
      let nowPath = this.$route.path;
      // 点击的页面的地址
      let path = this.list[index].path;

      // 删除点击的页签
      this.list.splice(index, 1);

      // 关闭页面是当前页面,并且列表还有数据
      if ((nowPath === path) && this.list.length > 0) {
        // 跳转上一个页面
        let toPath = this.list[index - 1].path;
        this.$router.push({ path: toPath });
      }
    },

    // 点击某一项
    toView(item, e) {
      this.$router.push(item.path);
      e.target.scrollIntoView({
        behavior: 'smooth',
        inline: 'center'
      });
    },

    // 跳转
    jumpRoute(type) {
      // 找到当前项
      let activeIndex = this.list.findIndex((item) => {
        return item.active;
      });
      this.jumpHandle(type, activeIndex);
    },

    jumpHandle(type, index) {
      switch (type) {
      case 'prev':
        if (index === 0) {
          return;
        }
        this.$router.push(this.list[index - 1].path);
        break;
      case 'next':
        if (index === this.list.length - 1) {
          return;
        }
        this.$router.push(this.list[index + 1].path);
        break;
      }

      this.activeView(index);

    },

    // 将当前标签显示在可见位置
    activeView(index) {
      // 在 nextTick 中获取更新过的结构
      this.$nextTick(() => {
        this.$refs[`scrollItem${index}`][0].scrollIntoView({
          behavior: 'smooth',
          inline: 'center'
        });
      });
    },

    // 中键点击,关闭当前标签
    middleClick(index, e) {
      this.closeTab(index);
    }

  },

};
</script>

<style scoped lang="less">
  /deep/ .list-scroll-wrap {
    /*height: calc(100% + 32px);*/
  }

  /deep/ .el-scrollbar .el-scrollbar__wrap .el-scrollbar__view {
    white-space: nowrap;
    display: inline-block;
  }

  /deep/ .el-scrollbar__wrap {
    overflow-x: auto;
    overflow-y: hidden;
    height: 49px;

    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }

  .tab {
    padding: 0 20px;
    width: 100%;
    background-color: rgb(245, 247, 249);
    height: 49px;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .jump {
      width: 56px;
      text-align: center;
      cursor: pointer;

      i.iconfont {
        font-size: 18px;
        color: rgba(0, 0, 0, .4);
      }
    }


    .list-scroll-wrap {
      flex: 1;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;

      li {
        padding: 0 10px;
        /*margin-right: 5px;*/
        cursor: pointer;
        border: 1px solid #fff;
        background-color: #fff;
        transition: all .2s ease-in-out;
        text-align: center;
        font-size: 14px;
        color: #596a7a;
        height: 32px;
        display: flex;
        margin-right: 5px;
        border-radius: 5px;


        span {
          line-height: 32px;
          margin-right: 8px;
        }

        .el-icon-close {
          line-height: 36px;
          font-size: 12px;
          transform: scale(0.8);
          right: 18px;
        }

        &.active {
          background-color: #fff;
          border-color: #1890ff;
          color: #0c1621;

          .el-icon-close {
            color: #23394f;
          }
        }
      }
    }
  }
</style>
