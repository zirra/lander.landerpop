<template>
  <div class="simple-spinner">
    <div class="spinner-container">
      <canvas :id="gameId"
        :width="400"
        :height="400"
        class="spinner-canvas">
      </canvas>
    </div>
    <br/>
    <button @click="spin" :disabled="isSpinning">Spin Wheel</button><br/><br/>

    <div>Current Position: {{ (currentRotation % 360).toFixed(1) }}°</div>
    <div>Target: {{ targetAngle }}°</div>
    <div>Status: {{ isSpinning ? 'Spinning...' : 'Stopped' }}</div>
    <br/>

    <input v-model.number="targetAngle" placeholder="Target angle (0-360)" />
    <button @click="setTarget" :disabled="isSpinning">Set Target</button><br/>
  </div>
</template>

<script>
export default {
  name: 'SimpleSpinner',
  props: {
    gameId: {
      type: String,
      default: 'simple-spinner'
    },
    wheelImage: {
      type: String,
      default: `ColorWheelNos.png`
    }
  },

  data() {
    return {
      canvas: null,
      ctx: null,
      wheel: null,

      currentRotation: 0,
      targetAngle: 0,
      isSpinning: false,
      hasTarget: false,

      animationId: null,
      spinSpeed: 0,
      maxSpeed: 20,
      deceleration: 0.98
    }
  },

  mounted() {
    this.canvas = document.getElementById(this.gameId)
    this.ctx = this.canvas.getContext('2d')
    this.wheel = new Image()
    this.wheel.onload = () => {
      this.drawWheel()
    }
    this.wheel.src = `${this.imageRoot}lpuEkSePpwewsvqsCtzvqRMz/${this.wheelImage}`
  },

  methods: {
    spin() {
      if (this.isSpinning) return

      this.isSpinning = true

      if (this.hasTarget) {
        // Calculate spins needed to reach target
        const minSpins = 5
        const maxSpins = 10
        const spins = minSpins + Math.random() * (maxSpins - minSpins)
        const finalRotation = (spins * 360) + this.targetAngle
        this.spinToTarget(finalRotation)
      } else {
        // Random spin
        this.spinSpeed = this.maxSpeed
        this.randomSpin()
      }
    },

    spinToTarget(targetRotation) {
      const startRotation = this.currentRotation
      const totalDistance = targetRotation - startRotation
      const steps = 200
      let step = 0

      const animate = () => {
        step++
        const progress = step / steps

        // Easing function for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3)
        this.currentRotation = startRotation + (totalDistance * easeOut)

        if (step >= steps) {
          this.currentRotation = targetRotation
          this.stopSpin()
        } else {
          this.drawWheel()
          this.animationId = requestAnimationFrame(animate)
        }
      }

      animate()
    },

    randomSpin() {
      this.currentRotation += this.spinSpeed
      this.spinSpeed *= this.deceleration

      if (this.spinSpeed < 0.1) {
        this.stopSpin()
      } else {
        this.drawWheel()
        this.animationId = requestAnimationFrame(() => this.randomSpin())
      }
    },

    stopSpin() {
      this.isSpinning = false
      this.hasTarget = false
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
        this.animationId = null
      }

      this.drawWheel()

      // Show normalized position for display
      const normalizedPosition = this.currentRotation % 360
      console.log(`Stopped at: ${normalizedPosition.toFixed(1)}°`)
    },

    setTarget() {
      this.hasTarget = true
      console.log(`Target set to: ${this.targetAngle}°`)
    },

    drawWheel() {
      if (!this.wheel || !this.ctx) return

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.save()

      const centerX = this.canvas.width / 2
      const centerY = this.canvas.height / 2

      this.ctx.translate(centerX, centerY)
      this.ctx.rotate((this.currentRotation * Math.PI) / 180)

      this.ctx.drawImage(
        this.wheel,
        -centerX,
        -centerY,
        this.canvas.width,
        this.canvas.height
      )

      this.ctx.restore()
    }
  }
}
</script>

<style scoped>
.simple-spinner {
  text-align: center;
  color: #fff;
}

.spinner-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.spinner-canvas {
  border: 2px solid #ccc;
  border-radius: 50%;
}

button {
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
}

input {
  margin: 5px;
  padding: 5px;
  width: 150px;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>