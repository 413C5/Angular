export interface Passenger {
	name: string;
	children?: string[];
}

const passenger1: Passenger = {
	name: 'Alejandro',
};

const passenger2: Passenger = {
	name: 'Jesse',
	children: ['Combo', 'Crazy-8'],
};

const returnChildrenNumber = (passenger: Passenger): number => {
	const howManyChildren=passenger.children?.length || 0 //In case children is undefined

	//const howManyChildren = passenger.children!.length || 0; //When using ! we mean that it will always appear

	console.log(passenger.name, ' ', howManyChildren);

	return howManyChildren;
};

returnChildrenNumber(passenger1);
