function Filter(id){
    var ids = ["1", "2", "3"];
    document.getElementById(id).style.display = "block";
    ids.splice(parseInt(id)-1, 1);

    var arrayLength = ids.length;
    for (var i = 0; i < arrayLength; i++) {
    document.getElementById(ids[i]).style.display = "none";
    }  
}

function ImageViewer(){
    document.querySelectorAll('.column img').forEach(image => {
        image.onclick = () =>{
            document.querySelector('.popup-container').style.display = "block";
            document.querySelector('.popup-container img').src = image.getAttribute('src');
        }
    });

    document.querySelector('.popup-container span').onclick = () => {
        document.querySelector('.popup-container').style.display = "none";
    }
}

function LoadImages(category){

    if (category == "photography"){
        var images = ["hynek-janac-TvyKyjScdnw-unsplash.jpg", "hynek-janac-LoMwR9vlTyM-unsplash.jpg","hynek-janac-qv1GS2KEIv8-unsplash.jpg" ,"hynek-janac-YQq8ED4npAI-unsplash.jpg","hynek-janac-YbPNJApjADk-unsplash.jpg" ,"hynek-janac-Ftou-F3CK_8-unsplash.jpg" ,"hynek-janac-ipPC6RbhH8Y-unsplash.jpg" ,"hynek-janac-kF9rVegUve8-unsplash.jpg" ,"hynek-janac-g5k7mNG4hSc-unsplash.jpg" ,"hynek-janac-0gesH0xTN6U-unsplash.jpg" ,"hynek-janac-0hCmelfAFio-unsplash.jpg" ,"hynek-janac-2eFAo-gciro-unsplash.jpg" ,"hynek-janac-7TtfWHPn7S4-unsplash.jpg" ,"hynek-janac-a5_xNztY8C0-unsplash.jpg" ,"hynek-janac-B6_cRQYsuYA-unsplash.jpg" ,"hynek-janac-BmxDMt1Uxl8-unsplash.jpg" ,"hynek-janac-e7cbKMh5-yw-unsplash.jpg" ,"hynek-janac-F9bsLdr0VAI-unsplash.jpg" ,"hynek-janac-fvROVcUsAKA-unsplash.jpg" ,"hynek-janac-GcSyX_fkyzQ-unsplash.jpg" ,"hynek-janac-hq2G6mbeQqw-unsplash.jpg" ,"hynek-janac-j-Gz1LEyYQQ-unsplash.jpg" ,"hynek-janac-k_1wCbigSY4-unsplash.jpg" ,"hynek-janac-l8N4GdfXEFs-unsplash.jpg" , "hynek-janac-nTlRTrjGgyc-unsplash.jpg" ,"hynek-janac-nvZhKYhlFuM-unsplash.jpg" ,"hynek-janac-oVT2TMTeuNo-unsplash.jpg" ,"hynek-janac-Pdt95O33Nb4-unsplash.jpg" ,"hynek-janac-rmWORSUWO-4-unsplash.jpg" ,"hynek-janac-vjZ9ex4kxp8-unsplash.jpg" ,"statue-6861292.jpg" ,"hynek-janac-tXBVpMeDo04-unsplash.jpg" ,"hynek-janac-EN6JxTBdgzA-unsplash.jpg" ,"hynek-janac-lnO3YHtq2rk-unsplash.jpg" ,"hynek-janac-qSK3rrvBDg4-unsplash.jpg" ,"hynek-janac--wXVJ-Us0Go-unsplash.jpg" ,"hynek-janac-xSexrcNB5Hg-unsplash.jpg" ,"instrument-6864653.jpg" ,"backpack-6864611.jpg" ,"bee-7132723.jpg" ,"cow-6861283.jpg" ,"fence-7136883.jpg" ,"flowers-6861278.jpg" ,"fruit-6861284.jpg"];
        var columnId = "photo-column-";
    }
    if (category == "design"){
        var images = ["PLES poster.jpg","PLES ticket.jpg","PLES bulletin.jpg", "PLES badge.jpg", "Snacks.jpg", "Tyjátr.jpg" , "Papilio - magazine (1).jpg","Papilio - magazine (2).jpg","Papilio - magazine (3).jpg","Papilio - Poster Red.jpg", "Playing Cards Set 2.jpg","Playing Cards Set 1.jpg","Lednacek.jpg" ,"Butterfly - collage (1).jpg" ,"Butterfly - collage (2).jpg"  ,"Butterfly - collage (4).jpg" ,"Butterfly - collage (5).jpg" ,"Butterfly - collage (6).jpg","Butterfly - collage (3).jpg","Bryle.jpg" ,"FindYourPeak - Red.jpg",  "Local folklore.jpg","Memento Arbores.jpg", "ArtCannotBeCensored -  KLIMT.jpg","ArtCannotBeCensored -  Lisa.jpg","ArtCannotBeCensored -  Pearl.jpg", "Mika Lollipop - Vinyl cover.jpg","Rainforest.jpg", "I want to breath lungs.jpg","Copper city.jpg"];
        var columnId = "design-column-";
    }
    if (category == "blender"){
        var images = ["hynek-janac-vOxz5F-zjgo-unsplash.jpg" ,"Teddy Bear.jpg","Tetrisfactory.jpg","Lava.jpg", "PF candidate.jpg" ,"Experiment num 52 _Hynek Janac final.jpg" ,"Seadragon (1).jpg"
        ,"Seadragon (2).jpg","Future end.jpg" ,"mars.jpg" ,"Space nebula blue.jpg","Space nebula.jpg","Space station.jpg","Blue.jpg" ,"Grass sphere (1).jpg","Grass sphere (2).jpg","Grass sphere (3).jpg","Grass sphere (4).jpg","Grass sphere (5).jpg","Grass sphere (6).jpg","Flats (1).jpg","Flats (2).jpg","Procedural rocks.jpg","Procedural rocks.jpg","Red_Hynek_Janac_2019.jpg"];
        var columnId = "blender-column-";
    }

    var width = window.innerWidth
    // Arrays full of images
    
    
    var column = 0;
    for (var i = 0; i < images.length; i++){

        var image = '<img src="./Img/Gallery/' + images[i]  + '" alt="">'
        var column = column + 1; 
        console.log(column)
        document.getElementById( columnId + String(column)).innerHTML += image; 
        
        if(width <= 1159){
            if(column==2){
                column = 0
            }
        }
        if(width <= 712){
            if(column==1){
                column = 0
            }
        }
        if(width >= 1159){
            if(column==3){
                column = 0
            } 
        }

    ImageViewer()
}}

var LoadDesing = false
var Load3D = false

function NetworkHandler(category){
    if(category == "design" && LoadDesing == false ){
        LoadImages(category);
        LoadDesing = true;
    }
    if(category == "blender" && Load3D == false ){
        LoadImages(category);
        Load3D = true;
    }
}

LoadImages("photography")