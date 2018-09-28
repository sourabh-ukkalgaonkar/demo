  $(window).load(function() {
    $('#back-btn').hide();
    $('#myCarousel').carousel({
      interval: false
    });

    $('#next-btn').on('click', () => {
      $('#next-btn').hide();
      $('#back-btn').hide();
      setTimeout(function(){
        let component = $('.item.new.active')[0].id
        $('#next-btn').show();
        $('#back-btn').show();
        if(component == 'slide4') {
          $('#next-btn').hide();
          $('#back-btn').hide();
        }
      }, 650);
    });

    $('#back-btn').on('click', () => {
      $('#next-btn').hide();
      $('#back-btn').hide();
      setTimeout(function(){
        let component = $('.item.new.active')[0].id
        $('#next-btn').show();
        $('#back-btn').show();
        if(component == 'slide1') {
          $('#back-btn').hide();
        }
      }, 650);
    });

    $( ".video-wrapper" ).each(function( index ) {

      var videoPlayButton,
      videoWrapper = document.getElementsByClassName('video-wrapper')[index],
        video = document.getElementsByTagName('video')[index],
        videoMethods = {
            renderVideoPlayButton: function() {
                if (videoWrapper.contains(video)) {
            this.formatVideoPlayButton()
                    video.classList.add('has-media-controls-hidden')
                    videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[index]
                    videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
                }
            },

            formatVideoPlayButton: function() {
                videoWrapper.insertAdjacentHTML('beforeend', '\
                    <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                        <circle cx="100" cy="100" r="90" fill="#000"/>\
                        <polygon points="70, 55 70, 145 145, 100" fill="#ff9500"/>\
                    </svg>\
                ')
            },

            hideVideoPlayButton: function() {
                video.play()
                videoPlayButton.classList.add('is-hidden')
                video.classList.remove('has-media-controls-hidden')
                video.setAttribute('controls', 'controls')
            }
      }
      videoMethods.renderVideoPlayButton()
    });
  });
