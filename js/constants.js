/**
 *
 * Created by noam on 14/06/14.
 */

var MARK_SHORT_CUT = "Alt+Shift+Q";
var CLOSE_BOX_TIMEOUT = 10000; //4 sec
var BOX_IN_SPEED = 100; //0.1 sec
var BOX_OUT_SPEED = 500; //0.5 sec
var DB_SERVER = "http://ec2-54-201-117-105.us-west-2.compute.amazonaws.com/";
var GET_ALL_WORDS_METHOD = "1.php";
var SAVE_WORD_METHOD = "2.php";
var ADD_THEME_METHOD = "3.php";
var LOAD_THEMES_METHOD = "4.php";
var SHOW_ALL_WORD_HTML = "5.php";
var GET_THEME_WORDS = "6.php";
var DELETE_WORD = "7.php";
var SET_CHECKED = "8.php";
var SET_GOOD = "9.php";
var SET_BAD = "10.php";
var SET_GREEN_FLAG = "11.php";

// Strings
var ADDED_TO_DB_TEXT = ".המילה התווספה למאגר";
var POPUP_HELP_TEXT_1 = "double click on any word in the page";
var POPUP_HELP_TEXT_2 = "mark adjacent words and use " + MARK_SHORT_CUT;

// Images
var BOX_CLOSE_IMAGE = "img/cross-circle.png";
var BOX_SAVE_WORD_IMAGE = "img/disk-red.png";
var BOX_SAVE_AND_HIGHLIGHT_IMAGE = "img/16.png";
var POPUP_THEME_ICON = "img/theme_icon.png";
var OPTIONS_THEME_DELETE_ICON = "img/trash10.png";
var OPTIONS_THEME_CHECKED_ICON = "img/checked.png";
var OPTIONS_THEME_NOT_CHECKED_ICON = "img/checked_gray.png";
var OPTIONS_THEME_PLUS_ICON = "img/plus.png";
var OPTIONS_THEME_MINUS_ICON = "img/minus.png";
var OPTIONS_THEME_GREEN_FLAG_ICON = "img/learning-flag-green.png";
var ICON_GRADUATED = "img/graduation.png";

// POPUP
var LANGUAGE_SEPERATOR_COLOR = "#FF9966";

//var LANGUAGE_DETECT_URL = "https://translate.google.com/translate_a/single?client=t&sl=auto&tl=iw&hl=en&dt=bd&dt=ex&dt=ld&dt=md&dt=qc&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&oc=1&prev=conf&psl=en&ptl=iw&otf=1&it=sel.3016&ssel=3&tsel=0&q=";
var LANGUAGE_DETECT_URL = "https://translate.google.com/translate_a/single?client=t&sl=auto&q=";
