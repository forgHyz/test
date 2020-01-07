<template>
  <section>
    <div>骨骼动画</div>
    <div  class="man">
      <div class="head">
        <div class="eye"></div>
      </div>
      <div class="body">
        <div class="lefthand">
          <div class="lefthand_arm"></div>
        </div>
        <div class="righthand">
          <div class="righthand_arm"></div>
        </div>
      </div>
      <div class="foot">
        <div class="leftfoot">
          <div class="leftfoot_arm"></div>
        </div>
        <div class="rightfoot">
          <div class="rightfoot_arm"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'bone'
}
</script>

<style lang="scss" scoped>
.man {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  transform: rotateY(180deg);
  animation: walk 40s infinite linear;
  .head {
    width: 80px;
    height: 100px;
    border-radius: 50%;
    background-color: #2c3e50;
    .eye {
      width: 15px;
      height: 15px;
      background-color: #fff;
      border-radius: 50%;
      margin: 30px 20px;
      animation: eye 3s infinite linear;
    }
  }
  .body {
    width: 10px;
    height: 100px;
    background-color: #2c3e50;
    display: flex;
    justify-content: center;
    overflow: visible;
    .lefthand, .righthand {
      width: 10px;
      height: 50px;
      border-radius: 5% 5%;
      background-color: #2c3e50;
      transform-origin: top center;
      &.lefthand {
        animation: handmove_l 3s infinite linear;
        .lefthand_arm {
          width: 10px;
          height: 50px;
          margin-top: 50px;
          border-radius: 5% 5%;
          background-color: #2c3e50;
          transform-origin: top center;
          animation: handmove_l_arm 3s infinite linear;
        }
      }
      &.righthand {
        animation: handmove_r 3s infinite linear;
        .righthand_arm {
          width: 10px;
          height: 50px;
          margin-top: 50px;
          border-radius: 5% 5%;
          background-color: #2c3e50;
          transform-origin: top center;
          animation: handmove_r_arm 3s infinite linear;
        }
      }
    }
  }
  .foot {
    display: flex;
    overflow: visible;
    .leftfoot, .rightfoot {
      width: 10px;
      height: 70px;
      border-radius: 5% 5%;
      background-color: #2c3e50;
      transform-origin: top center;
      &.leftfoot {
        animation: footmove_l 3s infinite linear;
        .leftfoot_arm {
          width: 10px;
          height: 70px;
          margin-top: 70px;
          border-radius: 5% 5%;
          background-color: #2c3e50;
          transform-origin: top center;
          animation: footmove_l_arm 3s infinite linear;
        }
      }
      &.rightfoot {
        animation: footmove_r 3s infinite linear;
        .rightfoot_arm {
          width: 10px;
          height: 70px;
          margin-top: 70px;
          border-radius: 5% 5%;
          background-color: #2c3e50;
          transform-origin: top center;
          animation: footmove_l_arm 3s infinite linear;
        }
      }
    }
  }
  @keyframes walk {
    0% {
      transform: rotateY(180deg);
      left: 0;
    }
    50% {
      left: 1800px;
      transform: rotateY(180deg);
    }
    50.1% {
      transform: rotateY(0deg);
      left: 1800px;
    }
    99.9% {
      left: 0;
      transform: rotateY(0deg);
    }
  }
  @keyframes eye {
    0% {
      transform: rotateX(0deg);
    }
    15% {
      transform: rotateX(90deg);
    }
    30% {
      transform: rotateX(0deg);
    }
    45% {
      transform: rotateX(90deg);
    }
    50% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
  @keyframes handmove_l {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(30deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
       transform: rotate(-20deg);
     }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes handmove_l_arm {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(30deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes handmove_r {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes handmove_r_arm {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes footmove_l {
     0% {
       transform: rotate(0deg);
     }
     25% {
       transform: rotate(40deg);
     }
     50% {
       transform: rotate(0deg);
     }
     75% {
       transform: rotate(-15deg);
     }
     100% {
       transform: rotate(0deg);
     }
   }
  @keyframes footmove_l_arm {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-30deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes footmove_r {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-15deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(40deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
</style>
