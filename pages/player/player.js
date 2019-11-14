Page({
  onReady(res) {
    this.ctx = wx.createLivePlayerContext('player')
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },
  //播放
  bindPlay() {
    this.ctx.play({
      success: res => {
        console.log('播放成功')
      },
      fail: res => {
        console.log('播放失败，失败原因'+res.errMsg)
      }
    })
  },
  //暂停
  bindPause() {
    this.ctx.pause({
      success: res => {
        console.log('暂停成功')
      },
      fail: res => {
        console.log('暂停失败，失败原因' + res.errMsg)
      }
    })
  },
  //停止
  bindStop() {
    this.ctx.stop({
      success: res => {
        console.log('停止成功')
      },
      fail: res => {
        console.log('停止失败，失败原因' + res.errMsg)
      }
    })
  },
  //恢复
  bindResume() {
    this.ctx.resume({
      success: res => {
        console.log('恢复成功')
      },
      fail: res => {
        console.log('恢复失败，失败原因' + res.errMsg)
      }
    })
  },
  //静音
  bindMute() {
    this.ctx.mute({
      success: res => {
        console.log('静音成功')
      },
      fail: res => {
        console.log('静音失败，失败原因' + res.errMsg)
      }
    })
  }
})