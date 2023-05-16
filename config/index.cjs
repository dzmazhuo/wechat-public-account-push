/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  "APP_ID":"wx403546cb0b6380ca",
  "APP_SECRET":"45c64032e28433b2b0139691c2fb6ad7",
  "IS_SHOW_COLOR":true,
  "CALLBACK_TEMPLATE_ID":"",
  "CALLBACK_USERS":
        [
          {
            "name":"自己",
            "id":"ov-Ve5hR1MRCojwF5oqYmSg1tp8M"
          }
        ],
  "USERS":[
    {
      "name":"小叶",
      "id":"ov-Ve5t-9tP70IjLrx5Qx0W4Ow4k",
      "useTemplateId":"	iI7oA526EVOQU546oF66u_xs6yA7CvsxS2czjLBNVLM",
      "province":"河南省",
      "city":"南阳市",
      "horoscopeDate":"03-14",
      "horoscopeDateType":"今日",
      "love_day":"605",
      "marry_day":"605",
      "openUrl":"https://shuangxunian.github.io/",
      "festivals":{
        {
          "type":"节日",
          "name":"星期天",
          "date":"05-20",
          "year":"2023"
        }
      ],
      "customizedDateList":[
        {
          "keyword":"认识的日期",
          "date":"2021-09-18"
        }
      ]
    }
},
  "SWITCH":{
    "weather":true,
    "holidaytts":true,
    "CIBA":true,
    "oneTalk":true,
    "earthyLoveWords":false,
    "momentCopyrighting":false,
    "poisonChickenSoup":false,
    "poetry":false,
    "horoscope":true,
    "birthdayMessage":true
  }}

module.exports = USER_CONFIG

