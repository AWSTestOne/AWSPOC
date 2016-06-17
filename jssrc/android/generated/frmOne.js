function addWidgetsfrmOne() {
    frmOne.setDefaultUnit(kony.flex.DP);
    var Label0f5ebd699475a41 = new kony.ui.Label({
        "id": "Label0f5ebd699475a41",
        "isVisible": true,
        "left": "86dp",
        "skin": "slLabel",
        "text": "Login Successful",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "107dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    frmOne.add(
    Label0f5ebd699475a41);
};

function frmOneGlobals() {
    frmOne = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmOne,
        "enabledForIdleTimeout": false,
        "id": "frmOne",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};