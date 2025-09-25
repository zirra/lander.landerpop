<template>
  <div class="precise-spinner">
    <div class="spinner-container">
      <canvas :id="gameId"
        :width="400"
        :height="400"
        class="spinner-canvas">
      </canvas>
    </div>
    <br/>

    <div>Current Position: {{ displayPosition }}°</div>
    <div>Target: {{ targetAngle }}°</div>
    <div>Status: {{ isSpinning ? 'Spinning...' : 'Stopped' }}</div>
    <br/>

    <input v-model.number="targetAngle" placeholder="Target angle (0-360)" type="number" min="0" max="360" />
    <button @click="spinToTarget" :disabled="isSpinning || targetAngle === null">Spin to Target</button><br/>
    <button @click="randomSpin" :disabled="isSpinning">Random Spin</button><br/>
  </div>
</template>

<script>
export default {
  name: 'PreciseSpinner',
  props: {
    gameId: {
      type: String,
      default: 'precise-spinner'
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
      targetAngle: 90,
      isSpinning: false,
      animationId: null
    }
  },

  computed: {
    displayPosition() {
      const pos = this.currentRotation % 360
      return pos < 0 ? pos + 360 : pos
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
    spinToTarget() {
      if (this.isSpinning || this.targetAngle === null) return

      this.isSpinning = true

      // Use same logic as original spinner: spins * 360 + target
      const spins = Math.floor(5 + Math.random() * 5) // Integer spins
      const totalRotation = (spins * 360) + this.targetAngle

      console.log(`Spinning ${spins} times to land at ${this.targetAngle}° (total: ${totalRotation}°)`)
      this.animateToRotation(totalRotation)
    },

    randomSpin() {
      if (this.isSpinning) return

      this.isSpinning = true

      // Random spin
      const spins = 3 + Math.random() * 4 // 3-7 spins
      const randomAngle = Math.random() * 360
      const totalRotation = this.currentRotation + (spins * 360) + (randomAngle - this.displayPosition)

      this.animateToRotation(totalRotation)
    },

    animateToRotation(targetRotation) {
      const startRotation = 0 // Always start from 0 like original spinner
      const distance = targetRotation
      const duration = 3000 // 3 seconds
      const startTime = performance.now()

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Ease out cubic for smooth deceleration
        const easeProgress = 1 - Math.pow(1 - progress, 3)

        this.currentRotation = startRotation + (distance * easeProgress)
        this.drawWheel()

        if (progress < 1) {
          this.animationId = requestAnimationFrame(animate)
        } else {
          // Ensure exact final position
          this.currentRotation = targetRotation
          this.drawWheel()
          this.stopSpin()
        }
      }

      this.animationId = requestAnimationFrame(animate)
    },

    stopSpin() {
      this.isSpinning = false
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
        this.animationId = null
      }
      console.log(`Final position: ${this.displayPosition.toFixed(1)}°`)
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
.precise-spinner {
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
  width: 100px;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>