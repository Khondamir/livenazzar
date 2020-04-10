
var app = angular.module("Nazzar-App", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "body-pages/main.html"
    })
    .when("/images", {
        templateUrl : "body-pages/after-video-upload.html"
    })
    .when("/success", {
        templateUrl : "body-pages/video-send-success.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});


$(document).on('input','#inputGroupFile02', function () {

  $(".progress").attr('style', 'height: 3px;');
  $("#changeUploadHeader").html("ПОДОЖДИТЕ, ВИДЕО ЗАГРУЖАЕТСЯ");
  $("#inputFileLabel").attr('style', 'background-color: #ddd !important; border: none !important; box-shadow: none !important;');
  window.setTimeout(function(){  progressBarUpload();}, 1000);


}); 

$(document).on('click','.image-div img', function(){
    var currentImg = this.id;
    $(".image-div img").css('opacity', '0.2');
    $("#"+currentImg+"").css('opacity', '1');

});

function progressBarUpload() {
    // body...

        var width = (1 / 10 * 100);
        for (var filled = 1; filled <= 10; filled++) {
            $("#progressBar").attr( 'style', 'width:'+(width * filled)+'%;');
            
        }

        window.setTimeout(function(){window.location.href = "#!images";}, 1000);

}