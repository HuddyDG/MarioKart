//var percentages = [25,25,15,15,10];
//var percentage = percentages[Math.floor(Math.random() * percentages.length)];
const items = ["Banana", "GreenShell", "Star", "GoldenMushroom", "BulletBill"];

var TotalAmounts = {
    Banana:0,
    GoldenMushroom: 0,
    Star: 0,
    Bullet: 0,
    GreenShell: 0
}

function Roll(){
    var n = prompt("Enter a number of iterations.");
    var pos = prompt("Enter a Position.");
    for(i = 0; i < n; i++){

        var percentage = Math.random();
        console.log(percentage);
        if(pos <= 6){
            console.log("10%")
    
            if(percentage >= 0.55 && percentage < 0.65){
                //banana
                item = items[0];
                console.log(item);
                document.getElementById("displayItem").src="Images/"+item+".png";
                TotalAmounts.Banana++;
            }
            else if(percentage >= 0.65 && percentage < 0.85){
                item = items[1];
                console.log(item);
                document.getElementById("displayItem").src="Images/"+item+".png";
                TotalAmounts.GreenShell++;
            }
            else if(percentage >= 0.85 && percentage < 0.96){
                item = items[2];
                console.log(items);
                document.getElementById("displayItem").src="Images/"+item+".png";
                TotalAmounts.Star++;
            }
            else if(percentage >= 0.96 && percentage < 0.99){
                item = items[3];
                console.log(item);
                document.getElementById("displayItem").src="Images/"+item+".png";
                TotalAmounts.GoldenMushroom++;
            }
            else{
                item = items[4];
                console.log(item);
                document.getElementById("displayItem").src="Images/"+item+".png";
                TotalAmounts.Bullet++;
            }

        }
        else{
            if(percentage >= 0.65 && percentage > 0.70){
                item = items[3];
                console.log(item);
                document.getElementById("displayItem").src="Images/"+item+".png";
                TotalAmounts.GoldenMushroom++;

            }
            else if(percentage >= 0.70 && percentage < 0.75){
                item = items[4];
                console.log(item);
                document.getElementById("displayItem").src="Images/"+item+".png";
                TotalAmounts.Bullet++;
            }
            else if(percentage >= 0.75 && percentage < 0.95){
                item = items[2];
                console.log(item);
                document.getElementById("displayItem").src="Images/"+item+".png";
                TotalAmounts.Star++;

            }
            else if(percentage >= 0.95){
                item = items[Math.floor(Math.random() * (2 - 0) + 0)];
                console.log(item);
                document.getElementById("displayItem").src="Images/"+item+".png";
                TotalAmounts.Banana++;
            }
        }
    }    
    document.getElementById("totalBanana").innerHTML = TotalAmounts.Banana;
    document.getElementById("totalMushroom").innerHTML = TotalAmounts.GoldenMushroom;
    document.getElementById("totalStar").innerHTML = TotalAmounts.Star;
    document.getElementById("totalShell").innerHTML = TotalAmounts.GreenShell;
    document.getElementById("totalBullet").innerHTML = TotalAmounts.Bullet;
}

function Reset(){
    document.getElementById("displayItem").src="Images/mysterybox.png";
    var TotalAmounts = {
        Banana:0,
        GoldenMushroom: 0,
        Star: 0,
        Bullet: 0,
        GreenShell: 0
    }
    document.getElementById("totalBanana").innerHTML = TotalAmounts.Banana;
    document.getElementById("totalMushroom").innerHTML = TotalAmounts.GoldenMushroom;
    document.getElementById("totalStar").innerHTML = TotalAmounts.Star;
    document.getElementById("totalShell").innerHTML = TotalAmounts.GreenShell;
    document.getElementById("totalBullet").innerHTML = TotalAmounts.Bullet;
        
}