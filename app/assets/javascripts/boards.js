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

});