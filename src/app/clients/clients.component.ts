import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.sass']
})
export class ClientsComponent implements OnInit {

  client: Client = {
    id: 1,
    name: 'client a'
  };

  constructor() { }

  ngOnInit() {
  }
}
