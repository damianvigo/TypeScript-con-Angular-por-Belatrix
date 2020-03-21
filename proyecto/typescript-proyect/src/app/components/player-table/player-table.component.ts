import { PlayerService } from './../../services/player.service';
import { Player } from './../../interfaces/player';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent implements OnInit {
  public players$: Observable<Player[]>;
  public selectedPlayer: Player;
  public showModal = false;

  constructor(private PlayerService: PlayerService) { }

  ngOnInit() {
    this.players$ = this.PlayerService.getPlayers();
  }

  newPlayer() {
    this.showModal = true;
    this.selectedPlayer = null;
    setTimeout(() => {
      window.location.replace('#open-modal');
    });
  }

}
