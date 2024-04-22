// class Person{
//     name:string
//     age:number

//     introduce():void{
//     console.log(`Привет,меня зовут ${name}`)
//     }
// }

// let person=new Person()
// person.name="lili"
// person.age=17

// person.introduce()

//////////


// class Person{
//     name:string
//     age:number

//     constructor(name:string,age:number){
        
//         this.age=age;
//         this.name=name;
//     }

//     taltkAboutCourse():void{
//         console.log()
//     }

// }

// class Student extends Person{
//     course:number
 
//     constructor(name:string,age:number,course:number){
//         super(name,age)
//         this.course=course
//     }

//     taltkAboutCourse():void{
//         console.log(`Я учусь на ${this.course} курсе`)
//     }
// }


// let person=new Student("lili",17,2)
// person.taltkAboutCourse()

////////////////


// class Person{
//     name:string
//     age:number

//     constructor(name:string,age:number){
        
//         this.age=age;
//         this.name=name;
//     }

//     taltkAboutCourse():void{
//         console.log(`Я учусь на курсе`)
//     }
    

// }

// class Student extends Person{
//     course:number
 
//     constructor(name:string,age:number,course:number){
//         super(name,age)
//         this.course=course
//     }

    

//     taltkAboutCourse():void{
//         super.taltkAboutCourse()
//         console.log(`привет,меня зовут ${this.name}.Я студент ${this.course} курса`)
//     }

// }


// let person=new Student("lili",17,2)
// person.taltkAboutCourse()






/////////////



class Animal{
    name:string
    age:number

    constructor(name:string,age:number){
        this.age=age;
        this.name=name;
    }
    speak():void{
        console.log("Unknown sound...");
        
    }
}


class Dog extends Animal{
    
    constructor(name:string,age:number){
        super(name,age)
        
    }
    speak():void{
        super.speak()
        console.log("woof,woof!");
        
    }

}

let dog=new Dog("bufffi",2)
dog.speak()





class Cat extends Animal{
    constructor(name:string,age:number){
        super(name,age)
        
    }
    speak():void{
        super.speak()
        console.log("meow,meow!");
        
    }

}

let cat=new Cat("belish",5)
cat.speak()

