<template>
  <section>
    <canvas ref="canvasArea" width="400px" height="400px">
      当前浏览器不支持canvas
    </canvas>
  </section>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {}
  },
  mounted () {
    this.createCanvas()
  },
  methods: {
    createCanvas () {
      let canvas = this.$refs.canvasArea
      if (canvas == null) return false
      let context = canvas.getContext('2d')
      context.fillStyle = '#68fbf9'
      this.drawRect(context, '#68fbf9', 0, 0, 400, 400)
      context.fillStyle = '#8195fb'
      context.strokeStyle = 'red'
      context.lineWidth = 1
      this.drawRectStrok(context, '#8195fb', 1, 50, 50, 100, 100)
      this.drawRect(context, '8195fb', 50, 50, 100, 100)
      for (let i = 0; i < 10; i++) {
        this.drawArc(context, 10 * i, 10 * i, i * 5, 0, 360, false)
      }
    },
    drawRect (context, fillStyle, x, y, w, h) {
      context.fillStyle = fillStyle
      context.fillRect(x, y, w, h)
    },
    drawRectStrok  (context, color, width, x, y, w, h) {
      context.strokeStyle = color
      context.lineWidth = width
      context.strokeRect(x, y, w, h)
    },
    drawArc (context, x, y, radius, sa, ea, anticlockwise) {
      context.beginPath()
      context.arc(x, y, radius, (sa / 180) * Math.PI, (ea / 180) * Math.PI, anticlockwise)
      context.strokeStyle = 'red'
      context.lineWidth = 0.4
      context.fillStyle = '#bce1ff'
      context.fill()
      context.stroke()
    }
  }
}
</script>

<style scoped>
canvas {
  height: 100%;
  width: 100%;
}
</style>
