// extends laiendab person classi -> koik person classis tuleb kaasa

class Student extends Person{

     constructor(name,group) {
       // Person on student super --> vanem klass, student on personi laps

         super(name);
         this.group = group;
     }

     greeting() {
         if(this.group === undefined){
             super.greeting();
         } else {
             console.log('Hi! I am ' + this.name + 'Iam from ' + this.group);
         }

     }

}