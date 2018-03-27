$(document).ready(function () {

   var images = [
       'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/482556_797721873587818_912503003_n.jpg?_nc_cat=0&oh=32b218085f61e14eaac5efdafee3a398&oe=5B380543',
       'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/264362_637993399560667_1435059748_n.jpg?_nc_cat=0&oh=66fbc38303982b4fab2297fecbcc997b&oe=5B3289D5',
       'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/255478_510450038981671_1567445803_n.jpg?oh=a0302d95290a85b3af8402aa6682a2e8&oe=5B2FC1D1',
       'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/404313_381920401834636_374595772_n.jpg?_nc_cat=0&oh=1ab78ea52cb0a985b1a78550f5a22718&oe=5B72A8A4',
       'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/228193_223009124392432_2254282_n.jpg?_nc_cat=0&oh=207fb09bac29ab0765fd8f11a2c3352f&oe=5B6DB180',
       'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/12507192_1240682235958444_2155802837189658540_n.jpg?oh=2232d0b86d35567d9d4d8e34f156d6e9&oe=5B72A1CF',
       'https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/10492532_902205623139442_1196565225083864110_n.jpg?_nc_cat=0&oh=b43e5e84a667cf9a538a7938dd57a22d&oe=5B732BE8',
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
        return images[Math.floor(Math.random() * 6)];
   }

    /**
     * O metodo é reexecutado quando alguem elemento é adicionado no DOM
     * no caso o facebook no scrool insere as imagens dinamicamente, entao o plugin refaz o processo de fazer replace das imagens
     */
    $("body").bind("DOMNodeInserted", function () {
        replaceImages();
    });


});