/*************************************

项目名称：万源阅读——解锁VIP
脚本作者：萌
更新时间：2023-8-14
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/kemeng-super/script/main/wyyd.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var obj= {
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 6446446808,
    "receipt_creation_date" : "2023-08-15 04:23:38 Etc/GMT",
    "bundle_id" : "com.lmf.wext",
    "original_purchase_date" : "2023-08-15 03:18:08 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1692073417000",
        "expires_date" : "9999-12-31 23:59:59 Etc\/GMT",
        "expires_date_pst" : "9999-12-31 23:59:59 America\/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "600001301145215",
        "is_trial_period" : "false",
        "original_transaction_id" : "600001301145215",
        "purchase_date" : "2023-08-15 04:23:37 Etc/GMT",
        "product_id" : "com.lmf.wext.year",
        "original_purchase_date_pst" : "2023-08-14 21:23:38 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1692073418000",
        "web_order_line_item_id" : "600000591584666",
        "expires_date_ms" : "253402185600000",
        "purchase_date_pst" : "2023-08-14 21:23:37 America/Los_Angeles",
        "original_purchase_date" : "2023-08-15 04:23:38 Etc/GMT"
      }
    ],
    "adam_id" : 6446446808,
    "receipt_creation_date_pst" : "2023-08-14 21:23:38 America/Los_Angeles",
    "request_date" : "2023-08-15 04:26:56 Etc/GMT",
    "request_date_pst" : "2023-08-14 21:26:56 America/Los_Angeles",
    "version_external_identifier" : 859133165,
    "request_date_ms" : "1692073616654",
    "original_purchase_date_pst" : "2023-08-14 20:18:08 America/Los_Angeles",
    "application_version" : "1",
    "original_purchase_date_ms" : "1692069488000",
    "receipt_creation_date_ms" : "1692073418000",
    "original_application_version" : "1",
    "download_id" : 502695058337677744
  },
  "pending_renewal_info" : [
    {
      "product_id" : "com.lmf.wext.year",
      "original_transaction_id" : "600001301145215",
      "auto_renew_product_id" : "com.lmf.wext.year",
      "auto_renew_status" : "0"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1692073417000",
      "expires_date" : "2023-08-18 04:23:37 Etc/GMT",
      "expires_date_pst" : "2023-08-17 21:23:37 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "600001301145215",
      "is_trial_period" : "true",
      "original_transaction_id" : "600001301145215",
      "purchase_date" : "2023-08-15 04:23:37 Etc/GMT",
      "product_id" : "com.lmf.wext.month",
      "original_purchase_date_pst" : "2023-08-14 21:23:38 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21355328",
      "original_purchase_date_ms" : "1692073418000",
      "web_order_line_item_id" : "600000591584666",
      "expires_date_ms" : "253402185600000",
      "purchase_date_pst" : "2023-08-14 21:23:37 America/Los_Angeles",
      "original_purchase_date" : "2023-08-15 04:23:38 Etc/GMT"
    }
  ]
};

$done({body: JSON.stringify(obj)});