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
      }
      else if($('#board_links_attributes_0_url').val().match(/twitter.com/)){
        $('#board_links_attributes_0_kind').attr('value',3)
      }
      else if($('#board_links_attributes_0_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_0_kind').attr('value',4)
      }

    })


});