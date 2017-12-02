import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-add-comment',
  templateUrl: 'add-comment.component.html',
  styleUrls: ['add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() idSmoothie;

  comment = '';
  rating: number = 5;

  private socket;

  url = 'http://localhost:3100';

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.socket = io(this.url);
  }

  addComment(){
    var comment = {
      'idUser': 2,
      'idSmoothie': this.idSmoothie,
      'content': this.comment,
      'rating': this.rating};

    this.commentService.addComment(comment).subscribe(res => {
      var res = res;
    });

    setTimeout(function(){
      this.socket.emit('add-comment', comment);
    }, 1);

  }

}
