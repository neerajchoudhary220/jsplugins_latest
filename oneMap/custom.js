$(document).ready(function () {

    function Cloud(search) {
        $.ajax({
            url: `https://developers.onemap.sg/commonapi/search?searchVal=${search}&returnGeom=Y&getAddrDetails=Y&pageNum=1`,
            beforeSend: function () {

            },
            success: function (result) {


                var html='';
                for (var i = 0; i < result.results.length; i++) {
                    console.log(result.results[i].ADDRESS);
                    if (result.results[i].ADDRESS != undefined) {
                        html += `<div class="result mb-2">
                        <span>${result.results[i].ADDRESS}</span>
                    </div>`;
                        $("#result").html(html);
                    }


                }

            },
        });
    }

    $("#searchVal").on("input", function () {

        var searchVal = $(this).val().toLowerCase();
        Cloud(searchVal);


        // $(".result span").filter(function(){
        //     $(this).toggle($(this).text().toLowerCase().indexOf(searchVal)>-1);
        // })
    });
})