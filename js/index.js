(function (MS) {
    console.log("OK");
    function require(name) {
        var module = { exports: {} };
        MS[name].call(module.exports, require, module, module.exports);

        return module.exports;
    }

    var md = require("MdInit")();

    /*  TEST

    var helloModule = require("Hello");
    console.log(helloModule);
    helloModule.Hello();
    helloModule.OK();

    console.log(md.render('# TEST!')); 

    */

    $(function () {
        $("#paper").on("keyup paste cut mouseup", function () {
            window.htmlStr = md.render($(this).val());
            $("#html").html(htmlStr);
        });

        $(".btn-preview").on("click", function () {
            $(".write-zone").addClass("write-zone-toggle");
            $(".preview-zone").css("visibility", "visible");
        })
    })

})({
    "Hello": function M1(require, module, exports) {

        console.log(this);

        this.Hello = function () {
            console.log("Hello");
        }

        module.exports.OK = function () {
            console.log("OK");
        }
    }
    ,
    "Main": function Main(require, module, exports) {

    }
    ,
    "MdInit": function MdInit(require, module, exports) {
        module.exports = function () {
            return window.markdownit();
        }
    }
})
