import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoommatesService {
    private Arwen = {
        firstName: 'Arwen',
        lastName: 'Wright',
        email: 'test@test.com',
        imageUrl: 'assets/profile-photos/jack_profile_photo.jpeg',
        defaultOrders: [],
    } as Roommate;

    private Deia = {
        firstName: 'Deia',
        lastName: 'Puri',
        email: 'test@test.com',
        imageUrl: 'assets/profile-photos/jack_profile_photo.jpeg',
        defaultOrders: [],
    } as Roommate;

    private Ed = {
        firstName: 'Edward',
        lastName: 'Drummond',
        email: 'test@test.com',
        imageUrl: 'assets/profile-photos/jack_profile_photo.jpeg',
        defaultOrders: [],
    } as Roommate;

    private Gemma = {
        firstName: 'Gemma',
        lastName: 'Broadley',
        email: 'test@test.com',
        imageUrl: 'assets/profile-photos/jack_profile_photo.jpeg',
        defaultOrders: [],
    } as Roommate;

    private Jack = {
        firstName: 'Jack',
        lastName: 'Stadnyk',
        email: 'test@test.com',
        imageUrl: 'assets/profile-photos/jack_profile_photo.jpeg',
        defaultOrders: [],
    } as Roommate;

    private Jackson = {
        firstName: 'Jackson',
        lastName: 'Gayda',
        email: 'test@test.com',
        imageUrl: 'assets/profile-photos/jack_profile_photo.jpeg',
        defaultOrders: [],
    } as Roommate;

    private Mike = {
        firstName: 'Michael',
        lastName: 'Shilliday',
        email: 'test@test.com',
        imageUrl: 'assets/profile-photos/jack_profile_photo.jpeg',
        defaultOrders: [],
    } as Roommate;

    private Sietske = {
        firstName: 'Sietske',
        lastName: 'De Keijzer',
        email: 'test@test.com',
        imageUrl: 'assets/profile-photos/jack_profile_photo.jpeg',
        defaultOrders: [],
    } as Roommate;

    roommateList = [
        this.Arwen,
        this.Deia,
        this.Ed,
        this.Gemma,
        this.Jack,
        this.Jackson,
        this.Mike,
        this.Sietske
    ];

    get asList() {
        return this.roommateList;
    }

  constructor() {}
}

export interface Roommate {
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
    defaultOrders: string[];
}
