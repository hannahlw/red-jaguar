$( document ).ready(function() {
  
  $('button#genre-picker').click(function(event){
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
        $('#board_links_attributes_0_kind').attr('value',2);
        $('#header_0').attr('class','card-header bgm-red');
      }
      else if($('#board_links_attributes_0_url').val().match(/twitter.com/)){
        $('#board_links_attributes_0_kind').attr('value',3)
        $('#header_0').attr('class','card-header bgm-blue');
      }
      else if($('#board_links_attributes_0_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_0_kind').attr('value',4)
        $('#header_0').attr('class','card-header bgm-orange');
      }
      else if($('#board_links_attributes_0_url').val().match(/.\s./)){
        $('#board_links_attributes_0_kind').attr('value',5)
        $('#header_0').attr('class','card-header bgm-green');
      }
      else {
        $('#header_0').attr('class','card-header bgm-black');
        $('#board_links_attributes_0_kind').attr('value',1)
      }
    })

    $('#board_links_attributes_1_url').on('input', function(){
      if($('#board_links_attributes_1_url').val().match(/youtube.com/)){
        $('#board_links_attributes_1_kind').attr('value',2);
        $('#header_1').attr('class','card-header bgm-red');
      }
      else if($('#board_links_attributes_1_url').val().match(/twitter.com/)){
        $('#board_links_attributes_1_kind').attr('value',3)
        $('#header_1').attr('class','card-header bgm-blue');
      }
      else if($('#board_links_attributes_1_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_1_kind').attr('value',4)
        $('#header_1').attr('class','card-header bgm-orange');
      }
      else if($('#board_links_attributes_1_url').val().match(/.\s./)){
        $('#board_links_attributes_1_kind').attr('value',5)
        $('#header_1').attr('class','card-header bgm-green');
      }
      else {
        $('#header_1').attr('class','card-header bgm-black');
        $('#board_links_attributes_1_kind').attr('value',1)
      }
    })

    $('#board_links_attributes_2_url').on('input', function(){
      if($('#board_links_attributes_2_url').val().match(/youtube.com/)){
        $('#board_links_attributes_2_kind').attr('value',2);
        $('#header_2').attr('class','card-header bgm-red');
      }
      else if($('#board_links_attributes_2_url').val().match(/twitter.com/)){
        $('#board_links_attributes_2_kind').attr('value',3)
        $('#header_2').attr('class','card-header bgm-blue');
      }
      else if($('#board_links_attributes_2_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_2_kind').attr('value',4)
        $('#header_2').attr('class','card-header bgm-orange');
      }
      else if($('#board_links_attributes_2_url').val().match(/.\s./)){
        $('#board_links_attributes_2_kind').attr('value',5)
        $('#header_2').attr('class','card-header bgm-green');
      }
      else {
        $('#header_2').attr('class','card-header bgm-black');
        $('#board_links_attributes_2_kind').attr('value',1)
      }
    })

    $('#board_links_attributes_3_url').on('input', function(){
      if($('#board_links_attributes_3_url').val().match(/youtube.com/)){
        $('#board_links_attributes_3_kind').attr('value',2);
        $('#header_3').attr('class','card-header bgm-red');
      }
      else if($('#board_links_attributes_3_url').val().match(/twitter.com/)){
        $('#board_links_attributes_3_kind').attr('value',3)
        $('#header_3').attr('class','card-header bgm-blue');
      }
      else if($('#board_links_attributes_3_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_3_kind').attr('value',4)
        $('#header_3').attr('class','card-header bgm-orange');
      }
      else if($('#board_links_attributes_3_url').val().match(/.\s./)){
        $('#board_links_attributes_3_kind').attr('value',5)
        $('#header_3').attr('class','card-header bgm-green');
      }
      else {
        $('#header_3').attr('class','card-header bgm-black');
        $('#board_links_attributes_3_kind').attr('value',1)
      }
    })

    $('#board_links_attributes_4_url').on('input', function(){
      if($('#board_links_attributes_4_url').val().match(/youtube.com/)){
        $('#board_links_attributes_4_kind').attr('value',2);
        $('#header_4').attr('class','card-header bgm-red');
      }
      else if($('#board_links_attributes_4_url').val().match(/twitter.com/)){
        $('#board_links_attributes_4_kind').attr('value',3)
        $('#header_4').attr('class','card-header bgm-blue');
      }
      else if($('#board_links_attributes_4_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_4_kind').attr('value',4)
        $('#header_4').attr('class','card-header bgm-orange');
      }
      else if($('#board_links_attributes_4_url').val().match(/.\s./)){
        $('#board_links_attributes_4_kind').attr('value',5)
        $('#header_4').attr('class','card-header bgm-green');
      }
      else {
        $('#header_4').attr('class','card-header bgm-black');
        $('#board_links_attributes_4_kind').attr('value',1)
      }
    })

    $('#board_links_attributes_5_url').on('input', function(){
      if($('#board_links_attributes_5_url').val().match(/youtube.com/)){
        $('#board_links_attributes_5_kind').attr('value',2);
        $('#header_5').attr('class','card-header bgm-red');
      }
      else if($('#board_links_attributes_5_url').val().match(/twitter.com/)){
        $('#board_links_attributes_5_kind').attr('value',3)
        $('#header_5').attr('class','card-header bgm-blue');
      }
      else if($('#board_links_attributes_5_url').val().match(/soundcloud.com/)){
        $('#board_links_attributes_5_kind').attr('value',4)
        $('#header_5').attr('class','card-header bgm-orange');
      }
      else if($('#board_links_attributes_5_url').val().match(/.\s./)){
        $('#board_links_attributes_5_kind').attr('value',5)
        $('#header_5').attr('class','card-header bgm-green');
      }
      else {
        $('#header_5').attr('class','card-header bgm-black');
        $('#board_links_attributes_5_kind').attr('value',1)
      }
    })

//embedly convert regular weblinks

    $('#web_link_0 a').embedly({
      key: '741dc243a6a64724b3e8e186e8cc0fca',
      query: {maxheight:250} 
    });

    setTimeout(function changeIframeWidth(){
      $('#web_link_0 > div > iframe').attr('width', '100%');
    }, 300);

    $('#web_link_1 a').embedly({
      key: '741dc243a6a64724b3e8e186e8cc0fca',
      query: {maxheight:250} 
    });

    setTimeout(function changeIframeWidth(){
      $('#web_link_1 > div > iframe').attr('width', '100%');
    }, 300);

    $('#web_link_2 a').embedly({
      key: '741dc243a6a64724b3e8e186e8cc0fca',
      query: {maxheight:250} 
    });

    setTimeout(function changeIframeWidth(){
      $('#web_link_2 > div > iframe').attr('width', '100%');
    }, 300);

    $('#web_link_3 a').embedly({
      key: '741dc243a6a64724b3e8e186e8cc0fca',
      query: {maxheight:250} 
    });

    setTimeout(function changeIframeWidth(){
      $('#web_link_3 > div > iframe').attr('width', '100%');
    }, 300);

    $('#web_link_4 a').embedly({
      key: '741dc243a6a64724b3e8e186e8cc0fca',
      query: {maxheight:250} 
    });

    setTimeout(function changeIframeWidth(){
      $('#web_link_4 > div > iframe').attr('width', '100%');
    }, 300);

    $('#web_link_5 a').embedly({
      key: '741dc243a6a64724b3e8e186e8cc0fca',
      query: {maxheight:250} 
    });

    setTimeout(function changeIframeWidth(){
      $('#web_link_5 > div > iframe').attr('width', '100%');
    }, 300);


//color index page buttons
    $('.index_button_1').attr('class', 'btn btn-default waves-effect waves-button waves-float')
    $('.index_button_2').attr('class', 'btn btn-danger waves-effect waves-button waves-float')
    $('.index_button_3').attr('class', 'btn btn-info waves-effect waves-button waves-float')
    $('.index_button_4').attr('class', 'btn btn-warning waves-effect waves-button waves-float')
    $('.index_button_5').attr('class', 'btn btn-success waves-effect waves-button waves-float')


//format soundcloud
    $.getJSON('http://soundcloud.com/oembed?callback=?',
    {format: 'js', url: $('iframe#soundcloud_0').attr('src'), iframe: true, maxheight: 250, show_comments: false},
    function(data) {
        // Stick the html content returned in the object into the page
        var formattedMusic = data['html']
        $('#soundcloud_0').replaceWith(formattedMusic)
    })

    $.getJSON('http://soundcloud.com/oembed?callback=?',
    {format: 'js', url: $('iframe#soundcloud_1').attr('src'), iframe: true, maxheight: 250, show_comments: false},
    function(data) {
        // Stick the html content returned in the object into the page
        var formattedMusic = data['html']
        $('#soundcloud_1').replaceWith(formattedMusic)
    })


        $.getJSON('http://soundcloud.com/oembed?callback=?',
    {format: 'js', url: $('iframe#soundcloud_2').attr('src'), iframe: true, maxheight: 250, show_comments: false},
    function(data) {
        // Stick the html content returned in the object into the page
        var formattedMusic = data['html']
        $('#soundcloud_2').replaceWith(formattedMusic)
    })

        $.getJSON('http://soundcloud.com/oembed?callback=?',
    {format: 'js', url: $('iframe#soundcloud_3').attr('src'), iframe: true, maxheight: 250, show_comments: false},
    function(data) {
        // Stick the html content returned in the object into the page
        var formattedMusic = data['html']
        $('#soundcloud_3').replaceWith(formattedMusic)
    })

        $.getJSON('http://soundcloud.com/oembed?callback=?',
    {format: 'js', url: $('iframe#soundcloud_4').attr('src'), iframe: true, maxheight: 250, show_comments: false},
    function(data) {
        // Stick the html content returned in the object into the page
        var formattedMusic = data['html']
        $('#soundcloud_4').replaceWith(formattedMusic)
    })

        $.getJSON('http://soundcloud.com/oembed?callback=?',
    {format: 'js', url: $('iframe#soundcloud_5').attr('src'), iframe: true, maxheight: 250, show_comments: false},
    function(data) {
        // Stick the html content returned in the object into the page
        var formattedMusic = data['html']
        $('#soundcloud_5').replaceWith(formattedMusic)
    })

//show link input field on button click
    $('#button_0').click(function(event){
      event.preventDefault();
      $('#button_0').slideUp();
      $('#show_the_field_0').attr('style','visibility: visible;padding-top:100px;')
    })

    $('#button_1').click(function(event){
      event.preventDefault();
      $('#button_1').slideUp();
      $('#show_the_field_1').attr('style','visibility: visible;padding-top:100px;')
    })

    $('#button_2').click(function(event){
      event.preventDefault();
      $('#button_2').slideUp();
      $('#show_the_field_2').attr('style','visibility: visible;padding-top:100px;')
    })

    $('#button_3').click(function(event){
      event.preventDefault();
      $('#button_3').slideUp();
      $('#show_the_field_3').attr('style','visibility: visible;padding-top:100px;')
    })

    $('#button_4').click(function(event){
      event.preventDefault();
      $('#button_4').slideUp();
      $('#show_the_field_4').attr('style','visibility: visible;padding-top:100px;')
    })

    $('#button_5').click(function(event){
      event.preventDefault();
      $('#button_5').slideUp();
      $('#show_the_field_5').attr('style','visibility: visible;padding-top:100px;')
    })


//search function
    $('#search-submit').click(function(event){
      // event.preventDefault();
      var url = window.location.href + "search";
      $.ajax({
      type: 'POST',
      url: url,
      success: function(results){
      },
      dataType: 'JSON'
    })
    })





});