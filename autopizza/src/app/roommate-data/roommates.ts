import { Injectable } from '@angular/core';

export interface Roommate {
    name: string;
    profilePhotoUrl: string;
    order: string[];
}

@Injectable()
export class Roommates {
    static Arwen = {
        name: 'Arwen Wright',
        profilePhotoUrl: './profile-photos/jack.jpeg',
        order: []
    } as Roommate;

    static Deia = {
        name: 'Deia Puri',
        profilePhotoUrl: './profile-photos/jack.jpeg',
        order: []
    } as Roommate;

    static Ed = {
        name: 'Edward Drummond',
        profilePhotoUrl: './profile-photos/jack.jpeg',
        order: []
    } as Roommate;

    static Gemma = {
        name: 'Gemma Broadley',
        profilePhotoUrl: './profile-photos/jack.jpeg',
        order: []
    } as Roommate;

    static Jack = {
        name: 'Jack Stadnyk',
        profilePhotoUrl: './profile-photos/jack.jpeg',
        order: []
    } as Roommate;

    static Jackson = {
        name: 'Jackson Gayda',
        profilePhotoUrl: './profile-photos/jack.jpeg',
        order: []
    } as Roommate;

    static Mike = {
        name: 'Michael Shilliday',
        profilePhotoUrl: './profile-photos/jack.jpeg',
        order: []
    } as Roommate;

    static Sietske = {
        name: 'Sietske De Keijzer',
        profilePhotoUrl: './profile-photos/jack.jpeg',
        order: []
    } as Roommate;

    private roommateList = [
        Roommates.Arwen,
        Roommates.Deia,
        Roommates.Ed,
        Roommates.Gemma,
        Roommates.Jack,
        Roommates.Jackson,
        Roommates.Mike,
        Roommates.Sietske,
    ];

    get asList() {
        return this.roommateList;
    }
}
