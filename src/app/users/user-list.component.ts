import { Component, OnInit } from "@angular/core";
import { HealthcareDataService } from "../services/healthcare-data.service";
import { HealthcareUser } from "../models/healthcare-user";

@Component({
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
    users: HealthcareUser[];

    constructor(private data: HealthcareDataService) {}
    ngOnInit(): void {
        this.data.GetUsers().subscribe(userList => {
            console.log(userList);
            this.users = userList;
        })
    }
}