<html>
  <head>
    <!--<link rel="shortcut icon" href="http://sstatic.net/stackoverflow/img/favicon.ico">-->
    <link rel="shortcut icon" href="img/popup_icon.png">
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>-->
    <!--<script src="js/jquery/jquery-1.10.2.js"></script>-->
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <script src="js/constants.js"></script>
    <script src="js/options.js"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <!--<link rel="stylesheet" href="css/bootstrap3.2.0.css">-->
    <!-- Optional: Include the jQuery library -->
    <!-- Optional: Incorporate the Bootstrap JavaScript plugins -->
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <!--<script src="js/bootstrap/bootstrap.min.js"></script>-->
    <script src="js/bootbox.min.js"></script>
    <link rel="stylesheet" href="css/options.css">
  </head>
  <body style="font-size:50px;">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <!--<label>Wordy Dictionary ~ V3.0</label>-->
          <!--<img class="main_icon" src="img/theme_icon.png" type="image"/><label>Choose Theme</label>-->
          <img id="switch_gray" style="display:none" class="icons_style main_icon" src="img/switch.png" type="image"/>
          <img id="back" style="height:200px; float:left; display:none" class="" src="img/back.png" type="image"/>
          <img id="switch" class="icons_style main_icon" src="img/switch_gray.png" type="image"/>
          <!--<select id="theme_select_multiple" class="select_style col-xs-12"></select>-->
	  <ul id="theme_packages_list" class="list-group col-xs-12">
	    <li class="list-group-item">package 1<input src="img/pinIn.png" style="float:right" type="image"/></li>
	  </ul>
          <span id="add_theme_result"></span>
	  <div class="col-xs-4"></div>
          <img id="ajax_loader" style="display:none" class="col-xs-4 text-center" src="img/ajax_loader_2.gif" type="image"/>
	  <div class="col-xs-4"></div>
	  <ul id="theme_list" class="list-group col-xs-12">
	    <!--<li class="list-group-item">noam<input src="img/pinIn.png" style="float:right" type="image"/></li>-->
	  </ul>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </body>
</html>
<?php
?>
