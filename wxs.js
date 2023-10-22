/*************************************
项目名称：wxs阅读——解锁VIP
脚本作者：萌
更新时间：2023-8-14
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/kemeng-super/script/main//wxs.js

[mitm] 
hostname = buy.itunes.apple.com

*******************************/
var obj = JSON.parse($response.body);

obj =
{
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1595241052,
    "receipt_creation_date" : "2023-10-22 03:59:50 Etc/GMT",
    "bundle_id" : "com.shengzhou.fileartifact",
    "original_purchase_date" : "2023-09-02 14:58:07 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1697947188000",
        "expires_date" : "999-10-25 03:59:48 Etc/GMT",
        "expires_date_pst" : "9999-10-24 20:59:48 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "600001361566166",
        "is_trial_period" : "true",
        "original_transaction_id" : "600001361566166",
        "purchase_date" : "2023-10-22 03:59:48 Etc/GMT",
        "product_id" : "com.shengzhou.fileartifact.year",
        "original_purchase_date_pst" : "2023-10-21 20:59:50 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1697947190000",
        "web_order_line_item_id" : "600000622558086",
        "expires_date_ms" : "253392455349000",
        "purchase_date_pst" : "2023-10-21 20:59:48 America/Los_Angeles",
        "original_purchase_date" : "2023-10-22 03:59:50 Etc/GMT"
      }
    ],
    "adam_id" : 1595241052,
    "receipt_creation_date_pst" : "2023-10-21 20:59:50 America/Los_Angeles",
    "request_date" : "2023-10-22 04:02:01 Etc/GMT",
    "request_date_pst" : "2023-10-21 21:02:01 America/Los_Angeles",
    "version_external_identifier" : 857068084,
    "request_date_ms" : "1697947321653",
    "original_purchase_date_pst" : "2023-09-02 07:58:07 America/Los_Angeles",
    "application_version" : "3",
    "original_purchase_date_ms" : "1693666687000",
    "receipt_creation_date_ms" : "1697947190000",
    "original_application_version" : "3",
    "download_id" : 502747394890517959
  },
  "pending_renewal_info" : [
    {
      "product_id" : "com.shengzhou.fileartifact.year",
      "original_transaction_id" : "600001361566166",
      "auto_renew_product_id" : "com.shengzhou.fileartifact.year",
      "auto_renew_status" : "0"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1697947188000",
      "expires_date" : "9999-10-25 03:59:48 Etc/GMT",
      "expires_date_pst" : "9999-10-24 20:59:48 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "600001361566166",
      "is_trial_period" : "true",
      "original_transaction_id" : "600001361566166",
      "purchase_date" : "2023-10-22 03:59:48 Etc/GMT",
      "product_id" : "com.shengzhou.fileartifact.year",
      "original_purchase_date_pst" : "2023-10-21 20:59:50 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20905711",
      "original_purchase_date_ms" : "1697947190000",
      "web_order_line_item_id" : "600000622558086",
      "expires_date_ms" : "253392455349000",
      "purchase_date_pst" : "2023-10-21 20:59:48 America/Los_Angeles",
      "original_purchase_date" : "2023-10-22 03:59:50 Etc/GMT"
    }
  ]
  
}

$done({body : JSON.stringify(obj)});
