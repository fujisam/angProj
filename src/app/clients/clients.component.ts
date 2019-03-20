import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Clients } from '../clients.mock';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.sass']
})
export class ClientsComponent implements OnInit {

  clients = Clients;

  // client: Client = {
  //   id: 1,
  //   name: 'client a'
  // };

  selectedClient: Client;
  onSelect(client: Client): void {
    this.selectedClient = client;
  }

  constructor() { }

  ngOnInit() {
  }

}
