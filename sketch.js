let airfields =[];
let currentCraft = 0;

function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);
    airfields.push(new Airfield({
        airFieldWidth:150,
        airFieldHeight:150,
        airFieldPosX:175,
        airFieldPosY:175
    }))
}

function draw(){
    background(52,52,52)

    airfields[0].renderAirfield()
    airfields[0].renderCrafts()
    airfields[0].moveCrafts()
    airfields[0].checkDist()
}

function keyPressed() {
    switch(key){
        case '1': currentCraft=1;break;
        case '2': currentCraft=2;break;
        case '3': currentCraft=3;break;
        case '4': currentCraft=4;break;
        case '0': currentCraft=5;break;
    }


    console.log(key)
    if(key=="W"){
        airfields[0].crafts[currentCraft].addSpeed()
    }
    if(key=="S"){
        airfields[0].crafts[currentCraft].lessSpeed()
    } 
    if(key=="D"){
        airfields[0].crafts[currentCraft].turnRight()
    }
    if(key=="A"){
        airfields[0].crafts[currentCraft].turnLeft()
    }
    
}

