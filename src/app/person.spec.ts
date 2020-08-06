import { Person } from './person';

describe('Test for person', () => {
    let person: Person;

    //Arrange
    beforeEach(() => {
        person = new Person(
            'nicolas',
            'molina',
            23,
            40,
            1.65
        );
    });

    describe('test for data', () => {
        it('attributes', () => {
            //Act && Assert

        })

    });

    describe('test for calcBMI', () => {
        it('should return a string: down', () => {
            
        });

        it('should return a string: normal', () => {
            
        });

        it('should return a string: overweight', () => {
            
        });

        it('should return a string: overweight level 1', () => {
            
        });

        it('should return a string: overweight level 2', () => {
            
        });

        it('should return a string: overweight level 3', () => {
            
        });

        it('should return a string: no found', () => {
            
        })
    });
});