    /*The js file for basic operations in index.hrml file*/

    $(document).ready(function(){
      /*On loading the document for the first time only 'chatInbox section' is visible*/
      $("#profileView").hide();
      $(".chatWindow").hide();

      /*On clicking on profile picture in 'chatinbox view' the profile view will be visible 
      and 'chatInbox' will disappear */
      $("#DP").click(function(){
        $("#chatInbox").fadeOut();
        $("#profileView").fadeIn();
      });

      /*on clicking 'back' (<-left arrow button) from Profile view, chatInbox will be visible
      and profileView will disappear*/

      $("#back").click(function() {
        $("#chatInbox").fadeIn();
        $("#profileView").fadeOut();
      });

      /*on clicking 'back' (<-left arrow button) from chatwindow view, chatInbox will be visible
      and chatwindow will disappear*/

      $("#backfromChatWindow").click(function() {
        $("#chatInbox").show();
        $(".chatWindow").hide();   
      });
 
      /*On clicking chat1, chat 2 or chat3 their respective infromation will be displayed
      inside the chatWindow by hiding chatInbox*/
      $("#chats1").click(function(){
        $(".talk-bubble-me").css("top","40%");
        $("#chatWindContactDP").attr("src",($("#chatInboxDP1").attr("src")));
        $("#chatWindContactName").text($("#chatInboxName1").text());
        $("#chatwith").text($("#chatInboxName1").text());
        $("#chatWindmessage").text($("#chatInboxmessage1").text());
        $("#chatWindmessageMe").text("Have fun!!")
        $("#chatWindTime").text($("#chatInboxTime1").text());
        $("#chatWindTimeMe").text("08:30PM");
        $(".chatWindLastSeen").text("Anand Kale, Balaji, Chetan Chumble, Yogesh Arak");
        $(".GroupContactname").text($("#InboxGroupContactName").text());
        $("#chatInbox").hide();
        $(".newMessage").show();
        $(".chatWindow").show();
      });


      $("#chats2").click(function(){
        $(".talk-bubble-me").css("top","40%");
        $("#chatWindContactDP").attr("src",($("#chatInboxDP2").attr("src")));
        $("#chatWindContactName").text($("#chatInboxName2").text());
        $("#chatwith").text($("#chatInboxName2").text());
        $("#chatWindmessage").text($("#chatInboxmessage2").text());
        $("#chatWindmessageMe").text("Hello!!!");
        $("#chatWindTime").text($("#chatInboxTime2").text());
        $("#chatWindTimeMe").text("09:15PM");
        $(".chatWindLastSeen").text("Last seen today at 09:31PM");
        $(".GroupContactname").text("");
        $("#chatInbox").hide();
        $(".newMessage").show();
        $(".chatWindow").show();
      });
      
      $("#chats3").click(function(){
        $(".talk-bubble-me").css("top","50%");
        $("#chatWindContactDP").attr("src",($("#chatInboxDP3").attr("src")));
        $("#chatWindContactName").text($("#chatInboxName3").text());
        $("#chatwith").text($("#chatInboxName3").text());
        $("#chatWindmessage").text($("#chatInboxmessage3").text());
        $("#chatWindmessageMe").text("Where are you?")
        $("#chatWindTime").text($("#chatInboxTime3").text());
        $("#chatWindTimeMe").text("07:45PM");
        $(".chatWindLastSeen").text("Last seen today at 08:02PM");
        $(".GroupContactname").text("");
        $("#chatInbox").hide();
        $(".newMessage").hide();
        $(".chatWindow").show();
      });   
    });
    /*End of the file*/