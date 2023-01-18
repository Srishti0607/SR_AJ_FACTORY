export class Book {
	constructor( name: string,  category: string){
		this.name = name;
		this.category = category;
	}

	name:string;
	category:string
}

export class FakeBook {
	public getBooks() {
	  let books: Book[];
  
	  books = [
		new Book('Chota Bheem', 'Cartoon')
	  ];
  
	  return books;
	}
  }