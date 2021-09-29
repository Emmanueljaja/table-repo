let table = document.getElementById('tables');



const persons = 
[

    {
    
        "name": 'Mr Kenny',
        "email": 'kenny@gmail.com',
        "phone": '080356894',
        "state": 'kaduna',
        "level": 'C.E.O, S.Senior Devs',
    },
    {
        "name": 'Esther',
        "email": 'esther@gmail.com',
        "phone": '080356894',
        "state": 'Akwa-ibom',
        "level": 'project-Manager',
    },
    {
        "name": 'Michael',
        "email": 'michael@gmail.com',
        "phone": '080356894',
        "state": 'ibadan',
        "level": 'Senior developer',
    },
    {
        "name": 'Mr Afah',
        "email": 'afah@gmail.com',
        "phone": '080356894',
        "state": 'osun',
        "level": 'Angular pro',
    },
    {
        "name": 'Phoenix',
        "email": 'phoenix@gmail.com',
        "phone": '080356894',
        "state": 'Rivers',
        "level": 'Executioner',
    },
    {
        "name": 'Taofeek',
        "email": 'taofeek@gmail.com',
        "phone": '080356894',
        "state": 'osun',
        "level": 'Angular master',
    },
    {
        "name": 'olawale',
        "email": 'olawale@gmail.com',
        "phone": '080356894',
        "state": 'ilorin',
        "level": 'Silent Killer',
    },
    {
        "name": 'Godswill',
        "email": 'godswill@gmail.com',
        "phone": '080356894',
        "state": 'imo',
        "level": 'Developer',
    },
    {
        "name": 'Fowosere',
        "email": 'fowosere@gmail.com',
        "phone": '080356894',
        "state": 'ekiti',
        "level": 'API consumer',
    }

];
console.log(persons);

//let persons=[]
 //localStorage.setItem('user', JSON.stringify(persons));


 

display()

function display(){
    table.innerHTML = ""
persons.forEach(people => {
    let v = persons.indexOf(people)
    console.log(v)
    table.innerHTML+= `
    

        
        <tr>
            
            <td>${v+1}</td>
            <td>${people.name}</td>
            <td>${people.email}</td>
            <td>${people.phone}</td>
            <td>${people.state}</td>
            <td>${people.level}</td>
            <td><button class="btn btn-danger" onClick="del(${v})">Delete</button></td>
            
        </tr>
        </tbody>
  
    
    `
    
});
}
function del(i){
    persons.splice(i,1);
    //localStorage.setItem('user', JSON.stringify(persons))
    display()
}