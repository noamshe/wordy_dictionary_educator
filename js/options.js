$(function () {

  $('#switch').bind('click', function (event) {
    $("#switch").hide();
    $("#switch_gray").show();
    // tbd the logic
  });
  $('#switch_gray').bind('click', function (event) {
    $("#switch_gray").hide();
    $("#switch").show();
    // tbd the logic
  });

  setChecked = function (id, checked) {
    $.ajax({
      type: "POST",
      url: DB_SERVER + SET_CHECKED,
      data: "id=" + id + "&checked=" + checked,
      dataType: "text",
      success: function (result) {
      }
    });
  }

  setGood = function (id, value) {
    $.ajax({
      type: "POST",
      url: DB_SERVER + SET_GOOD,
      data: "id=" + id + "&good=" + value,
      dataType: "text",
      success: function (result) {
      }
    });
  }

  setBad = function (id, value) {
    $.ajax({
      type: "POST",
      url: DB_SERVER + SET_BAD,
      data: "id=" + id + "&bad=" + value,
      dataType: "text",
      success: function (result) {
      }
    });
  }

  setGreenFlag = function (id) {
    $.ajax({
      type: "POST",
      url: DB_SERVER + SET_GREEN_FLAG,
      data: "id=" + id,
      dataType: "text",
      success: function (result) {
      }
    });
  }

  deleteWord = function(id) {
    $.ajax({
      type: "POST",
      url: DB_SERVER + DELETE_WORD,
      data: "id=" + id,
      dataType: "text",
      success: function (result) {
        $("#li_" + id).remove();
      }
    });
  }

  hasAlphabetical = function (txt) {
    var matchedPosition = txt.search(/[a-z]/i);
    if(matchedPosition != -1) {
      return true;
    }
    return false;
  }

  updateProgressBar = function (id) {
    var clazz = "";
    var good = parseInt($("#progress_" + id).data("good"));
    var bad = parseInt($("#progress_" + id).data("bad"));
    var value  = good / (good + bad) * 100;

    if (value > 90) {
      clazz = "progress-bar-success";
    } else if (value > 30) {
      clazz = "progress-bar-warning";
    } else {
      clazz = "progress-bar-danger";
    }
    $("#progress_" + id).removeClass("progress-bar-success");
    $("#progress_" + id).removeClass("progress-bar-warning");
    $("#progress_" + id).removeClass("progress-bar-danger");

    if (good + bad > 0) {
      $("#progress_" + id).addClass(clazz);
      $('#progress_' + id).css('width', value + '%');
    } else {
      $('#progress_' + id).css('width', '0%');
    }
  }
  // loading themes
  loadThemes = function () {
    $('#theme_select_multiple').empty();
    $.ajax({
      type: "POST",
      url: DB_SERVER + LOAD_THEMES_METHOD,
      dataType: "text",
      success: function (result) {
        console.log(result);
        var result = JSON.parse(result);
        console.log(result[1]);
        var themes_select = $("#theme_select_multiple");
        for (var key in result) {
          if (result.hasOwnProperty(key)) {
            resultObject = result[key];
            console.log("resultObject");
            console.log(resultObject);
            themes_select.append("<option value='" + resultObject.id+ "'>" + resultObject.name + " (" + resultObject.count + ")</option>");
          }
        }
      },
      error: function (result) {
        console.log(result);
      }
    });
  };

  $('#activate_theme_button').bind('click', function () {
    if ($("#activate_theme_button").text() == "Activate Theme") {
      if ($("select option:selected").val() != undefined) {
        activateTheme($("select option:selected").text(), $("select option:selected").val());
      }
    } else {
      deactivateTheme();
    }
  });

  $('#add_word_button').bind('click', function () {
    var theme_id = $("#theme_select_multiple").val();
    var word = $('#word_input').val();
    var definition = $('#definition_input').val();
    //console.log(theme_id + " " + word + " " + definition);
    if (word.length > 0 && definition.length > 0) {
      $('#add_theme_result').text("")
      $.ajax({
        type: "POST",
        url: DB_SERVER + SAVE_WORD_METHOD,
        data: "word=" + word + "&def1=" + definition + "&theme=" + theme_id,
        dataType: "text",
        success: function() {
	  bootbox.alert("Succesfully saved", function() {
    	    $('#word_input').focus();
	  });
        }
      });
    }
  });

  initCheckStatus = function(checked, key) {
    if (checked == 0) {
      $("#check_" + key).hide();
      $("#check_gray_" + key).show();
    } else {
      $("#check_" + key).show();
      $("#check_gray_" + key).hide();
    }
  }

  refresh_list = function(result) {
    var theme_list = $("#theme_list");
    theme_list.empty();
    result = JSON.parse(result);
    console.log(result);
    for (var key in result) {
      if (result.hasOwnProperty(key)) {
        resultObject = result[key];
	var bar = '<div class="progress"><div id="progress_' + key + '" data-good="' + resultObject.good + '" data-bad="' + resultObject.bad + '" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span class="sr-only">80% Complete (danger)</span></div></div>';
        var minusElem = "<img id='minus_" + key + "' data-minus='" + resultObject.checked + "' data-id='" + key + "' src='" + OPTIONS_THEME_MINUS_ICON + "' class='icons_style' type='image' style='float:left; display:" + (resultObject.green_flag == 1 ? "none" : "block") + "'/>";
        var plusElem = "<img id='plus_" + key + "' data-plus='" + resultObject.checked + "' data-id='" + key + "' src='" + OPTIONS_THEME_PLUS_ICON + "' class='icons_style' type='image' style='float:left; display:" + (resultObject.green_flag == 1 ? "none" : "block") + "'/>";
	var circleElem = '<div class="icons_style circle"><p>77</p></div>';
        var checkElem = "<img id='check_" + key + "' data-checked='" + resultObject.checked + "' data-id='" + key + "' src='" + OPTIONS_THEME_CHECKED_ICON + "' class='icons_style' type='image'/>";
        var greenFlag = "<img id='flag_green_" + key + "' data-checked='" + resultObject.checked + "' data-id='" + key + "' src='" + OPTIONS_THEME_GREEN_FLAG_ICON + "' class='icons_style' style='float:none' type='image'/>";
	
        var checkGrayElem = "<img id='check_gray_" + key + "' data-checked='" + resultObject.checked + "' data-id='" + key + "' src='" + OPTIONS_THEME_NOT_CHECKED_ICON + "' class='icons_style' type='image'/>";


	var toAppend = "<li id='li_" + key + "' style='cursor:zoom-in' class='list-group-item'>" + resultObject.word;
	if (resultObject.green_flag == 1) {
	  toAppend += greenFlag 
	}
	toAppend += "<img id='" + key + "' data-id='" + key + "' src='" + OPTIONS_THEME_DELETE_ICON + "' class='icons_style' type='image'/>" + checkElem + checkGrayElem;
	toAppend += plusElem + minusElem 
	toAppend += "</li>";


        theme_list.append(toAppend);
	//var textAlign = is
	//alert(resultObject.definition + " "  +isHebrew(resultObject.definition));
	//var textAlign = isHebrew(resultObject.definition) ? "right" : "left";
	var textAlign = hasAlphabetical(resultObject.definition) ? "left" : "right";
	//var textAlign = "right";
        theme_list.append("<li style='background-color: #FFCD28; text-align:" + textAlign + "; display: none' class='list-group-item'>" + resultObject.definition + "</li>");
	theme_list.append(bar);
	updateProgressBar(key);
	initCheckStatus(resultObject.checked, key);
        $('#li_' + key).bind('click', function (event) {
	  console.log("event: " + event.target.id);
	  if (event.target.id.indexOf("li_") != -1) {
	    if ($("#" + event.target.id).next().is(':visible')) {
	      $("#" + event.target.id).next().hide(600); 
	    } else {
	      $("#" + event.target.id).next().show(600); 
	    }
	  }
        });
        $('#' + key).bind('click', function (event) {
	  bootbox.confirm("Are you sure?", function(result) {
	    if (result == true) {
	      deleteWord(event.target.id);
	    }
	  }); 
        });
        $('#check_' + key).bind('click', function (event) {
	  var id = $("#" + event.target.id).data("id");
	  $("#" + event.target.id).hide();
	  $("#check_gray_" + id).show();
	  setChecked(id, false);
        });
        $('#check_gray_' + key).bind('click', function (event) {
	  var id = $("#" + event.target.id).data("id");
	  $("#" + event.target.id).hide();
	  $("#check_" + id).show();
	  setChecked(id, true);
        });
        $('#plus_' + key).bind('click', function (event) {
	  //$("#" + event.target.id).fadeOut("slow", function() {
	  $("#" + event.target.id).toggle("explode", function() {
	    $("#" + event.target.id).show();
	  });
	  var id = $("#" + event.target.id).data("id");
	  var good = parseInt($("#progress_" + id).data("good")) + 1;
	  $("#progress_" + id).data("good", good);
	  updateProgressBar(id);
	  setGood(id, good);
        });
        $('#minus_' + key).bind('click', function (event) {
	  //$("#" + event.target.id).fadeOut("slow", function() {
	  $("#" + event.target.id).toggle("explode", function() {
	    $("#" + event.target.id).show();
	  });
	  var id = $("#" + event.target.id).data("id");
	  var bad = parseInt($("#progress_" + id).data("bad")) + 1;
	  $("#progress_" + id).data("bad", bad);
	  updateProgressBar(id);
	  setBad(id, bad);
        });
        $('#flag_green_' + key).bind('click', function (event) {
	  var id = $("#" + event.target.id).data("id");
	  $("#" + event.target.id).toggle("explode", function() {
	    console.log("***");
	    console.log(key);
	    console.log(event.target.id);
	    console.log(id);
	    console.log("***");
	    $('#minus_' + id).show();
	    $('#plus_' + id).show();
	  });
	  var id = $("#" + event.target.id).data("id");
	  setGreenFlag(id);
	  var id = $("#" + event.target.id).data("id");
	  var good = parseInt($("#progress_" + id).data("good")) + 1;
	  $("#progress_" + id).data("good", good);
	  updateProgressBar(id);
	  setGood(id, good);
        });
      }
    }
  }

  $("#theme_select_multiple" ).change(function() {
    $("#ajax_loader").show();
    $("#theme_list").empty();
    var theme_id = $("select option:selected").val();
    $.ajax({
      type: "POST",
      url: DB_SERVER + GET_THEME_WORDS,
      data: "theme_id=" + theme_id,
      dataType: "text",
      success: function (result) {
        $("#ajax_loader").hide();
        refresh_list(result);
      }
    });
  });

  loadThemes();
});
