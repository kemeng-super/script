/*************************************

项目名称：彩云天气-净化/SVIP


**************************************

[rewrite_local]
^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyun.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, adx.sogaha.cn

*************************************/


var body = $response.body;
var obj = JSON.parse(body);
if(obj.vip!=null && obj.svip!=null){
    obj.vip = {
        "expires_time" : "253402185600",
        "is_auto_renewal" : true
      };
    obj.svip = {
        "expires_time" : "253402185600",
        "is_auto_renewal" : true
      };
}
    obj.activities = [];
    obj.name="SuperMan";
    obj.avatar="https://thirdqq.qlogo.cn/g?b=oidb&k=MSLGWXkToianH0ZVz8fImaQ&kti=Y3g0NAAAAAI&s=100&t=1596802531";
if(obj.result!=null){

    obj.result.ranking_above = 99;
    obj.result.is_vip = true;
    obj.result.vip_expired_at = 253402185600.0;
    obj.result.svip_given = 9999;
    obj.result.is_xy_vip = true;
    obj.result.xy_svip_expire = 253402185600.0; 
    obj.result.wt.vip = {
        "auto_renewal_type" : "",
        "expired_at" : 0,
        "enabled" : true,
        "svip_apple_expired_at" : 253402185600.0,
        "is_auto_renewal" : true,
        "svip_expired_at" : 253402185600.0,
        "svip_auto_renewal_type" : ""
      };
    obj.result.wt.svip_given = 9999;
    obj.result.wt.ranking_above = 99;
    obj.result.is_phone_verified = true;
    obj.result.name = "SuperMan";
    obj.result.phone_num = "18782852946";
    obj.result.vip_take_effect = 1;
    obj.result.is_primary = true;
    obj.result.xy_vip_expire = 253402185600.0;
    obj.result.svip_expired_at = 253402185600.0;
    obj.result.svip_take_effect = 1;
    obj.result.vip_type = "s";
    obj.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
    obj.result.avatar = "https:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/Q0j4TwGTfTLX62j3MqZu6XRyQS1Y9NW5jeDY2H6aeBBHrztITt4tkJgkAQomCAEWdz5uj5Y1icI7JHQZ3SEqT7Q\/132";
}
$done({body: JSON.stringify(obj)});



