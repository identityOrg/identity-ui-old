import {Component, OnInit} from '@angular/core';
import {ClientService} from '../service/client.service';
import {Client} from '../model/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    return this.clientService.listClients(null)
      .subscribe(data => {
        this.clients = data;
      }, err => {
        this.clients = [];
        console.log(err);
      });
  }

}
