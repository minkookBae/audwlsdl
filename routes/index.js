var express = require('express');
var router = express.Router();
var FCM = require('fcm-node')
var fcm = new FCM("AAAAQGZE9g4:APA91bHN9roJWD7DFiMzwc2t6xj7Yxh13lvnHjBAWHdhiuLUn40vFf3WUs6QHWGvcGZk_47wyT1ACeyuPocmBp6jsXDMWnsSyfNnj9ApGyavL8lsnm9iBzGkydLNTdIud3pdyUOsnucT")

/* GET home page. */
router.post('/push', (req,res) => {
    var client_token = req.body.token
    console.log(req.body)
    const result = {}
        /** 발송할 Push 메시지 내용 */
        const push_data = {
            to: client_token,
            notification: {
                title: "기가지니로 부터 알림이 도착하였습니다.",
                body: "김약자 님이 비상상황입니다. 신속한 조치가 필요합니다.",
                sound: "default",
                click_action: "FCM_PLUGIN_ACTIVITY",
                icon: "fcm_push_icon"
            }
        }

        fcm.send(push_data, function (err, response) {
            if (err) {
                console.error(err)
                result.message = '메세지 발송에 실패했습니다.'
                return res.json(result)
            }

            console.log(response.results)
            result.message = "Push메세지가 발송되었습니다."
            res.render('push')
        })

        const push_data2 = {
            to: "dyyx4MFo1-8:APA91bG-2j6_aWFCFEFnhHfHy7aZmOv0qaXlPQBSEVxw9UU2bN6i6tnbhdhrYUObKicyXySI1lZGd_srkIhw4LG95Zn0o4-lIgClq2kYzT01O5x5jWpLrE4srewv3xWMcou4mpwu8kLY",
            notification: {
                title: "기가지니로 부터 알림이 도착하였습니다.",
                body: "김약자 님이 비상상황입니다. 신속한 조치가 필요합니다.",
                sound: "default",
                click_action: "FCM_PLUGIN_ACTIVITY",
                icon: "fcm_push_icon"
            }
        }

        fcm.send(push_data2, function (err, response) {
            if (err) {
                console.error(err)
                result.message = '메세지 발송에 실패했습니다.'
                return res.json(result)
            }

            console.log(response.results)
            result.message = "Push메세지가 발송되었습니다."
            res.render('push')
        })



        const push_data3 = {
            to: "eRHTQdt1z44:APA91bEyjCoM9bXYtXPYv4-GMt_Cq63aQjKh0X-bFC6p7sDdHB0dPbXNticmvKuKKK7d6h5cy8fa8BqBiwJydFCUAaVRPb3o4iBOfrUcnXd1a7nTiieHx65bmJWzG9u-mzodMyMoOa7C",
            notification: {
                title: "기가지니로 부터 알림이 도착하였습니다.",
                body: "김약자 님이 비상상황입니다. 신속한 조치가 필요합니다.",
                sound: "default",
                click_action: "FCM_PLUGIN_ACTIVITY",
                icon: "fcm_push_icon"
            }
        }



        fcm.send(push_data3, function (err, response) {
            if (err) {
                console.error(err)
                result.message = '메세지 발송에 실패했습니다.'
                return res.json(result)
            }

            console.log(response.results)
            result.message = "Push메세지가 발송되었습니다."
            res.render('push')
        })
});

module.exports = router;
