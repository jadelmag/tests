import { User } from "./skiptest";


// Using x before describe we can skip all test included inside
// Using x before it we can skip an specific test

xdescribe('Skip tests', () => {

    it ('Should return a User with a name and age', () => {
        const user = new User('Javier', 34);
        expect( user.name ).not.toBeNull();
        expect( user.age ).not.toBeNull();
    });

});
