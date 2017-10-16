import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreattionStatus  = 'No server was created';
	serverName = '';
  serverCreated = false;
  servers = ['Test Server'];

  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 500);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  	this.serverCreattionStatus = 'Server Was Created';
  }

  onUpdateServerName(event: any ) {
  	this.serverName = event.target.value;
  }

}