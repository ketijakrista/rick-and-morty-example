/* eslint-disable */
import { Component, Input, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterService } from '../../services/character.service';
import { Observable } from 'rxjs';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-modal-bootstrap',
  templateUrl: './modal-bootstrap.component.html',
  styleUrls: ['./modal-bootstrap.component.scss'],
})
export class ModalBootstrapComponent {
  @ViewChild('content') content: any;

  character$?: Observable<Character>;

  constructor(private modalService: NgbModal, private characterService: CharacterService) {}

  set id(value: number) {
    this.character$ = this.characterService.getCharacter(value);
  }

  openVerticallyCentered(id: number): void {
    this.id = id;
    this.modalService.open(this.content, { centered: true });
  }
}
