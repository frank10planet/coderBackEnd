const usuario = {
    name: 'francisco',
    lastName : 'cano',
    libros: ['Juana de arco', 'El Psicoanalista'],
    mascotas : ['gato','tortuga'],
    getFullName ( name, lastName){
        return `${this.name} ${this.lastName}`

    },           
     addMascotas(name){
        this.mascotas.push(name)
     },

     getBooks() {
        return this.libros.length    
     }
};

console.log(usuario.getFullName());
console.log(usuario.getBooks());
console.log(usuario.addMascotas('loro'));
  

class Usuario {
    constructor(name, lastName, libros, mascotas){
        this.name = name,
        this.lastName = lastName,
        this.libros = ['Juana de arco', 'El Psicoanalista'],
        this.mascotas =  ['gato','tortuga']
    }
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
    addMascotas(){
        return this.mascotas.push('loro')
    }
    getBooks(){
        return this.libros.length
    }
}