$(document).ready(function () {
    var images = [
        chrome.extension.getURL('/images/image1.jpg'),
        chrome.extension.getURL('/images/image2.jpg'),
        chrome.extension.getURL('/images/image3.jpg'),
        chrome.extension.getURL('/images/image4.jpg'),
        chrome.extension.getURL('/images/image5.jpg'),
        chrome.extension.getURL('/images/image6.jpg'),
        chrome.extension.getURL('/images/image7.jpg'),
        chrome.extension.getURL('/images/image8.jpg'),
        chrome.extension.getURL('/images/image9.jpg')
    ];

   replaceImages();

   function replaceImages() {
       $('img').each(function (index, el) {
           if($(el).attr('replaced') == undefined ||$(el).attr('replaced') == null || $(el).attr('replaced') == '' || $(el).attr('replaced') == ' ' ){
               var imageUrl = getImage();
               $(el).attr('src', imageUrl);
               $(el).attr('replaced', 'replaced');
           }
       });
   }

   function getImage()
   {
        return images[Math.floor(Math.random() * (images.length - 1))];
   }

    /**
     * O metodo é reexecutado quando alguem elemento é adicionado no DOM
     * no caso o facebook no scrool insere as imagens dinamicamente, entao o plugin refaz o processo de fazer replace das imagens
     */
    $("body").bind("DOMNodeInserted", function () {
        replaceImages();
    });


});