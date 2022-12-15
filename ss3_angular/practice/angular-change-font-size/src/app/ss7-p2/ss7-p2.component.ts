import { Component, OnInit } from '@angular/core';
import {SongService} from './service/song.service';
import {Song} from './model/song';

@Component({
  selector: 'app-ss7-p2',
  templateUrl: './ss7-p2.component.html',
  styleUrls: ['./ss7-p2.component.css']
})
export class Ss7P2Component implements OnInit {
  playlist: Song[] = [];
  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.getAll();  }

  getAll() {
    this.playlist = this.songService.playlist;
  }

}
