import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // numbers = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {

    let numbers = [1,2,3,4];
  for(let num of numbers){
      console.log(num);
  }
  
  let obj={
      name: 'selva',
      age: 34
  };
  
  for(let res in obj){
      console.log(res);
  }

  //Array Destructuring

  //Ex-1
  let ArrayDes = [1,2,3];
  //let[a,b,c] = ArrayDes;
  //let [a, ...b] = ArrayDes;
  let[a,,b] = ArrayDes; //want to c value stored in b 
  console.log(a);
  console.log(b);
  //console.log(c);

  //Ex-2 - Array swapping
  let aa = 1; 
  let bb = 2;
  [bb,aa] = [aa,bb];
  console.log(aa);
  console.log(bb);

  //Object Destructuring
  let objDes = {
    name: "Kumar",
    myAge:34,
    hello: function(){
      console.log('hello gskumar');
    }
  //let {name, hello} = objDes;
 // console.log(myAge);
};
  //hello();
  }
}

