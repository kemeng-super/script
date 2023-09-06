/*************************************

 项目名称：3d4medical-vip


 **************************************

 [rewrite_local]
 ^https:\/\/ca\.3d4medical\.com\/api\/v13\/users\/info url script-response-body https://raw.githubusercontent.com/kemeng-super/script/main/3d4medical.js

 [mitm]
 hostname = ca.3d4medical.com

 *************************************/


var body = JSON.parse($response.body);
body.bypasses = [
    {
        "expire_ts": "1695187682",
        "expire": "9999-12-31 23:59:59",
        "active": true,
        "comment": "ca19_trial",
        "bypass_type": "ca19_trial"
    }
]
body.licenses = [
    {
        "bundle": "ca19.trial",
        "expire": "9999-12-31T15:59:59.920747Z",
        "active": true,
        "source": null,
        "offer": "",
        "in_billing_retry": false,
        "store": "manual"
    }
]
body.permissions = {
    "embeds_maker": true,
    "lecture_maker": true,
    "lecture_reviewer": true,
    "video_converter": true,
    "recording_publisher": true
}
body.bypass = {
    "expire_ts" : "1695187682",
    "expire" : "9999-12-31 23:59:59",
    "active" : true,
    "comment" : "ca19_trial",
    "bypass_type" : "ca19_trial"
}
body.products={
    "ca19.trial" : {
        "active" : true,
        "expire_dt" : "9999-12-31 23:59:59",
        "expire_ts" : "1695187682"
    },
    "bypass" : {
        "active" : true,
        "expire_dt" : "9999-12-31 23:59:59",
        "comment" : "ca19_trial",
        "expire_ts" : "1695187682"
    }
}

$done({body: JSON.stringify(body)});



