import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './comment.service';
import * as io from 'socket.io-client';
import { Icomment } from '../../../Interfaces/Icomment'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() passedId:number;
  commentList: Icomment[];
  comment:string;
  url:string = 'https://peaceful-reef-13737.herokuapp.com';
  private socket;


  constructor(private commentService: CommentService) { }

  ngOnInit() : void {

    this.socket = io(this.url);
    this.getComments();

    this.socket.on('new-comment', () => {
      this.getComments();
    });
  }

  /**
   * get comments onInit
   */
  getComments():void {

    this.commentService.getCommentsOfSmoothie(this.passedId).subscribe(comments => {
      this.commentList = comments;
    });
  }

}
