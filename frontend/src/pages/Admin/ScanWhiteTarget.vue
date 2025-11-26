<template>
  <div class="screen">
    <!-- TOP BAR -->
    <header class="topbar">
      <div class="topbar-inner">
        <button class="back-btn" type="button" @click="goBack">
          ←
        </button>
        <span class="topbar-title">white Target Scan</span>
        <span class="topbar-spacer"></span>
      </div>
    </header>

    <!-- MAIN CAMERA AREA -->
    <main class="content">
      <div class="video-wrapper">
        <video ref="videoRef" class="video" autoplay playsinline muted></video>

        <!-- white square frame 1:1 -->
        <div class="scan-frame"></div>
      </div>

      <!-- BOTTOM PANEL: hanya tombol Next -->
      <div class="bottom-panel">
        <button class="next-btn" type="button" @click="goNext">
          Next
        </button>
      </div>

      <!-- status hasil scan (optional) -->
      <p v-if="lastResult" class="scan-status">
        Hasil scan: {{ lastResult }}
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { BrowserMultiFormatReader } from '@zxing/browser'

const router = useRouter()

const videoRef = ref(null)
const lastResult = ref('')

let currentStream = null
let codeReader = null
let videoTrack = null

const startCamera = async () => {
  try {
    currentStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
      audio: false
    })

    const video = videoRef.value
    if (!video) return

    video.srcObject = currentStream

    codeReader = new BrowserMultiFormatReader()
    await codeReader.decodeFromVideoDevice(
      null,
      video,
      (result, err) => {
        if (result) {
          lastResult.value = result.getText()
        }
      }
    )
  } catch (err) {
    console.error('Gagal akses kamera:', err)
    lastResult.value = 'Tidak dapat mengakses kamera.'
  }
}

const stopCamera = () => {
  if (codeReader) {
    try {
      codeReader.reset()
    } catch (e) {}
    codeReader = null
  }

  if (currentStream) {
    currentStream.getTracks().forEach((t) => t.stop())
    currentStream = null
    videoTrack = null
  }
}

const goBack = () => {
  router.back()
}

const goNext = () => {
  router.push('/admin/confirm/red')
}

onMounted(() => {
  startCamera()
})

onUnmounted(() => {
  stopCamera()
})
</script>

<style scoped>
.screen {
  min-height: 100vh;
  background: #f5f5f5;
  font-family: system-ui, sans-serif;
  display: flex;
  flex-direction: column;
}

/* TOPBAR */
.topbar {
  width: 100%;
  background: #25564a;
  display: flex;
  justify-content: center;
  color: #fff;
}

.topbar-inner {
  width: 100%;
  max-width: 390px;
  padding: 12px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
}

.topbar-title {
  font-weight: 600;
}

.topbar-spacer {
  width: 24px;
}

/* CONTENT (FRAME MOBILE) */
.content {
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* VIDEO AREA */
.video-wrapper {
  position: relative;
  flex: 1;
  background: #000;
  overflow: hidden;
}

.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* square 1:1 frame */
.scan-frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70vw;
  max-width: 280px;
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%);
  border: 4px solid #ffffff;
  border-radius: 18px;
  box-sizing: border-box;
}

/* BOTTOM PANEL - center button */
.bottom-panel {
  padding: 20px 0;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
}

.next-btn {
  background: #25564a;
  color: #fff;
  border: none;
  padding: 12px 26px;
  border-radius: 18px;
  font-size: 15px;
  font-weight: 600;
}

/* STATUS TEXT */
.scan-status {
  margin: 8px 16px 16px;
  font-size: 12px;
  text-align: center;
  color: #25564a;
}
</style>
