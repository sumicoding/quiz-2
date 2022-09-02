class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');

     contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
     })


    // contestantCountRef.on("value",()=>{
    //   contestantCount = data.val();
    // })

    // contestantCountRef.on("value",(data)=>{
    //   contestantCount = data();
    // })

  }

  updateCount(count){
    // database.ref('/').update({
    //   count: contestantCount - x
    // });


    // database.ref('/').update({
    //   contestantCount: 0 - x
    // });


    // database.ref('').update({
    //   contestantCount: counts - x
    // });


     database.ref('/').update({
       contestantCount: count 
     });

  }

 
}