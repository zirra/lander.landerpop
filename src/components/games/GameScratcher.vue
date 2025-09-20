<template>
  <div class="game-scratcher">
    
    <div class="scratcher">
      <canvas :id="scratcher.scratchId" class="myCanvas"
        :width="`${windowWidth* .9}`"
        :height="`${windowWidth * .9}`"

        :style="`margin:0;
          ${revealMe}`">
      </canvas>
    </div>
    <br/><br/>
    <button @click="setMenuMode(true)">Close</button>
  </div>
</template>

<script>

export default {
  name: 'GameScratcher',
  data: () => ({
    scratcher: {
      scratchId: 'testing1',
      revealMe: null,
      coverUp: process.env.VUE_APP_IMAGE_ROOT +'lpuEkSePpwewsvqsCtzvqRMz/cover.png'
    },
    reveal: null,
    revealCanvas: null,
    brushRadius: 0,
    revealRect: null,
    img: null,
    ticket: null,
    mygrid: [],
    revealMe: null,

  }),
  async mounted () {
    this.reveal = document.getElementById(this.scratcher.scratchId)
    this.revealRect = this.reveal.getBoundingClientRect()
    this.revealCanvas = this.reveal.getContext('2d')

    this.reveal.addEventListener("mousemove", (e) => {
      let brushPos = this.getBrushPos(e.clientX, e.clientY, this.revealRect, this.reveal)
      let leftBut = this.detectLeftButton(e)
      if (leftBut == 1) {
        this.drawDotMouse(brushPos.x, brushPos.y, this.revealCanvas, this.brushRadius, this.revealRect)
      }
    }, false)

    this.reveal.addEventListener("touchmove", (e) => {
      e.preventDefault()
      let touch = e.targetTouches[0]
      if (touch) {
        let brushPos = this.getBrushPos(touch.pageX, touch.pageY, this.revealRect, this.reveal)
        this.drawDotTouch(brushPos.x, brushPos.y, this.revealCanvas, this.brushRadius, this.revealRect)
      }
    }, false)

    try {
      await this.resetScratcher()
    } catch (e) {
      this.debug(e)
    }

  },
  methods: {
    initTicket () {
      this.revealCanvas.save()
      this.brushRadius = (this.reveal.width / 100) * 10
      console.log(this.brushRadius)
    },

    calcMargin() {
      return this.windowWidth * .05
    },

    async nextScratcher () {
      this.resetScratcher()
      this.$emit('next')
    },

    async resetScratcher() {
      this.revealCanvas.restore()
      try {
        
        
        this.img = new Image()
        this.img.alt = `Scratcher Overlay ${this.scratcher.scratchId}`
        this.img.onload = () => {
          let prize = `${this.imageRoot}lpuEkSePpwewsvqsCtzvqRMz/reveal.png`
    
          this.revealCanvas.drawImage(this.img, 0, 0, this.reveal.width, this.reveal.height)
          this.revealMe = `visibility: visible; background-image: url('${prize}'); background-image: -webkit-image-set(url('${prize}') 1x, url('${prize}') 2x );`
          this.initTicket()
        }
        this.img.src = this.scratcher.coverUp

      } catch (err) {
        console.log(err)
      }
    },

    detectLeftButton: (event) => {
      if ('buttons' in event) {
        return event.buttons === 1
      } else if ('which' in event) {
        return event.which === 1
      } else {
        return event.button === 1
      }
		},

		getBrushPos: (xRef, yRef, revealRect, reveal) => {
      return {
        x: Math.floor((xRef - revealRect.left) / (revealRect.right - revealRect.left) * reveal.width),
        y: Math.floor((yRef - revealRect.top) / (revealRect.bottom - revealRect.top) * reveal.height)
      };
		},

    drawDotMouse: (mouseX,mouseY,revealCanvas, brushRadius, rect) => {
      if(rect) { /*do nothing */}
      if(mouseX >= 0 && mouseX <= 50 && mouseY >= 0 && mouseY <= 50) {
        console.log('top corner')
      }
      revealCanvas.beginPath()
      revealCanvas.arc(mouseX, mouseY-50, brushRadius, 0, 2*Math.PI, true)
      revealCanvas.fillStyle = '#000'
      revealCanvas.globalCompositeOperation = "destination-out"
      revealCanvas.fill()
		},

    drawDotTouch: (mouseX,mouseY,revealCanvas, brushRadius, rect) => {
      if(rect) { /*do nothing */}
      if(mouseX >= 0 && mouseX <= 50 && mouseY >= 0 && mouseY <= 50) {
        console.log('top corner')
      }
      revealCanvas.beginPath()
      revealCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true)
      revealCanvas.fillStyle = '#000'
      revealCanvas.globalCompositeOperation = "destination-out"
      revealCanvas.fill()
		}
  }
}
</script>

<style>
.myCanvas {
  display: block;
  visibility: hidden;
  margin: 0 auto;
  background-size: cover;
  max-width: 100%;
  height: auto;
  cursor: url(https://landerpop.s3.us-east-1.amazonaws.com/gaming/cursor.png) 37.2 37.2;
}
.scratcher {
  display: flex;
  width: 100%;
  background-color: white;
}
</style>