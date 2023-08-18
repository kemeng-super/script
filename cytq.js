/*************************************

项目名称：彩云天气-净化/SVIP


**************************************

[rewrite_local]
^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/kemeng-super/script/main/cytq.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, adx.sogaha.cn

*************************************/


var body = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';

if ($request.url.indexOf(vip) != -1){
    body.vip = {
        "expires_time" : "253402185600",
        "is_auto_renewal" : true
      };
    body.svip = {
        "expires_time" : "253402185600",
        "is_auto_renewal" : true
      };
}

if ($request.url.indexOf(adhf) != -1){
    body.activities = [];
}

if ($request.url.indexOf('user') != -1){
    body.result.ranking_above = 99;
    body.result.is_vip = true;
    body.result.vip_expired_at = 253402185600.0;
    body.result.svip_given = 9999;
    body.result.is_xy_vip = true;
    body.result.xy_svip_expire = 253402185600.0; 
    body.result.wt.vip = {
        "auto_renewal_type" : "",
        "expired_at" : 0,
        "enabled" : true,
        "svip_apple_expired_at" : 253402185600.0,
        "is_auto_renewal" : true,
        "svip_expired_at" : 253402185600.0,
        "svip_auto_renewal_type" : ""
      };
    body.result.wt.svip_given = 9999;
    body.result.wt.ranking_above = 99;
    body.result.is_phone_verified = true;
    body.result.name = "萌分享";
    body.result.avatar = "https://thirdqq.qlogo.cn/g?b=oidb&k=MSLGWXkToianH0ZVz8fImaQ&kti=Y3g0NAAAAAI&s=100&t=1596802531";
    body.result.phone_num = "12345678910";
    body.result.vip_take_effect = 1;
    body.result.is_primary = true;
    body.result.xy_vip_expire = 253402185600.0;
    body.result.svip_expired_at = 253402185600.0;
    body.result.svip_take_effect = 1;
    body.result.vip_type = "s";
    body.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
}

$done({ body: JSON.stringify(body)});



