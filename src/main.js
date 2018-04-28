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
    setRadio: function(url) {
      this.radio = url  
    },
    setMusic: function(url) {
      this.music = url  
    },
    play: function(){
      widget1.play()
      document.getElementById('music').play()
    },
    pause: function(){
      widget1.pause()
      document.getElementById('music').pause()
    },
    next: function(){
      widget1.next()
    }
  }
})

var iframeElement = document.querySelector('iframe');
var widget1 = SC.Widget(iframeElement);
widget1.play();
widget1.setVolume(50);