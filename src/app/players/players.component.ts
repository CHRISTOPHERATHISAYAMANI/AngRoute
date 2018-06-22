import { Component, OnInit, OnDestroy } from '@angular/core';
import { Players } from '../players';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnDestroy {
playerList: Players[] = [
  {jersyNo: 1, playerName: 'Messi', country: 'Argentina', rating: '10'},
  {jersyNo: 10, playerName: 'Gayle', country: 'West Indies', rating: '27'},
  {jersyNo: 999, playerName: 'Kohli', country: 'India', rating: '1'},
  {jersyNo: 99, playerName: 'Dohni', country: 'India', rating: '9'}
];
sub: any;
jersyNo: Number;
playerName: string;
play: Players[];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params =>    {
this.jersyNo = +params['jersyNo'];
this.playerName = params['playerName'];


    });
  }
ngOnDestroy() {
  this.sub.unsubscribe();
}
showDetails(id) {
  this.play =  this.playerList.filter(x => x.jersyNo === this.jersyNo);
  console.log(this.play);
  this.router.navigate(['/showDetails', id]);
}
showPlayerName(name) {
  this.play =  this.playerList.filter(x => x.playerName.toString() === this.playerName);
  console.log('name: ', this.jersyNo, this.playerName,  this.play);
  this.router.navigate(['/showPlayerName', name]);
}
}
