let studnet= [
    {name:"abhi",age:22,email:"abhi@gmail.com"},
    {name:"dinesh",age:20,email:"dinesh@gmail.com"},
]

function studentDetails(st){
    for(let i=0; i<st.length; i++){
    console.log(`Name : ${st[i].name} Age : ${st[i].age} Email : ${st[i].email}`)
    }
}
studentDetails(studnet)