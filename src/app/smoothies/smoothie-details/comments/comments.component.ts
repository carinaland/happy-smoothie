import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './comment.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  //todo change to interface
  commentList: any[];
  //@Input() idSmoothie;
  idSmoothie = 1;
  comment = 'jjj';
  private socket;
  url = 'http://localhost:3100';

  constructor(private commentService: CommentService) { }

  ngOnInit() {

    this.socket = io(this.url);
    this.getComments();

    this.socket.on('new-comment', () => {
      this.getComments();
    });
  }

  getComments(){

    this.commentService.getCommentsOfSmoothie(this.idSmoothie).subscribe(comments => {
      this.commentList = comments;
      console.log(this.commentList);
    });
  }

}
