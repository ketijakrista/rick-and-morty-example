import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Character, CharacterApiResponse } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<CharacterApiResponse> {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    return this.http.get<CharacterApiResponse>(url);
  }

  getCharacter(id: number): Observable<Character> {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    return this.http.get<Character>(url);
  }
}
