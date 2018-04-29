import Vue from 'vue/dist/vue.js'
import '../src/main.styl'
import '../src/api.js'

new Vue({
  el: '#app',
  data: {
    radio: 'http://stream.scansf.com:8000/scansf.hp',
    music: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/270473197&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  methods: {
    setRadio: function(url, btn) {
      this.radio = url
      var police = document.getElementById('police')
      for (var i = 0; i < police.childNodes.length; i++) {
        police.childNodes[i].className = 'btn'
      }
      btn.currentTarget.classList.add('active')
    },
    setMusic: function(url, btn) {
      this.music = url
      var police = document.getElementById('sc')
      for (var i = 0; i < police.childNodes.length; i++) {
        police.childNodes[i].className = 'btn'
      }
      btn.currentTarget.classList.add('active')
    },
    play: function(){
      widget1.play()
      document.querySelector('audio').play()
    },
    pause: function(){
      widget1.pause()
      document.querySelector('audio').pause()
    },
    next: function(){
      widget1.next()
    }
  }
})

var iframeElement = document.querySelector('iframe')
var widget1 = SC.Widget(iframeElement)
widget1.play()
widget1.setVolume(40)

var audioElement = document.querySelector('audio')
audioElement.volume = 1