import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import * as io from 'socket.io-client';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-comment',
  templateUrl: 'add-comment.component.html',
  styleUrls: ['add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() idSmoothie: number;

  comment : string = '';
  rating: number = 5;
  idUser: string;

  private socket;

  url : string = 'https://peaceful-reef-13737.herokuapp.com';

  constructor(private commentService: CommentService, private cookieService: CookieService) { }

  ngOnInit() : void {
    this.socket = io(this.url);
    this.idUser = this.cookieService.get('userID');
  }

  /**
   * add a comment to the current shown smoothie and send an emit event to the server for real-time-communication
   */
  addComment() : void {

    if (this.cookieService.check('userID')) {
      console.log(this.idUser);
      var comment = {
        'idUser': this.idUser,
        'idSmoothie': this.idSmoothie,
        'content': this.comment,
        'rating': this.rating
      };

      this.commentService.addComment(comment).subscribe(res => {
        var res = res;
      });

      // emit the add-comment-event to the server
      setTimeout(function () {
        this.socket.emit('add-comment', comment);
      }, 1);
    } else {
      alert('you are not logged in. Please login for posting a comment.');
    }

  }

}
