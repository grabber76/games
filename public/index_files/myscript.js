function spawnNotification(n,t,i,r){var u={body:n,icon:"http://go.win/Content/images/template/logo.png"},f=new Notification(i,u);f.onclick=function(n){n.preventDefault();window.open(r,"_blank");window.focus()}}function ConvertAmount(n,t){if(n==null||n==0)return"0";var i=parseInt(n)+"";return i.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,t)}function openTX(){$("#modalgametx").click()}function showJackpotByAmount(n,t){$("#btnJackpot1").removeClass("active");$("#btnJackpot2").removeClass("active");$("#btnJackpot3").removeClass("active");$("#jackpot1").css("display","none");$("#jackpot2").css("display","none");$("#jackpot3").css("display","none");$(n).addClass("active");$(t).css("display","block")}function showFuntionComing(){myScript.showNotifyAlert("Thông báo","Tính năng đang tạm khóa.!")}function showAlertMaintain(){myScript.showNotifyAlert("Thông báo","Trò chơi đang được bảo trì. Chúng tôi còn rất nhiều trò chơi hấp dẫn khác. Vui lòng chọn trò chơi khác để trải nghiệm!")}function goGameCommingSon(){myScript.showNotifyAlert("Thông báo","Trò chơi đang trong quá trình hoàn thiện. Chúng tôi còn rất nhiều trò chơi hấp dẫn khác. Vui lòng chọn trò chơi khác để trải nghiệm!")}function showGameInJackpot(n){switch(n){case 1:$("#modalgamebc").click();break;case 3:$("#modalgamesx").click();break;case 4:$("#modalgamepoker").click();break;case 5:$("#modaldaquy").click();break;case 1013:window.location.href="http://go.win/vi/playcards/gotogame/13";break;case 1006:window.location.href="http://go.win/vi/playcards/gotogame/6";break;case 1003:window.location.href="http://go.win/vi/playcards/gotogame/3"}}function setDataJackpot(n){var t=JSON.parse(n);$.each(t,function(n,t){var r=$("#miniGame_"+t.Id).text().replace(/\,/g,""),i;$(".hugo_miniGame_"+t.Id).each(function(){$(this).prop("Counter",r).animate({Counter:t.Amount},{duration:4e3,easing:"swing",step:function(n){$(this).text(Math.ceil(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}})});i=".jackpot_"+t.GameType+"_"+t.RoomBet;t.Multiple>1?($(i).length&&($("#x_jackpot_game_"+t.GameType).removeClass("hidden"),$("#x_jackpot_game_"+t.GameType).addClass("sk-x"+t.Multiple+"game")),$("#x_jackpot_"+t.Id).attr("class",""),$("#x_jackpot_"+t.Id).addClass("sk-x"+t.Multiple+"game")):($(i).length&&$("#x_jackpot_game_"+t.GameType).addClass("hidden"),$("#x_jackpot_"+t.Id).addClass("hidden"));$(i).each(function(){var n=$(i).text().replace(/\,/g,"");$(this).prop("Counter",n).animate({Counter:t.Amount},{duration:4e3,easing:"swing",step:function(n){$(this).text(Math.ceil(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}})})})}var LockedChat=1,chip=[1,2,5,10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4,1e5,2e5,5e5,1e6,2e6,5e6,1e7,2e7,5e7,1e8],vipNameArr=["Đá","Đồng","Bạc","Vàng","Bạch Kim","Kim Cương","Ngọc Bảo"],myScript={},radixPoint,groupSeparator;$(document).ready(function(){$(".wp-boxjackpot").hide();$(".minijackpot-button").click(function(){$(".wp-boxjackpot").toggle()});$("#close_mg_boxjackpot").click(function(){$(".wp-boxjackpot").hide()})});myScript.showNotify=function(n){$("#modal_notify_body").html(n);$("#modal_notify").modal()};myScript.GoGame=function(){$.ajax({type:"POST",url:"/vi/loto/GoLoto",success:function(n){$("#divLoading").hide();n!==""?window.open(n,"_blank"):myScript.showNotify("Hệ thống hiện đang bảo trì! Trong thời gian chờ đợi xin vui lòng trải nghiệm những trò chơi khác của chúng tôi.")},error:function(){$("#divLoading").hide()}})};myScript.GoPlayCardGame=function(n){$.ajax({type:"POST",url:"/vi/playcards/GotoGame",data:{gameID:n},success:function(n){$("#divLoading").hide();n!==""?window.open(n,"_blank"):myScript.showNotify("Hệ thống hiện đang bảo trì! Trong thời gian chờ đợi xin vui lòng trải nghiệm những trò chơi khác của chúng tôi.")},error:function(){$("#divLoading").hide()}})};myScript.formatDateTime=function(n){return moment(n).format("DD/MM/YYYY HH:mm:ss")};myScript.showNotifyAlert=function(n,t){$("#contentAlert").html(t);mdAlert.open()};myScript.showNotifyAlertHtml=function(n,t){$("#contentAlert").html(t);mdAlert.open()};myScript.refreshMoney=function(){$.ajax({type:"POST",url:"/vi/usermoney/GetUserMoneyByWalletMain",success:function(n){$("#lblCurrentMoney").text(n);$("#lblCurrentMoneyTooltip").text(n)},global:!1,error:function(){}})};myScript.fillMoney=function(n){$("#lblCurrentMoney").text(n);$("#lblCurrentMoneyTooltip").text(n)};myScript.RenderDatePicker=function(){$("#datetimepicker1").datepicker({viewMode:"years",locale:"vi",format:"dd/mm/yyyy"})};myScript.formatDate=function(n){return moment(n).format("DD/MM/YYYY")};myScript.showLoading=function(n){n?$("#divLoading").show():$("#divLoading").hide()};jQuery(document).ajaxStart(function(){myScript.showLoading(!0)});jQuery(document).ajaxComplete(function(){myScript.showLoading(!1)});myScript.Ajax=function(n,t,i){jQuery.ajax({url:n,data:t,type:"POST",success:function(n){i(n)},error:function(n){console.log("Lỗi không xác định "+n.status+" "+n.statusText)}})};myScript.AjaxNoLoading=function(n,t,i){jQuery.ajax({url:n,data:t,type:"POST",global:!1,success:function(n){i(n)},error:function(n){console.log("Lỗi không xác định "+n.status+" "+n.statusText)}})};myScript.UploadFile=function(n,t,i){jQuery.ajax({url:n,data:t,type:"POST",proccessData:!1,contentType:!1,success:function(n){i(n)},error:function(n){console.log("Lỗi không xác định "+n.status+" "+n.statusText)}})};myScript.AjaxGet=function(n,t){jQuery.ajax({url:n,type:"GET",success:function(n){t(n)},error:function(n){console.log("Lỗi không xác định "+n.status+" "+n.statusText)}})};myScript.SyncAjaxGet=function(n,t){jQuery.ajax({async:!1,url:n,type:"GET",success:function(n){t(n)},error:function(n){console.log("Lỗi không xác định "+n.status+" "+n.statusText)}})};myScript.SyncAjaxGetNotLoading=function(n,t){jQuery.ajax({async:!1,url:n,global:!1,type:"GET",success:function(n){t(n)},error:function(n){console.log("Lỗi không xác định "+n.status+" "+n.statusText)}})};myScript.SyncAjaxPost=function(n,t,i){jQuery.ajax({async:!1,url:n,data:t,type:"POST",success:function(n){i(n)},error:function(n){console.log("Lỗi không xác định "+n.status+" "+n.statusText)}})};myScript.OpenNotifiaction=function(n,t,i){myScript.AjaxGet(t+"/?NotificationId="+i,function(t){bootbox.dialog({message:t.notification.Body,title:t.notification.Subject+" - Người gửi: "+t.notification.SenderName,buttons:{close:{label:"Đóng",className:"btn blue",callback:function(){}}}});myScript.UpdateNotification(n)})};myScript.UpdateNotification=function(n){myScript.SyncAjaxGetNotLoading(n+"/?token="+(new Date).getTime(),function(n){var t=$("#notification-ul");t.empty();n.total!==""&&n.total>0?(jQuery("#message_count").text(n.total),jQuery("#message_count").show()):(jQuery("#message_count").text(0),jQuery("#message_count").hide())})};radixPoint=".";groupSeparator=",";myScript.formatNumber=function(n){n.inputmask("decimal",{radixPoint:radixPoint,autoGroup:!0,groupSeparator:groupSeparator,groupSize:3})};myScript.getRightNumberValueOfElement=function(n){var t=n.val().split(""),i="";return $.each(t,function(n,r){n==t.length-1&&isNaN(r)||r.toString()!=groupSeparator&&(r.toString()==radixPoint&&(r="."),i+=r.toString())}),i};myScript.notifyMessage=function(n,t,i){Notification.permission==="granted"?spawnNotification(t,"",n,i):new jBox("Notice",{content:t,color:"white",autoClose:5e3})};Notification.requestPermission().then(function(){});myScript.numberWithCommas=function(n){n=n.toString();for(var t=/^(-?\d+)(\d{3})/;t.test(n);)n=n.replace(t,"$1,$2");return n};new jBox("Modal",{id:"myModal_chat",attach:$("#onchat"),overlay:!1,createOnInit:!1,content:$("#myModal_chat"),draggable:$(".chat-header"),repositionOnOpen:!1,repositionOnContent:!1,offset:{x:-120,y:-130},position:{x:"right",y:"bottom"},zIndex:12345})