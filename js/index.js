    $(document).ready(function(){
      $("#side1").hide();
      $("#default-background-image").show();
      $(".chatWindow").hide();

      $("#DP").click(function(){
        $("#chatInbox").fadeOut();
        $("#side1").fadeIn();
      });

      $("#back").click(function() {
        $("#chatInbox").fadeIn();
        $("#side1").fadeOut();

      });
      $("#backfromChatWindow").click(function() {
        $("#chatInbox").show();
        $(".chatWindow").hide();      
      });
 
      $("#chats1").click(function(){
        $("#default-background-image").hide();
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
        $("#default-background-image").hide();
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
        $("#default-background-image").hide();
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
