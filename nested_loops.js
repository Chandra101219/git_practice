for(let i=1;i<=5;i++){
  console.log(i);
for(let j=1;j<=5;j++){
  console.log(i);
}
} 


for(let day=1;day<=5;day++){
  console.log("day: ", day);
for(let farm=1;farm<=5;farm++){
  console.log("*");
}
} 


for(let far=1;far<=5;far++){
  console.log("farm: ", far);
  bag = "";
  for(let seed=1;seed<=5;seed++){
    bag = bag + "*"
}
  console.log(bag);
} 

for(let far=1;far<=5;far++){
  console.log("farm: ", far);
  bag = "";
  for(let seed=far;seed<=1;seed++){
    bag = bag + "*"
}
  console.log(bag);
}
 
for(let far=1;far<=5;far++){
  console.log("farm: ", far);
  bag = "";
  for(let seed=far;seed>=1;seed--){
    bag = bag + "*"
}
  console.log(bag);
}

for(let floor=1;floor<=5;floor++){
  console.log("floor: ", floor);
  for(let room=1;room<=5;room++){
    console.log("room: ", room);
}  
}

//skipping floor2 using continue better compared to break
for(let floor=1;floor<=5;floor++){
  if(floor==2){
    continue;
  }
  console.log("floor: ", floor);
  for(let room=1;room<=5;room++){
    console.log("room: ", room);
}  
}

//using break skipping floor
for(let floor=1;floor<=5;floor++){
    console.log("floor: ", floor);

  
  for(let room=1;room<=5;room++){
    if(room===2){
      break;
    }
    console.log("room: ", room);
  }  
}

//skipping room2 in each floor

for(let floor=1;floor<=5;floor++){  
  console.log("floor: ", floor);
  for(let room=1;room<=5;room++){
    if(room==2){
      continue;
    }
    console.log("room: ", room);
  }  
}


let num = 5;
for(let i=1; i<=num; i++){
  let string ="";
  for(let j=1;j<=num;j++){
    string = string + j + " ";
  }
  console.log(string);
}

let number = 5;
for(let i=1; i<=number; i++){
  let string ="";
  for(let j=1;j<=number;j++){
    string = string + "*" + " ";
  }
  console.log(string);
}


for(let i=1; i<=4;i++){
  let sum=0;
  for(let j=1; j<=i; j++){
    if(j%2==0){
      sum = sum + j;
    }
  }
  console.log(sum)
}


for(let i=1;i<=5;i++){
  sum = "";
  for(let j=1;j<=i;j++){
    sum = sum + "*"
}
  console.log(sum);
}

for(let i=1;i<=5;i++){
  sum = "";
  for(let j=5;j>=i;j--){
    sum = sum + "*"
}
  console.log(sum);
}


let a=1;
for(let i=1;i<=4;i++){
  let bag = "";
  for(let j=1;j<=4;j++){
    bag = bag + a + " "
    a++;
  }
console.log(bag);
}

console.log( "Hollow start pattern");
for(let i=1; i<=4; i++){
  let stars = "";
  for(let j=1;j<=4;j++){
    if(i==1 || i==4 || j==1 || j==4){
      stars =stars + "*" + " ";
    }
    else{
      stars =stars +" "+" "
    }
  }
  console.log(stars);
}

console.log( "E start pattern");

for(let i=1; i<=5; i++){
  let stars = "";
  for(let j=1;j<=5;j++){
    if(i==1 || i==5){
      stars =stars + "*" + " ";
    }
    else if(i == 2 || i == 4){
      stars = "*";
    }
    else{
      stars = stars + "*";
    }
  }
  console.log(stars);
}