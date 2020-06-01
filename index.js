var Comm100API=Comm100API||{};(function(t){function e(e){var a=document.createElement("script"),c=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=e+t.site_id,c.parentNode.insertBefore(a,c)}t.chat_buttons=t.chat_buttons||[],t.chat_buttons.push({code_plan:65,div_id:"comm100-button-65"}),t.site_id=1000531,t.main_code_plan=65,e("https://vue.comm100.com/livechat.ashx?siteId="),setTimeout(function(){t.loaded||e("https://standby.comm100vue.com/livechat.ashx?siteId=")},5e3)})(Comm100API||{})

document.addEventListener('DOMContentLoaded', function(event) {
    var Comm100Button = document.createElement("div");
    Comm100Button.setAttribute("id", "comm100-button-65");
    console.log("input button");
    console.log(Comm100Button);
    document.body.appendChild(Comm100Button);
    console.log(document.getElementById("comm100-button-65"));
}); 
