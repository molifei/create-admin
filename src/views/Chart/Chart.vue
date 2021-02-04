<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="6" v-for="item in cardList" :key="item.id">
        <el-card class="box-card" shadow="never">
          <div class="card-content">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="`#${item.icon}`"></use>
            </svg>
            <div class="desc">
              <p>{{ item.descTitle }}</p>
              <p>{{ item.descNumber }}人</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-card class="box-card" shadow="never">
        <div id="chart1" class="card-content"></div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { Chart, registerShape } from '@antv/g2';

export default {
  name: 'Chart',

  data() {
    return {
      cardList: [
        { id: 1, icon: 'icon-avatar_female', descTitle: '阿凡达', descNumber: 10 },
        { id: 2, icon: 'icon-darth_vader', descTitle: '暗黑武士', descNumber: 20 },
        { id: 3, icon: 'icon-doctor_male', descTitle: '医生', descNumber: 30 },
        { id: 4, icon: 'icon-clown_female', descTitle: '小丑', descNumber: 40 },
      ],

      data1: [],

    }
  },

  created() {

  },

  mounted() {
    this.initChart()
  },

  methods: {
    initChart() {
      // Step 1: 创建 Chart 对象
      const chart = new Chart({
        container: 'chart1', // 指定图表容器 ID
        // width: this.basicColumnChartProp.width, // 指定图表宽度
        // height: this.basicColumnChartProp.height // 指定图表高度
      });
      // Step 2: 载入数据源
      chart.data(this.data1);
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart.interval().position('genre*sold').color('genre')
      // Step 4: 渲染图表
      chart.render();
    }
  }

}
</script>

<style scoped lang="less">
  .el-col {
    margin-bottom: 20px;
  }

  .box-card {
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: transparent;
    font-size: 16px;

    .card-content {
      display: flex;
      align-items: center;
      justify-content: space-around;

      svg {
        font-size: 80px;
      }

      .desc {
        p {
          &:nth-of-type(1) {
            font-weight: bold;
            font-size: 16px;
            color: rgba(0, 0, 0, .45);
          }

          &:nth-of-type(2) {
            font-weight: bold;
            font-size: 20px;
            color: #666;
          }
        }
      }
    }
  }
</style>
