import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created!";
  serverName : string = "";
  serverCreated : boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  // Update server text without ngModel and two way bind
  // onUpdateServerName (event: Event)
  // {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  onCreateServer() 
  {
    this.serverCreated = true;
    this.serverCreationStatus = `Server was created! Server name is ${this.serverName}`;
  }

}
