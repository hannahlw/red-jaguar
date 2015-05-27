$( document ).ready(function() {
  
  $('div#genre-pick').click(function(event){
    var data = {filter_by: this.textContent};
    var url = window.location.href + "filter";
    
    function makeUpdates(results){
      var boards = results.message.boards
      for(i = 0; i < boards.length; i++) {
      $('#content_'+ i + " " + 'a').attr('href', "/boards/"+boards[i].id).text(boards[i].name)
      }
      
    }

    $.ajax({
      type: 'POST',
      url: url,
      data: data,
      success: function(results){
        makeUpdates(results);
      },
      dataType: 'JSON'
    })
  })

    $('#board_links_attributes_0_url').on('input', function(){
      if($('#board_links_attributes_0_url').val().match(/youtube.com/)){
        $('#board_links_attributes_0_kind').attr('value',2)
        // $('#board_links_attributes_0_url').prev().append('<input type="text" name="board[links_attributes][1][url]" id="board_links_attributes_1_url">')
      }
      else if($('#board_links_attributes_0_url').val().match(/twitter.com/)){
        $('#board_links_attributes_0_kind').attr('value',3)
      }
      else if($('#board_links_attributes_0_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_0_kind').attr('value',4)
      }



    })

     $('#board_links_attributes_1_url').on('input', function(){
      if($('#board_links_attributes_1_url').val().match(/youtube.com/)){
        $('#board_links_attributes_1_kind').attr('value',2)
        // $('#board_links_attributes_0_url').prev().append('<input type="text" name="board[links_attributes][1][url]" id="board_links_attributes_1_url">')
      }
      else if($('#board_links_attributes_1_url').val().match(/twitter.com/)){
        $('#board_links_attributes_1_kind').attr('value',3)
      }
      else if($('#board_links_attributes_1_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_1_kind').attr('value',4)
      }

    })

      $('#board_links_attributes_2_url').on('input', function(){
      if($('#board_links_attributes_2_url').val().match(/youtube.com/)){
        $('#board_links_attributes_2_kind').attr('value',2)
        // $('#board_links_attributes_0_url').prev().append('<input type="text" name="board[links_attributes][1][url]" id="board_links_attributes_1_url">')
      }
      else if($('#board_links_attributes_2_url').val().match(/twitter.com/)){
        $('#board_links_attributes_2_kind').attr('value',3)
      }
      else if($('#board_links_attributes_2_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_2_kind').attr('value',4)
      }

    })

     $('#board_links_attributes_3_url').on('input', function(){
      if($('#board_links_attributes_3_url').val().match(/youtube.com/)){
        $('#board_links_attributes_3_kind').attr('value',2)
        // $('#board_links_attributes_0_url').prev().append('<input type="text" name="board[links_attributes][1][url]" id="board_links_attributes_1_url">')
      }
      else if($('#board_links_attributes_3_url').val().match(/twitter.com/)){
        $('#board_links_attributes_3_kind').attr('value',3)
      }
      else if($('#board_links_attributes_3_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_3_kind').attr('value',4)
      }

    })

      $('#board_links_attributes_4_url').on('input', function(){
      if($('#board_links_attributes_4_url').val().match(/youtube.com/)){
        $('#board_links_attributes_4_kind').attr('value',2)
        // $('#board_links_attributes_0_url').prev().append('<input type="text" name="board[links_attributes][1][url]" id="board_links_attributes_1_url">')
      }
      else if($('#board_links_attributes_4_url').val().match(/twitter.com/)){
        $('#board_links_attributes_4_kind').attr('value',3)
      }
      else if($('#board_links_attributes_4_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_4_kind').attr('value',4)
      }

    })

       $('#board_links_attributes_5_url').on('input', function(){
      if($('#board_links_attributes_5_url').val().match(/youtube.com/)){
        $('#board_links_attributes_5_kind').attr('value',2)
        // $('#board_links_attributes_0_url').prev().append('<input type="text" name="board[links_attributes][1][url]" id="board_links_attributes_1_url">')
      }
      else if($('#board_links_attributes_5_url').val().match(/twitter.com/)){
        $('#board_links_attributes_5_kind').attr('value',3)
      }
      else if($('#board_links_attributes_5_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_5_kind').attr('value',4)
      }

    })

    

    $.getJSON('http://soundcloud.com/oembed?callback=?',
    {format: 'js', url: 'https://soundcloud.com/diplo/diplo-friends-diplo-may-2015-320-mp3', iframe: true},
    function(data) {
        // Stick the html content returned in the object into the page
        $('#soundcloud').html(data['html'])
    })




});