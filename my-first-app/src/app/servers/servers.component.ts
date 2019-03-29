import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', 
  //selector: '.app-servers',
  selector: 'app-servers',
  //templateUrl: './servers.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];
  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ' + this.serverName;
  }

  onUpdateServerName(){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
